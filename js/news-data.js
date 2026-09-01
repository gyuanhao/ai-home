/**
 * AI家AI户 · 每日AI资讯数据
 * 结构：每个元素为 { date, display, weekday, items:[ {title,url,summary,source} ] }，整体赋值给 window.AIHomeNews。
 * 每条 items 即一条快讯；date 为 ISO 日期（YYYY-MM-DD），display/weekday 仅用于页面展示。
 * 工作日更新，每天数条。新增一天只需在最前面插入一个 day 对象即可。
 * 仙侠站数据由 xianxia/scripts/convert_news.py 解析本文件自动同步，请勿手改 xianxia 端。
 */
window.AIHomeNews = [
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
}
,
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
  },
{
    "date": "2026-08-14",
    "display": "8月14日",
    "weekday": "周五",
    "items": [
      {
        "title": "DeepSeek 开源 Harness 智能体框架，补齐 Vibe Coding 入口",
        "url": "https://www.nbd.com.cn/articles/2026-08-14/4541621.html",
        "summary": "8/13晚开源 DeepSeek Harness(DSH) 开发者预览版，一切皆插件，可接代码库自动改码跑测试。",
        "source": "每日经济新闻"
      },
      {
        "title": "谷歌发布 Gemini 3.7 Flash，主打编程与自主智能体",
        "url": "https://www.163.com/dy/article/L49E7CRE0550WHYR_pdya11y.html",
        "summary": "8/13发布，主打编程与自主智能体，输入价降至前代一半，已上线 Gemini Spark。",
        "source": "网易 / 财闻"
      },
      {
        "title": "Anthropic 估值或破 2 万亿美元，最快 10 月上市",
        "url": "https://www.163.com/dy/article/L49CRG5O0512B07B.html",
        "summary": "据投资方人士，最快10月IPO，估值预期达2万亿美元，年化营收增至470亿美元。",
        "source": "网易 / 每日经济新闻"
      },
      {
        "title": "OpenAI 年内二度换 CRO，加速商业化落地",
        "url": "https://www.ccidnet.com/AIqqy/1122976.jhtml",
        "summary": "任命 Dali Rajic 任首席营收官，技术负责人等多名高管离任，周活突破10亿。",
        "source": "赛迪网"
      },
      {
        "title": "Databricks 完成 50 亿美元融资，估值升至 1900 亿",
        "url": "https://new.qq.com/rain/a/20260814A047NJ00?refer=cp_1009",
        "summary": "Coatue、黑石等领投，年化营收破70亿美元，资金投向 Lakebase、Genie 等 Agent 基建。",
        "source": "腾讯新闻 / 雷递网"
      },
      {
        "title": "AMD 创纪录发债 47.5 亿美元，加码 AI 算力",
        "url": "https://finance.sina.com.cn/roll/2026-08-14/doc-ininfrty2770554.shtml",
        "summary": "创芯片制造商发债规模纪录，承诺向 Anthropic 最高投50亿美元，AI 需求持续催融资。",
        "source": "新浪财经 / 财联社"
      },
      {
        "title": "复旦白泽 Whitzard 登国际 AI 安全榜全球第二",
        "url": "https://www.toutiao.com/article/7673541928448721443/",
        "summary": "CyberGym 榜单以91.2%漏洞攻防成功率列全球第二、高校第一，成本不足5000元。",
        "source": "央广网 / 央视新闻"
      },
      {
        "title": "AI 消费硬件爆发：外骨骼 +458%、眼镜 +151.7%",
        "url": "https://cj.sina.com.cn/article/norm_detail?url=https%3A%2F%2Ffinance.sina.com.cn%2Froll%2F2026-08-14%2Fdoc-ininfrtu4249949.shtml&finpagefr=w_110",
        "summary": "央视聚焦 AI+消费加速，上半年智能外骨骼与眼镜网零额分别增458.4%和151.7%。",
        "source": "央视网 / 新浪财经"
      },
      {
        "title": "京东 Q2 AI 产品成交额增 125%，加速布局机器人",
        "url": "https://view.inews.qq.com/a/20260814A00H9B00",
        "summary": "AI眼镜、AIPC等成交额同比增125%，首个 RoboBase 开工，5年布局80余机器人基地。",
        "source": "智东西 / 腾讯新闻"
      },
      {
        "title": "自变量机器人 1 小时分拣 1816 件，超 Figure AI",
        "url": "https://www.163.com/dy/article/L48L156C05569XIR.html",
        "summary": "公开直播创纪录，单台1小时完成1816件分拣，效率超海外 Figure AI 同类测试。",
        "source": "前沿在线 / 网易"
      }
    ]
  },
{
    "date": "2026-08-13",
    "display": "8月13日",
    "weekday": "周四",
    "items": [
      {
        "title": "DeepSeek V4 Pro 正式版上线，多项 Agent 测试逼近 Claude Fable 5",
        "url": "https://new.qq.com/rain/a/20260813A047OR00?refer=cp_1009",
        "summary": "0813版支持1M上下文与384K输出，多项Agent测试逼近Fable 5，价格暂未上涨。",
        "source": "腾讯新闻"
      },
      {
        "title": "马斯克发布 Grok 4.6，主打长程智能体与复杂编程",
        "url": "https://www.163.com/dy/article/L46B1EK905568W0A.html",
        "summary": "主打长程智能体与编程，综合智能指数61追平GPT-5.6，API价仅前沿一半。",
        "source": "新浪财经"
      },
      {
        "title": "腾讯 Q2 资本开支暴增 176%，AI 投入激进致现金流转负",
        "url": "https://finance.sina.com.cn/stock/hkstock/hkstocknews/2026-08-13/doc-inincnuy3396808.shtml",
        "summary": "砸528亿买算力、自由现金流转负138亿，AI投入激进但商业化可期。",
        "source": "新浪财经"
      },
      {
        "title": "谷歌发布 Pixel 11 系列，Gemini 可代订餐厅与叫车",
        "url": "https://www.163.com/dy/article/L4603BNP05568W0A.html",
        "summary": "Gemini可后台代订餐厅、叫车、点咖啡，AI手机竞争升温、全系涨价。",
        "source": "新浪财经"
      },
      {
        "title": "微软推出 MAI-Code-1.1-Flash 编程模型，价格降至初代 1/4",
        "url": "https://so.html5.qq.com/page/real/search_news?docid=70000021_1376a7bf8c706852",
        "summary": "代码能力升22%、Token消耗降25%，价格降至初代1/4并新增原生视觉。",
        "source": "IT之家"
      },
      {
        "title": "阿里云灵骏真武 M890 超节点实例上线，乌兰察布首发",
        "url": "https://www.163.com/dy/article/L44IA83E0514R9OJ.html",
        "summary": "乌兰察布首发64卡800GB/s互联，可承载十万亿参数级MoE推理。",
        "source": "环球网"
      },
      {
        "title": "Anthropic 与 Redwood 发布概念推理指数 CRI",
        "url": "https://alignment.anthropic.com/2026/conceptual-reasoning-index/",
        "summary": "测试无标准答案的概念推理，Opus 5得73.6、上限约91，新评测维度。",
        "source": "Anthropic"
      },
      {
        "title": "白宫拟将前沿开放模型纳入发布前安全测试框架",
        "url": "https://www.163.com/dy/article/L46SLO2305562QFT.html",
        "summary": "监管或由开源/闭源转向性能门槛，中国开源模型在美部署或受波及。",
        "source": "WIRED / 未尽研究"
      },
      {
        "title": "字节新设「AI数据与安全」一级部门，与 Seed 平行",
        "url": "https://tech.ifeng.com/c/8vVRX2ReKOi",
        "summary": "张一鸣「坚决不蒸馏」后，把数据升格为与Seed平行的一级战略部门。",
        "source": "凤凰网科技"
      },
      {
        "title": "美银启动 2500 亿美元 AI 基础设施融资计划",
        "url": "https://www.ibtimes.sg/bank-america-launches-250-billion-us-infrastructure-financing-initiative-ai-boom-92020",
        "summary": "18个月投向数据中心、电力与关键矿产，华尔街深度进场AI基建。",
        "source": "路透 / 国际财经时报"
      }
    ]
  },
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
