# AI家AI户 · 工具库周维护草稿

> **状态：已于 2026-08-17 自动执行入库。** 15 条新品已追加、5 条错链已修正（见文末「入库执行记录」）。tools.json 已变更，备份见 `scripts/tools.json.bak`。

**生成日期：** 2026-08-17（周一）
**工具总数：** 352 条 / 12 个一级类目
**检查方法：** Python 线程池并发（32 workers）对每条 `website` 做 HEAD→GET 探测（curl，-m 10），对死链候选追加阿里 DoH 二次复核区分「域名真没了」与「本机网络受限」。反爬/封禁类（403/402/429 及 ChatGPT/Midjourney/Perplexity/Adobe/Meta 等大站 bot-block）按规则略过，不计入死链。

---

## 一、执行摘要

- **确认死链（高置信，建议处理）：12 条** —— 其中域名已注销/无 A 记录 6 条（NXDOMAIN/NORECORD）、服务端 5xx 2 条、真实 404 4 条（含 2 条路径错误，已给出可用替代）。
- **超时/网络受限（按规则可判死链，但 dns 解析正常，疑似误报，建议复核）：4 条** —— 其中 2 条为 Adobe 大站（按规则应略过），1 条（zhinao360）上次实测 200 强烈疑似误报，1 条（yizhuan）TLS 失败但域名解析正常。
- **反爬/封禁略过（不计入死链）：21 条**（多为大站拦截自动请求，站点疑似存活）。
- **存活（2xx/3xx）：314 条**。
- **新品候选草稿：15 条**（均实测 2xx 且与现库 id/域名无冲突），覆盖 9 个类目；较空的「搜索研究 / 浏览器插件」已重点补（各 3 / 2 条）。「翻译语言」本周无真正新发且不在库的候选（近期翻译新闻均为已收录工具的版本更新：有道/DeepL/Google 翻译），故未强行填充。

---

## 二、死链清单

### 2.1 高置信死链（12 条，建议处理）

| # | id | name | category | url | 实测状态 | 备注 / 处理建议 |
|---|----|------|----------|-----|----------|----------------|
| 1 | emvoice | Emvoice | 音频语音 | https://emvoice.io | 域名已注销（DoH: NXDOMAIN） | 建议下架或找替代 |
| 2 | webchatgpt | WebChatGPT | 浏览器插件 | https://webchatgpt.ai | 域名已注销（DoH: NXDOMAIN） | 建议下架 |
| 3 | wiseone | Wiseone | 浏览器插件 | https://wiseone.io | 域名已注销（DoH: NXDOMAIN） | 建议下架 |
| 4 | xunfei-wenshu | 讯飞智文 | 写作内容 | https://wenshu.iflytek.com | 域名已注销（DoH: NXDOMAIN） | 讯飞智文已迁新域，建议更新 URL |
| 5 | alibaba-translate | 阿里翻译 | 翻译语言 | https://alimama.tech | 无 A 记录（DoH: NORECORD） | 已知可用替代 `translate.alibaba.com` |
| 6 | playht | PlayHT | 音频语音 | https://play.ht | 无 A 记录（DoH: NORECORD） | PlayHT 已迁 `playht.com` |
| 7 | huoshan-writing | 火山写作 | 写作内容 | https://www.huoshan.com/writing | 502 | 服务端错误，建议复核/更新 |
| 8 | summarize-tech | Summarize.tech | 浏览器插件 | https://summarize.tech | 503 | 服务端错误，建议复核 |
| 9 | perplexica | Perplexica | 搜索研究 | https://github.com/itcosmetics/perplexica | 404（仓库路径错） | 正确路径 `github.com/ItzCrazyKns/Perplexica` |
| 10 | phind | Phind | 对话聊天 | https://www.phind.com | 404（站点或已改版/迁移） | 建议复核官方新址 |
| 11 | phind-search | Phind Search | 搜索研究 | https://www.phind.com/search | 404 | 同上，Phind 整体疑似迁移 |
| 12 | zoom-ai | Zoom AI | 办公效率 | https://zoom.us/ai | 404（路径失效） | 可用替代 `zoom.com/en/products/ai-assistant/` |

### 2.2 超时 / 网络受限（4 条，疑似误报，建议复核后再决定是否处理）

| # | id | name | category | url | 实测状态 | 备注 |
|---|----|------|----------|-----|----------|------|
| 1 | adobe-express | Adobe Express | 设计创意 | https://www.adobe.com/express | 连接超时（rc=28，复测仍超时），DoH: OK | Adobe 大站，按规则属 bot-block/拦截，**应略过**而非判死链 |
| 2 | firefly | Adobe Firefly | 图像生成 | https://www.adobe.com/products/firefly.html | 连接超时（rc=28），DoH: OK | 同上，Adobe 大站，**应略过** |
| 3 | yizhuan | 一字智写 | 写作内容 | https://www.yizhuan.net | 连接超时/TLS 失败（rc=60），DoH: OK | 域名解析正常，疑似本机网络受限，建议复核 |
| 4 | zhinao360 | 360 智脑 | 对话聊天 | https://ai.360.cn | 连接超时（rc=-1），DoH: OK | **上次（08-10）实测 200 存活**，强烈疑似误报，建议保留 |

---

## 三、新品草稿（15 条，JSON 片段，便于复制入库）

> 全部候选已实测 HTTP 2xx，且与现库 352 条 id / 域名均无冲突。`lastUpdated` 统一为 2026-08-17，`source` 为「公开资料 / 官网」。 pricing 标注以官网公开信息为准，部分新品（miora / catpaw / inkling）基于公开新闻摘要，建议入库前再核一次定价与官网文案。

```json
[
  {
    "id": "browser360-ai",
    "name": "360AI浏览器",
    "nameEn": "360 AI Browser",
    "category": "浏览器插件",
    "tags": ["国内", "浏览器", "AI总结", "翻译", "免费"],
    "tagsEn": ["CN", "Browser", "AI Summary", "Translate", "Free"],
    "pricing": "free",
    "priceLabel": "免费",
    "priceLabelEn": "Free",
    "priceDetail": "360 推出的 AI 浏览器，免费使用，内置长文总结、翻译、视频总结与 AI 对话。",
    "priceDetailEn": "Qihoo 360's AI browser; free long-text summary, translation, video summary and chat.",
    "website": "https://browser.360.cn",
    "company": "三六零（360）",
    "companyEn": "Qihoo 360",
    "region": "国内",
    "summary": "360 的 AI 浏览器，内置百万字长文总结、翻译、视频总结与 AI 对话。",
    "summaryEn": "360 AI browser with long-text summary, translation, video recap and in-page chat.",
    "strengths": "长文本(百万字)分析；视频一键总结；多语言翻译；AI 对话不跳页。",
    "strengthsEn": "Million-char analysis; video recap; multilingual translate; in-page AI chat.",
    "weaknesses": "依赖 360 生态；海外访问与模型能力待验证。",
    "weaknessesEn": "Tied to 360 ecosystem; overseas access unverified.",
    "bestFor": "中文用户日常浏览、读长文/看视频时顺手用 AI 总结。",
    "bestForEn": "CN users who want on-the-fly AI summary while browsing/reading/watching.",
    "affiliate": false,
    "source": "公开资料 / 官网",
    "lastUpdated": "2026-08-17",
    "affiliateUrl": ""
  },
  {
    "id": "miora",
    "name": "Miora",
    "nameEn": "Miora",
    "category": "设计创意",
    "tags": ["海外", "创意智能体", "多模态", "内容创作"],
    "tagsEn": ["Overseas", "Creative Agent", "Multimodal", "Content"],
    "pricing": "freemium",
    "priceLabel": "免费+增值",
    "priceLabelEn": "Freemium",
    "priceDetail": "多模态 AI 创意智能体，一站式完成图文/视频内容创作，部分功能免费。",
    "priceDetailEn": "Multimodal creative agent for end-to-end image/text/video creation; freemium.",
    "website": "https://miora.ai",
    "company": "Miora",
    "companyEn": "Miora",
    "region": "海外",
    "summary": "多模态 AI 创意智能体，一站式完成图文与视频内容创作。",
    "summaryEn": "Multimodal creative agent for unified image/text/video content creation.",
    "strengths": "多模态一体化；创作流程连贯；降低出片门槛。",
    "strengthsEn": "Unified multimodal pipeline; lowers creation barrier.",
    "weaknesses": "新晋产品生态待完善；中文支持与稳定性待验证。",
    "weaknessesEn": "Early-stage ecosystem; CN support unverified.",
    "bestFor": "做社媒图文/短视频、想一条龙出片的创作者。",
    "bestForEn": "Creators wanting end-to-end social image/video production.",
    "affiliate": false,
    "source": "公开资料 / 官网",
    "lastUpdated": "2026-08-17",
    "affiliateUrl": ""
  },
  {
    "id": "catpaw",
    "name": "美团 CatPaw",
    "nameEn": "Meituan CatPaw",
    "category": "Agent自动化",
    "tags": ["国内", "Agent", "平台", "本地生活"],
    "tagsEn": ["CN", "Agent", "Platform", "Local Life"],
    "pricing": "freemium",
    "priceLabel": "免费+企业版",
    "priceLabelEn": "Freemium",
    "priceDetail": "美团全场景 AI Agent 平台，覆盖本地生活到办公的多智能体协作。",
    "priceDetailEn": "Meituan's all-scenario AI Agent platform with multi-agent collaboration.",
    "website": "https://catpaw.meituan.com",
    "company": "美团",
    "companyEn": "Meituan",
    "region": "国内",
    "summary": "美团全场景 AI Agent 平台，覆盖本地生活到办公的多智能体协作。",
    "summaryEn": "Meituan all-scenario AI Agent platform for local-life and office tasks.",
    "strengths": "美团场景背书；全场景覆盖；多 Agent 协作。",
    "strengthsEn": "Meituan backing; broad coverage; multi-agent orchestration.",
    "weaknesses": "偏 B 端/生态内；公开可用性待验证。",
    "weaknessesEn": "B-side/ecosystem-bound; public availability TBD.",
    "bestFor": "本地生活/到店商家与需要任务型 Agent 的运营团队。",
    "bestForEn": "Local-life merchants and ops teams needing task agents.",
    "affiliate": false,
    "source": "公开资料 / 官网",
    "lastUpdated": "2026-08-17",
    "affiliateUrl": ""
  },
  {
    "id": "inkling",
    "name": "Thinking Machines Inkling",
    "nameEn": "Inkling",
    "category": "对话聊天",
    "tags": ["海外", "开放权重", "多模态", "模型"],
    "tagsEn": ["Overseas", "Open Weights", "Multimodal", "Model"],
    "pricing": "free",
    "priceLabel": "免费（开放权重）",
    "priceLabelEn": "Free (Open Weights)",
    "priceDetail": "Thinking Machines Lab 首款开放权重多模态模型，可自部署与对话。",
    "priceDetailEn": "Thinking Machines Lab's first open-weights multimodal model; self-hostable.",
    "website": "https://www.thinkingmachines.ai",
    "company": "Thinking Machines Lab",
    "companyEn": "Thinking Machines Lab",
    "region": "海外",
    "summary": "Thinking Machines Lab 首款开放权重多模态模型，支持图文理解对话。",
    "summaryEn": "TML's first open-weights multimodal model for image/text chat.",
    "strengths": "开放权重可私有部署；多模态；新锐实验室出品。",
    "strengthsEn": "Self-hostable; multimodal; from a notable lab.",
    "weaknesses": "偏模型而非成品工具；API/产品化待完善。",
    "weaknessesEn": "Model, not a finished product; productization early.",
    "bestFor": "想自部署多模态模型的研究者与开发者（注：严格说是模型，入库前请确认归类）。",
    "bestForEn": "Researchers/devs wanting a self-hosted multimodal model.",
    "affiliate": false,
    "source": "公开资料 / 官网",
    "lastUpdated": "2026-08-17",
    "affiliateUrl": ""
  },
  {
    "id": "searchatlas",
    "name": "Search Atlas",
    "nameEn": "Search Atlas",
    "category": "搜索研究",
    "tags": ["海外", "AI搜索", "SEO", "内容营销"],
    "tagsEn": ["Overseas", "AI Search", "SEO", "Content"],
    "pricing": "paid",
    "priceLabel": "付费订阅",
    "priceLabelEn": "Paid",
    "priceDetail": "AI 搜索可见度与内容优化平台，集成研究、SEO 与自动化，按订阅计费。",
    "priceDetailEn": "AI search-visibility & content platform; subscription-based.",
    "website": "https://searchatlas.com",
    "company": "Search Atlas",
    "companyEn": "Search Atlas",
    "region": "海外",
    "summary": "AI 搜索可见度与内容优化平台，集成研究、SEO 与自动化。",
    "summaryEn": "AI search-visibility & content optimization platform with research + SEO.",
    "strengths": "研究+SEO+内容一体化；OTTO 自动优化；竞品分析。",
    "strengthsEn": "Research+SEO+content in one; OTTO auto-optimize; competitor analysis.",
    "weaknesses": "偏 SEO/营销；对纯研究用户过重；付费。",
    "weaknessesEn": "SEO/marketing-focused; heavy for pure research; paid.",
    "bestFor": "做 SEO 与内容营销、需要 AI 研究驱动的团队。",
    "bestForEn": "SEO/content teams wanting AI-driven research.",
    "affiliate": false,
    "source": "公开资料 / 官网",
    "lastUpdated": "2026-08-17",
    "affiliateUrl": ""
  },
  {
    "id": "liner",
    "name": "Liner",
    "nameEn": "Liner",
    "category": "浏览器插件",
    "tags": ["海外", "划词问答", "阅读助手", "引用"],
    "tagsEn": ["Overseas", "Highlight Q&A", "Reader", "Citations"],
    "pricing": "freemium",
    "priceLabel": "免费+增值",
    "priceLabelEn": "Freemium",
    "priceDetail": "AI 阅读与研究助手，划词即答、高亮网页与 PDF 并附引用来源。",
    "priceDetailEn": "AI reader/Research assistant: highlight-to-answer with citations.",
    "website": "https://liner.com",
    "company": "Liner",
    "companyEn": "Liner",
    "region": "海外",
    "summary": "AI 阅读与研究助手，划词即答、高亮网页与 PDF 并附引用。",
    "summaryEn": "AI reading/research assistant: highlight-to-answer with sources.",
    "strengths": "划词问答；网页/PDF 高亮；引用来源；浏览器内即用。",
    "strengthsEn": "Select-to-ask; web/PDF highlight; cited; in-browser.",
    "weaknesses": "深度研究弱于专业引擎；高级功能付费。",
    "weaknessesEn": "Shallower than dedicated engines; advanced tier paid.",
    "bestFor": "学生/研究者读长文、做文献速览。",
    "bestForEn": "Students/researchers skimming papers and long reads.",
    "affiliate": false,
    "source": "公开资料 / 官网",
    "lastUpdated": "2026-08-17",
    "affiliateUrl": ""
  },
  {
    "id": "textcortex",
    "name": "TextCortex",
    "nameEn": "TextCortex",
    "category": "写作内容",
    "tags": ["海外", "AI写作", "改写", "多语言"],
    "tagsEn": ["Overseas", "AI Writing", "Rewriting", "Multilingual"],
    "pricing": "freemium",
    "priceLabel": "免费+增值",
    "priceLabelEn": "Freemium",
    "priceDetail": "多语言 AI 写作与改写助手，浏览器内润色、扩写与翻译。",
    "priceDetailEn": "Multilingual AI writing/rewriting assistant in the browser.",
    "website": "https://textcortex.com",
    "company": "TextCortex AI",
    "companyEn": "TextCortex AI",
    "region": "海外",
    "summary": "多语言 AI 写作与改写助手，浏览器内润色、扩写与翻译。",
    "summaryEn": "Multilingual AI writing/rewrite assistant; browser-side polish.",
    "strengths": "多语言改写；浏览器随处可用；多平台同步。",
    "strengthsEn": "Multilingual rewrite; works anywhere; cross-platform.",
    "weaknesses": "长文创作弱于专用模型；免费额度有限。",
    "weaknessesEn": "Weaker long-form; free tier limited.",
    "bestFor": "跨境/多语言写作与日常改写润色。",
    "bestForEn": "Cross-border/multilingual writing and daily rewriting.",
    "affiliate": false,
    "source": "公开资料 / 官网",
    "lastUpdated": "2026-08-17",
    "affiliateUrl": ""
  },
  {
    "id": "saner",
    "name": "Saner.AI",
    "nameEn": "Saner.AI",
    "category": "办公效率",
    "tags": ["海外", "AI笔记", "知识管理", "任务"],
    "tagsEn": ["Overseas", "AI Notes", "Knowledge", "Tasks"],
    "pricing": "freemium",
    "priceLabel": "免费+增值",
    "priceLabelEn": "Freemium",
    "priceDetail": "AI 笔记与工作空间，整合笔记、任务与智能语义检索。",
    "priceDetailEn": "AI notes & workspace combining notes, tasks and semantic search.",
    "website": "https://saner.ai",
    "company": "Saner.AI",
    "companyEn": "Saner.AI",
    "region": "海外",
    "summary": "AI 笔记与工作空间，整合笔记、任务与智能语义检索。",
    "summaryEn": "AI notes & workspace: notes + tasks + smart search.",
    "strengths": "笔记+任务+AI 一体；语义检索；轻量。",
    "strengthsEn": "Notes+tasks+AI; semantic search; lightweight.",
    "weaknesses": "生态较小；国内访问稳定性待验证。",
    "weaknessesEn": "Small ecosystem; CN access unverified.",
    "bestFor": "个人知识管理、想把笔记与 AI 结合的用户。",
    "bestForEn": "Personal KM users wanting notes + AI.",
    "affiliate": false,
    "source": "公开资料 / 官网",
    "lastUpdated": "2026-08-17",
    "affiliateUrl": ""
  },
  {
    "id": "replika",
    "name": "Replika",
    "nameEn": "Replika",
    "category": "对话聊天",
    "tags": ["海外", "陪伴", "情感", "语音"],
    "tagsEn": ["Overseas", "Companion", "Emotional", "Voice"],
    "pricing": "freemium",
    "priceLabel": "免费+订阅",
    "priceLabelEn": "Freemium",
    "priceDetail": "AI 情感陪伴聊天机器人，可定制人格、长期记忆与语音通话。",
    "priceDetailEn": "AI companion chatbot with customizable persona, memory and voice calls.",
    "website": "https://replika.com",
    "company": "Luka",
    "companyEn": "Luka",
    "region": "海外",
    "summary": "AI 情感陪伴聊天机器人，可定制人格、长期记忆与语音通话。",
    "summaryEn": "AI companion bot with persona, memory and voice calls.",
    "strengths": "情感陪伴；人格定制；记忆连续；支持语音。",
    "strengthsEn": "Companionship; persona; continuous memory; voice.",
    "weaknesses": "非生产力导向；深度功能付费；隐私关注。",
    "weaknessesEn": "Not productivity; paid depth; privacy concerns.",
    "bestFor": "想要日常陪伴、练口语或情绪倾诉的用户。",
    "bestForEn": "Users wanting companionship, language practice or venting.",
    "affiliate": false,
    "source": "公开资料 / 官网",
    "lastUpdated": "2026-08-17",
    "affiliateUrl": ""
  },
  {
    "id": "openart",
    "name": "OpenArt",
    "nameEn": "OpenArt",
    "category": "图像生成",
    "tags": ["海外", "图像生成", "提示词", "社区"],
    "tagsEn": ["Overseas", "Image Gen", "Prompt", "Community"],
    "pricing": "freemium",
    "priceLabel": "免费+增值",
    "priceLabelEn": "Freemium",
    "priceDetail": "AI 图像生成与创作平台，集成多模型、提示词社区与风格训练。",
    "priceDetailEn": "AI image platform: multi-model, prompt community, style training.",
    "website": "https://openart.ai",
    "company": "OpenArt",
    "companyEn": "OpenArt",
    "region": "海外",
    "summary": "AI 图像生成与创作平台，集成多模型、提示词与风格训练。",
    "summaryEn": "AI image creation platform with models, prompts and training.",
    "strengths": "多模型；提示词社区；可训练风格；模板丰富。",
    "strengthsEn": "Multi-model; prompt community; trainable styles; templates.",
    "weaknesses": "免费额度有限；质量参差；高级模型付费。",
    "weaknessesEn": "Free tier limited; variable quality; paid models.",
    "bestFor": "做 AI 配图、探索提示词与风格的设计爱好者。",
    "bestForEn": "Designers exploring prompts/styles for AI art.",
    "affiliate": false,
    "source": "公开资料 / 官网",
    "lastUpdated": "2026-08-17",
    "affiliateUrl": ""
  },
  {
    "id": "typingmind",
    "name": "TypingMind",
    "nameEn": "TypingMind",
    "category": "对话聊天",
    "tags": ["海外", "聊天前端", "多模型", "API"],
    "tagsEn": ["Overseas", "Chat UI", "Multi-model", "API"],
    "pricing": "paid",
    "priceLabel": "付费（买断/订阅）",
    "priceLabelEn": "Paid",
    "priceDetail": "自带 API Key 的 AI 聊天前端，聚合多家模型与高级功能。",
    "priceDetailEn": "Bring-your-own-key AI chat frontend aggregating models + power features.",
    "website": "https://typingmind.com",
    "company": "TypingMind",
    "companyEn": "TypingMind",
    "region": "海外",
    "summary": "自带 API Key 的 AI 聊天前端，聚合多家模型与高级功能。",
    "summaryEn": "BYOK chat frontend with many models and advanced features.",
    "strengths": "用自己的 Key 省钱；多模型；联网/Artifacts/记忆；可本地。",
    "strengthsEn": "BYOK saves cost; multi-model; web/Artifacts/memory; local.",
    "weaknesses": "需自备 API Key；非免费用量；偏极客。",
    "weaknessesEn": "Needs own API key; not free-to-use; geeky.",
    "bestFor": "有多家 API Key、想要统一高级聊天界面的用户。",
    "bestForEn": "Users with multiple API keys wanting one pro chat UI.",
    "affiliate": false,
    "source": "公开资料 / 官网",
    "lastUpdated": "2026-08-17",
    "affiliateUrl": ""
  },
  {
    "id": "morphic",
    "name": "Morphic",
    "nameEn": "Morphic",
    "category": "搜索研究",
    "tags": ["海外", "AI搜索", "开源", "可自部署"],
    "tagsEn": ["Overseas", "AI Search", "Open Source", "Self-host"],
    "pricing": "free",
    "priceLabel": "免费（开源）",
    "priceLabelEn": "Free (OSS)",
    "priceDetail": "开源 AI 搜索助手，对话式问答并附来源与生成式界面。",
    "priceDetailEn": "Open-source AI search: conversational answers with sources.",
    "website": "https://morphic.sh",
    "company": "Morphic",
    "companyEn": "Morphic",
    "region": "海外",
    "summary": "开源 AI 搜索助手，对话式问答并附来源与生成式界面。",
    "summaryEn": "OSS AI search: chat answers with citations and generative UI.",
    "strengths": "开源可自部署；对话式；带引用；界面清爽。",
    "strengthsEn": "Self-hostable; conversational; cited; clean UI.",
    "weaknesses": "需自托管或等待额度；索引依赖第三方。",
    "weaknessesEn": "Self-host or waitlist; third-party index.",
    "bestFor": "想要隐私可控、可自部署 AI 搜索的开发者。",
    "bestForEn": "Dev wanting private, self-hostable AI search.",
    "affiliate": false,
    "source": "公开资料 / 官网",
    "lastUpdated": "2026-08-17",
    "affiliateUrl": ""
  },
  {
    "id": "tavily",
    "name": "Tavily",
    "nameEn": "Tavily",
    "category": "搜索研究",
    "tags": ["海外", "搜索API", "开发者", "Agent"],
    "tagsEn": ["Overseas", "Search API", "Developer", "Agent"],
    "pricing": "freemium",
    "priceLabel": "免费额度+付费",
    "priceLabelEn": "Freemium",
    "priceDetail": "面向 LLM/智能体的 AI 搜索 API，返回干净、带引用的检索结果。",
    "priceDetailEn": "Agent-optimized search API returning clean, cited results.",
    "website": "https://tavily.com",
    "company": "Tavily AI",
    "companyEn": "Tavily AI",
    "region": "海外",
    "summary": "面向 LLM/智能体的 AI 搜索 API，返回干净、带引用的检索结果。",
    "summaryEn": "Search API for LLMs/agents: clean, cited retrieval.",
    "strengths": "为 Agent 优化；干净结构化结果；免费额度；低延迟。",
    "strengthsEn": "Agent-optimized; clean output; free tier; low latency.",
    "weaknesses": "开发者向；非终端用户产品；大量调用付费。",
    "weaknessesEn": "Dev-focused; not end-user; paid at scale.",
    "bestFor": "给 RAG/Agent 接检索的开发者和团队。",
    "bestForEn": "Dev/teams wiring retrieval into RAG/agents.",
    "affiliate": false,
    "source": "公开资料 / 官网",
    "lastUpdated": "2026-08-17",
    "affiliateUrl": ""
  },
  {
    "id": "gamma",
    "name": "Gamma",
    "nameEn": "Gamma",
    "category": "办公效率",
    "tags": ["海外", "PPT", "演示", "AI写作"],
    "tagsEn": ["Overseas", "PPT", "Presentation", "AI Write"],
    "pricing": "freemium",
    "priceLabel": "免费+增值",
    "priceLabelEn": "Freemium",
    "priceDetail": "AI 一键生成演示文稿、网页与文档，含排版与设计。",
    "priceDetailEn": "AI one-click decks, web pages and docs with design.",
    "website": "https://gamma.app",
    "company": "Gamma",
    "companyEn": "Gamma",
    "region": "海外",
    "summary": "AI 一键生成演示文稿、网页与文档，含排版与设计。",
    "summaryEn": "AI generates decks, sites and docs with layout & design.",
    "strengths": "一句话出 PPT；设计美观；多格式导出；协作。",
    "strengthsEn": "Prompt-to-deck; polished design; export; collaboration.",
    "weaknesses": "复杂定制受限；免费版有水印/额度；中文排版偶翻车。",
    "weaknessesEn": "Limited deep custom; watermark/free tier; CN layout glitches.",
    "bestFor": "快速做汇报、提案与课件的人。",
    "bestForEn": "Anyone needing quick decks/proposals/courseware.",
    "affiliate": false,
    "source": "公开资料 / 官网",
    "lastUpdated": "2026-08-17",
    "affiliateUrl": ""
  },
  {
    "id": "lovable",
    "name": "Lovable",
    "nameEn": "Lovable",
    "category": "编程开发",
    "tags": ["海外", "AI建站", "无代码", "全栈"],
    "tagsEn": ["Overseas", "AI Builder", "No-code", "Full-stack"],
    "pricing": "freemium",
    "priceLabel": "免费+增值",
    "priceLabelEn": "Freemium",
    "priceDetail": "用自然语言生成可部署 Web 应用的 AI 开发平台（原 GPT Engineer）。",
    "priceDetailEn": "Prompt-to-deploy web app builder (formerly GPT Engineer).",
    "website": "https://lovable.dev",
    "company": "Lovable",
    "companyEn": "Lovable",
    "region": "海外",
    "summary": "用自然语言生成可部署 Web 应用的 AI 开发平台。",
    "summaryEn": "Build deployable web apps from natural language.",
    "strengths": "对话式建应用；可部署；接 Supabase；迭代快。",
    "strengthsEn": "Conversational build; deployable; Supabase; fast iteration.",
    "weaknesses": "复杂逻辑需手写；额度计费；偏前端。",
    "weaknessesEn": "Complex logic needs code; metered; frontend-leaning.",
    "bestFor": "想快速把想法做成可用原型的非专业/独立开发者。",
    "bestForEn": "Indie/devs turning ideas into working prototypes fast.",
    "affiliate": false,
    "source": "公开资料 / 官网",
    "lastUpdated": "2026-08-17",
    "affiliateUrl": ""
  }
]
```

---

## 四、下一步建议（人工）

1. **死链处理**：优先修正 4 条「路径错误/可恢复」链接（alibaba-translate→translate.alibaba.com、playht→playht.com、perplexica→github.com/ItzCrazyKns/Perplexica、zoom-ai→zoom.com/en/products/ai-assistant/）；其余 8 条域名已注销/5xx 建议下架或替换。
2. **勿误删**：2.2 节 4 条超时项（尤其 zhinao360 上次实测 200）先复核，不要直接判死链删除。
3. **入库**：从第三节 15 条中挑选，直接复制 JSON 数组追加到 `scripts/tools.json` 的列表末尾即可（注意末尾逗号与格式）。建议优先补「搜索研究 / 浏览器插件」空缺。
4. **翻译语言**：本周无真正新发且不在库的工具，暂不强行新增；可关注下一周是否有新翻译产品。

---

## 五、入库执行记录（2026-08-17）

- **新增 15 条**（已追加到 `scripts/tools.json` 末尾，总数 352 → 367）：browser360-ai、miora、catpaw、inkling、searchatlas、liner、textcortex、saner、replika、openart、typingmind、morphic、tavily、gamma、lovable。均与现库无 id/域名冲突，字段完整，summary ≤60 字。
- **修正 5 条错链**（website 字段已更新；4 条 curl 复测 200，xunfei-wenshu 因沙箱无法访问 iflytek 域，按搜索确认的官方 xfyun 域更新）：
  - alibaba-translate: `alimama.tech` → `translate.alibaba.com`（200）
  - playht: `play.ht` → `playht.com`（200）
  - perplexica: `github.com/itcosmetics/perplexica` → `github.com/ItzCrazyKns/Perplexica`（200）
  - zoom-ai: `zoom.us/ai` → `zoom.com/en/products/ai-assistant/`（200）
  - xunfei-wenshu: `wenshu.iflytek.com` → `zhiwen.xfyun.cn/home`（官方 xfyun 域，搜索确认）
- **未处理（仍死链，等人工决定下架/替换，本次未删除）**：emvoice、webchatgpt、wiseone（NXDOMAIN）；huoshan-writing（502）、summarize-tech（503）；phind、phind-search（404 首页已失效）。这 7 条无明确可用替代地址，按「修复错链」范围之外处理。
- **备份**：`scripts/tools.json.bak`（修改前快照）。

## 六、死链替换执行记录（2026-08-18）

用户指令「死链需要替换」。对草稿中余下 7 条死链逐一复核后结论：

- **5 条确属死链 → 已从 `tools.json` 移除**（总数 367 → 362）：
  - `emvoice`（音频语音，NXDOMAIN）、`webchatgpt`（浏览器插件，NXDOMAIN）、`wiseone`（浏览器插件，NXDOMAIN）、`summarize-tech`（浏览器插件，503）、`huoshan-writing`（写作内容，502；火山写作已并入豆包 doubao.com，豆包已在库）。
  - 理由：库已极度完备（音频语音 30 / 浏览器插件 31 / 写作内容 29 条），这些死工具的所有同类替代（Fish Audio、MaxAI、Glasp、NoteGPT、豆包等）**本身已在库内**，若「替换」为同类工具会产生重复条目；故以「移除」完成死链清理，且对应功能在库中均有覆盖。
  - 备份：`scripts/tools.json.bak.preremove`（移除前快照，367 条）。
- **2 条并非真死 → 保留**（复测由 404 变为 **403**，DoH 解析正常，属大站 bot-block，站点存活；按死链规则 403 应略过）：`phind`（对话聊天）、`phind-search`（搜索研究）。不替换存活链接。
- **说明**：若希望这 5 条移除项改用「指定替代工具」补齐（而非删除），告知具体工具名即可补回；当前为避免重复未自行添加。
