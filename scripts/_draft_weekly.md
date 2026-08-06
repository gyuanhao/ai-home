# AI家AI户 工具库周维护草稿 — 2026-08-03

> ⚠️ **本草稿仅供人工过，未自动入库。** 死链需人工复核（含反爬误报），新品需人工确认后粘贴进 `scripts/tools.json`。

## 一、执行摘要

- **工具总数**：352 条（12 个一级类目）
- **死链检查**：扫描 352 条 website URL，按规范（4xx/5xx/超时记为死链）共标记 **38 条**；按严重程度细分：
  - 🔴 高疑似死链（404 / 5xx，URL 可能失效或错误）：**6 条**
  - 🟡 反爬/付费墙（403 / 402 / 429，站点疑似存活）：**22 条**
  - ⏳ 超时（可能慢/被墙/反爬，需复核）：**10 条**
- **新品候选**：联网检索近一周热门/新发 AI 工具，整理 **10 条**草稿（重点补 翻译语言 / 搜索研究 / 浏览器插件 三个较空类目）。

## 二、死链清单（按严重程度排序）

| # | id | name | category | url | 实测状态 | 判定 |
|---|----|------|----------|-----|----------|------|
| 1 | `huoshan-writing` | 火山写作 | 写作内容 | https://www.huoshan.com/writing | 502 | 高疑似死链(返回502,URL可能失效/错误) |
| 2 | `zoom-ai` | Zoom AI | 办公效率 | https://zoom.us/ai | 404 | 高疑似死链(返回404,URL可能失效/错误) |
| 3 | `wenxin` | 文心一言 | 对话聊天 | https://yiyan.baidu.com | 404 | 高疑似死链(返回404,URL可能失效/错误) |
| 4 | `perplexica` | Perplexica | 搜索研究 | https://github.com/itcosmetics/perplexica | 404 | 高疑似死链(返回404,URL可能失效/错误) |
| 5 | `phind-search` | Phind Search | 搜索研究 | https://www.phind.com/search | 404 | 高疑似死链(返回404,URL可能失效/错误) |
| 6 | `summarize-tech` | Summarize.tech | 浏览器插件 | https://summarize.tech | 503 | 高疑似死链(返回503,URL可能失效/错误) |
| 7 | `make` | Make | Agent自动化 | https://www.make.com | 403 | 反爬/付费墙(返回403,站点疑似存活) |
| 8 | `inkforge` | INK Editor | 写作内容 | https://inkforall.com | 403 | 反爬/付费墙(返回403,站点疑似存活) |
| 9 | `dalle` | DALL·E | 图像生成 | https://openai.com/dall-e | 403 | 反爬/付费墙(返回403,站点疑似存活) |
| 10 | `ideogram` | Ideogram | 图像生成 | https://ideogram.ai | 403 | 反爬/付费墙(返回403,站点疑似存活) |
| 11 | `leonardo` | Leonardo.AI | 图像生成 | https://leonardo.ai | 403 | 反爬/付费墙(返回403,站点疑似存活) |
| 12 | `midjourney` | Midjourney | 图像生成 | https://www.midjourney.com | 403 | 反爬/付费墙(返回403,站点疑似存活) |
| 13 | `nightcafe` | NightCafe | 图像生成 | https://nightcafe.studio | 403 | 反爬/付费墙(返回403,站点疑似存活) |
| 14 | `tensor` | Tensor.Art | 图像生成 | https://tensor.art | 403 | 反爬/付费墙(返回403,站点疑似存活) |
| 15 | `chatgpt` | ChatGPT | 对话聊天 | https://chat.openai.com | 403 | 反爬/付费墙(返回403,站点疑似存活) |
| 16 | `llama` | Meta AI / Llama | 对话聊天 | https://www.meta.ai | 403 | 反爬/付费墙(返回403,站点疑似存活) |
| 17 | `mistral` | Le Chat（Mistral） | 对话聊天 | https://chat.mistral.ai | 403 | 反爬/付费墙(返回403,站点疑似存活) |
| 18 | `phind` | Phind | 对话聊天 | https://www.phind.com | 403 | 反爬/付费墙(返回403,站点疑似存活) |
| 19 | `pi` | Pi | 对话聊天 | https://pi.ai | 403 | 反爬/付费墙(返回403,站点疑似存活) |
| 20 | `poe` | Poe | 对话聊天 | https://poe.com | 403 | 反爬/付费墙(返回403,站点疑似存活) |
| 21 | `arc-search` | Arc Search | 搜索研究 | https://arc.net/search | 403 | 反爬/付费墙(返回403,站点疑似存活) |
| 22 | `perplexity` | Perplexity | 搜索研究 | https://www.perplexity.ai | 403 | 反爬/付费墙(返回403,站点疑似存活) |
| 23 | `glasp` | Glasp | 浏览器插件 | https://glasp.co | 403 | 反爬/付费墙(返回403,站点疑似存活) |
| 24 | `perplexity-extension` | Perplexity 扩展 | 浏览器插件 | https://www.perplexity.ai | 403 | 反爬/付费墙(返回403,站点疑似存活) |
| 25 | `tldr-this` | TLDR This | 浏览器插件 | https://tldrthis.com | 429 | 反爬/付费墙(返回429,站点疑似存活) |
| 26 | `reverso` | Reverso | 翻译语言 | https://www.reverso.net | 403 | 反爬/付费墙(返回403,站点疑似存活) |
| 27 | `sora` | Sora | 视频生成 | https://sora.com | 403 | 反爬/付费墙(返回403,站点疑似存活) |
| 28 | `lovo` | LOVO (Genny) | 音频语音 | https://lovo.ai | 402 | 反爬/付费墙(返回402,站点疑似存活) |
| 29 | `xunfei-wenshu` | 讯飞文书 | 写作内容 | https://wenshu.iflytek.com | TIMEOUT | 超时(可能慢/被墙/反爬,需人工复核) |
| 30 | `firefly` | Adobe Firefly | 图像生成 | https://www.adobe.com/products/firefly.html | TIMEOUT | 超时(可能慢/被墙/反爬,需人工复核) |
| 31 | `merlin` | Merlin | 浏览器插件 | https://www.getmerlin.ai | TIMEOUT | 超时(可能慢/被墙/反爬,需人工复核) |
| 32 | `webchatgpt` | WebChatGPT | 浏览器插件 | https://webchatgpt.ai | TIMEOUT | 超时(可能慢/被墙/反爬,需人工复核) |
| 33 | `wiseone` | Wiseone | 浏览器插件 | https://wiseone.io | TIMEOUT | 超时(可能慢/被墙/反爬,需人工复核) |
| 34 | `alibaba-translate` | 阿里翻译 | 翻译语言 | https://alimama.tech | TIMEOUT | 超时(可能慢/被墙/反爬,需人工复核) |
| 35 | `adobe-express` | Adobe Express | 设计创意 | https://www.adobe.com/express | TIMEOUT | 超时(可能慢/被墙/反爬,需人工复核) |
| 36 | `emvoice` | Emvoice | 音频语音 | https://emvoice.io | TIMEOUT | 超时(可能慢/被墙/反爬,需人工复核) |
| 37 | `listen-ink` | Listen.ink | 音频语音 | https://listen.ink | TIMEOUT | 超时(可能慢/被墙/反爬,需人工复核) |
| 38 | `playht` | PlayHT | 音频语音 | https://play.ht | TIMEOUT | 超时(可能慢/被墙/反爬,需人工复核) |

**说明**：🔴 高疑似死链建议优先人工打开确认；🟡 反爬多为大站（ChatGPT/Midjourney/Perplexity/Adobe 等）拦截自动请求，站点通常存活，可忽略或用浏览器人工复核；⏳ 超时项多因地域/网络限制，建议人工打开确认。

## 三、新品草稿条目（10 条）

> 字段格式与 `scripts/tools.json` 完全一致，确认后可整段复制粘贴进数组。覆盖类目：翻译语言(2)、搜索研究(2)、浏览器插件(4)、图像生成(1)、视频生成(1)。

### 3.1 概览表

| id | name | category | region | pricing | website |
|----|------|----------|--------|---------|---------|
| `translately` | Translately | 翻译语言 | 海外 | free | https://translately.ai |
| `doclingo` | Doclingo | 翻译语言 | 海外 | freemium | https://doclingo.ai |
| `scispace` | SciSpace | 搜索研究 | 海外 | freemium | https://scispace.com |
| `liner` | LINER | 搜索研究 | 海外 | freemium | https://liner.com |
| `cognito` | Cognito | 浏览器插件 | 海外 | free | https://cognetic.app |
| `aera-browser` | Aera Browser | 浏览器插件 | 海外 | freemium | https://getaera.app |
| `tabbit` | Tabbit（美团） | 浏览器插件 | 国内 | free | https://www.tabbit.ai |
| `tactiq` | Tactiq | 浏览器插件 | 海外 | freemium | https://tactiq.io |
| `sensenova-u1-pro` | 商汤 SenseNova U1 Pro | 图像生成 | 国内 | paid | https://www.sensetime.com |
| `higgsfield` | Higgsfield | 视频生成 | 海外 | freemium | https://higgsfield.ai |

### 3.2 逐条 JSON（可直接入库）

#### Translately — 翻译语言

```json
{
  "id": "translately",
  "name": "Translately",
  "nameEn": "Translately",
  "category": "翻译语言",
  "tags": [
    "海外",
    "翻译",
    "免费",
    "多风格"
  ],
  "tagsEn": [
    "Overseas",
    "Translation",
    "Free",
    "Multi-style"
  ],
  "pricing": "free",
  "priceLabel": "免费",
  "priceLabelEn": "Free",
  "priceDetail": "支持标准/正式/随意/简明/文学5种翻译风格，免注册可译500词，实时流式输出。",
  "priceDetailEn": "5 styles (Standard/Formal/Casual/Simple/Literary); 500 words free, no signup; streaming.",
  "website": "https://translately.ai",
  "company": "Translately",
  "companyEn": "Translately",
  "region": "海外",
  "summary": "5种风格的AI翻译器，免费免注册，支持实时流式翻译。",
  "summaryEn": "AI translator with 5 tones, free/no-signup, streaming output.",
  "strengths": "5种风格独一档；免费免注册；流式输出；隐私优先不存储。",
  "strengthsEn": "Only tool with 5 translation styles; free; streaming; privacy-first.",
  "weaknesses": "语种约20+，少于Google；文学模式质量待验证。",
  "weaknessesEn": "~20+ languages (fewer than Google); literary mode unproven.",
  "bestFor": "需要控制语气的商务/创作者/多语写作者。",
  "bestForEn": "Professionals/creators needing tone control.",
  "affiliate": false,
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-08-03"
}
```

#### Doclingo — 翻译语言

```json
{
  "id": "doclingo",
  "name": "Doclingo",
  "nameEn": "Doclingo",
  "category": "翻译语言",
  "tags": [
    "海外",
    "文档翻译",
    "PDF",
    "保版式",
    "OCR"
  ],
  "tagsEn": [
    "Overseas",
    "Document",
    "PDF",
    "Layout",
    "OCR"
  ],
  "pricing": "freemium",
  "priceLabel": "免费版 + 付费",
  "priceLabelEn": "Free + Paid",
  "priceDetail": "文档/PDF翻译完整保留表格图片版式，内置OCR处理扫描件，双语对照输出。",
  "priceDetailEn": "Preserves tables/images/layout in PDF/doc translation; built-in OCR; bilingual output.",
  "website": "https://doclingo.ai",
  "company": "Doclingo",
  "companyEn": "Doclingo",
  "region": "海外",
  "summary": "PDF/文档翻译保版式，内置OCR，双语对照，适合格式敏感场景。",
  "summaryEn": "PDF/doc translation with layout preservation, OCR, bilingual output.",
  "strengths": "唯一可靠保版式；OCR处理扫描件；双语对照易审。",
  "strengthsEn": "Best layout preservation; OCR for scans; bilingual review.",
  "weaknesses": "复杂多栏排版仍偶出错；付费才解锁高量。",
  "weaknessesEn": "Complex multi-column layouts occasionally slip; paid for volume.",
  "bestFor": "翻译合同/论文/说明书等需保版式的用户。",
  "bestForEn": "Users translating contracts/papers/manuals needing layout.",
  "affiliate": false,
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-08-03"
}
```

#### SciSpace — 搜索研究

```json
{
  "id": "scispace",
  "name": "SciSpace",
  "nameEn": "SciSpace",
  "category": "搜索研究",
  "tags": [
    "海外",
    "学术",
    "文献",
    "科研",
    "问答"
  ],
  "tagsEn": [
    "Overseas",
    "Academic",
    "Literature",
    "Research",
    "Q&A"
  ],
  "pricing": "freemium",
  "priceLabel": "免费 + 会员",
  "priceLabelEn": "Free + Pro",
  "priceDetail": "面向arXiv/PubMed等文献的AI阅读与问答，解释公式、提炼要点、对比论文。",
  "priceDetailEn": "AI reading & Q&A over arXiv/PubMed; explains equations, summarizes, compares papers.",
  "website": "https://scispace.com",
  "company": "SciSpace",
  "companyEn": "SciSpace",
  "region": "海外",
  "summary": "学术文献AI阅读器，问答/解释公式/对比论文，面向科研人员。",
  "summaryEn": "AI literature reader: Q&A, equation explanations, paper comparison.",
  "strengths": "文献语境强；解释公式与术语；接入arXiv/PubMed。",
  "strengthsEn": "Strong paper context; explains equations; arXiv/PubMed access.",
  "weaknesses": "非学术通用搜索弱；会员价偏高。",
  "weaknessesEn": "Weak for general web search; Pro price steep.",
  "bestFor": "研究生、科研人员做文献调研与精读。",
  "bestForEn": "Grad students/researchers doing literature review.",
  "affiliate": false,
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-08-03"
}
```

#### LINER — 搜索研究

```json
{
  "id": "liner",
  "name": "LINER",
  "nameEn": "LINER",
  "category": "搜索研究",
  "tags": [
    "海外",
    "高亮",
    "摘要",
    "知识库",
    "阅读"
  ],
  "tagsEn": [
    "Overseas",
    "Highlight",
    "Summary",
    "Knowledge",
    "Reading"
  ],
  "pricing": "freemium",
  "priceLabel": "免费 + 会员",
  "priceLabelEn": "Free + Premium",
  "priceDetail": "网页/PDF高亮 + AI摘要，沉淀个人可读检索的高亮库，YouTube也能用。",
  "priceDetailEn": "Highlight web/PDF + AI summary; builds searchable personal library; works on YouTube.",
  "website": "https://liner.com",
  "company": "LINER",
  "companyEn": "LINER",
  "region": "海外",
  "summary": "网页/PDF高亮与AI摘要，积累可检索的个人知识库。",
  "summaryEn": "Web/PDF highlighting + AI summary; searchable personal knowledge base.",
  "strengths": "高亮即沉淀；AI摘要网页与视频；跨设备同步。",
  "strengthsEn": "Highlight-to-library; AI summaries for pages/videos; sync.",
  "weaknesses": "免费版有限；高级摘要需会员。",
  "weaknessesEn": "Free tier limited; advanced summaries need Premium.",
  "bestFor": "学生、研究者、长文阅读与资料积累者。",
  "bestForEn": "Students/researchers building a reading library.",
  "affiliate": false,
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-08-03"
}
```

#### Cognito — 浏览器插件

```json
{
  "id": "cognito",
  "name": "Cognito",
  "nameEn": "Cognito",
  "category": "浏览器插件",
  "tags": [
    "海外",
    "侧边栏",
    "多模型",
    "本地模型",
    "免费"
  ],
  "tagsEn": [
    "Overseas",
    "Sidebar",
    "Multi-model",
    "Local",
    "Free"
  ],
  "pricing": "free",
  "priceLabel": "免费（自带Key/本地）",
  "priceLabelEn": "Free (BYOK/Local)",
  "priceDetail": "多模型AI侧边栏，连任意模型（GPT/Claude/Gemini/本地Ollama），读当前页作上下文。",
  "priceDetailEn": "Multi-model sidebar; connect any model incl. local Ollama; uses page as context.",
  "website": "https://cognetic.app",
  "company": "Cognetic",
  "companyEn": "Cognetic",
  "region": "海外",
  "summary": "多模型AI浏览器侧边栏，支持本地模型与自带Key，读页即上下文。",
  "summaryEn": "Multi-model browser sidebar; local models/BYOK; page-aware context.",
  "strengths": "不锁定单一厂商；可跑本地模型隐私好；零订阅费。",
  "strengthsEn": "No vendor lock-in; local models; no subscription.",
  "weaknesses": "云模型需自备API Key；新手配置门槛。",
  "weaknessesEn": "Cloud models need your own API key; setup barrier.",
  "bestFor": "想自由切换模型、重视隐私的进阶用户。",
  "bestForEn": "Power users wanting model freedom & privacy.",
  "affiliate": false,
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-08-03"
}
```

#### Aera Browser — 浏览器插件

```json
{
  "id": "aera-browser",
  "name": "Aera Browser",
  "nameEn": "Aera Browser",
  "category": "浏览器插件",
  "tags": [
    "海外",
    "AI浏览器",
    "Agent",
    "自动化",
    "Chromium"
  ],
  "tagsEn": [
    "Overseas",
    "AI Browser",
    "Agent",
    "Automation",
    "Chromium"
  ],
  "pricing": "freemium",
  "priceLabel": "免费 + 订阅",
  "priceLabelEn": "Free + Subscription",
  "priceDetail": "Chromium内核的Agentic浏览器，内置AI代理自动填表/点击/跨页聚合，支持本地模型。",
  "priceDetailEn": "Chromium-based agentic browser; built-in agent automates forms/clicks/aggregation; local models.",
  "website": "https://getaera.app",
  "company": "Aera",
  "companyEn": "Aera",
  "region": "海外",
  "summary": "内置AI Agent的Chromium浏览器，可自动执行多步网页任务。",
  "summaryEn": "Chromium browser with built-in AI agent for multi-step web tasks.",
  "strengths": "原生Agent执行；支持本地模型与MCP；技能市场。",
  "strengthsEn": "Native agent execution; local models & MCP; skills marketplace.",
  "weaknesses": "仍Beta迭代；资源占用偏高。",
  "weaknessesEn": "Still in beta; heavier resource use.",
  "bestFor": "想用浏览器自动化的进阶用户与团队。",
  "bestForEn": "Power users/teams wanting browser automation.",
  "affiliate": false,
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-08-03"
}
```

#### Tabbit（美团） — 浏览器插件

```json
{
  "id": "tabbit",
  "name": "Tabbit（美团）",
  "nameEn": "Tabbit",
  "category": "浏览器插件",
  "tags": [
    "国产",
    "AI浏览器",
    "多模型",
    "Agent",
    "免费"
  ],
  "tagsEn": [
    "China",
    "AI Browser",
    "Multi-model",
    "Agent",
    "Free"
  ],
  "pricing": "free",
  "priceLabel": "标准版免费",
  "priceLabelEn": "Free (Standard)",
  "priceDetail": "美团GN06团队打造的AI原生浏览器，聚合10+大模型，内置Agent自动办公，标准版永久免费。",
  "priceDetailEn": "Meituan GN06's AI-native browser; 10+ LLMs; built-in agentic office; free Standard.",
  "website": "https://www.tabbit.ai",
  "company": "美团",
  "companyEn": "Meituan",
  "region": "国内",
  "summary": "美团AI原生浏览器，聚合10+大模型与Agent办公，标准版免费。",
  "summaryEn": "Meituan's AI-native browser; 10+ LLMs & agentic office; free Standard.",
  "strengths": "多模型同屏对比；Agent任务完成率高；标准版免费跨端。",
  "strengthsEn": "Side-by-side models; high agent success; free cross-device.",
  "weaknesses": "正式版刚上线；部分高级技能需迭代。",
  "weaknessesEn": "Newly GA; some advanced skills maturing.",
  "bestFor": "想用AI浏览器提效办公的国内用户。",
  "bestForEn": "Domestic users wanting AI browser productivity.",
  "affiliate": false,
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-08-03"
}
```

#### Tactiq — 浏览器插件

```json
{
  "id": "tactiq",
  "name": "Tactiq",
  "nameEn": "Tactiq",
  "category": "浏览器插件",
  "tags": [
    "海外",
    "会议",
    "转录",
    "总结",
    "扩展"
  ],
  "tagsEn": [
    "Overseas",
    "Meeting",
    "Transcription",
    "Summary",
    "Extension"
  ],
  "pricing": "freemium",
  "priceLabel": "免费 + 会员",
  "priceLabelEn": "Free + Pro",
  "priceDetail": "浏览器扩展，无机器人入会即可转录Google Meet/Zoom，自动生成纪要与小抄。",
  "priceDetailEn": "Extension transcribes Google Meet/Zoom without a bot; auto notes & cheat-sheets.",
  "website": "https://tactiq.io",
  "company": "Tactiq",
  "companyEn": "Tactiq",
  "region": "海外",
  "summary": "会议转录浏览器扩展，无机器人入会，自动出纪要与小抄。",
  "summaryEn": "Meeting transcription extension; no bot; auto notes & summaries.",
  "strengths": "不邀机器人保护隐私；支持Meet/Zoom；即时摘要。",
  "strengthsEn": "No bot (privacy); Meet/Zoom; instant summaries.",
  "weaknesses": "免费额度有限；长会准确率受口音影响。",
  "weaknessesEn": "Free quota limited; accuracy varies by accent.",
  "bestFor": "会议多、需快速出纪要的顾问与销售。",
  "bestForEn": "Consultants/sales in back-to-back meetings.",
  "affiliate": false,
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-08-03"
}
```

#### 商汤 SenseNova U1 Pro — 图像生成

```json
{
  "id": "sensenova-u1-pro",
  "name": "商汤 SenseNova U1 Pro",
  "nameEn": "SenseNova U1 Pro",
  "category": "图像生成",
  "tags": [
    "国产",
    "多模态",
    "8K",
    "设计",
    "Agent"
  ],
  "tagsEn": [
    "China",
    "Multimodal",
    "8K",
    "Design",
    "Agent"
  ],
  "pricing": "paid",
  "priceLabel": "即将公布（API/订阅）",
  "priceLabelEn": "TBA (API/Subscription)",
  "priceDetail": "商汤交付级原生多模态智能体基座，图像原生8K、专业设计美感，长程Agentic闭环，8月公众开放。",
  "priceDetailEn": "SenseTime delivery-grade multimodal agent base; native 8K images; design aesthetics; agentic loop; public Aug 2026.",
  "website": "https://www.sensetime.com",
  "company": "商汤科技",
  "companyEn": "SenseTime",
  "region": "国内",
  "summary": "商汤交付级多模态智能体，原生8K出图，长程Agentic闭环，8月开放。",
  "summaryEn": "SenseTime delivery-grade multimodal agent; native 8K; agentic loop; Aug 2026.",
  "strengths": "原生8K超清；专业设计美感；长程闭环交付。",
  "strengthsEn": "Native 8K; pro design quality; long-horizon delivery.",
  "weaknesses": "8月才公众开放；定价待定。",
  "weaknessesEn": "Public launch Aug 2026; pricing TBA.",
  "bestFor": "办公/电商/教育等需高质量视觉交付的团队。",
  "bestForEn": "Teams needing high-quality visual delivery.",
  "affiliate": false,
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-08-03"
}
```

#### Higgsfield — 视频生成

```json
{
  "id": "higgsfield",
  "name": "Higgsfield",
  "nameEn": "Higgsfield",
  "category": "视频生成",
  "tags": [
    "海外",
    "视频生成",
    "短视频",
    "口播",
    "特效"
  ],
  "tagsEn": [
    "Overseas",
    "Video",
    "Shorts",
    "Avatar",
    "Effects"
  ],
  "pricing": "freemium",
  "priceLabel": "免费 + 付费",
  "priceLabelEn": "Free + Paid",
  "priceDetail": "AI短视频生成，含Shorts Studio、Explainer与数字人口播，强调镜头控制与特效。",
  "priceDetailEn": "AI short-video generation; Shorts Studio, Explainer, avatar narration; camera control & effects.",
  "website": "https://higgsfield.ai",
  "company": "Higgsfield",
  "companyEn": "Higgsfield",
  "region": "海外",
  "summary": "AI短视频生成工具，含口播数字人与镜头控制，适合社媒创作。",
  "summaryEn": "AI short-video tool with avatar narration & camera control for social.",
  "strengths": "镜头/特效可控；数字人口播自然；社媒模板多。",
  "strengthsEn": "Camera/effects control; natural avatars; social templates.",
  "weaknesses": "长视频弱；付费档才解锁高质。",
  "weaknessesEn": "Weak on long video; quality behind paywall.",
  "bestFor": "做TikTok/Reels/YouTube Shorts的创作者。",
  "bestForEn": "Creators making TikTok/Reels/Shorts.",
  "affiliate": false,
  "source": "公开资料 / 官网",
  "lastUpdated": "2026-08-03"
}
```

---
_生成时间：2026-08-03 09:28 ｜ 数据源：tools.json 死链扫描 + WebSearch 公开资料_