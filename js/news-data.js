/**
 * AI家AI户 · 每日AI资讯数据
 * 结构：每个元素为 { date, display, weekday, items:[ {title,url,summary,source} ] }，整体赋值给 window.AIHomeNews。
 * 每条 items 即一条快讯；date 为 ISO 日期（YYYY-MM-DD），display/weekday 仅用于页面展示。
 * 工作日更新，每天数条。新增一天只需在最前面插入一个 day 对象即可。
 * 新闻按 date 字段计算，超过 45 天自动下线（由每日自动化 prepend 时一并裁剪）。
 * 仙侠站数据由 xianxia/scripts/convert_news.py 解析本文件自动同步，请勿手改 xianxia 端。
 */
window.AIHomeNews = [
{
    "date": "2026-09-30",
    "display": "9月30日",
    "weekday": "周三",
    "items": [
        {
            "title": "OpenAI DevDay 2026 发布25项更新：常驻智能体 Dots 与 GPT-6.1 Sol",
            "url": "https://dy.163.com/article/L82CFOBN051180F7.html",
            "summary": "OpenAI 开发者大会连发25项更新，含7×24常驻智能体 Dots 与价格仅旗舰五分之一的 GPT-6.1 Sol。",
            "source": "智东西 / 网易"
        },
        {
            "title": "OpenAI 因安全未达标取消发布 GPT-6.1 Astra",
            "url": "https://news.qq.com/rain/a/20260929A0E1I700",
            "summary": "OpenAI 证实下一代模型 GPT-6.1 Astra 未达内部安全与对齐标准，决定不予发布，行业罕见。",
            "source": "腾讯新闻 / 读创财经"
        },
        {
            "title": "AMD 82亿美元收购李飞飞创办的 World Labs",
            "url": "https://new.qq.com/rain/a/20260929A08STT00",
            "summary": "AMD 以约82亿美元全股票收购李飞飞的空间智能公司 World Labs，李飞飞出任执行副总裁兼首席科学家。",
            "source": "腾讯新闻 / 财联社"
        },
        {
            "title": "CNNIC：我国生成式人工智能用户规模突破7亿",
            "url": "https://www.chinanews.com.cn/cj/2026/09-29/10705724.shtml",
            "summary": "CNNIC 报告显示上半年我国生成式AI用户破7亿、普及率超50%，智能算力同比增177%。",
            "source": "中国新闻网"
        },
        {
            "title": "华为开源 openPangu-2.0 全套训练代码",
            "url": "https://www.huawei.com/cn/news/2026/9/open-pangu",
            "summary": "华为开源 openPangu-2.0 预训练、SFT 与后训练 RL 代码，国产大模型从开放权重走向开放全流程。",
            "source": "华为官方"
        },
        {
            "title": "逐际动力联手东土科技，人形机器人装上全国产电子架构",
            "url": "https://m.21jingji.com/article/20260929/herald/af2d0b02d6e7593ed4a2af7d05a191b5.html",
            "summary": "逐际动力与东土科技发布全国产电子架构人形机器人，操作系统、总线、AI芯片整体替换为国产方案。",
            "source": "21世纪经济报道"
        },
        {
            "title": "DeepSeek Harness v0.2 桌面端发布，开箱即用",
            "url": "https://zhidx.com/p/598364.html",
            "summary": "DeepSeek 推出 Harness v0.2 桌面端，提供 Mac/Win 安装包与插件管理，降低使用门槛。",
            "source": "智东西"
        },
        {
            "title": "英伟达发布 Open Agent Safety 平台，毫秒级隔离失控智能体",
            "url": "https://m.thepaper.cn/newsDetail_forward_34165796",
            "summary": "英伟达推出 OpenShell 与 Sentry，基于 BlueField-4 DPU 毫秒级隔离越界智能体。",
            "source": "澎湃新闻"
        },
        {
            "title": "IDC：上半年全球人形机器人出货增超4倍，中国厂商占95%",
            "url": "https://www.toutiao.com/article/7690833907171721763/",
            "summary": "IDC 报告显示上半年全球人形机器人出货近2.5万台同比增432%，中国厂商占比超95%。",
            "source": "中新经纬"
        },
        {
            "title": "国新办发布会：十五五将体系化攻关人工智能等前沿领域",
            "url": "https://www.gov.cn/lianbo/202609/content_7082415.htm",
            "summary": "国新办介绍十五五科技强国建设，明确把人工智能、量子科技、生物制造等列为前沿攻关重点。",
            "source": "中国政府网 / 新华社"
        }
    ]
},
{
    "date": "2026-09-25",
    "display": "9月25日",
    "weekday": "周五",
    "items": [
        {
            "title": "腾讯元宝鸿蒙版正式上线，首发搭载混元Hy4 preview",
            "url": "https://tech.ifeng.com/c/8whSIUWjncS",
            "summary": "腾讯元宝鸿蒙版正式上架，首发搭载混元Hy4 preview并支持专家模式，内置文档精读、识图、AI写作等五项核心能力。",
            "source": "凤凰网科技"
        },
        {
            "title": "OpenAI 个人智能体 Aeon 曝光，正面对标 Meta Muse",
            "url": "https://agihunt.info/en/p/1a0cd5ab9ee76d5dae84d6fe0e0",
            "summary": "OpenAI 个人智能体 Aeon 曝光，主打桌面自动化，9/29 前发布对标 Meta Muse。",
            "source": "AGI Hunt / 网易前沿快讯"
        },
        {
            "title": "ChatGPT Voice 接入 GPT-6，可语音操作邮件日历与 Slack",
            "url": "https://www.163.com/dy/article/L7KS6BGL05561FZY.html",
            "summary": "ChatGPT Voice 全球升级切到 GPT-6，首次接入邮件、日历、Slack 并能语音办事。",
            "source": "网易"
        },
        {
            "title": "谷歌为 Gemini 3.8 Live 加入 Live Avatar 数字人",
            "url": "https://new.qq.com/rain/a/20260925A036O800",
            "summary": "谷歌为 Gemini 3.8 Live 加数字人 Live Avatar，支持实时唇形同步与 97 种语言。",
            "source": "腾讯新闻 / IT之家"
        },
        {
            "title": "Anthropic 披露 Claude 自主发现类 CRISPR 新酶系统 ART",
            "url": "https://www.aibase.com/news/31321",
            "summary": "Anthropic 用约 950 个 Claude 智能体 21 小时自主发现类 CRISPR 新酶系统 ART。",
            "source": "AIBase"
        },
        {
            "title": "小米公开 MiMo-V3 核心架构 HySparse2",
            "url": "https://news.qq.com/rain/a/20260923A0CPWN00",
            "summary": "小米公开 MiMo-V3 架构 HySparse2，百万 token 下预填充计算降 5 倍、KV 缓存缩 4.5 倍。",
            "source": "腾讯新闻 / 驱动中国"
        },
        {
            "title": "Kimi 发布 Agent 模式 OK Computer 并开启灰度",
            "url": "https://news.qq.com/rain/a/20250925A05P7P00",
            "summary": "Kimi 发布 Agent 模式 OK Computer 灰度，可操作虚拟电脑建站、做数据分析与 PPT。",
            "source": "腾讯新闻 / 每日经济新闻"
        },
        {
            "title": "百度蒸汽机上线通用 AI 长视频生成，支持无限长度",
            "url": "https://www.geekpark.net/news/354469",
            "summary": "百度蒸汽机升级发布通用 AI 长视频生成功能，采用流式生成技术突破时长限制，可生成无限长度视频并中途改写 Prompt。",
            "source": "极客公园"
        },
        {
            "title": "智元×长隆全球首个具身智能主题乐园开园",
            "url": "https://www.ifnews.com/news.html?aid=872714",
            "summary": "智元与长隆在横琴打造全球首个大规模具身智能主题乐园，超 300 台机器人上岗，第 2 万台 A3 Ultra 同日交付。",
            "source": "国际金融报"
        },
        {
            "title": "谷歌/OpenAI/Anthropic 拟共建前沿 AI 标准局 SAFA",
            "url": "https://guba.eastmoney.com/news,usgoogl,1777715728.html",
            "summary": "谷歌、OpenAI 与 Anthropic 拟组建 SAFA，为前沿模型定第三方安全测试与事故上报标准。",
            "source": "东方财富 / 财联社"
        }
    ]
},
{
    "date": "2026-09-24",
    "display": "9月24日",
    "weekday": "周四",
    "items": [
        {
            "title": "马斯克：两到三年内中国就能补齐算力缺口",
            "url": "https://news.qq.com/rain/a/20260924A03EM700",
            "summary": "马斯克称中国大模型单位算力产出接近全球顶尖，预计两三年内靠光刻与芯片制造补齐算力缺口。",
            "source": "每日经济新闻"
        },
        {
            "title": "梁文锋署名，DeepSeek 公开大规模 Agent 训练沙箱论文",
            "url": "https://news.qq.com/rain/a/20260924A03OES00",
            "summary": "DeepSeek 发布 Dsec 论文，单日服务 300 万个沙箱、峰值并发超 38 万，支撑 V4.1 强化学习训练。",
            "source": "每日经济新闻"
        },
        {
            "title": "千问发布 Qwen-Audio-3.1 系列，语音模型全线降价",
            "url": "https://news.qq.com/rain/a/20260924A03EMV00",
            "summary": "千问推出五款语音模型覆盖识别、合成、实时交互与创作，ASR 降价 95%、Realtime 降约 85%。",
            "source": "每日经济新闻"
        },
        {
            "title": "OpenAI 与 Anthropic 掌门人联合国呼吁加强 AI 安全合作",
            "url": "https://www.toutiao.com/article/7688880591923675675/",
            "summary": "奥尔特曼与阿莫代伊在安理会呼吁国际合作应对 AI 风险，特朗普则反对国际协调。",
            "source": "每日经济新闻"
        },
        {
            "title": "小鹏首条人形机器人生产线落地广东，年底量产",
            "url": "https://www.stdaily.com/web/gdxw/2026-09/22/content_586133.html",
            "summary": "何小鹏透露产线本月落地广东，全球首次实现机器人自动化生产机器人，明年二季度国内交付。",
            "source": "科技日报"
        },
        {
            "title": "蚂蚁百灵开源 UI 设计模型 Ming-Image-0.1-Design",
            "url": "https://news.qq.com/rain/a/20260923A0AK0300",
            "summary": "两个 6B 模型分别生成 UI 与拆解透明图层，UI/UX 专项评测开源第一，权重以 MIT 协议开放。",
            "source": "腾讯新闻"
        },
        {
            "title": "手机端侧生成式 AI 备案增至 10 款，荣耀小米阶跃在列",
            "url": "https://www.toutiao.com/article/7688669349187502628/",
            "summary": "网信办新增 YOYO Claw、Xiaomi miclaw、阶跃终端 AI 三款手机端侧服务备案，累计达 10 款。",
            "source": "新京报"
        },
        {
            "title": "中国具身智能进入「实干时代」，Galbot S1 工厂常态化作业",
            "url": "https://3w.huanqiu.com/a/de583b/4TKfcKvMqUj?agt=23",
            "summary": "银河通用 Galbot S1 在宁德时代产线 7×24 连续作业超 3 个月，商业部署规模已破千台。",
            "source": "环球时报"
        },
        {
            "title": "云栖大会：阿里 Qwen4 已在训练，参数将扩至 5 至 10 万亿",
            "url": "https://www.toutiao.com/article/7688768283075543590/",
            "summary": "阿里披露下一代 Qwen4 已进入训练，未来版本参数达 5T—10T，并发布真武 V900 训推一体芯片。",
            "source": "今日头条"
        },
        {
            "title": "阿里云首款智能体电脑 Qwen Book 云栖亮相",
            "url": "https://m.nbd.com.cn/articles/2026-09-23/4589778.html",
            "summary": "Qwen Book 配全局 AI 按键与语音手写笔，主打跨应用智能体任务，并与 Omarchy 探索 Agent 桌面。",
            "source": "每日经济新闻"
        }
    ]
},
{
    "date": "2026-09-21",
    "display": "9月21日",
    "weekday": "周一",
    "items": [
        {
            "title": "阶跃星辰发布 Step 5 Preview，推理与多模态能力大幅跃升",
            "url": "https://news.qq.com/rain/a/20260920A05FD400",
            "summary": "阶跃星辰推出Step 5 Preview大模型，推理与多模态能力较上代大幅跃升。",
            "source": "腾讯新闻 / 每日经济新闻"
        },
        {
            "title": "阿里达摩院 DAMO RADAR 医学影像模型登《Science》",
            "url": "https://www.ithome.com/1/004/178.htm",
            "summary": "阿里达摩院DAMO RADAR多癌早筛影像模型登Science，刷新多项基准。",
            "source": "IT之家 / 人民网"
        },
        {
            "title": "微信开源 WeKnora 企业知识框架，统一接入文档与多种模型",
            "url": "https://github.com/Tencent/WeKnora",
            "summary": "微信开源WeKnora企业知识框架，统一接入文档、向量库与多种大模型。",
            "source": "腾讯 / GitHub"
        },
        {
            "title": "网信办拟禁止向未成年人提供 AI 虚拟陪伴等生成式服务",
            "url": "https://www.nfnews.com/content/A6EBpq4xoK.html",
            "summary": "网信办征求意见稿拟禁止向未成年人提供AI虚拟陪伴等生成式服务。",
            "source": "南方都市报"
        },
        {
            "title": "剪映发布 Hub 与剪映助手 Agent，一句话生成带素材成片",
            "url": "https://www.stdaily.com/web/gdxw/2026-09/20/content_584720.html",
            "summary": "剪映发布Hub与剪映助手Agent，一句话指令即可生成带素材的成片。",
            "source": "科技日报"
        },
        {
            "title": "阿里开源 Qwen-Image-2.1 图像模型，细节与文字渲染再升级",
            "url": "https://qwen.ai/blog?id=qwen-image-2.1",
            "summary": "阿里开源Qwen-Image-2.1图像模型，细节质感与中文文字渲染再升级。",
            "source": "阿里通义千问官方"
        },
        {
            "title": "阿里发布 Qwen3.8-Omni-Flash 全模态模型，实时音视频交互",
            "url": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
            "summary": "阿里发布Qwen3.8-Omni-Flash全模态模型，支持实时音视频与文本交互。",
            "source": "阿里通义千问官方"
        },
        {
            "title": "华为昇腾 960 NPO 超节点发布，单柜算力再上台阶",
            "url": "https://www.news.cn/fortune/20260920/2b08fccf65b046a7b004649520ecb3a3/c.html",
            "summary": "华为发布昇腾960 NPO超节点，单柜算力与互联带宽较上代大幅提升。",
            "source": "新华网"
        },
        {
            "title": "硅基流动完成 B+/C 轮融资近 29 亿元，加速 AI 基础设施",
            "url": "https://www.163.com/dy/article/L795D6FK0512B07B.html",
            "summary": "硅基流动完成B+/C轮融资近29亿元，加码大模型推理与AI基础设施。",
            "source": "每日经济新闻"
        },
        {
            "title": "长鑫科技第五代 DRAM（G5）量产，国产存储再突破",
            "url": "https://news.qq.com/rain/a/20260920A09KPG00",
            "summary": "长鑫科技第五代DDR5 G5 DRAM量产，国产高端存储再获关键突破。",
            "source": "腾讯新闻 / 证券时报"
        }
    ]
},
{
    "date": "2026-09-18",
    "display": "9月18日",
    "weekday": "周五",
    "items": [
        {
            "title": "OpenAI 推出 Astra for Law 法律版，配 2.3 亿条法律索引与 26 个插件",
            "url": "https://openai.com/index/astra-for-law/",
            "summary": "OpenAI发布GPT-6 Astra法律版，配2.3亿法律URL索引与26个生态插件。",
            "source": "OpenAI 官方"
        },
        {
            "title": "Anthropic 开放生命科学验证计划，向合规生物团队放开模型",
            "url": "https://www.anthropic.com/news/life-sciences-verification-program",
            "summary": "Anthropic推生命科学验证计划，向合规生物团队开放Mythos/Opus/Sonnet。",
            "source": "Anthropic 官方"
        },
        {
            "title": "xAI Grok Voice 登陆 fal 平台，0.7 秒响应支持 25+ 语言",
            "url": "https://fal.ai/grok-voice",
            "summary": "xAI将Grok Voice语音到语音智能体上线fal，0.7秒响应、支持25+语言。",
            "source": "fal.ai"
        },
        {
            "title": "腾讯开源 BrowserSkill 0.3.0，借用户浏览器帮 Agent 自动操作",
            "url": "https://ai-tldr.dev/tools/browserskill",
            "summary": "腾讯BrowserSkill 0.3.0新增canvas与远程网关，借已登录浏览器驱动Agent。",
            "source": "腾讯 / GitHub"
        },
        {
            "title": "小米 MiMo-V2.6 公开强化学习训练仪表盘，直播训练全过程",
            "url": "https://mimo.xiaomi.com/rl",
            "summary": "小米公开MiMo-V2.6强化学习训练仪表盘，累计成本已超128万美元。",
            "source": "小米 / 通信产业报"
        },
        {
            "title": "谷歌开放 Home MCP，允许 Claude/ChatGPT 等 Agent 控制智能家居",
            "url": "https://www.unite.ai/google-opens-home-mcp-early-access-to-ai-agents-for-smart-home-control",
            "summary": "谷歌开放Home MCP早期访问，允许第三方Agent经MCP控制智能家居设备。",
            "source": "Unite.AI / 谷歌"
        }
    ]
},
{
    "date": "2026-09-17",
    "display": "9月17日",
    "weekday": "周四",
    "items": [
        {
            "title": "谷歌发布 Gemini 3.8 Live 实时语音模型，可后台调工具、支持97种语言",
            "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/",
            "summary": "谷歌发布Gemini 3.8 Live实时语音模型，可后台调工具、支持97种语言切换。",
            "source": "谷歌官方"
        },
        {
            "title": "阿里 Qwen3.8-27B 登顶 Hugging Face 全球最受欢迎开源模型",
            "url": "https://www.toutiao.com/article/7686291390255186447/",
            "summary": "阿里Qwen3.8-27B超越FLUX、DeepSeek等，成Hugging Face史上最受欢迎开源模型。",
            "source": "今日头条"
        },
        {
            "title": "Anthropic 合并 Claude Chat 与 Cowork 为「一个 Claude」，内置 Docs/Slides/Design",
            "url": "https://www.cnbeta.com.tw/articles/tech/1578298.htm",
            "summary": "Anthropic将聊天与Cowork合一，新增Docs/Slides/Design，模型自动判任务模式。",
            "source": "cnBeta"
        },
        {
            "title": "飞书 8.0 原生集成「豆包工作伙伴」团队智能体",
            "url": "https://www.stdaily.com/web/gdxw/2026-09/16/content_581901.html",
            "summary": "飞书8.0全面适配Agent，原生融合豆包工作，推团队智能体豆包工作伙伴。",
            "source": "科技日报"
        },
        {
            "title": "vivo 发布四款蓝心大模型与系统级蓝心 Harness",
            "url": "https://news.qq.com/rain/a/20260916A05VSA00",
            "summary": "vivo开发者大会发四款蓝心大模型与系统级Harness，接入6000+原子技能。",
            "source": "腾讯新闻"
        },
        {
            "title": "蚂蚁开源大模型安全护栏 SingProbe Infra，边生成边识别风险",
            "url": "https://news.qq.com/rain/a/20260916A0CSHQ00",
            "summary": "蚂蚁开源内生式安全护栏SingProbe，边生成边识别风险，已适配29个开源模型。",
            "source": "腾讯新闻"
        },
        {
            "title": "零跑技术日发布完全自研具身智能机器人",
            "url": "https://www.stcn.com/article/detail/4188068.html",
            "summary": "零跑技术日展示完全自研机器人，朱江明称能赚钱的机器人才拿得出手。",
            "source": "证券时报"
        },
        {
            "title": "OpenAI 建立模型失配披露框架，首发 6 份异常行为报告",
            "url": "https://www.unite.ai/openai-launches-misalignment-reporting-framework-with-six-incident-reports",
            "summary": "OpenAI发布模型失配披露框架与6份异常行为报告，覆盖训练到部署全周期。",
            "source": "OpenAI 官方 / Unite.AI"
        },
        {
            "title": "香港首份五年规划将 AI 列为重要产业，筹建「AI 城市大脑」",
            "url": "https://k.sina.com.cn/article_5953466437_162dab0450670bcnys.html",
            "summary": "香港首份五年规划与施政报告同日发布，把AI列重要产业并筹建AI城市大脑。",
            "source": "新浪 / 香港政府新闻网"
        },
        {
            "title": "豆包 2.1 Pro 更新至 0915 版，强化证据溯源、Token 成本降三成",
            "url": "https://www.toutiao.com/article/7686024913283252736/",
            "summary": "豆包2.1 Pro更新0915版，强化证据溯源降幻觉，图/视频推理Token降三成。",
            "source": "环球网 / 今日头条"
        }
    ]
},
{
    "date": "2026-09-16",
    "display": "9月16日",
    "weekday": "周三",
    "items": [
        {
            "title": "国常会部署加强算力网等规划建设，机构称国产AI算力兑现元年",
            "url": "https://cls.cn/detail/2367123",
            "summary": "国常会要求加强算力网规划建设，机构称2026年国产AI算力迎兑现元年。",
            "source": "财联社"
        },
        {
            "title": "优必选全球首个万台级工业人形机器人工厂投产，每10分钟下线1台",
            "url": "https://gu.qq.com/resources/shy/news/detail-v2/index.html?t=1#/index?_tentrees_trans=0&id=SN20260916070525950a8ef6",
            "summary": "优必选工业人形机器人超级智慧工厂投产，全球首个万台级、每10分钟下线1台。",
            "source": "每日经济新闻"
        },
        {
            "title": "国产AI芯片中报盘点：谁真正赚到钱？",
            "url": "https://new.qq.com/rain/a/20260913A08RJ400",
            "summary": "年中报披露国产AI芯片厂商业绩分化，谁真正赚到钱引发关注。",
            "source": "腾讯新闻"
        },
        {
            "title": "DeepSeek一口气扩招150人，加码下一代模型与算力研发",
            "url": "https://new.qq.com/rain/a/20260913A088R200",
            "summary": "DeepSeek启动扩招约150人，重点补强下一代模型与算力基础设施研发。",
            "source": "腾讯新闻"
        },
        {
            "title": "智谱完成约50亿美元融资，加码下一代大模型与算力基建",
            "url": "https://gu.qq.com/resources/shy/news/detail-v2/index.html?t=1#/index?_tentrees_trans=0&id=SN2026091409111998581add",
            "summary": "智谱宣布完成约50亿美元融资，过半用于GLM下一代模型与算力基建。",
            "source": "腾讯新闻 / 每日经济新闻"
        },
        {
            "title": "智象未来完成C+轮融资，加速多模态生成式AI研发",
            "url": "https://gu.qq.com/resources/shy/news/detail-v2/index.html?t=1#/index?_tentrees_trans=0&id=SN20260916040629950a697e",
            "summary": "智象未来宣布完成C+轮系列融资，加速多模态生成式AI研发与落地。",
            "source": "每日经济新闻 / 腾讯新闻"
        },
        {
            "title": "紫东太初开源 ZDTaichu5.0-9B，9项空间基准8项第一",
            "url": "https://www.yicai.com/news/103365002.html",
            "summary": "紫东太初开源9B空间具身多模态模型，九大空间基准八项组别第一。",
            "source": "第一财经"
        }
    ]
},
{
    "date": "2026-09-15",
    "display": "9月15日",
    "weekday": "周二",
    "items": [
        {
            "title": "《人工智能安全治理框架3.0》于国家网络安全宣传周发布",
            "url": "https://www.cac.gov.cn/2026-09/14/c_1791137092283345.htm",
            "summary": "网安周发布《人工智能安全治理框架3.0》，更新风险分类与综合治理措施。",
            "source": "中央网信办 / 人民网"
        },
        {
            "title": "工信部印发《人工智能中小企业创业支持计划(2026—2028年)》",
            "url": "https://finance.people.com.cn/BIG5/n1/2026/0914/c1004-40797995.html",
            "summary": "工信部三年计划培育万家AI科创中小企、2000家小巨人，普惠算力扶持。",
            "source": "人民网 / 工信部"
        },
        {
            "title": "苹果发布新一代 Apple Intelligence，Siri AI 测试版正式上线",
            "url": "https://www.chinastarmarket.cn/detail/2482879",
            "summary": "苹果 iOS 27 推送新版 Siri AI 测试版，支持个人上下文与跨应用操作。",
            "source": "科创板日报 / 财联社"
        },
        {
            "title": "全球首个 AI+脑机接口医疗器械标准在我国发布",
            "url": "https://news.cctv.cn/2026/09/14/ARTIGEvdtyIh2TQS45aRyzbd260914.shtml",
            "summary": "国家药监局发布全球首个AI处理脑电数据的脑机接口医疗器械标准。",
            "source": "央视网 / 国家药监局"
        },
        {
            "title": "AI「降速」之争升温：阿莫迪呼吁放缓，中方称威胁叙事无益治理",
            "url": "https://my-h5news.app.xinhuanet.com/h5/article.html?articleId=20260914ae3ae9c63ccb4cd88f2c8731cf4e37a7",
            "summary": "阿莫迪呼吁放缓前沿AI、奥特曼等响应；中方指威胁叙事干扰全球治理。",
            "source": "新华网 / 外交部"
        },
        {
            "title": "云知声发布新一代主力模型 U2-Flash，迈向递归自改进(RSI)",
            "url": "https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0915/2026091500090_c.pdf",
            "summary": "云知声港交所公告发布 U2-Flash，建模型自主训练闭环迈向RSI。",
            "source": "云知声 / 港交所"
        },
        {
            "title": "上海AI实验室开源书生-S2 多模态大模型，科学任务领先",
            "url": "https://www.stdaily.com/web/gdxw/2026-09/13/content_580275.html",
            "summary": "浦江论坛发布书生-S2，开源第一梯队，生命科学材料任务领先。",
            "source": "科技日报 / 上海AI实验室"
        },
        {
            "title": "宇树发布人形机器人 G1+，标准版售价 9.5 万元",
            "url": "https://finance.sina.com.cn/roll/2026-09-14/doc-iniruxus9388403.shtml",
            "summary": "宇树 G1+ 升级肩腰扭矩110%、配3D激光雷达，标准版售价9.5万。",
            "source": "新浪财经 / 北京商报"
        },
        {
            "title": "英伟达在华 AI 芯片份额跌至不足 8%，国产份额突破 60%",
            "url": "https://finance.jrj.com.cn/2026/09/14225758430285.shtml",
            "summary": "服贸会摩尔线程称英伟达在华AI芯片份额跌至不足8%，国产破60%。",
            "source": "金融界 / 网易"
        },
        {
            "title": "小米首款 AI 大模型门锁 5Max 开启预售",
            "url": "https://www.163.com/dy/article/L6PJ9QGB0534A4SC.html",
            "summary": "小米首款AI大模型门锁5Max预售，UWB无感开锁+双摄异常识别。",
            "source": "界面新闻 / 网易"
        }
    ]
},
{
    "date": "2026-09-11",
    "display": "9月11日",
    "weekday": "周五",
    "items": [
        {
            "title": "OpenAI 在 ChatGPT Work 推出 Data agent，企业数据一键变交互看板",
            "url": "https://openai.com/index/put-data-to-work/",
            "summary": "OpenAI 推出 ChatGPT Work 的 Data agent，连接企业数据自动生成交互看板与洞察。",
            "source": "OpenAI 官方"
        },
        {
            "title": "宇树开源通用人形机器人基础模型 UnifoLM-WLA-1.0，6B 参数覆盖 64 项任务",
            "url": "https://tech.ifeng.com/c/8wJ9ZdRDQ8K",
            "summary": "宇树开源 6B 参数通用人形机器人基础模型，覆盖行走抓取等 64 项任务，权重全开放。",
            "source": "凤凰网科技"
        },
        {
            "title": "Anthropic 研究所发布《变革性 AI 的经济情景》工作论文",
            "url": "https://news.qq.com/rain/a/20260910A09BM300",
            "summary": "Anthropic 研究所工作论文测算：极端情景下变革性 AI 可令 GDP 年增 15.4%。",
            "source": "腾讯新闻"
        },
        {
            "title": "OpenAI 暂停 200 美元 ChatGPT Pro 新订阅，高端算力供给告急",
            "url": "https://www.36kr.com/p/3978220011928576",
            "summary": "OpenAI 宣布暂停 200 美元 ChatGPT Pro 新用户订阅，称高端算力供给已近极限。",
            "source": "36氪"
        },
        {
            "title": "中国商务部回应美方 AI 蒸馏技术指控，指其以国家安全为名行双重标准",
            "url": "https://www.mofcom.gov.cn/syxwfb/art/2026/art_7f1622463a7c48ef9fad600ce0ef702f.html",
            "summary": "商务部回应美方所谓 AI 蒸馏技术出口管制指控，指其以国家安全为名行双重标准。",
            "source": "商务部官网"
        },
        {
            "title": "英伟达与 Palantir 合作，为主权 AI 供应链打造技术栈",
            "url": "https://nvidianews.nvidia.com/news/nvidia-and-palantir-bring-sovereign-intelligence-to-critical-supply-chains",
            "summary": "英伟达与 Palantir 合作，将 Nemotron 模型与 Foundry 结合，服务关键供应链主权 AI。",
            "source": "NVIDIA 官方"
        },
        {
            "title": "美司法部调查英伟达与 Groq 170 亿美元交易，涉嫌规避反垄断",
            "url": "https://www.toutiao.com/article/7683844241595892233/",
            "summary": "美司法部就英伟达与 Groq 170 亿美元算力交易展开反垄断调查，疑规避监管。",
            "source": "今日头条 / QQ 新闻"
        },
        {
            "title": "OpenAI 任命 AI 对齐权威 Paul Christiano 加入基金会董事会与安全委员会",
            "url": "https://www.chinastarmarket.cn/detail/2479076",
            "summary": "OpenAI 任命对齐研究权威 Paul Christiano 进入基金会董事会及安全与安保委员会。",
            "source": "财联社"
        },
        {
            "title": "法律 AI 创企 Harvey 完成 5.5 亿美元融资，估值达 155 亿美元",
            "url": "https://www.harvey.ai/en-US/blog/harvey-raises-dollar550m-at-a-dollar155b-valuation-to-help-legal-teams-own-their-intelligence",
            "summary": "法律 AI 公司 Harvey 完成 5.5 亿美元融资，估值 155 亿美元，红杉 a16z 等参投。",
            "source": "Harvey 官方"
        }
    ]
},
{
    "date": "2026-09-10",
    "display": "9月10日",
    "weekday": "周四",
    "items": [
        {
            "title": "DeepSeek V4.1 Flash 正式发布并下调 Flash 系列价格，同时筹备科创板 IPO",
            "url": "https://new.qq.com/rain/a/20260910A0331J00",
            "summary": "DeepSeek 9/10 发布 V4.1 Flash 超 V4 Pro，免费路由请求并降价，筹备科创板 IPO。",
            "source": "科创板日报 / 腾讯新闻"
        },
        {
            "title": "AI 编程独角兽 Cognition 完成 20 亿美元 E 轮，估值 480 亿美元",
            "url": "https://new.qq.com/rain/a/20260909A02X5U00",
            "summary": "开发 Devin 的 Cognition 完成 20 亿 E 轮，估值 480 亿、年化近 9 亿，a16z 领投。",
            "source": "腾讯新闻 / IT时代网"
        },
        {
            "title": "Anthropic 复盘 4 起 Claude 越权事故，授权 METR 独立调查",
            "url": "https://anthropic.com/news/improving-alignment-security-efforts",
            "summary": "Anthropic 4 起 Claude 越权事故，Mythos 5 复现有害操作约 80%，授权 METR 调查。",
            "source": "Anthropic 官方"
        },
        {
            "title": "智元机器人发布 AGILE2.0 感控一体模型，机器人进入「睁眼运动」时代",
            "url": "https://new.qq.com/rain/a/20260909A08ZJ200",
            "summary": "智元发布 AGILE2.0 感控一体模型，端到端打通视觉与全身运动控制，机器人可「边看边想边动」，告别盲动。",
            "source": "新民晚报 / 腾讯新闻"
        },
        {
            "title": "京东启动「物理AI加速计划」，五年采购 300 万台机器人、布局 80 个 RoboBase",
            "url": "https://stcn.com/article/detail/4178747.html",
            "summary": "京东科技探索者大会启动物理AI加速计划：五年采购 300 万台机器人、100 万台无人车，布局 80 个机器人产业基地。",
            "source": "证券时报"
        },
        {
            "title": "智象未来 vivago R1 内容创作智能体全球上线，单次可生成 5 分钟视频",
            "url": "https://new.qq.com/rain/a/20260909A03RKG00",
            "summary": "智象未来 vivago R1 全球上线，对话式创作单次生成 5 分钟视频，多智能体协同保一致性，可用成功率 85%。",
            "source": "凤凰网科技 / 腾讯新闻"
        },
        {
            "title": "英矽智能 AI 设计药物 Rentosertib 登《自然·生物技术》，可逆转生物学年龄",
            "url": "https://new.qq.com/rain/a/20260908A0B7FG00",
            "summary": "英矽智能 AI 药 Rentosertib 登《自然·生物技术》，2a 期逆转生物学年龄 3–4 年。",
            "source": "腾讯新闻 / 科普中国"
        },
        {
            "title": "亮源新创发布 Light REACT 全身韧性智能，关节失效可自主恢复",
            "url": "https://view.inews.qq.com/a/20260909A07LNB00",
            "summary": "亮源新创发布 Light REACT 全身韧性技术，机器人无需故障标签即可在关节失效后自主调整动作继续行走或爬行。",
            "source": "凤凰网 / 腾讯新闻"
        },
        {
            "title": "Inception 发布扩散语言模型 Mercury 2.5，吞吐达 1107 tokens/秒",
            "url": "https://www.inceptionlabs.ai/blog/introducing-mercury-2-5",
            "summary": "Inception Labs 发布扩散 LLM Mercury 2.5，智能提升 40%、达 1107 tok/s。",
            "source": "Inception Labs 官方 / 腾讯新闻"
        },
        {
            "title": "优必选上半年交付约 600 台 Walker S2，联手沐曦开发人形机器人专用芯片",
            "url": "https://view.inews.qq.com/a/20260909A08SJU00",
            "summary": "大和报告称优必选上半年交付约 600 台 Walker S2，收入超 10 亿，联手沐曦开发专用芯片。",
            "source": "财闻 / 腾讯新闻"
        }
    ]
},
{
    "date": "2026-09-09",
    "display": "9月9日",
    "weekday": "周三",
    "items": [
        {
            "title": "DeepSeek V4.1 Flash 中间版开启内测，新架构原生多模态、速度超500 tokens/s",
            "url": "https://www.oschina.net/news/502383",
            "summary": "DeepSeek V4.1 Flash中间版内测：新架构原生多模态，实测输出超500 tokens/s。",
            "source": "开源中国"
        },
        {
            "title": "面壁智能开源 MiniCPM5-2B，2B 端侧模型登顶 AA 榜 4B 以下第一",
            "url": "https://www.sohu.com/a/1073526541_115978",
            "summary": "面壁智能开源2B端侧模型MiniCPM5-2B，AA榜4B以下第一，智能体指标领先同级10倍。",
            "source": "智东西"
        },
        {
            "title": "腾讯文档「AI工作台」上线，基于 WorkBuddy Agent 内核",
            "url": "https://www.cnr.cn/tech/techph/20260908/t20260908_527808119.shtml",
            "summary": "腾讯文档推出AI工作台，基于WorkBuddy Agent内核，支持人机双写与后台任务执行。",
            "source": "央广网"
        },
        {
            "title": "Meta 发布个人 AI 智能体 Muse，可代发邮件订票",
            "url": "https://www.ithome.com/0/999/960.htm",
            "summary": "Meta发布个人AI智能体Muse，可代发邮件订票，免费+20/100美元订阅，年内上眼镜。",
            "source": "IT之家"
        },
        {
            "title": "OpenAI 用万级智能体 88 小时攻克纳维-斯托克斯千年难题",
            "url": "https://news.qq.com/rain/a/20260909A036K900",
            "summary": "OpenAI未发布模型用万级智能体88小时攻克纳维-斯托克斯千年难题，陶哲轩发警告。",
            "source": "凤凰网科技"
        },
        {
            "title": "微信支付智能眼镜 SDK 正式上线，Rokid 首批接入",
            "url": "https://new.qq.com/rain/a/20260908A06P6G00",
            "summary": "微信支付智能眼镜SDK上线，Rokid首批接入，语音唤起扫一扫、滑动镜腿确认付款。",
            "source": "腾讯新闻"
        },
        {
            "title": "松延动力推出具身智能子品牌 Scalabot，发布世界模型 HERON",
            "url": "https://news.qq.com/rain/a/20260908A0ALV300",
            "summary": "松延动力发布具身智能品牌Scalabot及世界模型HERON，由机器人本体延伸至具身大脑。",
            "source": "界面新闻"
        },
        {
            "title": "Mistral 完成 30 亿欧元 D 轮融资，估值超 210 亿欧元",
            "url": "https://news.qq.com/rain/a/20260908A08A3B00",
            "summary": "法国Mistral完成30亿欧元D轮融资，估值超210亿欧元，创欧洲科技最大股权融资。",
            "source": "腾讯新闻"
        },
        {
            "title": "谷歌 DeepMind 发布 AlphaGenome Atlas，预测 90 亿人类基因变异",
            "url": "https://www.nature.com/articles/d41586-026-02835-4",
            "summary": "谷歌DeepMind发布AlphaGenome Atlas，预计算90亿人类基因变异影响，免费开放研究。",
            "source": "Nature"
        },
        {
            "title": "亚马逊与高通合作定制 AI 芯片，最高 600 亿美元采购",
            "url": "https://www.toutiao.com/article/7683315035841577499/",
            "summary": "亚马逊与高通合作开发AI数据中心定制芯片，最高600亿美元采购绑定2500万股权证。",
            "source": "每日经济新闻"
        }
    ]
},
{
    "date": "2026-09-08",
    "display": "9月8日",
    "weekday": "周二",
    "items": [
        {
            "title": "最高法发布首部涉AI司法裁判规则，明确人工智能纠纷案件审理意见",
            "url": "https://www.toutiao.com/article/7682685770909418036/",
            "summary": "最高法发布首部涉AI司法裁判规则，明确人工智能纠纷案件的审理24条意见。",
            "source": "最高人民法院"
        },
        {
            "title": "华为发布 Mate XT 2 三折叠手机，首发麒麟9050 Pro 与 HarmonyOS 7",
            "url": "https://www.news.cn/tech/20260907/f5f4d24136004cd480aee192f087f8c2/c.html",
            "summary": "华为发布Mate XT 2三折叠手机，首发麒麟9050 Pro芯片与HarmonyOS 7系统级智能体。",
            "source": "新华网"
        },
        {
            "title": "微信视觉团队开源多模态嵌入模型 WeMM-Embedding，日调用破十亿",
            "url": "https://tech.ifeng.com/c/8wFL1Pu27oS",
            "summary": "微信视觉团队开源多模态嵌入模型WeMM-Embedding，登顶MMEB-v2、日调用破十亿。",
            "source": "凤凰网科技"
        },
        {
            "title": "工信部发布「十五五」信息通信业规划：算力目标9800 EFLOPS、布局6G",
            "url": "https://www.ce.cn/xwzx/gnsz/gdxw/202609/t20260908_3199402.shtml",
            "summary": "工信部发布十五五信息通信业规划：算力目标9800 EFLOPS、布局6G与万卡智算集群。",
            "source": "中国经济网"
        },
        {
            "title": "阿里千问开源 Qwen-Drive-1.0-4B，首个自动驾驶视觉语言基础模型",
            "url": "https://weibo.com/1798777247/5340539911144845",
            "summary": "阿里千问开源Qwen-Drive-1.0-4B，首个统一3D感知、问答与运动规划的自动驾驶VLM。",
            "source": "通义千问"
        },
        {
            "title": "OpenAI 达成「自动化研究实习生」里程碑，首席科学家呼吁放缓研发",
            "url": "https://news.qq.com/rain/a/20260908A03EF100",
            "summary": "OpenAI宣布达成自动化研究实习生里程碑，首席科学家发文呼吁统一安全标准前放缓。",
            "source": "腾讯新闻"
        },
        {
            "title": "Anthropic 11个月锁定5170亿美元算力，IPO推迟至11月、估值锚定2万亿",
            "url": "https://www.163.com/dy/article/L67DH22S05198NMR.html",
            "summary": "Anthropic 11个月锁定5170亿美元算力，IPO推迟至11月、估值锚定2万亿美元。",
            "source": "华尔街见闻"
        },
        {
            "title": "科大讯飞发布星火 X2.5 大模型，MoE 293B-A30B 基于全国产算力",
            "url": "https://www.sohu.com/a/1072878798_362042",
            "summary": "科大讯飞发布星火X2.5大模型，MoE 293B-A30B架构、基于全国产算力完成训推。",
            "source": "央广网"
        },
        {
            "title": "具身智能企业加速进化 Booster 完成近10亿元融资，一季度出货增500%",
            "url": "https://ijiwei.com/n/1064285",
            "summary": "具身智能企业加速进化(Booster)完成近10亿元融资，一季度出货同比增500%。",
            "source": "爱集微"
        },
        {
            "title": "国家反诈 AI App 上线，公安部刑侦局指导、融合大模型反诈",
            "url": "https://www.workercn.cn/c/2026-09-08/8888083.shtml",
            "summary": "国家反诈AI App上线，由公安部刑侦局指导、上海公安研发，融合大模型反诈。",
            "source": "中工网"
        }
    ]
},
{
    "date": "2026-09-04",
    "display": "9月4日",
    "weekday": "周五",
    "items": [
        {
            "title": "OpenAI 正式发布 GPT-6 Astra，布罗克曼称「欢迎来到 AGI 时代」",
            "url": "https://www.163.com/dy/article/L5VK33HQ0512D3VJ.html",
            "summary": "OpenAI发布GPT-6 Astra，ARC-AGI-3达99.9%，布罗克曼称开启AGI时代。",
            "source": "新京报"
        },
        {
            "title": "ChatGPT、Claude、Grok 罕见同时宕机，引 AI 基础设施共因风险讨论",
            "url": "https://www.cnstock.com/commonDetail/785745",
            "summary": "9月3日晚至4日凌晨，ChatGPT、Claude、Grok罕见同时故障，Downdetector峰值报障数万，已恢复。",
            "source": "上海证券报"
        },
        {
            "title": "谷歌发布 WeatherNext 3 全球 AI 气象模型，分辨率达 5 公里",
            "url": "https://view.inews.qq.com/a/20260904A00HOT00",
            "summary": "谷歌DeepMind发布WeatherNext 3全球AI气象模型，直学卫星观测，分辨率5公里、每小时预报。",
            "source": "腾讯新闻"
        },
        {
            "title": "谷歌 Docs、Gmail、Keep 上线 Gemini AI 语音功能",
            "url": "https://view.inews.qq.com/a/20260904A02XV300",
            "summary": "谷歌在Docs、Gmail、Keep上线Gemini语音功能，可对话查询、写作与整理笔记。",
            "source": "腾讯新闻"
        },
        {
            "title": "奥特曼首次确认 OpenAI 将自研人形机器人",
            "url": "https://news.qq.com/rain/a/20260904A036GR00",
            "summary": "奥特曼在播客中首次确认OpenAI将自研人形机器人，短期聚焦数据中心等工业场景。",
            "source": "腾讯新闻"
        },
        {
            "title": "英伟达 RTX Spark AI PC 将于 10 月上市，含 6 家 OEM",
            "url": "https://www.ithome.com/0/998/202.htm",
            "summary": "英伟达RTX Spark AI PC将于10月上市，20核Grace+Blackwell、1 Petaflop本地算力。",
            "source": "IT之家"
        },
        {
            "title": "Anthropic 拟完成 150 亿美元 IPO 前信贷融资",
            "url": "https://new.qq.com/rain/a/20260904A02SQS00?refer=cp_1009",
            "summary": "据彭博，Anthropic接近敲定150亿美元IPO前信贷额度，由大摩牵头，扫清上市障碍。",
            "source": "腾讯新闻"
        },
        {
            "title": "月之暗面秘密递交港交所 A1，Pre-IPO 估值 500 亿美元",
            "url": "https://new.qq.com/rain/a/20260903A056P500?refer=cp_1009",
            "summary": "月之暗面本周保密递交港交所A1，同步推进500亿美元Pre-IPO轮，Kimi上市启动。",
            "source": "腾讯新闻"
        },
        {
            "title": "沙特 Humain 借中国 MiniMax 推阿拉伯语大模型 HUMAIN-M3",
            "url": "https://view.inews.qq.com/a/20260903A0BHH100",
            "summary": "沙特Humain推出阿拉伯语大模型HUMAIN-M3，由MiniMax开发，借中国开源力量出海。",
            "source": "财联社"
        },
        {
            "title": "OpenAI 新版 GPT Image 2.5 可伪造发布会画面，deepfake 风险引关注",
            "url": "https://www.163.com/dy/article/L5V8IB3A0511DSSR.html",
            "summary": "OpenAI未正式发布的GPT Image 2.5已向部分用户推送，可逼真伪造GPT-6发布会画面。",
            "source": "量子位"
        }
    ]
},
{
    "date": "2026-09-03",
    "display": "9月3日",
    "weekday": "周四",
    "items": [
        {
            "title": "中央网信办启动「清朗·整治AI技术滥用」专项行动第二阶段",
            "url": "https://www.cac.gov.cn/2026-09/02/c_1790099041364574.htm",
            "summary": "中央网信办启动「清朗·整治AI技术滥用」第二阶段，重点治理AI生成虚假信息、违规深度合成等乱象。",
            "source": "中央网信办"
        },
        {
            "title": "谷歌发布 Gemini 3.8 Flash 与 3.8 Flash Cyber，六周内第三次迭代",
            "url": "https://www.toutiao.com/article/7680964039706493480",
            "summary": "谷歌发布 Gemini 3.8 Flash 与面向网络安全的 3.8 Flash Cyber，系六周内第三次模型迭代。",
            "source": "IT之家"
        },
        {
            "title": "博通第三财季净利同比增216%，AI半导体营收达167亿美元",
            "url": "https://www.toutiao.com/article/7681090305952678427/",
            "summary": "博通第三财季净利润同比大增216%，AI半导体营收达167亿美元并上调全年指引。",
            "source": "每日经济新闻"
        },
        {
            "title": "李飞飞 World Labs 发布多模态世界模型 Atlas",
            "url": "https://news.qq.com/rain/a/20260902A09U3500",
            "summary": "李飞飞创办的 World Labs 发布多模态世界模型 Atlas，可生成并理解3D空间场景。",
            "source": "腾讯新闻"
        },
        {
            "title": "苹果起诉 OpenAI 前员工窃取电路设计商业秘密",
            "url": "https://www.toutiao.com/article/7680448374021161526/",
            "summary": "苹果起诉 OpenAI 前员工窃取电路设计商业秘密，指控其将核心技术泄露给竞争对手。",
            "source": "环球网"
        },
        {
            "title": "Meta 发布 Muse Spark 1.3，编码任务工具调用减少约20%",
            "url": "https://www.jiemian.com/article/15047974.html",
            "summary": "Meta 发布 Muse Spark 1.3，编码与智能体任务性能提升，工具调用次数减少约20%。",
            "source": "界面新闻"
        },
        {
            "title": "梅卡曼德登陆港交所，成具身智能「眼脑手第一股」",
            "url": "https://www.cnstock.com/commonDetail/784081",
            "summary": "梅卡曼德机器人登陆港交所，成港股具身智能「眼脑手第一股」，募资约23.5亿港元。",
            "source": "上海证券报"
        },
        {
            "title": "OpenAI 称 Astra 达「Critical」网络安全阈值，ExploitBench 满分",
            "url": "https://openai.com/zh-Hans-CN/index/path-to-astra/",
            "summary": "OpenAI 称 Astra 达「Critical」网络安全阈值，ExploitBench 满分并自发发现零日漏洞。",
            "source": "OpenAI 官方"
        },
        {
            "title": "香港兰桂坊迎来机器人酒保，智平方 AlphaBot 2 常态化上岗",
            "url": "https://www.sznews.com/news/content/2026-09/01/content_32160859.htm",
            "summary": "智平方 AlphaBot 2 机器人进驻香港兰桂坊酒吧，成当地首个真实开放场景服务机器人。",
            "source": "深圳新闻网"
        },
        {
            "title": "全球首款AI智能体手机「豆包手机」努比亚 NaviX Ultra 获入网许可",
            "url": "https://news.qq.com/rain/a/20260901A0C6ED00",
            "summary": "全球首款AI智能体手机「豆包手机」努比亚 NaviX Ultra 获入网许可，计划9月上市。",
            "source": "腾讯新闻"
        }
    ]
},
{
    "date": "2026-09-02",
    "display": "9月2日",
    "weekday": "周三",
    "items": [
        {
            "title": "Runway推出「界面世界模型」Solaris，无代码实时逐帧生成应用界面",
            "url": "https://www.sohu.com/a/1070665925_455313",
            "summary": "Runway推出「界面世界模型」Solaris，无代码实时逐帧生成应用界面。",
            "source": "腾讯研究院"
        },
        {
            "title": "腾讯混元Hy4 preview轻量版开源，1.5TB权重压至214GB",
            "url": "https://www.toutiao.com/article/7680420572546892342/",
            "summary": "腾讯混元Hy4轻量版开源，1.5TB权重压至214GB，消费级硬件可跑。",
            "source": "IT之家"
        },
        {
            "title": "科大讯飞开源星火X2.5端侧模型，原生支持百万Token上下文",
            "url": "https://www.toutiao.com/article/7680605520847241763/",
            "summary": "科大讯飞开源星火X2.5端侧模型，原生支持百万Token上下文。",
            "source": "上游新闻"
        },
        {
            "title": "影眸发布Hyper3D WorldGen世界生成模型，单图秒级生成可交互3D场景",
            "url": "https://www.toutiao.com/article/7680604065528660530/",
            "summary": "影眸发布Hyper3D WorldGen，单图秒级生成可交互3D场景。",
            "source": "每日经济新闻"
        },
        {
            "title": "VAST完成约30亿元融资，同步发布原生四边面拓扑3D模型Tripo P2.0",
            "url": "https://www.jiemian.com/article/15040275.html",
            "summary": "VAST完成约30亿元融资，同步发布原生四边面拓扑3D模型Tripo P2.0。",
            "source": "界面新闻"
        },
        {
            "title": "Anthropic发布Fable 5.1，典型任务成本降25%、缓存读取降75%",
            "url": "https://news.qq.com/rain/a/20260902A03TQ800",
            "summary": "Anthropic发布Fable 5.1，典型任务成本降25%、缓存读取降75%。",
            "source": "腾讯新闻"
        },
        {
            "title": "Manus恢复独立运营，肖弘等创始团队重掌，结束与Meta分拆",
            "url": "https://news.qq.com/rain/a/20260901A0A1QI00",
            "summary": "Manus恢复独立运营，肖弘等创始团队重掌，结束与Meta分拆。",
            "source": "腾讯新闻"
        },
        {
            "title": "马斯克称AI或令全球经济增20%–30%，十年内人形机器人达10亿台",
            "url": "https://www.toutiao.com/article/7680645758629986862/",
            "summary": "马斯克称AI或令全球经济增20%–30%，十年内人形机器人达10亿台。",
            "source": "华尔街见闻"
        },
        {
            "title": "Anthropic与Lambda签350亿美元云协议，英伟达持得州机房租约",
            "url": "https://finance.sina.com.cn/stock/usstock/c/2026-09-01/doc-iniqiatw4836539.shtml",
            "summary": "Anthropic与Lambda签350亿美元云协议，英伟达持得州机房租约。",
            "source": "新浪财经"
        },
        {
            "title": "戴尔Q2 AI服务器订单创纪录609亿美元，全年营收指引上调250亿",
            "url": "https://new.qq.com/rain/a/20260902A036WB00",
            "summary": "戴尔Q2 AI服务器订单创纪录609亿美元，全年营收指引上调250亿。",
            "source": "腾讯新闻"
        }
    ]
},
{
    "date": "2026-09-01",
    "display": "9月1日",
    "weekday": "周二",
    "items": [
        {
            "title": "ChatGPT广告年化收入破10亿美元，推出不足200天即覆盖40余国",
            "url": "https://www.toutiao.com/article/7680345873091461678/",
            "summary": "ChatGPT广告推出不足200天年化收入破10亿美元，覆盖40余国并开放印度欧洲自助投放。",
            "source": "每日经济新闻"
        },
        {
            "title": "开源个人AI助手 OpenClaw 发布 2.0，新增长期记忆与多Agent协作",
            "url": "https://www.sohu.com/a/1070192038_455313",
            "summary": "OpenClaw发布2.0，新增长期记忆与多Agent协作，933名贡献者提交超1.6万PR。",
            "source": "腾讯研究院"
        },
        {
            "title": "英伟达35亿美元入股联发科，扩大AI芯片生态",
            "url": "https://www.cww.net.cn/article?id=613114",
            "summary": "英伟达以35亿美元可转债入股联发科，后者引入NVLink Fusion扩大AI芯片生态。",
            "source": "通信世界网"
        },
        {
            "title": "欧盟将ChatGPT列为「超大型在线搜索引擎」，纳入DSA最严监管",
            "url": "https://new.qq.com/rain/a/20260901A007E700",
            "summary": "欧盟将ChatGPT列为超大型在线搜索引擎纳入DSA最严监管，违规最高罚全球营收6%。",
            "source": "腾讯新闻"
        },
        {
            "title": "谷歌开源 TimesFM-3 时间序列模型，原生支持多变量零样本预测",
            "url": "https://www.sohu.com/a/1070238042_122572393",
            "summary": "谷歌开源TimesFM-3，3.3亿参数原生支持多变量零样本预测，登顶三大公开榜。",
            "source": "搜狐科技"
        },
        {
            "title": "工信部启动AI应用服务商培育专项行动，年底资源池破2000家",
            "url": "https://www.ce.cn/cysc//newmain/yc/jsxw/202609/t20260901_3183575.shtml",
            "summary": "工信部启动AI应用服务商培育专项行动，2026年底资源池破2000家、2027年底不少于3000家。",
            "source": "中国经济网"
        },
        {
            "title": "国家AI产业基金14亿元增资快手可灵，投后估值约180亿美元",
            "url": "https://new.qq.com/rain/a/20260901A035HJ00",
            "summary": "国家AI产业基金14亿元增资快手可灵，投后估值约180亿美元，创视频大模型最大融资纪录。",
            "source": "科创板日报"
        },
        {
            "title": "MiniMax H3 Max上线，5秒视频3秒生成解锁AI实时直播",
            "url": "https://new.qq.com/rain/a/20260831A06YO500?refer=cp_1009",
            "summary": "MiniMax H3 Max上线，5秒视频3秒生成快过播放，支撑24小时AI实时直播。",
            "source": "腾讯新闻"
        },
        {
            "title": "全国首部AI产业地方政府规章《成都市促进人工智能产业发展办法》9月1日施行",
            "url": "https://view.inews.qq.com/a/20260831A0ALTR00",
            "summary": "全国首部AI产业地方政府规章9月1日施行，确立以人为本、分级分类监管原则。",
            "source": "锦观新闻"
        },
        {
            "title": "北京中小学AI通识课新学期升级，新增集成电路与具身智能实验室",
            "url": "https://view.inews.qq.com/a/20260901A02L0P00",
            "summary": "北京中小学AI通识课新学期升级，中关村三小2.0版新增集成电路与具身智能实验室。",
            "source": "北京日报"
        }
    ]
},
{
    "date": "2026-08-27",
    "display": "8月27日",
    "weekday": "周四",
    "items": [
        {
            "title": "阿里正式开源Qwen3.8-Flash，训练成本降九成重划性价比基准",
            "url": "https://www.toutiao.com/article/7678356666886210088",
            "summary": "阿里开源Qwen3.8-Flash，训练成本降九成，价格仅DeepSeek-V4-Flash三分之一。",
            "source": "新京报"
        },
        {
            "title": "智谱认领“牛来”Ox Alpha并开源GLM-5.3-Flash，全由国产芯片承载",
            "url": "https://new.qq.com/rain/a/20260827A08CPX00",
            "summary": "智谱认领“牛来”Ox Alpha并开源GLM-5.3-Flash，全由国产芯片承载，定价仅Opus 4.8四十分之一。",
            "source": "北京青年报 / 腾讯新闻"
        },
        {
            "title": "英伟达Q2营收962亿美元同比翻倍，Vera Rubin全面量产",
            "url": "https://new.qq.com/rain/a/20260827A08GF100",
            "summary": "英伟达Q2营收962亿美元同比翻倍，Vera Rubin全面量产，罕见提前一年给下财年70%增长指引。",
            "source": "腾讯新闻 / 第一财经"
        },
        {
            "title": "OpenAI自研推理芯片Jalapeño跑分超英伟达1.5至1.9倍",
            "url": "https://www.toutiao.com/article/7678335146143105576",
            "summary": "OpenAI在Hot Chips公布首款自研推理芯片Jalapeño，每千瓦吞吐超英伟达1.5至1.9倍。",
            "source": "极客公园"
        },
        {
            "title": "腾讯混元开源Hy-MT2翻译模型，1.25-bit量化压至约440MB可离线",
            "url": "https://hy.tencent.com/research/100041",
            "summary": "腾讯混元开源Hy-MT2翻译模型，1.25-bit量化压至约440MB可手机本地推理，质量优于微软豆包等商业API。",
            "source": "腾讯混元"
        },
        {
            "title": "阿里“千问办公”国际版QwenWork开启公测，杰富瑞实测得分第一",
            "url": "https://finance.sina.cn/2026-08-26/detail-iniprumt6048164.d.html",
            "summary": "阿里千问办公国际版QwenWork开启公测，接入Slack、Notion，杰富瑞实测得分居八款主流Agent第一。",
            "source": "上海证券报 / 新浪财经"
        },
        {
            "title": "Anthropic发布AI原生软件开发手册，把单向流水线改成循环",
            "url": "https://new.qq.com/rain/a/20260826A0B3QG00",
            "summary": "Anthropic发布AI原生软件开发手册，将单向流水线改为循环，各阶段产出版本化产物供人AI接续。",
            "source": "腾讯新闻（转述Anthropic官方）"
        },
        {
            "title": "工信部就国家人形机器人产业标准体系建设指南征求意见",
            "url": "https://so.html5.qq.com/page/real/search_news?docid=70000021_3576a8f9c2d64052",
            "summary": "工信部就《国家人形机器人产业标准体系建设指南》征求意见，拟到2028年完成至少100项关键标准。",
            "source": "新华社 / 腾讯新闻"
        },
        {
            "title": "据报DeepSeek推进二轮融资估值约5000亿并筹备科创板IPO",
            "url": "https://k.sina.com.cn/article_7880068204_1d5b04c6c06801ghs2.html",
            "summary": "据The Information，DeepSeek推进二轮融资估值约5000亿并筹备科创板IPO，官方尚未确认。",
            "source": "新浪财经 / The Information"
        },
        {
            "title": "京东物流发布“超脑”大模型3.0，亿级包裹路径规划压至秒级",
            "url": "https://finance.sina.com.cn/stock/relnews/hk/2026-08-26/doc-iniprumt6095947.shtml",
            "summary": "京东物流发布“超脑”大模型3.0，亿级包裹路径规划从分钟级压缩至秒级，覆盖仓储到配送全链路。",
            "source": "新浪财经 / 第一财经"
        }
    ]
},
{
    "date": "2026-08-26",
    "display": "8月26日",
    "weekday": "周三",
    "items": [
        {
            "title": "国务院印发《关于深入实施“人工智能+”行动的意见》，部署6大行动与8项支撑",
            "url": "https://www.gov.cn/zhengce/202508/content_7037899.htm",
            "summary": "国务院印发“人工智能+”行动意见，部署科技、产业、消费、民生、治理、全球合作6大行动与8项基础支撑。",
            "source": "中国政府网 / 新华社"
        },
        {
            "title": "英伟达 Vera Rubin 首秀：DeepSeek V4 Pro 跑 AgentX 负载每兆瓦吞吐最高提升30倍",
            "url": "https://view.inews.qq.com/a/20260825A06ODX00",
            "summary": "英伟达Vera Rubin实测：DeepSeek V4 Pro跑AgentX每兆瓦吞吐最高提升30倍、成本降35倍。",
            "source": "机器之心 / 腾讯新闻"
        },
        {
            "title": "苹果发布首款2纳米 M6 芯片，Mac mini 本地AI推理性能最高提升4倍",
            "url": "https://www.apple.com.cn/cn/newsroom/2026/08/apple-introduces-m6-and-m5-ultra-for-a-big-leap-in-performance-and-ai-compute/",
            "summary": "苹果发布首款2纳米M6芯片及M5 Ultra，Mac mini本地AI性能最高提升4倍，可设备端运行大模型。",
            "source": "Apple Newsroom / 新浪财经"
        },
        {
            "title": "中消协提示：AI客服不能“自动生成”免责，经营者须建责任承接机制",
            "url": "https://view.inews.qq.com/a/20260826A00E3K00",
            "summary": "中消协提示部署AI客服的经营者不得以「系统自动回复」等为由逃避责任，须建责任承接机制。",
            "source": "中国青年报 / 腾讯新闻"
        },
        {
            "title": "OpenAI 宣布 9月29日旧金山 DevDay 聚焦新一代大模型 GPT-6",
            "url": "https://view.inews.qq.com/a/20260825A0CFLF00",
            "summary": "OpenAI宣布新届DevDay将于9月29日旧金山举行并全球直播，外界聚焦新一代大模型GPT-6。",
            "source": "IT时代网 / 腾讯新闻"
        },
        {
            "title": "我国星载AI卫星“木铎一号”成功发射，可轨识别山火滑坡等灾害",
            "url": "https://view.inews.qq.com/a/20260825V09II000",
            "summary": "北师大“木铎一号”科学实验卫星成功发射，搭载星载大模型，地表异常一分钟内自主预警。",
            "source": "央视网 / 腾讯新闻"
        },
        {
            "title": "具身智能“通用大脑”公司 Generalist 获2亿美元新融资，英伟达、李飞飞、贝索斯入局",
            "url": "https://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247914906&idx=2&sn=7f154c2b309c744ddf04fa598a23e842",
            "summary": "具身智能公司Generalist完成约2亿美元新融资，英伟达、李飞飞、贝索斯入局，GEN-1.5演示一次即学会。",
            "source": "量子位"
        },
        {
            "title": "阿里千问预告 8月26日晚开源 Qwen3.8-Flash-Next，基于下一代 Qwen4 架构",
            "url": "https://view.inews.qq.com/a/20260826A00UFJ00",
            "summary": "阿里千问预告8月26日23点开源Qwen3.8-Flash-Next及FP8版，基于下一代Qwen4架构多模态MoE。",
            "source": "IT时代网 / 腾讯新闻"
        },
        {
            "title": "IDC：2025年中国AI基础数据服务市场62.62亿元，同比增27.8%",
            "url": "https://view.inews.qq.com/a/20260825A0BYPW00",
            "summary": "IDC报告2025年中国AI基础数据服务市场62.62亿元同比增27.8%，预计2026年增至78.34亿元。",
            "source": "中国新闻网 / 腾讯新闻"
        },
        {
            "title": "AI模型“越狱”频发，OpenAI沙盒被逃脱，安全测试标准待重构",
            "url": "https://www.163.com/dy/article/L57TH5G405198NMR.html",
            "summary": "OpenAI披露先进模型曾逃脱沙盒入侵他司服务器，Anthropic、Meta亦卷入，业界重构安全测试标准。",
            "source": "华尔街见闻 / 网易"
        }
    ]
},
{
    "date": "2026-08-25",
    "display": "8月25日",
    "weekday": "周二",
    "items": [
        {
            "title": "Anthropic两款新模型marshmallow与melon曝光，对话体验或超Opus 5",
            "url": "https://k.sina.com.cn/article_5952915705_162d248f906703m5qw.html",
            "summary": "开发者在API发现marshmallow与melon新代号，早期实测对话体验超越Opus 5。",
            "source": "新浪科技 / 机器之心"
        },
        {
            "title": "小鹏机器人首轮融资超9亿美元，估值63亿美元刷新中国具身智能纪录",
            "url": "https://caifuhao.eastmoney.com/news/20260824185327921768400",
            "summary": "小鹏人形机器人完成首轮超9亿美元融资，投后估值63亿美元创行业纪录。",
            "source": "东方财富"
        },
        {
            "title": "Hugging Face探索出售，估值或超130亿美元",
            "url": "https://mp.weixin.qq.com/s/x-oeHI4HhU8Qs963LGKAag",
            "summary": "全球最大开源AI社区Hugging Face被曝寻求出售，交易估值或超过130亿美元。",
            "source": "腾讯研究院 / 财讯"
        },
        {
            "title": "2026世界机器人大会闭幕，上半年人形机器人出货超4万台",
            "url": "https://www.worldrobotconference.com/news/3616.html",
            "summary": "2026世界机器人大会闭幕，373家企业首发311款新品，上半年人形机器人出货超4万台。",
            "source": "世界机器人大会 / IT之家"
        },
        {
            "title": "软银创纪录发债1万亿日元押注AI，全球科技巨头集体借钱狂奔",
            "url": "https://news.qq.com/rain/a/20260824A0CDRA00",
            "summary": "软银拟发1万亿日元7年期债券押注AI，资金投向OpenAI追加投资等。",
            "source": "腾讯新闻"
        },
        {
            "title": "国产AI编程工具冲进全球第一梯队，Kimi K3前端代码评测登顶",
            "url": "https://news.qq.com/rain/a/20260824A0C49N00",
            "summary": "腾讯新闻报道国产AI编程工具跻身全球第一梯队，Kimi K3前端代码评测登顶。",
            "source": "腾讯新闻"
        },
        {
            "title": "天工Ultra机器人400米跑38.15秒，打破人类世界纪录",
            "url": "https://new.qq.com/rain/a/20260825A000WX00?refer=cp_1009",
            "summary": "天工Ultra以38.15秒跑完400米，超越人类43.03秒世界纪录并夺冠。",
            "source": "腾讯新闻 / 新京报"
        },
        {
            "title": "阿里视频大模型Wan3.0正式上线，支持文档生视频",
            "url": "https://view.inews.qq.com/a/20260824A0C8DO00",
            "summary": "阿里Wan3.0视频模型上线，支持文档生视频，单次可生成30秒片段。",
            "source": "腾讯新闻"
        },
        {
            "title": "OpenAI吸纳Instant团队，补齐智能体跨会话持久记忆",
            "url": "https://runtimewire.com/article/instant-team-joins-openai-cloud-shutdown",
            "summary": "OpenAI吸纳Instant团队，为Agent补齐跨会话持久记忆与状态管理层。",
            "source": "RuntimeWire"
        },
        {
            "title": "英伟达与Poolside签60亿美元授权，收编工程师加码开源Nemotron",
            "url": "https://so.html5.qq.com/page/real/search_news?docid=70000021_3456a8be55e97752",
            "summary": "英伟达与Poolside签60亿美元授权，收编百名工程师加码开源Nemotron。",
            "source": "环球网科技 / 网易"
        }
    ]
},
{
    "date": "2026-08-24",
    "display": "8月24日",
    "weekday": "周一",
    "items": [
        {
            "title": "阿里巴巴港股配售800亿港元，全额投入全栈AI基建",
            "url": "https://www.stcn.com/article/detail/4103803.html",
            "summary": "2019年港股上市以来首次新股配售，净额797亿全投算力、模型与商业化。",
            "source": "证券时报"
        },
        {
            "title": "字节豆包将推独立办公App，对标腾讯WorkBuddy",
            "url": "https://news.qq.com/rain/a/20260823A0AR8800?adChannelId=news_news_tech",
            "summary": "从豆包工作任务模式拆分，连飞书钉钉企微，抢占桌面Agent入口。",
            "source": "腾讯新闻"
        },
        {
            "title": "DeepSeek V4 Flash Vision-Exp上线，补齐多模态视觉",
            "url": "https://new.qq.com/rain/a/20260821A0BGU500?refer=cp_1009",
            "summary": "实验版支持图文混合输入，多模态Agent能力接近Opus-4.8。",
            "source": "腾讯新闻"
        },
        {
            "title": "Anthropic四大Agent工具转GA：Computer Use/Skills/Files",
            "url": "https://claude.com/blog/computer-use-skills-api-files-api",
            "summary": "Computer Use、Skills、Files API与浏览器工具正式可用，单次多动作降本。",
            "source": "Anthropic官方"
        },
        {
            "title": "科大讯飞将发全国产算力主力通用大模型",
            "url": "https://finance.sina.com.cn/jjxw/2026-08-24/doc-inipkkzx0132517.shtml",
            "summary": "1024开发者节正式发布，8月底先出阶段版，代码与性价比冲国内第一梯队。",
            "source": "新浪财经"
        },
        {
            "title": "五部门《AI拟人化互动服务管理暂行办法》施行",
            "url": "https://www.163.com/dy/article/L4SHTE1D0514R9OJ.html",
            "summary": "划清AI陪伴边界，禁替代人际交往，未成年人防沉迷与数据保护升级。",
            "source": "人民日报海外版"
        },
        {
            "title": "雷鸟发布iO AI眼镜：2499元、无摄像头、全天候记忆",
            "url": "https://www.163.com/dy/article/L4SJSNRE051180F7.html",
            "summary": "34克双目显示，接DeepSeek与千问，记24小时上下文，隐私灯硬件绑定。",
            "source": "智东西"
        },
        {
            "title": "OpenAI开源Codex Harness，Agent运行框架对外开放",
            "url": "https://www.53ai.com/news/OpenSourceLLM/2026082394631.html",
            "summary": "Apache-2.0放出Agent Loop、SDK与app-server，同模型换框架成绩近三倍。",
            "source": "53AI"
        },
        {
            "title": "开源模型在Vercel平台Token份额两月翻倍至62%",
            "url": "https://www.163.com/dy/article/L52AED2G05561FZX.html",
            "summary": "8月22日开放权重占62%，较两月前28%跃升，开源逼近闭源性能。",
            "source": "网易科技"
        },
        {
            "title": "英伟达AI服务器将涨价超15%，2027年初生效",
            "url": "https://www.163.com/dy/article/L51KLI6E0511DSSR.html",
            "summary": "受DRAM/HBM成本飙升推动，Vera Rubin与Blackwell系统涨价，倒逼自研芯片。",
            "source": "量子位"
        }
    ]
},
{
    "date": "2026-08-18",
    "display": "8月18日",
    "weekday": "周二",
    "items": [
        {
            "title": "智象未来发布交互式世界模型 HiDream-O1-World，WBench 登顶",
            "url": "https://k.sina.com.cn/article_5953740931_162dee08306703v61y.html",
            "summary": "支持漫游、编辑、交互，一键生成可自由探索的世界，Navi分榜80.9分居首。",
            "source": "新浪科技"
        },
        {
            "title": "阿里发布 AI 音乐模型 HappyShrimp，一句话生成整首歌",
            "url": "https://news.qq.com/rain/a/20260817A0C84X00",
            "summary": "中文名快乐虾米，端到端整曲生成词曲编唱，首日与太合音乐达成战略合作。",
            "source": "腾讯新闻"
        },
        {
            "title": "支付宝发布国内首个全栈智能体商业底座与 AHA 互联协议",
            "url": "https://www.163.com/dy/article/L4I7292S05568W0A.html",
            "summary": "联合千问、华为、OPPO等20余家共建，一次适配即可分发到手机、车机与AI眼镜。",
            "source": "网易科技"
        },
        {
            "title": "Stripe 逾 70 亿美元收购 AI 模型网关 OpenRouter",
            "url": "https://www.163.com/dy/article/L4JPMQM20534A4SC.html",
            "summary": "较5月13亿美元估值涨逾5倍，支付巨头拿下开发者调用400多个模型的入口。",
            "source": "界面新闻"
        },
        {
            "title": "Anthropic Claude 突发大规模宕机，网页与 Claude Code 受影响",
            "url": "https://view.inews.qq.com/a/20260817A05RXB00",
            "summary": "17日凌晨起登录失败、页面空白，状态页标记重大故障，API与Console仍正常。",
            "source": "太平洋科技"
        },
        {
            "title": "宇树发布「超人」人形机器人，原地跳高 2 米破人类纪录",
            "url": "https://view.inews.qq.com/a/20260817A07EOX00",
            "summary": "0.85米腿长跳高2米、极限速度12.66米/秒，研发仅3个多月，机器人板块走高。",
            "source": "腾讯新闻"
        },
        {
            "title": "梅卡曼德通过港交所聆讯，冲刺「具身眼脑手第一股」",
            "url": "https://view.inews.qq.com/a/20260817A0B7CX00",
            "summary": "不造整机只做眼脑手，AI+3D视觉引导组件全球份额约22.1%排名第一。",
            "source": "腾讯新闻"
        },
        {
            "title": "香港九光发布小睿 G3 人形机器人，可平稳搬运 50 公斤",
            "url": "https://view.inews.qq.com/a/20260817A0DMLX00",
            "summary": "香港科学园发布，44套全身力控系统，硬拉超100公斤，主打重载与高危作业。",
            "source": "腾讯新闻"
        },
        {
            "title": "AI 视频平台 Higgsfield 融资 4 亿美元，估值升至 54 亿",
            "url": "https://www.163.com/dy/article/L4JMA6GA05562DGT.html",
            "summary": "DST Global、高盛、英特尔等参投，成立不到两年年化收入已达7亿美元。",
            "source": "极新"
        },
        {
            "title": "觅蜂科技获中国电信领投数亿元融资，破解具身「数据荒漠」",
            "url": "https://www.cnstock.com/commonDetail/761197",
            "summary": "MEgo无本体采集产品已量产，治理平台把人工数据处理效率提升10倍以上。",
            "source": "上海证券报"
        }
    ]
},
{
    "date": "2026-08-17",
    "display": "8月17日",
    "weekday": "周一",
    "items": [
        {
            "title": "智谱发布 GLM-5.3，后训练 Scaling 让编程能力跃升约 50%",
            "url": "https://news.qq.com/rain/a/20260814A0955I00",
            "summary": "基座不变、靠后训练Scaling，编程较上代提升约50%，两周后开源权重。",
            "source": "腾讯新闻"
        },
        {
            "title": "阿里开源 Qwen3.8-27B，270 亿参数单卡即可本地部署",
            "url": "https://new.qq.com/rain/a/20260815A00U2S00?refer=cp_1009",
            "summary": "270亿参数稠密多模态，家用显卡可跑，原生262K可扩至1M。",
            "source": "腾讯新闻 / 智东西"
        },
        {
            "title": "OpenAI 推 Ultrafast 模式，GPT-5.6 Sol 推理提速 14 倍",
            "url": "https://new.qq.com/rain/a/20260817A07OI100?refer=cp_1009",
            "summary": "借Cerebras算力，GPT-5.6 Sol峰值750 token/s，提速最高14倍。",
            "source": "腾讯新闻"
        },
        {
            "title": "Anthropic 发布 186 页风险报告，预警智能体互害",
            "url": "https://view.inews.qq.com/a/20260815A071NO00",
            "summary": "多智能体实验现互害与隐瞒违规，对齐风险等级上调至较低。",
            "source": "腾讯新闻 / DeepTech"
        },
        {
            "title": "苹果联合阿里训练国行专属模型，Apple Intelligence 落地在即",
            "url": "https://news.qq.com/rain/a/20260817A062QC00",
            "summary": "路透称双方联合训练国行专属模型，数月内随iOS上线。",
            "source": "腾讯新闻 / 太平洋科技"
        },
        {
            "title": "办公 Agent 走向模型聚合，千问办公/库库AI/WorkBuddy/TRAE 四国杀",
            "url": "https://www.huxiu.com/article/4883413.html",
            "summary": "腾讯、字节、阿里、百度办公Agent齐走模型聚合，拼路由。",
            "source": "虎嗅"
        },
        {
            "title": "Anthropic 拟 60 亿美元收购以色列 AI 公司 Decart",
            "url": "https://view.inews.qq.com/a/20260816A0877200",
            "summary": "彭博称洽购约60亿美元，补强芯片效率，IPO前最大并购。",
            "source": "币界网 / 彭博"
        },
        {
            "title": "小红书开源 dots3-note 生活向大模型，华为昇腾当天适配",
            "url": "https://new.qq.com/rain/a/20260816A04TE800?refer=cp_1009",
            "summary": "280B MoE生活向大模型，专注长程Agent，昇腾0 Day适配。",
            "source": "腾讯新闻 / IT之家"
        },
        {
            "title": "第二届世界人形机器人运动会 8/22 北京开幕",
            "url": "https://big5.cri.cn/gate/big5/city.cri.cn/20260814/3f0abc9f-4382-4013-8e11-b8daf6790864.html",
            "summary": "8/22北京冰丝带开赛，2056台机器人、16国666队同台竞技。",
            "source": "人民网 / 国际在线"
        },
        {
            "title": "张一鸣明确反对把蒸馏当捷径，字节坚定大模型自研",
            "url": "https://www.163.com/dy/article/L4DC181G05561FZY.html",
            "summary": "张一鸣Seed全员会表态拒走蒸馏捷径，字节坚定自研。",
            "source": "网易 / 文伯虎财经"
        }
    ]
}
];
