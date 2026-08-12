/**
 * AI家AI户 · 每日AI资讯数据
 * 结构：每个元素为 { date, display, weekday, items:[ {title,url,summary,source} ] }，整体赋值给 window.AIHomeNews。
 * 每条 items 即一条快讯；date 为 ISO 日期（YYYY-MM-DD），display/weekday 仅用于页面展示。
 * 工作日更新，每天数条。新增一天只需在最前面插入一个 day 对象即可。
 * 仙侠站数据由 xianxia/scripts/convert_news.py 解析本文件自动同步，请勿手改 xianxia 端。
 */
window.AIHomeNews = [
{
    "date": "2026-08-12",
    "display": "8月12日",
    "weekday": "周三",
    "items": [
      {
        "title": "英伟达研发万亿参数开源模型 Nemotron 4，剑指顶级开源阵营",
        "url": "https://www.sohu.com/a/1061728509_121400326",
        "summary": "参数至少1万亿、约为上代两倍，同步发布3.5 Lightning与开源路由库。",
        "source": "钛媒体"
      },
      {
        "title": "面壁智能启动IPO辅导，冲刺「端侧大模型第一股」",
        "url": "https://www.eeo.com.cn/2026/0812/994925.shtml",
        "summary": "中信证券辅导备案，上半年融资超50亿、估值破200亿，MiniCPM下载超4300万次。",
        "source": "经济观察网"
      },
      {
        "title": "智源研究院发布AREX自主研究智能体，权重已开源",
        "url": "https://so.html5.qq.com/page/real/search_news?docid=70000021_3546a7b800872052",
        "summary": "首创「研究—验证—再研究」双循环框架，可自主读论文、追热点、做综述。",
        "source": "央广网"
      },
      {
        "title": "芝商所拟10月推出算力期货，AI算力迈向大宗商品化",
        "url": "https://news.qq.com/rain/a/20260812A01G7300",
        "summary": "与Silicon Data推H100、B200两项GPU租赁指数期货，为企业提供算力对冲工具。",
        "source": "财联社"
      },
      {
        "title": "Anthropic与矿企Riot签91亿美元20年算力大单",
        "url": "https://www.chinastarmarket.cn/detail/2451108",
        "summary": "Riot供德州191MW算力，消息后股价盘后涨25%；三月内锁定算力合约已超600亿美元。",
        "source": "财联社"
      },
      {
        "title": "戴盟机器人完成数亿元融资，蚂蚁集团领投",
        "url": "https://www.163.com/dy/article/L42S6ICL0512D3VJ.html",
        "summary": "蚂蚁首次布局触觉赛道；戴盟构建触觉感知—数据—模型全栈，传感器万片级出货。",
        "source": "新京报"
      },
      {
        "title": "上海印发「十五五」软件规划，推动自主芯片与大模型融合",
        "url": "https://new.qq.com/rain/a/20260812A03B0Y00",
        "summary": "攻坚非Transformer架构，攻关HBM、CPO等核心环节，提升智算硬件供给与软硬协同。",
        "source": "每日经济新闻"
      },
      {
        "title": "OpenAI完成70亿美元员工股份回购，估值维持8520亿",
        "url": "https://www.163.com/dy/article/L439PA6T0550B1DU.html",
        "summary": "由OpenAI自掏腰包承接，为IPO前释放流动性；公司6月已秘密提交上市申请。",
        "source": "科创板日报"
      },
      {
        "title": "Anthropic为Claude输出加隐形水印，响应欧盟AI法案",
        "url": "https://new.qq.com/rain/a/20260812A01AGM00",
        "summary": "8月2日起新模型默认嵌入隐形文本水印与C2PA溯源元数据，全球范围适用。",
        "source": "腾讯新闻"
      },
      {
        "title": "Gartner：2026年AI推理支出将首超模型训练",
        "url": "https://www.163.com/dy/article/L44975UC05562DGT.html",
        "summary": "机构预估推理侧开销首超训练，标志大模型竞争从「卷参数」转向应用与落地。",
        "source": "极新早报"
      }
    ]
},
{
    "date": "2026-08-11",
    "display": "8月11日",
    "weekday": "周二",
    "items": [
      {
        "title": "英伟达联手六大华尔街巨头，设算力融资平台筹逾5000亿美元",
        "url": "https://view.inews.qq.com/a/20260811A01QFA00",
        "summary": "与Apollo、贝莱德、黑石、博枫、高盛、KKR签谅解备忘录撬动第三方资本；消息后英伟达股价一度跌3.2%。",
        "source": "腾讯新闻（财联社）"
      },
      {
        "title": "Meta重回开源：发布300亿参数Agent模型Muse Glimmer，单张显卡可本地运行",
        "url": "https://www.36kr.com/p/3934265198345348",
        "summary": "采用Apache 2.0协议，4bit量化后24GB显存即可跑；扎克伯格发长文呼吁美国降低开源AI准入门槛。",
        "source": "36氪（爱范儿）"
      },
      {
        "title": "Anthropic取消涨价50%计划，永久锁定Claude Sonnet 5发布价",
        "url": "https://news.qq.com/rain/a/20260811A020EZ00",
        "summary": "输入每百万2美元、输出10美元的初始定价永久保留，原定8月底上调至3和15美元的计划作废。",
        "source": "腾讯新闻（华尔街见闻）"
      },
      {
        "title": "Claude Code将于8月14日默认开启自动模式，额外token费用官方承担",
        "url": "https://view.inews.qq.com/a/20260810A06CCA00",
        "summary": "Pro/Max/Team新会话默认启用；实验显示自动模式拦截危险命令成功率89%，远高于人工的13.6%。",
        "source": "腾讯新闻（量子位）"
      },
      {
        "title": "上半年中国厂商占全球人形机器人出货量超97%，智元、宇树合计约75%",
        "url": "https://news.sina.cn/2026-08-11/detail-inimwuhv7728838.d.html",
        "summary": "彭博援引SAG数据：全球出货约1.91万台，智元8400台占44%、宇树5900台，工商业应用占比超七成。",
        "source": "新浪（环球时报）"
      },
      {
        "title": "宇树科技网上最终中签率0.0181%，创科创板历史新低",
        "url": "https://www.163.com/dy/article/L41GNU0K053469RG.html",
        "summary": "有效申购户数约978万户创科创板新高，申购倍数约8288倍触发回拨，成史上最难中签新股。",
        "source": "网易（证券时报）"
      },
      {
        "title": "阿里千问开放平台上线，覆盖手机、PC与AI眼镜三类终端",
        "url": "https://t.cj.sina.com.cn/articles/view/1644119190/61ff449602002mnxs",
        "summary": "顺丰、自如、哈啰租车、快递100等首批接入，用户可在千问对话内完成查询、筛选到下单支付。",
        "source": "新浪财经（时代周报）"
      },
      {
        "title": "微信灰度上线朋友圈「AI帮写」，可由AI助手小微生成文案",
        "url": "https://www.163.com/dy/article/L41NU00S0511CSAO.html",
        "summary": "发布图文或纯文字朋友圈时可唤起小微，支持语音与文字输入，提供简洁、调侃、文艺三种风格。",
        "source": "网易（爱范儿）"
      },
      {
        "title": "微软下一代AI芯片Maia 300最快9月亮相，洽谈台积电2027年交付超30万颗",
        "url": "https://view.inews.qq.com/a/20260810A0CVFY00",
        "summary": "相较Maia 200仅数万颗的产量是数量级跃升，意在降本并减少对英伟达AI加速器的依赖。",
        "source": "腾讯新闻（IT之家）"
      },
      {
        "title": "OpenAI发布GPT-5.6-Cyber，Daybreak网络安全计划拆分红蓝双层",
        "url": "https://www.163.com/dy/article/L41NI21K0511BLFD.html",
        "summary": "基于GPT-5.6 Sol训练，高级安全任务完成率95%；已在Chrome V8引擎中发现两个未公开漏洞。",
        "source": "网易（cnBeta）"
      }
    ]
},

{
    "date": "2026-08-10",
    "display": "8月10日",
    "weekday": "周一",
    "items": [
      {
        "title": "A股迎「人形机器人第一股」，宇树科技今日启动网上申购",
        "url": "https://www.stcn.com/article/detail/4065944.html",
        "summary": "发行价150.80元/股，对应市值约609.93亿元，拟募资60.99亿元；从受理到申购不足5个月，创年内最快纪录。",
        "source": "证券时报网"
      },
      {
        "title": "OpenAI暂停Astra模型部分研发：自主网络攻防能力过强触及高危门槛",
        "url": "https://www.163.com/dy/article/L3TFVN2U0514R9OJ.html",
        "summary": "内部测评发现该模型自主攻防能力过强，可能主动发起高级网络攻击；已叫停不达安全标准的测试。",
        "source": "网易（央视财经）"
      },
      {
        "title": "字节跳动被曝正训练10万亿参数大模型，处于预训练早期阶段",
        "url": "https://view.inews.qq.com/a/20260808A00KQF00",
        "summary": "智东西援引英国《金融时报》，称该模型处于3至6个月预训练早期，若属实将超越约8万亿参数的Mythos 5。",
        "source": "腾讯新闻（智东西）"
      },
      {
        "title": "人民日报：美国近200家科技初创联名反对限制使用中国开源模型",
        "url": "https://k.sina.com.cn/article_1893892941_70e2834d020022ffe.html",
        "summary": "信中称美国开发者需持续使用全球现有开放模型；美企调用中国模型词元占比每周稳超30%、峰值46%。",
        "source": "新浪（人民日报）"
      },
      {
        "title": "「Token超级工厂」魔形智能完成A轮融资，三个月内连融两轮",
        "url": "https://www.163.com/dy/article/L3V5VNNG051180F7.html",
        "summary": "毅达资本领投，距5月Pre-A轮仅三个月；成立两年日均Token调用量达数万亿级，收入已达数亿元。",
        "source": "网易（智东西）"
      },
      {
        "title": "国家发改委：将加快人工智能法立法进程，完善关键制度框架",
        "url": "https://k.sina.com.cn/article_5953189932_162d6782c06704ukuc.html",
        "summary": "同时建立技术监测与风险预警体系；上半年规上制造业AI应用普及率超30%，智能算力规模为去年同期2.8倍。",
        "source": "新浪（光明日报）"
      },
      {
        "title": "总台《2026中国AI盛典》揭晓10位年度AI人物，蔡磊获特别贡献人物",
        "url": "https://sh.cctv.com/2026/08/08/ARTIjvdeF1dGMwEgA3ZTkPy3260808.shtml",
        "summary": "8月9日CCTV-1播出，王兴兴、闫俊杰等10人当选，其中4位为90后；渐冻症抗争者蔡磊获特别贡献人物。",
        "source": "央视网"
      },
      {
        "title": "人民日报海外版：中国「陪伴经济」打开消费新空间，AI陪伴立法成全球样本",
        "url": "https://news.haiwainet.cn/n/2026/0810/c3541093-32974238.html",
        "summary": "外媒关注7月15日施行的《人工智能拟人化互动服务管理暂行办法》，称其为世界首部AI情感陪伴国家法规。",
        "source": "海外网（人民日报海外版）"
      },
      {
        "title": "星动纪元人形机器人上岗中国邮政分拣，效率基本追平人工",
        "url": "https://view.inews.qq.com/a/20260810A02RMI00",
        "summary": "L7机型效率基本追平人工每小时约1200件，物流分拣已实现小几百台部署，优先接手夜班粉尘等岗位。",
        "source": "腾讯新闻（北京青年报）"
      },
      {
        "title": "原字节机器人团队负责人孔涛加盟小米，挂帅新设具身智能与应用部",
        "url": "https://view.inews.qq.com/a/20260810A02CR000",
        "summary": "多方信源确认，新部门统管小米具身赛道；其机器人在汽车工厂自攻螺母工站双侧作业成功率已达98%。",
        "source": "腾讯新闻（观点新媒体）"
      }
    ]
  },
{
    "date": "2026-08-07",
    "display": "8月7日",
    "weekday": "周五",
    "items": [
      {
        "title": "DeepSeek预告全面上调API定价，或告别「价格屠夫」低价策略",
        "url": "https://www.stcn.com/article/detail/4062768.html",
        "summary": "官方称涨幅较大、具体方案待定；当前V4-Flash输出2元/百万Token，年内智谱、Kimi等已多次提价。",
        "source": "证券时报网"
      },
      {
        "title": "阿里云视频模型Wan3.0开启公测，单次直出30秒并支持文档生视频",
        "url": "https://new.qq.com/rain/a/20260807A04FA100",
        "summary": "首次支持doc、ppt、pdf等文档输入自动成片；480P/720P/1080P分别0.3、0.6、1.2元每秒。",
        "source": "腾讯新闻（快科技）"
      },
      {
        "title": "字节跳动年中全员会：承认大模型落后，张一鸣定调不用蒸馏走捷径",
        "url": "https://www.163.com/dy/article/L3LQ82UB05129QAF.html",
        "summary": "梁汝波称豆包C端与Seedance仍具竞争力，接受短期落后坚持自研；飞书新客超九成同购AI产品。",
        "source": "网易（南方都市报）"
      },
      {
        "title": "中国开源大模型累计下载破百亿次，OpenRouter周调用前四全是国产",
        "url": "https://new.qq.com/rain/a/20260807A0403M00",
        "summary": "Hugging Face春季报告显示中国开源模型下载占比达41%，首次超过美国位居全球第一。",
        "source": "腾讯新闻（中国电子报）"
      },
      {
        "title": "MiniMax纳入港股通首日收涨17.10%，总市值站上1038亿港元",
        "url": "https://finance.stockstar.com/IG2026080600019831.shtml",
        "summary": "盘中一度涨超20%、成交额47.43亿港元；机构测算后续或迎超百亿港元南向增量资金。",
        "source": "证券之星（观点网）"
      },
      {
        "title": "SpaceX与特斯拉投资168亿美元，全球最大芯片厂Terafab破土动工",
        "url": "https://www.cls.cn/detail/2447866",
        "summary": "选址美国德州，规划930万平方米、年产1太瓦算力，供Optimus机器人与太空数据中心用芯片。",
        "source": "财联社"
      },
      {
        "title": "每经：AI驶入「L3智能体」深水区，中美前沿模型差距实质性收窄",
        "url": "https://www.nbd.com.cn/articles/2026-08-06/4534527.html",
        "summary": "白皮书显示2025年中国AI融资1579起共1504亿元，单笔超10亿元融资数量较上年翻倍。",
        "source": "每日经济新闻"
      },
      {
        "title": "Om AI联汇完成数亿元融资，同步开源端侧多模态模型VLX-Seek 1.5",
        "url": "https://www.stdaily.com/web/gdxw/2026-08/06/content_560231.html",
        "summary": "3B版本在无人机具身场景准确率提升62.9%；其可穿戴视觉中枢已服务近十万视障用户。",
        "source": "科技日报"
      },
      {
        "title": "第二届世界人形机器人运动会新增拔河项目，8月22日国家速滑馆开幕",
        "url": "https://view.inews.qq.com/a/20260806A0718T00",
        "summary": "采用二对二对抗形式，考验运动控制、力觉感知与多机协同自主决策，部分票档已售罄。",
        "source": "腾讯新闻（北京日报）"
      },
      {
        "title": "河北邯郸投用人形交通管理机器人，可模拟交警手势疏导车流",
        "url": "https://view.inews.qq.com/a/20260806A0653H00",
        "summary": "8月4日正式上岗，联动信号灯指挥，并能识别行人与非机动车违法行为进行语音劝导。",
        "source": "腾讯新闻（北京青年报）"
      }
    ]
  },
{
    "date": "2026-08-06",
    "display": "8月6日",
    "weekday": "周四",
    "items": [
      {
        "title": "谷歌AI部门大洗牌：首席科学家Jeff Dean效力27年后离职创业",
        "url": "https://tech.ifeng.com/c/8vLytv7th77",
        "summary": "哈萨比斯转任Alphabet首席科学家，Koray接棒Gemini 4研发；消息公布后谷歌股价盘中跌逾5%。",
        "source": "凤凰网科技（财联社）"
      },
      {
        "title": "Meta推出首款AI编程智能体Muse Code，主打低价挑战OpenAI与Anthropic",
        "url": "https://www.163.com/dy/article/L3KFA88H05198CJN.html",
        "summary": "基于Muse Spark 1.2构建，按量付费输入1.25美元/百万token，另提供成本更低的贡献者版本。",
        "source": "网易（财联社）"
      },
      {
        "title": "字节跳动发布原生音视频全双工大模型SeedRealtime，已在豆包App全量上线",
        "url": "https://new.qq.com/rain/a/20260806A02DR600",
        "summary": "统一架构融合音频、视频与文本，支持边看边听边说，对话节奏问题较级联系统减少约一半。",
        "source": "腾讯新闻（每日经济新闻）"
      },
      {
        "title": "曝DeepSeek重启第二轮融资，拟募资500亿元、投前估值5000亿元",
        "url": "https://www.163.com/dy/article/L3JVB3LV05118I96.html",
        "summary": "据《财经》报道预计8月下旬签约；今年4月首轮已融500亿元、估值超3500亿，官方暂未回应。",
        "source": "网易（i黑马）"
      },
      {
        "title": "京东开源实时流式视频编辑模型JoyAI-Video-Edit，视频可边播边改",
        "url": "https://new.qq.com/rain/a/20260805A0CZ0N00",
        "summary": "720P下每秒30帧推理，支持任意时长实时替换人物与场景，适配直播电商、家装设计与影视创作。",
        "source": "腾讯新闻（北京日报）"
      },
      {
        "title": "Anthropic首次确认组建内部芯片团队，为Claude设计定制芯片",
        "url": "https://view.inews.qq.com/a/20260805A0EXT000",
        "summary": "采用多芯片策略并继续合作AWS、英伟达，芯片工程师年薪32万至48.5万美元，系首次公开自研计划。",
        "source": "腾讯新闻（观点新媒体）"
      },
      {
        "title": "阿里Qwen-Image-3.0正式上线千问AI平台，文生图0.18元/张起",
        "url": "https://new.qq.com/rain/a/20260805A05EAD00",
        "summary": "支持4.5k token长指令一次生成复杂版面与12国语言渲染，Arena文生图榜单位列国内第一。",
        "source": "腾讯新闻"
      },
      {
        "title": "荣耀MagicOS 10八月版今日起分批推送，七大AI功能覆盖数十款机型",
        "url": "https://new.qq.com/rain/a/20260805A08XSM00",
        "summary": "YOYO记忆支持抖音B站长视频三指下滑生成摘要；8月6日首推旗舰，8月14日覆盖中端老机型。",
        "source": "腾讯新闻"
      },
      {
        "title": "人民日报评AI治理：以善治促善智，开源有助于构筑更稳固的安全堤坝",
        "url": "https://www.163.com/dy/article/L3KU8QPH0514R9M0_pdya11y.html",
        "summary": "回应OpenAI模型失控事件，强调法规、技术标准与风险监测协同发力，肯定中国开源模型的取证价值。",
        "source": "网易（人民网）"
      },
      {
        "title": "Sand.ai发布全球首个千亿级开源MoE视频模型",
        "url": "https://dy.163.com/article/L3KQJ61A05562DGT.html",
        "summary": "同日Liquid AI发布端侧小模型LFM2.5、Mistral开源审核模型Shieldstral，开源阵营密集更新。",
        "source": "网易（极新）"
      }
    ]
  },
{
    "date": "2026-08-05",
    "display": "8月5日",
    "weekday": "周三",
    "items": [
      {
        "title": "GPT-5.5 Instant 全量推送：幻觉率降52.5%，新增\"记忆来源\"可查可删",
        "url": "https://www.163.com/dy/article/L3HEJK2I05568E2X.html",
        "summary": "免费用户同步可用，回答更短更少堆格式；点击回复末尾\"来源\"即可查看并删除错误记忆。",
        "source": "网易科技"
      },
      {
        "title": "腾讯混元发布语音识别模型 Hy ASR 3.0 preview，粤语词错误率3.12%",
        "url": "https://www.163.com/dy/article/L3HFMQQA0511CMF5.html",
        "summary": "基于Hy3融合识别与语义理解，普通话3.34%、英语2.62%，方言与嘈杂环境表现全面升级。",
        "source": "网易（科技狐）"
      },
      {
        "title": "彭博：中国AI\"斩杀线\"浮现，8周5款模型逼近全球前沿",
        "url": "https://k.sina.com.cn/article_1887344341_707e96d502001timy.html",
        "summary": "同一复杂任务DeepSeek-V4-Flash仅需0.03美元、Claude Fable5需3.15美元，美企定价权承压。",
        "source": "新浪（观察者网）"
      },
      {
        "title": "科创板日报：端侧AI元年开启，千问已进入特斯拉中国车机深度测试",
        "url": "https://dy.163.com/article/L3I6S6NB0550B1DU.html",
        "summary": "IDC预测2026年中国AI手机出货1.47亿台占比破53%，端侧AI市场规模有望突破8000亿元。",
        "source": "网易（科创板日报）"
      },
      {
        "title": "微信支付上线AI接入工具箱，含Skill技能包与AI友好文档、API",
        "url": "https://www.aastocks.com/tc/mobile/news.aspx?newsid=now.1516835&newssource=aafn&newstype=61",
        "summary": "逾七成微信支付商户开发者已用AI辅助编程，官方出工具箱降低AI生成支付代码的安全隐患。",
        "source": "阿斯达克财经网"
      },
      {
        "title": "蚂蚁灵波启动首轮融资拟募15亿，京东要建千万小时具身数据护城河",
        "url": "https://www.163.com/dy/article/L3HE753305199NPP.html",
        "summary": "上半年国内具身智能融资约438亿元，\"大脑派\"独占50.8%；京东计划明年积累1000万小时数据。",
        "source": "网易（21世纪经济报道）"
      },
      {
        "title": "谷歌课堂Gemini 8月10日起向全年龄段K-12学生开放",
        "url": "https://finance.sina.com.cn/jjxw/2026-08-05/doc-inimfmyp5191437.shtml",
        "summary": "需管理员授权，学生可把课件转成抽认卡、练习测验，并按具体作业获得情境化辅导提示。",
        "source": "新浪财经（界面新闻）"
      },
      {
        "title": "全球首款开源AI导盲机器人Milo问世，制造成本不到2000美元",
        "url": "https://view.inews.qq.com/a/20260805A000R400",
        "summary": "无需预先建图即可在陌生环境自主导航，硬件方案、仿真软件与预训练模型已全部开源。",
        "source": "腾讯新闻（至顶科技）"
      },
      {
        "title": "一个月9款旗舰扎堆，大模型进入\"月抛\"时代",
        "url": "https://finance.sina.com.cn/jjxw/2026-08-05/doc-inimffsv4836249.shtml",
        "summary": "头部模型分差明显收窄，开源阵营首次进入第一梯队，Kimi K3登顶Code Arena前端榜。",
        "source": "新浪财经（投资界）"
      },
      {
        "title": "美国FTC全面禁止进口外国先进机器人，近九成美高校论文用宇树",
        "url": "https://view.inews.qq.com/a/20260804A0D7CH00",
        "summary": "禁令以数据安全与本土供应链为由，分析指出可能反而拖累美国自身机器人研究进展。",
        "source": "腾讯新闻（DeepTech深科技）"
      }
    ]
  },
  {
    "date": "2026-08-04",
    "display": "8月4日",
    "weekday": "周二",
    "items": [
      {
        "title": "阿里发布Qwen3.8-Max：2.4万亿参数，\"千问办公\"同步开启公测",
        "url": "https://www.ifnews.com/news.html?aid=856458&cid=43",
        "summary": "阿里旗舰模型Qwen3.8-Max上线，支持1M上下文与视觉理解，企业级Agent\"千问办公\"同步公测。",
        "source": "国际金融报"
      },
      {
        "title": "白宫召集OpenAI、谷歌、Anthropic，审议AI模型安全测试框架终稿",
        "url": "https://www.163.com/dy/article/L3FM8LFQ05119FMA.html",
        "summary": "美方拟推自愿性机制，要求AI实验室在模型对外发布前先提交政府评估，周二在白宫开会讨论。",
        "source": "网易（极客公园）"
      },
      {
        "title": "OpenAI旗下ChatGPT Atlas浏览器8月9日停服，书签需手动导出",
        "url": "https://new.qq.com/rain/a/20260803A09L1H00",
        "summary": "上线不足10个月的Atlas将停止服务，数据不会自动迁移，用户须提前导出书签与历史记录。",
        "source": "腾讯新闻（IT之家）"
      },
      {
        "title": "京东外卖发布自研AI智能头盔，首批免费发放给全职骑手",
        "url": "http://www.zqrb.cn/gscy/qiyexinxi/2026-08-03/A1785740390222.html",
        "summary": "头盔集成AI语音助手、单王带路、一键SOS与商户核验，骑手全程语音接单无需碰手机。",
        "source": "证券日报"
      },
      {
        "title": "《人民日报》：无锡上线\"词元超市\"，调用大模型省钱又方便",
        "url": "https://so.html5.qq.com/page/real/search_news?docid=70000021_0116a7121b916152",
        "summary": "20多种主流大模型一个账号统一调用、集中采购拿团购价，已服务超50家企业，研发成本降近三成。",
        "source": "人民日报（腾讯新闻转载）"
      },
      {
        "title": "触觉感知企业帕西尼再获10亿元战略轮融资，累计融资达35亿元",
        "url": "https://app.bbtnews.com.cn/print.php?contentid=601157",
        "summary": "本轮由消费电子半导体巨头、中银国际投资、鲲鹏基金等联合投资，创全球触觉感知领域融资纪录。",
        "source": "北京商报"
      },
      {
        "title": "月之暗面回应港股IPO传闻：消息不实",
        "url": "https://www.163.com/dy/article/L3FPS1LQ0534A4SC.html",
        "summary": "针对近日市场流传的月之暗面赴港上市消息，知情人士向媒体明确回应称传闻不属实。",
        "source": "网易（界面新闻）"
      },
      {
        "title": "韩国国家AI计算中心正式动工，目标2028年建成",
        "url": "https://new.qq.com/rain/a/20260803A06XA700?refer=cp_1009",
        "summary": "韩国启动国家级AI算力基础设施建设，计划2028年投用，加码本土大模型训练与推理能力。",
        "source": "腾讯新闻（IT之家）"
      },
      {
        "title": "消息称阿里内测AI办公平台\"万有无界\"，主打多智能体协同交付",
        "url": "https://www.chinaz.com/ainews/30058.shtml",
        "summary": "该平台由多个智能体分工协作完成任务交付，被视为阿里在AI办公赛道的又一条产品线。",
        "source": "站长之家"
      }
    ]
  },
  {
    "date": "2026-08-03",
    "display": "8月3日",
    "weekday": "周一",
    "items": [
      {
        "title": "长三角(嘉兴)Token运营中心启动，\"数据模型超市\"一次接入百余款大模型",
        "url": "https://new.qq.com/rain/a/20260803A02A4J00",
        "summary": "嘉兴Token中心上线，企业一次接入即可按需调用DeepSeek、Qwen等百余款主流大模型。",
        "source": "腾讯新闻"
      },
      {
        "title": "亚马逊完成对OpenAI总计500亿美元全额投资",
        "url": "https://new.qq.com/rain/a/20260803A02A4J00",
        "summary": "亚马逊季报披露已完成对OpenAI共500亿美元投资，构建从算力到模型的全栈AI能力。",
        "source": "腾讯新闻"
      },
      {
        "title": "谷歌Gemini Spark智能体向全球更多用户开放，可订机票、整理收件箱",
        "url": "https://dy.163.com/article/L3D3CQM605562DGT.html",
        "summary": "谷歌Gemini Spark扩大开放，支持订机票、整理收件箱等实操，通用Agent再进一步。",
        "source": "网易（极新）"
      },
      {
        "title": "腾讯AI虚拟细胞算法登《Cell》主刊",
        "url": "https://dy.163.com/article/L3D3CQM605562DGT.html",
        "summary": "腾讯AI虚拟细胞算法登《Cell》主刊，为疾病研究与新药发现提供系统性计算工具。",
        "source": "网易（极新）"
      },
      {
        "title": "智谱GLM Coding Plan开放订阅",
        "url": "https://dy.163.com/article/L3D3CQM605562DGT.html",
        "summary": "智谱推出GLM Coding Plan订阅，面向代码生成与工程化场景，扩建算力后开放。",
        "source": "网易（极新）"
      },
      {
        "title": "欧盟《人工智能法》透明度条款生效，深度伪造须强制标识",
        "url": "https://www.163.com/dy/article/L3D7DVRB051480KF.html",
        "summary": "欧盟AI法透明度条款8月2日生效，聊天机器人须表明AI身份，深伪内容强制水印。",
        "source": "网易（前瞻网）"
      },
      {
        "title": "国务院印发\"十五五\"知识产权规划，首部署AI生成物保护规则",
        "url": "https://www.163.com/dy/article/L3D7DVRB051480KF.html",
        "summary": "国务院印发十五五知识产权规划，首次系统部署AI生成物与数据知识产权保护规则。",
        "source": "网易（前瞻网）"
      },
      {
        "title": "谷歌地球AI生图功能上线不到48小时即暂停",
        "url": "https://www.163.com/dy/article/L3CSMFG205199O55.html",
        "summary": "谷歌地球AI生图功能上线不到48小时暂停，专家警告可被用于叠加虚构场景造假。",
        "source": "网易（财经早餐）"
      },
      {
        "title": "GitHub AI Agent曝\"GitLost\"提示注入漏洞，可诱骗泄露私有数据",
        "url": "https://view.inews.qq.com/a/20260803A020FU00",
        "summary": "安全机构发现GitHub Agent工作流\"GitLost\"漏洞，公开Issue可诱骗Agent泄露私有数据。",
        "source": "腾讯新闻（华尔街见闻）"
      }
    ]
  },
  {
    "date": "2026-08-01",
    "display": "8月1日",
    "weekday": "周六",
    "items": [
      {
        "title": "DeepSeek-V4-Flash 正式版 API 上线，Agent 能力暴涨 6 倍",
        "url": "https://tech.ifeng.com/c/8vEDXuxscG5",
        "summary": "2840亿MoE参数、激活130亿，DeepSWE暴涨至54.4，缓存命中价低至0.2元/百万tokens。",
        "source": "IT之家（凤凰网）"
      },
      {
        "title": "OpenAI 大幅下调 GPT-5.6 定价，Luna 降幅达 80%",
        "url": "https://view.inews.qq.com/a/20260731A05V3D00",
        "summary": "Luna降价80%、Terra降20%，Sol新增Fast模式，行业API价格战持续升温。",
        "source": "腾讯新闻"
      },
      {
        "title": "谷歌 DeepMind 发布 Gemini Robotics 2 机器人模型",
        "url": "https://view.inews.qq.com/a/20260731A0CGOO00",
        "summary": "突破前代仅控上半身局限，实现人形机器人全身协同与多机协作。",
        "source": "腾讯新闻"
      },
      {
        "title": "字节跳动 Seedance 2.5 视频模型上线，单次直出 30 秒",
        "url": "https://economy.gmw.cn/2026-07/31/content_38920425.htm",
        "summary": "支持50个多模态参考与局部编辑，从创意工具升级为产业级生产力工具。",
        "source": "光明网"
      },
      {
        "title": "MiniMax 发布首款开源多模态模型 H3，视频编辑榜全球第一",
        "url": "https://new.qq.com/rain/a/20260731A04F2000?refer=cp_1009",
        "summary": "2K直出、最长15秒音画，视频生成0.8元/秒，仅为同类旗舰三分之一。",
        "source": "央广网（腾讯新闻）"
      },
      {
        "title": "特斯拉中国车机正式接入豆包大模型，千问同步内测",
        "url": "https://view.inews.qq.com/a/20260731A073Y300",
        "summary": "全系车型引入豆包语音助手，支持实时信息与多角色对话，需开通高级娱乐服务。",
        "source": "北京日报客户端（腾讯新闻）"
      },
      {
        "title": "多部门密集部署人工智能法与算力布局",
        "url": "https://new.qq.com/rain/a/20260801A03OD300",
        "summary": "加快AI立法、推进智算集群与算电协同，专家称AI已成“十五五”核心抓手。",
        "source": "央视新闻（腾讯新闻）"
      },
      {
        "title": "微信公众平台上线 AI 智能一键排版功能",
        "url": "https://dy.163.com/article/L375KKAR0511CMF5.html",
        "summary": "创作者可自动优化段落间距、配色与图片，大幅降低图文编辑排版成本。",
        "source": "科技狐（网易）"
      }
    ]
  },
  {
    "date": "2026-07-29",
    "display": "7月29日",
    "weekday": "周三",
    "items": [
      {
        "title": "开源生态持续完善，人工智能下沉实体经济",
        "url": "https://news.cctv.com/2026/07/29/ARTIaepkWeDrEVUe64xpEuPq260729.shtml",
        "summary": "7月27日月之暗面将旗舰大模型Kimi K3全量开源，总参数达2.8万亿，为全球参数规模最大的开源大模型，带动AI加速融入实体产业。",
        "source": "央视网"
      },
      {
        "title": "从追赶到领跑，中国开源模型深度融入实体经济",
        "url": "https://new.qq.com/rain/a/20260729A032HQ00?refer=cp_1009",
        "summary": "今年以来国产大模型开源步伐明显加快，多家头部企业相继开放主力模型；报告显示中国开源模型下载量已占全球41%，主流调用榜单前六均来自中国团队。",
        "source": "腾讯新闻"
      },
      {
        "title": "月之暗面开放Kimi K3开源大模型，适配AI短剧团队需求",
        "url": "https://weibo.com/1403664603/5326001454455434",
        "summary": "K3具备原生视觉理解与100万token上下文，中小工作室可本地私有化部署、自主微调，缓解AI短剧赛道人物一致性等痛点，但行业仍面临审核与成本压力。",
        "source": "微博 / 光明日报"
      }
    ]
  },
  {
    "date": "2026-07-28",
    "display": "7月28日",
    "weekday": "周二",
    "items": [
      {
        "title": "月之暗面全栈开源Kimi K3，引爆全球开发者社区，登顶Hugging Face趋势榜榜首",
        "url": "https://www.163.com/dy/article/L2UOABRD0512B07B.html",
        "summary": "K3采用2.8万亿参数混合专家架构，同步开源MoonEP、FlashKDA、AgentEnv三大训练基础设施，采用修改版MIT许可证，全球开发者可下载部署与二次开发。",
        "source": "每日经济新闻"
      },
      {
        "title": "Kimi K3登顶开源社区趋势榜：30分钟超4000赞，创平台最快增长纪录",
        "url": "https://view.inews.qq.com/a/20260728A09U4N00",
        "summary": "7月27日23时开源后30分钟内获超4000赞登顶Hugging Face趋势榜，近3700名开发者排队等待下载。",
        "source": "每日经济新闻"
      },
      {
        "title": "海内外云厂商Day0适配Kimi K3，国产算力跑通推理环节",
        "url": "https://view.inews.qq.com/a/20260728A076IO00",
        "summary": "阿里、华为昇腾、海光等数十家AI基础设施厂商宣布首日适配Kimi K3，国产算力完成推理环节跑通，但训练尚未实现。",
        "source": "21世纪经济报道"
      },
      {
        "title": "Kimi K3推理成本优势明显：BrowseComp单次任务成本约为GPT-5.6 Sol一半",
        "url": "https://view.inews.qq.com/a/20260728A098AU00",
        "summary": "据Artificial Analysis数据，K3在BrowseComp基准单次任务成本仅为GPT-5.6 Sol一半，较Claude Fable 5便宜近一个数量级，扩展效率较K2提升约2.5倍。",
        "source": "观点新媒体"
      }
    ]
  },
  {
    "date": "2026-07-27",
    "display": "7月27日",
    "weekday": "周一",
    "items": [
      {
        "title": "刚刚，Kimi K3开源！2.8万亿参数砸向全球",
        "url": "https://www.163.com/dy/article/L2U9EUB4051180F7.html",
        "summary": "月之暗面发布Kimi K3模型权重、技术报告，并开源MoonEP、FlashKDA、AgentEnv三项Infra技术；Hugging Face CEO称其30分钟登顶趋势榜。",
        "source": "智东西"
      },
      {
        "title": "Kimi K3把开源推向前沿：开放权重而非完全MIT，商业使用附条件",
        "url": "https://www.toutiao.com/a7667746180054532659",
        "summary": "K3约2.8万亿总参数、激活约1040亿，支持100万token上下文与原生视觉；采用自定义许可证，年收入超2000万美元的大型托管商需另签协议。",
        "source": "AINews"
      },
      {
        "title": "Cognition将Kimi K3接入Devin，称其为评测中首款接近前沿的开源模型",
        "url": "https://www.163.com/dy/article/L2U9EUB4051180F7.html",
        "summary": "数字员工Devin开发方Cognition宣布K3接入桌面客户端与CLI，并在FrontierCode 1.1基准上称其为测试过首款性能逼近前沿水准的开源模型。",
        "source": "智东西"
      }
    ]
  },
  {
    "date": "2026-07-24",
    "display": "7月24日",
    "weekday": "周五",
    "items": [
      {
        "title": "DeepSeek V4正式开源：代码能力超GPT-5.4，定价仅海外1/10",
        "url": "https://www.toutiao.com/a7667602007120806435",
        "summary": "DeepSeek V4于7月20日以MIT协议开源，Codeforces评分3206超GPT-5.4，背后离不开幻方量化持续的自有资金支持。",
        "source": "今日头条"
      },
      {
        "title": "阿里Qwen 3.8预览版发布，2.4万亿参数对标顶尖闭源",
        "url": "https://www.toutiao.com/a7667602007120806435",
        "summary": "Qwen 3.8于7月19日发布预览版，2.4万亿参数规模紧随Kimi K3，引发社区对国产开源模型集群效应的讨论。",
        "source": "今日头条"
      },
      {
        "title": "GLM-5.2在Hugging Face入侵事件中被官方用于本地取证分析",
        "url": "https://www.toutiao.com/a7667602007120806435",
        "summary": "GLM-5.2因平台安全事件被官方安全团队本地部署用于取证分析，真实生产环境下的应用能力引发全社区关注。",
        "source": "今日头条"
      }
    ]
  },
  {
    "date": "2026-07-23",
    "display": "7月23日",
    "weekday": "周四",
    "items": [
      {
        "title": "国产四款开源大模型包揽Hugging Face核心讨论",
        "url": "https://www.toutiao.com/a7667602007120806435",
        "summary": "7月下旬数据显示，DeepSeek、Qwen、GLM、Kimi四款国产开源模型几乎包揽平台核心讨论量，海外传统开源模型同期声量微弱。",
        "source": "Hugging Face"
      },
      {
        "title": "阿里云百炼将上线Kimi K3模型API",
        "url": "https://www.163.com/dy/article/L2UOABRD0512B07B.html",
        "summary": "在Kimi K3开源后，千问AI平台与阿里云百炼宣布后续将上线K3模型API，Nebius、Baseten、Fireworks等海外厂商亦同步适配。",
        "source": "每日经济新闻"
      },
      {
        "title": "华为昇腾CANN宣布昇腾950全系列完成Kimi K3部署适配",
        "url": "https://www.163.com/dy/article/L2UOABRD0512B07B.html",
        "summary": "华为昇腾CANN宣布昇腾950全系列、Atlas A3产品完成K3部署适配；趋境科技基于SGLang完成在昇腾910C上的Day0适配并开源成果。",
        "source": "每日经济新闻"
      }
    ]
  },
  {
    "date": "2026-07-22",
    "display": "7月22日",
    "weekday": "周三",
    "items": [
      {
        "title": "Kimi K3发布前Hugging Face为其做预热网页，3700名开发者排队",
        "url": "https://www.163.com/dy/article/L2U9EUB4051180F7.html",
        "summary": "上线前已有近3700名开发者等待下载，上线10分钟前页面还短暂出现404，社区讨论热度空前。",
        "source": "智东西"
      },
      {
        "title": "Cognition宣布Kimi K3接入Devin桌面客户端与命令行工具",
        "url": "https://www.163.com/dy/article/L2U9EUB4051180F7.html",
        "summary": "数字员工Devin开发方Cognition称在FrontierCode 1.1评测上，K3是其测试过首款性能逼近前沿水准的开源模型。",
        "source": "智东西"
      },
      {
        "title": "Nebius、Baseten、Fireworks等海外AI基础设施厂商Day0适配Kimi K3",
        "url": "https://www.163.com/dy/article/L2UOABRD0512B07B.html",
        "summary": "北美AI基础设施厂商宣布首日完成适配，Nebius评价K3为首个达到前沿性能水平的开放权重模型。",
        "source": "每日经济新闻"
      }
    ]
  },
  {
    "date": "2026-07-21",
    "display": "7月21日",
    "weekday": "周二",
    "items": [
      {
        "title": "海外开发者称Kimi K3为本地版Fable 5",
        "url": "https://www.163.com/dy/article/L2U9EUB4051180F7.html",
        "summary": "OsmanticAI创始人称K3为本地版Fable 5并建议大家下载体验，调侃永远夺不走自己的Fable 5。",
        "source": "智东西"
      },
      {
        "title": "开源与闭源差距缩至约4分，Artificial Analysis发榜",
        "url": "https://www.toutiao.com/a7667746180054532659",
        "summary": "Artificial Analysis数据显示，领先开放权重模型与最强闭源模型之间差距约4分，为近几个月最小。",
        "source": "AINews"
      },
      {
        "title": "月之暗面资本化加速，汤臣倍健追加投资",
        "url": "https://new.qq.com/rain/a/20260729A02J6P00?refer=cp_1009",
        "summary": "在K3开源引爆社区之际，月之暗面资本化进程加速、汤臣倍健追加投资，引发国产开源大模型重塑全球API定价体系的讨论。",
        "source": "腾讯新闻"
      }
    ]
  },
  {
    "date": "2026-06-29",
    "display": "6月29日",
    "weekday": "周一",
    "items": [
      {
        "title": "外媒：智谱GLM-5.2漏洞挖掘能力达Mythos水平，国产AI安全领域逼近美国顶尖",
        "url": "https://tech.ifeng.com/c/8uLFonKLQHL",
        "summary": "外媒评测显示智谱GLM-5.2在漏洞挖掘等安全能力上达到Mythos级别，国产AI安全领域逼近美国顶尖水平。",
        "source": "凤凰网科技 / The Verge"
      }
    ]
  },
  {
    "date": "2026-06-28",
    "display": "6月28日",
    "weekday": "周日",
    "items": [
      {
        "title": "美国政府拟解除Anthropic Fable 5出口管制，最快下周恢复使用",
        "url": "https://tech.ifeng.com/c/8uJrZ3OLFK1",
        "summary": "据Axios报道，美国政府拟解除对Anthropic Fable 5的出口管制，最快下周恢复相关使用。",
        "source": "凤凰网科技 / Axios"
      }
    ]
  },
  {
    "date": "2026-06-26",
    "display": "6月26日",
    "weekday": "周五",
    "items": [
      {
        "title": "OpenAI GPT-5.6遭美国政府监管限制，仅向可信伙伴开放",
        "url": "https://finance.sina.com.cn/stock/usstock/summary/2026-06-26/doc-inietspn0492731.shtml",
        "summary": "OpenAI GPT-5.6遭美国政府监管限制，仅向可信伙伴开放，引发对前沿模型出口管制的讨论。",
        "source": "新浪财经"
      }
    ]
  },
  {
    "date": "2026-06-25",
    "display": "6月25日",
    "weekday": "周四",
    "items": [
      {
        "title": "Anthropic指控阿里通过2.5万虚假账户蒸馏Claude，涉2880万次交互",
        "url": "https://news.qq.com/rain/a/20260625A02CHX00",
        "summary": "Anthropic指控阿里通过约2.5万个虚假账户蒸馏Claude，涉及2880万次交互，引发模型安全与合规争议。",
        "source": "腾讯新闻 / TechWeb"
      }
    ]
  },
  {
    "date": "2026-06-22",
    "display": "6月22日",
    "weekday": "周一",
    "items": [
      {
        "title": "智谱市值首破万亿港元！GLM-5.2跻身全球AI编程第一梯队",
        "url": "https://finance.sina.com.cn/roll/2026-06-22/doc-iniehwmr9246150.shtml",
        "summary": "智谱市值首破万亿港元，GLM-5.2跻身全球AI编程第一梯队，国产大模型商业化提速。",
        "source": "新浪财经 / 财联社"
      }
    ]
  },
  {
    "date": "2026-06-21",
    "display": "6月21日",
    "weekday": "周日",
    "items": [
      {
        "title": "GPT-5.6或下周问世：从模型迈向可执行Agent，定价仅为竞品1/3",
        "url": "https://news.qq.com/rain/a/20260621A0581J00",
        "summary": "消息称GPT-5.6或下周问世，定位从模型迈向可执行Agent，定价仅为竞品1/3。",
        "source": "腾讯新闻 / testingcatalog"
      }
    ]
  },
  {
    "date": "2026-06-16",
    "display": "6月16日",
    "weekday": "周二",
    "items": [
      {
        "title": "杨植麟AIEC演讲：Kimi K2.7 Code发布，预测AI编程两三年内范式突破",
        "url": "https://tech.ifeng.com/c/8u0Oxa838CK",
        "summary": "杨植麟在AIEC演讲发布Kimi K2.7 Code，预测AI编程两三年内迎来范式突破。",
        "source": "凤凰网科技 / 智东西"
      }
    ]
  },
  {
    "date": "2026-06-15",
    "display": "6月15日",
    "weekday": "周一",
    "items": [
      {
        "title": "智谱发布GLM-5.2旗舰模型：1M上下文+744B参数，MIT协议下周开源",
        "url": "https://news.qq.com/rain/a/20260616A04LHW00",
        "summary": "智谱发布GLM-5.2旗舰模型，1M上下文+744B参数，MIT协议下周开源。",
        "source": "腾讯新闻"
      }
    ]
  },
  {
    "date": "2026-06-14",
    "display": "6月14日",
    "weekday": "周日",
    "items": [
      {
        "title": "2026年6月AI全景：智能体时代全面开启，国产力量加速崛起",
        "url": "https://www.sohu.com/a/1035472711_122558976",
        "summary": "综述称2026年6月智能体时代全面开启，国产力量加速崛起。",
        "source": "搜狐科技"
      }
    ]
  },
  {
    "date": "2026-06-13",
    "display": "6月13日",
    "weekday": "周六",
    "items": [
      {
        "title": "2026年6月AI巨头混战：微软七连发MAI自研模型，苹果Siri终于补课AI",
        "url": "https://www.sohu.com/a/1035397029_122893087",
        "summary": "2026年6月AI巨头混战，微软七连发MAI自研模型，苹果Siri终于补课AI。",
        "source": "搜狐科技"
      }
    ]
  },
  {
    "date": "2026-06-12",
    "display": "6月12日",
    "weekday": "周五",
    "items": [
      {
        "title": "2026北京智源大会发布悟界大模型与FlagOS 2.1，引领AI新突破",
        "url": "https://www.itbear.com.cn/html/2026-06/1391656.html",
        "summary": "2026北京智源大会发布悟界大模型与FlagOS 2.1，引领AI新突破。",
        "source": "ITBear科技"
      },
      {
        "title": "聚焦AI时代保障发展权，多国专家共议AI治理机遇与挑战",
        "url": "https://www.chinanews.com.cn/gj/2026/06-12/10638909.shtml",
        "summary": "聚焦AI时代保障发展权，多国专家共议AI治理的机遇与挑战。",
        "source": "中国新闻网"
      }
    ]
  },
  {
    "date": "2026-06-10",
    "display": "6月10日",
    "weekday": "周三",
    "items": [
      {
        "title": "MiniMax M3 vs GPT-5.6 vs Claude Opus 4.8：2026年旗舰模型三角格局",
        "url": "https://segmentfault.com/a/1190000047812097",
        "summary": "横向对比MiniMax M3、GPT-5.6与Claude Opus 4.8，剖析2026年旗舰模型三角格局。",
        "source": "SegmentFault"
      }
    ]
  },
  {
    "date": "2026-06-02",
    "display": "6月2日",
    "weekday": "周二",
    "items": [
      {
        "title": "OpenAI GPT-5.6发布，奥特曼亲自上阵反杀Claude编程优势",
        "url": "https://finance.sina.com.cn/wm/2026-06-02/doc-inhzzcpu1649906.shtml",
        "summary": "OpenAI发布GPT-5.6，奥特曼亲自上阵反杀Claude的编程优势。",
        "source": "新浪财经"
      },
      {
        "title": "腾讯云下调DeepSeek-V4系列模型价格，最高降幅97.5%",
        "url": "https://news.qq.com/rain/a/20260602A086VM00",
        "summary": "腾讯云下调DeepSeek-V4系列模型价格，最高降幅97.5%。",
        "source": "腾讯新闻"
      },
      {
        "title": "腾讯云DeepSeek-V4降价最高97.5%，AI模型价格战持续升温",
        "url": "https://finance.sina.com.cn/roll/2026-06-02/doc-inhzzcpu1633935.shtml",
        "summary": "腾讯云DeepSeek-V4降价最高97.5%，AI模型价格战持续升温。",
        "source": "新浪财经"
      }
    ]
  },
  {
    "date": "2026-06-01",
    "display": "6月1日",
    "weekday": "周一",
    "items": [
      {
        "title": "MiniMax发布M3旗舰大模型：1M上下文+原生多模态，编程能力超越GPT-5.5",
        "url": "https://www.cnblogs.com/jaryn/p/20306587",
        "summary": "MiniMax发布M3旗舰大模型，1M上下文+原生多模态，编程能力超越GPT-5.5。",
        "source": "博客园 / MiniMax官方"
      },
      {
        "title": "DeepSeek降价成永久优惠，豆包开始试探向个人用户收费",
        "url": "https://news.qq.com/rain/a/20260601A09UZS00",
        "summary": "DeepSeek降价转为永久优惠，豆包开始试探向个人用户收费，价格战进入新阶段。",
        "source": "腾讯新闻"
      }
    ]
  },
  {
    "date": "2026-05-30",
    "display": "5月30日",
    "weekday": "周六",
    "items": [
      {
        "title": "英伟达GTC 2026：Agentic AI全面爆发，全栈战略正式落地",
        "url": "https://finance.ifeng.com/c/8tbYEDGHX7e",
        "summary": "英伟达GTC 2026上Agentic AI全面爆发，全栈战略正式落地。",
        "source": "凤凰网财经"
      }
    ]
  },
  {
    "date": "2026-05-28",
    "display": "5月28日",
    "weekday": "周四",
    "items": [
      {
        "title": "DeepSeek V4.1定档6月发布，首次集成图像音频多模态与企业工具",
        "url": "https://aiproducthub.cn/newsflash/deepseek-v4-1-multimodal-enterprise-tools-june-release/",
        "summary": "DeepSeek V4.1定档6月发布，首次集成图像音频多模态与企业工具。",
        "source": "AI产品Hub"
      }
    ]
  }
];
