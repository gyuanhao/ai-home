# AI家AI户 网站开发进度报告

- **报告生成日期**：2026-07-13
- **项目**：AI家AI户（myaishome.com）— 中文 AI 大模型对比导航站
- **代码仓库**：`git@github.com:gyuanhao/ai-home.git`
- **部署**：Cloudflare Pages（自动同步 main 分支，主）+ GitHub Pages（备）
- **自定义域名**：myaishome.com / www.myaishome.com
- **数据分析**：Google Analytics `G-TBTFSXQ6NF`
- **商业化**：Google AdSense `ca-pub-1082515322846897`

> 本报告只记录有实质意义的里程碑与改动，省略反复调试过程。

---

## 一、项目定位与技术架构

### 定位
便利店模式——"不是权威，是省事"。帮中文普通用户（英语不熟 / 不想看英文评测）快速挑选 AI 工具。信任建立靠：来源标注 + 最后更新日期 + 公开信息属性。

### 技术栈
- 纯静态站：HTML + CSS，无构建框架
- **双数据源**：
  - `js/main.js` —— 浏览器端渲染（模型卡片、筛选、搜索）
  - `scripts/models.json` —— 模型详情页生成源（44 个产品数据）
- 部署：Cloudflare Pages 自动同步 GitHub main；自定义域名 myaishome.com
- 合规：AdSense + 隐私政策页 + cookie consent banner

### 当前内容规模
| 指标 | 数值 |
|---|---|
| 模型详情页 | 44 个（6 大品类） |
| 技能包 | 296 个（28 分类、107 团队） |
| 技能详情页 | 296 个 |
| 页面总数 | 首页 / 模型库 / 对比 / 自定义对比 / 新闻 / 关于 / 技能包 / 热门对比(6页) / 44 模型详情页 / 296 技能详情页 |

---

## 二、重大里程碑（按阶段）

### 阶段 1 — 界面架构搭建
- 顶部导航 → **左侧固定边栏**（小红书风格：左 200px 固定 + 内容区 `margin-left:200px`）
- 移动端：**汉堡菜单 + 底部固定 Tab 栏**（首页 / 模型库 / 对比 / 技能包）
- 全站 **SVG 图标系统替代 emoji**（53 个图标，11 页 459 处替换）
- 产品级界面精修（借助 impeccable 技能做视觉精修）

### 阶段 2 — 内容体系成型
- **模型库 44 个详情页**：自动生成器 + 面包屑导航 + 中英文切换
- **热门对比页**：`vs/` 下 6 个页面 + 面包屑导航
- **新闻页**：聚合近期 AI 热点（6 月下半月 8 条）
- **横向对比页** `compare.html`：8 张对比表（语言 / 图像 / 视频 / 代码 / Agent / 辅助工具）

### 阶段 3 — 搜索与交互升级
- **搜索栏重设计**：图标 + 清除按钮 + 键盘快捷键；CSS 改用 **class 选择器**统一多页样式
- `picker.html` 模型数改为**动态读取 `models.json`**（35 → 44，不再硬编码）
- 首页场景选择卡片垂直布局等体验优化

### 阶段 4 — 技能包模块（核心增长模块）
- 技能包三次扩充：**187 → 271 → 296**
- **271 个技能详情页生成**：卡片点击 → 站内详情页（含功能介绍 / 使用方式 / 官方来源链接）
- **新增 25 个社区精选技能**（来源标签独立于 VoltAgent / anbeime）
- 清单文档 `skills-catalog.md` 同步至 296 个

### 阶段 5 — 数据保鲜与维护
- **`compare.html` 数据刷新至 2026 年 7 月**：
  - 替换停服的 Sora → 海螺 AI（MiniMax）
  - 替换退役的 DALL·E → GPT Image（OpenAI）
  - 上下文窗口更新（ChatGPT / Claude / DeepSeek → 1M，Gemini → 2M）
  - 价格 / 版本同步（Gemini AI Pro $19.99、GPT-5.5、Sonnet 5、GLM-5、Midjourney v8.1、Runway Gen-4.5 等）
- **全站"内容更新日期"统一为当天**（一键脚本）

### 阶段 6 — 商业化与合规
- 集成 **Google AdSense**（全 15 页 + `ads.txt`）
- 隐私政策页 + cookie consent banner（合规前置）
- 集成**阿里云百炼平台联盟链接**（替换通义旧链接）
- CI：每周技能更新检查 workflow

---

## 三、工程化脚本（可复用）

| 脚本 | 用途 |
|---|---|
| `gen_skill_pages.js` | 从 `skills-data.js` 生成 296 个技能详情页 + `js/skill-pages.js` |
| `gen_catalog.js` | 从数据源重产 `skills-catalog.md` 清单 |
| `update_dates.js` | 全站"更新日期"戳统一为当天 |
| `scripts/generate_model_pages.py` | 模型详情页自动生成（44 页） |

---

## 四、关键决策与约定

1. **"更新日期" = 网站内容维护戳**（站点级），用于体现网站持续维护；产品自身发布 / 评测日期（如 ChatGPT 2022 年 11 月首发）作为事实数据**不动**。
2. **来源标签三体系**：VoltAgent（官方 / 193）、anbeime（网友推荐 / 78）、社区精选（GitHub 社区 / 25）。
3. **技能去重规则**：新增前先在 `skills-data.js` 检索 owner/repo 标识，已收录则跳过；第三方"榜单页"（非具体仓库）不入。
4. **多页共用组件一律用 class 选择器**（搜索栏踩坑后确立，避免 ID 选择器只匹配单页）。
5. **所有页面改动遵循"本地改 → 提交 push → Cloudflare 自动部署"流程**。

---

## 五、当前部署状态（2026-07-13）

- Cloudflare Pages 自动部署，域名 myaishome.com 可访问
- SEO 三件套：robots.txt + sitemap.xml + 404.html + 全站 JSON-LD + GA
- 搜索引擎：Google Search Console + Bing Webmaster 已配置
- 旧 GitHub Pages（gyuanhao.github.io/ai-home）待评估关闭（2-4 周后）

---

## 六、待办与下一步方向

- **流量达标**后申请 AdSense 审核（目标日访客 1000+）
- **内容持续保鲜**：模型价格 / 版本随官方发布滚动更新
- **技能包扩展**：可考虑将"合集类"技能（如 slavingia/skills、awesome-design-md）拆细录入；第三方榜单页改为资源导航而非单个技能
- **变现路径**：阶段一零变现专心 SEO → 阶段二 AdSense + 国内广告联盟 → 阶段三联盟返佣 + 赞助标识

---

## 附：核心文件索引

| 文件 / 目录 | 作用 |
|---|---|
| `index.html` | 首页（6 品类卡片 + JSON-LD + GA） |
| `models.html` | 模型库（筛选 + 搜索） |
| `models/` | 44 个模型详情页 |
| `compare.html` | 横向对比页（8 表） |
| `compare-custom.html` | 自定义对比 |
| `skills.html` | 技能包列表 |
| `skills/` | 296 个技能详情页 |
| `js/skills-data.js` | 技能包数据源（296 条） |
| `js/skill-pages.js` | 技能卡片渲染数据 |
| `js/main.js` | 模型库浏览器端渲染 |
| `scripts/models.json` | 模型详情页生成源 |
| `news.html` | 新闻聚合页 |
| `about.html` / `picker.html` | 功能页 |
| `docs/dev-report.md` | 本报告 |
