// AI家AI户 - 模型数据
const models = [
    {
        id: "chatgpt",
        name: "ChatGPT",
        company: "OpenAI（美国）",
        category: "语言模型",
        pricing: "freemium",
        priceLabel: "免费 / Plus $20/月",
        priceDetail: "免费版（GPT-5.6 mini）; Plus $20/月（GPT-5.6）; Pro $200/月（GPT-5.6 Pro）",
        website: "https://chat.openai.com",
        tags: ["写作", "编程", "图像生成", "语音", "多模态"],
        strengths: "综合能力最强，GPT-5.6编程大幅提升（AGI Ranker 77.48分）；图像生成（DALL-E 3.5）、语音对话、文件分析一应俱全。Plus $20/月即可解锁主力模型",
        weaknesses: "免费版配额受限；需科学上网；国内直接访问不支持",
        bestFor: "日常写作、创意脑暴、通用问答、图像生成",
        chineseSupport: "★★★★☆ 中文流畅，偶有翻译腔",
        contextWindow: "128K tokens",
        apiAvailable: true,
        released: "2022年11月首发",
        lastUpdated: "2026-06-15",
        source: "openai.com / aipricecompare.org"
    },
    {
        id: "claude",
        name: "Claude",
        company: "Anthropic（美国）",
        category: "语言模型",
        pricing: "freemium",
        priceLabel: "免费 / Pro $20/月",
        priceDetail: "免费版（Sonnet 4.6）; Pro $20/月（Fable 5 + Opus 4.8）; Max $100-200/月",
        website: "https://claude.ai",
        tags: ["写作", "编程", "长文档", "推理", "深度分析"],
        strengths: "Opus 4.8登顶AGI Ranker编程排行榜（81.03分）；长文档处理能力极强；严谨推理；Project功能可管理多个对话上下文",
        weaknesses: "免费版每日限额较严；图像生成能力弱；需科学上网",
        bestFor: "长文档分析、学术写作、复杂代码项目、报告撰写、编程竞赛",
        chineseSupport: "★★★★☆ 中文表现优异，语气自然",
        contextWindow: "200K tokens",
        apiAvailable: true,
        released: "2023年3月首发",
        lastUpdated: "2026-06-15",
        source: "anthropic.com / agiranker.com"
    },
    {
        id: "gemini",
        name: "Gemini",
        company: "Google（美国）",
        category: "语言模型",
        pricing: "freemium",
        priceLabel: "免费 / AI Pro $19.99/月",
        priceDetail: "免费版（Gemini 2.5 Flash）; AI Plus $9.99/月; AI Pro $19.99/月（Gemini 3.1 Pro）; Ultra $249.99/月",
        website: "https://gemini.google.com",
        tags: ["多模态", "搜索", "视频生成", "长上下文", "Google生态"],
        strengths: "Google生态深度整合（Gmail/Docs/Drive）；视频生成（Veo）；1M Token 超长上下文",
        weaknesses: "中文不如国产模型细腻；部分功能国内受限；Google服务需特殊网络环境",
        bestFor: "Google Workspace用户、视频生成、多模态任务、超长文本处理",
        chineseSupport: "★★★☆☆ 中文可用，但不如国产模型精准",
        contextWindow: "1M tokens",
        apiAvailable: true,
        released: "2023年12月首发",
        lastUpdated: "2026-06-11",
        source: "gemini.google.com / aipricecompare.org"
    },
    {
        id: "deepseek",
        name: "DeepSeek",
        company: "深度求索（中国）",
        category: "语言模型",
        pricing: "free",
        priceLabel: "完全免费",
        priceDetail: "全部功能免费，无付费墙，无广告。API 按量计费，V4系列永久降价（V4-Pro降至原价25%）。V4.1定档2026年6月发布，首次多模态+企业工具",
        website: "https://chat.deepseek.com",
        tags: ["免费", "推理", "编程", "数学", "中文原生", "V4.1预告"],
        strengths: "完全免费无限制使用；推理能力极强（思维链）；数学和编程表现优异；中文原生；V4.1即将支持多模态（图像+音频理解）",
        weaknesses: "高峰期可能排队；当前版本图像/多模态能力有限；不支持联网搜索",
        bestFor: "预算敏感的开发者、学生、需要高频深度推理的场景",
        chineseSupport: "★★★★★ 中文原生模型，表现极佳",
        contextWindow: "1M tokens (V4)",
        apiAvailable: true,
        released: "2023年推出，V4 2026年4月发布",
        lastUpdated: "2026-06-15",
        source: "deepseek.com / aipricecompare.org"
    },
    {
        id: "qwen",
        name: "通义千问 (Qwen)",
        company: "阿里巴巴（中国）",
        category: "语言模型",
        pricing: "freemium",
        priceLabel: "免费 / API按量付费",
        priceDetail: "APP端和网页端基础功能免费。API：输入约 ¥20/百万Token，输出约 ¥60/百万Token。新用户送7000万Token免费额度",
        website: "https://tongyi.aliyun.com",
        tags: ["中文", "阿里生态", "企业级", "多模态", "开源"],
        strengths: "Qwen3.7-Max旗舰模型性能强劲；阿里云生态深度集成；开源社区活跃（HuggingFace热门）",
        weaknesses: "APP端和API端权益分离；网页版功能不如APP全面",
        bestFor: "阿里云用户、企业级应用、中文场景、对开源有需求的开发者",
        chineseSupport: "★★★★★ 阿里巴巴出品，中文能力一流",
        contextWindow: "256K tokens（Qwen-Long）",
        apiAvailable: true,
        released: "2023年首发，Qwen3.7-Max 2026年5月更新",
        lastUpdated: "2026-06-11",
        source: "aliyun.com / yangmao.ai"
    },
    {
        id: "glm",
        name: "智谱清言 (GLM)",
        company: "智谱AI（中国）",
        category: "语言模型",
        pricing: "freemium",
        priceLabel: "免费 / Coding Plan ¥9.9起",
        priceDetail: "GLM-5.2-Flash 免费使用。Coding Plan：Lite 免费 / Pro ¥49/月 / Max ¥99/月",
        website: "https://chatglm.cn",
        tags: ["编程", "中文", "开源", "Agent", "智谱生态"],
        strengths: "GLM-5.2系列编程能力突出；Coding Plan 性价比高；中文生态完善（MCP工具、Agent平台）",
        weaknesses: "通用任务不如GPT/Claude前端；部分高级功能需付费",
        bestFor: "编程辅助、中文任务、需要Agent/工具链的开发者",
        chineseSupport: "★★★★★ 清华系团队出品，中文理解精确",
        contextWindow: "203K tokens（GLM-5.2-Flash）",
        apiAvailable: true,
        released: "2023年首发，GLM-5.2系列 2026年更新",
        lastUpdated: "2026-06-15",
        source: "bigmodel.cn / vibecoding.app"
    },
    {
        id: "kimi",
        name: "Kimi",
        company: "月之暗面（中国）",
        category: "语言模型",
        pricing: "freemium",
        priceLabel: "免费 / 会员 ¥49/月",
        priceDetail: "免费版（Adagio，有限次数）; Andante ¥49/月; Moderato ¥99/月。K2.5 API 输入 ¥4/百万Token",
        website: "https://kimi.moonshot.cn",
        tags: ["长文本", "中文写作", "深度研究", "PPT生成", "Agent"],
        strengths: "超长上下文处理；中文写作语气细腻；深度研究功能；OK Computer Agent模式",
        weaknesses: "免费版次数限制较严；高峰期需排队/打赏优先",
        bestFor: "长文写作、论文辅助、深度研究、PPT生成",
        chineseSupport: "★★★★★ 中文长文写作最强者之一",
        contextWindow: "128K tokens",
        apiAvailable: true,
        released: "2023年10月首发",
        lastUpdated: "2026-06-11",
        source: "kimi.moonshot.cn / apis.you"
    },
    {
        id: "llama",
        name: "Llama",
        company: "Meta（美国）",
        category: "语言模型",
        pricing: "free",
        priceLabel: "完全免费（开源）",
        priceDetail: "完全开源免费，可在HuggingFace/GitHub下载模型权重。自行部署成本取决于硬件",
        website: "https://llama.meta.com",
        tags: ["开源", "本地部署", "可定制", "隐私", "研究"],
        strengths: "完全开源，可本地部署，数据不外传；社区生态活跃（微调版本众多）；适合定制化需求",
        weaknesses: "需要自行部署（技术门槛）或使用第三方托管；本地运行需要GPU；中文未经专门优化",
        bestFor: "隐私敏感场景、学术研究、企业本地部署、模型微调",
        chineseSupport: "★★★☆☆ 中文可用但非专项优化，微调后可提升",
        contextWindow: "128K tokens",
        apiAvailable: false,
        released: "2023年2月首发，Llama 4 2025年发布",
        lastUpdated: "2026-06-11",
        source: "meta.com / huggingface.co"
    },
    {
        id: "minimax-m3",
        name: "MiniMax M3",
        company: "稀宇科技/MiniMax（中国）",
        category: "语言模型",
        pricing: "freemium",
        priceLabel: "免费 / API按量付费",
        priceDetail: "聊天免费。API按量计费，输入约 ¥1/百万Token，输出约 ¥4/百万Token。开源权重可下载",
        website: "https://hailuoai.com",
        tags: ["多模态", "编程", "超长上下文", "开源", "国产"],
        strengths: "国内首个同时集齐1M超长上下文+原生多模态+前沿编程的模型；SWE-Bench Pro编程 59.0%超越GPT-5.5和Gemini；开源可商用",
        weaknesses: "生态较新（模型刚发布，工具链/社区在建设中）；对话产品不如主流成熟；品牌认知度待提升",
        bestFor: "编程辅助、长文档分析、多模态任务、追求前沿国产模型的开发者",
        chineseSupport: "★★★★☆ 中文支持良好，国产模型天然适配",
        contextWindow: "1M tokens",
        apiAvailable: true,
        released: "2026年6月1日发布",
        lastUpdated: "2026-06-15",
        source: "minimaxi.com / segmentfault.com"
    },
    {
        id: "doubao",
        name: "豆包 (Doubao)",
        company: "字节跳动（中国）",
        category: "语言模型",
        pricing: "freemium",
        priceLabel: "免费 / 会员 ¥29/月起",
        priceDetail: "基础版免费。2026年5月起推出会员制：¥29/月（更多对话次数+模型优先响应）。API按量计费",
        website: "https://www.doubao.com",
        tags: ["中文", "免费", "多模态", "字节生态", "APP"],
        strengths: "中文用户基数庞大（抖音/今日头条生态）；APP端体验流畅；多模态能力（图像理解+生成）；免费额度大方",
        weaknesses: "从免费转付费引发用户争议；网页版功能不如APP全面；API生态不如通义千问成熟",
        bestFor: "日常聊天、中文问答、字节系用户、轻度AI使用",
        chineseSupport: "★★★★★ 字节出品，中文对话流畅自然",
        contextWindow: "128K tokens",
        apiAvailable: true,
        released: "2023年8月首发",
        lastUpdated: "2026-06-15",
        source: "doubao.com / news.qq.com"
    },
    {
        id: "ernie",
        name: "文心一言 (ERNIE)",
        company: "百度（中国）",
        category: "语言模型",
        pricing: "freemium",
        priceLabel: "免费 / 专业版 ¥49.9/月",
        priceDetail: "基础版ERNIE 4.5-Turbo免费使用。专业版¥49.9/月（ERNIE 4.5旗舰版，长文本/多模态全开）。API按量计费",
        website: "https://yiyan.baidu.com",
        tags: ["中文", "百度生态", "搜索增强", "多模态", "企业级"],
        strengths: "百度搜索增强（实时联网+权威知识库）；中文理解和生成能力深厚；企业级API成熟稳定；文库/网盘等百度生态集成",
        weaknesses: "推理和编程不如DeepSeek/GLM；免费版模型能力较弱；用户口碑两极分化",
        bestFor: "百度重度用户、中文知识问答、企业级应用、需要联网搜索的场景",
        chineseSupport: "★★★★★ 百度出品，中文原生理解深刻",
        contextWindow: "128K tokens（ERNIE 4.5旗舰版）",
        apiAvailable: true,
        released: "2023年3月首发，ERNIE 4.5 2025年底更新",
        lastUpdated: "2026-06-15",
        source: "yiyan.baidu.com / baidu.com"
    },
    {
        id: "coze",
        name: "扣子 (Coze)",
        company: "字节跳动（中国）",
        category: "Agent平台",
        pricing: "free",
        priceLabel: "免费（基础版）",
        priceDetail: "基础版完全免费，支持创建多个Agent。Coze 3.0 2026年6月上线，支持多人多Agent协作",
        website: "https://www.coze.cn",
        tags: ["Agent", "零代码", "Bot搭建", "多模型", "工作流"],
        strengths: "零代码搭建AI助手；支持接入多种模型（Claude、GPT等）；拖拽式工作流设计；开源",
        weaknesses: "非语言模型本身，是Agent开发平台；复杂场景有学习曲线；国内版和国际版数据不互通",
        bestFor: "想搭建自己的AI Bot、客服机器人、自动化工作流的用户",
        chineseSupport: "★★★★★ 字节跳动出品，中文界面和教程完善",
        contextWindow: "取决于接入的模型",
        apiAvailable: false,
        released: "2024年首发，Coze 3.0 2026年6月1日发布",
        lastUpdated: "2026-06-11",
        source: "coze.cn / finance.sina.com.cn"
    },
    {
        id: "workbuddy",
        name: "WorkBuddy",
        company: "腾讯（中国）",
        category: "Agent平台",
        pricing: "freemium",
        priceLabel: "免费 / 个人版 ¥58/月",
        priceDetail: "新用户注册送500 Credits，连续30日每日登录送100 Credits。个人版2000 Credits/¥58/月；企业版2000 Credits/¥78/月；企业专享定制化服务",
        website: "https://workbuddy.tencent.com",
        tags: ["Agent", "效率", "专家团", "Skills", "MCP", "办公"],
        strengths: "内置20+Skills技能包与MCP协议；专家中心提供成组Agent角色协作；支持微信/企业微信远程指挥电脑处理日常工作；企业版7×24小时专家数字员工",
        weaknesses: "主要面向国内用户；部分高级功能需付费；Mac/Windows桌面应用为主，无纯网页版",
        bestFor: "日常办公提效、数据处理、文档撰写、项目管理、一人企业运营",
        chineseSupport: "★★★★★ 腾讯出品，中文原生支持",
        contextWindow: "取决于接入的模型",
        apiAvailable: false,
        released: "2026年3月9日上线，企业版2026年6月发布",
        lastUpdated: "2026-06-11",
        source: "workbuddy.tencent.com / new.qq.com"
    },
    {
        id: "windclaw",
        name: "WindClaw",
        company: "万得信息（中国）",
        category: "Agent平台",
        pricing: "free",
        priceLabel: "公测免费",
        priceDetail: "2026年3月公测期间免费使用。正式定价方案待公布，预计按Wind账号体系分级收费",
        website: "https://windclaw.bot",
        tags: ["Agent", "金融投研", "专业数据", "多智能体", "7×24"],
        strengths: "深度整合Wind专业金融数据库；多智能体协同架构实现7×24自动化投研分析；支持零代码本地化部署；股票分析/宏观研究/市场监控一站式",
        weaknesses: "需要Wind账号体系（金融从业者门槛）；非金融领域用户不适用；公测期功能仍在迭代",
        bestFor: "金融从业者、投资研究、股票分析、宏观研究、市场监控",
        chineseSupport: "★★★★★ 万得出品，中文金融数据最全",
        contextWindow: "取决于接入的模型",
        apiAvailable: false,
        released: "2026年3月11日公测",
        lastUpdated: "2026-06-11",
        source: "windclaw.bot / aihub.cn"
    },
    {
        id: "dify",
        name: "Dify",
        company: "Dify.ai（中国/开源）",
        category: "Agent平台",
        pricing: "freemium",
        priceLabel: "免费（开源）/ 企业版付费",
        priceDetail: "社区版完全开源免费，可自行部署（Docker）。Cloud版免费额度有限；企业版按需定价（私有化部署/高级权限/审计日志）",
        website: "https://dify.ai",
        tags: ["Agent", "开源", "工作流", "多模型", "RAG", "可自托管"],
        strengths: "开源可自托管（数据不出域）；可视化工作流编排；支持 100+ LLM 接入；内置 RAG 知识库引擎；声明式 YAML 配置",
        weaknesses: "自托管需要技术能力（Docker/服务器）；企业版费用较高；UI/UX 偏技术用户",
        bestFor: "技术团队、企业客服系统、需私有化部署的知识库应用、AI应用快速原型",
        chineseSupport: "★★★★☆ 中文界面完善，文档中英双语",
        contextWindow: "取决于接入的模型",
        apiAvailable: true,
        released: "2023年开源，持续迭代中",
        lastUpdated: "2026-06-11",
        source: "dify.ai / news.sohu.com"
    },
    {
        id: "manus",
        name: "Manus",
        company: "Manus（中国/美国）",
        category: "Agent平台",
        pricing: "paid",
        priceLabel: "订阅制（约 $39/月起）",
        priceDetail: "Starter $39/月；Pro $199/月。2026年仍处邀请制，公测用户需排队获取使用权",
        website: "https://manus.im",
        tags: ["Agent", "自主任务", "虚拟同事", "交付型", "多步骤"],
        strengths: "任务自主规划与成果交付（不只是对话，直接产出可交付物）；能操作浏览器、文件系统等工具；适合需要AI独自完成复杂任务的场景",
        weaknesses: "仍处邀请制阶段，使用门槛高；每月费用不低；任务执行速度较慢（需多步规划）；中文场景适配仍在优化",
        bestFor: "单人强交付任务（数据分析报告、竞品调研、市场分析）、需要AI自主完成多步骤操作的场景",
        chineseSupport: "★★★☆☆ 中文可用，但原生界面以英文为主",
        contextWindow: "取决于接入的模型",
        apiAvailable: false,
        released: "2025年首发，持续迭代",
        lastUpdated: "2026-06-11",
        source: "manus.im / sohu.com"
    },
    {
        id: "n8n",
        name: "n8n",
        company: "n8n GmbH（德国/开源）",
        category: "Agent平台",
        pricing: "freemium",
        priceLabel: "免费（开源）/ Cloud €20/月起",
        priceDetail: "社区版完全开源免费，可自行部署。Cloud版 Starter €20/月；Pro €120/月；Enterprise 按需定价",
        website: "https://n8n.io",
        tags: ["Agent", "开源", "自动化", "工作流", "400+集成", "AI节点"],
        strengths: "开源可自托管；400+ 原生集成节点（Google/Airtable/Slack等）；可视化工作流编辑器；AI Agent 节点可将 LLM 接入自动化流程",
        weaknesses: "自托管需技术能力；Cloud版海外服务器（国内访问可能慢）；界面全英文；中文社区较小",
        bestFor: "自动化数据同步、跨平台工作流、技术用户的AI自动化流程、企业内部流程自动化",
        chineseSupport: "★★☆☆☆ 全英文界面和文档，中文社区资源有限",
        contextWindow: "取决于接入的模型",
        apiAvailable: true,
        released: "2019年开源，2024年加入AI Agent功能",
        lastUpdated: "2026-06-11",
        source: "n8n.io / cet.com.cn"
    },
    // ========== 图像模型 (5) ==========
    {
        id: "midjourney",
        name: "Midjourney",
        company: "Midjourney Inc.（美国）",
        category: "图像模型",
        pricing: "paid",
        priceLabel: "Basic $10/月起",
        priceDetail: "Basic $10/月 (~200图); Standard $30/月 (~900图+无限慢速); Pro $60/月; Mega $120/月。无免费版",
        website: "https://www.midjourney.com",
        tags: ["图像生成", "V7", "艺术风格", "Discord", "Niji动漫"],
        strengths: "图像质量天花板，V7版本艺术风格极强；Niji 7动漫引擎专业；Relax Mode无限慢速生成；颜色和光影表现力业界第一",
        weaknesses: "无免费版；需通过Discord使用（有学习曲线）；中国访问需特殊网络环境；Prompt需要英文",
        bestFor: "艺术创作、设计灵感、概念图、游戏原画、高品质插画",
        chineseSupport: "★★☆☆☆ Discord界面全英文，中文Prompt需翻译",
        apiAvailable: false,
        released: "2022年7月首发，V7 2025年4月发布",
        lastUpdated: "2026-06-11",
        source: "midjourney.com / similarlabs.com"
    },
    {
        id: "dalle",
        name: "DALL-E",
        company: "OpenAI（美国）",
        category: "图像模型",
        pricing: "freemium",
        priceLabel: "ChatGPT内置 / Plus $20/月",
        priceDetail: "ChatGPT免费版可生成少量图; Plus $20/月 (DALL-E 3.5，无限生成); Pro $200/月",
        website: "https://chat.openai.com",
        tags: ["图像生成", "多模态", "自然语言", "文字渲染", "编辑"],
        strengths: "自然语言理解最强（描述越口语越准确）；与ChatGPT深度集成，生成+编辑在同一对话完成；文字渲染优秀；操作极简无需调参",
        weaknesses: "艺术风格不如Midjourney丰富；需科学上网；生成速度中等（10-30秒/张）",
        bestFor: "不需要复杂Prompt的日常配图、社交媒体图片、PPT插图、概念图",
        chineseSupport: "★★★★☆ 支持中文Prompt，英文Prompt效果更佳",
        apiAvailable: true,
        released: "2021年1月首发，DALL-E 3.5 2026年更新",
        lastUpdated: "2026-06-11",
        source: "openai.com / aibotgo.net"
    },
    {
        id: "stable-diffusion",
        name: "Stable Diffusion",
        company: "Stability AI（英国）",
        category: "图像模型",
        pricing: "free",
        priceLabel: "开源免费 / 云服务付费",
        priceDetail: "SD4模型权重开源免费；Stability AI官方云API按量计费；Replicate/Fal等第三方托管平台各有定价",
        website: "https://stability.ai",
        tags: ["开源", "本地部署", "可定制", "ControlNet", "LoRA社区"],
        strengths: "完全开源，数据不出本机；ControlNet精确控制构图/姿势/深度；LoRA插件生态极丰富（可训练专属风格）；社区海量免费模型",
        weaknesses: "需要GPU（本地部署建议8GB+显存）；Prompt门槛高（负面Prompt、采样器、步数等参数需调）；云端方案需额外付费",
        bestFor: "技术用户、需定制化工作流的设计师、隐私敏感的图像生成、AI绘画研究者",
        chineseSupport: "★★☆☆☆ 英文Prompt为主，中文需翻译",
        apiAvailable: true,
        released: "2022年8月首发，SD4 2025年发布",
        lastUpdated: "2026-06-11",
        source: "stability.ai / huggingface.co"
    },
    {
        id: "flux",
        name: "FLUX",
        company: "Black Forest Labs（德国）",
        category: "图像模型",
        pricing: "freemium",
        priceLabel: "开源免费 / Pro按量付费",
        priceDetail: "FLUX.1-dev开源免费（需较好GPU）；FLUX.1-pro通过API按量计费（BFL官方或Replicate/Fal托管）",
        website: "https://blackforestlabs.ai",
        tags: ["开源", "高质量", "文字渲染", "真实感", "快速生成"],
        strengths: "Stable Diffusion原班人马打造；文字渲染能力行业领先（招牌/UI文字精准不歪）；生成速度快；写实质感极强",
        weaknesses: "开源版对硬件要求极高（建议24GB+显存）；生态不如SD成熟（LoRA/ControlNet支持在追赶）",
        bestFor: "需要高精度文字渲染的设计（海报/封面/LOGO）、高质量写实图像、追求速度的专业用户",
        chineseSupport: "★★☆☆☆ 英文为主",
        apiAvailable: true,
        released: "2024年8月首发，Pro版持续迭代",
        lastUpdated: "2026-06-11",
        source: "blackforestlabs.ai / apatero.com"
    },
    {
        id: "jimeng",
        name: "即梦 (Jimeng)",
        company: "字节跳动（中国）",
        category: "图像模型",
        pricing: "free",
        priceLabel: "免费使用",
        priceDetail: "基础版免费，每日赠送生成额度。高级功能按需付费，签到完成任务可获取更多额度",
        website: "https://jimeng.jianying.com",
        tags: ["中文原生", "免费", "图像生成", "视频生成", "剪映生态"],
        strengths: "中文Prompt理解精准零门槛；免费额度大方；剪映/CapCut生态深度整合（生成即编辑）；操作极简适合小白",
        weaknesses: "精细控制不如SD/FLUX（无ControlNet级功能）；复杂场景效果一般；风格库不如Midjourney丰富",
        bestFor: "中文用户日常配图、社交媒体图片、短视频封面、不想折腾Prompt的普通用户",
        chineseSupport: "★★★★★ 中文原生，理解精准",
        apiAvailable: false,
        released: "2024年首发，持续更新",
        lastUpdated: "2026-06-11",
        source: "jimeng.jianying.com"
    },
    // ========== 视频模型 (5) ==========
    {
        id: "sora",
        name: "Sora",
        company: "OpenAI（美国）",
        category: "视频模型",
        pricing: "paid",
        priceLabel: "ChatGPT Plus $20/月可用",
        priceDetail: "ChatGPT Plus $20/月 (有限额度); Pro $200/月 (更多额度+高分辨率+无水印)",
        website: "https://sora.com",
        tags: ["视频生成", "影视级", "物理模拟", "超长镜头", "高画质"],
        strengths: "画质天花板，影视级质感；物理规律与光影细节极其逼真；超长连贯镜头不跳帧；复杂镜头调度能力强",
        weaknesses: "生成耗时极长（几分钟到十几分钟/条）；价格昂贵（Pro $200/月才有完整能力）；提示词细节要求极高；新手调试困难",
        bestFor: "影视级短片、高质量广告、追求极致画质的专业创作者",
        chineseSupport: "★★☆☆☆ 英文Prompt为主",
        apiAvailable: false,
        released: "2024年12月公测",
        lastUpdated: "2026-06-11",
        source: "sora.com / nav-ai.cn"
    },
    {
        id: "runway",
        name: "Runway Gen-4",
        company: "Runway（美国）",
        category: "视频模型",
        pricing: "freemium",
        priceLabel: "免费体验 / Standard $15/月起",
        priceDetail: "免费版有限额度; Standard $15/月; Pro $35/月; Unlimited $95/月; Enterprise定制",
        website: "https://runwayml.com",
        tags: ["视频生成", "专业工具", "运动笔刷", "音频生成", "局部修改"],
        strengths: "功能最全面（视频生成+运动笔刷+局部修改+音频生成）；出片速度快且稳定；专业后期工具完善；Gen-4画质大幅提升",
        weaknesses: "中文Prompt理解弱（需翻译英文）；免费额度极少；高级功能需订阅较贵套餐；无永久买断",
        bestFor: "需要稳定量产短视频的创作者、需要精细后期调整的专业用户、商业视频制作",
        chineseSupport: "★★☆☆☆ 英文为主，中文Prompt需翻译",
        apiAvailable: true,
        released: "2023年首发，Gen-4 2026年更新",
        lastUpdated: "2026-06-11",
        source: "runwayml.com / aibotgo.net"
    },
    {
        id: "kling",
        name: "可灵 (Kling)",
        company: "快手（中国）",
        category: "视频模型",
        pricing: "free",
        priceLabel: "免费 / 会员 ¥39/月起",
        priceDetail: "免费版每日赠送额度（签到+任务获取积分）; 会员 ¥39/月起（更多额度+更高画质+更长时长）",
        website: "https://kling.kuaishou.com",
        tags: ["视频生成", "中文原生", "免费", "长视频", "短视频"],
        strengths: "中文Prompt理解精准零门槛；免费额度大方（签到+完成任务可持续白嫖）；直接生成10秒长视频；生成速度快；新手极度友好",
        weaknesses: "复杂物理规律偶尔翻车（人物动作不自然）；默认风格偏写实，动漫/3D需额外调试；不支持精细后期编辑",
        bestFor: "中文短视频创作者、新手入门、日常社交媒体视频、低成本视频制作",
        chineseSupport: "★★★★★ 中文原生，理解精准",
        apiAvailable: false,
        released: "2024年6月首发，可灵3 2026年更新",
        lastUpdated: "2026-06-11",
        source: "kling.kuaishou.com / nav-ai.cn"
    },
    {
        id: "pika",
        name: "Pika",
        company: "Pika Labs（美国）",
        category: "视频模型",
        pricing: "freemium",
        priceLabel: "免费 / Pro $10/月起",
        priceDetail: "免费版有限额度; Pro $10/月; Unlimited $35/月; Agency $70/月",
        website: "https://pika.art",
        tags: ["视频生成", "特效", "趣味", "易用", "局部修改"],
        strengths: "玩法多样（特效/鬼畜/局部修改/风格迁移）；界面极简上手快（5分钟学会）；娱乐性强适合社交媒体；价格友好（入门$10/月）",
        weaknesses: "非量产级工具；画质不如Sora/Runway；复杂场景一致性一般；中文支持弱",
        bestFor: "趣味短视频、社交媒体特效、娱乐向内容创作、不想折腾的轻度用户",
        chineseSupport: "★★☆☆☆ 英文界面和Prompt",
        apiAvailable: false,
        released: "2023年首发，Pika 2.0 2025年发布",
        lastUpdated: "2026-06-11",
        source: "pika.art / aibotgo.net"
    },
    {
        id: "veo",
        name: "Veo",
        company: "Google DeepMind（美国）",
        category: "视频模型",
        pricing: "freemium",
        priceLabel: "Gemini Ultra $249.99/月内置",
        priceDetail: "Gemini AI Pro $19.99/月 (有限Veo额度); Ultra $249.99/月 (更多额度+高质量输出+4K)",
        website: "https://deepmind.google/technologies/veo/",
        tags: ["视频生成", "Google生态", "影视级", "多模态", "Gemini集成"],
        strengths: "Google DeepMind技术背书底子厚；与Gemini深度集成（一条Prompt图+视频同时出）；生成质量与Sora同级；影视级视觉效果",
        weaknesses: "价格门槛极高（需Ultra $249.99/月解锁完整能力）；国内直接访问受限；中文支持一般；单独用不如Runway灵活",
        bestFor: "Google生态重度用户、需要图+视频一站式生成的专业创作者、预算充足的影视制作",
        chineseSupport: "★★☆☆☆ 英文Prompt为主",
        apiAvailable: false,
        released: "2025年5月公测",
        lastUpdated: "2026-06-11",
        source: "deepmind.google / imagetoprompt.dev"
    },
    // ========== 代码模型 (5) ==========
    {
        id: "github-copilot",
        name: "GitHub Copilot",
        company: "GitHub/微软（美国）",
        category: "代码模型",
        pricing: "paid",
        priceLabel: "Individual $10/月",
        priceDetail: "Individual $10/月 (Claude 3.5+GPT-4o双模型); Business $19/月; Enterprise $39/月。学生和开源项目免费",
        website: "https://github.com/features/copilot",
        tags: ["代码补全", "IDE插件", "GitHub生态", "多模型", "学生免费"],
        strengths: "VS Code/JetBrains等主流IDE深度集成；2026年已支持Claude+GPT双模型驱动；代码补全质量顶级；GitHub PR/Issue无缝衔接；学生免费",
        weaknesses: "纯付费（个人$10/月）；代码对话不如Cursor灵活深入；国内访问GitHub可能不稳定；不支持多文件Agent式编辑",
        bestFor: "GitHub重度用户、全栈开发者、学生党（免费）、企业团队",
        chineseSupport: "★★★☆☆ 代码注释支持中文，界面英文为主",
        apiAvailable: true,
        released: "2021年首发，持续迭代",
        lastUpdated: "2026-06-11",
        source: "github.com / juejin.cn"
    },
    {
        id: "cursor",
        name: "Cursor",
        company: "Anysphere（美国）",
        category: "代码模型",
        pricing: "freemium",
        priceLabel: "免费 / Pro $20/月",
        priceDetail: "免费版有限额度（2000次/月补全）; Pro $20/月 (无限补全+500次高级Agent请求); Business $40/月",
        website: "https://cursor.com",
        tags: ["AI IDE", "代码生成", "多文件编辑", "Agent模式", "对话编程"],
        strengths: "内置AI的完整IDE（无需插件）；多文件编辑能力极强（修改一处自动同步关联文件）；Agent模式可自主修复Bug、重构代码；上下文理解远超插件类",
        weaknesses: "免费版额度有限；Pro $20/月比Copilot贵；国内需代理访问；非VS Code生态需迁移习惯；偶尔假死需重启",
        bestFor: "追求极致AI编程体验的开发者、需要AI理解整个项目的复杂开发",
        chineseSupport: "★★★☆☆ 代码对话可用中文命令，界面英文",
        apiAvailable: false,
        released: "2023年首发，持续快速迭代",
        lastUpdated: "2026-06-11",
        source: "cursor.com / xtechtools.com"
    },
    {
        id: "windsurf",
        name: "Windsurf",
        company: "Codeium（美国）",
        category: "代码模型",
        pricing: "freemium",
        priceLabel: "免费 / Pro $15/月",
        priceDetail: "免费版基础补全+有限对话; Pro $15/月 (无限补全+高级模型); Teams $35/月",
        website: "https://codeium.com/windsurf",
        tags: ["AI IDE", "代码补全", "Cascade", "多文件", "免费友好"],
        strengths: "免费版比Cursor/Copilot大方；Cascade模式可跨多文件理解和编辑；IDE体验轻量流畅不卡顿；上手快学习曲线低",
        weaknesses: "生态不如VS Code丰富（插件支持有限）；高级功能需Pro；AI能力不如Cursor的Agent模式深度",
        bestFor: "预算有限的开发者、需要免费好用的AI编程工具、轻量级IDE用户",
        chineseSupport: "★★★☆☆ 代码对话支持中文，界面英文",
        apiAvailable: false,
        released: "2024年首发",
        lastUpdated: "2026-06-11",
        source: "codeium.com / aitoolcn.com"
    },
    {
        id: "tongyi-lingma",
        name: "通义灵码",
        company: "阿里巴巴（中国）",
        category: "代码模型",
        pricing: "free",
        priceLabel: "完全免费",
        priceDetail: "个人版和基础企业版完全免费。高级企业版按需定价（含安全审计/合规检查等）",
        website: "https://tongyi.aliyun.com/lingma",
        tags: ["免费", "中文原生", "阿里生态", "IDE插件", "企业级"],
        strengths: "个人版完全免费无隐藏收费；中文代码注释和对话生成精准；VS Code/JetBrains插件支持；阿里云生态集成（代码→部署一键上云）",
        weaknesses: "代码补全质量略逊Copilot/Cursor（特别是英文项目）；高级功能（安全审计等）需付费企业版；更新频率不如海外工具",
        bestFor: "中文开发者、学生党、阿里云用户、对免费有刚需的个人和团队",
        chineseSupport: "★★★★★ 中文原生，代码注释和对话全中文",
        apiAvailable: true,
        released: "2024年首发，持续迭代",
        lastUpdated: "2026-06-11",
        source: "tongyi.aliyun.com / juejin.cn"
    },
    {
        id: "comate",
        name: "文心快码 (Comate)",
        company: "百度（中国）",
        category: "代码模型",
        pricing: "free",
        priceLabel: "完全免费",
        priceDetail: "个人版完全免费。企业版按需定价（含代码审查/安全扫描等高级功能）",
        website: "https://comate.baidu.com",
        tags: ["免费", "中文原生", "百度生态", "IDE插件", "代码审查"],
        strengths: "个人版完全免费；中文代码注释和文档生成质量好；VS Code/IntelliJ插件支持完善；百度智能云生态集成",
        weaknesses: "知名度不如通义灵码/Copilot；代码补全质量中等偏上；开源社区相对冷清；对非百度技术栈支持一般",
        bestFor: "中文开发者、百度云用户、需要免费代码助手且对百度生态有依赖的个人开发者",
        chineseSupport: "★★★★★ 中文原生",
        apiAvailable: false,
        released: "2023年首发，持续迭代",
        lastUpdated: "2026-06-11",
        source: "comate.baidu.com"
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
    if (grid) renderModelCards('all');

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
        grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--text-secondary)">没有找到匹配的模型，试试其他关键词？</div>';
        return;
    }

    grid.innerHTML = filtered.map(m => `
        <div class="model-card" onclick="location.href='${m.website}'" title="点击访问官网">
            <div class="model-card-header">
                <div>
                    <div class="model-name">${m.name}</div>
                    <div class="model-company">${m.company}</div>
                </div>
                <span class="model-badge badge-${m.pricing}">${m.pricing === 'free' ? '免费' : m.pricing === 'freemium' ? '免费+付费' : '付费'}</span>
            </div>
            <div class="model-tags">
                ${m.tags.map(t => `<span class="model-tag">${t}</span>`).join('')}
            </div>
            <div class="model-desc">${m.strengths}</div>
            <div style="font-size:13px;color:var(--text-secondary);margin-top:6px;">
                <strong>最适合：</strong>${m.bestFor}
            </div>
            <div class="model-footer">
                <div class="model-price"><strong>${m.priceLabel.split(' / ')[0]}</strong>${m.priceLabel.includes('/') ? ' / ' + m.priceLabel.split(' / ').slice(1).join(' / ') : ''}</div>
            </div>
        </div>
    `).join('');
}

function renderCompareTable() {
    const body = document.getElementById('compareBody');
    if (!body) return;

    const langModels = models.filter(m => m.category === '语言模型');

    // 表头
    const dimensions = [
        { label: '开发商', key: 'company' },
        { label: '免费版', key: 'pricing', format: v => v === 'free' ? '✅ 完全免费' : v === 'freemium' ? '✅ 有免费版' : '❌ 仅付费' },
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
