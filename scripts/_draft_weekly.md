# AI家AI户 工具库周维护草稿 — 2026-08-10

> ⚠️ **本草稿仅供人工过，未自动入库。** `scripts/tools.json` 未做任何改动。死链需人工确认后再改 URL 或下架；新品条目需人工核对后再粘贴入库。

## 一、执行摘要

| 项目 | 数值 |
|------|------|
| 工具总数 | 352 条（12 个一级类目） |
| 实测可达（2xx/3xx） | 317 条 |
| 反爬/权限类响应（403/402/429 等，按规则略过） | 11 条 |
| **确认死链** | **12 条** |
| 待人工复核（本机网络/TLS 受限，域名解析正常） | 11 条 |
| **新品候选草稿** | **14 条** |

新品重点补齐三个较空类目：**浏览器插件 +4**、**翻译语言 +2**、**搜索研究 +2**，另覆盖 办公效率 2 / 编程开发 1 / Agent自动化 1 / 设计创意 1 / 视频生成 1。

**本周口径说明**：本次在 curl 状态码之外，额外用阿里 DoH（`dns.alidns.com/resolve`）做了一次权威 DNS 复核，用来区分「域名真的没了」和「本机网络被拦截」。TLS 握手失败但域名有 A 记录的（Midjourney、Adobe、glasp 等）一律不计入死链。

---

## 二、确认死链清单（12 条，建议处理）

| # | id | name | category | url | 实测状态 | 判定依据 | 建议动作 |
|---|----|------|----------|-----|----------|----------|----------|
| 1 | `xunfei-wenshu` | 讯飞文书 | 写作内容 | https://wenshu.iflytek.com | DNS 失败 | 权威 DNS 返回 **NXDOMAIN**，子域已下线 | 下架，或改指向 iflytek 现有产品页 |
| 2 | `emvoice` | Emvoice | 音频语音 | https://emvoice.io | DNS 失败 | 权威 DNS 返回 **NXDOMAIN** | 下架 |
| 3 | `webchatgpt` | WebChatGPT | 浏览器插件 | https://webchatgpt.ai | DNS 失败 | 权威 DNS 返回 **NXDOMAIN** | 下架（扩展本体或已并入 WebPilot） |
| 4 | `wiseone` | Wiseone | 浏览器插件 | https://wiseone.io | DNS 无 A 记录 | 域名在 Cloudflare 但**已无 A 记录** | 下架 |
| 5 | `playht` | PlayHT | 音频语音 | https://play.ht | DNS 无 A 记录 | 旧域名已无 A 记录（品牌已迁 PlayAI） | 改 URL 或下架，`play.ai` 本机也解析失败，需人工确认 |
| 6 | `alibaba-translate` | 阿里翻译 | 翻译语言 | https://alimama.tech | DNS 无 A 记录 | 域名无 A 记录，且**原 URL 本就写错** | ✅ 改为 `https://translate.alibaba.com`（实测 200） |
| 7 | `perplexica` | Perplexica | 搜索研究 | https://github.com/itcosmetics/perplexica | 404 | GitHub 仓库路径错误 | ✅ 改为 `https://github.com/ItzCrazyKns/Perplexica`（实测 200） |
| 8 | `zoom-ai` | Zoom AI | 办公效率 | https://zoom.us/ai | 404 | 旧路径已废弃 | ✅ 改为 `https://www.zoom.com/en/products/ai-assistant/`（实测 200） |
| 9 | `phind` | Phind | 对话聊天 | https://www.phind.com | 404 | 根域直接返回 404（非反爬） | 人工打开确认；疑似产品下线 |
| 10 | `phind-search` | Phind Search | 搜索研究 | https://www.phind.com/search | 404 | 同上 | 与 #9 一并处理，建议合并或下架 |
| 11 | `huoshan-writing` | 火山写作 | 写作内容 | https://www.huoshan.com/writing | 502 | 服务端 5xx，连续两次复现 | 改 URL 或下架（火山写作已并入豆包） |
| 12 | `summarize-tech` | Summarize.tech | 浏览器插件 | https://summarize.tech | 503 | 服务端 5xx，域名解析正常 | 观察一周；仍 503 则下架 |

**其中 3 条已找到可用替代 URL（#6 / #7 / #8），改一行即可修复，优先处理。**

---

## 三、待人工复核（11 条 — 本机 TLS/网络受限，不计入死链）

这些域名权威 DNS 均能解析出 A 记录，仅本机 curl 报 TLS 握手失败或超时，大概率是网络环境拦截而非站点死亡。**不建议下架**。

| id | name | category | url | 本机状态 | DNS 复核 |
|----|------|----------|-----|----------|----------|
| `midjourney` | Midjourney | 图像生成 | https://www.midjourney.com | TLS 握手失败 | ✅ 有 A 记录 |
| `firefly` | Adobe Firefly | 图像生成 | https://www.adobe.com/products/firefly.html | 超时 | ✅ 大站存活 |
| `adobe-express` | Adobe Express | 设计创意 | https://www.adobe.com/express | 超时 | ✅ 大站存活 |
| `getimg` | getimg.ai | 图像生成 | https://getimg.ai | TLS 握手失败 | ✅ 有 A 记录 |
| `glasp` | Glasp | 浏览器插件 | https://glasp.co | TLS 握手失败 | ✅ 有 A 记录 |
| `merlin` | Merlin | 浏览器插件 | https://www.getmerlin.ai | TLS 握手失败 | ✅ 有 A 记录 |
| `morph` | Morph Studio | 视频生成 | https://morphstudio.com | TLS 握手失败 | ✅ 有 A 记录 |
| `genmind` | GenMind | 搜索研究 | https://www.genmind.cn | TLS 握手失败 | ✅ 有 A 记录 |
| `portia` | Portia AI | Agent自动化 | https://www.portialabs.ai | TLS 握手失败 | ✅ 有 A 记录 |
| `listen-ink` | Listen.ink | 音频语音 | https://listen.ink | TLS 握手失败 | ⚠️ 解析到域名停靠 CNAME（`cname123.net`），疑似已停运，建议人工打开 |
| `yizhuan` | 亿撰 | 写作内容 | https://www.yizhuan.net | 证书错误 | ⚠️ 有 A 记录但 SSL 证书异常，建议人工打开 |

> 上周报告中 `ai.360.cn`（360智脑）本次实测 **200 存活**，为上次误报，已移出清单。

---

## 四、新品草稿条目（14 条）

> 所有 `website` 均已实测可达（2xx）。ID 已与现库 352 条比对，无重复。标注「待确认」的字段请人工核实后再入库。

### 4.1 翻译语言（2 条）

```json
{
  "id": "huiyi-ai",
  "name": "会译",
  "nameEn": "HuiyiAI",
  "category": "翻译语言",
  "tags": ["国产", "全场景翻译", "PDF翻译", "浏览器插件", "免费"],
  "tagsEn": ["China", "All-scenario", "PDF Translation", "Extension", "Free"],
  "pricing": "freemium",
  "priceLabel": "免费起",
  "priceLabelEn": "Free tier",
  "priceDetail": "插件与 PDF 翻译免费，上传体积不限；高阶模型额度需付费（档位待确认）。",
  "priceDetailEn": "Free extension & PDF translation, no size cap; premium model quota paid (tiers TBC).",
  "website": "https://huiyiai.net",
  "company": "会译（中国）",
  "companyEn": "HuiyiAI",
  "region": "国内",
  "summary": "网页/PDF/视频字幕一站式翻译，可切 DeepL、Claude、Gemini 等十余种模型。",
  "summaryEn": "One-stop web/PDF/video subtitle translation across 10+ AI models.",
  "strengths": "PDF 保留原排版不用二次排版；双语对照+划词悬停；内置四六级雅思词库。",
  "strengthsEn": "PDF keeps layout; bilingual + hover lookup; built-in exam vocab.",
  "weaknesses": "国产新品牌，长期稳定性待观察；高阶模型需自付额度。",
  "weaknessesEn": "New brand, long-term stability unproven; premium models cost extra.",
  "bestFor": "读外文文献的学生、跨境电商运营、要翻长 PDF 合同的职场人。",
  "bestForEn": "Students reading papers, cross-border ops, long PDF contracts.",
  "affiliate": false,
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-08-10"
}
```

```json
{
  "id": "nitro-translate",
  "name": "Nitro",
  "nameEn": "Nitro 4.0",
  "category": "翻译语言",
  "tags": ["海外", "人工翻译", "Agent可调用", "按次计费", "80+语种"],
  "tagsEn": ["Overseas", "Human Translation", "Agent-callable", "Pay-per-use", "80+ Languages"],
  "pricing": "paid",
  "priceLabel": "按字数付费",
  "priceLabelEn": "Pay per word",
  "priceDetail": "无套餐无起订量，按请求付费；具体单价按语种浮动（待确认）。",
  "priceDetailEn": "No plans or minimums; per-request pricing varies by language pair (TBC).",
  "website": "https://nitrotranslate.com",
  "company": "Alconost",
  "companyEn": "Alconost",
  "region": "海外",
  "summary": "首个让 AI Agent 自主下单付费的真人翻译平台，几小时内交付可发布译文。",
  "summaryEn": "First human translation service an AI agent can order and pay for autonomously.",
  "strengths": "机器下单+真人翻译；无需账号和 API Key；80+ 语种，小文本几小时交付。",
  "strengthsEn": "Machine-to-machine ordering, human output; no account/API key; 80+ languages.",
  "weaknesses": "纯付费，不适合大批量长文；交付以小时计，非实时。",
  "weaknessesEn": "Paid only; not for bulk long-form; hours not seconds.",
  "bestFor": "广告语、App 更新文案、邮件序列等「必须准确」的小段文本本地化。",
  "bestForEn": "Ads, app release notes, email sequences that must read perfectly.",
  "affiliate": false,
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-08-10"
}
```

### 4.2 浏览器插件（4 条）

```json
{
  "id": "read-frog",
  "name": "陪读蛙",
  "nameEn": "Read Frog",
  "category": "浏览器插件",
  "tags": ["开源", "沉浸式翻译", "自带API Key", "语言学习", "免费"],
  "tagsEn": ["Open Source", "Immersive Translation", "BYO API Key", "Language Learning", "Free"],
  "pricing": "free",
  "priceLabel": "免费开源",
  "priceLabelEn": "Free & open source",
  "priceDetail": "GPL-3.0 开源，核心功能全免费；接大模型需自备 API Key，费用自付。",
  "priceDetailEn": "GPL-3.0, all core features free; bring your own LLM API key.",
  "website": "https://readfrog.app",
  "company": "Read Frog 开源社区",
  "companyEn": "Read Frog Community",
  "region": "海外",
  "summary": "开源沉浸式翻译插件，支持 20+ 模型商、划词解释、朗读与 YouTube 字幕。",
  "summaryEn": "Open-source immersive translation extension: 20+ providers, TTS, YouTube subs.",
  "strengths": "段落级双语对齐不跑版；批量请求省约 70% API 成本；Chrome/Edge/Firefox 全支持。",
  "strengthsEn": "Paragraph-aligned bilingual view; batching cuts ~70% API cost; cross-browser.",
  "weaknesses": "仍在活跃开发，偶有 bug；不接 Key 时只能用免费基础翻译源。",
  "weaknessesEn": "Actively developed, some rough edges; free tier limited without API key.",
  "bestFor": "想边上网边学外语、又不愿订阅沉浸式翻译会员的学生党与开发者。",
  "bestForEn": "Learners and devs who want immersive translation without a subscription.",
  "affiliate": false,
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-08-10"
}
```

```json
{
  "id": "omni-ai-translator",
  "name": "Omni AI 划词翻译",
  "nameEn": "Omni AI Translator",
  "category": "浏览器插件",
  "tags": ["划词翻译", "免Key可用", "本地模型", "隐私优先", "免费"],
  "tagsEn": ["Selection Translate", "No API Key", "Local Model", "Privacy-first", "Free"],
  "pricing": "free",
  "priceLabel": "免费",
  "priceLabelEn": "Free",
  "priceDetail": "扩展本体免费；接云端大模型需自备 API Key，Key 仅存本地。",
  "priceDetailEn": "Free extension; optional cloud LLM needs your own key, stored locally.",
  "website": "https://chromewebstore.google.com/detail/hlnagbpimgifinglmfbmkgaooneplpli",
  "company": "独立开发者",
  "companyEn": "Independent developer",
  "region": "海外",
  "summary": "选中即译的轻量插件，内置免费翻译源，也可接 Ollama 本地模型全离线。",
  "summaryEn": "Lightweight select-to-translate extension; free sources or offline Ollama.",
  "strengths": "装完即用无需注册；支持 Ollama 完全离线；多翻译源随时切换。",
  "strengthsEn": "Zero setup; fully offline via Ollama; switch among multiple sources.",
  "weaknesses": "只有划词翻译，无全文沉浸式模式；开发者体量小。",
  "weaknessesEn": "Selection-only, no full-page immersive mode; tiny dev team.",
  "bestFor": "只想快速查词句、且对数据隐私敏感的技术文档/论文读者。",
  "bestForEn": "Privacy-sensitive readers who just need quick phrase lookups.",
  "affiliate": false,
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-08-10"
}
```

```json
{
  "id": "browseros-neo",
  "name": "BrowserOS neo",
  "nameEn": "BrowserOS neo",
  "category": "浏览器插件",
  "tags": ["Agent浏览器", "本地运行", "Claude Code", "Codex", "开源"],
  "tagsEn": ["Agent Browser", "Local", "Claude Code", "Codex", "Open Source"],
  "pricing": "free",
  "priceLabel": "免费",
  "priceLabelEn": "Free",
  "priceDetail": "本地运行，浏览器本体免费；接入的模型费用由所连 Agent 自付（档位待确认）。",
  "priceDetailEn": "Free local browser; model costs billed by the connected agent (TBC).",
  "website": "https://browseros.com",
  "company": "BrowserOS",
  "companyEn": "BrowserOS",
  "region": "海外",
  "summary": "不给人用、专给 AI Agent 用的浏览器，让 Claude Code / Codex 替你跑网页任务。",
  "summaryEn": "A browser built for AI agents, letting Claude Code / Codex finish web tasks.",
  "strengths": "在本机运行数据不外传；原生对接主流编码 Agent；任务可复用。",
  "strengthsEn": "Runs locally, data stays put; native hooks into major coding agents; reusable tasks.",
  "weaknesses": "需已在用 Claude Code / Codex 才有意义；非技术用户上手门槛高。",
  "weaknessesEn": "Only useful if you already run coding agents; steep for non-devs.",
  "bestFor": "已经把 Claude Code / Codex 当日常工具、想让它接管网页操作的开发者。",
  "bestForEn": "Devs who live in coding agents and want them to drive the browser.",
  "affiliate": false,
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-08-10"
}
```

```json
{
  "id": "screen-awesome",
  "name": "Screen Awesome",
  "nameEn": "Screen Awesome",
  "category": "浏览器插件",
  "tags": ["录屏", "长截图", "零权限", "隐私优先", "免费"],
  "tagsEn": ["Screen Record", "Scrolling Screenshot", "Zero Permission", "Privacy-first", "Free"],
  "pricing": "free",
  "priceLabel": "免费",
  "priceLabelEn": "Free",
  "priceDetail": "完全免费，无云端上传，无账号体系。",
  "priceDetailEn": "Completely free, no cloud upload, no account.",
  "website": "https://screenawesome.com",
  "company": "独立开发者",
  "companyEn": "Independent developer",
  "region": "海外",
  "summary": "零主机权限的免费录屏扩展，录标签页/全屏/摄像头出 MP4，还能滚动长截图。",
  "summaryEn": "Free recorder with zero host permissions: MP4 capture, scrolling screenshots.",
  "strengths": "声明零 host 权限，Chrome 从机制上禁止它联网上传；带标注编辑。",
  "strengthsEn": "Zero host permissions means Chrome blocks any upload; built-in annotation.",
  "weaknesses": "无云端协作与分享链接；功能相对 Loom 等偏基础。",
  "weaknessesEn": "No cloud sharing; feature set is basic vs Loom.",
  "bestFor": "要录产品演示又不放心把素材传到第三方服务器的产品经理与教师。",
  "bestForEn": "PMs and teachers recording demos who won't upload to third parties.",
  "affiliate": false,
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-08-10"
}
```

### 4.3 搜索研究（2 条）

```json
{
  "id": "sakana-marlin",
  "name": "Sakana Marlin",
  "nameEn": "Sakana Marlin",
  "category": "搜索研究",
  "tags": ["海外", "超深度研究", "自主Agent", "战略报告", "企业级"],
  "tagsEn": ["Overseas", "Ultra Deep Research", "Autonomous Agent", "Strategy Report", "Enterprise"],
  "pricing": "paid",
  "priceLabel": "企业付费",
  "priceLabelEn": "Enterprise",
  "priceDetail": "面向企业客户的商业产品，需洽询报价（公开定价待确认）。",
  "priceDetailEn": "Commercial B2B offering; pricing on request (TBC).",
  "website": "https://sakana.ai/marlin",
  "company": "Sakana AI（日本）",
  "companyEn": "Sakana AI",
  "region": "海外",
  "summary": "单次可自主跑约 8 小时的研究 Agent，产出上百页报告与高管幻灯片。",
  "summaryEn": "Research agent running ~8 hours unattended, producing 100-page reports and exec slides.",
  "strengths": "AB-MCTS 长程规划，深度远超分钟级研究工具；直接出可汇报的幻灯片。",
  "strengthsEn": "AB-MCTS long-horizon planning; ships presentation-ready slides.",
  "weaknesses": "响应以小时计不适合即时问答；结论仍需领域专家复核。",
  "weaknessesEn": "Hours-long latency; conclusions still need expert validation.",
  "bestFor": "做行业尽调、竞品全景、投资评估的战略与研究团队。",
  "bestForEn": "Strategy and research teams doing due diligence and market landscapes.",
  "affiliate": false,
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-08-10"
}
```

```json
{
  "id": "gemini-deep-research",
  "name": "Gemini 深度研究",
  "nameEn": "Gemini Deep Research",
  "category": "搜索研究",
  "tags": ["海外", "Google", "深度研究", "MCP", "带图表报告"],
  "tagsEn": ["Overseas", "Google", "Deep Research", "MCP", "Charts"],
  "pricing": "freemium",
  "priceLabel": "免费起 / API 按量",
  "priceLabelEn": "Free tier / API pay-as-you-go",
  "priceDetail": "Gemini App 内提供免费额度；API 版约 $1–3/次（Max 版 $3–7/次）。",
  "priceDetailEn": "Free quota in Gemini App; API ~$1-3 per task ($3-7 for Max).",
  "website": "https://gemini.google/overview/deep-research/",
  "company": "Google DeepMind",
  "companyEn": "Google DeepMind",
  "region": "海外",
  "summary": "基于 Gemini 3.1 Pro 的自主研究 Agent，单任务最多 160 次检索并原生出图表。",
  "summaryEn": "Autonomous research agent on Gemini 3.1 Pro: up to 160 searches, native charts.",
  "strengths": "可先审改研究计划再开跑；支持 MCP 接内部文档；报告内嵌原生图表与逐句引用。",
  "strengthsEn": "Editable research plan; MCP for internal docs; native charts and inline citations.",
  "weaknesses": "Max 版仅 API 可用无消费级界面；单任务成本高于普通对话数倍。",
  "weaknessesEn": "Max is API-only, no consumer UI; costs several times a normal chat.",
  "bestFor": "要做尽调、竞品分析、行业综述且能接受按次付费的分析师与开发者。",
  "bestForEn": "Analysts and devs doing due diligence who accept per-task pricing.",
  "affiliate": false,
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-08-10"
}
```

### 4.4 办公效率（2 条）

```json
{
  "id": "atlaso",
  "name": "Atlaso",
  "nameEn": "Atlaso",
  "category": "办公效率",
  "tags": ["海外", "AI记忆层", "跨工具", "MCP", "免费起"],
  "tagsEn": ["Overseas", "AI Memory Layer", "Cross-tool", "MCP", "Free tier"],
  "pricing": "freemium",
  "priceLabel": "免费起 / $10 起",
  "priceLabelEn": "Free / from $10",
  "priceDetail": "免费版限 1 设备 1 工具；Pro $10/月不限设备，Build $25/月带记忆 API。",
  "priceDetailEn": "Free: 1 device/1 tool. Pro $10/mo unlimited. Build $25/mo adds memory API.",
  "website": "https://www.atlaso.ai",
  "company": "Atlaso",
  "companyEn": "Atlaso",
  "region": "海外",
  "summary": "给所有 AI 工具装一层共享记忆，在 Claude Code 说过的话 Cursor 里也认。",
  "summaryEn": "One shared memory layer across Claude Code, Cursor, Codex and more.",
  "strengths": "自动抓取决策与风险点；矛盾记忆会被标记并淘汰旧结论；存储前自动清理密钥。",
  "strengthsEn": "Auto-captures decisions; flags contradictions and retires stale facts; scrubs secrets.",
  "weaknesses": "记忆若串错项目会让 AI 基于错误上下文自信作答；安全性目前仅为厂商自述。",
  "weaknessesEn": "Cross-project bleed risks confidently wrong answers; security claims unaudited.",
  "bestFor": "同时用多个 AI 编码/写作工具、烦透了反复交代背景的重度用户。",
  "bestForEn": "Heavy users juggling several AI tools who hate re-explaining context.",
  "affiliate": false,
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-08-10"
}
```

```json
{
  "id": "qwenwork",
  "name": "千问办公",
  "nameEn": "QwenWork",
  "category": "办公效率",
  "tags": ["国产", "阿里", "企业级Agent", "文件交付", "公测"],
  "tagsEn": ["China", "Alibaba", "Enterprise Agent", "File Delivery", "Public Beta"],
  "pricing": "free",
  "priceLabel": "公测免费",
  "priceLabelEn": "Free in beta",
  "priceDetail": "2026-08-03 起公测，个人与企业用户均可免费体验（商业化定价待确认）。",
  "priceDetailEn": "Public beta since 2026-08-03, free for individuals and orgs (pricing TBC).",
  "website": "https://qwenwork.cn",
  "company": "阿里巴巴",
  "companyEn": "Alibaba",
  "region": "国内",
  "summary": "阿里企业级办公 Agent，直接产出可编辑的文档/表格/PPT 而非聊天摘要。",
  "summaryEn": "Alibaba's enterprise office agent that outputs editable docs, sheets and decks.",
  "strengths": "任务拆解到 Office 产物一条龙，共 25 项能力；网页端+PC 客户端双入口；带技能市场。",
  "strengthsEn": "End-to-end task-to-Office pipeline, 25 capabilities; web + desktop; skill market.",
  "weaknesses": "仍在公测，钉钉入口未开放；企业数据合规需自行评估。",
  "weaknessesEn": "Still beta, DingTalk entry pending; enterprise data compliance needs review.",
  "bestFor": "需要 AI 直接交付可编辑文件、而不只是给答案的国内团队。",
  "bestForEn": "China-based teams needing deliverable files, not just chat answers.",
  "affiliate": false,
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-08-10"
}
```

### 4.5 其他类目（4 条）

```json
{
  "id": "coldtea",
  "name": "Coldtea",
  "nameEn": "Coldtea.ai",
  "category": "编程开发",
  "tags": ["海外", "Agentic IDE", "视觉QA", "生产监控", "新品"],
  "tagsEn": ["Overseas", "Agentic IDE", "Visual QA", "Monitoring", "New"],
  "pricing": "freemium",
  "priceLabel": "免费试用",
  "priceLabelEn": "Free trial",
  "priceDetail": "提供免费档，团队版定价待确认。",
  "priceDetailEn": "Free tier available; team pricing TBC.",
  "website": "https://coldtea.ai",
  "company": "Coldtea",
  "companyEn": "Coldtea",
  "region": "海外",
  "summary": "把编码 Agent、视觉回归 QA 与生产监控串成一条链的 Agentic IDE。",
  "summaryEn": "Agentic IDE chaining coding agents, visual QA and production monitoring.",
  "strengths": "针对「AI 提速后线上更容易崩」的真实痛点；QA Agent 自动抓视觉回归。",
  "strengthsEn": "Targets the real pain of AI-speed shipping; QA agents catch visual regressions.",
  "weaknesses": "刚发布无长期口碑；换 IDE 迁移成本高。",
  "weaknessesEn": "Brand new, no track record; switching IDEs is costly.",
  "bestFor": "已经大量用 AI 写代码、但被线上稳定性拖住的小团队。",
  "bestForEn": "Small teams shipping heavily with AI but blocked by production stability.",
  "affiliate": false,
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-08-10"
}
```

```json
{
  "id": "rindler",
  "name": "Rindler",
  "nameEn": "Rindler",
  "category": "Agent自动化",
  "tags": ["海外", "网页自动化", "自然语言", "定时任务", "结构化输出"],
  "tagsEn": ["Overseas", "Web Automation", "Natural Language", "Scheduled", "Structured Output"],
  "pricing": "freemium",
  "priceLabel": "免费起",
  "priceLabelEn": "Free tier",
  "priceDetail": "提供免费额度，按任务量分档（具体价格待确认）。",
  "priceDetailEn": "Free quota with usage-based tiers (pricing TBC).",
  "website": "https://rindler.com",
  "company": "Rindler",
  "companyEn": "Rindler",
  "region": "海外",
  "summary": "用大白话描述需求，它登录真实网站完成操作并回吐结构化数据。",
  "summaryEn": "Describe the task in plain English; it signs in, does it, returns clean data.",
  "strengths": "提前给站点建图而不是每次让 Agent 瞎猜；页面改版能自愈；可设定时。",
  "strengthsEn": "Pre-maps sites instead of guessing; self-repairs on layout changes; schedulable.",
  "weaknesses": "涉及登录凭据，安全边界需谨慎评估；目标站点若强反爬仍会失败。",
  "weaknessesEn": "Handles login credentials—assess security carefully; hard bot-walls still break it.",
  "bestFor": "还在人肉重复登录后台抓数据、导报表的运营与财务团队。",
  "bestForEn": "Ops and finance teams still logging into portals by hand.",
  "affiliate": false,
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-08-10"
}
```

```json
{
  "id": "ctruh-studio",
  "name": "Ctruh Studio",
  "nameEn": "Ctruh Studio",
  "category": "设计创意",
  "tags": ["海外", "3D/XR", "无代码", "AR", "网页嵌入"],
  "tagsEn": ["Overseas", "3D/XR", "No-code", "AR", "Web Embed"],
  "pricing": "freemium",
  "priceLabel": "免费起",
  "priceLabelEn": "Free tier",
  "priceDetail": "提供免费创作额度，商用与高级导出需付费（档位待确认）。",
  "priceDetailEn": "Free creation quota; commercial/advanced export paid (tiers TBC).",
  "website": "https://ctruh.com",
  "company": "Ctruh",
  "companyEn": "Ctruh",
  "region": "海外",
  "summary": "无代码搭 3D/XR 网页体验，AI 直接生成 3D 资产，浏览器里跑配置器与 AR。",
  "summaryEn": "No-code 3D/XR web experiences with AI-generated assets, configurators and AR.",
  "strengths": "不写代码就能上线产品展示与虚拟商店；AI 生成资产省建模成本。",
  "strengthsEn": "Ship product showcases and virtual stores without code; AI assets cut modeling cost.",
  "weaknesses": "精细度不如专业 3D 管线；3D 页面对移动端性能要求高。",
  "weaknessesEn": "Less refined than pro 3D pipelines; heavy on mobile performance.",
  "bestFor": "想给电商详情页加 3D 配置器或 AR 试用的品牌与独立站运营。",
  "bestForEn": "Brands adding 3D configurators or AR try-on to product pages.",
  "affiliate": false,
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-08-10"
}
```

```json
{
  "id": "video-ai-me",
  "name": "VIDEO AI ME",
  "nameEn": "VIDEO AI ME",
  "category": "视频生成",
  "tags": ["海外", "UGC广告", "多平台分发", "批量排期", "口播视频"],
  "tagsEn": ["Overseas", "UGC Ads", "Multi-platform", "Bulk Schedule", "Product Video"],
  "pricing": "paid",
  "priceLabel": "订阅制",
  "priceLabelEn": "Subscription",
  "priceDetail": "按月订阅，按生成条数分档（具体价格待确认）。",
  "priceDetailEn": "Monthly subscription tiered by video volume (pricing TBC).",
  "website": "https://videoai.me",
  "company": "VIDEO AI ME",
  "companyEn": "VIDEO AI ME",
  "region": "海外",
  "summary": "一个工具做完 UGC 广告与产品视频，并一键发到 15 个平台。",
  "summaryEn": "Create UGC ads and product videos, then publish to 15 platforms in one tool.",
  "strengths": "从脚本自动写各平台专属文案；单次可批量排期 25 条视频。",
  "strengthsEn": "Auto-writes platform-specific captions; bulk-schedules 25 videos at once.",
  "weaknesses": "模板化痕迹重，不适合品牌调性要求高的内容；纯付费。",
  "weaknessesEn": "Template-heavy look; not for brand-sensitive creative; paid only.",
  "bestFor": "跑量投放 UGC 素材、需要日更多平台短视频的电商投手。",
  "bestForEn": "E-commerce media buyers running high-volume UGC creative daily.",
  "affiliate": false,
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-08-10"
}
```

---

## 五、下周建议

1. **先改 3 条 URL**（`alibaba-translate` / `perplexica` / `zoom-ai`），已验证替代地址可用，改完死链立减 25%。
2. `phind` 与 `phind-search` 根域双双 404，建议人工打开一次确认是否下线；若确认下线，两条一起摘掉。
3. `listen-ink`、`yizhuan` 两条虽未判死链，但一个解析到域名停靠、一个证书异常，值得人工点开看一眼。
4. 新品若全部入库，浏览器插件 29→33、翻译语言 25→27、搜索研究 26→28，三个短板类目补齐后各类目差距会收窄到 6 条以内。
5. 本次扫描脚本已固化为 `scripts/_check_links.py`（含 DoH 二次复核逻辑），下周可直接复用。
