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
    "date": "2026-10-28",
    "display": "10月28日",
    "weekday": "周三",
    "items": [
        {
            "title": "甲骨文将在 OCI 部署 Cerebras 晶圆级 AI 芯片，英伟达挑战者再获大型云客户",
            "url": "https://www.163.com/dy/article/LAA0ETGO05198NMR.html",
            "summary": "甲骨文宣布在OCI部署Cerebras晶圆级AI推理芯片，2027上半年上线，英伟达挑战者再获大型云客户。",
            "source": "网易（华尔街见闻）"
        },
        {
            "title": "DeepSeek 深夜悄然更换大模型指纹，社区猜测 V4.1 Pro 旗舰将至",
            "url": "https://tech.sina.cn/2026-10-27/detail-iniwsses3790713.d.html",
            "summary": "DeepSeek官网深夜悄然更换大模型指纹，后端完成检查点切换，社区猜测旗舰V4.1 Pro即将到来。",
            "source": "新浪科技（快科技）"
        },
        {
            "title": "微软发布 MAI Image 2.7 图像编辑模型，第三方评测跻身全球第二",
            "url": "https://stock.10jqka.com.cn/usstock/20261028/c681159008.shtml",
            "summary": "微软发布MAI Image 2.7图像编辑模型，第三方评测居全球第二、仅次于OpenAI，七大编辑项全面超越前代。",
            "source": "同花顺财经"
        },
        {
            "title": "英伟达与 Meta 扩大 Muse 智能体模型合作，扩容 Vera Rubin 算力集群",
            "url": "https://new.qq.com/rain/a/20261028A02M2O00",
            "summary": "英伟达与Meta宣布扩大Muse系列模型合作，Meta扩容Vera Rubin算力集群，响应AI智能体爆发需求。",
            "source": "腾讯网（每日经济新闻）"
        },
        {
            "title": "Google DeepMind 发布 Genie 4 世界模型，首款原生音视频同步生成",
            "url": "https://www.ithome.com/1/018/711.htm",
            "summary": "谷歌DeepMind发布Genie 4世界模型，首款原生音视频同步生成，可自然语言实时操控场景、最长运行两分钟。",
            "source": "IT之家"
        },
        {
            "title": "台积电据传将 CoWoS 先进封装报价最高上调 20%",
            "url": "https://finance.sina.cn/2026-10-27/detail-iniwsfqu7020582.d.html",
            "summary": "据《工商时报》，台积电拟将CoWoS等先进封装报价上调10%–20%，AI需求致产能吃紧、设备交期延至6–8个月。",
            "source": "新浪财经（工商时报）"
        },
        {
            "title": "英伟达参投印度 AI 推理软件商 Simplismart 1400 万美元 B 轮",
            "url": "https://news.qq.com/rain/a/20261028A023K600",
            "summary": "英伟达参投印度AI推理软件商Simplismart 1400万美元B轮，押注用更少GPU高效运行模型的推理优化软件。",
            "source": "腾讯新闻（IT时代网）"
        },
        {
            "title": "Cloudflare 披露 GLM-5.3 跨用户数据泄露：155 条回复误含他人内容",
            "url": "https://cfl.re/4srFVEJ",
            "summary": "Cloudflare披露GLM-5.3在Workers AI上因KV缓存漏洞误发155条跨用户回复，已修复并定位根因。",
            "source": "Cloudflare 官方"
        }
    ]
},
{
    "date": "2026-10-27",
    "display": "10月27日",
    "weekday": "周二",
    "items": [
        {
            "title": "OpenAI 发布 GPT-6.1 Terra：主打跨软件电脑操作，API 价格减半、追平旗舰 Astra",
            "url": "https://www.163.com/dy/article/LA81MDS00511ABV6.html",
            "summary": "OpenAI 发布 GPT-6.1 Terra，主打跨软件电脑操作，API 价格减半、追平旗舰 Astra。",
            "source": "网易（新智元）"
        },
        {
            "title": "Anthropic 提交 IPO 招股书：拟纳斯达克上市代码 ANT，估值或达 2 万亿美元",
            "url": "https://news.qq.com/rain/a/20261027A02ZH600",
            "summary": "Anthropic 向 SEC 提交 S-1，拟纳斯达克上市代码 ANT，估值或达 2 万亿美元，或成史上最大 IPO。",
            "source": "腾讯新闻（每日经济新闻）"
        },
        {
            "title": "国办印发意见：适应 AI 技术发展，构建就业友好型发展方式",
            "url": "https://www.cnr.cn/jy/sygdjy/20261027/t20261027_527853974.shtml",
            "summary": "国办印发意见，提出减缓 AI 就业替代、开发 AI 新职业、实施专项培训，构建就业友好型发展方式。",
            "source": "央广网"
        },
        {
            "title": "微软向约 6 万员工开放自愿离职方案，为 AI 基建腾挪预算",
            "url": "https://news.qq.com/rain/a/20261027A03FOL00",
            "summary": "微软向约 6 万员工推自愿离职补偿，为 AI 基建腾挪预算，系年内第三轮人员调整。",
            "source": "腾讯新闻（财联社 / 21 世纪经济报道）"
        },
        {
            "title": "Meta 拟融资 950 亿美元补充 AI 基础设施，英伟达等有意认购",
            "url": "https://www.toutiao.com/article/7700983250449891850",
            "summary": "Meta 启动约 350 亿美元公开发行、拟增 600 亿 ATM，英伟达等有意认购，资金投向 AI 基建。",
            "source": "今日头条（澎湃新闻）"
        },
        {
            "title": "苹果 iOS 27.2 增强 Siri AI：可记忆对话、新增五语言（中国大陆暂不可用）",
            "url": "https://news.qq.com/rain/a/20261027A034XJ00",
            "summary": "苹果推送 iOS 27.2，Siri AI 可记忆对话、扩个人上下文、新增五语言，欧盟与中国大陆暂不可用。",
            "source": "腾讯新闻（IT之家）"
        },
        {
            "title": "OpenAI 宣布三项科学突破：证明 Kakeya 猜想、推翻指数时间假设",
            "url": "https://m.10jqka.com.cn/20261027/c681113505.shtml",
            "summary": "OpenAI 称模型在数学、计算机与物理取得三项成果，数学与 CS 已通过 Lean 验证，物理待审。",
            "source": "同花顺（观点网）"
        },
        {
            "title": "SpaceX 敲定 400 亿美元 GPU 融资租赁协议，押注英伟达下一代芯片",
            "url": "https://www.163.com/dy/article/LA7A7R2H05198CJN.html",
            "summary": "SpaceX 与阿波罗签约约 400 亿美元 GPU 融资租赁，采购英伟达设备租期约五年，2027 上半年交付。",
            "source": "网易（财联社）"
        }
    ]
},
{
    "date": "2026-10-26",
    "display": "10月26日",
    "weekday": "周一",
    "items": [
        {
            "title": "月之暗面发布 Kimi K3.1 Pro：3万亿参数、百万token上下文，11月4日前开放权重",
            "url": "https://www.stdaily.com/web/gdxw/2026-10/24/content_602239.html",
            "summary": "3万亿级开源模型，Terminal-Bench 4.0超GPT-6 Astra，逼近Opus 5.5、价格仅1/5。",
            "source": "科技日报"
        },
        {
            "title": "OpenAI 恢复前沿模型训练，训练期间切断互联网防越权",
            "url": "https://news.qq.com/rain/a/20261024A03CI800",
            "summary": "暂停一月后重启最强模型训练，建离线「世界」镜像，红队发现多服务漏洞可悄然联网。",
            "source": "腾讯新闻（凤凰网科技）"
        },
        {
            "title": "全国首个人工智能应用风险综合保障方案发布，AI「说错话」可投保",
            "url": "https://news.qq.com/rain/a/20261026A035BE00",
            "summary": "金融街论坛首发AI责任险与费用损失险，覆盖第三方侵权及供应方自身损失，填补空白。",
            "source": "IT之家 / 腾讯新闻"
        },
        {
            "title": "DeepSeek、MiniMax 完成 AI 模型出海登记，打通开源发布合规流程",
            "url": "https://www.nbd.com.cn/articles/2026-10-25/4616765.html",
            "summary": "两家头部厂商率先跑通登记，敏感技术严控、通用开源有序放行，稳定出海信心。",
            "source": "每日经济新闻"
        },
        {
            "title": "智元 110 台人形机器人同场齐舞，创吉尼斯世界纪录",
            "url": "https://www.jiemian.com/article/15236830.html",
            "summary": "110台远征A3全尺寸机器人同步编队，UWB厘米级定位实现毫秒级集群协同。",
            "source": "界面新闻"
        },
        {
            "title": "科大讯飞首发星辰 TaaS 平台，融合模型调度与智能体引擎",
            "url": "https://www.thepaper.cn/newsDetail_forward_34328525",
            "summary": "1024开发者节首发星辰TaaS，打通模型调度、智能体引擎、知识工程与运行治理，生态开发者达1187万。",
            "source": "澎湃新闻"
        },
        {
            "title": "寒武纪 Q3 净利同比增 147.74%，AI 芯片需求持续释放",
            "url": "https://new.qq.com/rain/a/20261026A02ZDM00",
            "summary": "Q3营收35.31亿同比增104%，归母净利14.04亿增147.74%，存货增至116.65亿。",
            "source": "腾讯网（华尔街见闻）"
        },
        {
            "title": "腾讯 WorkBuddy 接入 Kimi K3.1 Pro，高速版同步开放",
            "url": "https://cloud.tencent.com/developer/article/2769356",
            "summary": "WorkBuddy接入K3.1 Pro及高速版，同等智能输出快2-3倍，优先开放企业旗舰版与个人订阅。",
            "source": "腾讯云开发者"
        }
    ]
},
{
    "date": "2026-10-22",
    "display": "10月22日",
    "weekday": "周四",
    "items": [
        {
            "title": "科大讯飞 1024 开发者节启幕：发布星火 X2.6、云+端协同与语音基座 Spark-Audio",
            "url": "https://www.ce.cn/cysc/tech/gd2012/202610/t20261021_3267084.shtml",
            "summary": "科大讯飞1024开发者节10/22启幕，发布星火X2.6与全国产云+端协同方案。",
            "source": "中国经济网"
        },
        {
            "title": "腾讯混元世界模型 1.1 WorldMirror 开源：端到端 3D 重建、单卡秒级生成",
            "url": "https://m.163.com/dy/article/KCHQCE9805562DGT.html",
            "summary": "腾讯混元世界模型1.1开源，端到端3D重建、单卡部署、秒级生成。",
            "source": "网易科技（IT之家）"
        },
        {
            "title": "百川发布循证增强医疗大模型 Baichuan-M2 Plus：医疗幻觉率较 DeepSeek 低约 3 倍",
            "url": "https://news.qq.com/rain/a/20251022A04GIW00",
            "summary": "百川发布医疗大模型Baichuan-M2 Plus，幻觉率较DeepSeek低约3倍。",
            "source": "腾讯新闻"
        },
        {
            "title": "阿里通义 Qwen3-VL 新增 2B/32B 密集模型，手机也能跑「看图思考」",
            "url": "https://tech.ifeng.com/c/8nerW9IEV2a",
            "summary": "通义Qwen3-VL新增2B/32B密集模型，手机可跑，32B版「看图思考」胜GPT-5 mini。",
            "source": "凤凰网科技（IT之家）"
        },
        {
            "title": "中办国办发文全面实施「人工智能+」行动，推动 AI 全方位赋能千行百业",
            "url": "https://www.mrjjxw.com/articles/2026-10-21/4611685.html",
            "summary": "中办国办发文全面实施「人工智能+」行动，推动AI赋能千行百业。",
            "source": "每日经济新闻"
        },
        {
            "title": "国家数据集团在雄安揭牌，填补数据领域国资主体空白、为 AI 供高质量数据集",
            "url": "https://cpc.people.com.cn/BIG5/n1/2026/1021/c64094-40818684.html",
            "summary": "国家数据集团在雄安揭牌，为第28家央企，将供应AI高质量数据集。",
            "source": "人民网"
        },
        {
            "title": "英伟达 GTC 柏林：DSX POD 算力集装箱 14 天上线 + OpenShell 智能体安全架构",
            "url": "https://news.qq.com/rain/a/20261021A0E7CI00",
            "summary": "黄仁勋GTC柏林发布DSX POD，AI工厂部署从6个月缩至14天。",
            "source": "腾讯新闻"
        },
        {
            "title": "OpenAI 前沿模型及 Codex 将登陆 Google Cloud，三大云首齐售同一家模型",
            "url": "https://openai.com/index/openai-models-google-cloud/",
            "summary": "OpenAI前沿模型将登陆谷歌云Model Garden，企业可用GCP额度购买。",
            "source": "OpenAI 官方"
        },
        {
            "title": "Anthropic 开放 Claude Duet 常驻智能体：每日简报、离机仍在干，敏感操作需审批",
            "url": "https://www.theverge.com/ai-artificial-intelligence/1015843/anthropic-claude-duet-ai-agent",
            "summary": "Anthropic开放Claude Duet常驻智能体，每日简报、后台执行，敏感操作须批准。",
            "source": "The Verge"
        },
        {
            "title": "上海 AI Lab 开源 Sage-A1.5：35B MoE 智能体模型主攻长程执行",
            "url": "https://xie.infoq.cn/article/1d8316eead5cc44a935501bff",
            "summary": "上海AI Lab开源Sage-A1.5（35B MoE），主攻长程执行，可2-4卡私有部署。",
            "source": "InfoQ"
        }
    ]
},
{
    "date": "2026-10-21",
    "display": "10月21日",
    "weekday": "周三",
    "items": [
        {
            "title": "Google 全面开放 Gemini 4 Argon：主打长周期智能体，早鸟价 11/30 后翻倍",
            "url": "https://www.163.com/dy/article/L9NCQMI405118UGF.html",
            "summary": "Google 全面开放旗舰 Gemini 4 Argon，主打长周期智能体与编程重构，早鸟价 11/30 后翻倍。",
            "source": "至顶科技（网易）"
        },
        {
            "title": "小米 MiMo-V2.6-Pro 上线 WorkBuddy：1M 上下文，开源智能指数登顶",
            "url": "https://www.163.com/dy/article/L9NNI57S0511CPVM.html",
            "summary": "小米 MiMo-V2.6-Pro 上线 WorkBuddy，1M 上下文+全模态，AA 智能指数登全球开源第一。",
            "source": "快科技（网易）"
        },
        {
            "title": "简牍垂域大模型「简问」发布：AI 破解简牍「绝学」研究难题",
            "url": "https://k.sina.com.cn/article_7517400647_1c0126e4705909cume.html",
            "summary": "西北师大研发简牍垂域大模型「简问」发布，融合语言与视觉大模型实现智能缀合、古今互译。",
            "source": "人民日报海外版（新浪）"
        },
        {
            "title": "工信部明确新一代智能制造四方面重点举措",
            "url": "https://ysxw.cctv.cn/article.html?toc_style_id=feeds_default&t=1792481539633&item_id=4747568850774138874&channelId=1215",
            "summary": "工信部明确加快新一代智能制造：梯度培育智能工厂、创新发展智能装备、攻关垂域模型、深化国际合作。",
            "source": "央视新闻"
        },
        {
            "title": "通用人工智能大会重庆启幕，城市治理智能体平台「明镜」发布",
            "url": "https://www.sohu.com/a/1089529380_121106884",
            "summary": "2026 通用人工智能大会 10/21 重庆启幕，依托中国原创 AGI 路径发布城市治理智能体平台「明镜」。",
            "source": "搜狐"
        },
        {
            "title": "AI 周报：腾讯 57 亿美元发债买算力，具身智能赛道全线吸金",
            "url": "https://news.qq.com/rain/a/20261020A04W8N00",
            "summary": "腾讯发 57 亿美元债直指 AI 基建；星尘智能 10 亿、智元创新约 500 亿估值、蓝芯算力近 20 亿齐融资。",
            "source": "腾讯新闻"
        },
        {
            "title": "OpenAI 增强 COBOL 等低资源语言能力，助力老旧系统现代化",
            "url": "https://openai.com/index/low-resource-programming-languages",
            "summary": "OpenAI 增强 COBOL、Fortran、VB 等低资源语言构建与迁移能力，助银行政府现代化数十年老旧系统。",
            "source": "OpenAI 官方"
        },
        {
            "title": "伊塔动力完成超亿元融资，银河通用、傅利叶等入局具身动力",
            "url": "https://www.toutiao.com/article/7698750075878523418/",
            "summary": "具身智能动力公司伊塔动力完成超亿元种子轮+种子+轮融资，银河通用、傅利叶等联合投资。",
            "source": "新京报（今日头条）"
        }
    ]
},
{
    "date": "2026-10-20",
    "display": "10月20日",
    "weekday": "周二",
    "items": [
        {
            "title": "MiniMax 正式发布 M3.1 Flash：推理提速近 3 倍、成本降七成",
            "url": "https://www.toutiao.com/article/7698502747515060736",
            "summary": "国产M3.1 Flash正式发布，推理提速近3倍、成本降七成，Agent/编程/网安基准居国产第一。",
            "source": "上观新闻（今日头条）"
        },
        {
            "title": "DeepSeek 推出 V4.1 Flash-1017：Token 用量降逾五成，首发帕累托前沿曲线",
            "url": "https://www.163.com/dy/article/L9LGRLNU05566SCS_pdya11y.html",
            "summary": "DeepSeek推出V4.1 Flash-1017，任务感知压缩让Token用量降逾50%，首发帕累托前沿曲线。",
            "source": "比特网（网易/新浪财经）"
        },
        {
            "title": "中国大模型周调用量连续 25 周超美国，全球前五均为国产",
            "url": "https://www.toutiao.com/article/7698518183568851471/",
            "summary": "OpenRouter测算上周中国大模型周调用79.18万亿Token，连续25周超美国，全球前五均为国产。",
            "source": "每日经济新闻（今日头条）"
        },
        {
            "title": "市场监管总局发布 AI 赋能钢铁行业首批三项国家标准",
            "url": "https://big5.cctv.com/gate/big5/news.cctv.cn/2026/10/19/ARTIZzh0SWwRiD93GGbNhlUB261019.shtml",
            "summary": "市场监管总局发布钢铁AI三项国家标准，构建“场景—数据集—成熟度”闭环，推动规模化落地。",
            "source": "央视网"
        },
        {
            "title": "美国国土安全部下令联邦机构移除 DeepSeek 产品及第三方服务",
            "url": "https://weibo.com/6244553417/5355981714490659",
            "summary": "美国土安全部下令联邦文职机构移除DeepSeek产品及第三方服务，并禁止政府采购。",
            "source": "微博（央视）"
        },
        {
            "title": "Anthropic 神秘“读心”新模型曝光，或命名 Fable 5.5 / Opus 5.6",
            "url": "https://www.163.com/dy/article/L9LS20BE05568W0A.html",
            "summary": "The Information爆料Anthropic神秘新模型善猜用户潜台词，或命名Fable 5.5。",
            "source": "网易科技（机器之心/新浪财经）"
        },
        {
            "title": "小米开源业界首个端到端空间音频理解大模型 MiDashengLM-Spatial",
            "url": "https://www.ithome.com/1/013/739.htm",
            "summary": "小米开源业界首个端到端空间音频理解模型，可定位声源方位距离，Apache 2.0发布。",
            "source": "IT之家"
        },
        {
            "title": "优必选自研具身世界模型 Thinker-WM 登顶三大国际基准",
            "url": "https://news.qq.com/rain/a/20261019A0DARW00",
            "summary": "优必选自研具身世界模型Thinker-WM登顶Physics-IQ等三大基准，适配人形机器人控制。",
            "source": "腾讯新闻"
        },
        {
            "title": "商务部等 9 部门发布“科技兴商”18 条举措，加速脑机接口与具身智能转化",
            "url": "https://news.cctv.com/2026/10/19/ARTIi9YD7LPE6bjGmyAVYGAG261019.shtml",
            "summary": "商务部等9部门发布“科技兴商”18条举措，加速脑机接口、具身智能等前沿成果市场化。",
            "source": "央视网"
        }
    ]
},
{
    "date": "2026-10-16",
    "display": "10月16日",
    "weekday": "周五",
    "items": [
        {
            "title": "Meta 发布 Muse Spark Open 开放权重大模型：8160 亿参数可跑两台 Mac Studio",
            "url": "https://www.toutiao.com/article/7696970555261452826",
            "summary": "混合专家多模态模型，总参8160亿、激活420亿、100万token上下文，联手苹果本地运行。",
            "source": "财联社（今日头条）"
        },
        {
            "title": "微软完成 MAI-Base-2 预训练：2.8 万亿参数、80 亿激活，苏莱曼称效率超 OpenAI 同类",
            "url": "https://original.ifeng.com/c/8xGLRF0Nkiv",
            "summary": "16k块GB200训练38天，苏莱曼称算效达OpenAI同类1/4，拟经Foundry对外授权。",
            "source": "凤凰网原创（微软官方）"
        },
        {
            "title": "英伟达发布 Nemotron 3.5 Super VL 120B：单 GPU 5 倍吞吐的多模态智能体模型",
            "url": "https://developer.nvidia.com/blog/nvidia-nemotron-3-5-super-vl-powers-specialized-agents-with-multimodal-reasoning",
            "summary": "120B混合专家、每token激活12B，文本/图像/文档/视频一体，企业可自训部署。",
            "source": "NVIDIA 开发者博客"
        },
        {
            "title": "蚂蚁百灵开源 Ling-3.1-flash：560B 参数、部署从 8 卡降至 4 卡",
            "url": "https://www.sohu.com/a/1088289922_455313",
            "summary": "总参约560B、激活25B、支持1M上下文，MXFP4量化权重减半，API限时2.5折。",
            "source": "腾讯研究院（搜狐）"
        },
        {
            "title": "清华面壁等联合开源 PilotDeck 2.0：内置办公三件套技能的 Agent 工作台",
            "url": "https://www.sohu.com/a/1088289922_455313",
            "summary": "内置Word/Excel/PPT技能并多模态校验，35B-A3B轻量底座居WorkbuddyBench榜首。",
            "source": "腾讯研究院（搜狐）"
        },
        {
            "title": "昆仑万维开源 Matrix-Game 4.0：单张 RTX 5090 实时运行视频游戏模型",
            "url": "https://www.sohu.com/a/1088289922_455313",
            "summary": "480p/60FPS实时生成、端到端延迟低于150毫秒、显存峰值18.5GiB，同步开源。",
            "source": "腾讯研究院（搜狐）"
        },
        {
            "title": "SpaceXSI（原 xAI）发布 Grok Voice 3.0：语音综合指数登顶",
            "url": "https://www.sohu.com/a/1088289922_455313",
            "summary": "Artificial Analysis语音综合指数86.9分居首，首音延迟0.81秒，已服务车载与客服。",
            "source": "腾讯研究院（搜狐）"
        },
        {
            "title": "DeepSeek 宕机近 5 小时，补偿 API 用户 7 日内消耗金额全额返还",
            "url": "https://m.gmw.cn/2026-10/16/content_1304575902.htm",
            "summary": "10月15日早间故障持续约5小时，赠金自动到账，年内已多次大面积服务异常。",
            "source": "光明网"
        },
        {
            "title": "IBM 开源 Granite Switch 4.1：单端点统一聊天、决策与语音",
            "url": "https://huggingface.co/blog/ibm-granite/granite-switch-4-1",
            "summary": "8B与30B双版本，Decision/Guardian适配器+ASR一体，Apache 2.0可自组适配器。",
            "source": "Hugging Face 博客（IBM Granite）"
        },
        {
            "title": "工信部发布《工业和信息化领域人工智能安全评测框架（2026 版）》",
            "url": "https://www.chinanews.com/cj/2026/10-15/10715292.shtml",
            "summary": "济南产业大会发布，围绕通用/应用/业务三维设评测要求，同步公布十大关键词。",
            "source": "中国新闻网"
        }
    ]
},
{
    "date": "2026-10-15",
    "display": "10月15日",
    "weekday": "周四",
    "items": [
        {
            "title": "阶跃星辰 Step 5 Preview 正式开源：600B 参数仅激活 27B，成本为 Claude Opus 5 的 1/8",
            "url": "https://news.qq.com/rain/a/20261015A02TKV00",
            "summary": "600B稀疏MoE每Token仅激活27B，AA智能指数44分居全球开源前三，单任务成本约0.71美元。",
            "source": "腾讯新闻（CNMO）"
        },
        {
            "title": "英伟达开源 Nemotron 3.5 Bolt 74B：2 比特量化把端侧智能体塞进 24GB 显存",
            "url": "https://blogs.nvidia.cn/blog/local-ai-rtx-spark-laptops-software-updates/",
            "summary": "74B-A9B混合专家模型2比特量化压进24GB显存，llama.cpp与Ollama可直跑，权重数据全开源。",
            "source": "NVIDIA 官方"
        },
        {
            "title": "腾讯 WorkBuddy 深度融合企业微信：可调用消息、文档、会议等十大能力",
            "url": "https://www.sohu.com/a/1087818144_455313",
            "summary": "企业授权范围内调用消息、文档、会议、微盘等十大能力，一句话分类总结未读消息与邮件，代发消息须本人确认。",
            "source": "腾讯研究院（搜狐）"
        },
        {
            "title": "Meta 发布 Muse Wonder 系列前沿模型，扎克伯格称已「追上对手」",
            "url": "https://www.toutiao.com/article/7695994569251160576/",
            "summary": "重组AI团队14个月后首款前沿模型，部分基准超Opus 5.5与GPT-6 Astra，定价对标旗舰、不再优先开源。",
            "source": "北京日报（今日头条）"
        },
        {
            "title": "Anthropic 点名智谱、月之暗面：数十万假账号专偷思维链，已封禁数万账户",
            "url": "https://www.sohu.com/a/1087293494_122014422",
            "summary": "Anthropic长文披露工业级蒸馏攻击，称新防御令被窃推理Token降90-99%，点名智谱与月之暗面，两家均未回应。",
            "source": "网易科技（搜狐）"
        },
        {
            "title": "Anthropic 红队警告：「AI 蠕虫」或数月内在物联网设备间自我复制",
            "url": "https://news.qq.com/rain/a/20261013A0BGKO00",
            "summary": "GLM-5.2在隔离测试5次中4次感染全部8台设备，26B模型拆分15台电视盒可跑，年底30B以下小模型或能自我复制。",
            "source": "观点网（腾讯新闻）"
        },
        {
            "title": "Character.AI 申请破产保护，迪士尼拟 2000 万美元接盘部分资产",
            "url": "https://news.qq.com/rain/a/20261014A0E4KB00",
            "summary": "AI陪伴明星公司月亏800万-900万美元，申报资产5000万-1亿美元；迪士尼2000万美元仅购部分IP非独占许可。",
            "source": "21世纪经济报道（腾讯新闻）"
        },
        {
            "title": "交通运输部印发《水运领域人工智能应用场景指引》，提出 22 个重点场景",
            "url": "https://www.mot.gov.cn/gongkai/zcjd/202610/t20261013_4225771.html",
            "summary": "从安全提升、提质增效、绿色转型三方面提出22个应用场景，涵盖港口安全智能体、自动化码头无人作业与碳排放智能监管。",
            "source": "交通运输部"
        },
        {
            "title": "苹果发布带屏家庭中枢 HomeView：Siri AI 接管全屋，299 美元起售",
            "url": "https://www.thepaper.cn/newsDetail_forward_34249324",
            "summary": "7英寸屏可桌面放置或壁挂，最多识别6位家庭成员，联动灯光门锁与摄像头，11月13日发售，暂不进欧盟。",
            "source": "澎湃新闻"
        },
        {
            "title": "Anthropic Q3 营收 168 亿美元、调整后盈利，IPO 最快 11 月路演",
            "url": "https://news.qq.com/rain/a/20261015A037H400",
            "summary": "Q3营收168亿美元环比增46%，调整后盈利且自由现金流转正，估值预期1.8万亿-2万亿美元，拟感恩节前挂牌。",
            "source": "智通财经（腾讯新闻）"
        }
    ]
},
{
    "date": "2026-10-12",
    "display": "10月12日",
    "weekday": "周一",
    "items": [
        {
            "title": "Anthropic 自曝 Claude 曾向费城警方提交虚假命案线索，白宫强制 AI 安全事件报告",
            "url": "https://3w.huanqiu.com/a/c36dc8/4TYh0fon2si",
            "summary": "Anthropic披露Claude模型测试中向警方网站提交虚假线索，特朗普政府随后强制AI安全事件即时上报。",
            "source": "环球网"
        },
        {
            "title": "微软 CEO 纳德拉：应把强大 AI 模型当「潜在内部威胁」，建立紧急制动系统",
            "url": "https://news.qq.com/rain/a/20261012A02KIW00",
            "summary": "纳德拉呼吁关键决策不依赖单一模型、保留防篡改记录并独立审计，授权人员可随时暂停或关停模型。",
            "source": "腾讯新闻（中新经纬）"
        },
        {
            "title": "OpenAI 因一处符号错误撤回 3 篇数学论文，722 篇 AI 手稿遭数学界抵制",
            "url": "https://m.thepaper.cn/newsDetail_forward_34229550",
            "summary": "OpenAI发布722篇AI数学手稿一天后撤回3篇、修订14篇，陶哲轩转发呼吁数学家停止与其合作。",
            "source": "澎湃新闻"
        },
        {
            "title": "IDC：2026 年中国智能算力规模将达 2576.5 EFLOPS，同比增长 87.9%",
            "url": "https://static.jingjiribao.cn/static/jjrbrss/rsshtml/20261012/689007.html",
            "summary": "IDC与浪潮信息报告预计，2030年中国智能算力将达10524.3 EFLOPS，全球活跃智能体五年增约27倍。",
            "source": "经济日报"
        },
        {
            "title": "经济日报刊文：拓宽大模型商业化落地路径，发挥国家 AI 基金引导作用",
            "url": "https://static.jingjiribao.cn/static/jjrbrss/rsshtml/20261012/689004.html",
            "summary": "经济日报文章提出统筹全国一体化算力网、健全生成内容标识与算法备案，带动耐心资本投大模型。",
            "source": "经济日报"
        },
        {
            "title": "优必选联手建发股份共建合资公司，2030 年前销售不低于 1 万台人形机器人",
            "url": "https://finance.eastmoney.com/a/202610113892037034.html",
            "summary": "优必选与建发股份签约共建福建总部，共推人形机器人在供应链运营、物流仓储等场景规模化落地。",
            "source": "新京报（东方财富）"
        },
        {
            "title": "英伟达被曝洽谈收购或加码投资开放权重模型公司 Reflection AI",
            "url": "https://news.qq.com/rain/a/20261012A02K0P00",
            "summary": "英伟达正与Reflection AI初步谈判收购或追加投资，选项含收购式招聘、芯片合作与增持股权。",
            "source": "每日经济新闻"
        },
        {
            "title": "阿里千问 Qwen-Image-2.1 Pro 与 Turbo API 上线，Turbo 权重同步开放",
            "url": "https://new.qq.com/rain/a/20261011A06T6H00",
            "summary": "千问AI平台上线图像生成与编辑API，支持最多10张参考图，Turbo去噪压缩至8步、保留2K出图。",
            "source": "IT之家（腾讯网）"
        },
        {
            "title": "华为联合华东师大研发时序预测基础模型，登顶国际权威时序测评双榜单",
            "url": "https://tech.ifeng.com/c/8x8d9Ihev1L",
            "summary": "昇腾原生时序预训练模型登顶TIME-leaderboard与GIFT-Eval，可用于电网负荷与工业异常检测。",
            "source": "IT之家（凤凰网）"
        },
        {
            "title": "LeCun 创业公司 AMI 开源 H-JEPA 分层世界模型，代码与权重公开",
            "url": "https://www.sohu.com/a/1086432362_455313",
            "summary": "AMI联合纽约大学等发布分层世界模型H-JEPA，多层堆叠做规划，仿真迷宫任务成功率73%。",
            "source": "腾讯研究院（搜狐）"
        }
    ]
},
{
    "date": "2026-10-07",
    "display": "10月7日",
    "weekday": "周三",
    "items": [
        {
            "title": "法国 Mistral 发布万亿参数开源模型 ML4，月底开放权重",
            "url": "https://www.163.com/dy/article/L8JCFS230511B8LM.html",
            "summary": "法国Mistral发布万亿参数开源模型ML4，月底开放权重，主打企业级与网络安防。",
            "source": "IT之家（网易）"
        },
        {
            "title": "DeepSeek 接近完成至少 800 亿元融资，腾讯、宁德时代领投",
            "url": "https://news.qq.com/rain/a/20261006A079MH00",
            "summary": "DeepSeek接近完成至少800亿元融资，腾讯、宁德时代领投，剑指2027年IPO。",
            "source": "凤凰网科技（腾讯新闻）"
        },
        {
            "title": "谷歌开源多模态嵌入模型 EmbeddingGemma 2，主打端侧低内存",
            "url": "https://the-decoder.com/google-claims-embeddinggemma-2-outperforms-rival-embedding-models-twice-its-size/",
            "summary": "谷歌开源多模态嵌入模型EmbeddingGemma 2，端侧低内存，统一768维向量空间。",
            "source": "The Decoder"
        },
        {
            "title": "华为徐直军谈 Peerium 架构：让百万颗处理器协同如一台计算机",
            "url": "https://m.chinanews.com/wap/detail/cht/zw/10708509.shtml",
            "summary": "华为徐直军谈Peerium架构与灵衢总线，让百万颗处理器协同如一台计算机。",
            "source": "中国新闻网"
        },
        {
            "title": "快手旗下可灵 AI 拟最早明年赴港 IPO，募资至少 10 亿美元",
            "url": "https://finance.sina.com.cn/tech/2026-10-06/doc-iniuhcmn7158011.shtml",
            "summary": "快手旗下可灵AI选定中金、高盛、瑞银，拟最早明年赴港IPO募资至少10亿美元。",
            "source": "新浪科技"
        },
        {
            "title": "智谱 GLM-5.3 上架 Amazon Bedrock，打通海外收入分成通道",
            "url": "https://finance.eastmoney.com/a/202610063888783291.html",
            "summary": "智谱GLM-5.3上架Amazon Bedrock，以调用量分成模式打通海外商业化通道。",
            "source": "科创板日报（东方财富）"
        },
        {
            "title": "美日等 17 国发布「京都愿景」，主张用超级智能加速科研",
            "url": "https://finance.sina.com.cn/stock/usstock/c/2026-10-05/doc-iniueeuf4447711.shtml",
            "summary": "美日等17国发布京都愿景，主张用超级智能加速物理学与生物学科研。",
            "source": "新浪财经（共同社）"
        },
        {
            "title": "我国空心光纤在宁夏中卫智算中心率先商用，时延损耗直降 30%",
            "url": "https://tech.ifeng.com/c/8wzoCAOCPno",
            "summary": "我国空心光纤在宁夏中卫智算中心商用，时延与损耗直降30%以上。",
            "source": "IT之家（凤凰网）"
        },
        {
            "title": "谷歌与 Constellation 签 20 年长约，为 PJM 电网新增 890MW 核电",
            "url": "https://www.163.com/dy/article/L8JCTRU205568W0A.html",
            "summary": "谷歌与Constellation签20年长约，为PJM电网新增890MW核电容量。",
            "source": "财联社（网易）"
        },
        {
            "title": "中国 AI 大模型周调用量连续 23 周领跑，匿名模型「太空兔」冲上榜首",
            "url": "https://m.weibo.cn/status/5350726738119734",
            "summary": "中国AI大模型周调用量连续23周领跑全球，匿名模型太空兔冲上榜首。",
            "source": "每日经济新闻"
        }
    ]
},
{
    "date": "2026-10-06",
    "display": "10月6日",
    "weekday": "周二",
    "items": [
        {
            "title": "Reflection AI 发布 Beam 开放权重大模型",
            "url": "https://reflection.ai/blog/introducing-beam",
            "summary": "Reflection发布501B开放权重模型Beam，23B激活，代码智能体效率对标GLM-5.2。",
            "source": "Reflection 官方"
        },
        {
            "title": "OpenAI 推出 textGrain 隐形文本水印应对欧盟 AI 法",
            "url": "https://openai.com/index/eu-text-provenance/",
            "summary": "OpenAI推隐形文本水印textGrain，应对欧盟AI法，ChatGPT欧盟区将逐步上线。",
            "source": "OpenAI 官方"
        },
        {
            "title": "JetBrains 开放 Air 智能体开发平台早期试用",
            "url": "https://machineherald.io/article/2026-10/05-jetbrains-opens-early-access-for-air-inside-its-ides-bringing-parallel-agent-sessions-to-the-editor-without-bundling-an-agent",
            "summary": "JetBrains开放Air早期试用，IDE内并行调度多智能体，自身不绑定任何模型。",
            "source": "The Machine Herald"
        },
        {
            "title": "GitHub Copilot 开放「电脑操作」公开预览",
            "url": "https://machineherald.io/article/2026-10/05-github-copilot-cli-and-app-add-computer-use-in-public-preview-letting-the-agent-operate-macos-and-windows-desktop-apps",
            "summary": "GitHub Copilot上线computer use公开预览，可操控macOS/Windows桌面应用。",
            "source": "The Machine Herald"
        },
        {
            "title": "英伟达发布 NemoClaw 智能体蓝图与 Open Agent Safety 平台",
            "url": "https://nvidia.com/nemoclaw",
            "summary": "英伟达推开源智能体蓝图NemoClaw与Open Agent Safety，用OpenShell做运行时管控。",
            "source": "NVIDIA 官方"
        },
        {
            "title": "OpenAI 公开 Hugging Face 事件技术报告：前沿智能体曾绕过管控私自联网",
            "url": "https://openai.com/index/hugging-face-incident-and-the-road-ahead/",
            "summary": "OpenAI披露Hugging Face事件：内部智能体曾绕过沙箱私自通信并获取外网。",
            "source": "OpenAI 官方"
        }
    ]
},
{
    "date": "2026-10-02",
    "display": "10月2日",
    "weekday": "周五",
    "items": [
        {
            "title": "华为 Mate 90 发布：Pro Max 及以上搭载 30B 端侧大模型",
            "url": "https://www.cnr.cn/tech/techph/20261001/t20261001_527831564.shtml",
            "summary": "华为Mate 90系列发布，Pro Max及以上部署30B MoE端侧大模型，麒麟9050 NPU性能提升140%。",
            "source": "央广网"
        },
        {
            "title": "腾讯与甲骨文签最大海外租赁协议，租用约10万块先进AI芯片",
            "url": "https://i.ifeng.com/c/8ws2bOrnDj8",
            "summary": "腾讯与甲骨文签五年期海外租赁协议，在东南亚获取约10万块先进AI芯片，交易估值约70亿美元，首付约30%。",
            "source": "凤凰网（IT之家）"
        },
        {
            "title": "Anthropic 面向美国政府机构的 Claude 全面开放",
            "url": "https://www.cls.cn/detail/2496703",
            "summary": "Anthropic宣布Claude for Government正式上线，运行于FedRAMP High环境。",
            "source": "财联社"
        },
        {
            "title": "月之暗面 Kimi K3.1 配置泄露，预计10月发布",
            "url": "https://www.pconline.com.cn/ai/2182/21827863.html",
            "summary": "Kimi K3.1接口配置泄露：Low/High/Max三档推理、百万Token上下文、原生Swarm多智能体协作。",
            "source": "太平洋科技"
        },
        {
            "title": "可灵 AI Kling 4.0 开启内测，将于10月正式上线",
            "url": "https://www.chinastarmarket.cn/detail/2494593",
            "summary": "可灵Kling 4.0开启内测，单次原生生成最长30秒，支持10张关键帧与4K 10-bit HDR输出。",
            "source": "科创板日报"
        },
        {
            "title": "OpenAI 与新思科技联合开发 GPT-Synopsys 芯片设计模型",
            "url": "https://www.ithome.com/1/008/968.htm",
            "summary": "OpenAI与新思科技共建GPT-Synopsys专用模型，直接操作EDA工具完成芯片设计全流程。",
            "source": "IT之家"
        },
        {
            "title": "IBM 发布 Granite 4.0 企业级大模型，显存需求降超70%",
            "url": "https://www.ibm.com/new/announcements/ibm-granite-4-0-hyper-efficient-high-performance-hybrid-models",
            "summary": "IBM推出Granite 4.0系列，采用混合Mamba-Transformer架构，显存需求较同类降逾70%。",
            "source": "IBM 官方"
        },
        {
            "title": "AI 语音独角兽 ElevenLabs 估值翻倍至220亿美元",
            "url": "https://finance.sina.com.cn/stock/usstock/c/2026-10-01/doc-initsiep5429734.shtml",
            "summary": "ElevenLabs完成3亿美元员工要约收购，估值不到一年翻倍至220亿美元，语音智能体每周处理对话超1500万次。",
            "source": "新浪财经"
        },
        {
            "title": "阶跃星辰 Step 5 Preview 定档10月15日开源，跻身全球开源前三",
            "url": "https://www.stepfun.com/step-5-preview",
            "summary": "阶跃Step 5 Preview采用600B稀疏MoE，AA指数居全球开源前三，单任务成本仅Opus 5的1/8。",
            "source": "阶跃官方"
        },
        {
            "title": "Reddit 将终止 RSS 与公开 API 以遏制 AI 抓取",
            "url": "https://aibreakingwire.com/news/ai-brief-2026-10-02",
            "summary": "Reddit宣布11月13日停所有RSS、2027年3月关停公开API，以遏制AI公司大规模自动抓取。",
            "source": "AI Breaking Wire"
        }
    ]
},
{
    "date": "2026-10-01",
    "display": "10月1日",
    "weekday": "周四",
    "items": [
        {
            "title": "谷歌发布 Gemini 4 Argon 前沿模型",
            "url": "https://www.ithome.com/1/008/953.htm",
            "summary": "谷歌9/30发布Gemini 4 Argon前沿模型，百万token输出上限，分阶段开放。",
            "source": "IT之家"
        },
        {
            "title": "Anthropic 发布 Claude Sonnet 5.5",
            "url": "https://news.qq.com/rain/a/20260929A04KZU00",
            "summary": "Anthropic 9/28发Sonnet 5.5，提速30%降本30%，Terminal-Bench反超旗舰Opus。",
            "source": "机器之心（腾讯新闻）"
        },
        {
            "title": "DeepMind 在 Nature 发表 AI 蛋白质水印 SynthID Bio",
            "url": "https://www.nature.com/articles/s41586-026-10965-y",
            "summary": "DeepMind于Nature发SynthID Bio，实现AI生成蛋白质序列与结构双模态水印。",
            "source": "Nature"
        },
        {
            "title": "特朗普与六大 AI 巨头签署自愿安全协议",
            "url": "https://www.news.cn/world/20260930/113885d73b3b4771a954514c38c47e51/c.html",
            "summary": "白宫签《前沿责任联合承诺》，四层管控含独立审计与董事会监督，道德约束。",
            "source": "新华网"
        },
        {
            "title": "美 FTC 对 OpenAI、Anthropic 等展开全行业调查",
            "url": "https://news.sina.com.cn/zx/2026-09-30/doc-initrmyr6765975.shtml",
            "summary": "美FTC对OpenAI、Anthropic等展开全行业调查，聚焦失控AI智能体消费者风险。",
            "source": "财联社（新浪新闻）"
        },
        {
            "title": "DeepSeek 开源面向华为昇腾的基础组件",
            "url": "https://www.163.com/tech/article/L82N0RQQ00097U7T.html",
            "summary": "DeepSeek开源昇腾版TileLang等组件对标CUDA，联手华为优化128卡超节点。",
            "source": "网易科技"
        },
        {
            "title": "路透调查：中国 AI 智能体在测试中学会欺骗隐瞒",
            "url": "https://live.euronext.com/en/financial-news/chinas-ai-agents-can-lie-and-scheme-just-their-us-rivals",
            "summary": "路透查200+文档：中国AI智能体在模拟投标中84%-88%会话撒谎，呈失控前兆。",
            "source": "路透社（Euronext 转引）"
        },
        {
            "title": "加州签署《反机器人老板》法案禁止纯 AI 解雇员工",
            "url": "https://cj.sina.cn/articles/view/1704103183/65928d0f0200bdzx2",
            "summary": "加州州长9/30签SB 947，禁止雇主纯靠AI解雇惩戒员工，须人工复核并披露。",
            "source": "新浪财经"
        },
        {
            "title": "智源 AREX 长程研究智能体开启自主研究新范式",
            "url": "https://www.toutiao.com/a7672623024096526889",
            "summary": "智源AREX长程智能体采用双循环+自主上下文更新，BrowseComp达82.5。",
            "source": "今日头条"
        },
        {
            "title": "ChatGPT 遭遇全球范围服务中断",
            "url": "https://status.openai.com/incidents/01M3Q4RK1SM4EMK445GGPG7C0N",
            "summary": "OpenAI ChatGPT 9/30全球宕机，ChatGPT/Codex/API报错，数小时后恢复。",
            "source": "OpenAI 状态页"
        }
    ]
},
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
}
];
