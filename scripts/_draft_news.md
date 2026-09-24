# AI家AI户·每日资讯草稿 —— 暂无可发布草稿

本草稿仅供人工过，未自动入库；确认后由人工/prepend 进 js/news-data.js 数组最前。

> **状态：积压已清空（2026-09-24 人工触发部署）**
>
> 本次将 `scripts/_draft_news.md` 中 2026-09-24 的 10 条资讯 prepend 进
> `js/news-data.js` 数组最前。运行日 2026-09-24 − 45 = `2026-08-10` 为 cutoff，
> 原末项恰为 2026-08-10（== cutoff，保留），**本次无过期 day 需剔除**。
>
> 入库后：**25 个 day 对象 / 242 条**，首项 `2026-09-24`，次项 `2026-09-21`，末项 `2026-08-10`。
> 仙侠风云榜已同步（`xianxia/scripts/convert_news.py` → 242 条）。
>
> 备查：如需回看本次上线内容，见 `js/news-data.js` 数组最前一个 day 对象，或 git 提交记录。

## 下一步

下一次每日自动化运行时会重新写入本文件（覆盖此占位），产出当日新草稿。

## 常驻清理规则（写入 news-data.js 前必须执行）

以每条 day 对象的 `date` 字段计算新闻年龄，凡 `date` 早于「运行日 − 45 天」的 day 对象，
在写入 `js/news-data.js` 之前必须剔除，确保线上只保留最近约 45 天的资讯。
写入后执行 `git commit` + `git push origin main`，由 Cloudflare Pages 自动构建上线；
验证时用 cache-bust 请求确认 `news-data.js` 首项已为最新日期。
