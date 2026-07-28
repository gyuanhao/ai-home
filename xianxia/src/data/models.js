/* ============================================================
 * 模型数据 (src/data/models.js)
 * 作用：万象阁里展示的 AI 模型卡片内容。
 * 本文件由 xianxia/scripts/convert_models.py 从原站 ai-home/scripts/models.json
 * 自动生成（只保留中文字段）。原站更新模型后重跑该脚本即同步。
 * 请勿手改本文件；要改请改原站 models.json 后重跑同步命令。
 * ============================================================ */
window.AIHome = window.AIHome || {};

AIHome.MODELS = [
  {
    "id": "deepseek",
    "name": "DeepSeek",
    "company": "深度求索（中国）",
    "category": "语言模型",
    "pricing": "freemium",
    "priceLabel": "网页/APP对话免费",
    "strengths": "网页和APP对话免费使用；推理能力突出（思维链）；数学和编程表现优异；中文原生；V4.1即将支持多模态（图像+音频理解）",
    "weaknesses": "高峰期可能排队；当前版本图像/多模态能力有限；不支持联网搜索",
    "bestFor": "预算敏感的开发者、学生、需要高频深度推理的场景",
    "chineseSupport": "★★★★★ 中文原生模型，中文理解自然",
    "contextWindow": "1M tokens (V4)",
    "website": "https://chat.deepseek.com",
    "tags": [
      "免费",
      "推理",
      "编程",
      "数学",
      "中文原生",
      "V4.1预告"
    ]
  },
  {
    "id": "kimi",
    "name": "Kimi",
    "company": "月之暗面（中国）",
    "category": "语言模型",
    "pricing": "freemium",
    "priceLabel": "免费 / 会员 ¥49/月",
    "strengths": "超长上下文处理；中文写作语气细腻；深度研究功能；OK Computer Agent模式",
    "weaknesses": "免费版次数限制较严；高峰期需排队/打赏优先",
    "bestFor": "长文写作、论文辅助、深度研究、PPT生成",
    "chineseSupport": "★★★★★ 中文长文写作表现突出",
    "contextWindow": "128K tokens",
    "website": "https://kimi.moonshot.cn",
    "tags": [
      "长文本",
      "中文写作",
      "深度研究",
      "PPT生成",
      "Agent"
    ]
  },
  {
    "id": "qwen",
    "name": "通义千问 (Qwen)",
    "company": "阿里巴巴（中国）",
    "category": "语言模型",
    "pricing": "freemium",
    "priceLabel": "免费 / API按量付费",
    "strengths": "Qwen3.7-Max旗舰模型性能强劲；阿里云生态深度集成；开源社区活跃（HuggingFace热门）",
    "weaknesses": "APP端和API端权益分离；网页版功能不如APP全面",
    "bestFor": "阿里云用户、企业级应用、中文场景、对开源有需求的开发者",
    "chineseSupport": "★★★★★ 阿里巴巴出品，中文优化充分",
    "contextWindow": "256K tokens（Qwen-Long）",
    "website": "https://www.aliyun.com/product/bailian?userCode=zpk45rgx",
    "tags": [
      "中文",
      "阿里生态",
      "企业级",
      "多模态",
      "开源"
    ]
  },
  {
    "id": "ernie",
    "name": "文心一言 (ERNIE)",
    "company": "百度（中国）",
    "category": "语言模型",
    "pricing": "freemium",
    "priceLabel": "免费 / 专业版 ¥49.9/月",
    "strengths": "百度搜索增强（实时联网+权威知识库）；中文理解和生成能力深厚；企业级API成熟稳定；文库/网盘等百度生态集成",
    "weaknesses": "推理和编程非核心优势；免费版模型能力相对基础；用户口碑两极分化",
    "bestFor": "百度重度用户、中文知识问答、企业级应用、需要联网搜索的场景",
    "chineseSupport": "★★★★★ 百度出品，中文原生理解深刻",
    "contextWindow": "128K tokens（ERNIE 4.5旗舰版）",
    "website": "https://yiyan.baidu.com",
    "tags": [
      "中文",
      "百度生态",
      "搜索增强",
      "多模态",
      "企业级"
    ]
  },
  {
    "id": "doubao",
    "name": "豆包 (Doubao)",
    "company": "字节跳动（中国）",
    "category": "语言模型",
    "pricing": "freemium",
    "priceLabel": "免费 / 会员 ¥29/月起",
    "strengths": "中文用户基数庞大（抖音/今日头条生态）；APP端体验流畅；多模态能力（图像理解+生成）；免费额度大方",
    "weaknesses": "从免费转付费引发用户争议；网页版功能与APP端有差异；API生态规模中等",
    "bestFor": "日常聊天、中文问答、字节系用户、轻度AI使用",
    "chineseSupport": "★★★★★ 字节出品，中文对话流畅自然",
    "contextWindow": "128K tokens",
    "website": "https://www.doubao.com",
    "tags": [
      "中文",
      "免费",
      "多模态",
      "字节生态",
      "APP"
    ]
  },
  {
    "id": "glm",
    "name": "智谱清言 (GLM)",
    "company": "智谱AI（中国）",
    "category": "语言模型",
    "pricing": "freemium",
    "priceLabel": "免费 / Coding Plan ¥9.9起",
    "strengths": "GLM-5.2系列编程能力突出；Coding Plan 性价比高；中文生态完善（MCP工具、Agent平台）",
    "weaknesses": "通用任务能力中等偏上；部分高级功能需付费",
    "bestFor": "编程辅助、中文任务、需要Agent/工具链的开发者",
    "chineseSupport": "★★★★★ 清华系团队出品，中文理解精确",
    "contextWindow": "203K tokens（GLM-5.2-Flash）",
    "website": "https://chatglm.cn",
    "tags": [
      "编程",
      "中文",
      "开源",
      "Agent",
      "智谱生态"
    ]
  },
  {
    "id": "minimax-m3",
    "name": "MiniMax M3",
    "company": "稀宇科技/MiniMax（中国）",
    "category": "语言模型",
    "pricing": "freemium",
    "priceLabel": "免费 / API按量付费",
    "strengths": "国内首个同时集齐1M超长上下文+原生多模态+前沿编程的模型；SWE-Bench Pro编程得分59.0%；开源可商用；同厂商海螺视频AI视频生成",
    "weaknesses": "生态较新（模型刚发布，工具链/社区在建设中）；对话产品功能仍在完善中；品牌认知度待提升",
    "bestFor": "编程辅助、长文档分析、多模态任务、追求前沿国产模型的开发者",
    "chineseSupport": "★★★★☆ 中文支持良好，国产模型天然适配",
    "contextWindow": "1M tokens",
    "website": "https://www.minimaxi.com",
    "tags": [
      "多模态",
      "编程",
      "超长上下文",
      "开源",
      "国产"
    ]
  },
  {
    "id": "chatgpt",
    "name": "ChatGPT",
    "company": "OpenAI（美国）",
    "category": "语言模型",
    "pricing": "freemium",
    "priceLabel": "免费 / Plus $20/月",
    "strengths": "GPT-5.6编程表现显著提升（AGI Ranker 77.48分）；支持图像生成（DALL-E 3.5）、语音对话、文件分析；Plus $20/月即可解锁主力模型",
    "weaknesses": "免费版配额受限；需科学上网；国内直接访问不支持",
    "bestFor": "日常写作、创意脑暴、通用问答、图像生成",
    "chineseSupport": "★★★★☆ 中文流畅，偶有翻译腔",
    "contextWindow": "128K tokens",
    "website": "https://chat.openai.com",
    "tags": [
      "写作",
      "编程",
      "图像生成",
      "语音",
      "多模态"
    ]
  },
  {
    "id": "claude",
    "name": "Claude",
    "company": "Anthropic（美国）",
    "category": "语言模型",
    "pricing": "freemium",
    "priceLabel": "免费 / Pro $20/月",
    "strengths": "Opus 4.8在AGI Ranker编程榜得分81.03分；长文档处理能力突出；推理风格严谨；Project功能可管理多个对话上下文",
    "weaknesses": "免费版每日限额较严；图像生成能力弱；需科学上网",
    "bestFor": "长文档分析、学术写作、复杂代码项目、报告撰写、编程竞赛",
    "chineseSupport": "★★★★☆ 中文表现优异，语气自然",
    "contextWindow": "200K tokens",
    "website": "https://claude.ai",
    "tags": [
      "写作",
      "编程",
      "长文档",
      "推理",
      "深度分析"
    ]
  },
  {
    "id": "gemini",
    "name": "Gemini",
    "company": "Google（美国）",
    "category": "语言模型",
    "pricing": "freemium",
    "priceLabel": "免费 / AI Pro $19.99/月",
    "strengths": "Google生态深度整合（Gmail/Docs/Drive）；视频生成（Veo）；1M Token 超长上下文",
    "weaknesses": "中文处理主要为英文优化，细腻度有提升空间；部分功能国内受限；Google服务需特殊网络环境",
    "bestFor": "Google Workspace用户、视频生成、多模态任务、超长文本处理",
    "chineseSupport": "★★★☆☆ 中文可用，主要为英文母语优化",
    "contextWindow": "1M tokens",
    "website": "https://gemini.google.com",
    "tags": [
      "多模态",
      "搜索",
      "视频生成",
      "长上下文",
      "Google生态"
    ]
  },
  {
    "id": "llama",
    "name": "Llama",
    "company": "Meta（美国）",
    "category": "语言模型",
    "pricing": "free",
    "priceLabel": "完全免费（开源）",
    "strengths": "完全开源，可本地部署，数据不外传；社区生态活跃（微调版本众多）；适合定制化需求",
    "weaknesses": "需要自行部署（技术门槛）或使用第三方托管；本地运行需要GPU；中文未经专门优化",
    "bestFor": "隐私敏感场景、学术研究、企业本地部署、模型微调",
    "chineseSupport": "★★★☆☆ 中文可用但非专项优化，微调后可提升",
    "contextWindow": "128K tokens",
    "website": "https://llama.meta.com",
    "tags": [
      "开源",
      "本地部署",
      "可定制",
      "隐私",
      "研究"
    ]
  },
  {
    "id": "bailian",
    "name": "百炼平台",
    "company": "阿里云（中国）",
    "category": "Agent平台",
    "pricing": "freemium",
    "priceLabel": "免费试用 / API按量付费",
    "strengths": "阿里云官方一站式AI平台；支持Qwen3.7/DeepSeek/GLM/MiniMax等100+模型；内置MCP托管+Agent搭建+可视化工作流；新用户7000万免费Tokens",
    "weaknesses": "需阿里云账号；高级功能需付费；主要面向开发者和企业用户",
    "bestFor": "需要一站式调用多种大模型API的开发者、企业AI应用搭建、Agent开发",
    "chineseSupport": "★★★★★ 阿里云出品，中文文档和界面完善",
    "contextWindow": "取决于接入的模型",
    "website": "https://www.aliyun.com/product/bailian?userCode=zpk45rgx",
    "tags": [
      "Agent",
      "MCP",
      "多模型",
      "RAG",
      "工作流",
      "可视化",
      "Qwen"
    ]
  },
  {
    "id": "coze",
    "name": "扣子 (Coze)",
    "company": "字节跳动（中国）",
    "category": "Agent平台",
    "pricing": "free",
    "priceLabel": "免费（基础版）",
    "strengths": "零代码搭建AI助手；支持接入多种模型（Claude、GPT等）；拖拽式工作流设计；开源",
    "weaknesses": "非语言模型本身，是Agent开发平台；复杂场景有学习曲线；国内版和国际版数据不互通",
    "bestFor": "想搭建自己的AI Bot、客服机器人、自动化工作流的用户",
    "chineseSupport": "★★★★★ 字节跳动出品，中文界面和教程完善",
    "contextWindow": "取决于接入的模型",
    "website": "https://www.coze.cn",
    "tags": [
      "Agent",
      "零代码",
      "Bot搭建",
      "多模型",
      "工作流"
    ]
  },
  {
    "id": "workbuddy",
    "name": "WorkBuddy",
    "company": "腾讯（中国）",
    "category": "Agent平台",
    "pricing": "freemium",
    "priceLabel": "免费 / 个人版 ¥58/月",
    "strengths": "内置20+Skills技能包与MCP协议；专家中心提供成组Agent角色协作；支持微信/企业微信远程指挥电脑处理日常工作；企业版7×24小时专家数字员工",
    "weaknesses": "主要面向国内用户；部分高级功能需付费；Mac/Windows桌面应用为主，无纯网页版",
    "bestFor": "日常办公提效、数据处理、文档撰写、项目管理、一人企业运营",
    "chineseSupport": "★★★★★ 腾讯出品，中文原生支持",
    "contextWindow": "取决于接入的模型",
    "website": "https://workbuddy.tencent.com",
    "tags": [
      "Agent",
      "效率",
      "专家团",
      "Skills",
      "MCP",
      "办公"
    ]
  },
  {
    "id": "windclaw",
    "name": "WindClaw",
    "company": "万得信息（中国）",
    "category": "Agent平台",
    "pricing": "free",
    "priceLabel": "公测免费",
    "strengths": "深度整合Wind专业金融数据库；多智能体协同架构实现7×24自动化投研分析；支持零代码本地化部署；股票分析/宏观研究/市场监控一站式",
    "weaknesses": "需要Wind账号体系（金融从业者门槛）；非金融领域用户不适用；公测期功能仍在迭代",
    "bestFor": "金融从业者、投资研究、股票分析、宏观研究、市场监控",
    "chineseSupport": "★★★★★ 万得出品，中文金融数据覆盖广泛",
    "contextWindow": "取决于接入的模型",
    "website": "https://windclaw.bot",
    "tags": [
      "Agent",
      "金融投研",
      "专业数据",
      "多智能体",
      "7×24"
    ]
  },
  {
    "id": "dify",
    "name": "Dify",
    "company": "Dify.ai（中国/开源）",
    "category": "Agent平台",
    "pricing": "freemium",
    "priceLabel": "免费（开源）/ 企业版付费",
    "strengths": "开源可自托管（数据不出域）；可视化工作流编排；支持 100+ LLM 接入；内置 RAG 知识库引擎；声明式 YAML 配置",
    "weaknesses": "自托管需要技术能力（Docker/服务器）；企业版费用较高；UI/UX 偏技术用户",
    "bestFor": "技术团队、企业客服系统、需私有化部署的知识库应用、AI应用快速原型",
    "chineseSupport": "★★★★☆ 中文界面完善，文档中英双语",
    "contextWindow": "取决于接入的模型",
    "website": "https://dify.ai",
    "tags": [
      "Agent",
      "开源",
      "工作流",
      "多模型",
      "RAG",
      "可自托管"
    ]
  },
  {
    "id": "manus",
    "name": "Manus",
    "company": "Manus（中国/美国）",
    "category": "Agent平台",
    "pricing": "paid",
    "priceLabel": "订阅制（约 $39/月起）",
    "strengths": "任务自主规划与成果交付（不只是对话，直接产出可交付物）；能操作浏览器、文件系统等工具；适合需要AI独自完成复杂任务的场景",
    "weaknesses": "仍处邀请制阶段，使用门槛高；每月费用不低；任务执行速度较慢（需多步规划）；中文场景适配仍在优化",
    "bestFor": "单人强交付任务（数据分析报告、竞品调研、市场分析）、需要AI自主完成多步骤操作的场景",
    "chineseSupport": "★★★☆☆ 中文可用，但原生界面以英文为主",
    "contextWindow": "取决于接入的模型",
    "website": "https://manus.im",
    "tags": [
      "Agent",
      "自主任务",
      "虚拟同事",
      "交付型",
      "多步骤"
    ]
  },
  {
    "id": "n8n",
    "name": "n8n",
    "company": "n8n GmbH（德国/开源）",
    "category": "Agent平台",
    "pricing": "freemium",
    "priceLabel": "免费（开源）/ Cloud €20/月起",
    "strengths": "开源可自托管；400+ 原生集成节点（Google/Airtable/Slack等）；可视化工作流编辑器；AI Agent 节点可将 LLM 接入自动化流程",
    "weaknesses": "自托管需技术能力；Cloud版海外服务器（国内访问可能慢）；界面全英文；中文社区较小",
    "bestFor": "自动化数据同步、跨平台工作流、技术用户的AI自动化流程、企业内部流程自动化",
    "chineseSupport": "★★☆☆☆ 全英文界面和文档，中文社区资源有限",
    "contextWindow": "取决于接入的模型",
    "website": "https://n8n.io",
    "tags": [
      "Agent",
      "开源",
      "自动化",
      "工作流",
      "400+集成",
      "AI节点"
    ]
  },
  {
    "id": "jimeng",
    "name": "即梦 (Jimeng)",
    "company": "字节跳动（中国）",
    "category": "图像模型",
    "pricing": "free",
    "priceLabel": "免费使用",
    "strengths": "中文Prompt理解精准零门槛；免费额度大方；剪映/CapCut生态深度整合（生成即编辑）；操作极简适合小白",
    "weaknesses": "精细控制功能较有限（无ControlNet级功能）；复杂场景效果一般；风格库规模中等",
    "bestFor": "中文用户日常配图、社交媒体图片、短视频封面、不想折腾Prompt的普通用户",
    "chineseSupport": "★★★★★ 中文原生，理解精准",
    "contextWindow": "",
    "website": "https://jimeng.jianying.com",
    "tags": [
      "中文原生",
      "免费",
      "图像生成",
      "视频生成",
      "剪映生态"
    ]
  },
  {
    "id": "midjourney",
    "name": "Midjourney",
    "company": "Midjourney Inc.（美国）",
    "category": "图像模型",
    "pricing": "paid",
    "priceLabel": "Basic $10/月起",
    "strengths": "图像生成质量高，V7版本艺术风格突出；Niji 7动漫引擎专业；Relax Mode无限慢速生成；颜色和光影表现力受市场认可",
    "weaknesses": "无免费版；需通过Discord使用（有学习曲线）；中国访问需特殊网络环境；Prompt需要英文",
    "bestFor": "艺术创作、设计灵感、概念图、游戏原画、高品质插画",
    "chineseSupport": "★★☆☆☆ Discord界面全英文，中文Prompt需翻译",
    "contextWindow": "",
    "website": "https://www.midjourney.com",
    "tags": [
      "图像生成",
      "V7",
      "艺术风格",
      "Discord",
      "Niji动漫"
    ]
  },
  {
    "id": "dalle",
    "name": "DALL-E",
    "company": "OpenAI（美国）",
    "category": "图像模型",
    "pricing": "freemium",
    "priceLabel": "ChatGPT内置 / Plus $20/月",
    "strengths": "自然语言理解能力突出（口语化描述即可获得准确结果）；与ChatGPT深度集成，生成+编辑在同一对话完成；文字渲染优秀；操作极简无需调参",
    "weaknesses": "艺术风格选择相对有限；需科学上网；生成速度中等（10-30秒/张）",
    "bestFor": "不需要复杂Prompt的日常配图、社交媒体图片、PPT插图、概念图",
    "chineseSupport": "★★★★☆ 支持中文Prompt，英文Prompt效果更佳",
    "contextWindow": "",
    "website": "https://chat.openai.com",
    "tags": [
      "图像生成",
      "多模态",
      "自然语言",
      "文字渲染",
      "编辑"
    ]
  },
  {
    "id": "stable-diffusion",
    "name": "Stable Diffusion",
    "company": "Stability AI（英国）",
    "category": "图像模型",
    "pricing": "free",
    "priceLabel": "开源免费 / 云服务付费",
    "strengths": "完全开源，数据不出本机；ControlNet精确控制构图/姿势/深度；LoRA插件生态极丰富（可训练专属风格）；社区海量免费模型",
    "weaknesses": "需要GPU（本地部署建议8GB+显存）；Prompt门槛高（负面Prompt、采样器、步数等参数需调）；云端方案需额外付费",
    "bestFor": "技术用户、需定制化工作流的设计师、隐私敏感的图像生成、AI绘画研究者",
    "chineseSupport": "★★☆☆☆ 英文Prompt为主，中文需翻译",
    "contextWindow": "",
    "website": "https://stability.ai",
    "tags": [
      "开源",
      "本地部署",
      "可定制",
      "ControlNet",
      "LoRA社区"
    ]
  },
  {
    "id": "flux",
    "name": "FLUX",
    "company": "Black Forest Labs（德国）",
    "category": "图像模型",
    "pricing": "freemium",
    "priceLabel": "开源免费 / Pro按量付费",
    "strengths": "Stable Diffusion原班人马打造；文字渲染能力突出（招牌/UI文字精准不歪）；生成速度快；写实质感出色",
    "weaknesses": "开源版对硬件要求极高（建议24GB+显存）；第三方工具生态仍在追赶（LoRA/ControlNet支持在扩展）",
    "bestFor": "需要高精度文字渲染的设计（海报/封面/LOGO）、高质量写实图像、追求速度的专业用户",
    "chineseSupport": "★★☆☆☆ 英文为主",
    "contextWindow": "",
    "website": "https://blackforestlabs.ai",
    "tags": [
      "开源",
      "高质量",
      "文字渲染",
      "真实感",
      "快速生成"
    ]
  },
  {
    "id": "kling",
    "name": "可灵 (Kling)",
    "company": "快手（中国）",
    "category": "视频模型",
    "pricing": "free",
    "priceLabel": "免费 / 会员 ¥39/月起",
    "strengths": "中文Prompt理解精准零门槛；免费额度大方（签到+完成任务可持续白嫖）；直接生成10秒长视频；生成速度快；新手极度友好",
    "weaknesses": "复杂物理规律偶尔翻车（人物动作不自然）；默认风格偏写实，动漫/3D需额外调试；不支持精细后期编辑",
    "bestFor": "中文短视频创作者、新手入门、日常社交媒体视频、低成本视频制作",
    "chineseSupport": "★★★★★ 中文原生，理解精准",
    "contextWindow": "",
    "website": "https://kling.kuaishou.com",
    "tags": [
      "视频生成",
      "中文原生",
      "免费",
      "长视频",
      "短视频"
    ]
  },
  {
    "id": "hailuo-video",
    "name": "海螺视频 (HailuoAI)",
    "company": "稀宇科技/MiniMax（中国）",
    "category": "视频模型",
    "pricing": "freemium",
    "priceLabel": "免费 / 会员 ¥39/月起",
    "strengths": "国产AI视频黑马，中文Prompt理解精准；文生视频和图生视频双模式；与MiniMax M3同厂商技术协同；免费额度友好适合尝鲜",
    "weaknesses": "视频质量和控制力中等偏上；复杂场景一致性偶有翻车；功能丰富度中等",
    "bestFor": "中文用户尝鲜AI视频、短视频创作、MiniMax生态用户",
    "chineseSupport": "★★★★★ 中文原生，理解精准",
    "contextWindow": "",
    "website": "https://hailuoai.com",
    "tags": [
      "AI视频",
      "中文原生",
      "文生视频",
      "图生视频",
      "MiniMax"
    ]
  },
  {
    "id": "sora",
    "name": "Sora",
    "company": "OpenAI（美国）",
    "category": "视频模型",
    "pricing": "paid",
    "priceLabel": "ChatGPT Plus $20/月可用",
    "strengths": "画质出色，影视级质感；物理规律与光影细节逼真；超长连贯镜头不跳帧；复杂镜头调度能力强",
    "weaknesses": "生成耗时极长（几分钟到十几分钟/条）；价格昂贵（Pro $200/月才有完整能力）；提示词细节要求极高；新手调试困难",
    "bestFor": "影视级短片、高质量广告、追求高画质的专业创作者",
    "chineseSupport": "★★☆☆☆ 英文Prompt为主",
    "contextWindow": "",
    "website": "https://sora.com",
    "tags": [
      "视频生成",
      "影视级",
      "物理模拟",
      "超长镜头",
      "高画质"
    ]
  },
  {
    "id": "runway",
    "name": "Runway Gen-4",
    "company": "Runway（美国）",
    "category": "视频模型",
    "pricing": "freemium",
    "priceLabel": "免费体验 / Standard $15/月起",
    "strengths": "功能丰富（视频生成+运动笔刷+局部修改+音频生成）；出片速度快且稳定；专业后期工具完善；Gen-4画质大幅提升",
    "weaknesses": "中文Prompt理解弱（需翻译英文）；免费额度极少；高级功能需订阅较贵套餐；无永久买断",
    "bestFor": "需要稳定量产短视频的创作者、需要精细后期调整的专业用户、商业视频制作",
    "chineseSupport": "★★☆☆☆ 英文为主，中文Prompt需翻译",
    "contextWindow": "",
    "website": "https://runwayml.com",
    "tags": [
      "视频生成",
      "专业工具",
      "运动笔刷",
      "音频生成",
      "局部修改"
    ]
  },
  {
    "id": "pika",
    "name": "Pika",
    "company": "Pika Labs（美国）",
    "category": "视频模型",
    "pricing": "freemium",
    "priceLabel": "免费 / Pro $10/月起",
    "strengths": "玩法多样（特效/鬼畜/局部修改/风格迁移）；界面极简上手快（5分钟学会）；娱乐性强适合社交媒体；价格友好（入门$10/月）",
    "weaknesses": "非量产级工具；画质中等偏上；复杂场景一致性一般；中文支持弱",
    "bestFor": "趣味短视频、社交媒体特效、娱乐向内容创作、不想折腾的轻度用户",
    "chineseSupport": "★★☆☆☆ 英文界面和Prompt",
    "contextWindow": "",
    "website": "https://pika.art",
    "tags": [
      "视频生成",
      "特效",
      "趣味",
      "易用",
      "局部修改"
    ]
  },
  {
    "id": "veo",
    "name": "Veo",
    "company": "Google DeepMind（美国）",
    "category": "视频模型",
    "pricing": "freemium",
    "priceLabel": "Gemini Ultra $249.99/月内置",
    "strengths": "Google DeepMind技术背书底子厚；与Gemini深度集成（一条Prompt图+视频同时出）；生成质量与Sora同级；影视级视觉效果",
    "weaknesses": "价格门槛极高（需Ultra $249.99/月解锁完整能力）；国内直接访问受限；中文支持一般；单独使用时功能较有限",
    "bestFor": "Google生态重度用户、需要图+视频一站式生成的专业创作者、预算充足的影视制作",
    "chineseSupport": "★★☆☆☆ 英文Prompt为主",
    "contextWindow": "",
    "website": "https://deepmind.google/technologies/veo/",
    "tags": [
      "视频生成",
      "Google生态",
      "影视级",
      "多模态",
      "Gemini集成"
    ]
  },
  {
    "id": "tongyi-lingma",
    "name": "通义灵码",
    "company": "阿里巴巴（中国）",
    "category": "代码模型",
    "pricing": "free",
    "priceLabel": "完全免费",
    "strengths": "个人版完全免费无隐藏收费；中文代码注释和对话生成精准；VS Code/JetBrains插件支持；阿里云生态集成（代码→部署一键上云）",
    "weaknesses": "代码补全质量中等（英文项目表现有提升空间）；高级功能（安全审计等）需付费企业版；更新频率中等",
    "bestFor": "中文开发者、学生党、阿里云用户、对免费有刚需的个人和团队",
    "chineseSupport": "★★★★★ 中文原生，代码注释和对话全中文",
    "contextWindow": "",
    "website": "https://tongyi.aliyun.com/lingma?userCode=zpk45rgx",
    "tags": [
      "免费",
      "中文原生",
      "阿里生态",
      "IDE插件",
      "企业级"
    ]
  },
  {
    "id": "comate",
    "name": "文心快码 (Comate)",
    "company": "百度（中国）",
    "category": "代码模型",
    "pricing": "free",
    "priceLabel": "完全免费",
    "strengths": "个人版完全免费；中文代码注释和文档生成质量好；VS Code/IntelliJ插件支持完善；百度智能云生态集成",
    "weaknesses": "知名度相对低；代码补全质量中等偏上；开源社区相对冷清；对非百度技术栈支持一般",
    "bestFor": "中文开发者、百度云用户、需要免费代码助手且对百度生态有依赖的个人开发者",
    "chineseSupport": "★★★★★ 中文原生",
    "contextWindow": "",
    "website": "https://comate.baidu.com",
    "tags": [
      "免费",
      "中文原生",
      "百度生态",
      "IDE插件",
      "代码审查"
    ]
  },
  {
    "id": "codex",
    "name": "Codex CLI",
    "company": "OpenAI（美国）",
    "category": "代码模型",
    "pricing": "freemium",
    "priceLabel": "ChatGPT Plus $20/月可用",
    "strengths": "2026年最火的终端AI编程Agent；开源可审查代码；Plan模式先预览再执行；Skills插件系统可扩展；与ChatGPT订阅共享额度",
    "weaknesses": "Plus用户额度有限（集中工作1-2小时可能耗尽）；API超额使用额外计费；无图形界面纯终端操作",
    "bestFor": "终端党、全栈项目开发、需要AI自主读代码库+写代码+跑测试的工程师",
    "chineseSupport": "★★★☆☆ 支持中文指令，界面英文为主",
    "contextWindow": "",
    "website": "https://github.com/openai/codex",
    "tags": [
      "终端Agent",
      "开源",
      "Git感知",
      "Plan模式",
      "Skills系统"
    ]
  },
  {
    "id": "claude-code",
    "name": "Claude Code",
    "company": "Anthropic（美国）",
    "category": "代码模型",
    "pricing": "freemium",
    "priceLabel": "Claude Pro $20/月起",
    "strengths": "Claude Fable 5驱动，编程能力突出；CLAUDE.md支持项目级记忆上下文；MCP协议可集成第三方工具；Plan模式安全可控；擅长处理大型代码库",
    "weaknesses": "Pro版额度有限不适合重度使用；无图形界面纯终端；Fable 5最新，生态工具在追赶",
    "bestFor": "终端党、超大型项目重构、需要深度理解项目架构的复杂开发",
    "chineseSupport": "★★★☆☆ 支持中文指令，界面英文为主",
    "contextWindow": "",
    "website": "https://code.claude.com",
    "tags": [
      "终端Agent",
      "Plan模式",
      "MCP集成",
      "项目记忆",
      "Fable 5"
    ]
  },
  {
    "id": "github-copilot",
    "name": "GitHub Copilot",
    "company": "GitHub/微软（美国）",
    "category": "代码模型",
    "pricing": "paid",
    "priceLabel": "Individual $10/月",
    "strengths": "VS Code/JetBrains等主流IDE深度集成；2026年已支持Claude+GPT双模型驱动；代码补全质量出色；GitHub PR/Issue无缝衔接；学生免费",
    "weaknesses": "纯付费（个人$10/月）；代码对话功能较基础；国内访问GitHub可能不稳定；不支持多文件Agent式编辑",
    "bestFor": "GitHub重度用户、全栈开发者、学生党（免费）、企业团队",
    "chineseSupport": "★★★☆☆ 代码注释支持中文，界面英文为主",
    "contextWindow": "",
    "website": "https://github.com/features/copilot",
    "tags": [
      "代码补全",
      "IDE插件",
      "GitHub生态",
      "多模型",
      "学生免费"
    ]
  },
  {
    "id": "cursor",
    "name": "Cursor",
    "company": "Anysphere（美国）",
    "category": "代码模型",
    "pricing": "freemium",
    "priceLabel": "免费 / Pro $20/月",
    "strengths": "内置AI的完整IDE（无需插件）；多文件编辑能力强（修改一处自动同步关联文件）；Agent模式可自主修复Bug、重构代码；上下文理解优于插件类工具",
    "weaknesses": "免费版额度有限；Pro $20/月比Copilot贵；国内需代理访问；非VS Code生态需迁移习惯；偶尔假死需重启",
    "bestFor": "追求深度AI编程体验的开发者、需要AI理解整个项目的复杂开发",
    "chineseSupport": "★★★☆☆ 代码对话可用中文命令，界面英文",
    "contextWindow": "",
    "website": "https://cursor.com",
    "tags": [
      "AI IDE",
      "代码生成",
      "多文件编辑",
      "Agent模式",
      "对话编程"
    ]
  },
  {
    "id": "windsurf",
    "name": "Windsurf",
    "company": "Codeium（美国）",
    "category": "代码模型",
    "pricing": "freemium",
    "priceLabel": "免费 / Pro $15/月",
    "strengths": "免费版比Cursor/Copilot大方；Cascade模式可跨多文件理解和编辑；IDE体验轻量流畅不卡顿；上手快学习曲线低",
    "weaknesses": "插件生态规模有限；高级功能需Pro；Agent模式功能深度中等",
    "bestFor": "预算有限的开发者、需要免费好用的AI编程工具、轻量级IDE用户",
    "chineseSupport": "★★★☆☆ 代码对话支持中文，界面英文",
    "contextWindow": "",
    "website": "https://codeium.com/windsurf",
    "tags": [
      "AI IDE",
      "代码补全",
      "Cascade",
      "多文件",
      "免费友好"
    ]
  },
  {
    "id": "notion",
    "name": "Notion AI",
    "company": "Notion Labs（美国）",
    "category": "AI辅助工具",
    "pricing": "freemium",
    "priceLabel": "免费 / Plus $10/月",
    "strengths": "All-in-One工作空间 + AI写作/改写/翻译集成。中文UI支持完善，国内无需科学上网，是目前中文用户最友好的AI笔记+写作工具",
    "weaknesses": "免费版AI次数有限；中文写作质量不及Kimi/通义；高级功能需付费",
    "bestFor": "AI写作辅助、个人知识库搭建、团队协作文档、项目管理",
    "chineseSupport": "★★★★☆ 中文UI + 中文AI，偶有翻译感",
    "contextWindow": "",
    "website": "https://affiliate.notion.so/YOUR-PARTNER-CODE",
    "tags": [
      "AI写作",
      "知识库",
      "日历",
      "项目管理",
      "All-in-One"
    ]
  },
  {
    "id": "canva",
    "name": "Canva Pro（可画）",
    "company": "Canva（澳大利亚）",
    "category": "AI辅助工具",
    "pricing": "freemium",
    "priceLabel": "免费 / Pro $12.99/月",
    "strengths": "中文品牌名'可画'，国内知名度高。AI文字生图、智能抠图、批量设计功能丰富，对国内中文用户友好",
    "weaknesses": "AI图像生成质量不提Midjourney/DALL-E；高级AI功能需Pro订阅",
    "bestFor": "社交媒体配图、PPT设计、Logo制作、短视频封面、海报设计",
    "chineseSupport": "★★★★★ 中文UI + 大量中文模板 + 中国团队运营",
    "contextWindow": "",
    "website": "https://partner.canva.com/YOUR-PARTNER-CODE",
    "tags": [
      "设计",
      "AI图像",
      "演示文稿",
      "视频",
      "品牌套件"
    ]
  },
  {
    "id": "grammarly",
    "name": "Grammarly",
    "company": "Grammarly（美国/乌克兰）",
    "category": "AI辅助工具",
    "pricing": "freemium",
    "priceLabel": "免费 / Premium $12/月",
    "strengths": "全球最成熟的AI写作助手，适合留学生、外企打工人、跨境电商写手。插件覆盖Chrome/Word/Google Docs全场景",
    "weaknesses": "主要面向英文写作；中文语法检查支持有限；免费版功能较基础",
    "bestFor": "留学生论文润色、外企邮件写作、跨境电商listing优化、英文创作",
    "chineseSupport": "★★☆☆☆ 英文为主，中文语法不支持",
    "contextWindow": "",
    "website": "https://grammarly.go2cloud.org/YOUR-PARTNER-CODE",
    "tags": [
      "语法检查",
      "AI改写",
      "查重",
      "语气",
      "商务"
    ]
  },
  {
    "id": "jasper",
    "name": "Jasper AI",
    "company": "Jasper（美国）",
    "category": "AI辅助工具",
    "pricing": "freemium",
    "priceLabel": "7天免费 / Creator $49/月",
    "strengths": "企业级AI写作工具，品牌声音训练功能独有。平均客户生命周期长，适合中长期获客",
    "weaknesses": "价格高（$49/月起）；中文写作能力主要面向英文母语优化；面向专业用户，学习曲线陡",
    "bestFor": "英文营销团队、SEO写手、跨境电商、博客运营、广告文案",
    "chineseSupport": "★★☆☆☆ 英文为主，品牌声音不支持中文",
    "contextWindow": "",
    "website": "https://partnerstack.com/go/jasper/YOUR-PARTNER-CODE",
    "tags": [
      "AI写作",
      "SEO",
      "品牌声音",
      "模板",
      "企业"
    ]
  },
  {
    "id": "elevenlabs",
    "name": "ElevenLabs",
    "company": "ElevenLabs（美国/波兰）",
    "category": "AI辅助工具",
    "pricing": "freemium",
    "priceLabel": "免费 / Starter $5/月",
    "strengths": "AI语音合成工具，支持70+语言（含中文普通话/粤语）。声音克隆只需1分钟录音，$5/月低门槛起步",
    "weaknesses": "中文配音偶有机器感；免费版字符数有限；高级声音设计需要Pro版",
    "bestFor": "短视频配音、有声书录制、播客制作、课程语音、多语言内容本地化",
    "chineseSupport": "★★★★☆ 中文普通话/粤语支持，语音自然度高",
    "contextWindow": "",
    "website": "https://partnerstack.com/go/elevenlabs/YOUR-PARTNER-CODE",
    "tags": [
      "声音克隆",
      "TTS",
      "配音",
      "声音设计",
      "有声书"
    ]
  },
  {
    "id": "synthesia",
    "name": "Synthesia",
    "company": "Synthesia（英国）",
    "category": "AI辅助工具",
    "pricing": "paid",
    "priceLabel": "Starter $29/月（$22/月按年）",
    "strengths": "AI数字人播报领域广泛使用，140+AI主播形象+120+语言配音。企业场景深度覆盖，适合专业级AI视频制作",
    "weaknesses": "无免费版（仅Demo试用）；中文主播数量有限；内容定制度不如真人拍摄",
    "bestFor": "企业培训视频、产品演示、多语言市场内容、内部沟通",
    "chineseSupport": "★★★☆☆ 有中文AI主播，但数量少于英文，普通话配音自然",
    "contextWindow": "",
    "website": "https://partnerstack.com/go/synthesia/YOUR-PARTNER-CODE",
    "tags": [
      "AI主播",
      "视频",
      "多语言",
      "培训",
      "企业"
    ]
  },
  {
    "id": "rytr",
    "name": "Rytr",
    "company": "Rytr（美国）",
    "category": "AI辅助工具",
    "pricing": "freemium",
    "priceLabel": "免费 / Unlimited $9/月",
    "strengths": "AI写作工具中价格最低（$9/月），40+写作模板覆盖博客/邮件/广告/社媒。适合预算有限的个人和小团队",
    "weaknesses": "写作质量中等偏上；无中文优化；免费版字数太少（10k）",
    "bestFor": "预算有限的英文写作者、博客新手、社交媒体文案、低成本AI写作入",
    "chineseSupport": "★★☆☆☆ 英文为主，中文输出质量一般",
    "contextWindow": "",
    "website": "https://partnerstack.com/go/rytr/YOUR-PARTNER-CODE",
    "tags": [
      "AI写作",
      "超低价",
      "40+模板",
      "查重",
      "SEO"
    ]
  },
  {
    "id": "surferseo",
    "name": "Surfer SEO",
    "company": "Surfer（波兰）",
    "category": "AI辅助工具",
    "pricing": "paid",
    "priceLabel": "Essential $89/月（$69/月按年）",
    "strengths": "AI驱动的SEO内容优化工具，提供SERP分析 + NLP关键词建议 + 内容评分功能",
    "weaknesses": "价格较高（$89/月起）；中文SEO支持有限；学习曲线陡峭",
    "bestFor": "英文博客SEO优化、电商listing优化、内容团队SEO培训、独立站运营",
    "chineseSupport": "★★☆☆☆ 英文为主，中文关键词分析支持有限",
    "contextWindow": "",
    "website": "https://partnerstack.com/go/surferseo/YOUR-PARTNER-CODE",
    "tags": [
      "SEO",
      "AI内容",
      "SERP分析",
      "审计",
      "NLP"
    ]
  }
];
