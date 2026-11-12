# AI家AI户·每日资讯草稿 2026-11-12

本草稿仅供人工过，未自动入库；确认后由人工/prepend 进 js/news-data.js 数组最前。

> ⚠️ 常驻清理规则（入库/上线前执行）：以每条 day 对象的 `date` 计算新闻年龄，凡是早于 **2026-09-28**（运行日 2026-11-12 减 45 天）的 day 对象，prepend 前必须剔除，确保线上只保留最近约 45 天资讯。写入后建议 `git commit` + `git push origin main`，由 Cloudflare Pages 自动构建；验证时用 cache-bust 请求确认 news-data.js 首项已为 2026-11-12。
>
> 📌 积压提醒：news-data.js 当前首项仍为 **2026-11-09**（11-10、11-11 每日草稿此前均未入库，已随覆盖丢失）。建议人工按 oldest→newest 顺序将 11-10、11-11、11-12 三份草稿依次 prepend 入库，并按上方 45 天规则裁剪（当前无需剔除，界限为 2026-09-28）。

---

## 可直接复制的 JS day 对象（prepend 到 window.AIHomeNews 数组最前）

```js
{
    "date": "2026-11-12",
    "display": "11月12日",
    "weekday": "周四",
    "items": [
        {
            "title": "谷歌发布 Gemini Decision 1 决策模型：不生成文字，只打分，输入仅 0.10 美元/百万 token",
            "url": "https://news.qq.com/rain/a/20261112A02A3500",
            "summary": "Gemini Decision 1 用单次前向传播对候选选项直接打分，一次调用最多评 1000 个问题，延迟 150–250ms。",
            "source": "腾讯新闻"
        },
        {
            "title": "OpenAI 单季营收首破百亿美元，但经营亏损达 109 亿美元",
            "url": "http://mp.weixin.qq.com/s?__biz=MzY5MjUwNjU2Nw==&mid=2247483757&idx=1&sn=fe5568a76ab4405fc8b4c14a9d876a2e&chksm=f56059ec1b6d099e839b29088ff7e684c2765e0e34fa97cf6dd00b2869c30a7192517cf88e5f#rd",
            "summary": "截至 9 月三季度营收约 100 亿美元、环比近 50%，但调整后经营亏损 109 亿美元，公司启动 Code Red 响应。",
            "source": "微信·沐白AI小屋（综合外媒）"
        },
        {
            "title": "北京印发具身智能机器人三年行动方案：2028 年产能 20 万台/年、新增 5 万 PFlops 算力",
            "url": "http://mp.weixin.qq.com/s?__biz=Mzg5NjExMDI1NA==&mid=2247483707&idx=1&sn=eeacb4e58295ba11d937734fee02ca59&chksm=c176f0d94f39f8a9ea9ab476d726ad967f21bc7409d5ee3c90f20aa7bc21c14f68a4a70d9cec#rd",
            "summary": "方案首次把产能、算力、数据写成可考核数字：培育 5 家国际一流整机企业，开放 100+ 真实场景。",
            "source": "微信·每日AI资讯（北京市经信局/新华社）"
        },
        {
            "title": "阿里 Qwen4-Max 预览版上线，同步开源 Qwen Code 1.0 运行底座",
            "url": "http://mp.weixin.qq.com/s?__biz=MzY5MjUwNjU2Nw==&mid=2247483757&idx=1&sn=fe5568a76ab4405fc8b4c14a9d876a2e&chksm=f56059ec1b6d099e839b29088ff7e684c2765e0e34fa97cf6dd00b2869c30a7192517cf88e5f#rd",
            "summary": "Qwen4-Max 预览版 100 万上下文、兼容 OpenAI/Anthropic 协议；Qwen Code 1.0 整合 Qoder 智能体框架开源。",
            "source": "微信·沐白AI小屋（阿里云）"
        },
        {
            "title": "百度文心 5.5 Flash Preview 亮相：2800 亿参数、100 万上下文，11-25 开源权重",
            "url": "http://mp.weixin.qq.com/s?__biz=MzY5MjUwNjU2Nw==&mid=2247483757&idx=1&sn=fe5568a76ab4405fc8b4c14a9d876a2e&chksm=f56059ec1b6d099e839b29088ff7e684c2765e0e34fa97cf6dd00b2869c30a7192517cf88e5f#rd",
            "summary": "总参 2800 亿、每 token 激活 140 亿，吐字超 200 tokens/秒，千帆平台已开放 API，权重月底按 Apache 2.0 开源。",
            "source": "微信·沐白AI小屋（百度/雷锋网）"
        },
        {
            "title": "腾讯元宝搜索独立网页版上线，千亿索引打底、公众号与视频号全接入",
            "url": "http://mp.weixin.qq.com/s?__biz=Mzg5NjExMDI1NA==&mid=2247483707&idx=1&sn=eeacb4e58295ba11d937734fee02ca59&chksm=c176f0d94f39f8a9ea9ab476d726ad967f21bc7409d5ee3c90f20aa7bc21c14f68a4a70d9cec#rd",
            "summary": "so.qq.com 上线，结果页把广告与答案分开展示，接入公众号、视频号与学术文献，QQ 浏览器首页已切换。",
            "source": "微信·每日AI资讯（界面新闻）"
        },
        {
            "title": "国家发改委：“十五五”深化拓展“人工智能+”，主攻矿山、高空、救灾等险脏累繁难场景",
            "url": "http://mp.weixin.qq.com/s?__biz=Mzg5NjExMDI1NA==&mid=2247483707&idx=1&sn=eeacb4e58295ba11d937734fee02ca59&chksm=c176f0d94f39f8a9ea9ab476d726ad967f21bc7409d5ee3c90f20aa7bc21c14f68a4a70d9cec#rd",
            "summary": "新闻联播披露，将以落地应用牵引技术创新，持续推动制造、能源、交通、医疗中试基地建设。",
            "source": "微信·每日AI资讯（央视新闻联播）"
        },
        {
            "title": "微软曝光模型后门新手法 Lazarus：仅改 7 个神经元，触发成功率 98.8%",
            "url": "http://mp.weixin.qq.com/s?__biz=MzY5MjUwNjU2Nw==&mid=2247483757&idx=1&sn=fe5568a76ab4405fc8b4c14a9d876a2e&chksm=f56059ec1b6d099e839b29088ff7e684c2765e0e34fa97cf6dd00b2869c30a7192517cf88e5f#rd",
            "summary": "在开源检查点中编辑极少神经元即可植入后门，权重完整性成新攻击面，目前尚未被实际武器化。",
            "source": "微信·沐白AI小屋（Microsoft Research）"
        },
        {
            "title": "OpenAI 上线 Businesses in ChatGPT 商家橱窗测试版，企业可认领店铺信息",
            "url": "http://mp.weixin.qq.com/s?__biz=Mzg5NjExMDI1NA==&mid=2247483707&idx=1&sn=eeacb4e58295ba11d937734fee02ca59&chksm=c176f0d94f39f8a9ea9ab476d726ad967f21bc7409d5ee3c90f20aa7bc21c14f68a4a70d9cec#rd",
            "summary": "商家可认领资料页、维护价格库存，开启 Business Agent 会话；基于 ChatGPT 每周 12 亿用户规模。",
            "source": "微信·每日AI资讯（OpenAI 官网/TechCrunch）"
        },
        {
            "title": "沐曦×优必选合资曦选创智完成 5 亿元融资，专造机器人大小脑一体芯片",
            "url": "https://news.qq.com/rain/a/20261112A02QG900",
            "summary": "合资公司首颗自研 SoC 对标英伟达 Thor，打通“芯片—模组—工具链—场景验证”端侧计算底座。",
            "source": "腾讯新闻"
        }
    ]
}
```

---

## 人类可读列表（便于人工快速扫读）

**1. 谷歌发布 Gemini Decision 1 决策模型：不生成文字，只打分，输入仅 0.10 美元/百万 token**
- 来源：腾讯新闻
- URL：https://news.qq.com/rain/a/20261112A02A3500
- 摘要：Gemini Decision 1 用单次前向传播对候选选项直接打分，一次调用最多评 1000 个问题，延迟 150–250ms。

**2. OpenAI 单季营收首破百亿美元，但经营亏损达 109 亿美元**
- 来源：微信·沐白AI小屋（综合外媒）
- URL：http://mp.weixin.qq.com/s?__biz=MzY5MjUwNjU2Nw==&mid=2247483757&idx=1&sn=fe5568a76ab4405fc8b4c14a9d876a2e&chksm=f56059ec1b6d099e839b29088ff7e684c2765e0e34fa97cf6dd00b2869c30a7192517cf88e5f#rd
- 摘要：截至 9 月三季度营收约 100 亿美元、环比近 50%，但调整后经营亏损 109 亿美元，公司启动 Code Red 响应。

**3. 北京印发具身智能机器人三年行动方案：2028 年产能 20 万台/年、新增 5 万 PFlops 算力**
- 来源：微信·每日AI资讯（北京市经信局/新华社）
- URL：http://mp.weixin.qq.com/s?__biz=Mzg5NjExMDI1NA==&mid=2247483707&idx=1&sn=eeacb4e58295ba11d937734fee02ca59&chksm=c176f0d94f39f8a9ea9ab476d726ad967f21bc7409d5ee3c90f20aa7bc21c14f68a4a70d9cec#rd
- 摘要：方案首次把产能、算力、数据写成可考核数字：培育 5 家国际一流整机企业，开放 100+ 真实场景。

**4. 阿里 Qwen4-Max 预览版上线，同步开源 Qwen Code 1.0 运行底座**
- 来源：微信·沐白AI小屋（阿里云）
- URL：http://mp.weixin.qq.com/s?__biz=MzY5MjUwNjU2Nw==&mid=2247483757&idx=1&sn=fe5568a76ab4405fc8b4c14a9d876a2e&chksm=f56059ec1b6d099e839b29088ff7e684c2765e0e34fa97cf6dd00b2869c30a7192517cf88e5f#rd
- 摘要：Qwen4-Max 预览版 100 万上下文、兼容 OpenAI/Anthropic 协议；Qwen Code 1.0 整合 Qoder 智能体框架开源。

**5. 百度文心 5.5 Flash Preview 亮相：2800 亿参数、100 万上下文，11-25 开源权重**
- 来源：微信·沐白AI小屋（百度/雷锋网）
- URL：http://mp.weixin.qq.com/s?__biz=MzY5MjUwNjU2Nw==&mid=2247483757&idx=1&sn=fe5568a76ab4405fc8b4c14a9d876a2e&chksm=f56059ec1b6d099e839b29088ff7e684c2765e0e34fa97cf6dd00b2869c30a7192517cf88e5f#rd
- 摘要：总参 2800 亿、每 token 激活 140 亿，吐字超 200 tokens/秒，千帆平台已开放 API，权重月底按 Apache 2.0 开源。

**6. 腾讯元宝搜索独立网页版上线，千亿索引打底、公众号与视频号全接入**
- 来源：微信·每日AI资讯（界面新闻）
- URL：http://mp.weixin.qq.com/s?__biz=Mzg5NjExMDI1NA==&mid=2247483707&idx=1&sn=eeacb4e58295ba11d937734fee02ca59&chksm=c176f0d94f39f8a9ea9ab476d726ad967f21bc7409d5ee3c90f20aa7bc21c14f68a4a70d9cec#rd
- 摘要：so.qq.com 上线，结果页把广告与答案分开展示，接入公众号、视频号与学术文献，QQ 浏览器首页已切换。

**7. 国家发改委：“十五五”深化拓展“人工智能+”，主攻矿山、高空、救灾等险脏累繁难场景**
- 来源：微信·每日AI资讯（央视新闻联播）
- URL：http://mp.weixin.qq.com/s?__biz=Mzg5NjExMDI1NA==&mid=2247483707&idx=1&sn=eeacb4e58295ba11d937734fee02ca59&chksm=c176f0d94f39f8a9ea9ab476d726ad967f21bc7409d5ee3c90f20aa7bc21c14f68a4a70d9cec#rd
- 摘要：新闻联播披露，将以落地应用牵引技术创新，持续推动制造、能源、交通、医疗中试基地建设。

**8. 微软曝光模型后门新手法 Lazarus：仅改 7 个神经元，触发成功率 98.8%**
- 来源：微信·沐白AI小屋（Microsoft Research）
- URL：http://mp.weixin.qq.com/s?__biz=MzY5MjUwNjU2Nw==&mid=2247483757&idx=1&sn=fe5568a76ab4405fc8b4c14a9d876a2e&chksm=f56059ec1b6d099e839b29088ff7e684c2765e0e34fa97cf6dd00b2869c30a7192517cf88e5f#rd
- 摘要：在开源检查点中编辑极少神经元即可植入后门，权重完整性成新攻击面，目前尚未被实际武器化。

**9. OpenAI 上线 Businesses in ChatGPT 商家橱窗测试版，企业可认领店铺信息**
- 来源：微信·每日AI资讯（OpenAI 官网/TechCrunch）
- URL：http://mp.weixin.qq.com/s?__biz=Mzg5NjExMDI1NA==&mid=2247483707&idx=1&sn=eeacb4e58295ba11d937734fee02ca59&chksm=c176f0d94f39f8a9ea9ab476d726ad967f21bc7409d5ee3c90f20aa7bc21c14f68a4a70d9cec#rd
- 摘要：商家可认领资料页、维护价格库存，开启 Business Agent 会话；基于 ChatGPT 每周 12 亿用户规模。

**10. 沐曦×优必选合资曦选创智完成 5 亿元融资，专造机器人大小脑一体芯片**
- 来源：腾讯新闻
- URL：https://news.qq.com/rain/a/20261112A02QG900
- 摘要：合资公司首颗自研 SoC 对标英伟达 Thor，打通“芯片—模组—工具链—场景验证”端侧计算底座。
