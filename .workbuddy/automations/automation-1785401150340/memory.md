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
