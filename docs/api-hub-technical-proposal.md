# AI家AI户 API统一中转站 — 技术方案文档

> 版本：v1.0 | 日期：2026-07-02 | 作者：myaishome.com 技术团队

---

## 1. 项目概述

### 1.1 现状与瓶颈

AI家AI户（myaishome.com）当前定位为**AI模型信息聚合站**，覆盖44个模型/271个技能包/6大品类。纯静态站，零后端，零用户系统，零变现。

**核心瓶颈**：信息聚合变现空间极其有限。用户来网站比完模型就走了，转化路径只有"了解 → 跳转到官方 → 自行注册充值"，网站一分钱赚不到。

### 1.2 转型方向

从"告诉用户哪个AI好用"升级为"**帮用户一站式用好所有AI**"。

新增 **API统一中转站（API Hub）**，核心价值：

> 用户注册一个账号、充一次钱，用一个统一的API Key调用所有主流AI模型。不用在每个平台注册、不用管各家计费规则、不用维护5个Key。

### 1.3 核心卖点

| 痛点 | 方案 |
|------|------|
| 每个AI平台单独注册充值 | 一个账号搞定所有 |
| 各平台接口不兼容 | **100%兼容OpenAI SDK**，改一行代码切换 |
| 不知道哪个模型适合自己 | 在线Playground免费试3次 |
| 价格不透明、怕被坑 | 统一价目表，用多少扣多少 |
| 海外平台支付麻烦 | 支付宝/微信扫码充值 |

---

## 2. 用户操作流程

### 2.1 完整用户路径

```
浏览模型 → 看上某个 → 点「试用API」→ Playground在线测试
→ 满意 → 注册(20秒) → 充值(支付宝/微信) → 复制API Key
→ 代码里改一行 base_url → 开始用
```

### 2.2 三个转化入口

**入口一：模型浏览自然转化（主路径）**
- 模型详情页/对比表增加「试用API」按钮
- 点击跳转 Playground，预设该模型
- 未登录可免费测3次

**入口二：开发者直达（`/api`）**
- 统一价目表 + 代码示例（curl/Python/Node.js）
- 面向有经验的开发者，注册即用

**入口三：首页 CTA**
- Hero 区域「开发者API入口」
- 直接引流到 `/api`

### 2.3 用户仪表盘（`/dashboard`）

登录后展示：余额、本月用量（按模型拆分）、API Key管理、充值记录、快捷充值入口。

---

## 3. 系统架构

### 3.1 架构总览

```
┌─────────────────────────────────────────────────────┐
│                    用户浏览器                          │
│  myaishome.com (静态站 + Playground SPA)             │
└──────────────┬──────────────────┬───────────────────┘
               │ 页面请求          │ API调用
               ▼                   ▼
┌──────────────────────┐  ┌───────────────────────────┐
│  Cloudflare Pages    │  │  Cloudflare Worker         │
│  (现有静态站)         │  │  /api/v1/*                 │
│                      │  │  ┌─────────────────────┐  │
│  • 模型浏览          │  │  │ Auth: API Key校验    │  │
│  • Playground        │  │  │ Rate Limit: 频率控制  │  │
│  • Dashboard         │  │  │ Billing: 余额检查    │  │
│  • API文档           │  │  │ Router: 转发LiteLLM  │  │
└──────────────────────┘  │  └─────────────────────┘  │
                           └───────────┬───────────────┘
                                       │
                          ┌────────────┴────────────┐
                          ▼                         ▼
              ┌──────────────────┐     ┌──────────────────┐
              │  Cloudflare D1   │     │  VPS (LiteLLM)    │
              │  ─────────────── │     │  ─────────────── │
              │  • users         │     │  • 模型路由        │
              │  • api_keys      │     │  • 格式转换        │
              │  • balances      │     │  • 流式转发        │
              │  • usage_logs    │     │  • 重试/降级       │
              │  • topups        │     │  • 用量回传        │
              └──────────────────┘     └────────┬─────────┘
                                                │
                                    ┌───────────┼───────────┐
                                    ▼           ▼           ▼
                               OpenAI API  Anthropic   DeepSeek
                                              API        API
```

### 3.2 一次API调用的完整链路

```
1. 用户代码 → POST https://myaishome.com/api/v1/chat/completions
               Header: Authorization: Bearer my-xxxx
               Body: { model: "gpt-4o", messages: [...] }

2. Cloudflare Worker 接收请求
   ├─ 提取 API Key → 查 D1 找到 user
   ├─ 检查余额是否 > 0
   ├─ 检查 rate limit（免费用户10次/分钟，付费用户60次/分钟）
   └─ 转发请求到 LiteLLM（VPS内网地址）

3. LiteLLM 接收请求
   ├─ 模型映射：gpt-4o → OpenAI chat/completions
   ├─ 注入真实 API Key（从环境变量读取）
   ├─ 转发请求到上游 API
   └─ 流式回传响应给 Worker

4. Worker 流式转发给用户
   └─ 请求结束后：D1 扣除费用 + 记录 usage_log

总延迟增加：Worker ~10ms + LiteLLM ~50ms = ~60ms（几乎无感）
```

### 3.3 为什么用 Worker 而不是直接暴露 LiteLLM？

| 方案 | 优点 | 缺点 |
|------|------|------|
| 直接暴露 LiteLLM | 简单 | 鉴权弱、无法计费、VPS IP 暴露 |
| **Worker 做网关** ✅ | 鉴权/计费/限流全在边缘；无限扩展；VPS IP 隐藏 | 多一跳（延迟+10ms） |

---

## 4. 技术选型详述

### 4.1 Cloudflare Worker（API 网关）

**选型理由**：
- 全球边缘节点，国内访问速度尚可（香港/东京节点）
- 免费额度：10万请求/天，MVP足够
- 与 Pages/D1 同一生态，运维零成本

**核心职责**：
- API Key 校验（查 D1 → 找到用户 → 确认余额）
- 频率限制（按用户维度，防止滥用）
- 请求转发到 LiteLLM（流式透传）
- 调用完成后扣费 + 记录日志

**技术细节**：
- 兼容 OpenAI SDK 的 `/api/v1/chat/completions` 和 `/api/v1/models`
- 支持 SSE 流式响应（`stream: true`）
- 路由规则：`/api/v1/*` → Worker，其他 → Pages 静态资源

### 4.2 LiteLLM（模型路由器）

**选型理由**：
- 开源、成熟、社区活跃（15k+ stars）
- 内置 100+ 模型提供商适配
- 支持流式转发、重试、降级、负载均衡
- 天然兼容 OpenAI SDK 格式

**部署方式**：
- 一台 2C4G VPS（推荐：阿里云香港/腾讯云新加坡，月费约 ¥50-100）
- Docker Compose 一键部署
- 所有上游 API Key 配置在 `.env` 中，Worker 无需感知

**LiteLLM 配置示例**：
```yaml
model_list:
  - model_name: gpt-4o
    litellm_params:
      model: openai/gpt-4o
      api_key: os.environ/OPENAI_API_KEY
  - model_name: deepseek-chat
    litellm_params:
      model: deepseek/deepseek-chat
      api_key: os.environ/DEEPSEEK_API_KEY
  - model_name: claude-3.5-sonnet
    litellm_params:
      model: anthropic/claude-3-5-sonnet-20241022
      api_key: os.environ/ANTHROPIC_API_KEY
```

### 4.3 Cloudflare D1（数据库）

**选型理由**：
- 与 Worker 零延迟集成（同网络内）
- 免费额度：5GB 存储 + 500万次读取/月，MVP阶段完全够
- SQLite 兼容，开发简单
- 无需单独运维数据库

**表结构**（见第5节）

### 4.4 Playground（在线测试）

**技术方案**：纯前端 SPA（React + Vite），部署在 Pages 同一站点下 `/playground` 路径。

**核心功能**：
- 模型选择下拉框
- Prompt 输入框 + System Prompt（可选）
- 流式输出展示区
- 未登录可试3次（localStorage 计数）
- 3次后弹出注册引导

**实现要点**：
- 前端直接调 Worker API（`/api/v1/chat/completions`）
- 未登录用临时 guest token（限制3次）
- 登录后使用用户自己的 API Key

### 4.5 支付方案

| 阶段 | 方案 | 说明 |
|------|------|------|
| **MVP（前100用户）** | 手动充值 | 用户加微信转账，后台手动改 D1 balance。零开发成本 |
| **小规模（100-1000用户）** | PayJS / xorpay | 聚合支付平台，支持支付宝/微信，手续费 1-3%，接入简单 |
| **规模化（1000+）** | 支付宝当面付 + 微信JSAPI | 正规商户接口，费率更低但需要企业资质 |

**MVP 推荐**：先用 PayJS（个人可接入，API直通车模式），日交易限额 ¥5,000，手续费 2%。

### 4.6 前端新增页面

| 页面 | 路径 | 技术 | 说明 |
|------|------|------|------|
| API Hub | `/api` | 静态 HTML | 价目表 + 代码示例 |
| Playground | `/playground` | React SPA | 在线测试 |
| Dashboard | `/dashboard` | React SPA | 用户仪表盘 |
| 登录/注册 | `/auth` | 静态 HTML + JS | 邮箱注册 |

---

## 5. 数据库设计（Cloudflare D1）

### 5.1 表结构

```sql
-- 用户表
CREATE TABLE users (
  id            TEXT PRIMARY KEY,              -- UUID
  email         TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,                 -- bcrypt
  balance       REAL DEFAULT 0,                -- 余额（人民币元）
  created_at    INTEGER NOT NULL,              -- Unix timestamp
  last_login_at INTEGER
);

-- API Keys 表
CREATE TABLE api_keys (
  id            TEXT PRIMARY KEY,              -- UUID
  user_id       TEXT NOT NULL REFERENCES users(id),
  key_hash      TEXT UNIQUE NOT NULL,          -- SHA-256(key)
  prefix        TEXT NOT NULL,                 -- "my-" + 前8位明文，用于UI展示
  name          TEXT DEFAULT 'Default Key',    -- 用户给key起的名字
  is_active     BOOLEAN DEFAULT 1,
  created_at    INTEGER NOT NULL,
  last_used_at  INTEGER
);

-- 充值记录表
CREATE TABLE topups (
  id            TEXT PRIMARY KEY,
  user_id       TEXT NOT NULL REFERENCES users(id),
  amount        REAL NOT NULL,
  method        TEXT NOT NULL,                 -- 'manual' | 'payjs' | 'alipay'
  status        TEXT NOT NULL DEFAULT 'pending',  -- 'pending' | 'completed' | 'failed'
  created_at    INTEGER NOT NULL
);

-- 用量日志表（按月归档）
CREATE TABLE usage_logs (
  id                 TEXT PRIMARY KEY,
  user_id            TEXT NOT NULL REFERENCES users(id),
  api_key_id         TEXT NOT NULL REFERENCES api_keys(id),
  model              TEXT NOT NULL,            -- e.g. 'gpt-4o'
  provider           TEXT NOT NULL,            -- e.g. 'openai'
  prompt_tokens      INTEGER NOT NULL,
  completion_tokens  INTEGER NOT NULL,
  cost               REAL NOT NULL,            -- 扣除金额（人民币）
  created_at         INTEGER NOT NULL
);

-- 索引
CREATE INDEX idx_api_keys_user ON api_keys(user_id);
CREATE INDEX idx_usage_user_date ON usage_logs(user_id, created_at);
CREATE INDEX idx_topups_user ON topups(user_id);
```

### 5.2 API Key 生成规则

- 格式：`my-` + 32位随机字符串（大小写字母+数字）
- 示例：`my-aB3xK9mQwR7tY2vL5nP8jF4dH6sA1cU0`
- `my-` 前缀：一眼识别是 myaishome 的 Key
- 数据库只存 `SHA-256(key)` 的哈希，不存明文
- 生成时展示完整 Key 一次，之后只显示前缀（`my-aB3x****`）

---

## 6. API 设计与兼容性

### 6.1 核心接口

完全兼容 OpenAI SDK，用户只需改 `base_url`：

```python
# 原来
from openai import OpenAI
client = OpenAI(api_key="sk-proj-xxxx")

# 改成 myaishome
client = OpenAI(
    api_key="my-aB3xK9mQwR7tY2vL5nP8jF4dH6sA1cU0",
    base_url="https://myaishome.com/api/v1"
)

# 下面的代码一模一样！
response = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "你好"}],
    stream=True
)
```

### 6.2 支持的接口（MVP）

| 接口 | 路径 | 说明 |
|------|------|------|
| 列出模型 | `GET /api/v1/models` | 返回可用模型列表 |
| 聊天补全 | `POST /api/v1/chat/completions` | 核心接口，支持流式 |
| 文本嵌入 | `POST /api/v1/embeddings` | 后续版本 |
| 图像生成 | `POST /api/v1/images/generations` | 后续版本 |

### 6.3 计费规则

**定价策略**：上游成本 × 1.5~2.0（倍数定价，简单透明）

| 模型 | 上游价格（$/1M tokens） | myaishome 价格（¥/1M tokens） | 毛利 |
|------|------------------------|-------------------------------|------|
| gpt-4o | $2.50 / $10.00 | ¥5 / ¥20 | ~50% |
| gpt-4o-mini | $0.15 / $0.60 | ¥0.3 / ¥1.2 | ~50% |
| deepseek-chat | ¥1 / ¥2 | ¥2 / ¥4 | ~100% |
| claude-3.5-sonnet | $3.00 / $15.00 | ¥6 / ¥30 | ~50% |

> 注：汇率按 1 USD = 7.2 CNY 计算。实际扣费按 token 实时计算，精确到 0.0001 元。

### 6.4 充值档位

| 档位 | 金额 | 赠送 | 实际到账 |
|------|------|------|----------|
| 尝鲜 | ¥9.9 | — | ¥9.9 |
| 入门 | ¥39 | +¥6 | ¥45 |
| 进阶 | ¥99 | +¥20 | ¥119 |

---

## 7. 成本测算

### 7.1 固定成本（月费）

| 项目 | 方案 | 月费 |
|------|------|------|
| VPS（LiteLLM） | 阿里云香港 2C4G | ¥50-80 |
| 域名 | myaishome.com（已有） | ¥0 |
| Cloudflare Pages | 免费额度内 | ¥0 |
| Cloudflare Worker | 10万次/天免费 | ¥0 |
| Cloudflare D1 | 5GB+500万读/月免费 | ¥0 |
| **合计** | | **¥50-80/月** |

### 7.2 可变成本（与用量挂钩）

- 上游 API 费用：由用户余额支付，网站垫付上游费用，赚取差价
- 支付手续费：PayJS 约 2%，即用户充 ¥100，到手 ¥98

### 7.3 盈利模型

**假设月活100付费用户，人均月消费 ¥50**：
- 用户总充值：¥5,000
- 上游 API 成本：~¥2,500（按 50% 毛利率）
- 支付手续费：~¥100
- VPS 成本：¥80
- **月毛利：~¥2,320**

**规模化到1000用户**：
- 用户总充值：¥50,000
- 月毛利：~¥23,200（运维成本增长远慢于收入）

### 7.4 风险准备金

- 用户余额（预充值）属于负债，不能当利润
- 建议留存 30% 现金作为上游 API 垫付金
- 大额充值用户可能有退款诉求

---

## 8. 实施路线图

### 8.1 总体时间线（6周 MVP）

```
Week 1: 基础设施
  ├── D1 数据库建表
  ├── Worker 鉴权框架
  └── 用户注册/登录 API

Week 2-3: LiteLLM 部署 + Worker 对接
  ├── VPS 购买 + Docker 部署 LiteLLM
  ├── Worker ↔ LiteLLM 流式转发
  ├── 扣费逻辑 + 用量日志
  └── 前端 Playground 静态页面

Week 4: 支付 + 前端完成
  ├── PayJS 支付集成
  ├── Dashboard 页面
  ├── API Hub 页面（价目表+文档）
  └── 全链路联调

Week 5: 测试 + 内测
  ├── 内部测试（10人）
  ├── 压力测试
  ├── 安全审计（API Key 泄露防护）
  └── Bug 修复

Week 6: 上线 + 推广
  ├── 首页增加 CTA 入口
  ├── 知乎/小红书推广文案
  ├── 监控告警配置
  └── 正式开放注册
```

### 8.2 阶段划分

| 阶段 | 范围 | 时间 | 目标 |
|------|------|------|------|
| **MVP** | 5个模型 + 基础功能 | 6周 | 跑通闭环，前100用户 |
| **V1** | 15个模型 + 优化体验 | +4周 | 前500用户，月入5K+ |
| **V2** | 30个模型 + 企业版 | 持续 | 月入2万+ |

---

## 9. 安全与风控

### 9.1 API Key 安全

- 数据库只存哈希，不存明文
- 生成时展示一次，之后不可查看（只能重新生成）
- 支持多 Key（用户可创建多个，用于不同项目）
- 可单独禁用某个 Key

### 9.2 防滥用

- **频率限制**：免费 guest 10次/分钟，付费用户 60次/分钟
- **余额门槛**：余额为 0 时立即拒绝，不欠费
- **并发限制**：单用户最多3个并发请求
- **异常检测**：短时间内大量失败请求 → 自动暂停 Key

### 9.3 内容安全

- Worker 层做基础敏感词过滤（中文政治敏感词 + 色情暴力）
- 上游 API 自带的内容审核（OpenAI/Anthropic 有 moderation）
- 违反 ToS 的用户：警告 → 封号

### 9.4 数据隐私

- 不存储用户请求内容（prompt/completion）
- usage_log 只存 token 数量，不存内容
- 隐私政策明确说明

---

## 10. 竞品对比

| 平台 | 模型数 | 支付方式 | API兼容 | 价格策略 |
|------|--------|----------|---------|----------|
| **myaishome（规划）** | 15-30 | 支付宝/微信 | ✅ OpenAI SDK | 倍数定价 |
| OpenRouter | 200+ | 信用卡/PayPal | ✅ OpenAI SDK | 市场价 |
| 硅基流动 | 国产模型为主 | 支付宝 | 自有格式 | 按量付费 |
| API2D | 50+ | 支付宝/微信 | ✅ OpenAI SDK | 倍数定价 |

**差异化**：myaishome 结合"信息聚合+对比"的前端优势 + 中文支付便利 + Playground 零门槛试用 → 降低用户决策和接入成本。

---

## 11. 待决策事项

| # | 问题 | 选项 | 建议 |
|---|------|------|------|
| 1 | VPS 选哪家？ | 阿里云香港 / 腾讯云新加坡 / AWS Lightsail | 阿里云香港（国内延迟低、便宜） |
| 2 | 支付用哪个？ | PayJS / xorpay / 先手动 | MVP先手动，省开发时间 |
| 3 | 先上几个模型？ | 3个 / 5个 / 10个 | 5个（gpt-4o, gpt-4o-mini, deepseek-chat, claude-3.5-sonnet, gemini-2.5-pro） |
| 4 | Playground用React？ | React / Vue / Alpine.js | React（LiteLLM自带Playground可参考） |
| 5 | 是否需要KYC？ | 需要 / 不需要 | MVP不需要，小规模靠支付接口实名即可 |

---

## 附录：技术栈速查

| 层 | 技术 | 用途 |
|----|------|------|
| 静态站 | HTML + CSS + JS | 现有 myaishome.com |
| API 网关 | Cloudflare Worker (TypeScript) | 鉴权/限流/计费/路由 |
| 模型路由 | LiteLLM (Python/Docker) | 多模型统一代理 |
| 数据库 | Cloudflare D1 (SQLite) | 用户/Key/余额/日志 |
| 支付 | PayJS（MVP） | 支付宝/微信聚合支付 |
| Playground | React + Vite | 在线测试SPA |
| CI/CD | GitHub Actions | 自动部署 |
| 监控 | Cloudflare Analytics + 自定义日志 | 用量+异常监控 |

---

> **下一步**：确认待决策事项 → 开始 Week 1 开发（D1建表 + Worker框架）
