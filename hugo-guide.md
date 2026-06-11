# Hugo 静态站搭建指南（从零到上线）

> 这是"方案B"的学习文档。当前 MVP 用的是纯 HTML（方案A），等你熟悉了这套流程，可以随时迁移到 Hugo。

---

## Hugo 是什么？

Hugo 是一个**静态网站生成器**。你把 Markdown 文件放进去，它帮你生成完整的 HTML 网站。

跟你现在的纯 HTML 方案的区别：

| | 纯 HTML（当前） | Hugo（以后） |
|---|---|---|
| 新增模型 | 复制卡片 HTML → 改内容 | 新建一个 .md 文件 → 填表 |
| 页面结构 | 手动维护 | 模板自动套用 |
| 学习成本 | 低 | 中（需要学一点命令行和模板） |
| 灵活性 | 中 | 高 |

---

## 安装 Hugo（Windows）

```bash
# 1. 用 winget 安装（推荐）
winget install Hugo.Hugo.Extended

# 2. 验证安装
hugo version
# 输出类似: hugo v0.145.0+extended windows/amd64
```

---

## 创建第一个 Hugo 站点

```bash
# 1. 新建站点
hugo new site ai-home-hugo
cd ai-home-hugo

# 2. 添加主题（选一个简洁的）
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod

# 3. 配置主题
echo "theme = 'PaperMod'" >> hugo.toml
```

---

## 添加模型内容

Hugo 的内容文件放在 `content/` 目录下，用 Markdown 写：

```bash
# 新建一个模型页面
hugo new models/chatgpt.md
```

然后在 `content/models/chatgpt.md` 里写：

```markdown
---
title: "ChatGPT"
company: "OpenAI"
pricing: "freemium"
price: "免费 / Plus $20/月"
tags: ["写作", "编程", "图像生成"]
---

## 简介

ChatGPT 是 OpenAI 推出的对话式 AI 助手...

## 价格

- 免费版：GPT-5.4 mini（有限配额）
- Plus：$20/月（GPT-5.5）
- Pro：$200/月（GPT-5.5 Pro）

## 适合做什么

日常写作、创意脑暴、通用问答、图像生成
```

---

## 预览和部署

```bash
# 本地预览（自动刷新）
hugo server -D

# 生成最终网站（在 public/ 目录）
hugo

# 部署到 GitHub Pages（免费）
# 把 public/ 目录推到 gh-pages 分支即可
```

---

## 跟你现在的纯 HTML 方案怎么对接？

你现在 `main.js` 里的模型数据可以用 Hugo 的**数据文件**管理：

```
data/
  models.json   ← 你现在的 models 数组搬到这里
```

然后 Hugo 模板自动循环渲染卡片，新增模型只需要在 JSON 里加一条。

---

## 建议路径

1. **先用手工 HTML 跑通 MVP**（正在进行中）
2. 等模型数量到 20+ 个，手工维护开始累的时候
3. 花一个周末装 Hugo、把内容迁移过去
4. 部署到 GitHub Pages（同样是零成本）

---

> 不急，没必要现在学。先把 MVP 跑起来，看到有人用、有人搜进来，再考虑工具升级。
