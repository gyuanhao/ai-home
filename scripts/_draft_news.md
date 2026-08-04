# AI家AI户·每日资讯草稿 2026-08-04

> 本草稿仅供人工过，未自动入库；确认后由人工/prepend 进 js/news-data.js 数组最前
> **状态：已于 2026-08-04 经用户确认「部署上线」，已 prepend 进 js/news-data.js 并推送至 main 触发 Cloudflare Pages 部署。下方 URL/来源已校订（原草稿第1/4、第8/9条曾串用同一链接，已各自配对真实来源）。**

## 可直接复制的 JS day 对象

```js
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
}
```

## 人工快速扫读列表

**1. 阿里发布Qwen3.8-Max：2.4万亿参数，"千问办公"同步开启公测**
- 来源：国际金融报
- URL：https://www.ifnews.com/news.html?aid=856458&cid=43
- 摘要：阿里旗舰模型Qwen3.8-Max上线，支持1M上下文与视觉理解，企业级Agent"千问办公"同步公测。
- 备注：模型权重下周开源，同时开源 Qwen3.8-27B；国内API定价每百万Token输入12元、输出36元。

**2. 白宫召集OpenAI、谷歌、Anthropic，审议AI模型安全测试框架终稿**
- 来源：网易（极客公园）
- URL：https://www.163.com/dy/article/L3FM8LFQ05119FMA.html
- 摘要：美方拟推自愿性机制，要求AI实验室在模型对外发布前先提交政府评估，周二在白宫开会讨论。

**3. OpenAI旗下ChatGPT Atlas浏览器8月9日停服，书签需手动导出**
- 来源：腾讯新闻（IT之家）
- URL：https://new.qq.com/rain/a/20260803A09L1H00
- 摘要：上线不足10个月的Atlas将停止服务，数据不会自动迁移，用户须提前导出书签与历史记录。
- 备注：对普通用户实操性最强的一条，Cookies无法导出，迁移后需重新登录。

**4. 京东外卖发布自研AI智能头盔，首批免费发放给全职骑手**
- 来源：证券日报
- URL：http://www.zqrb.cn/gscy/qiyexinxi/2026-08-03/A1785740390222.html
- 摘要：头盔集成AI语音助手、单王带路、一键SOS与商户核验，骑手全程语音接单无需碰手机。

**5. 《人民日报》：无锡上线"词元超市"，调用大模型省钱又方便**
- 来源：人民日报（腾讯新闻转载）
- URL：https://so.html5.qq.com/page/real/search_news?docid=70000021_0116a7121b916152
- 摘要：20多种主流大模型一个账号统一调用、集中采购拿团购价，已服务超50家企业，研发成本降近三成。
- 备注：与 8/3 已入库的"嘉兴Token运营中心"同属Token经济主题但为不同城市、不同报道（人民日报8月4日第12版），角度为中小企业降本。若嫌重复可删。

**6. 触觉感知企业帕西尼再获10亿元战略轮融资，累计融资达35亿元**
- 来源：北京商报
- URL：https://app.bbtnews.com.cn/print.php?contentid=601157
- 摘要：本轮由消费电子半导体巨头、中银国际投资、鲲鹏基金等联合投资，创全球触觉感知领域融资纪录。

**7. 月之暗面回应港股IPO传闻：消息不实**
- 来源：网易（界面新闻）
- URL：https://www.163.com/dy/article/L3FPS1LQ0534A4SC.html
- 摘要：针对近日市场流传的月之暗面赴港上市消息，知情人士向媒体明确回应称传闻不属实。

**8. 韩国国家AI计算中心正式动工，目标2028年建成**
- 来源：腾讯新闻（IT之家）
- URL：https://new.qq.com/rain/a/20260803A06XA700?refer=cp_1009
- 摘要：韩国启动国家级AI算力基础设施建设，计划2028年投用，加码本土大模型训练与推理能力。

**9. 消息称阿里内测AI办公平台"万有无界"，主打多智能体协同交付**
- 来源：站长之家
- URL：https://www.chinaz.com/ainews/30058.shtml
- 摘要：该平台由多个智能体分工协作完成任务交付，被视为阿里在AI办公赛道的又一条产品线。

---

## 已主动跳过的旧闻/重复项

- DeepSeek-V4-Flash 正式版 API（8/1 已入库；8/4 的 21世纪经济报道深度解读属同一事件）
- MiniMax H3 开源全模态视频模型（8/1 已入库）
- OpenAI Astra 破解十项数学难题（8/2 已入库）
- 高德地图"小高老师"AI原生地图（搜索命中的是 2025-08-04 旧闻，非今年）
- AI短剧上半年22.19万部、爆款率0.47%（DataEye 报告为 7 月中下旬发布，非当日新闻）
