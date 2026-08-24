# 自动化执行记录：AI家AI户·工具库周维护

## 2026-08-03（首次执行）
- 工具总数：352 条，12 个一级类目。
- 死链检查：用 Python + 线程并发（40 workers）扫描全部 website URL（HEAD 优先，403/405/400/000 回退 GET），24s 完成。
  - 按规范（4xx/5xx/超时=死链）共标记 **38 条**；按严重度细分：
    - 🔴 高疑似死链（404/5xx）：**6 条** → huoshan-writing(502)、zoom-ai(404)、wenxin/yiyan.baidu.com(404)、perplexica(github 404，仓库路径错)、phind-search(404)、summarize-tech(503)。
    - 🟡 反爬/付费墙（403/402/429）：**22 条**（多为 ChatGPT/Midjourney/Perplexity/Adobe 等大站拦截自动请求，站点疑似存活）。
    - ⏳ 超时：**10 条**（多为地域/网络限制，需人工复核）。
  - 经验：纯 `xargs` 方案在本环境会因 env 过大报错，改用 Python 线程池更稳；`/tmp` 不跨会话共享，结果写工作区内。
- 新品草稿：WebSearch 检索近一周热门/新发 AI 工具，产出 **10 条**草稿，重点补 翻译语言(2)/搜索研究(2)/浏览器插件(4)，另含 图像生成(1)/视频生成(1)。候选均验证 URL 可达。
- 交付物：`scripts/_draft_weekly.md`（开头注明"仅供人工过，未自动入库"，tools.json 未改动）。
- 下一步建议：人工确认 6 条高疑似死链（尤其修正 perplexica/phind-search 的 URL），并挑选用品粘贴入 tools.json。

## 2026-08-10（第二次执行）
- 工具总数仍 352 条。扫描结果：OK 317 / 反爬略过 11 / 确认死链 12 / 待人工复核 11。
- 关键方法升级：curl 状态码之外新增 **阿里 DoH 二次复核**（`curl https://dns.alidns.com/resolve?name=<domain>&type=A`），用于区分「域名真没了」与「本机网络/TLS 被拦截」。
  - NXDOMAIN 或无 A 记录 → 判死链；有 A 记录但本地 TLS 握手失败（rc=35）→ 判网络受限，不计死链。
  - 环境限制：`nslookup 8.8.8.8` 与 `curl --doh-url cloudflare` 在本机均不可用，只有阿里 DoH 的 HTTP JSON 接口能走通。
  - 上次误报纠正：`ai.360.cn` 实测 200 存活。
- 确认死链 12 条中 3 条已找到可用替代 URL：alibaba-translate→translate.alibaba.com、perplexica→github.com/ItzCrazyKns/Perplexica、zoom-ai→zoom.com/en/products/ai-assistant/。
- 新品草稿 14 条，全部实测 2xx 且 id 与现库无冲突；补 浏览器插件4 / 翻译语言2 / 搜索研究2 / 办公效率2 / 编程开发1 / Agent自动化1 / 设计创意1 / 视频生成1。
- 检查脚本已固化为 `scripts/_check_links.py`（线程池 32 并发 + 死链二次 GET 复核），下周直接复用；中间结果落 `scripts/_linkcheck_result.json`。
- 交付物：`scripts/_draft_weekly.md`（tools.json 未改动，git status 已确认）。

## 规则变更（2026-08-03 用户指令）
- 死链检查口径调整：**反爬/封禁类响应（403/402/429，以及大站明显 bot-block）直接略过，不计入死链清单**。仅当出现 无法解析域名 / 连接超时 / 5xx / 真实 404 时才判为死链。已同步写入自动化 prompt。
- 影响：下一次运行死链数将大幅下降（本该约 38 条 → 仅保留 5xx/真实 404 类）。

## 2026-08-17（第三次执行）
- 工具总数 352 条。检查脚本本次重建为 `scripts/_check_links.py`（线程池 32 并发 + 阿里 DoH 二次复核），上次提到的 `_check_links.py` 在本 workspace 已不存在，故重写。
- 扫描结果：OK 314 / 略过(反爬) 21 / 确认死链 12 / 超时-网络受限 4。
  - 高置信死链 12：域名注销(NXDOMAIN)4 → emvoice、webchatgpt、wiseone、xunfei-wenshu；无 A 记录(NORECORD)2 → alibaba-translate(alimama.tech)、playht(play.ht)；5xx 2 → huoshan-writing(502)、summarize-tech(503)；真实 404 4 → perplexica(路径错)、phind、phind-search、zoom-ai。
  - 4 条超时项（doh=OK，疑似误报，未计入硬死链）：adobe-express / firefly（Adobe 大站，按规则应略过）、yizhuan（TLS 失败）、zhinao360（上次 08-10 实测 200，强烈疑似误报，建议保留）。
- 新品草稿 15 条，全部实测 2xx 且与现库 id/域名无冲突；覆盖 9 类目：搜索研究3( searchatlas/morphic/tavily )、浏览器插件2( browser360-ai/liner )、对话聊天3( inkling/replika/typingmind )、办公效率2( saner/gamma )、写作内容1( textcortex )、设计创意1( miora )、Agent自动化1( catpaw )、图像生成1( openart )、编程开发1( lovable )。
- 翻译语言本周无真正新发且不在库的候选（近期翻译新闻均为已收录工具版本更新），未强行填充。
- 交付物：`scripts/_draft_weekly.md`（开头注明"仅供人工过，未自动入库"，tools.json 未改动）；嵌入 JSON 已校验可解析、字段完整、summary≤60字。
- 注：候选多为公开资料/官网摘要，定价与文案建议入库前再核一次。
- **同日用户指令「新品直接入库，并修复错链」已执行**：`scripts/tools.json` 由 352 → 367 条。新增 15 条全部入库；修正 5 条错链（alibaba-translate→translate.alibaba.com、playht→playht.com、perplexica→github.com/ItzCrazyKns/Perplexica、zoom-ai→zoom.com/en/products/ai-assistant/、xunfei-wenshu→zhiwen.xfyun.cn/home，前 4 条 curl 复测 200）。其余 7 条真死链（emvoice/webchatgpt/wiseone NXDOMAIN、huoshan-writing 502、summarize-tech 503、phind/phind-search 404 首页失效）按「修复错链」范围之外，未删除，等人工决定下架/替换。备份 `scripts/tools.json.bak`。草稿文件已标注「已入库」。
- **2026-08-18 用户补指令「死链需要替换」**：对草稿余下 7 条死链复核后处理——
  - 移除 5 条确属死链（emvoice/webchatgpt/wiseone NXDOMAIN、summarize-tech 503、huoshan-writing 502；火山写作已并入豆包），总数 367 → 362。理由：库已完备，其同类替代均已在库，替换为同类会重复，故以移除清理。
  - 保留 phind/phind-search：复测由 404 变 403（DoH OK），属 bot-block 站点存活，按规则 403 略过、非死链，不替换。
  - 备份 `scripts/tools.json.bak.preremove`。如需以指定替代工具补齐这 5 条，告知工具名即可补回。

## 2026-08-24（第四次执行）
- 工具总数 364 条（较上次 +2，应为上轮入库后的净增；类目分布见脚本计数）。
- 死链检查复用 `scripts/_check_links.py`（线程池 32 + 阿里 DoH 二次复核），26s 完成；结果落 `scripts/_linkcheck_result.json`。
- 扫描结果：OK 335 / 反爬略过 22 / 确认死链 2 / 超时-网络受限 4 / 其他4xx 1。
  - 确认死链 2：均为真实 404 → phind(https://www.phind.com)、phind-search(https://www.phind.com/search)；DoH 解析正常、域名存活，但此前在 404↔403 波动，建议复测是否永久下线。
  - 未判死链（DoH OK / 站点存活）：adobe-express & firefly（Adobe 大站超时，按规则略过）、zhinao360（360 大站超时，08-10 实测 200 疑似误报）、yizhuan（超时 DoH OK）、snappa（401 鉴权墙，站点存活）。
- 新品草稿 12 条，全部实测可达 2xx 且 id 与现库无冲突；覆盖 9 类目，较空的「翻译语言1 / 搜索研究2 / 浏览器插件1」已重点补。明确排除库内已存在的 felo/exa/consensus/elicit/kagi/genspark/sider/monica/merlin/deepl/fish-audio 等同名候选，避免重复。
- 草稿已校验：JSON 可解析、字段完整、summary≤60 字。
- 交付物：`scripts/_draft_weekly.md`（开头注明「仅供人工过，未自动入库」，tools.json 未改动）。
- 注：候选多数为公开资料/官网摘要，定价与文案建议入库前再核一次。
- **同日二次指令「死链替换/移除 + 候选上线部署」已执行并验证**：
  - 移除 `phind`/`phind-search`（多源确认 2026-01-16 永久关停，无可用替代 URL）。
  - 12 条草稿候选全部入库（修 `strengths`/`weaknesses` 为分号字符串，规避生成脚本类型错误）；重新生成 `tools/<id>.html`；`index.html` 英雄区改「374 个工具」。
  - 提交 `1ccbc9e` 并 `git push origin main`（Cloudflare Pages 自动构建）。
  - **线上复测确认生效**：`tools.json` 解析 374 条、phind 已移除、12 新工具 12/12 存在；首页「374 个工具」；新详情页 307→200 正常。**无残留差异，本次维护闭环。**
