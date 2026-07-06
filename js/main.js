// AI家AI户 - 模型数据
const models = [
        {
                "id": "deepseek",
                "nameEn": "DeepSeek",
                "priceLabelEn": "Free (Web/App) / API Paid",
                "tagsEn": [
                        "Free",
                        "Reasoning",
                        "Coding",
                        "Math",
                        "Chinese Native"
                ],
                "name": "DeepSeek",
                "company": "深度求索（中国）",
                "category": "语言模型",
                "pricing": "freemium",
                "priceLabel": "网页/APP对话免费",
                "priceDetail": "网页和APP对话功能免费，无付费墙，无广告。API 按量计费，V4系列永久降价（V4-Pro降至原价25%）。V4.1定档2026年6月发布，首次多模态+企业工具",
                "website": "https://chat.deepseek.com",
                "tags": [
                        "免费",
                        "推理",
                        "编程",
                        "数学",
                        "中文原生",
                        "V4.1预告"
                ],
                "strengths": "网页和APP对话免费使用；推理能力突出（思维链）；数学和编程表现优异；中文原生；V4.1即将支持多模态（图像+音频理解）",
                "strengthsEn": "Free web & app chat; strong reasoning (chain-of-thought); excellent math & coding; native Chinese; V4.1 coming with multimodal (image+audio).",
                "weaknesses": "高峰期可能排队；当前版本图像/多模态能力有限；不支持联网搜索",
                "bestFor": "预算敏感的开发者、学生、需要高频深度推理的场景",
                "bestForEn": "Budget-sensitive developers, students, scenarios needing frequent deep reasoning",
                "chineseSupport": "★★★★★ 中文原生模型，中文理解自然",
                "contextWindow": "1M tokens (V4)",
                "apiAvailable": true,
                "released": "2023年推出，V4 2026年4月发布",
                "lastUpdated": "2026-06-15",
                "source": "deepseek.com / aipricecompare.org",
                "priceDetailEn": "All features free, no paywall, no ads. API usage-based billing, V4 series permanent price cut (V4-Pro 75% off). V4.1 coming June 2026, first multimodal + enterprise tools.",
                "chineseSupportEn": "★★★★★ Native Chinese model, excellent performance",
                "weaknessesEn": "May queue during peak hours; current image/multimodal limited; no web search support",
                "releasedEn": "Launched 2023, V4 released April 2026"
        },
        {
                "id": "kimi",
                "nameEn": "Kimi",
                "priceLabelEn": "Free / ~$7/mo",
                "tagsEn": [
                        "Long Text",
                        "Chinese Writing",
                        "Deep Research",
                        "PPT Gen",
                        "Agent"
                ],
                "name": "Kimi",
                "company": "月之暗面（中国）",
                "category": "语言模型",
                "pricing": "freemium",
                "priceLabel": "免费 / 会员 ¥49/月",
                "priceDetail": "免费版（Adagio，有限次数）; Andante ¥49/月; Moderato ¥99/月。K2.5 API 输入 ¥4/百万Token",
                "website": "https://kimi.moonshot.cn",
                "tags": [
                        "长文本",
                        "中文写作",
                        "深度研究",
                        "PPT生成",
                        "Agent"
                ],
                "strengths": "超长上下文处理；中文写作语气细腻；深度研究功能；OK Computer Agent模式",
                "strengthsEn": "Ultra-long context handling; nuanced Chinese writing tone; deep research capabilities; OK Computer Agent mode.",
                "weaknesses": "免费版次数限制较严；高峰期需排队/打赏优先",
                "bestFor": "长文写作、论文辅助、深度研究、PPT生成",
                "bestForEn": "Long-form writing, thesis assistance, deep research, PPT generation",
                "chineseSupport": "★★★★★ 中文长文写作表现突出",
                "contextWindow": "128K tokens",
                "apiAvailable": true,
                "released": "2023年10月首发",
                "lastUpdated": "2026-06-11",
                "source": "kimi.moonshot.cn / apis.you",
                "priceDetailEn": "Free tier (Adagio, limited uses); Andante ¥49/mo; Moderato ¥99/mo. K2.5 API: ¥4/million tokens input.",
                "chineseSupportEn": "★★★★★ Best-in-class for long-form Chinese writing",
                "weaknessesEn": "Strict free tier limits; queue/tipping priority during peak hours",
                "releasedEn": "First launched October 2023"
        },
        {
                "id": "qwen",
                "nameEn": "Qwen (Tongyi)",
                "priceLabelEn": "Free / API",
                "tagsEn": [
                        "Chinese",
                        "Alibaba",
                        "Enterprise",
                        "Multimodal",
                        "Open Source"
                ],
                "name": "通义千问 (Qwen)",
                "company": "阿里巴巴（中国）",
                "category": "语言模型",
                "pricing": "freemium",
                "priceLabel": "免费 / API按量付费",
                "priceDetail": "APP端免费。百炼API平台：新用户送7000万+Tokens免费额度（90天有效）；Qwen3.7-Max限时5折（输入¥6/输出¥18每百万Token）",
                "website": "https://www.aliyun.com/product/bailian?userCode=zpk45rgx",
                "tags": [
                        "中文",
                        "阿里生态",
                        "企业级",
                        "多模态",
                        "开源"
                ],
                "strengths": "Qwen3.7-Max旗舰模型性能强劲；阿里云生态深度集成；开源社区活跃（HuggingFace热门）",
                "strengthsEn": "Qwen3.7-Max flagship delivers strong performance; deep Alibaba Cloud integration; active open-source community (HuggingFace trending).",
                "weaknesses": "APP端和API端权益分离；网页版功能不如APP全面",
                "bestFor": "阿里云用户、企业级应用、中文场景、对开源有需求的开发者",
                "bestForEn": "Alibaba Cloud users, enterprise applications, Chinese-language scenarios, developers needing open-source",
                "chineseSupport": "★★★★★ 阿里巴巴出品，中文优化充分",
                "contextWindow": "256K tokens（Qwen-Long）",
                "apiAvailable": true,
                "released": "2023年首发，Qwen3.7-Max 2026年5月更新",
                "lastUpdated": "2026-06-11",
                "source": "aliyun.com / yangmao.ai",
                "priceDetailEn": "Free web version (Qwen3.5-Thinking with search). Bailian platform: 70M free tokens for new users. API: Qwen3.5 ¥2/M tokens input. Qwen3.5-VL free during beta.",
                "chineseSupportEn": "★★★★★ Native Chinese, Alibaba ecosystem integration",
                "weaknessesEn": "Free tier features limited; complex reasoning lags behind DeepSeek & ChatGPT",
                "releasedEn": "First launched April 2023, Qwen3.5 June 2026"
        },
        {
                "id": "ernie",
                "nameEn": "ERNIE Bot",
                "priceLabelEn": "Free / ~$7/mo",
                "tagsEn": [
                        "Chinese",
                        "Baidu",
                        "Search",
                        "Multimodal",
                        "Enterprise"
                ],
                "name": "文心一言 (ERNIE)",
                "company": "百度（中国）",
                "category": "语言模型",
                "pricing": "freemium",
                "priceLabel": "免费 / 专业版 ¥49.9/月",
                "priceDetail": "基础版ERNIE 4.5-Turbo免费使用。专业版¥49.9/月（ERNIE 4.5旗舰版，长文本/多模态全开）。API按量计费",
                "website": "https://yiyan.baidu.com",
                "tags": [
                        "中文",
                        "百度生态",
                        "搜索增强",
                        "多模态",
                        "企业级"
                ],
                "strengths": "百度搜索增强（实时联网+权威知识库）；中文理解和生成能力深厚；企业级API成熟稳定；文库/网盘等百度生态集成",
                "strengthsEn": "Baidu search enhancement (real-time web+authoritative knowledge); deep Chinese understanding & generation; mature enterprise-grade API; integrated with Baidu Wenku/Wangpan ecosystem.",
                "weaknesses": "推理和编程非核心优势；免费版模型能力相对基础；用户口碑两极分化",
                "bestFor": "百度重度用户、中文知识问答、企业级应用、需要联网搜索的场景",
                "bestForEn": "Heavy Baidu users, Chinese knowledge Q&A, enterprise applications, web-connected search scenarios",
                "chineseSupport": "★★★★★ 百度出品，中文原生理解深刻",
                "contextWindow": "128K tokens（ERNIE 4.5旗舰版）",
                "apiAvailable": true,
                "released": "2023年3月首发，ERNIE 4.5 2025年底更新",
                "lastUpdated": "2026-06-15",
                "source": "yiyan.baidu.com / baidu.com",
                "priceDetailEn": "Free web version (ERNIE 5.0 Lite). ERNIE 5.0 Pro ¥59.9/mo; ERNIE 5.0 Ultra ¥99.9/mo. API: ERNIE-Lite ¥0.8/M tokens input.",
                "chineseSupportEn": "★★★★★ Baidu ecosystem, native Chinese",
                "weaknessesEn": "Free tier limited; English reasoning weaker than top models; some features hidden behind paywall",
                "releasedEn": "First launched March 2023, ERNIE 5.0 November 2025"
        },
        {
                "id": "doubao",
                "nameEn": "Doubao",
                "priceLabelEn": "Free / ~$4/mo",
                "tagsEn": [
                        "Chinese",
                        "Free",
                        "Multimodal",
                        "ByteDance",
                        "Mobile"
                ],
                "name": "豆包 (Doubao)",
                "company": "字节跳动（中国）",
                "category": "语言模型",
                "pricing": "freemium",
                "priceLabel": "免费 / 会员 ¥29/月起",
                "priceDetail": "基础版免费。2026年5月起推出会员制：¥29/月（更多对话次数+模型优先响应）。API按量计费",
                "website": "https://www.doubao.com",
                "tags": [
                        "中文",
                        "免费",
                        "多模态",
                        "字节生态",
                        "APP"
                ],
                "strengths": "中文用户基数庞大（抖音/今日头条生态）；APP端体验流畅；多模态能力（图像理解+生成）；免费额度大方",
                "strengthsEn": "Massive Chinese user base (Douyin/Toutiao ecosystem); smooth mobile app experience; multimodal (image understanding+generation); generous free tier.",
                "weaknesses": "从免费转付费引发用户争议；网页版功能与APP端有差异；API生态规模中等",
                "bestFor": "日常聊天、中文问答、字节系用户、轻度AI使用",
                "bestForEn": "Daily chat, Chinese Q&A, ByteDance ecosystem users, light AI usage",
                "chineseSupport": "★★★★★ 字节出品，中文对话流畅自然",
                "contextWindow": "128K tokens",
                "apiAvailable": true,
                "released": "2023年8月首发",
                "lastUpdated": "2026-06-15",
                "source": "doubao.com / news.qq.com",
                "priceDetailEn": "Free web version (Doubao 2.0, daily limits). Pro ¥19.9/mo. API: Doubao-Lite ¥0.3/M tokens input; Doubao-Pro ¥3/M tokens input.",
                "chineseSupportEn": "★★★★★ ByteDance ecosystem, native Chinese",
                "weaknessesEn": "Free tier daily cap; English benchmarks lower; less ecosystem integration than competitors",
                "releasedEn": "First launched August 2023, Doubao 2.0 May 2026"
        },
        {
                "id": "glm",
                "nameEn": "GLM (ChatGLM)",
                "priceLabelEn": "Free / Plan ~$1.4+",
                "tagsEn": [
                        "Coding",
                        "Chinese",
                        "Open Source",
                        "Agent",
                        "Zhipu"
                ],
                "name": "智谱清言 (GLM)",
                "company": "智谱AI（中国）",
                "category": "语言模型",
                "pricing": "freemium",
                "priceLabel": "免费 / Coding Plan ¥9.9起",
                "priceDetail": "GLM-5.2-Flash 免费使用。Coding Plan：Lite 免费 / Pro ¥49/月 / Max ¥99/月",
                "website": "https://chatglm.cn",
                "tags": [
                        "编程",
                        "中文",
                        "开源",
                        "Agent",
                        "智谱生态"
                ],
                "strengths": "GLM-5.2系列编程能力突出；Coding Plan 性价比高；中文生态完善（MCP工具、Agent平台）",
                "strengthsEn": "GLM-5.2 series excels at coding; Coding Plan offers great value; robust Chinese ecosystem (MCP tools, Agent platform).",
                "weaknesses": "通用任务能力中等偏上；部分高级功能需付费",
                "bestFor": "编程辅助、中文任务、需要Agent/工具链的开发者",
                "bestForEn": "Coding assistance, Chinese-language tasks, developers needing Agent/toolchain",
                "chineseSupport": "★★★★★ 清华系团队出品，中文理解精确",
                "contextWindow": "203K tokens（GLM-5.2-Flash）",
                "apiAvailable": true,
                "released": "2023年首发，GLM-5.2系列 2026年更新",
                "lastUpdated": "2026-06-15",
                "source": "bigmodel.cn / vibecoding.app",
                "priceDetailEn": "GLM-5.2-Flash 免费使用。Coding Plan：Lite 免费 / Pro ¥49/月 / Max ¥99/月",
                "chineseSupportEn": "★★★★★ 清华系团队出品，中文理解精确",
                "weaknessesEn": "General tasks performance in upper-mid range; some advanced features require subscription.",
                "releasedEn": "2023年首发，GLM-5.2系列 2026年更新"
        },
        {
                "id": "minimax-m3",
                "nameEn": "MiniMax M3",
                "priceLabelEn": "Free / API",
                "tagsEn": [
                        "Multimodal",
                        "Coding",
                        "1M Context",
                        "Open Source",
                        "Chinese"
                ],
                "name": "MiniMax M3",
                "company": "稀宇科技/MiniMax（中国）",
                "category": "语言模型",
                "pricing": "freemium",
                "priceLabel": "免费 / API按量付费",
                "priceDetail": "聊天免费。API按量计费，输入约 ¥1/百万Token，输出约 ¥4/百万Token。开源权重可下载",
                "website": "https://www.minimaxi.com",
                "tags": [
                        "多模态",
                        "编程",
                        "超长上下文",
                        "开源",
                        "国产"
                ],
                "strengths": "国内首个同时集齐1M超长上下文+原生多模态+前沿编程的模型；SWE-Bench Pro编程得分59.0%；开源可商用；同厂商海螺视频AI视频生成",
                "strengthsEn": "First Chinese model combining 1M context + native multimodal + cutting-edge coding (59% on SWE-Bench Pro); open-source with commercial license; same company as HailuoAI video.",
                "weaknesses": "生态较新（模型刚发布，工具链/社区在建设中）；对话产品功能仍在完善中；品牌认知度待提升",
                "bestFor": "编程辅助、长文档分析、多模态任务、追求前沿国产模型的开发者",
                "bestForEn": "Coding assistance, long document analysis, multimodal tasks, developers pursuing cutting-edge Chinese models",
                "chineseSupport": "★★★★☆ 中文支持良好，国产模型天然适配",
                "contextWindow": "1M tokens",
                "apiAvailable": true,
                "released": "2026年6月1日发布",
                "lastUpdated": "2026-06-15",
                "source": "minimaxi.com / segmentfault.com",
                "priceDetailEn": "聊天免费。API按量计费，输入约 ¥1/百万Token，输出约 ¥4/百万Token。开源权重可下载",
                "chineseSupportEn": "★★★★☆ 中文支持良好，国产模型天然适配",
                "weaknessesEn": "New ecosystem (model just released, toolchain/community building); chat product features still maturing; brand awareness needs growth.",
                "releasedEn": "2026年6月1日发布"
        },
        {
                "id": "chatgpt",
                "nameEn": "ChatGPT",
                "priceLabelEn": "Free / Plus $20/mo",
                "tagsEn": [
                        "Writing",
                        "Coding",
                        "Image Gen",
                        "Voice",
                        "Multimodal"
                ],
                "name": "ChatGPT",
                "company": "OpenAI（美国）",
                "category": "语言模型",
                "pricing": "freemium",
                "priceLabel": "免费 / Plus $20/月",
                "priceDetail": "免费版（GPT-5.6 mini）; Plus $20/月（GPT-5.6）; Pro $200/月（GPT-5.6 Pro）",
                "website": "https://chat.openai.com",
                "tags": [
                        "写作",
                        "编程",
                        "图像生成",
                        "语音",
                        "多模态"
                ],
                "strengths": "GPT-5.6编程表现显著提升（AGI Ranker 77.48分）；支持图像生成（DALL-E 3.5）、语音对话、文件分析；Plus $20/月即可解锁主力模型",
                "strengthsEn": "Best all-rounder — GPT-5.6 scored 77.48 on AGI Ranker coding; DALL-E 3.5 image gen, voice chat, & file analysis included. Plus at $20/mo unlocks the full model.",
                "weaknesses": "免费版配额受限；需科学上网；国内直接访问不支持",
                "bestFor": "日常写作、创意脑暴、通用问答、图像生成",
                "bestForEn": "Daily writing, creative brainstorming, general Q&A, image generation",
                "chineseSupport": "★★★★☆ 中文流畅，偶有翻译腔",
                "contextWindow": "128K tokens",
                "apiAvailable": true,
                "released": "2022年11月首发",
                "lastUpdated": "2026-06-15",
                "source": "openai.com / aipricecompare.org",
                "priceDetailEn": "Free (GPT-5). ChatGPT Plus $20/mo (GPT-5.6, 5.6-Slow-Think). Pro $200/mo (unlimited, Deep Research). Team $25-30/user/mo.",
                "chineseSupportEn": "★★★★☆ Strong Chinese support, slight English bias",
                "weaknessesEn": "Free users face rate limits; China requires VPN; no WeChat/Pay integration",
                "releasedEn": "First launched November 2022, GPT-5.6 June 2026"
        },
        {
                "id": "claude",
                "nameEn": "Claude",
                "priceLabelEn": "Free / Pro $20/mo",
                "tagsEn": [
                        "Writing",
                        "Coding",
                        "Long Docs",
                        "Reasoning",
                        "Deep Analysis"
                ],
                "name": "Claude",
                "company": "Anthropic（美国）",
                "category": "语言模型",
                "pricing": "freemium",
                "priceLabel": "免费 / Pro $20/月",
                "priceDetail": "免费版（Sonnet 4.6）; Pro $20/月（Fable 5 + Opus 4.8）; Max $100-200/月",
                "website": "https://claude.ai",
                "tags": [
                        "写作",
                        "编程",
                        "长文档",
                        "推理",
                        "深度分析"
                ],
                "strengths": "Opus 4.8在AGI Ranker编程榜得分81.03分；长文档处理能力突出；推理风格严谨；Project功能可管理多个对话上下文",
                "strengthsEn": "Opus 4.8 tops AGI Ranker coding charts (81.03); exceptional long-document handling; rigorous reasoning; Project feature manages multiple conversation contexts.",
                "weaknesses": "免费版每日限额较严；图像生成能力弱；需科学上网",
                "bestFor": "长文档分析、学术写作、复杂代码项目、报告撰写、编程竞赛",
                "bestForEn": "Long document analysis, academic writing, complex coding projects, report writing, competitive programming",
                "chineseSupport": "★★★★☆ 中文表现优异，语气自然",
                "contextWindow": "200K tokens",
                "apiAvailable": true,
                "released": "2023年3月首发",
                "lastUpdated": "2026-06-15",
                "source": "anthropic.com / agiranker.com",
                "priceDetailEn": "Free (Claude Sonnet 4.5). Pro $20/mo (Claude Opus 4.8). Max $100-200/mo (extended limits). Team $25/user/mo.",
                "chineseSupportEn": "★★★☆☆ Good Chinese but English-oriented; HK requires VPN",
                "weaknessesEn": "HK requires VPN; no free tier for Opus; Chinese sometimes unnatural; no image gen natively",
                "releasedEn": "First launched March 2023, Opus 4.8 June 2026"
        },
        {
                "id": "gemini",
                "nameEn": "Gemini",
                "priceLabelEn": "Free / AI Pro $19.99/mo",
                "tagsEn": [
                        "Multimodal",
                        "Search",
                        "Video Gen",
                        "Long Context",
                        "Google"
                ],
                "name": "Gemini",
                "company": "Google（美国）",
                "category": "语言模型",
                "pricing": "freemium",
                "priceLabel": "免费 / AI Pro $19.99/月",
                "priceDetail": "免费版（Gemini 2.5 Flash）; AI Plus $9.99/月; AI Pro $19.99/月（Gemini 3.1 Pro）; Ultra $249.99/月",
                "website": "https://gemini.google.com",
                "tags": [
                        "多模态",
                        "搜索",
                        "视频生成",
                        "长上下文",
                        "Google生态"
                ],
                "strengths": "Google生态深度整合（Gmail/Docs/Drive）；视频生成（Veo）；1M Token 超长上下文",
                "strengthsEn": "Deep Google ecosystem integration (Gmail/Docs/Drive); video generation (Veo); massive 1M token context window.",
                "weaknesses": "中文处理主要为英文优化，细腻度有提升空间；部分功能国内受限；Google服务需特殊网络环境",
                "bestFor": "Google Workspace用户、视频生成、多模态任务、超长文本处理",
                "bestForEn": "Google Workspace users, video generation, multimodal tasks, ultra-long text processing",
                "chineseSupport": "★★★☆☆ 中文可用，主要为英文母语优化",
                "contextWindow": "1M tokens",
                "apiAvailable": true,
                "released": "2023年12月首发",
                "lastUpdated": "2026-06-11",
                "source": "gemini.google.com / aipricecompare.org",
                "priceDetailEn": "Free (Gemini 2.5 Pro, limited). Gemini Advanced $19.99/mo (1M context). API: Gemini 2.5 Flash $0.15/M tokens input.",
                "chineseSupportEn": "★★★☆☆ Acceptable Chinese, Google ecosystem bias",
                "weaknessesEn": "China requires VPN; Chinese quality behind domestic models; UI updates confusing",
                "releasedEn": "First launched December 2023, Gemini 2.5 2025"
        },
        {
                "id": "llama",
                "nameEn": "Llama",
                "priceLabelEn": "Free (Open Source)",
                "tagsEn": [
                        "Open Source",
                        "Local Deploy",
                        "Customizable",
                        "Privacy",
                        "Research"
                ],
                "name": "Llama",
                "company": "Meta（美国）",
                "category": "语言模型",
                "pricing": "free",
                "priceLabel": "完全免费（开源）",
                "priceDetail": "完全开源免费，可在HuggingFace/GitHub下载模型权重。自行部署成本取决于硬件",
                "website": "https://llama.meta.com",
                "tags": [
                        "开源",
                        "本地部署",
                        "可定制",
                        "隐私",
                        "研究"
                ],
                "strengths": "完全开源，可本地部署，数据不外传；社区生态活跃（微调版本众多）；适合定制化需求",
                "strengthsEn": "Fully open-source, local deployment keeps data private; active community with numerous fine-tuned variants; ideal for customization.",
                "weaknesses": "需要自行部署（技术门槛）或使用第三方托管；本地运行需要GPU；中文未经专门优化",
                "bestFor": "隐私敏感场景、学术研究、企业本地部署、模型微调",
                "bestForEn": "Privacy-sensitive scenarios, academic research, enterprise on-premises deployment, model fine-tuning",
                "chineseSupport": "★★★☆☆ 中文可用但非专项优化，微调后可提升",
                "contextWindow": "128K tokens",
                "apiAvailable": false,
                "released": "2023年2月首发，Llama 4 2025年发布",
                "lastUpdated": "2026-06-11",
                "source": "meta.com / huggingface.co",
                "priceDetailEn": "完全开源免费，可在HuggingFace/GitHub下载模型权重。自行部署成本取决于硬件",
                "chineseSupportEn": "★★★☆☆ 中文可用但非专项优化，微调后可提升",
                "weaknessesEn": "需要自行部署（技术门槛）或使用第三方托管；本地运行需要GPU；中文未经专门优化",
                "releasedEn": "2023年2月首发，Llama 4 2025年发布"
        },
        {
                "id": "bailian",
                "nameEn": "Alibaba Bailian",
                "priceLabelEn": "Free Trial / Pay-as-you-go",
                "tagsEn": [
                        "Agent",
                        "MCP",
                        "Multi-Model",
                        "RAG",
                        "Workflow",
                        "Qwen"
                ],
                "name": "百炼平台",
                "company": "阿里云（中国）",
                "category": "Agent平台",
                "pricing": "freemium",
                "priceLabel": "免费试用 / API按量付费",
                "priceDetail": "新用户送7000万+Tokens免费额度（90天有效）。Qwen3.7-Max 限时5折（输入¥6/输出¥18每百万Token）。支持 Token Plan 预购套餐",
                "website": "https://www.aliyun.com/product/bailian?userCode=zpk45rgx",
                "tags": [
                        "Agent",
                        "MCP",
                        "多模型",
                        "RAG",
                        "工作流",
                        "可视化",
                        "Qwen"
                ],
                "strengths": "阿里云官方一站式AI平台；支持Qwen3.7/DeepSeek/GLM/MiniMax等100+模型；内置MCP托管+Agent搭建+可视化工作流；新用户7000万免费Tokens",
                "strengthsEn": "Alibaba's official all-in-one AI platform; supports 100+ models including Qwen3.7/DeepSeek/GLM/MiniMax; built-in MCP hosting + Agent builder + visual workflow; 70M free tokens for new users.",
                "weaknesses": "需阿里云账号；高级功能需付费；主要面向开发者和企业用户",
                "bestFor": "需要一站式调用多种大模型API的开发者、企业AI应用搭建、Agent开发",
                "bestForEn": "Developers needing one-stop multi-model API access, enterprise AI app building, Agent development",
                "chineseSupport": "★★★★★ 阿里云出品，中文文档和界面完善",
                "contextWindow": "取决于接入的模型",
                "apiAvailable": true,
                "released": "2023年首发，持续迭代",
                "lastUpdated": "2026-06-26",
                "source": "aliyun.com/product/bailian",
                "priceDetailEn": "Free (basic). API pay-as-you-go. New users: 70M free tokens. Qwen3.5-Thinking free during beta.",
                "chineseSupportEn": "★★★★★ Alibaba Cloud native Chinese",
                "weaknessesEn": "Tightly coupled to Alibaba Cloud; documentation sometimes in Chinese only; limited third-party model support",
                "releasedEn": "First launched 2024"
        },
        {
                "id": "coze",
                "nameEn": "Coze",
                "priceLabelEn": "Free (Basic)",
                "tagsEn": [
                        "Agent",
                        "No-Code",
                        "Bot Builder",
                        "Multi-Model",
                        "Workflow"
                ],
                "name": "扣子 (Coze)",
                "company": "字节跳动（中国）",
                "category": "Agent平台",
                "pricing": "free",
                "priceLabel": "免费（基础版）",
                "priceDetail": "基础版完全免费，支持创建多个Agent。Coze 3.0 2026年6月上线，支持多人多Agent协作",
                "website": "https://www.coze.cn",
                "tags": [
                        "Agent",
                        "零代码",
                        "Bot搭建",
                        "多模型",
                        "工作流"
                ],
                "strengths": "零代码搭建AI助手；支持接入多种模型（Claude、GPT等）；拖拽式工作流设计；开源",
                "strengthsEn": "No-code AI assistant builder; supports multiple models (Claude, GPT, etc.); drag-and-drop workflow design; open-source.",
                "weaknesses": "非语言模型本身，是Agent开发平台；复杂场景有学习曲线；国内版和国际版数据不互通",
                "bestFor": "想搭建自己的AI Bot、客服机器人、自动化工作流的用户",
                "bestForEn": "Users wanting to build custom AI bots, customer service bots, automated workflows",
                "chineseSupport": "★★★★★ 字节跳动出品，中文界面和教程完善",
                "contextWindow": "取决于接入的模型",
                "apiAvailable": false,
                "released": "2024年首发，Coze 3.0 2026年6月1日发布",
                "lastUpdated": "2026-06-11",
                "source": "coze.cn / finance.sina.com.cn",
                "priceDetailEn": "Free (basic). Pro ¥99/mo. API: BytePlus pricing. Coze Points system — cannot accumulate.",
                "chineseSupportEn": "★★★★★ ByteDance native Chinese",
                "weaknessesEn": "Tightly ByteDance ecosystem; Points cannot accumulate; advanced features behind paywall",
                "releasedEn": "First launched 2024"
        },
        {
                "id": "workbuddy",
                "nameEn": "WorkBuddy",
                "priceLabelEn": "Free/~$8/mo",
                "tagsEn": [
                        "Agent",
                        "Productivity",
                        "Skills",
                        "MCP",
                        "Office"
                ],
                "name": "WorkBuddy",
                "company": "腾讯（中国）",
                "category": "Agent平台",
                "pricing": "freemium",
                "priceLabel": "免费 / 个人版 ¥58/月",
                "priceDetail": "新用户注册送500 Credits，连续30日每日登录送100 Credits。个人版2000 Credits/¥58/月；企业版2000 Credits/¥78/月；企业专享定制化服务",
                "website": "https://workbuddy.tencent.com",
                "tags": [
                        "Agent",
                        "效率",
                        "专家团",
                        "Skills",
                        "MCP",
                        "办公"
                ],
                "strengths": "内置20+Skills技能包与MCP协议；专家中心提供成组Agent角色协作；支持微信/企业微信远程指挥电脑处理日常工作；企业版7×24小时专家数字员工",
                "strengthsEn": "20+ built-in Skills packs & MCP protocol; Expert Center for multi-agent role collaboration; WeChat/WeCom remote PC control; enterprise 24/7 digital expert workers.",
                "weaknesses": "主要面向国内用户；部分高级功能需付费；Mac/Windows桌面应用为主，无纯网页版",
                "bestFor": "日常办公提效、数据处理、文档撰写、项目管理、一人企业运营",
                "bestForEn": "Daily office productivity, data processing, document writing, project management, solo business operations",
                "chineseSupport": "★★★★★ 腾讯出品，中文原生支持",
                "contextWindow": "取决于接入的模型",
                "apiAvailable": false,
                "released": "2026年3月9日上线，企业版2026年6月发布",
                "lastUpdated": "2026-06-11",
                "source": "workbuddy.tencent.com / new.qq.com",
                "priceDetailEn": "新用户注册送500 Credits，连续30日每日登录送100 Credits。个人版2000 Credits/¥58/月；企业版2000 Credits/¥78/月；企业专享定制化服务",
                "chineseSupportEn": "★★★★★ 腾讯出品，中文原生支持",
                "weaknessesEn": "主要面向国内用户；部分高级功能需付费；Mac/Windows桌面应用为主，无纯网页版",
                "releasedEn": "2026年3月9日上线，企业版2026年6月发布"
        },
        {
                "id": "windclaw",
                "nameEn": "WindClaw",
                "priceLabelEn": "Free (Beta)",
                "tagsEn": [
                        "Agent",
                        "Finance",
                        "Data",
                        "Multi-Agent",
                        "24x7"
                ],
                "name": "WindClaw",
                "company": "万得信息（中国）",
                "category": "Agent平台",
                "pricing": "free",
                "priceLabel": "公测免费",
                "priceDetail": "2026年3月公测期间免费使用。正式定价方案待公布，预计按Wind账号体系分级收费",
                "website": "https://windclaw.bot",
                "tags": [
                        "Agent",
                        "金融投研",
                        "专业数据",
                        "多智能体",
                        "7×24"
                ],
                "strengths": "深度整合Wind专业金融数据库；多智能体协同架构实现7×24自动化投研分析；支持零代码本地化部署；股票分析/宏观研究/市场监控一站式",
                "strengthsEn": "Deep Wind financial database integration; multi-agent architecture for 24/7 automated investment research; zero-code local deployment; all-in-one stock/macro/market monitoring.",
                "weaknesses": "需要Wind账号体系（金融从业者门槛）；非金融领域用户不适用；公测期功能仍在迭代",
                "bestFor": "金融从业者、投资研究、股票分析、宏观研究、市场监控",
                "bestForEn": "Finance professionals, investment research, stock analysis, macro research, market monitoring",
                "chineseSupport": "★★★★★ 万得出品，中文金融数据覆盖广泛",
                "contextWindow": "取决于接入的模型",
                "apiAvailable": false,
                "released": "2026年3月11日公测",
                "lastUpdated": "2026-06-11",
                "source": "windclaw.bot / aihub.cn",
                "priceDetailEn": "2026年3月公测期间免费使用。正式定价方案待公布，预计按Wind账号体系分级收费",
                "chineseSupportEn": "★★★★★ By Wind Info; broad Chinese financial data coverage",
                "weaknessesEn": "需要Wind账号体系（金融从业者门槛）；非金融领域用户不适用；公测期功能仍在迭代",
                "releasedEn": "2026年3月11日公测"
        },
        {
                "id": "dify",
                "nameEn": "Dify",
                "priceLabelEn": "Free (OS)/Enterprise",
                "tagsEn": [
                        "Agent",
                        "Open Source",
                        "Workflow",
                        "RAG",
                        "Self-hosted"
                ],
                "name": "Dify",
                "company": "Dify.ai（中国/开源）",
                "category": "Agent平台",
                "pricing": "freemium",
                "priceLabel": "免费（开源）/ 企业版付费",
                "priceDetail": "社区版完全开源免费，可自行部署（Docker）。Cloud版免费额度有限；企业版按需定价（私有化部署/高级权限/审计日志）",
                "website": "https://dify.ai",
                "tags": [
                        "Agent",
                        "开源",
                        "工作流",
                        "多模型",
                        "RAG",
                        "可自托管"
                ],
                "strengths": "开源可自托管（数据不出域）；可视化工作流编排；支持 100+ LLM 接入；内置 RAG 知识库引擎；声明式 YAML 配置",
                "strengthsEn": "Open-source self-hosted (data stays in-house); visual workflow builder; supports 100+ LLM integrations; built-in RAG knowledge engine; declarative YAML config.",
                "weaknesses": "自托管需要技术能力（Docker/服务器）；企业版费用较高；UI/UX 偏技术用户",
                "bestFor": "技术团队、企业客服系统、需私有化部署的知识库应用、AI应用快速原型",
                "bestForEn": "Tech teams, enterprise customer service, self-hosted knowledge base apps, rapid AI app prototyping",
                "chineseSupport": "★★★★☆ 中文界面完善，文档中英双语",
                "contextWindow": "取决于接入的模型",
                "apiAvailable": true,
                "released": "2023年开源，持续迭代中",
                "lastUpdated": "2026-06-11",
                "source": "dify.ai / news.sohu.com",
                "priceDetailEn": "Free self-hosted (open source). Cloud: Free (basic), Team $59/mo, Business $159/mo, Enterprise custom.",
                "chineseSupportEn": "★★★★★ Native Chinese UI, excellent docs",
                "weaknessesEn": "Complex setup for self-hosted; free tier limited; community plugins variable quality",
                "releasedEn": "First launched 2023"
        },
        {
                "id": "manus",
                "nameEn": "Manus",
                "priceLabelEn": "$39/mo+",
                "tagsEn": [
                        "Agent",
                        "Autonomous",
                        "Deliverables",
                        "Multi-Step"
                ],
                "name": "Manus",
                "company": "Manus（中国/美国）",
                "category": "Agent平台",
                "pricing": "paid",
                "priceLabel": "订阅制（约 $39/月起）",
                "priceDetail": "Starter $39/月；Pro $199/月。2026年仍处邀请制，公测用户需排队获取使用权",
                "website": "https://manus.im",
                "tags": [
                        "Agent",
                        "自主任务",
                        "虚拟同事",
                        "交付型",
                        "多步骤"
                ],
                "strengths": "任务自主规划与成果交付（不只是对话，直接产出可交付物）；能操作浏览器、文件系统等工具；适合需要AI独自完成复杂任务的场景",
                "strengthsEn": "Autonomous task planning & deliverable output (not just chat, produces real artifacts); can operate browser & file system; ideal for complex solo-agent tasks.",
                "weaknesses": "仍处邀请制阶段，使用门槛高；每月费用不低；任务执行速度较慢（需多步规划）；中文场景适配仍在优化",
                "bestFor": "单人强交付任务（数据分析报告、竞品调研、市场分析）、需要AI自主完成多步骤操作的场景",
                "bestForEn": "Solo high-deliverable tasks (data analysis reports, competitive research, market analysis), multi-step autonomous agent scenarios",
                "chineseSupport": "★★★☆☆ 中文可用，但原生界面以英文为主",
                "contextWindow": "取决于接入的模型",
                "apiAvailable": false,
                "released": "2025年首发，持续迭代",
                "lastUpdated": "2026-06-11",
                "source": "manus.im / sohu.com",
                "priceDetailEn": "Free (limited). Pro $199/mo. API not available yet.",
                "chineseSupportEn": "★★★★★ Chinese company, native Chinese support",
                "weaknessesEn": "Very expensive Pro plan; still early stage; API not yet public; limited integrations",
                "releasedEn": "Launched March 2025"
        },
        {
                "id": "n8n",
                "nameEn": "n8n",
                "priceLabelEn": "Free/Cloud €20+",
                "tagsEn": [
                        "Agent",
                        "Open Source",
                        "Automation",
                        "400+ Integrations"
                ],
                "name": "n8n",
                "company": "n8n GmbH（德国/开源）",
                "category": "Agent平台",
                "pricing": "freemium",
                "priceLabel": "免费（开源）/ Cloud €20/月起",
                "priceDetail": "社区版完全开源免费，可自行部署。Cloud版 Starter €20/月；Pro €120/月；Enterprise 按需定价",
                "website": "https://n8n.io",
                "tags": [
                        "Agent",
                        "开源",
                        "自动化",
                        "工作流",
                        "400+集成",
                        "AI节点"
                ],
                "strengths": "开源可自托管；400+ 原生集成节点（Google/Airtable/Slack等）；可视化工作流编辑器；AI Agent 节点可将 LLM 接入自动化流程",
                "strengthsEn": "Open-source self-hosted; 400+ native integrations (Google/Airtable/Slack etc.); visual workflow editor; AI Agent nodes connect LLMs to automation pipelines.",
                "weaknesses": "自托管需技术能力；Cloud版海外服务器（国内访问可能慢）；界面全英文；中文社区较小",
                "bestFor": "自动化数据同步、跨平台工作流、技术用户的AI自动化流程、企业内部流程自动化",
                "bestForEn": "Automated data sync, cross-platform workflows, tech-savvy AI automation, enterprise internal process automation",
                "chineseSupport": "★★☆☆☆ 全英文界面和文档，中文社区资源有限",
                "contextWindow": "取决于接入的模型",
                "apiAvailable": true,
                "released": "2019年开源，2024年加入AI Agent功能",
                "lastUpdated": "2026-06-11",
                "source": "n8n.io / cet.com.cn",
                "priceDetailEn": "社区版完全开源免费，可自行部署。Cloud版 Starter €20/月；Pro €120/月；Enterprise 按需定价",
                "chineseSupportEn": "★★☆☆☆ 全英文界面和文档，中文社区资源有限",
                "weaknessesEn": "自托管需技术能力；Cloud版海外服务器（国内访问可能慢）；界面全英文；中文社区较小",
                "releasedEn": "2019年开源，2024年加入AI Agent功能"
        },
        {
                "id": "jimeng",
                "nameEn": "Jimeng",
                "priceLabelEn": "Free",
                "tagsEn": [
                        "Chinese Native",
                        "Free",
                        "Image Gen",
                        "Video Gen",
                        "Jianying"
                ],
                "name": "即梦 (Jimeng)",
                "company": "字节跳动（中国）",
                "category": "图像模型",
                "pricing": "free",
                "priceLabel": "免费使用",
                "priceDetail": "基础版免费，每日赠送生成额度。高级功能按需付费，签到完成任务可获取更多额度",
                "website": "https://jimeng.jianying.com",
                "tags": [
                        "中文原生",
                        "免费",
                        "图像生成",
                        "视频生成",
                        "剪映生态"
                ],
                "strengths": "中文Prompt理解精准零门槛；免费额度大方；剪映/CapCut生态深度整合（生成即编辑）；操作极简适合小白",
                "strengthsEn": "Precise Chinese prompt understanding, zero learning curve; generous free tier; deep Jianying/CapCut integration (generate→edit instantly); dead-simple for beginners.",
                "weaknesses": "精细控制功能较有限（无ControlNet级功能）；复杂场景效果一般；风格库规模中等",
                "bestFor": "中文用户日常配图、社交媒体图片、短视频封面、不想折腾Prompt的普通用户",
                "bestForEn": "Chinese users' everyday images, social media graphics, short video thumbnails, casual users who hate prompt engineering",
                "chineseSupport": "★★★★★ 中文原生，理解精准",
                "apiAvailable": false,
                "released": "2024年首发，持续更新",
                "lastUpdated": "2026-06-11",
                "source": "jimeng.jianying.com",
                "priceDetailEn": "Free (daily quota). API: ¥0.02-0.2/image depending on resolution.",
                "chineseSupportEn": "★★★★★ ByteDance native Chinese, Douyin integration",
                "weaknessesEn": "Quality behind Midjourney; Douyin ecosystem lock-in; limited API documentation in English",
                "releasedEn": "Launched 2024"
        },
        {
                "id": "midjourney",
                "nameEn": "Midjourney",
                "priceLabelEn": "Basic $10/mo+",
                "tagsEn": [
                        "Image Gen",
                        "V7",
                        "Artistic",
                        "Discord",
                        "Niji"
                ],
                "name": "Midjourney",
                "company": "Midjourney Inc.（美国）",
                "category": "图像模型",
                "pricing": "paid",
                "priceLabel": "Basic $10/月起",
                "priceDetail": "Basic $10/月 (~200图); Standard $30/月 (~900图+无限慢速); Pro $60/月; Mega $120/月。无免费版",
                "website": "https://www.midjourney.com",
                "tags": [
                        "图像生成",
                        "V7",
                        "艺术风格",
                        "Discord",
                        "Niji动漫"
                ],
                "strengths": "图像生成质量高，V7版本艺术风格突出；Niji 7动漫引擎专业；Relax Mode无限慢速生成；颜色和光影表现力受市场认可",
                "strengthsEn": "High image quality — V7 delivers distinctive artistic style; Niji 7 professional anime engine; Relax Mode for unlimited slow generation; recognized for color & lighting performance.",
                "weaknesses": "无免费版；需通过Discord使用（有学习曲线）；中国访问需特殊网络环境；Prompt需要英文",
                "bestFor": "艺术创作、设计灵感、概念图、游戏原画、高品质插画",
                "bestForEn": "Art creation, design inspiration, concept art, game key visuals, high-quality illustrations",
                "chineseSupport": "★★☆☆☆ Discord界面全英文，中文Prompt需翻译",
                "apiAvailable": false,
                "released": "2022年7月首发，V7 2025年4月发布",
                "lastUpdated": "2026-06-11",
                "source": "midjourney.com / similarlabs.com",
                "priceDetailEn": "Basic $10/mo (~200 images). Standard $30/mo (unlimited relax). Pro $60/mo (stealth, 12 concurrent). Mega $120/mo.",
                "chineseSupportEn": "★★☆☆☆ No Chinese UI, community tools needed",
                "weaknessesEn": "Discord-only workflow can be clunky; no API; expensive for casual users; Chinese prompt support limited",
                "releasedEn": "First launched July 2022, V7 Alpha 2025"
        },
        {
                "id": "dalle",
                "nameEn": "DALL-E",
                "priceLabelEn": "Free+/Plus $20/mo",
                "tagsEn": [
                        "Image Gen",
                        "Multimodal",
                        "Natural Language",
                        "Editing"
                ],
                "name": "DALL-E",
                "company": "OpenAI（美国）",
                "category": "图像模型",
                "pricing": "freemium",
                "priceLabel": "ChatGPT内置 / Plus $20/月",
                "priceDetail": "ChatGPT免费版可生成少量图; Plus $20/月 (DALL-E 3.5，无限生成); Pro $200/月",
                "website": "https://chat.openai.com",
                "tags": [
                        "图像生成",
                        "多模态",
                        "自然语言",
                        "文字渲染",
                        "编辑"
                ],
                "strengths": "自然语言理解能力突出（口语化描述即可获得准确结果）；与ChatGPT深度集成，生成+编辑在同一对话完成；文字渲染优秀；操作极简无需调参",
                "strengthsEn": "Strong natural language understanding (casual prompts work well); deep ChatGPT integration for gen+edit in one conversation; excellent text rendering; dead-simple, no tuning needed.",
                "weaknesses": "艺术风格选择相对有限；需科学上网；生成速度中等（10-30秒/张）",
                "bestFor": "不需要复杂Prompt的日常配图、社交媒体图片、PPT插图、概念图",
                "bestForEn": "Everyday images without complex prompts, social media graphics, PPT illustrations, concept visuals",
                "chineseSupport": "★★★★☆ 支持中文Prompt，英文Prompt效果更佳",
                "apiAvailable": true,
                "released": "2021年1月首发，DALL-E 3.5 2026年更新",
                "lastUpdated": "2026-06-11",
                "source": "openai.com / aibotgo.net",
                "priceDetailEn": "Free (basic, with ChatGPT). ChatGPT Plus $20/mo (full access). API: DALL-E 3 $0.04-0.12/image (HD).",
                "chineseSupportEn": "★★★★☆ Good Chinese via ChatGPT prompts",
                "weaknessesEn": "Less artistic control than Midjourney; behind on latest features; no standalone product",
                "releasedEn": "First launched January 2021, DALL-E 3 October 2023"
        },
        {
                "id": "stable-diffusion",
                "nameEn": "Stable Diffusion",
                "priceLabelEn": "Free (OS)/Cloud",
                "tagsEn": [
                        "Open Source",
                        "Local",
                        "Customizable",
                        "ControlNet",
                        "LoRA"
                ],
                "name": "Stable Diffusion",
                "company": "Stability AI（英国）",
                "category": "图像模型",
                "pricing": "free",
                "priceLabel": "开源免费 / 云服务付费",
                "priceDetail": "SD4模型权重开源免费；Stability AI官方云API按量计费；Replicate/Fal等第三方托管平台各有定价",
                "website": "https://stability.ai",
                "tags": [
                        "开源",
                        "本地部署",
                        "可定制",
                        "ControlNet",
                        "LoRA社区"
                ],
                "strengths": "完全开源，数据不出本机；ControlNet精确控制构图/姿势/深度；LoRA插件生态极丰富（可训练专属风格）；社区海量免费模型",
                "strengthsEn": "Fully open-source, data stays local; ControlNet for precise pose/depth/composition control; rich LoRA plugin ecosystem (train your own styles); massive community model library.",
                "weaknesses": "需要GPU（本地部署建议8GB+显存）；Prompt门槛高（负面Prompt、采样器、步数等参数需调）；云端方案需额外付费",
                "bestFor": "技术用户、需定制化工作流的设计师、隐私敏感的图像生成、AI绘画研究者",
                "bestForEn": "Tech users, designers needing custom workflows, privacy-sensitive image generation, AI art researchers",
                "chineseSupport": "★★☆☆☆ 英文Prompt为主，中文需翻译",
                "apiAvailable": true,
                "released": "2022年8月首发，SD4 2025年发布",
                "lastUpdated": "2026-06-11",
                "source": "stability.ai / huggingface.co",
                "priceDetailEn": "Free (open source, self-hosted). DreamStudio web: $10/1000 credits. API: Stability AI $0.01-0.15/image.",
                "chineseSupportEn": "★★☆☆☆ English prompts needed; community Chinese support",
                "weaknessesEn": "Complex self-hosting; outdated vs competitors; company financial instability; Chinese support minimal",
                "releasedEn": "First launched August 2022, SD3 2024"
        },
        {
                "id": "flux",
                "nameEn": "FLUX",
                "priceLabelEn": "Free (OS)/Pro",
                "tagsEn": [
                        "Open Source",
                        "High Quality",
                        "Text Rendering",
                        "Realistic",
                        "Fast"
                ],
                "name": "FLUX",
                "company": "Black Forest Labs（德国）",
                "category": "图像模型",
                "pricing": "freemium",
                "priceLabel": "开源免费 / Pro按量付费",
                "priceDetail": "FLUX.1-dev开源免费（需较好GPU）；FLUX.1-pro通过API按量计费（BFL官方或Replicate/Fal托管）",
                "website": "https://blackforestlabs.ai",
                "tags": [
                        "开源",
                        "高质量",
                        "文字渲染",
                        "真实感",
                        "快速生成"
                ],
                "strengths": "Stable Diffusion原班人马打造；文字渲染能力突出（招牌/UI文字精准不歪）；生成速度快；写实质感出色",
                "strengthsEn": "Built by original Stable Diffusion team; strong text rendering (signs/UI text crisp & accurate); fast generation; impressive photorealism.",
                "weaknesses": "开源版对硬件要求极高（建议24GB+显存）；第三方工具生态仍在追赶（LoRA/ControlNet支持在扩展）",
                "bestFor": "需要高精度文字渲染的设计（海报/封面/LOGO）、高质量写实图像、追求速度的专业用户",
                "bestForEn": "High-precision text rendering (posters/covers/logos), high-quality photorealistic images, speed-focused professionals",
                "chineseSupport": "★★☆☆☆ 英文为主",
                "apiAvailable": true,
                "released": "2024年8月首发，Pro版持续迭代",
                "lastUpdated": "2026-06-11",
                "source": "blackforestlabs.ai / apatero.com",
                "priceDetailEn": "Free (open source, FLUX.1-schnell). FLUX.1-pro API: $0.05/image. FLUX.1-ultra: $0.06/image.",
                "chineseSupportEn": "★★★☆☆ Acceptable, prompt in English works best",
                "weaknessesEn": "English-first prompting; requires decent GPU for self-hosted; Chinese text generation weak",
                "releasedEn": "Launched August 2024 by Black Forest Labs"
        },
        {
                "id": "kling",
                "nameEn": "Kling",
                "priceLabelEn": "Free/~$5/mo",
                "tagsEn": [
                        "Video Gen",
                        "Chinese Native",
                        "Free",
                        "Long Video"
                ],
                "name": "可灵 (Kling)",
                "company": "快手（中国）",
                "category": "视频模型",
                "pricing": "free",
                "priceLabel": "免费 / 会员 ¥39/月起",
                "priceDetail": "免费版每日赠送额度（签到+任务获取积分）; 会员 ¥39/月起（更多额度+更高画质+更长时长）",
                "website": "https://kling.kuaishou.com",
                "tags": [
                        "视频生成",
                        "中文原生",
                        "免费",
                        "长视频",
                        "短视频"
                ],
                "strengths": "中文Prompt理解精准零门槛；免费额度大方（签到+完成任务可持续白嫖）；直接生成10秒长视频；生成速度快；新手极度友好",
                "strengthsEn": "Precise Chinese prompt understanding, zero learning curve; generous free quota (check-in + tasks for sustained free use); directly generates 10s long videos; fast generation; extremely beginner-friendly.",
                "weaknesses": "复杂物理规律偶尔翻车（人物动作不自然）；默认风格偏写实，动漫/3D需额外调试；不支持精细后期编辑",
                "bestFor": "中文短视频创作者、新手入门、日常社交媒体视频、低成本视频制作",
                "bestForEn": "Chinese short video creators, beginners, everyday social media videos, low-cost video production",
                "chineseSupport": "★★★★★ 中文原生，理解精准",
                "apiAvailable": false,
                "released": "2024年6月首发，可灵3 2026年更新",
                "lastUpdated": "2026-06-11",
                "source": "kling.kuaishou.com / nav-ai.cn",
                "priceDetailEn": "Free (daily quota). Membership ¥58/mo (more credits). API: ¥0.3-1.5/video.",
                "chineseSupportEn": "★★★★★ Kuaishou native Chinese, excellent quality",
                "weaknessesEn": "Quality varies; Kuaishou ecosystem less dev-friendly; limited English docs",
                "releasedEn": "Launched June 2024 (Kling 1.0), Kling 2.0 2025"
        },
        {
                "id": "hailuo-video",
                "nameEn": "HailuoAI Video",
                "priceLabelEn": "Free/~$5/mo",
                "tagsEn": [
                        "AI Video",
                        "Chinese Native",
                        "Text2Video",
                        "MiniMax"
                ],
                "name": "海螺视频 (HailuoAI)",
                "company": "稀宇科技/MiniMax（中国）",
                "category": "视频模型",
                "pricing": "freemium",
                "priceLabel": "免费 / 会员 ¥39/月起",
                "priceDetail": "免费版每日赠送额度。会员¥39/月起（更多额度+更高画质+去除水印）。API按量计费",
                "website": "https://hailuoai.com",
                "tags": [
                        "AI视频",
                        "中文原生",
                        "文生视频",
                        "图生视频",
                        "MiniMax"
                ],
                "strengths": "国产AI视频黑马，中文Prompt理解精准；文生视频和图生视频双模式；与MiniMax M3同厂商技术协同；免费额度友好适合尝鲜",
                "strengthsEn": "Rising Chinese AI video star, precise Chinese prompt understanding; dual text-to-video & image-to-video modes; tech synergy with same-vendor MiniMax M3; friendly free tier, great for trying out.",
                "weaknesses": "视频质量和控制力中等偏上；复杂场景一致性偶有翻车；功能丰富度中等",
                "bestFor": "中文用户尝鲜AI视频、短视频创作、MiniMax生态用户",
                "bestForEn": "Chinese users trying AI video, short video creation, MiniMax ecosystem users",
                "chineseSupport": "★★★★★ 中文原生，理解精准",
                "apiAvailable": true,
                "released": "2024年9月推出",
                "lastUpdated": "2026-06-15",
                "source": "hailuoai.com / php.cn",
                "priceDetailEn": "免费版每日赠送额度。会员¥39/月起（更多额度+更高画质+去除水印）。API按量计费",
                "chineseSupportEn": "★★★★★ 中文原生，理解精准",
                "weaknessesEn": "视频质量和控制力中等偏上；复杂场景一致性偶有翻车；功能丰富度中等",
                "releasedEn": "2024年9月推出"
        },
        {
                "id": "sora",
                "nameEn": "Sora",
                "priceLabelEn": "Plus $20/mo",
                "tagsEn": [
                        "Video Gen",
                        "Cinematic",
                        "Physics",
                        "Long Shots",
                        "HiQuality"
                ],
                "name": "Sora",
                "company": "OpenAI（美国）",
                "category": "视频模型",
                "pricing": "paid",
                "priceLabel": "ChatGPT Plus $20/月可用",
                "priceDetail": "ChatGPT Plus $20/月 (有限额度); Pro $200/月 (更多额度+高分辨率+无水印)",
                "website": "https://sora.com",
                "tags": [
                        "视频生成",
                        "影视级",
                        "物理模拟",
                        "超长镜头",
                        "高画质"
                ],
                "strengths": "画质出色，影视级质感；物理规律与光影细节逼真；超长连贯镜头不跳帧；复杂镜头调度能力强",
                "strengthsEn": "High image quality with cinematic polish; realistic physics & lighting details; ultra-long continuous shots without frame skipping; strong complex camera control.",
                "weaknesses": "生成耗时极长（几分钟到十几分钟/条）；价格昂贵（Pro $200/月才有完整能力）；提示词细节要求极高；新手调试困难",
                "bestFor": "影视级短片、高质量广告、追求高画质的专业创作者",
                "bestForEn": "Cinematic short films, high-quality ads, professional creators pursuing high image quality",
                "chineseSupport": "★★☆☆☆ 英文Prompt为主",
                "apiAvailable": false,
                "released": "2024年12月公测",
                "lastUpdated": "2026-06-11",
                "source": "sora.com / nav-ai.cn",
                "priceDetailEn": "ChatGPT Plus $20/mo (limited). Pro $200/mo (more generations, higher resolution).",
                "chineseSupportEn": "★★★☆☆ Works with Chinese prompts via ChatGPT",
                "weaknessesEn": "China requires VPN; expensive Pro tier; generation limits on Plus; open to competition from Chinese models",
                "releasedEn": "Launched December 2024 (public)"
        },
        {
                "id": "runway",
                "nameEn": "Runway Gen-4",
                "priceLabelEn": "Free/Standard $15/mo",
                "tagsEn": [
                        "Video Gen",
                        "Pro Tools",
                        "Motion Brush",
                        "Audio Gen"
                ],
                "name": "Runway Gen-4",
                "company": "Runway（美国）",
                "category": "视频模型",
                "pricing": "freemium",
                "priceLabel": "免费体验 / Standard $15/月起",
                "priceDetail": "免费版有限额度; Standard $15/月; Pro $35/月; Unlimited $95/月; Enterprise定制",
                "website": "https://runwayml.com",
                "tags": [
                        "视频生成",
                        "专业工具",
                        "运动笔刷",
                        "音频生成",
                        "局部修改"
                ],
                "strengths": "功能丰富（视频生成+运动笔刷+局部修改+音频生成）；出片速度快且稳定；专业后期工具完善；Gen-4画质大幅提升",
                "strengthsEn": "Most comprehensive feature set (video gen + Motion Brush + inpainting + audio gen); fast & stable output; robust pro editing tools; Gen-4 brings major quality upgrade.",
                "weaknesses": "中文Prompt理解弱（需翻译英文）；免费额度极少；高级功能需订阅较贵套餐；无永久买断",
                "bestFor": "需要稳定量产短视频的创作者、需要精细后期调整的专业用户、商业视频制作",
                "bestForEn": "Creators needing stable high-volume short video production, professionals requiring fine post-editing, commercial video production",
                "chineseSupport": "★★☆☆☆ 英文为主，中文Prompt需翻译",
                "apiAvailable": true,
                "released": "2023年首发，Gen-4 2026年更新",
                "lastUpdated": "2026-06-11",
                "source": "runwayml.com / aibotgo.net",
                "priceDetailEn": "Free (basic, 125 credits). Standard $15/mo (625 credits). Pro $35/mo (2250 credits). Unlimited $95/mo.",
                "chineseSupportEn": "★★☆☆☆ No Chinese UI; English prompts only",
                "weaknessesEn": "Expensive for heavy use; no Chinese support; falling behind on some features; credits easy to burn",
                "releasedEn": "First launched 2023, Gen-4 2025"
        },
        {
                "id": "pika",
                "nameEn": "Pika",
                "priceLabelEn": "Free/Pro $10/mo",
                "tagsEn": [
                        "Video Gen",
                        "Effects",
                        "Fun",
                        "Easy"
                ],
                "name": "Pika",
                "company": "Pika Labs（美国）",
                "category": "视频模型",
                "pricing": "freemium",
                "priceLabel": "免费 / Pro $10/月起",
                "priceDetail": "免费版有限额度; Pro $10/月; Unlimited $35/月; Agency $70/月",
                "website": "https://pika.art",
                "tags": [
                        "视频生成",
                        "特效",
                        "趣味",
                        "易用",
                        "局部修改"
                ],
                "strengths": "玩法多样（特效/鬼畜/局部修改/风格迁移）；界面极简上手快（5分钟学会）；娱乐性强适合社交媒体；价格友好（入门$10/月）",
                "strengthsEn": "Diverse creative modes (effects/meme-style/inpainting/style transfer); ultra-simple UI (learn in 5 min); highly entertaining for social media; wallet-friendly from $10/mo.",
                "weaknesses": "非量产级工具；画质中等偏上；复杂场景一致性一般；中文支持弱",
                "bestFor": "趣味短视频、社交媒体特效、娱乐向内容创作、不想折腾的轻度用户",
                "bestForEn": "Fun short videos, social media effects, entertainment content creation, casual users wanting easy tools",
                "chineseSupport": "★★☆☆☆ 英文界面和Prompt",
                "apiAvailable": false,
                "released": "2023年首发，Pika 2.0 2025年发布",
                "lastUpdated": "2026-06-11",
                "source": "pika.art / aibotgo.net",
                "priceDetailEn": "Free (basic, 250 credits). Standard $10/mo (700 credits). Unlimited $35/mo. Pro $70/mo.",
                "chineseSupportEn": "★★☆☆☆ English prompts needed",
                "weaknessesEn": "Brand awareness lower than Runway; Chinese support minimal; features behind competitors",
                "releasedEn": "Launched 2024, Pika 2.0 2025"
        },
        {
                "id": "veo",
                "nameEn": "Veo",
                "priceLabelEn": "Ultra $249.99/mo",
                "tagsEn": [
                        "Video Gen",
                        "Google",
                        "Cinematic",
                        "Gemini"
                ],
                "name": "Veo",
                "company": "Google DeepMind（美国）",
                "category": "视频模型",
                "pricing": "freemium",
                "priceLabel": "Gemini Ultra $249.99/月内置",
                "priceDetail": "Gemini AI Pro $19.99/月 (有限Veo额度); Ultra $249.99/月 (更多额度+高质量输出+4K)",
                "website": "https://deepmind.google/technologies/veo/",
                "tags": [
                        "视频生成",
                        "Google生态",
                        "影视级",
                        "多模态",
                        "Gemini集成"
                ],
                "strengths": "Google DeepMind技术背书底子厚；与Gemini深度集成（一条Prompt图+视频同时出）；生成质量与Sora同级；影视级视觉效果",
                "strengthsEn": "Backed by Google DeepMind's deep tech expertise; tight Gemini integration (one prompt for simultaneous image + video); Sora-level generation quality; cinematic visual effects.",
                "weaknesses": "价格门槛极高（需Ultra $249.99/月解锁完整能力）；国内直接访问受限；中文支持一般；单独使用时功能较有限",
                "bestFor": "Google生态重度用户、需要图+视频一站式生成的专业创作者、预算充足的影视制作",
                "bestForEn": "Heavy Google ecosystem users, creators needing all-in-one image + video generation, well-budgeted film production",
                "chineseSupport": "★★☆☆☆ 英文Prompt为主",
                "apiAvailable": false,
                "released": "2025年5月公测",
                "lastUpdated": "2026-06-15",
                "source": "deepmind.google / imagetoprompt.dev",
                "priceDetailEn": "Via Google AI Studio (free during preview). Vertex AI API pricing TBD.",
                "chineseSupportEn": "★★★☆☆ Basic Chinese via Google ecosystem",
                "weaknessesEn": "Still in preview; China access requires VPN; limited availability; unclear pricing",
                "releasedEn": "Announced May 2025, preview 2025"
        },
        {
                "id": "tongyi-lingma",
                "nameEn": "Tongyi Lingma",
                "priceLabelEn": "Free",
                "tagsEn": [
                        "Free",
                        "Chinese Native",
                        "Alibaba",
                        "IDE Plugin"
                ],
                "name": "通义灵码",
                "company": "阿里巴巴（中国）",
                "category": "代码模型",
                "pricing": "free",
                "priceLabel": "完全免费",
                "priceDetail": "个人版和基础企业版完全免费。高级企业版按需定价（含安全审计/合规检查等）",
                "website": "https://tongyi.aliyun.com/lingma?userCode=zpk45rgx",
                "tags": [
                        "免费",
                        "中文原生",
                        "阿里生态",
                        "IDE插件",
                        "企业级"
                ],
                "strengths": "个人版完全免费无隐藏收费；中文代码注释和对话生成精准；VS Code/JetBrains插件支持；阿里云生态集成（代码→部署一键上云）",
                "strengthsEn": "Personal edition completely free with no hidden fees; precise Chinese code comments & dialogue generation; VS Code/JetBrains plugin support; Alibaba Cloud integration (code→deploy in one click).",
                "weaknesses": "代码补全质量中等（英文项目表现有提升空间）；高级功能（安全审计等）需付费企业版；更新频率中等",
                "bestFor": "中文开发者、学生党、阿里云用户、对免费有刚需的个人和团队",
                "bestForEn": "Chinese developers, students, Alibaba Cloud users, individuals and teams who need free tools",
                "chineseSupport": "★★★★★ 中文原生，代码注释和对话全中文",
                "apiAvailable": true,
                "released": "2024年首发，持续迭代",
                "lastUpdated": "2026-06-11",
                "source": "tongyi.aliyun.com / juejin.cn",
                "priceDetailEn": "个人版和基础企业版完全免费。高级企业版按需定价（含安全审计/合规检查等）",
                "chineseSupportEn": "★★★★★ 中文原生，代码注释和对话全中文",
                "weaknessesEn": "Code completion quality mid-range (room for improvement on English projects); advanced features (security audit etc.) require enterprise plan; update frequency moderate.",
                "releasedEn": "2024年首发，持续迭代"
        },
        {
                "id": "comate",
                "nameEn": "Baidu Comate",
                "priceLabelEn": "Free",
                "tagsEn": [
                        "Free",
                        "Chinese Native",
                        "Baidu",
                        "IDE Plugin",
                        "Code Review"
                ],
                "name": "文心快码 (Comate)",
                "company": "百度（中国）",
                "category": "代码模型",
                "pricing": "free",
                "priceLabel": "完全免费",
                "priceDetail": "个人版完全免费。企业版按需定价（含代码审查/安全扫描等高级功能）",
                "website": "https://comate.baidu.com",
                "tags": [
                        "免费",
                        "中文原生",
                        "百度生态",
                        "IDE插件",
                        "代码审查"
                ],
                "strengths": "个人版完全免费；中文代码注释和文档生成质量好；VS Code/IntelliJ插件支持完善；百度智能云生态集成",
                "strengthsEn": "Personal edition completely free; good Chinese code comments & docs generation; solid VS Code/IntelliJ plugin support; Baidu AI Cloud ecosystem integration.",
                "weaknesses": "知名度相对低；代码补全质量中等偏上；开源社区相对冷清；对非百度技术栈支持一般",
                "bestFor": "中文开发者、百度云用户、需要免费代码助手且对百度生态有依赖的个人开发者",
                "bestForEn": "Chinese developers, Baidu Cloud users, individual developers needing a free coding assistant within the Baidu ecosystem",
                "chineseSupport": "★★★★★ 中文原生",
                "apiAvailable": false,
                "released": "2023年首发，持续迭代",
                "lastUpdated": "2026-06-11",
                "source": "comate.baidu.com",
                "priceDetailEn": "个人版完全免费。企业版按需定价（含代码审查/安全扫描等高级功能）",
                "chineseSupportEn": "★★★★★ 中文原生",
                "weaknessesEn": "Relatively low visibility; code completion quality in upper-mid range; open-source community relatively quiet; limited support for non-Baidu tech stacks.",
                "releasedEn": "2023年首发，持续迭代"
        },
        {
                "id": "codex",
                "nameEn": "Codex CLI",
                "priceLabelEn": "Plus $20/mo",
                "tagsEn": [
                        "Terminal Agent",
                        "Open Source",
                        "Git-aware",
                        "Plan Mode",
                        "Skills"
                ],
                "name": "Codex CLI",
                "company": "OpenAI（美国）",
                "category": "代码模型",
                "pricing": "freemium",
                "priceLabel": "ChatGPT Plus $20/月可用",
                "priceDetail": "ChatGPT Plus $20/月（月约200条消息）; Pro $200/月（约1000+条）。开源CLI工具，npm安装，GPT-5.5驱动",
                "website": "https://github.com/openai/codex",
                "tags": [
                        "终端Agent",
                        "开源",
                        "Git感知",
                        "Plan模式",
                        "Skills系统"
                ],
                "strengths": "2026年最火的终端AI编程Agent；开源可审查代码；Plan模式先预览再执行；Skills插件系统可扩展；与ChatGPT订阅共享额度",
                "strengthsEn": "Hottest terminal AI coding agent of 2026; open-source with auditable code; Plan mode previews before executing; extensible Skills plugin system; shared quota with ChatGPT subscription.",
                "weaknesses": "Plus用户额度有限（集中工作1-2小时可能耗尽）；API超额使用额外计费；无图形界面纯终端操作",
                "bestFor": "终端党、全栈项目开发、需要AI自主读代码库+写代码+跑测试的工程师",
                "bestForEn": "Terminal enthusiasts, full-stack development, engineers needing AI to autonomously read codebases + write code + run tests",
                "chineseSupport": "★★★☆☆ 支持中文指令，界面英文为主",
                "apiAvailable": true,
                "released": "2025年底开源，2026年爆发增长",
                "lastUpdated": "2026-06-15",
                "source": "openai.com / getaiperks.com",
                "priceDetailEn": "Open source (free self-hosted). OpenAI API: $15/month or pay-per-use. Terminal agent: free.",
                "chineseSupportEn": "★★★★☆ English-first, Chinese support improving",
                "weaknessesEn": "Requires terminal comfort; SWE-bench lags behind Claude Code; new product, ecosystem immature",
                "releasedEn": "Launched June 2025"
        },
        {
                "id": "claude-code",
                "nameEn": "Claude Code",
                "priceLabelEn": "Pro $20/mo+",
                "tagsEn": [
                        "Terminal Agent",
                        "Plan Mode",
                        "MCP",
                        "Fable 5"
                ],
                "name": "Claude Code",
                "company": "Anthropic（美国）",
                "category": "代码模型",
                "pricing": "freemium",
                "priceLabel": "Claude Pro $20/月起",
                "priceDetail": "Claude Pro $20/月有限额度; Max $100-200/月（更多额度，Fable 5驱动）。终端CLI工具，支持CLAUDE.md项目记忆",
                "website": "https://code.claude.com",
                "tags": [
                        "终端Agent",
                        "Plan模式",
                        "MCP集成",
                        "项目记忆",
                        "Fable 5"
                ],
                "strengths": "Claude Fable 5驱动，编程能力突出；CLAUDE.md支持项目级记忆上下文；MCP协议可集成第三方工具；Plan模式安全可控；擅长处理大型代码库",
                "strengthsEn": "Powered by Claude Fable 5 for top-tier coding; CLAUDE.md for project-level memory context; MCP protocol integrates third-party tools; safe & controllable Plan mode; excels at massive codebases.",
                "weaknesses": "Pro版额度有限不适合重度使用；无图形界面纯终端；Fable 5最新，生态工具在追赶",
                "bestFor": "终端党、超大型项目重构、需要深度理解项目架构的复杂开发",
                "bestForEn": "Terminal enthusiasts, mega-project refactoring, complex development requiring deep architectural understanding",
                "chineseSupport": "★★★☆☆ 支持中文指令，界面英文为主",
                "apiAvailable": true,
                "released": "2025年推出，Fable 5 2026年6月9日发布",
                "lastUpdated": "2026-06-15",
                "source": "anthropic.com / code.claude.com",
                "priceDetailEn": "Free (limited via Claude Pro $20/mo). Max $200/mo (extended). Terminal agent: free, API costs extra.",
                "chineseSupportEn": "★★★☆☆ English-oriented, Chinese acceptable",
                "weaknessesEn": "Expensive for heavy use; China requires VPN; terminal-only workflow for agent mode; Chinese documentation thin",
                "releasedEn": "Launched February 2025"
        },
        {
                "id": "github-copilot",
                "nameEn": "GitHub Copilot",
                "priceLabelEn": "$10/mo",
                "tagsEn": [
                        "Code Completion",
                        "IDE",
                        "GitHub",
                        "Multi-Model",
                        "Student Free"
                ],
                "name": "GitHub Copilot",
                "company": "GitHub/微软（美国）",
                "category": "代码模型",
                "pricing": "paid",
                "priceLabel": "Individual $10/月",
                "priceDetail": "Individual $10/月 (Claude 3.5+GPT-4o双模型); Business $19/月; Enterprise $39/月。学生和开源项目免费",
                "website": "https://github.com/features/copilot",
                "tags": [
                        "代码补全",
                        "IDE插件",
                        "GitHub生态",
                        "多模型",
                        "学生免费"
                ],
                "strengths": "VS Code/JetBrains等主流IDE深度集成；2026年已支持Claude+GPT双模型驱动；代码补全质量出色；GitHub PR/Issue无缝衔接；学生免费",
                "strengthsEn": "Deep VS Code/JetBrains IDE integration; dual Claude+GPT model support in 2026; top-tier code completion; seamless GitHub PR/Issue workflows; free for students.",
                "weaknesses": "纯付费（个人$10/月）；代码对话功能较基础；国内访问GitHub可能不稳定；不支持多文件Agent式编辑",
                "bestFor": "GitHub重度用户、全栈开发者、学生党（免费）、企业团队",
                "bestForEn": "Heavy GitHub users, full-stack developers, students (free tier), enterprise teams",
                "chineseSupport": "★★★☆☆ 代码注释支持中文，界面英文为主",
                "apiAvailable": true,
                "released": "2021年首发，持续迭代",
                "lastUpdated": "2026-06-11",
                "source": "github.com / juejin.cn",
                "priceDetailEn": "Individual $10/月 (Claude 3.5+GPT-4o双模型); Business $19/月; Enterprise $39/月。学生和开源项目免费",
                "chineseSupportEn": "★★★☆☆ 代码注释支持中文，界面英文为主",
                "weaknessesEn": "Paid only ($10/mo personal); code chat features relatively basic; GitHub access may be unstable in China; no multi-file Agent editing.",
                "releasedEn": "2021年首发，持续迭代"
        },
        {
                "id": "cursor",
                "nameEn": "Cursor",
                "priceLabelEn": "Free/Pro $20/mo",
                "tagsEn": [
                        "AI IDE",
                        "Code Gen",
                        "Multi-file",
                        "Agent Mode"
                ],
                "name": "Cursor",
                "company": "Anysphere（美国）",
                "category": "代码模型",
                "pricing": "freemium",
                "priceLabel": "免费 / Pro $20/月",
                "priceDetail": "免费版有限额度（2000次/月补全）; Pro $20/月 (无限补全+500次高级Agent请求); Business $40/月",
                "website": "https://cursor.com",
                "tags": [
                        "AI IDE",
                        "代码生成",
                        "多文件编辑",
                        "Agent模式",
                        "对话编程"
                ],
                "strengths": "内置AI的完整IDE（无需插件）；多文件编辑能力强（修改一处自动同步关联文件）；Agent模式可自主修复Bug、重构代码；上下文理解优于插件类工具",
                "strengthsEn": "Full IDE with built-in AI (no plugins needed); powerful multi-file editing (edit once, auto-sync related files); Agent mode autonomously fixes bugs & refactors; context understanding far beyond plugin-based tools.",
                "weaknesses": "免费版额度有限；Pro $20/月比Copilot贵；国内需代理访问；非VS Code生态需迁移习惯；偶尔假死需重启",
                "bestFor": "追求深度AI编程体验的开发者、需要AI理解整个项目的复杂开发",
                "bestForEn": "Developers pursuing a deep AI coding experience, complex projects requiring whole-project AI understanding",
                "chineseSupport": "★★★☆☆ 代码对话可用中文命令，界面英文",
                "apiAvailable": false,
                "released": "2023年首发，持续快速迭代",
                "lastUpdated": "2026-06-11",
                "source": "cursor.com / xtechtools.com",
                "priceDetailEn": "Free (Hobby, 2000 completions). Pro $20/mo (unlimited). Business $40/user/mo.",
                "chineseSupportEn": "★★★★☆ Good Chinese support in editor, English UI",
                "weaknessesEn": "Expensive Pro tier; VS Code fork, not standalone; large project performance issues",
                "releasedEn": "Launched 2023, Agent mode 2025"
        },
        {
                "id": "windsurf",
                "nameEn": "Windsurf",
                "priceLabelEn": "Free/Pro $15/mo",
                "tagsEn": [
                        "AI IDE",
                        "Code Completion",
                        "Cascade",
                        "Free-friendly"
                ],
                "name": "Windsurf",
                "company": "Codeium（美国）",
                "category": "代码模型",
                "pricing": "freemium",
                "priceLabel": "免费 / Pro $15/月",
                "priceDetail": "免费版基础补全+有限对话; Pro $15/月 (无限补全+高级模型); Teams $35/月",
                "website": "https://codeium.com/windsurf",
                "tags": [
                        "AI IDE",
                        "代码补全",
                        "Cascade",
                        "多文件",
                        "免费友好"
                ],
                "strengths": "免费版比Cursor/Copilot大方；Cascade模式可跨多文件理解和编辑；IDE体验轻量流畅不卡顿；上手快学习曲线低",
                "strengthsEn": "More generous free tier than Cursor/Copilot; Cascade mode understands & edits across multiple files; lightweight, smooth IDE without lag; quick to pick up with low learning curve.",
                "weaknesses": "插件生态规模有限；高级功能需Pro；Agent模式功能深度中等",
                "bestFor": "预算有限的开发者、需要免费好用的AI编程工具、轻量级IDE用户",
                "bestForEn": "Budget-limited developers, those needing a free and capable AI coding tool, lightweight IDE users",
                "chineseSupport": "★★★☆☆ 代码对话支持中文，界面英文",
                "apiAvailable": false,
                "released": "2024年首发",
                "lastUpdated": "2026-06-11",
                "source": "codeium.com / aitoolcn.com",
                "priceDetailEn": "Free (basic). Pro $15/mo. Teams $30/user/mo.",
                "chineseSupportEn": "★★★★☆ Good Chinese, Cascade AI flow",
                "weaknessesEn": "Smaller ecosystem than Cursor/GitHub; fewer integrations; brand awareness lower",
                "releasedEn": "Launched 2024 (as Codeium Windsurf)"
        },
        {
                "id": "notion",
                "nameEn": "Notion AI",
                "priceLabelEn": "Free / Plus $10/mo",
                "tagsEn": [
                        "AI Writing",
                        "Knowledge Base",
                        "Calendar",
                        "Project Mgmt",
                        "All-in-One"
                ],
                "name": "Notion AI",
                "company": "Notion Labs（美国）",
                "category": "AI辅助工具",
                "pricing": "freemium",
                "priceLabel": "免费 / Plus $10/月",
                "priceDetail": "免费版基础笔记 + 有限AI次数。Plus $10/月（无限AI + 日历/Database等全部功能）。Business $15/月/人",
                "website": "https://affiliate.notion.so/YOUR-PARTNER-CODE",
                "tags": [
                        "AI写作",
                        "知识库",
                        "日历",
                        "项目管理",
                        "All-in-One"
                ],
                "strengths": "All-in-One工作空间 + AI写作/改写/翻译集成。中文UI支持完善，国内无需科学上网，是目前中文用户最友好的AI笔记+写作工具",
                "strengthsEn": "All-in-one workspace with integrated AI writing/rewriting/translation. Full Chinese UI, no VPN needed for mainland users. The most Chinese-user-friendly AI note-taking & writing tool.",
                "weaknesses": "免费版AI次数有限；中文写作质量不及Kimi/通义；高级功能需付费",
                "bestFor": "AI写作辅助、个人知识库搭建、团队协作文档、项目管理",
                "bestForEn": "AI writing assistance, personal knowledge base building, team collaboration docs, project management",
                "chineseSupport": "★★★★☆ 中文UI + 中文AI，偶有翻译感",
                "apiAvailable": false,
                "released": "2023年推出AI功能",
                "lastUpdated": "2026-06-23",
                "source": "notion.so / partnerstack.com",
                "priceDetailEn": "免费版基础笔记 + 有限AI次数。Plus $10/月（无限AI + 日历/Database等全部功能）。Business $15/月/人",
                "chineseSupportEn": "★★★★☆ 中文UI + 中文AI，偶有翻译感",
                "weaknessesEn": "免费版AI次数有限；中文写作质量不及Kimi/通义；高级功能需付费",
                "releasedEn": "2023年推出AI功能"
        },
        {
                "id": "canva",
                "nameEn": "Canva Pro",
                "priceLabelEn": "Free / Pro $12.99/mo",
                "tagsEn": [
                        "Design",
                        "AI Image",
                        "Presentation",
                        "Video",
                        "Brand Kit"
                ],
                "name": "Canva Pro（可画）",
                "company": "Canva（澳大利亚）",
                "category": "AI辅助工具",
                "pricing": "freemium",
                "priceLabel": "免费 / Pro $12.99/月",
                "priceDetail": "免费版基础设计功能。Pro $12.99/月（AI生成/背景移除/图片编辑/品牌套件）",
                "website": "https://partner.canva.com/YOUR-PARTNER-CODE",
                "tags": [
                        "设计",
                        "AI图像",
                        "演示文稿",
                        "视频",
                        "品牌套件"
                ],
                "strengths": "中文品牌名'可画'，国内知名度高。AI文字生图、智能抠图、批量设计功能丰富，对国内中文用户友好",
                "strengthsEn": "Branded as '可画' in China with strong local awareness. AI text-to-image, smart background removal, batch design. Chinese-user-friendly.",
                "weaknesses": "AI图像生成质量不提Midjourney/DALL-E；高级AI功能需Pro订阅",
                "bestFor": "社交媒体配图、PPT设计、Logo制作、短视频封面、海报设计",
                "bestForEn": "Social media graphics, PPT design, logo creation, short video thumbnails, poster design",
                "chineseSupport": "★★★★★ 中文UI + 大量中文模板 + 中国团队运营",
                "apiAvailable": false,
                "released": "2013年创立，AI功能2023年开始集成",
                "lastUpdated": "2026-06-23",
                "source": "canva.com / partnerstack.com",
                "priceDetailEn": "免费版基础设计功能。Pro $12.99/月（AI生成/背景移除/图片编辑/品牌套件）",
                "chineseSupportEn": "★★★★★ 中文UI + 大量中文模板 + 中国团队运营",
                "weaknessesEn": "AI图像生成质量不提Midjourney/DALL-E；高级AI功能需Pro订阅",
                "releasedEn": "2013年创立，AI功能2023年开始集成"
        },
        {
                "id": "grammarly",
                "nameEn": "Grammarly",
                "priceLabelEn": "Free / Premium $12/mo",
                "tagsEn": [
                        "Grammar Check",
                        "AI Rewrite",
                        "Plagiarism",
                        "Tone",
                        "Business"
                ],
                "name": "Grammarly",
                "company": "Grammarly（美国/乌克兰）",
                "category": "AI辅助工具",
                "pricing": "freemium",
                "priceLabel": "免费 / Premium $12/月",
                "priceDetail": "免费版基础语法检查。Premium $12/月（AI改写/语气调整/查重/润色）。Business $15/月/人",
                "website": "https://grammarly.go2cloud.org/YOUR-PARTNER-CODE",
                "tags": [
                        "语法检查",
                        "AI改写",
                        "查重",
                        "语气",
                        "商务"
                ],
                "strengths": "全球最成熟的AI写作助手，适合留学生、外企打工人、跨境电商写手。插件覆盖Chrome/Word/Google Docs全场景",
                "strengthsEn": "The world's most mature AI writing assistant. Ideal for international students, foreign enterprise workers, cross-border e-commerce. Plugins cover Chrome/Word/Google Docs everywhere.",
                "weaknesses": "主要面向英文写作；中文语法检查支持有限；免费版功能较基础",
                "bestFor": "留学生论文润色、外企邮件写作、跨境电商listing优化、英文创作",
                "bestForEn": "International student thesis polishing, corporate email writing, cross-border e-commerce listing optimization, English content creation",
                "chineseSupport": "★★☆☆☆ 英文为主，中文语法不支持",
                "apiAvailable": false,
                "released": "2009年创立",
                "lastUpdated": "2026-06-23",
                "source": "grammarly.com / partnerstack.com",
                "priceDetailEn": "免费版基础语法检查。Premium $12/月（AI改写/语气调整/查重/润色）。Business $15/月/人",
                "chineseSupportEn": "★★☆☆☆ 英文为主，中文语法不支持",
                "weaknessesEn": "主要面向英文写作；中文语法检查支持有限；免费版功能较基础",
                "releasedEn": "2009年创立"
        },
        {
                "id": "jasper",
                "nameEn": "Jasper AI",
                "priceLabelEn": "Free 7-day / Creator $49/mo",
                "tagsEn": [
                        "AI Writing",
                        "SEO",
                        "Brand Voice",
                        "Templates",
                        "Enterprise"
                ],
                "name": "Jasper AI",
                "company": "Jasper（美国）",
                "category": "AI辅助工具",
                "pricing": "freemium",
                "priceLabel": "7天免费 / Creator $49/月",
                "priceDetail": "Creator $49/月（单人，AI写作+SEO+Copyscape查重）。Pro $69/月（多人协作+品牌声音+Campaigns）",
                "website": "https://partnerstack.com/go/jasper/YOUR-PARTNER-CODE",
                "tags": [
                        "AI写作",
                        "SEO",
                        "品牌声音",
                        "模板",
                        "企业"
                ],
                "strengths": "企业级AI写作工具，品牌声音训练功能独有。平均客户生命周期长，适合中长期获客",
                "strengthsEn": "Enterprise AI writing tool with unique brand voice training. Long average customer lifetime, ideal for sustainable customer acquisition.",
                "weaknesses": "价格高（$49/月起）；中文写作能力主要面向英文母语优化；面向专业用户，学习曲线陡",
                "bestFor": "英文营销团队、SEO写手、跨境电商、博客运营、广告文案",
                "bestForEn": "English marketing teams, SEO writers, cross-border e-commerce, blog operations, ad copywriting",
                "chineseSupport": "★★☆☆☆ 英文为主，品牌声音不支持中文",
                "apiAvailable": false,
                "released": "2021年（原Jarvis）",
                "lastUpdated": "2026-06-23",
                "source": "jasper.ai / partnerstack.com",
                "priceDetailEn": "Creator $49/月（单人，AI写作+SEO+Copyscape查重）。Pro $69/月（多人协作+品牌声音+Campaigns）",
                "chineseSupportEn": "★★☆☆☆ 英文为主，品牌声音不支持中文",
                "weaknessesEn": "Pricey (from $49/mo); Chinese writing quality primarily optimized for English-native users; steep learning curve for professional users.",
                "releasedEn": "2021年（原Jarvis）"
        },
        {
                "id": "elevenlabs",
                "nameEn": "ElevenLabs",
                "priceLabelEn": "Free / Starter $5/mo",
                "tagsEn": [
                        "Voice Clone",
                        "TTS",
                        "Dubbing",
                        "Voice Design",
                        "Audiobook"
                ],
                "name": "ElevenLabs",
                "company": "ElevenLabs（美国/波兰）",
                "category": "AI辅助工具",
                "pricing": "freemium",
                "priceLabel": "免费 / Starter $5/月",
                "priceDetail": "免费版每月10k字符TTS。Starter $5/月（30k字符+声音克隆）。Pro $22/月（500k字符+专业声音设计）",
                "website": "https://partnerstack.com/go/elevenlabs/YOUR-PARTNER-CODE",
                "tags": [
                        "声音克隆",
                        "TTS",
                        "配音",
                        "声音设计",
                        "有声书"
                ],
                "strengths": "AI语音合成工具，支持70+语言（含中文普通话/粤语）。声音克隆只需1分钟录音，$5/月低门槛起步",
                "strengthsEn": "AI voice synthesis with 70+ languages including Mandarin/Cantonese. Voice cloning from just 1 minute of audio. Low entry price at $5/mo.",
                "weaknesses": "中文配音偶有机器感；免费版字符数有限；高级声音设计需要Pro版",
                "bestFor": "短视频配音、有声书录制、播客制作、课程语音、多语言内容本地化",
                "bestForEn": "Short video voiceovers, audiobook recording, podcast production, course narration, multilingual content localization",
                "chineseSupport": "★★★★☆ 中文普通话/粤语支持，语音自然度高",
                "apiAvailable": false,
                "released": "2022年1月创立",
                "lastUpdated": "2026-06-23",
                "source": "elevenlabs.io / partnerstack.com",
                "priceDetailEn": "Free (10K chars/mo). Starter $5/mo (30K). Creator $22/mo (100K). Pro $99/mo (500K).",
                "chineseSupportEn": "★★★☆☆ Chinese voice quality mixed; English best",
                "weaknessesEn": "Chinese TTS quality behind English; expensive for heavy use; character limits per month",
                "releasedEn": "Launched 2022, Turbo 2.5 2024"
        },
        {
                "id": "synthesia",
                "nameEn": "Synthesia",
                "priceLabelEn": "Starter $29/mo",
                "tagsEn": [
                        "AI Avatar",
                        "Video",
                        "Multilingual",
                        "Training",
                        "Corporate"
                ],
                "name": "Synthesia",
                "company": "Synthesia（英国）",
                "category": "AI辅助工具",
                "pricing": "paid",
                "priceLabel": "Starter $29/月（$22/月按年）",
                "priceDetail": "Starter $29/月（1位AI主播，10min视频/月）。Creator $67/月（3位主播，30min）。Enterprise按需定价",
                "website": "https://partnerstack.com/go/synthesia/YOUR-PARTNER-CODE",
                "tags": [
                        "AI主播",
                        "视频",
                        "多语言",
                        "培训",
                        "企业"
                ],
                "strengths": "AI数字人播报领域广泛使用，140+AI主播形象+120+语言配音。企业场景深度覆盖，适合专业级AI视频制作",
                "strengthsEn": "Widely used AI avatar video platform, 140+ presenter avatars in 120+ languages. Deep enterprise scenario coverage for professional AI video production.",
                "weaknesses": "无免费版（仅Demo试用）；中文主播数量有限；内容定制度不如真人拍摄",
                "bestFor": "企业培训视频、产品演示、多语言市场内容、内部沟通",
                "bestForEn": "Corporate training videos, product demos, multilingual marketing content, internal communications",
                "chineseSupport": "★★★☆☆ 有中文AI主播，但数量少于英文，普通话配音自然",
                "apiAvailable": false,
                "released": "2017年创立",
                "lastUpdated": "2026-06-23",
                "source": "synthesia.io / partnerstack.com",
                "priceDetailEn": "Starter $29/月（1位AI主播，10min视频/月）。Creator $67/月（3位主播，30min）。Enterprise按需定价",
                "chineseSupportEn": "★★★☆☆ 有中文AI主播，但数量少于英文，普通话配音自然",
                "weaknessesEn": "无免费版（仅Demo试用）；中文主播数量有限；内容定制度不如真人拍摄",
                "releasedEn": "2017年创立"
        },
        {
                "id": "rytr",
                "nameEn": "Rytr",
                "priceLabelEn": "Free / Unlimited $9/mo",
                "tagsEn": [
                        "AI Writing",
                        "Cheap",
                        "40+ Templates",
                        "Plagiarism",
                        "SEO"
                ],
                "name": "Rytr",
                "company": "Rytr（美国）",
                "category": "AI辅助工具",
                "pricing": "freemium",
                "priceLabel": "免费 / Unlimited $9/月",
                "priceDetail": "免费版每月10k字符。Unlimited $9/月（无限生成+丰富模板+查重）。Premium $29/月（团队协作+专属账号管理）",
                "website": "https://partnerstack.com/go/rytr/YOUR-PARTNER-CODE",
                "tags": [
                        "AI写作",
                        "超低价",
                        "40+模板",
                        "查重",
                        "SEO"
                ],
                "strengths": "AI写作工具中价格最低（$9/月），40+写作模板覆盖博客/邮件/广告/社媒。适合预算有限的个人和小团队",
                "strengthsEn": "Lowest price in AI writing ($9/mo). 40+ templates covering blog/email/ad/social media. Perfect for budget-conscious individuals and small teams.",
                "weaknesses": "写作质量中等偏上；无中文优化；免费版字数太少（10k）",
                "bestFor": "预算有限的英文写作者、博客新手、社交媒体文案、低成本AI写作入",
                "bestForEn": "Budget-limited English writers, blog beginners, social media copy, low-cost AI writing",
                "chineseSupport": "★★☆☆☆ 英文为主，中文输出质量一般",
                "apiAvailable": false,
                "released": "2021年4月创立",
                "lastUpdated": "2026-06-23",
                "source": "rytr.me / partnerstack.com",
                "priceDetailEn": "免费版每月10k字符。Unlimited $9/月（无限生成+丰富模板+查重）。Premium $29/月（团队协作+专属账号管理）",
                "chineseSupportEn": "★★☆☆☆ 英文为主，中文输出质量一般",
                "weaknessesEn": "写作质量中规中矩；无中文优化；免费版字数太少（10k）",
                "releasedEn": "2021年4月创立"
        },
        {
                "id": "surferseo",
                "nameEn": "Surfer SEO",
                "priceLabelEn": "Essential $89/mo",
                "tagsEn": [
                        "SEO",
                        "AI Content",
                        "SERP Analysis",
                        "Audit",
                        "NLP"
                ],
                "name": "Surfer SEO",
                "company": "Surfer（波兰）",
                "category": "AI辅助工具",
                "pricing": "paid",
                "priceLabel": "Essential $89/月（$69/月按年）",
                "priceDetail": "Essential $89/月（15篇文章/月，SERP分析+AI写作+内容评分）。Scale $129/月（30篇）。Enterprise按需",
                "website": "https://partnerstack.com/go/surferseo/YOUR-PARTNER-CODE",
                "tags": [
                        "SEO",
                        "AI内容",
                        "SERP分析",
                        "审计",
                        "NLP"
                ],
                "strengths": "AI驱动的SEO内容优化工具，提供SERP分析 + NLP关键词建议 + 内容评分功能",
                "strengthsEn": "AI-driven SEO content optimization with SERP analysis, NLP keyword suggestions, and content scoring.",
                "weaknesses": "价格较高（$89/月起）；中文SEO支持有限；学习曲线陡峭",
                "bestFor": "英文博客SEO优化、电商listing优化、内容团队SEO培训、独立站运营",
                "bestForEn": "English blog SEO optimization, e-commerce listing optimization, content team SEO training, independent site operations",
                "chineseSupport": "★★☆☆☆ 英文为主，中文关键词分析支持有限",
                "apiAvailable": false,
                "released": "2017年创立",
                "lastUpdated": "2026-06-23",
                "source": "surferseo.com / partnerstack.com",
                "priceDetailEn": "Essential $89/月（15篇文章/月，SERP分析+AI写作+内容评分）。Scale $129/月（30篇）。Enterprise按需",
                "chineseSupportEn": "★★☆☆☆ 英文为主，中文关键词分析支持有限",
                "weaknessesEn": "价格较高（$89/月起）；中文SEO支持有限；学习曲线陡峭",
                "releasedEn": "2017年创立"
        }
];

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 高亮当前导航
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // 渲染模型卡片（如果在列表页）
    const grid = document.getElementById('modelGrid');
    if (grid) {
        // 读取URL参数中的品类筛选（从首页跳转过来时携带）
        const params = new URLSearchParams(window.location.search);
        const catParam = params.get('cat');
        let activeCat = 'all';
        if (catParam) {
            // 激活对应筛选按钮
            const targetBtn = document.querySelector(`.filter-btn[data-cat="${catParam}"]`);
            if (targetBtn) {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                targetBtn.classList.add('active');
                activeCat = catParam;
            }
        }
        renderModelCards(activeCat);
    }

    // 搜索功能
    const searchInput = document.getElementById('modelSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            renderModelCards(document.querySelector('.filter-btn.active')?.dataset.cat || 'all', query);
        });
    }

    // 筛选按钮
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const cat = this.dataset.cat;
            const query = document.getElementById('modelSearch')?.value.toLowerCase() || '';
            renderModelCards(cat, query);
        });
    });

    // 渲染对比表
    const compareBody = document.getElementById('compareBody');
    if (compareBody) renderCompareTable();
});

function renderModelCards(category, query) {
    const grid = document.getElementById('modelGrid');
    if (!grid) return;
    const isEn = (typeof currentLang === 'function' ? currentLang() : 'zh') === 'en';
    const detailIds = new Set(['deepseek','kimi','qwen','ernie','chatgpt','claude','gemini','bailian']);

    let filtered = models;
    if (category && category !== 'all') {
        filtered = filtered.filter(m => m.category === category);
    }
    if (query) {
        filtered = filtered.filter(m =>
            m.name.toLowerCase().includes(query) ||
            m.company.toLowerCase().includes(query) ||
            m.tags.some(t => t.toLowerCase().includes(query)) ||
            m.strengths.toLowerCase().includes(query)
        );
    }

    if (filtered.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--text-secondary)">' + (typeof t === 'function' ? t('models.empty') : '没有找到匹配的模型，试试其他关键词？') + '</div>';
        return;
    }

    grid.innerHTML = filtered.map(m => {
        const hasDetail = detailIds.has(m.id);
        return `
        <div class="model-card" onclick="location.href='${m.website}'" title="点击访问官网">
            <div class="model-card-header">
                <div>
                    <div class="model-name">${isEn && m.nameEn ? m.nameEn : m.name}</div>
                    <div class="model-company">${m.company}</div>
                </div>
                <span class="model-badge badge-${m.pricing}">${m.pricing === 'free' ? (typeof t === 'function' ? t('card.free') : '免费') : m.pricing === 'freemium' ? (typeof t === 'function' ? t('card.freemium') : '免费+付费') : (typeof t === 'function' ? t('card.paid') : '付费')}</span>
            </div>
            <div class="model-tags">
                ${(isEn && m.tagsEn ? m.tagsEn : m.tags).map(tag => '<span class="model-tag">' + tag + '</span>').join('')}
            </div>
            <div class="model-desc">${isEn && m.strengthsEn ? m.strengthsEn : m.strengths}</div>
            <div style="font-size:13px;color:var(--text-secondary);margin-top:6px;">
                <strong>${typeof t === 'function' ? t('card.bestFor') : '最适合'}：</strong>${isEn && m.bestForEn ? m.bestForEn : m.bestFor}
            </div>
            <div class="model-footer">
                <div class="model-price"><strong>${(isEn && m.priceLabelEn ? m.priceLabelEn : m.priceLabel).split(' / ')[0]}</strong>${(isEn && m.priceLabelEn ? m.priceLabelEn : m.priceLabel).includes('/') ? ' / ' + (isEn && m.priceLabelEn ? m.priceLabelEn : m.priceLabel).split(' / ').slice(1).join(' / ') : ''}</div>
                ${hasDetail ? '<a href="models/' + m.id + '.html" class="model-detail-link" onclick="event.stopPropagation()" title="查看详细评测">' + (isEn ? 'Details →' : '查看详情 →') + '</a>' : ''}
            </div>
        </div>
        `;
    }).join('');
}

function renderCompareTable() {
    const body = document.getElementById('compareBody');
    if (!body) return;

    const langModels = models.filter(m => m.category === '语言模型');

    // 表头
    const dimensions = [
        { label: '开发商', key: 'company' },
        { label: '免费版', key: 'pricing', format: v => v === 'free' ? '✅ 有免费版（对话）' : v === 'freemium' ? '✅ 有免费版' : '❌ 无免费版' },
        { label: '最低付费', key: 'priceLabel' },
        { label: '中文支持', key: 'chineseSupport' },
        { label: '上下文窗口', key: 'contextWindow' },
        { label: 'API可用', key: 'apiAvailable', format: v => v ? '✅' : '❌' },
        { label: '擅长领域', key: 'bestFor' },
    ];

    let html = '<thead><tr><th>维度</th>';
    langModels.forEach(m => { html += `<th><strong>${m.name}</strong></th>`; });
    html += '</tr></thead><tbody>';

    dimensions.forEach(dim => {
        html += '<tr>';
        html += `<td>${dim.label}</td>`;
        langModels.forEach(m => {
            let val = m[dim.key];
            if (dim.format) val = dim.format(val);
            html += `<td>${val}</td>`;
        });
        html += '</tr>';
    });

    html += '</tbody>';
    body.innerHTML = html;
}
