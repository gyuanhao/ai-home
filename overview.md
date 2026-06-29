# 百炼平台集成 + 通义链接替换 — 变更总结

## 完成时间
2026年6月26日

## 变更概览

### A: 通义链接替换为百炼平台
- `js/main.js` 通义千问 `website` — 从 `t.aliyun.com/U/DAKCTy` → `aliyun.com/product/bailian?userCode=zpk45rgx`
- `js/main.js` 通义灵码 `website` — → `tongyi.aliyun.com/lingma?userCode=zpk45rgx`
- `js/main.js` 通义千问 `priceDetail` — 更新为百炼平台定价信息（7000万Tokens + 限时5折）
- `index.html` 首页推荐卡片 — 更新链接和推荐理由
- `hero-demo.html` Demo页推荐卡片 — 同步更新

### B: Agent平台新增百炼卡片
- `js/main.js` — 在 Agent平台分类新增"百炼平台"卡片（阿里云出品）
  - 关键卖点：100+模型接入、MCP托管、Agent搭建、可视化工作流、新用户7000万免费Tokens
- `compare.html` — Agent平台横向对比表新增百炼列（开发商/定位/免费版/入门价/自托管/中文/垂直/适合谁）
- `js/i18n.js` — 全局数量更新：Agent 6→7，总数 35→36（models页）、43→44（about/compare页）
- `about.html` — 计数器 fallback 文本同步更新
- 全站日期统一从 2026-06-25 更新为 2026-06-26

## 修改文件清单
| 文件 | 变更 |
|------|------|
| `js/main.js` | +31/-3（百炼卡片 + 2处链接替换 + 价格文案） |
| `js/i18n.js` | +32/-20（16处日期更新 + 3处数量更新） |
| `compare.html` | +13/-2（百炼对比列 + meta + 文案） |
| `about.html` | +4/-4（计数器 + 日期） |
| `index.html` | +4/-2（推荐卡 + footer日期） |
| `hero-demo.html` | +1/-1（推荐卡链接） |

## 待办
- 考虑后续添加 Wan2.7-Image / Wan2.7-Video 到图像/视频模型分类
- 下次批量更新时统一检查全站日期
