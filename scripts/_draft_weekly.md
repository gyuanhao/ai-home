# AI家AI户 · 工具库周维护草稿

> **状态更新（2026-08-24 二次指令已执行）：本批候选已按用户指令直接入库并上线。**
> phind / phind-search 经复测确认永久关停，已移除；12 条新品候选已全部写入 `tools.json` 并经 Cloudflare Pages 部署生效。当前线上工具总数 **374 条**。本文件仅保留为本次执行记录。

**生成日期：** 2026-08-24（周一）
**工具总数：** 374 条 / 12 个一级类目（本次 +12 新入库、−2 死链移除）
**检查方法：** Python 线程池并发（32 workers）对每条 `website` 做 HEAD→GET 探测（curl `-I -m 10`，带 UA，跟随重定向），对死链候选追加阿里 DoH 二次复核（区分「域名真没了」与「本机网络/TLS 受限」）。反爬/封禁类（403/402/429 及 ChatGPT/Midjourney/Perplexity/Adobe/Meta 等大站 bot-block）按规则直接略过，不计入死链。

---

## 一、执行摘要

- **确认死链（高置信，建议处理）：2 条** —— 均为真实 404（`phind`、`phind-search`，首页失效；此前曾在 404↔403 间波动，建议复测是否永久下线）。
- **超时 / 鉴权拦截（DoH 解析正常或站点存活，按规则未判死链，建议人工复核）：5 条** —— 其中 2 条为 Adobe 大站超时、1 条 360 大站超时（2026-08-10 实测 200，强烈疑似误报）、1 条 `yizhuan` 超时（DoH OK）、1 条 `snappa` 返回 401 鉴权墙（站点存活）。
- **反爬 / 封禁略过（不计入死链）：22 条**（多为大站拦截自动请求，站点疑似存活）。
- **存活（2xx/3xx）：335 条**。
- **新品候选草稿：12 条**（全部实测可达 2xx，id 与现库无冲突），覆盖 9 个类目；较空的「翻译语言 / 搜索研究 / 浏览器插件」已重点补（各 1 / 2 / 1 条）。

---

## 二、死链清单（确认）

| id | name | category | url | 实测状态 |
|----|------|----------|-----|----------|
| phind | Phind | 对话聊天 | https://www.phind.com | **404**（首页失效；DoH 解析正常，域名仍存活；此前在 404↔403 间波动，建议复测是否为永久下线） |
| phind-search | Phind Search | 搜索研究 | https://www.phind.com/search | **404**（同上，路径失效） |

> 处理建议：若复测仍为 404，可下架或替换为同类答案引擎（库内已有 Perplexity / You.com / Consensus 等）。

## 三、待人工复核（超时 / 鉴权拦截，未判死链）

| id | name | category | url | 实测状态 |
|----|------|----------|-----|----------|
| adobe-express | Adobe Express | 设计创意 | https://www.adobe.com/express | 超时（code=0 / rc=28）；Adobe 大站 bot-block，DoH 解析正常 → 按规则略过 |
| firefly | Adobe Firefly | 图像生成 | https://www.adobe.com/products/firefly.html | 超时；Adobe 大站，同上 → 按规则略过 |
| zhinao360 | 360 智脑 | 对话聊天 | https://ai.360.cn | 超时（rc=28）；360 大站，2026-08-10 实测 200，强烈疑似误报 |
| yizhuan | 易撰 | 写作内容 | https://www.yizhuan.net | 超时（rc=28）；DoH 解析正常，疑似本机网络限制，建议复测 |
| snappa | Snappa | 设计创意 | https://snappa.com | 401 鉴权拦截（rc=23）；站点存活，非死链，建议人工确认 |

---

## 四、新品草稿条目（12 条）

> 字段对齐 `scripts/tools.json` schema；`summary` 均 ≤60 字；`source` 统一为「公开资料 / 官网」，`lastUpdated` 为当天。
> 复制下方 JSON 数组即可批量入库（建议入库前再核一次定价与文案）。

```json
[
  {
    "id": "huiyi",
    "name": "会译",
    "nameEn": "Huiyi",
    "category": "翻译语言",
    "tags": ["全场景翻译", "网页翻译", "PDF翻译", "视频翻译", "划词翻译"],
    "tagsEn": ["all-scene translation", "web translate", "PDF translate", "video translate", "selection translate"],
    "pricing": "freemium",
    "priceLabel": "免费版 + 会员",
    "priceLabelEn": "Free + Membership",
    "priceDetail": "网页/PDF/视频翻译均含免费额度，每日可领 Token；会员去限制",
    "priceDetailEn": "Free tier for web/PDF/video; daily tokens; membership removes limits",
    "website": "https://huiyiai.net/",
    "company": "会译AI",
    "companyEn": "Huiyi AI",
    "region": "国内",
    "summary": "全场景 AI 翻译，支持网页/PDF/视频/图片，调用多模型自动匹配最优译法。",
    "summaryEn": "All-scene AI translator for web/PDF/video/images with multi-model routing.",
    "strengths": ["多场景覆盖（网页/PDF/视频/图片）", "多模型自动择优（DeepL/Gemini/Claude 等）", "PDF 格式无损保留、免费不限文件大小", "内置四六级/雅思词库，适合学习者"],
    "weaknesses": ["重度依赖第三方模型 API，质量随模型波动", "视频翻译免费额度有限", "品牌认知度低于 DeepL/有道"],
    "bestFor": "学生、科研与跨境从业者做外文文献/视频的翻译与学习",
    "bestForEn": "Students, researchers and cross-border workers translating docs/videos",
    "affiliate": false,
    "source": "公开资料 / 官网",
    "lastUpdated": "2026-08-24",
    "affiliateUrl": ""
  },
  {
    "id": "scispace",
    "name": "SciSpace",
    "nameEn": "SciSpace",
    "category": "搜索研究",
    "tags": ["学术搜索", "论文解释", "引用感知", "文献综述"],
    "tagsEn": ["academic search", "paper explain", "citation-aware", "literature review"],
    "pricing": "freemium",
    "priceLabel": "免费版 + 会员",
    "priceLabelEn": "Free + Pro",
    "priceDetail": "基础问答免费；Copilot/无限文献等高级功能订阅制",
    "priceDetailEn": "Basic Q&A free; Copilot & unlimited docs via subscription",
    "website": "https://scispace.com/",
    "company": "SciSpace",
    "companyEn": "SciSpace (Crealio)",
    "region": "海外",
    "summary": "引用感知的学术搜索引擎，可查找、解释并比对海量论文，辅助文献综述。",
    "summaryEn": "Citation-aware academic search to find, explain and compare papers.",
    "strengths": ["聚焦同行评审文献，引用可追溯", "支持对论文公式/方法的直接提问", "适合系统性文献综述"],
    "weaknesses": ["非学术场景能力弱", "高级功能需付费", "中文文献覆盖有限"],
    "bestFor": "研究生、科研人员做文献检索与证据综合",
    "bestForEn": "Grad students & researchers doing literature review",
    "affiliate": false,
    "source": "公开资料 / 官网",
    "lastUpdated": "2026-08-24",
    "affiliateUrl": ""
  },
  {
    "id": "brave-search",
    "name": "Brave 搜索",
    "nameEn": "Brave Search",
    "category": "搜索研究",
    "tags": ["隐私搜索", "独立索引", "AI 答案", "无追踪"],
    "tagsEn": ["privacy search", "independent index", "AI answers", "no tracking"],
    "pricing": "free",
    "priceLabel": "免费",
    "priceLabelEn": "Free",
    "priceDetail": "网页搜索与 AI 摘要免费；Brave Premium 可选去广告等",
    "priceDetailEn": "Web + AI answers free; optional Brave Premium",
    "website": "https://brave.com/search/",
    "company": "Brave Software",
    "companyEn": "Brave Software",
    "region": "海外",
    "summary": "独立索引的隐私优先搜索引擎，内置 AI 答案且不做用户追踪。",
    "summaryEn": "Privacy-first search with independent index and AI answers.",
    "strengths": ["独立爬虫索引，不依赖 Google/Bing", "强调隐私与无追踪", "内置 AI 摘要答案"],
    "weaknesses": ["中文结果质量弱于百度/Google", "AI 答案深度有限", "生态较小"],
    "bestFor": "注重隐私、反感个性化追踪的研究与日常搜索用户",
    "bestForEn": "Privacy-conscious researchers and everyday searchers",
    "affiliate": false,
    "source": "公开资料 / 官网",
    "lastUpdated": "2026-08-24",
    "affiliateUrl": ""
  },
  {
    "id": "deepseek-harness",
    "name": "DeepSeek Harness",
    "nameEn": "DeepSeek Harness",
    "category": "编程开发",
    "tags": ["开源框架", "智能体", "工作流编排", "开发者工具"],
    "tagsEn": ["open-source", "agent", "workflow", "dev tool"],
    "pricing": "free",
    "priceLabel": "免费（开源）",
    "priceLabelEn": "Free (OSS)",
    "priceDetail": "Apache-2.0 开源，自托管免费",
    "priceDetailEn": "Apache-2.0, self-host free",
    "website": "https://github.com/deepseek-ai/DeepSeek-Harness",
    "company": "深度求索",
    "companyEn": "DeepSeek",
    "region": "国内",
    "summary": "DeepSeek 开源智能体框架，用于编排多步任务与工具调用的工作流。",
    "summaryEn": "DeepSeek's open-source agent framework for multi-step workflows.",
    "strengths": ["官方开源，可自托管", "面向开发者，易于二次开发", "紧跟 DeepSeek 模型能力"],
    "weaknesses": ["文档与社区较新", "需一定工程能力接入", "生态工具尚在成长"],
    "bestFor": "开发者构建基于 DeepSeek 的自主智能体与自动化流程",
    "bestForEn": "Devs building DeepSeek-based agents & automation",
    "affiliate": false,
    "source": "公开资料 / 官网",
    "lastUpdated": "2026-08-24",
    "affiliateUrl": ""
  },
  {
    "id": "crun-ai",
    "name": "Crun AI",
    "nameEn": "Crun AI",
    "category": "编程开发",
    "tags": ["统一 API", "多模型接入", "视频图像音频", "降本接入"],
    "tagsEn": ["unified API", "multi-model", "video/image/audio", "cost-saving"],
    "pricing": "freemium",
    "priceLabel": "按量付费 + 免费额度",
    "priceLabelEn": "Pay-as-you-go + Free",
    "priceDetail": "统一 API 接入多家模型，按调用计费，新用户赠额度",
    "priceDetailEn": "One API for many models; usage-based; free credits",
    "website": "https://crun.ai/",
    "company": "Crun AI",
    "companyEn": "Crun AI",
    "region": "海外",
    "summary": "一个 API 接入视频/图像/音频/LLM 等头部模型，集成快、成本降 30–70%。",
    "summaryEn": "One API for top video/image/audio/LLM models, 30–70% cheaper.",
    "strengths": ["多模态模型统一接入", "宣称较直连降价 30–70%", "降低多供应商集成成本"],
    "weaknesses": ["作为中间层存在供应依赖与稳定性风险", "计费透明度需自测", "新平台生态待验证"],
    "bestFor": "开发者快速集成多模态模型并控制 API 成本",
    "bestForEn": "Devs integrating multimodal models cost-effectively",
    "affiliate": false,
    "source": "公开资料 / 官网",
    "lastUpdated": "2026-08-24",
    "affiliateUrl": ""
  },
  {
    "id": "ego-lite",
    "name": "Ego Lite",
    "nameEn": "Ego Lite",
    "category": "浏览器插件",
    "tags": ["AI 浏览器", "网页自动化", "Agent 运行", "轻量"],
    "tagsEn": ["AI browser", "web automation", "agent runtime", "lightweight"],
    "pricing": "free",
    "priceLabel": "免费",
    "priceLabelEn": "Free",
    "priceDetail": "浏览器免费使用，面向 AI Agent 的网页自动化运行",
    "priceDetailEn": "Free browser for AI agent web automation",
    "website": "https://ego-lite.com/",
    "company": "Ego",
    "companyEn": "Ego",
    "region": "海外",
    "summary": "面向 AI Agent 的轻量浏览器，专为网页自动化任务高速运行而设计。",
    "summaryEn": "Lightweight browser built to run AI-agent web automation fast.",
    "strengths": ["为 Agent 自动化优化，启动/运行快", "专注网页操作场景", "轻量易部署"],
    "weaknesses": ["定位 niche，通用浏览体验未知", "生态与兼容待成熟", "资料较少需实测"],
    "bestFor": "开发者与 Agent 团队运行网页自动化任务",
    "bestForEn": "Devs & agent teams running web automation",
    "affiliate": false,
    "source": "公开资料 / 官网",
    "lastUpdated": "2026-08-24",
    "affiliateUrl": ""
  },
  {
    "id": "agentar",
    "name": "Agentar",
    "nameEn": "Agentar",
    "category": "Agent自动化",
    "tags": ["企业智能体", "岗位数字专家", "智能体平台", "商业"],
    "tagsEn": ["enterprise agent", "digital expert", "agent platform", "business"],
    "pricing": "paid",
    "priceLabel": "企业定制",
    "priceLabelEn": "Enterprise Custom",
    "priceDetail": "企业级智能体平台，按席位/方案定制报价",
    "priceDetailEn": "Enterprise agent platform; custom pricing",
    "website": "https://www.agentar.io/",
    "company": "蚂蚁数科",
    "companyEn": "Ant Digital Technologies",
    "region": "国内",
    "summary": "蚂蚁数科商业智能体平台，预置岗位级数字专家与可订阅智能体工具。",
    "summaryEn": "Ant's enterprise agent platform with role-based digital experts.",
    "strengths": ["预置近 200 个岗位级数字专家模板", "企业级合规与集成", "背靠蚂蚁技术体系"],
    "weaknesses": ["面向中大型企业，门槛高", "价格不透明需商务对接", "中小企业适配成本待评估"],
    "bestFor": "企业构建岗位级智能体与业务流程自动化",
    "bestForEn": "Enterprises deploying role-based agents",
    "affiliate": false,
    "source": "公开资料 / 官网",
    "lastUpdated": "2026-08-24",
    "affiliateUrl": ""
  },
  {
    "id": "zawa",
    "name": "Zawa",
    "nameEn": "Zawa",
    "category": "设计创意",
    "tags": ["AI 设计", "品牌生成", "Logo", "电商素材"],
    "tagsEn": ["AI design", "branding", "logo", "ecommerce visuals"],
    "pricing": "freemium",
    "priceLabel": "免费版 + 订阅",
    "priceLabelEn": "Free + Subscription",
    "priceDetail": "基础设计免费；高级模板/商用授权订阅制",
    "priceDetailEn": "Basic free; templates & commercial license via plan",
    "website": "https://zawa.ai/",
    "company": "Zawa",
    "companyEn": "Zawa",
    "region": "海外",
    "summary": "一体化 AI 设计平台，用智能体快速做 Logo、商品图与社媒内容。",
    "summaryEn": "All-in-one AI design platform for logos, product & social visuals.",
    "strengths": ["设计智能体覆盖 Logo/电商/社媒", "面向 SMB 快速出图", "批量与增强工具齐全"],
    "weaknesses": ["深度专业设计仍需人工", "模板同质化风险", "商用授权需看清条款"],
    "bestFor": "中小商家与设计师快速产出品牌与营销素材",
    "bestForEn": "SMBs & designers producing brand/social visuals",
    "affiliate": false,
    "source": "公开资料 / 官网",
    "lastUpdated": "2026-08-24",
    "affiliateUrl": ""
  },
  {
    "id": "solidpoint",
    "name": "SolidPoint",
    "nameEn": "SolidPoint",
    "category": "办公效率",
    "tags": ["内容摘要", "视频总结", "文章总结", "知识库"],
    "tagsEn": ["summarizer", "video summary", "article summary", "knowledge"],
    "pricing": "freemium",
    "priceLabel": "免费版 + 会员",
    "priceLabelEn": "Free + Pro",
    "priceDetail": "基础摘要免费；无限时长/ flashcards 等高级功能订阅",
    "priceDetailEn": "Basic free; unlimited & flashcards via subscription",
    "website": "https://solidpoint.ai/",
    "company": "SolidPoint",
    "companyEn": "SolidPoint",
    "region": "海外",
    "summary": "长视频/文章/论文摘要工具，提炼要点并带时间戳与可检索知识库。",
    "summaryEn": "Summarizes long videos/articles/papers with timestamps & library.",
    "strengths": ["支持 YouTube/文章/arXiv/PDF 多源", "带时间戳与 flashcards", "节省 85–90% 阅读时间"],
    "weaknesses": ["摘要偶有事实性错误，不宜直接引用", "深度分析弱", "高级功能需付费"],
    "bestFor": "学生与知识工作者快速消化长视频/长文",
    "bestForEn": "Students & knowledge workers triaging long content",
    "affiliate": false,
    "source": "公开资料 / 官网",
    "lastUpdated": "2026-08-24",
    "affiliateUrl": ""
  },
  {
    "id": "vmake-ai",
    "name": "Vmake AI",
    "nameEn": "Vmake AI",
    "category": "视频生成",
    "tags": ["商品视频", "UGC 素材", "电商", "去水印"],
    "tagsEn": ["product video", "UGC", "ecommerce", "watermark removal"],
    "pricing": "freemium",
    "priceLabel": "免费额度 + 订阅",
    "priceLabelEn": "Free credits + Subscription",
    "priceDetail": "新用户赠免费额度；高清/批量/去水印等订阅制",
    "priceDetailEn": "Free credits; HD/batch/watermark via plan",
    "website": "https://vmake.ai/",
    "company": "Vmake AI",
    "companyEn": "Vmake AI",
    "region": "海外",
    "summary": "将商品图与素材转成短篇 UGC 风格视频，集成生成/字幕/放大。",
    "summaryEn": "Turns product shots into short UGC-style videos with captions.",
    "strengths": ["电商与创作者导向，开箱即用", "集成生成/头像/字幕/放大/去水印", "网页与移动端工作流"],
    "weaknesses": ["偏营销场景，通用性有限", "高清与批量需付费", "去水印涉及版权需注意"],
    "bestFor": "电商卖家与创作者批量产出社媒短视频",
    "bestForEn": "Sellers & creators making social short videos",
    "affiliate": false,
    "source": "公开资料 / 官网",
    "lastUpdated": "2026-08-24",
    "affiliateUrl": ""
  },
  {
    "id": "minimax-music",
    "name": "MiniMax 音乐",
    "nameEn": "MiniMax Music",
    "category": "音频语音",
    "tags": ["音乐生成", "AI 作曲", "开源模型", "音频"],
    "tagsEn": ["music generation", "AI compose", "open-weight", "audio"],
    "pricing": "freemium",
    "priceLabel": "免费 + 会员",
    "priceLabelEn": "Free + Membership",
    "priceDetail": "网页/API 可用，基础生成免费；高阶权益订阅",
    "priceDetailEn": "Web/API; basic free; advanced via membership",
    "website": "https://www.minimax.io/music",
    "company": "MiniMax",
    "companyEn": "MiniMax",
    "region": "国内",
    "summary": "MiniMax 开源音乐生成模型 Music 3.0，支持文本生成带人声的歌曲。",
    "summaryEn": "MiniMax open-weight Music 3.0 text-to-song generation.",
    "strengths": ["开源权重，可自部署", "支持含人声的完整歌曲生成", "中文与多语种友好"],
    "weaknesses": ["音乐质量仍逊专业制作", "商用授权需确认", "算力与门槛较高"],
    "bestFor": "创作者与开发者做 AI 音乐原型与二次开发",
    "bestForEn": "Creators & devs prototyping AI music",
    "affiliate": false,
    "source": "公开资料 / 官网",
    "lastUpdated": "2026-08-24",
    "affiliateUrl": ""
  },
  {
    "id": "metamonster",
    "name": "MetaMonster",
    "nameEn": "MetaMonster",
    "category": "办公效率",
    "tags": ["SEO 优化", "内容质量", "营销", "写作辅助"],
    "tagsEn": ["SEO", "content quality", "marketing", "writing aid"],
    "pricing": "freemium",
    "priceLabel": "免费版 + 订阅",
    "priceLabelEn": "Free + Plan",
    "priceDetail": "基础分析免费；深度优化与团队功能订阅制",
    "priceDetailEn": "Basic free; deep optimization & teams via plan",
    "website": "https://metamonster.ai/",
    "company": "MetaMonster",
    "companyEn": "MetaMonster",
    "region": "海外",
    "summary": "AI 内容优化工具，在 SEO 与内容质量间做平衡，提升搜索表现。",
    "summaryEn": "AI content optimizer balancing SEO and content quality.",
    "strengths": ["兼顾 SEO 与可读性，不过度堆砌", "适合营销与博客内容", "给出可操作优化建议"],
    "weaknesses": ["强依赖搜索引擎规则变动", "深度功能需付费", "小语种支持有限"],
    "bestFor": "内容营销与 SEO 团队优化网页与文章",
    "bestForEn": "Content/SEO teams optimizing web copy",
    "affiliate": false,
    "source": "公开资料 / 官网",
    "lastUpdated": "2026-08-24",
    "affiliateUrl": ""
  }
]
```

---

## 五、备注

- **死链检查口径**：仅「域名无法解析 / 连接超时 / 5xx / 真实 404」判为死链；403/402/429 及大站 bot-block 直接略过。超时项中 DoH 解析正常者（adobe-express / firefly / zhinao360 / yizhuan）与 401 鉴权墙（snappa）均列为「待复核」，未计入死链，以免误删存活站点。
- **新品去重**：已显式排除库中已存在的同名/同类工具（如 felo、exa、consensus、elicit、kagi、genspark、sider、monica、merlin、deepl、fish-audio 等），仅收录 id 与现库无冲突、URL 实测可达的候选。
- **下一步（原草稿建议，已被二次指令覆盖）**：原建议为人工确认 2 条 404 死链是否下架、并手工挑选入库。用户已下达「死链替换/移除 + 候选上线部署」指令，见下方「部署结果」。

---

## 六、部署结果（2026-08-24 二次指令执行）

> 用户指令：死链工具先复搜替换、无可用链接则移除；12 条新品候选直接上线部署。

- **死链处理**：`phind`、`phind-search` 经多源复测确认已永久关停（首页 404，2026-01-16 起停止服务），无可用替代 URL → **已移除**。
- **新品入库**：上方 12 条草稿候选全部按字段规范写入 `scripts/tools.json`（已修 `strengths`/`weaknesses` 为分号拼接字符串，规避生成脚本类型错误）；并重新生成对应 `tools/<id>.html` 静态详情页。
- **总数变化**：364 → **374** 条（−2 死链 + 12 新工具）。`index.html` 英雄区文案同步更新为「374 个工具」。
- **提交与部署**：commit `1ccbc9e`（"工具库周维护：移除已关停的 phind/phind-search，新增 12 个工具（374 总计）"）已 `git push origin main`，Cloudflare Pages 自动构建部署。
- **线上验证（部署后复测）**：
  - 线上 `tools.json`：HTTP 200，解析 **374 条**，`phind`/`phind-search` 已不在库，12 条新工具 **12/12 全部存在** ✅
  - 首页英雄区文案：「**374 个工具**」✅
  - 新详情页（抽样 `huiyi`/`scispace`/`brave-search`/`metamonster`）：`/tools/<id>.html` → 307 跳转 `/tools/<id>` → 200，内容正常 ✅
- **结论**：本次周维护全部动作已上线生效，无残留差异。
