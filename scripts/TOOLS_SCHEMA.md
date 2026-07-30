# AI家AI户 · 工具库（tools）分类体系与数据字段定义

> 目标：把"市面上能有的 AI 工具"按类目上架，做成 ai-bot.cn 式的大全导航。
> 沿用现有 `models.json → generate_model_pages.py` 的"数据驱动 + 便利店标签（来源+更新日期）"思路。
> 工具库与现有"模型库"并存：模型是工具的子集，工具库是更宽的口径。

---

## 一、一级类目（category，建议 12 个）

| 值（中文，存 JSON） | 英文标识 | 说明 |
|---|---|---|
| 对话聊天 | Chatbot | ChatGPT、Claude、Kimi、豆包等 |
| 图像生成 | Image | Midjourney、SD、即梦、Flux 等 |
| 视频生成 | Video | Sora、Runway、可灵、海螺等 |
| 音频语音 | Audio | ElevenLabs、Suno、配音类 |
| 编程开发 | Coding | Cursor、Copilot、Windsurf、通义灵码 |
| 写作内容 | Writing | 文案、小说、论文、公众号写作 |
| 设计创意 | Design | 海报、Logo、PPT、UI、素材 |
| 办公效率 | Productivity | 笔记、会议纪要、表格、自动化 |
| 搜索研究 | Search | Perplexity、秘塔、联网问答 |
| Agent自动化 | Agent | Coze、Dify、Manus、工作流 |
| 翻译语言 | Translation | 翻译、润色、字幕 |
| 浏览器插件 | Browser | 侧边栏、摘要、划词类扩展 |

> 二级归类用 `tags` 多标签实现，不单列"二级类目"，避免树太深、搜索也更灵活。

## 二、通用标签（tags，可多选，部分与类目重叠也无妨）

免费 / 国产 / 海外 / API / 中文原生 / 移动端 / 团队协作 / 开源 /
文生图 / 文生视频 / 语音克隆 / 代码补全 / PPT / 思维导图 /
联网搜索 / 付费订阅 / 学生优惠 / 网页端 / 桌面端

## 三、tools.json 字段定义（每条一个工具）

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `id` | string | ✅ | 唯一 slug，用作详情页文件名 `tools/<id>.html`，仅小写字母/数字/连字符 |
| `name` | string | ✅ | 中文名 |
| `nameEn` | string | | 英文名 |
| `category` | string | ✅ | 取上一节"值（中文）"之一 |
| `tags` | string[] | ✅ | 中文标签（含类目语义标签） |
| `tagsEn` | string[] | | 英文标签 |
| `pricing` | string | ✅ | `free` / `freemium` / `paid` 三选一 |
| `priceLabel` | string | | 展示用，如"免费 / 会员¥49/月" |
| `priceLabelEn` | string | | 英文价格展示 |
| `priceDetail` | string | | 定价详情（长文） |
| `priceDetailEn` | string | | 英文定价详情 |
| `website` | string | ✅ | 官网/落地页 URL（外链，加 rel=nofollow） |
| `company` | string | | 开发商 |
| `companyEn` | string | | 开发商英文 |
| `region` | string | | `国内` / `海外` |
| `summary` | string | ✅ | 一句话简介（≤60字），用于卡片 |
| `summaryEn` | string | | 英文简介 |
| `strengths` | string | | 优势/亮点 |
| `strengthsEn` | string | | 英文优势 |
| `weaknesses` | string | | 不足 |
| `weaknessesEn` | string | | 英文不足 |
| `bestFor` | string | | 最适合谁/场景 |
| `bestForEn` | string | | 英文 |
| `logo` | string | | logo 图片 URL（可选，缺省用文字） |
| `affiliate` | bool | | 是否带联盟返佣 |
| `affiliateUrl` | string | | 联盟链接（有则 CTA 走这个，并标"推广"） |
| `source` | string | ✅ | 数据来源（便利店标签） |
| `lastUpdated` | string | ✅ | 更新日期 `YYYY-MM-DD`（便利店标签） |
| `featured` | bool | | 是否首页/精选推荐 |

## 四、生成流水线

- 数据源：`scripts/tools.json`
- 生成器：`scripts/generate_tool_pages.py`
  - 输出 `tools/<id>.html`（详情页，复用 `css/detail.css`）
  - 输出 `tools.html`（分类筛选 listing 页，复用 `css/style.css` 的 `.model-grid`/`.model-card`）
- 运行：`python scripts/generate_tool_pages.py`
- 部署：改完 `git add -A && commit && push`，Cloudflare Pages 自动构建。

## 五、维护约定（长期）

- 每条必带 `source` + `lastUpdated`，体现"便利店"持续维护。
- 新增工具 = 往 `tools.json` 加一条 + 重跑生成器。
- 定期（建议每周）跑"死链检查 + 新工具采集草稿"，人工过一遍再入库。
- 联盟返佣工具在 CTA 标"推广"，并在页脚注明 affiliate 关系。
