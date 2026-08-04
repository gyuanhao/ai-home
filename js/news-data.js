/**
 * AI家AI户 · 每日AI资讯数据
 * 结构：每个元素为 { date, display, weekday, items:[ {title,url,summary,source} ] }，整体赋值给 window.AIHomeNews。
 * 每条 items 即一条快讯；date 为 ISO 日期（YYYY-MM-DD），display/weekday 仅用于页面展示。
 * 工作日更新，每天数条。新增一天只需在最前面插入一个 day 对象即可。
 * 仙侠站数据由 xianxia/scripts/convert_news.py 解析本文件自动同步，请勿手改 xianxia 端。
 */
window.AIHomeNews = [
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
