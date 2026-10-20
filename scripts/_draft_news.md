# AI家AI户·每日资讯草稿 2026-10-20

> 本草稿已于 2026-10-20 部署上线：2026-10-20（9 条）+ 2026-10-16（10 条，原附录 A）已 prepend 进 js/news-data.js 数组最前；按 45 天规则裁剪 2026-09-01~09-04 共 4 天。
> 部署后 js/news-data.js：20 天 / 187 条，首项目 2026-10-20、末项目 2026-09-08。本文件作为当次入库留档，下次自动化运行将覆盖。

## 可直接复制的 JS day 对象

```js
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
}
```

## 人类可读列表（供人工快速扫读）

1. **MiniMax 正式发布 M3.1 Flash：推理提速近 3 倍、成本降七成**
   - 来源：上观新闻（今日头条）
   - URL：https://www.toutiao.com/article/7698502747515060736
   - 摘要：此前匿名模型“太空兔”本尊，复杂 Agent、电脑操作、编程与网安能力大幅提升，线上推理提速近 3 倍、成本降七成，Automation-Bench 等基准居国产第一。

2. **DeepSeek 推出 V4.1 Flash-1017：Token 用量降逾五成，首发帕累托前沿曲线**
   - 来源：比特网（网易/新浪财经）
   - URL：https://www.163.com/dy/article/L9LGRLNU05566SCS_pdya11y.html
   - 摘要：通过任务感知压缩、动态上下文裁剪与自适应解码，多数场景 Token 用量降逾 50%，维持原价并首发帕累托前沿曲线，性价比达同类四五十倍。

3. **中国大模型周调用量连续 25 周超美国，全球前五均为国产**
   - 来源：每日经济新闻（今日头条）
   - URL：https://www.toutiao.com/article/7698518183568851471/
   - 摘要：OpenRouter 测算上周全球大模型总调用 164 万亿 Token，中国达 79.18 万亿、连续 25 周超美国，全球调用量前五均为国产模型。

4. **市场监管总局发布 AI 赋能钢铁行业首批三项国家标准**
   - 来源：央视网
   - URL：https://big5.cctv.com/gate/big5/news.cctv.cn/2026/10/19/ARTIZzh0SWwRiD93GGbNhlUB261019.shtml
   - 摘要：发布《钢铁行业应用场景分类指南》《钢铁大模型数据集技术要求》《服务能力成熟度评估》三项国标，构建“场景—数据集—成熟度”闭环。

5. **美国国土安全部下令联邦机构移除 DeepSeek 产品及第三方服务**
   - 来源：微博（央视）
   - URL：https://weibo.com/6244553417/5355981714490659
   - 摘要：美 DHS 于《联邦公报》公告，要求联邦文职机构 IT 系统移除所有 DeepSeek 产品及采用其模型的第三方服务，并禁止政府采购。

6. **Anthropic 神秘“读心”新模型曝光，或命名 Fable 5.5 / Opus 5.6**
   - 来源：网易科技（机器之心/新浪财经）
   - URL：https://www.163.com/dy/article/L9LS20BE05568W0A.html
   - 摘要：The Information 爆料 Anthropic 在研新模型推理与直觉超越现商用版，擅推断用户未明说意图，可能主动发现并提议解决同类底层问题。

7. **小米开源业界首个端到端空间音频理解大模型 MiDashengLM-Spatial**
   - 来源：IT之家
   - URL：https://www.ithome.com/1/013/739.htm
   - 摘要：以 MiDashengLM-7B 为基座，可感知声源方位、距离与方向，完整开源权重与代码（Apache 2.0），将落地智能家居与汽车座舱。

8. **优必选自研具身世界模型 Thinker-WM 登顶三大国际基准**
   - 来源：腾讯新闻
   - URL：https://news.qq.com/rain/a/20261019A0DARW00
   - 摘要：Thinker-WM 在 Physics-IQ、Playroom、ThreeWorld 三大具身世界模型基准同时登顶，聚焦物理规律理解与机器人动作规划。

9. **商务部等 9 部门发布“科技兴商”18 条举措，加速脑机接口与具身智能转化**
   - 来源：央视网
   - URL：https://news.cctv.com/2026/10/19/ARTIi9YD7LPE6bjGmyAVYGAG261019.shtml
   - 摘要：意见从商品消费、服务消费、商贸流通、未来场景四方面提出 18 条举措，明确加速脑机接口、具身智能等前沿科技成果市场化。

## 已主动跳过 / 去重说明

- **Character.AI 破产、迪士尼接盘**：2026-10-15 已入库（「Character.AI 破产迪士尼 2000 万美元接盘」），属同事件，跳过。
- **工信部《人工智能安全评测框架（2026 版）》**：2026-10-16 草稿已收录，本稿不重复拾取。
- **阶跃 Step 5 开源 / 英伟达 Nemotron 系列 / Meta Muse Spark Open / 微软 MAI-Base-2 / 蚂蚁 Ling-3.1-flash / IBM Granite Switch 4.1 等**：均为 10/15 已部署或 10/16 待入库条目，本稿仅取 10/19–10/20 窗口内全新事件，避免与既有草稿/线上内容碰撞。
- **小米 MiDashengLM-Spatial**：原始发布于 10/15–10/16，但 10/19 腾讯新闻《前沿快讯》作为新进展再次重点报道，且未出现在 10/15 部署与 10/16 草稿中，故纳入本稿。
- **OpenCode 托管控制台密钥疑似泄露（TechCrunch 10/20）**：当日国际安全事件，但与中文普通用户距离较远、且信源为英文聚合，稳妥起见未纳入本稿。

---

## 附录 A：待入库积压草稿（2026-10-16，10 条，原样保留）

> 10/16 草稿从未入库、仅存工作树；为避免被本稿覆盖而永久丢失，原样保留如下。部署时按 **2026-10-20 → 本附录 10/16 → 现有 2026-10-15** 顺序 prepend。

```js
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
}
```
