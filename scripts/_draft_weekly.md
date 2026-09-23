# AI家AI户 · 工具库周维护草稿报告

> **本草稿仅供人工过，未自动入库。** `scripts/tools.json` 未被改动，请勿直接 merge。

- **生成日期**：2026-09-21（周一，自动化定时任务）
- **工具总数（基线）**：388 条 · 12 个一级类目
- **检查方式**：`scripts/_check_links.py`（线程池 32 并发 + HEAD→GET 回退 + 阿里 DoH 二次复核），中间结果 `_linkcheck_result.json`

---

## 一、执行摘要

| 指标 | 数值 |
|---|---|
| 扫描 URL 总数 | 388 |
| 正常（2xx/3xx） | 357 |
| 反爬/封禁类略过（403/402/429，大站 bot-block） | 22 |
| **确认死链（建议下架/替换）** | **1** |
| 误报（超时但 DoH 有 A 记录 / HEAD 不被支持） | 7 |
| 其他 4xx（鉴权墙，站点存活） | 1 |
| **新品草稿候选** | **13** |

**一句话结论**：库内链接整体健康，本周仅 `sweep` 一条确属死链（域名注销）；另有 7 条超时与 1 条 404 经二次核实均为沙箱网络/HEAD 误报，无需处理。新品草稿 13 条，覆盖 搜索研究 / 浏览器插件 / 办公效率 / Agent自动化 / 音频语音 / 编程开发 六类，全部 URL 实测可达。

---

## 二、死链清单（确认的 1 条）

| id | name | category | url | 实测状态 | 处理建议 |
|---|---|---|---|---|---|
| `sweep` | Sweep | 编程开发 | https://sweep.dev | 连接失败 rc=6（无法解析主机）；阿里 DoH 查询无 A 记录（NORECORD）；GET 同样 000/rc=6 | **确认死链**。Sweep AI 已被 OpenAI 收购并关停产品，域名不再托管。建议下架，或在同类「自动修 issue / 生成 PR」赛道以 已在库的 Devin / Cursor 等补足 |

---

## 三、非死链但需留意的项（人工知悉即可，不计入死链）

> 按任务口径：反爬/封禁响应与「超时但域名可解析」均不判死链。以下为本周被初判异常、经二次核实后排除的项，列出供人工备查。

**1) 初判 404，二次 GET 实测 200 → 误报（HEAD 不被支持）**
- `step`（对话聊天，https://www.stepfun.com）：HEAD 返回 404，改用 GET 跟随重定向返回 **200**（CNAME→redirect.stepfun.com，国内 IP 正常）。站点存活，不动。

**2) 连接超时（rc=28），但阿里 DoH 均有 A 记录 → 沙箱出口抖动 / 大站拦截误报，不判死链**
- `adobe-express`（设计创意，https://www.adobe.com/express）— Adobe 大站，任务白名单，超时非死站
- `firefly`（图像生成，https://www.adobe.com/products/firefly.html）— Adobe 大站，同上
- `aimixian`（图像生成，https://aimixian.cn）— DoH OK，沙箱不可达
- `browser360-ai`（浏览器插件，https://browser.360.cn）— 360 大站，DoH OK
- `zhinao360`（对话聊天，https://ai.360.cn）— 360 大站，DoH OK（历史多次实测 200）
- `yizhuan`（写作内容，https://www.yizhuan.net）— DoH OK，沙箱不可达

**3) 其他 4xx（鉴权墙，站点存活）**
- `snappa`（设计创意，https://snappa.com）— 返回 **401**，需登录/鉴权，站点存活，不判死链。

**4) 反爬/封禁类略过（22 条）**
含 ChatGPT / Midjourney / Perplexity / Adobe / Meta AI / GitHub / 字节/百度等大站对自动请求的 403/402/429 拦截，按规则直接略过，不计入死链清单（这些站点通常存活）。

---

## 四、新品草稿条目（13 条，便于人工复制入库）

> 字段格式与 `tools.json` 一致；`summary` 均 ≤60 字。`pricing` 标注「待核」者建议入库前再核官网档位。
> 类目分布：搜索研究 2 / 浏览器插件 2 / 办公效率 3 / Agent自动化 2 / 音频语音 2 / 编程开发 2。
> 注：翻译语言类本周无干净独立新品（PolyPal / Hi Translate / Transync 已在库），未强行填充。

### 1. parallel-search（搜索研究 · 海外）
```json
{
  "id": "parallel-search",
  "name": "Parallel",
  "nameEn": "Parallel",
  "category": "搜索研究",
  "tags": ["海外", "深度研究", "引用来源", "AI搜索"],
  "tagsEn": ["Overseas", "Deep Research", "Cited", "AI Search"],
  "pricing": "freemium",
  "priceLabel": "免费 / 会员（待核）",
  "priceDetail": "面向开发者的深度研究搜索引擎，基于权威索引返回高准确度答案；具体档位待核。",
  "website": "https://parallel.ai",
  "company": "Parallel",
  "companyEn": "Parallel",
  "region": "海外",
  "summary": "面向开发者的深度研究搜索引擎，基于权威索引提供高准确度答案。",
  "strengths": "答案准确度高；引用权威索引；适合严谨研究。",
  "weaknesses": "档位与中文支持待核；偏开发者向。",
  "bestFor": "做深度调研、需要可溯源答案的研究者与工程团队。",
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-09-21"
}
```

### 2. tinyfish（搜索研究 · 海外）
```json
{
  "id": "tinyfish",
  "name": "TinyFish",
  "nameEn": "TinyFish",
  "category": "搜索研究",
  "tags": ["海外", "网页抓取", "Agent", "API"],
  "tagsEn": ["Overseas", "Web Fetch", "Agent", "API"],
  "pricing": "freemium",
  "priceLabel": "免费（Search&Fetch）/ 用量计费",
  "priceDetail": "搜索与抓取免费，Agent 多步操作按用量计费；为 Agent 提供从搜索到登录操作的完整网页工作流。",
  "website": "https://www.tinyfish.ai",
  "company": "TinyFish",
  "companyEn": "TinyFish",
  "region": "海外",
  "summary": "一站式网页工作流：搜索→抓取→鉴权多步操作，适配 Agent。",
  "strengths": "搜索+抓取+操作一体；可经登录做多步任务；token 友好。",
  "weaknesses": "复杂站点稳定性待验证；学习曲线。",
  "bestFor": "需要让 Agent 真正操作网页（含登录态）的开发者。",
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-09-21"
}
```

### 3. chathop（浏览器插件 · 海外）
```json
{
  "id": "chathop",
  "name": "ChatHop",
  "nameEn": "ChatHop",
  "category": "浏览器插件",
  "tags": ["海外", "跨模型", "对话迁移", "浏览器"],
  "tagsEn": ["Overseas", "Cross-model", "Chat Migration", "Browser"],
  "pricing": "freemium",
  "priceLabel": "免费 20 次/月",
  "priceDetail": "每月 20 次免费使用，可在 ChatGPT/Claude/Gemini 间迁移对话并保留上下文，支持文本与 Markdown 导出。",
  "website": "https://chathop.com",
  "company": "ChatHop",
  "companyEn": "ChatHop",
  "region": "海外",
  "summary": "跨 ChatGPT/Claude/Gemini 迁移对话的浏览器工具，保留上下文。",
  "strengths": "破除模型锁定；保留上下文迁移；导出便捷。",
  "weaknesses": "免费额度有限；仅浏览器端。",
  "bestFor": "频繁在多模型间切换、想复用对话上下文的知识工作者。",
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-09-21"
}
```

### 4. aside（浏览器插件 · 海外）
```json
{
  "id": "aside",
  "name": "Aside",
  "nameEn": "Aside",
  "category": "浏览器插件",
  "tags": ["海外", "Agent浏览器", "自动操作", "本地加密"],
  "tagsEn": ["Overseas", "Agentic Browser", "Automation", "Local Encryption"],
  "pricing": "freemium",
  "priceLabel": "免费 / 订阅（待核）",
  "priceDetail": "本地运行并加密，可登录账号代为完成消息、支付、内部工具等复杂任务；支持 Claude 或 ChatGPT 订阅。档位待核。",
  "website": "https://getaside.ai",
  "company": "Aside",
  "companyEn": "Aside",
  "region": "海外",
  "summary": "为人与 Agent 重造的浏览器，可登录账号自动完成复杂任务。",
  "strengths": "Agentic 浏览基准表现好；本地加密；可操作登录态页面。",
  "weaknesses": "需订阅大模型；隐私依赖本地加密实现。",
  "bestFor": "想让 AI 代为处理跨网站复杂任务（含登录）的用户。",
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-09-21"
}
```

### 5. toki（办公效率 · 海外）
```json
{
  "id": "toki",
  "name": "Toki",
  "nameEn": "Toki",
  "category": "办公效率",
  "tags": ["海外", "会议安排", "AI助理", "日历"],
  "tagsEn": ["Overseas", "Scheduling", "AI Assistant", "Calendar"],
  "pricing": "freemium",
  "priceLabel": "免费 / 会员（待核）",
  "priceDetail": "AI 行政助理，跨人与日历协商会议时段并保护专注时间；档位待核。",
  "website": "https://usetoki.com",
  "company": "Toki",
  "companyEn": "Toki",
  "region": "海外",
  "summary": "替你协商日历时段的 AI 行政助理，保护专注时间。",
  "strengths": "自动协调多方时间；减少会议打断；省去来回沟通。",
  "weaknesses": "需接入日历权限；执行质量取决于集成。",
  "bestFor": "会议繁多、希望把排期交给 AI 协理的职场人。",
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-09-21"
}
```

### 6. llmagnet（办公效率 · 海外）
```json
{
  "id": "llmagnet",
  "name": "LLMagnet",
  "nameEn": "LLMagnet",
  "category": "办公效率",
  "tags": ["海外", "AI可见性", "WordPress", "SEO"],
  "tagsEn": ["Overseas", "AI Visibility", "WordPress", "SEO"],
  "pricing": "freemium",
  "priceLabel": "免费版 / 付费（待核）",
  "priceDetail": "WordPress 插件，追踪 ChatGPT/Claude/Gemini 等 AI 爬虫访问，生成 llms.txt 与结构化数据提升 AI 可见性；档位待核。",
  "website": "https://llmagnet.com",
  "company": "LLMagnet",
  "companyEn": "LLMagnet",
  "region": "海外",
  "summary": "给 WordPress 加 AI 可见性层，追踪 ChatGPT/Claude 等爬虫。",
  "strengths": "专注 GEO/AI 可见性；一键生成 llms.txt；可视化得分。",
  "weaknesses": "仅限 WordPress；价值依赖站点被 AI 抓取。",
  "bestFor": "希望内容被 AI 引擎更好检索的 WordPress 站长。",
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-09-21"
}
```

### 7. resurf（办公效率 · 海外）
```json
{
  "id": "resurf",
  "name": "Resurf",
  "nameEn": "Resurf",
  "category": "办公效率",
  "tags": ["海外", "本地优先", "上下文库", "MCP"],
  "tagsEn": ["Overseas", "On-device", "Context Library", "MCP"],
  "pricing": "freemium",
  "priceLabel": "免费 / 会员（待核）",
  "priceDetail": "Mac/iPhone/iPad 端本地个人上下文库，保存笔记/链接/图片/PDF，通过 MCP 与 CLI 交给 AI 使用，iCloud 私有同步；档位待核。",
  "website": "https://resurf.so",
  "company": "Resurf",
  "companyEn": "Resurf",
  "region": "海外",
  "summary": "Mac 端本地个人上下文库，供 AI 通过 MCP/CLI 调用。",
  "strengths": "本地优先、隐私好；MCP/CLI 接入；多端 iCloud 同步。",
  "weaknesses": "仅苹果生态；国内访问与网络依赖待核。",
  "bestFor": "重视隐私、想给多个 AI 工具统一上下文的 Mac 用户。",
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-09-21"
}
```

### 8. naoma（Agent自动化 · 海外）
```json
{
  "id": "naoma",
  "name": "Naoma",
  "nameEn": "Naoma",
  "category": "Agent自动化",
  "tags": ["海外", "销售", "AI演示", "会议预约"],
  "tagsEn": ["Overseas", "Sales", "AI Demo", "Meeting Booking"],
  "pricing": "paid",
  "priceLabel": "付费（按用量，待核）",
  "priceDetail": "AI 账户执行官（Demo Agent V2），用实时产品演示接待访客、答疑、资质评估并预约会议，已跑过 5 万+ 演示；具体定价待核。",
  "website": "https://naoma.ai",
  "company": "Naoma",
  "companyEn": "Naoma",
  "region": "海外",
  "summary": "AI 账户执行官，把官网流量变成已预约的合格会议。",
  "strengths": "替代预约表单；实时演示+资质评估；记得回访访客。",
  "weaknesses": "偏 B2B SaaS；效果取决于资格判断准确度。",
  "bestFor": "想用 AI 替代销售开发、自动预约 Demo 的 B2B 团队。",
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-09-21"
}
```

### 9. appwrite（Agent自动化 · 海外）
```json
{
  "id": "appwrite",
  "name": "Appwrite 2.0",
  "nameEn": "Appwrite 2.0",
  "category": "Agent自动化",
  "tags": ["海外", "开源", "后端", "基础设施"],
  "tagsEn": ["Overseas", "Open Source", "Backend", "Infrastructure"],
  "pricing": "freemium",
  "priceLabel": "开源核心 / 云付费",
  "priceDetail": "为 Agent 重做的开源后端平台，提供数据库、鉴权、存储与函数，并新增 Agent 友好能力，省去手搓服务器基础设施。",
  "website": "https://appwrite.io",
  "company": "Appwrite",
  "companyEn": "Appwrite",
  "region": "海外",
  "summary": "为 Agent 重做的开源后端，含数据库/鉴权/函数。",
  "strengths": "开源可自托管；后端能力齐全；Agent 友好。",
  "weaknesses": "需一定工程能力；云版按量付费。",
  "bestFor": "为 Agent 应用快速搭建后端、偏好开源的开发者团队。",
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-09-21"
}
```

### 10. oats（音频语音 · 海外）
```json
{
  "id": "oats",
  "name": "Oats",
  "nameEn": "Oats",
  "category": "音频语音",
  "tags": ["海外", "会议笔记", "端侧", "开源"],
  "tagsEn": ["Overseas", "Meeting Notes", "On-device", "Open Source"],
  "pricing": "free",
  "priceLabel": "免费 / 开源",
  "priceDetail": "免费开源的本地会议笔记工具，macOS/Windows 端侧 LLM 运行，无需机器人入会或订阅；云端后端（ariso.ai）提供增强转写与说话人识别。",
  "website": "https://useoats.com",
  "company": "Oats",
  "companyEn": "Oats",
  "region": "海外",
  "summary": "免费开源的本地会议笔记工具，端侧 LLM 运行无订阅。",
  "strengths": "免费开源；端侧运行隐私好；无需会议机器人。",
  "weaknesses": "增强功能依赖云端；仅桌面端。",
  "bestFor": "想本地、免费做会议笔记、在意隐私的用户。",
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-09-21"
}
```

### 11. quiethint（音频语音 · 海外）
```json
{
  "id": "quiethint",
  "name": "QuietHint",
  "nameEn": "QuietHint",
  "category": "音频语音",
  "tags": ["海外", "会议助手", "端侧", "隐私"],
  "tagsEn": ["Overseas", "Meeting Assistant", "On-device", "Privacy"],
  "pricing": "freemium",
  "priceLabel": "免费 / BYOK（待核）",
  "priceDetail": "Mac 端本地实时会议助手，用本地 Whisper 转写、通过 BYOK 调用 Claude 给出现场建议，原始音频不出本机；档位待核。",
  "website": "https://quiethint.com",
  "company": "QuietHint",
  "companyEn": "QuietHint",
  "region": "海外",
  "summary": "Mac 端本地实时会议助手，用 Whisper 转写、不上传云端。",
  "strengths": "隐私优先、音频不出本机；实时在场建议；适配任意会议软件。",
  "weaknesses": "仅 Apple 芯片 Mac；需自备 Claude Key。",
  "bestFor": "注重隐私、用 Mac 开会的职场人。",
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-09-21"
}
```

### 12. twigg（编程开发 · 海外）
```json
{
  "id": "twigg",
  "name": "Twigg",
  "nameEn": "Twigg",
  "category": "编程开发",
  "tags": ["海外", "LLM API", "上下文管理", "开发者"],
  "tagsEn": ["Overseas", "LLM API", "Context Management", "Developer"],
  "pricing": "freemium",
  "priceLabel": "免费 / 付费（待核）",
  "priceDetail": "有状态上下文层 API，集中维护对话状态与上下文，免每次重传全量历史，跨模型路由无供应商锁定；档位待核。",
  "website": "https://twigg.ai",
  "company": "Twigg",
  "companyEn": "Twigg",
  "region": "海外",
  "summary": "LLM 有状态上下文层 API，会话状态集中管理免重传。",
  "strengths": "降低上下文管理负担；跨供应商无锁定；集中看板。",
  "weaknesses": "新增一层依赖；档位待核。",
  "bestFor": "构建自主 Agent 或企业聊天、需高效管理对话状态的工程师。",
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-09-21"
}
```

### 13. elva（编程开发 · 海外）
```json
{
  "id": "elva",
  "name": "Elva",
  "nameEn": "Elva",
  "category": "编程开发",
  "tags": ["海外", "API", "MCP", "开发者"],
  "tagsEn": ["Overseas", "API", "MCP", "Developer"],
  "pricing": "freemium",
  "priceLabel": "免费 / Startup $100 月",
  "priceDetail": "由 Theneo 推出，从代码仓库自动发现 API、生成 OpenAPI 3.1 与评分目录，一键产出带鉴权与分析的托管 MCP 服务器；免费档含 1 仓库/1 MCP/1000 调用，Startup $100/月。",
  "website": "https://getelva.ai",
  "company": "Theneo（Elva）",
  "companyEn": "Theneo",
  "region": "海外",
  "summary": "从代码自动发现 API 并生成托管 MCP 服务器，面向 Agent。",
  "strengths": "无需手写 spec；自动治理与鉴权；托管 MCP 即开即用。",
  "weaknesses": "扫描可能漏 webhook/动态路径；生成描述需复核。",
  "bestFor": "API 现在要同时服务人类与 Agent、需治理与暴露的团队。",
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-09-21"
}
```

---

## 五、人工过检建议（决策清单）

1. **死链处理**：仅 `sweep` 一条需决定——建议下架（同类 Devin/Cursor 已在库），或替换为指定替代工具。
2. **误报项**：step / aimixian / browser360-ai / firefly / adobe-express / zhinao360 / yizhuan 共 7 条超时均为沙箱网络误报（DoH 有 A 记录），`step` 二次 GET 实测 200，`snappa` 为 401 鉴权墙——均**无需处理**。
3. **新品入库**：13 条草稿均已在官方域名实测可达（resurf.so 为 429 限流=存活）。建议入库前：
   - 复核标注「待核」的档位（parallel-search / aside / toki / llmagnet / resurf / naoma / quiethint / twigg）；
   - 确认 `summary` 与文案口径符合站点定位；
   - 跑 `generate_tool_pages.py` 重建详情页与 `tools.html`，并更新首页计数（当前 388 → 401）。
4. **未覆盖类目**：图像生成 / 视频生成 / 写作内容 / 对话聊天 / 设计创意 本周无干净独立新品，未强行填充；翻译语言类无新独立品（PolyPal/Hi Translate/Transync 已在库）。
