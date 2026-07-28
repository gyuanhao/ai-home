/* 迁移自 ai-home/js/skills-data.js（xianxia/scripts/convert_skills.js 生成）。
   只留中文字段；slug=原站英文name，detailUrl 自动匹配 skills/<slug>.html 是否存在。
   原站更新技能后重跑即同步，请勿手改本文件。 */
window.AIHome = window.AIHome || {};

AIHome.SKILLS = [
  {
    "name": "Word文档处理",
    "team": "Anthropic",
    "cat": "文档处理",
    "desc": "创建、编辑和分析 Word 文档",
    "url": "https://github.com/anthropics/skills/tree/main/skills/docx",
    "slug": "docx",
    "detailUrl": "../skills/docx.html"
  },
  {
    "name": "文档协作",
    "team": "Anthropic",
    "cat": "文档处理",
    "desc": "协作文档编辑与合著",
    "url": "https://github.com/anthropics/skills/tree/main/skills/doc-coauthoring",
    "slug": "doc-coauthoring",
    "detailUrl": "../skills/doc-coauthoring.html"
  },
  {
    "name": "PPT处理",
    "team": "Anthropic",
    "cat": "文档处理",
    "desc": "创建、编辑和分析 PPT 演示文稿",
    "url": "https://github.com/anthropics/skills/tree/main/skills/pptx",
    "slug": "pptx",
    "detailUrl": "../skills/pptx.html"
  },
  {
    "name": "Excel处理",
    "team": "Anthropic",
    "cat": "文档处理",
    "desc": "创建、编辑和分析 Excel 表格",
    "url": "https://github.com/anthropics/skills/tree/main/skills/xlsx",
    "slug": "xlsx",
    "detailUrl": "../skills/xlsx.html"
  },
  {
    "name": "PDF处理",
    "team": "Anthropic",
    "cat": "文档处理",
    "desc": "提取文本、创建PDF、处理表单",
    "url": "https://github.com/anthropics/skills/tree/main/skills/pdf",
    "slug": "pdf",
    "detailUrl": "../skills/pdf.html"
  },
  {
    "name": "算法艺术",
    "team": "Anthropic",
    "cat": "创意设计",
    "desc": "使用 p5.js 创建带种子的生成艺术",
    "url": "https://github.com/anthropics/skills/tree/main/skills/algorithmic-art",
    "slug": "algorithmic-art",
    "detailUrl": "../skills/algorithmic-art.html"
  },
  {
    "name": "画布设计",
    "team": "Anthropic",
    "cat": "创意设计",
    "desc": "设计 PNG 和 PDF 格式的视觉艺术",
    "url": "https://github.com/anthropics/skills/tree/main/skills/canvas-design",
    "slug": "canvas-design",
    "detailUrl": "../skills/canvas-design.html"
  },
  {
    "name": "前端设计",
    "team": "Anthropic",
    "cat": "前端开发",
    "desc": "前端设计和 UI/UX 开发工具",
    "url": "https://github.com/anthropics/skills/tree/main/skills/frontend-design",
    "slug": "frontend-design",
    "detailUrl": "../skills/frontend-design.html"
  },
  {
    "name": "Slack GIF",
    "team": "Anthropic",
    "cat": "创意设计",
    "desc": "创建适配 Slack 尺寸的动画 GIF",
    "url": "https://github.com/anthropics/skills/tree/main/skills/slack-gif-creator",
    "slug": "slack-gif-creator",
    "detailUrl": "../skills/slack-gif-creator.html"
  },
  {
    "name": "主题工厂",
    "team": "Anthropic",
    "cat": "前端开发",
    "desc": "为制品应用专业主题或生成自定义主题",
    "url": "https://github.com/anthropics/skills/tree/main/skills/theme-factory",
    "slug": "theme-factory",
    "detailUrl": "../skills/theme-factory.html"
  },
  {
    "name": "Web组件构建",
    "team": "Anthropic",
    "cat": "前端开发",
    "desc": "用 React 和 Tailwind 构建复杂的 claude.ai HTML 制品",
    "url": "https://github.com/anthropics/skills/tree/main/skills/web-artifacts-builder",
    "slug": "web-artifacts-builder",
    "detailUrl": "../skills/web-artifacts-builder.html"
  },
  {
    "name": "MCP构建器",
    "team": "Anthropic",
    "cat": "开发工具",
    "desc": "创建 MCP 服务器以集成外部 API 和服务",
    "url": "https://github.com/anthropics/skills/tree/main/skills/mcp-builder",
    "slug": "mcp-builder",
    "detailUrl": "../skills/mcp-builder.html"
  },
  {
    "name": "Web测试",
    "team": "Anthropic",
    "cat": "测试",
    "desc": "使用 Playwright 测试本地 Web 应用",
    "url": "https://github.com/anthropics/skills/tree/main/skills/webapp-testing",
    "slug": "webapp-testing",
    "detailUrl": "../skills/webapp-testing.html"
  },
  {
    "name": "品牌规范",
    "team": "Anthropic",
    "cat": "创意设计",
    "desc": "将 Anthropic 品牌配色和排版应用到制品",
    "url": "https://github.com/anthropics/skills/tree/main/skills/brand-guidelines",
    "slug": "brand-guidelines",
    "detailUrl": "../skills/brand-guidelines.html"
  },
  {
    "name": "内部通讯",
    "team": "Anthropic",
    "cat": "内容创作",
    "desc": "撰写状态报告、通讯和常见问题",
    "url": "https://github.com/anthropics/skills/tree/main/skills/internal-comms",
    "slug": "internal-comms",
    "detailUrl": "../skills/internal-comms.html"
  },
  {
    "name": "技能创建器",
    "team": "Anthropic",
    "cat": "开发工具",
    "desc": "创建扩展 Claude 能力的技能指南",
    "url": "https://github.com/anthropics/skills/tree/main/skills/skill-creator",
    "slug": "skill-creator",
    "detailUrl": "../skills/skill-creator.html"
  },
  {
    "name": "模板",
    "team": "Anthropic",
    "cat": "开发工具",
    "desc": "创建新技能的基础模板",
    "url": "https://github.com/anthropics/skills/tree/main/skills/template",
    "slug": "template",
    "detailUrl": "../skills/template.html"
  },
  {
    "name": "Codex CLI",
    "team": "OpenAI",
    "cat": "开发工具",
    "desc": "OpenAI 的编程代理 CLI，支持多模型",
    "url": "https://github.com/openai/codex",
    "slug": "codex-cli",
    "detailUrl": "../skills/codex-cli.html"
  },
  {
    "name": "OpenAI文档",
    "team": "OpenAI",
    "cat": "AI/ML",
    "desc": "从 OpenAI 开发者文档提供权威指导",
    "url": "https://github.com/openai/skills",
    "slug": "openai-docs",
    "detailUrl": "../skills/openai-docs.html"
  },
  {
    "name": "图像生成",
    "team": "OpenAI",
    "cat": "图像",
    "desc": "使用 OpenAI 图像 API 生成和编辑图像",
    "url": "https://github.com/openai/skills",
    "slug": "imagegen",
    "detailUrl": "../skills/imagegen.html"
  },
  {
    "name": "Sora视频",
    "team": "OpenAI",
    "cat": "视频",
    "desc": "通过 OpenAI Sora API 生成、混剪和管理短视频",
    "url": "https://github.com/openai/skills",
    "slug": "sora",
    "detailUrl": "../skills/sora.html"
  },
  {
    "name": "语音合成",
    "team": "OpenAI",
    "cat": "语音",
    "desc": "使用 OpenAI API 从文本生成语音",
    "url": "https://github.com/openai/skills",
    "slug": "speech",
    "detailUrl": "../skills/speech.html"
  },
  {
    "name": "语音转文字",
    "team": "OpenAI",
    "cat": "语音",
    "desc": "将音频文件转录为文字，支持说话人分离",
    "url": "https://github.com/openai/skills",
    "slug": "transcribe",
    "detailUrl": "../skills/transcribe.html"
  },
  {
    "name": "浏览器自动化",
    "team": "OpenAI",
    "cat": "测试",
    "desc": "自动化真实浏览器交互：导航、填表、抓取",
    "url": "https://github.com/openai/skills",
    "slug": "playwright",
    "detailUrl": "../skills/playwright.html"
  },
  {
    "name": "Cloudflare部署",
    "team": "OpenAI",
    "cat": "部署",
    "desc": "使用 Workers、Pages 和平台服务部署应用到 Cloudflare",
    "url": "https://github.com/openai/skills",
    "slug": "cloudflare-deploy",
    "detailUrl": "../skills/cloudflare-deploy.html"
  },
  {
    "name": "Vercel部署",
    "team": "OpenAI",
    "cat": "部署",
    "desc": "部署应用和网站到 Vercel",
    "url": "https://github.com/openai/skills",
    "slug": "vercel-deploy",
    "detailUrl": "../skills/vercel-deploy.html"
  },
  {
    "name": "Netlify部署",
    "team": "OpenAI",
    "cat": "部署",
    "desc": "通过 CLI 认证和链接自动化 Netlify 部署",
    "url": "https://github.com/openai/skills",
    "slug": "netlify-deploy",
    "detailUrl": "../skills/netlify-deploy.html"
  },
  {
    "name": "ChatGPT应用",
    "team": "OpenAI",
    "cat": "开发工具",
    "desc": "用 MCP 服务器和 Widget UI 构建 ChatGPT Apps SDK 应用",
    "url": "https://github.com/openai/skills",
    "slug": "chatgpt-apps",
    "detailUrl": "../skills/chatgpt-apps.html"
  },
  {
    "name": "Figma转代码",
    "team": "OpenAI",
    "cat": "前端开发",
    "desc": "将 Figma 设计转化为生产就绪代码",
    "url": "https://github.com/openai/skills",
    "slug": "figma-implement-design",
    "detailUrl": "../skills/figma-implement-design.html"
  },
  {
    "name": "Next.js最佳实践",
    "team": "Vercel",
    "cat": "前端开发",
    "desc": "Next.js 最佳实践和推荐模式",
    "url": "https://github.com/vercel-labs/skills",
    "slug": "next-best-practices",
    "detailUrl": "../skills/next-best-practices.html"
  },
  {
    "name": "Next.js缓存",
    "team": "Vercel",
    "cat": "前端开发",
    "desc": "Next.js 的缓存策略和缓存感知组件",
    "url": "https://github.com/vercel-labs/skills",
    "slug": "next-cache-components",
    "detailUrl": "../skills/next-cache-components.html"
  },
  {
    "name": "Next.js升级",
    "team": "Vercel",
    "cat": "前端开发",
    "desc": "将 Next.js 项目升级到新版本",
    "url": "https://github.com/vercel-labs/skills",
    "slug": "next-upgrade",
    "detailUrl": "../skills/next-upgrade.html"
  },
  {
    "name": "Agents SDK",
    "team": "Cloudflare",
    "cat": "AI/ML",
    "desc": "在 Cloudflare 上构建带调度、RPC 和 MCP 的有状态 AI 代理",
    "url": "https://github.com/cloudflare/skills",
    "slug": "agents-sdk",
    "detailUrl": "../skills/agents-sdk.html"
  },
  {
    "name": "Workers最佳实践",
    "team": "Cloudflare",
    "cat": "后端开发",
    "desc": "按生产最佳实践审查和编写 Workers 代码",
    "url": "https://github.com/cloudflare/skills",
    "slug": "workers-best-practices",
    "detailUrl": "../skills/workers-best-practices.html"
  },
  {
    "name": "Wrangler部署",
    "team": "Cloudflare",
    "cat": "部署",
    "desc": "部署和管理 Workers、KV、R2、D1、Vectorize、Queues",
    "url": "https://github.com/cloudflare/skills",
    "slug": "wrangler",
    "detailUrl": "../skills/wrangler.html"
  },
  {
    "name": "Durable Objects",
    "team": "Cloudflare",
    "cat": "后端开发",
    "desc": "通过 RPC、SQLite 和 WebSocket 实现有状态协调",
    "url": "https://github.com/cloudflare/skills",
    "slug": "durable-objects",
    "detailUrl": "../skills/durable-objects.html"
  },
  {
    "name": "Web性能审计",
    "team": "Cloudflare",
    "cat": "前端开发",
    "desc": "审计 Core Web Vitals 和渲染阻塞资源",
    "url": "https://github.com/cloudflare/skills",
    "slug": "web-perf",
    "detailUrl": "../skills/web-perf.html"
  },
  {
    "name": "沙箱SDK",
    "team": "Cloudflare",
    "cat": "安全",
    "desc": "构建沙箱化应用以实现安全隔离的代码执行",
    "url": "https://github.com/cloudflare/skills",
    "slug": "sandbox-sdk",
    "detailUrl": "../skills/sandbox-sdk.html"
  },
  {
    "name": "Gemini API开发",
    "team": "Google Gemini",
    "cat": "AI/ML",
    "desc": "开发 Gemini 驱动应用的最佳实践",
    "url": "https://github.com/google-gemini/skills",
    "slug": "gemini-api-dev",
    "detailUrl": "../skills/gemini-api-dev.html"
  },
  {
    "name": "Gemini实时API",
    "team": "Google Gemini",
    "cat": "AI/ML",
    "desc": "用 Gemini Live API 构建实时双向流应用",
    "url": "https://github.com/google-gemini/skills",
    "slug": "gemini-live-api-dev",
    "detailUrl": "../skills/gemini-live-api-dev.html"
  },
  {
    "name": "设计文档",
    "team": "Google Labs",
    "cat": "开发工具",
    "desc": "用 Google Stitch 创建和管理 DESIGN.md 文件",
    "url": "https://github.com/google-labs-code/skills",
    "slug": "design-md",
    "detailUrl": "../skills/design-md.html"
  },
  {
    "name": "shadcn/ui组件",
    "team": "Google Labs",
    "cat": "前端开发",
    "desc": "用 shadcn/ui 构建 UI 组件",
    "url": "https://github.com/google-labs-code/skills",
    "slug": "shadcn-ui",
    "detailUrl": "../skills/shadcn-ui.html"
  },
  {
    "name": "Stripe最佳实践",
    "team": "Stripe",
    "cat": "后端开发",
    "desc": "构建 Stripe 集成的最佳实践",
    "url": "https://github.com/stripe/skills",
    "slug": "stripe-best-practices",
    "detailUrl": "../skills/stripe-best-practices.html"
  },
  {
    "name": "Stripe升级",
    "team": "Stripe",
    "cat": "后端开发",
    "desc": "升级 Stripe SDK 和 API 版本",
    "url": "https://github.com/stripe/skills",
    "slug": "upgrade-stripe",
    "detailUrl": "../skills/upgrade-stripe.html"
  },
  {
    "name": "模型训练",
    "team": "Hugging Face",
    "cat": "AI/ML",
    "desc": "使用 TRL 训练模型：SFT、DPO、GRPO、GGUF 转换",
    "url": "https://github.com/huggingface/skills",
    "slug": "hugging-face-model-trainer",
    "detailUrl": "../skills/hugging-face-model-trainer.html"
  },
  {
    "name": "浏览器ML",
    "team": "Hugging Face",
    "cat": "AI/ML",
    "desc": "用 Transformers.js 在浏览器中运行 ML 模型",
    "url": "https://github.com/huggingface/skills",
    "slug": "transformers.js",
    "detailUrl": "../skills/transformers.js.html"
  },
  {
    "name": "Gradio应用",
    "team": "Hugging Face",
    "cat": "AI/ML",
    "desc": "构建 Gradio 应用并部署到 HF Spaces",
    "url": "https://github.com/huggingface/skills",
    "slug": "huggingface-gradio",
    "detailUrl": "../skills/huggingface-gradio.html"
  },
  {
    "name": "数据集管理",
    "team": "Hugging Face",
    "cat": "AI/ML",
    "desc": "通过配置和 SQL 查询创建并管理数据集",
    "url": "https://github.com/huggingface/skills",
    "slug": "hugging-face-datasets",
    "detailUrl": "../skills/hugging-face-datasets.html"
  },
  {
    "name": "模型评估",
    "team": "Hugging Face",
    "cat": "AI/ML",
    "desc": "使用 vLLM/lighteval 和评估表进行模型评估",
    "url": "https://github.com/huggingface/skills",
    "slug": "hugging-face-evaluation",
    "detailUrl": "../skills/hugging-face-evaluation.html"
  },
  {
    "name": "视觉模型训练",
    "team": "Hugging Face",
    "cat": "AI/ML",
    "desc": "在 HF 基础设施上训练视觉模型",
    "url": "https://github.com/huggingface/skills",
    "slug": "hugging-face-vision-trainer",
    "detailUrl": "../skills/hugging-face-vision-trainer.html"
  },
  {
    "name": "Sentry SDK安装",
    "team": "Sentry",
    "cat": "监控",
    "desc": "在任何语言或框架中设置 Sentry",
    "url": "https://github.com/getsentry/skills",
    "slug": "sentry-sdk-setup",
    "detailUrl": "../skills/sentry-sdk-setup.html"
  },
  {
    "name": "Sentry问题修复",
    "team": "Sentry",
    "cat": "监控",
    "desc": "通过堆栈追踪和跟踪上下文查找并修复 Sentry 问题",
    "url": "https://github.com/getsentry/skills",
    "slug": "sentry-fix-issues",
    "detailUrl": "../skills/sentry-fix-issues.html"
  },
  {
    "name": "Sentry代码审查",
    "team": "Sentry",
    "cat": "监控",
    "desc": "使用 Sentry 问题和跟踪上下文审查代码变更",
    "url": "https://github.com/getsentry/skills",
    "slug": "sentry-code-review",
    "detailUrl": "../skills/sentry-code-review.html"
  },
  {
    "name": "AI监控",
    "team": "Sentry",
    "cat": "AI/ML",
    "desc": "为 OpenAI、Anthropic、Vercel AI、LangChain 添加监控",
    "url": "https://github.com/getsentry/skills",
    "slug": "sentry-setup-ai-monitoring",
    "detailUrl": "../skills/sentry-setup-ai-monitoring.html"
  },
  {
    "name": "原生UI构建",
    "team": "Expo",
    "cat": "移动开发",
    "desc": "用 Expo Router 构建应用：样式、组件、导航、动画",
    "url": "https://github.com/expo/skills",
    "slug": "building-native-ui",
    "detailUrl": "../skills/building-native-ui.html"
  },
  {
    "name": "Expo部署",
    "team": "Expo",
    "cat": "移动开发",
    "desc": "将 Expo 应用部署到生产环境",
    "url": "https://github.com/expo/skills",
    "slug": "expo-deployment",
    "detailUrl": "../skills/expo-deployment.html"
  },
  {
    "name": "Expo+Tailwind",
    "team": "Expo",
    "cat": "移动开发",
    "desc": "用 NativeWind v5 在 Expo 中配置 Tailwind CSS v4",
    "url": "https://github.com/expo/skills",
    "slug": "expo-tailwind-setup",
    "detailUrl": "../skills/expo-tailwind-setup.html"
  },
  {
    "name": "Netlify函数",
    "team": "Netlify",
    "cat": "后端开发",
    "desc": "构建无服务器 API 端点和后台任务",
    "url": "https://github.com/netlify/skills",
    "slug": "netlify-functions",
    "detailUrl": "../skills/netlify-functions.html"
  },
  {
    "name": "边缘函数",
    "team": "Netlify",
    "cat": "后端开发",
    "desc": "低延迟边缘中间件和地理定位逻辑",
    "url": "https://github.com/netlify/skills",
    "slug": "netlify-edge-functions",
    "detailUrl": "../skills/netlify-edge-functions.html"
  },
  {
    "name": "AI网关",
    "team": "Netlify",
    "cat": "AI/ML",
    "desc": "通过统一网关端点访问 AI 模型",
    "url": "https://github.com/netlify/skills",
    "slug": "netlify-ai-gateway",
    "detailUrl": "../skills/netlify-ai-gateway.html"
  },
  {
    "name": "PostgreSQL最佳实践",
    "team": "Supabase",
    "cat": "数据库",
    "desc": "Supabase 的 PostgreSQL 最佳实践",
    "url": "https://github.com/supabase/skills",
    "slug": "postgres-best-practices",
    "detailUrl": "../skills/postgres-best-practices.html"
  },
  {
    "name": "Figma代码连接",
    "team": "Figma",
    "cat": "设计",
    "desc": "将 Figma 设计组件连接到代码组件",
    "url": "https://github.com/figma/skills",
    "slug": "figma-code-connect",
    "detailUrl": "../skills/figma-code-connect.html"
  },
  {
    "name": "Figma生成设计",
    "team": "Figma",
    "cat": "设计",
    "desc": "从代码或描述在 Figma 中构建或更新界面",
    "url": "https://github.com/figma/skills",
    "slug": "figma-generate-design",
    "detailUrl": "../skills/figma-generate-design.html"
  },
  {
    "name": "Figma实现设计",
    "team": "Figma",
    "cat": "前端开发",
    "desc": "【Figma实现设计】Translate Figma designs into production-",
    "url": "https://github.com/figma/skills",
    "slug": "figma-implement-design",
    "detailUrl": "../skills/figma-implement-design.html"
  },
  {
    "name": "安全合约构建",
    "team": "Trail of Bits",
    "cat": "安全",
    "desc": "智能合约安全工具包，支持 6 条链的漏洞扫描",
    "url": "https://github.com/trailofbits/skills",
    "slug": "building-secure-contracts",
    "detailUrl": "../skills/building-secure-contracts.html"
  },
  {
    "name": "Semgrep规则",
    "team": "Trail of Bits",
    "cat": "安全",
    "desc": "创建和优化 Semgrep 规则用于漏洞检测",
    "url": "https://github.com/trailofbits/skills",
    "slug": "semgrep-rule-creator",
    "detailUrl": "../skills/semgrep-rule-creator.html"
  },
  {
    "name": "静态分析",
    "team": "Trail of Bits",
    "cat": "安全",
    "desc": "静态分析工具包：CodeQL、Semgrep、SARIF",
    "url": "https://github.com/trailofbits/skills",
    "slug": "static-analysis",
    "detailUrl": "../skills/static-analysis.html"
  },
  {
    "name": "变体分析",
    "team": "Trail of Bits",
    "cat": "安全",
    "desc": "通过基于模式的分析查找相似漏洞",
    "url": "https://github.com/trailofbits/skills",
    "slug": "variant-analysis",
    "detailUrl": "../skills/variant-analysis.html"
  },
  {
    "name": "属性测试",
    "team": "Trail of Bits",
    "cat": "测试",
    "desc": "多语言和智能合约的属性测试",
    "url": "https://github.com/trailofbits/skills",
    "slug": "property-based-testing",
    "detailUrl": "../skills/property-based-testing.html"
  },
  {
    "name": "Firebase认证",
    "team": "Firebase",
    "cat": "后端开发",
    "desc": "配置 Firebase 认证和登录提供商",
    "url": "https://github.com/firebase/skills",
    "slug": "firebase-auth-basics",
    "detailUrl": "../skills/firebase-auth-basics.html"
  },
  {
    "name": "Firestore指南",
    "team": "Firebase",
    "cat": "数据库",
    "desc": "Cloud Firestore 标准版完整指南",
    "url": "https://github.com/firebase/skills",
    "slug": "firebase-firestore-standard",
    "detailUrl": "../skills/firebase-firestore-standard.html"
  },
  {
    "name": "Genkit JS",
    "team": "Firebase",
    "cat": "AI/ML",
    "desc": "用 Firebase Genkit 在 Node.js 中构建 AI 驱动应用",
    "url": "https://github.com/firebase/skills",
    "slug": "developing-genkit-js",
    "detailUrl": "../skills/developing-genkit-js.html"
  },
  {
    "name": "安全规则审计",
    "team": "Firebase",
    "cat": "安全",
    "desc": "审计 Firestore 安全规则并标记风险模式",
    "url": "https://github.com/firebase/skills",
    "slug": "firebase-security-rules-auditor",
    "detailUrl": "../skills/firebase-security-rules-auditor.html"
  },
  {
    "name": "云架构设计",
    "team": "Microsoft",
    "cat": "云服务",
    "desc": "设计架构良好的 Azure 云系统",
    "url": "https://github.com/microsoft/skills",
    "slug": "cloud-solution-architect",
    "detailUrl": "../skills/cloud-solution-architect.html"
  },
  {
    "name": "Copilot SDK",
    "team": "Microsoft",
    "cat": "开发工具",
    "desc": "用 GitHub Copilot SDK 构建应用",
    "url": "https://github.com/microsoft/skills",
    "slug": "copilot-sdk",
    "detailUrl": "../skills/copilot-sdk.html"
  },
  {
    "name": "Entra身份认证",
    "team": "Microsoft",
    "cat": "安全",
    "desc": "通过 Graph API 实现 Microsoft Entra Agent ID OAuth2 身份认证",
    "url": "https://github.com/microsoft/skills",
    "slug": "entra-agent-id",
    "detailUrl": "../skills/entra-agent-id.html"
  },
  {
    "name": "Azure OpenAI .NET",
    "team": "Microsoft",
    "cat": "AI/ML",
    "desc": "适用于 .NET 的 GPT-4、嵌入、DALL-E 和 Whisper 客户端",
    "url": "https://github.com/microsoft/skills",
    "slug": "azure-ai-openai-dotnet",
    "detailUrl": "../skills/azure-ai-openai-dotnet.html"
  },
  {
    "name": "Azure AI项目",
    "team": "Microsoft",
    "cat": "AI/ML",
    "desc": "适用于 Python 的 AI Foundry 项目客户端和代理",
    "url": "https://github.com/microsoft/skills",
    "slug": "azure-ai-projects-py",
    "detailUrl": "../skills/azure-ai-projects-py.html"
  },
  {
    "name": "Agent框架",
    "team": "Microsoft",
    "cat": "AI/ML",
    "desc": "Azure AI Foundry 的代理框架",
    "url": "https://github.com/microsoft/skills",
    "slug": "agent-framework-azure-ai-py",
    "detailUrl": "../skills/agent-framework-azure-ai-py.html"
  },
  {
    "name": "Azure身份认证TS",
    "team": "Microsoft",
    "cat": "安全",
    "desc": "适用于 TypeScript 的 Microsoft Entra ID 认证",
    "url": "https://github.com/microsoft/skills",
    "slug": "azure-identity-ts",
    "detailUrl": "../skills/azure-identity-ts.html"
  },
  {
    "name": "Azure搜索",
    "team": "Microsoft",
    "cat": "AI/ML",
    "desc": "Python 全文、向量和混合搜索",
    "url": "https://github.com/microsoft/skills",
    "slug": "azure-search-documents-py",
    "detailUrl": "../skills/azure-search-documents-py.html"
  },
  {
    "name": "WP区块开发",
    "team": "WordPress",
    "cat": "前端开发",
    "desc": "Gutenberg 区块：block.json、属性、渲染、弃用管理",
    "url": "https://github.com/WordPress/skills",
    "slug": "wp-block-development",
    "detailUrl": "../skills/wp-block-development.html"
  },
  {
    "name": "WP插件开发",
    "team": "WordPress",
    "cat": "后端开发",
    "desc": "插件架构、钩子、设置 API、安全",
    "url": "https://github.com/WordPress/skills",
    "slug": "wp-plugin-development",
    "detailUrl": "../skills/wp-plugin-development.html"
  },
  {
    "name": "WP REST API",
    "team": "WordPress",
    "cat": "后端开发",
    "desc": "REST API 路由/端点、Schema、认证和响应整形",
    "url": "https://github.com/WordPress/skills",
    "slug": "wp-rest-api",
    "detailUrl": "../skills/wp-rest-api.html"
  },
  {
    "name": "Apollo客户端",
    "team": "Apollo GraphQL",
    "cat": "前端开发",
    "desc": "用 Apollo Client 4 构建 React 应用",
    "url": "https://github.com/apollographql/skills",
    "slug": "apollo-client",
    "detailUrl": "../skills/apollo-client.html"
  },
  {
    "name": "Apollo联邦",
    "team": "Apollo GraphQL",
    "cat": "后端开发",
    "desc": "编写 Apollo Federation 2 子图 Schema 并组合超级图",
    "url": "https://github.com/apollographql/skills",
    "slug": "apollo-federation",
    "detailUrl": "../skills/apollo-federation.html"
  },
  {
    "name": "GraphQL MCP",
    "team": "Apollo GraphQL",
    "cat": "AI/ML",
    "desc": "通过 MCP 连接 AI 代理到 GraphQL API",
    "url": "https://github.com/apollographql/skills",
    "slug": "apollo-mcp-server",
    "detailUrl": "../skills/apollo-mcp-server.html"
  },
  {
    "name": "链上数据查询",
    "team": "Coinbase",
    "cat": "Web3",
    "desc": "在 Base 链上查询解码后的链上数据（事件、交易、区块）",
    "url": "https://github.com/coinbase/skills",
    "slug": "query-onchain-data",
    "detailUrl": "../skills/query-onchain-data.html"
  },
  {
    "name": "USDC转账",
    "team": "Coinbase",
    "cat": "Web3",
    "desc": "在 Base 链上将 USDC 发送到任意以太坊地址或 ENS 名称",
    "url": "https://github.com/coinbase/skills",
    "slug": "send-usdc",
    "detailUrl": "../skills/send-usdc.html"
  },
  {
    "name": "代币交易",
    "team": "Coinbase",
    "cat": "Web3",
    "desc": "使用 CDP Swap API 在 Base 链上交换和交易代币",
    "url": "https://github.com/coinbase/skills",
    "slug": "trade",
    "detailUrl": "../skills/trade.html"
  },
  {
    "name": "API变现",
    "team": "Coinbase",
    "cat": "Web3",
    "desc": "搭建按请求收取 USDC 的 Express 服务器（x402协议）",
    "url": "https://github.com/coinbase/skills",
    "slug": "monetize-service",
    "detailUrl": "../skills/monetize-service.html"
  },
  {
    "name": "加密市场排行",
    "team": "Binance",
    "cat": "Web3",
    "desc": "查询加密市场排行：热门代币和聪明钱",
    "url": "https://github.com/binance/skills",
    "slug": "crypto-market-rank",
    "detailUrl": "../skills/crypto-market-rank.html"
  },
  {
    "name": "代币安全审计",
    "team": "Binance",
    "cat": "安全",
    "desc": "审计代币安全以检测骗局、蜜罐和恶意合约",
    "url": "https://github.com/binance/skills",
    "slug": "query-token-audit",
    "detailUrl": "../skills/query-token-audit.html"
  },
  {
    "name": "现货交易",
    "team": "Binance",
    "cat": "Web3",
    "desc": "通过 API 在 Binance 上管理现货交易订单",
    "url": "https://github.com/binance/skills",
    "slug": "spot",
    "detailUrl": "../skills/spot.html"
  },
  {
    "name": "交易信号",
    "team": "Binance",
    "cat": "Web3",
    "desc": "监控链上聪明钱买入/卖出信号",
    "url": "https://github.com/binance/skills",
    "slug": "trading-signal",
    "detailUrl": "../skills/trading-signal.html"
  },
  {
    "name": "Auth0 React",
    "team": "Auth0",
    "cat": "安全",
    "desc": "使用 @auth0/auth0-react 为 React SPA 添加认证",
    "url": "https://github.com/auth0/skills",
    "slug": "auth0-react",
    "detailUrl": "../skills/auth0-react.html"
  },
  {
    "name": "Auth0 Next.js",
    "team": "Auth0",
    "cat": "安全",
    "desc": "为 Next.js 应用添加认证",
    "url": "https://github.com/auth0/skills",
    "slug": "auth0-nextjs",
    "detailUrl": "../skills/auth0-nextjs.html"
  },
  {
    "name": "多因素认证",
    "team": "Auth0",
    "cat": "安全",
    "desc": "为 Auth0 驱动的应用添加多因素认证",
    "url": "https://github.com/auth0/skills",
    "slug": "auth0-mfa",
    "detailUrl": "../skills/auth0-mfa.html"
  },
  {
    "name": "Brave网页搜索",
    "team": "Brave",
    "cat": "搜索",
    "desc": "通过 Brave Search API 搜索网页并返回排序结果",
    "url": "https://github.com/brave/skills",
    "slug": "web-search",
    "detailUrl": "../skills/web-search.html"
  },
  {
    "name": "LLM上下文",
    "team": "Brave",
    "cat": "AI/ML",
    "desc": "返回预提取的网页内容供 LLM 使用",
    "url": "https://github.com/brave/skills",
    "slug": "llm-context",
    "detailUrl": "../skills/llm-context.html"
  },
  {
    "name": "fal图像视频",
    "team": "fal.ai",
    "cat": "图像",
    "desc": "使用 fal.ai AI 模型生成图像和视频",
    "url": "https://github.com/fal-ai-community/skills",
    "slug": "fal-generate",
    "detailUrl": "../skills/fal-generate.html"
  },
  {
    "name": "fal 3D模型",
    "team": "fal.ai",
    "cat": "3D",
    "desc": "从文本或图像生成 3D 模型",
    "url": "https://github.com/fal-ai-community/skills",
    "slug": "fal-3d",
    "detailUrl": "../skills/fal-3d.html"
  },
  {
    "name": "fal模型训练",
    "team": "fal.ai",
    "cat": "AI/ML",
    "desc": "在 fal.ai 上训练定制 AI 模型（LoRA）实现个性化生成",
    "url": "https://github.com/fal-ai-community/skills",
    "slug": "fal-train",
    "detailUrl": "../skills/fal-train.html"
  },
  {
    "name": "ClickHouse最佳实践",
    "team": "ClickHouse",
    "cat": "数据库",
    "desc": "ClickHouse 使用最佳实践",
    "url": "https://github.com/clickhouse/skills",
    "slug": "clickhouse-best-practices",
    "detailUrl": "../skills/clickhouse-best-practices.html"
  },
  {
    "name": "chDB数据存储",
    "team": "ClickHouse",
    "cat": "数据库",
    "desc": "借助 ClickHouse 性能的 pandas 替代方案",
    "url": "https://github.com/clickhouse/skills",
    "slug": "chdb-datastore",
    "detailUrl": "../skills/chdb-datastore.html"
  },
  {
    "name": "AI SEO优化",
    "team": "Corey Haines",
    "cat": "营销",
    "desc": "优化内容以出现在 AI 生成答案和 LLM 搜索结果中",
    "url": "https://github.com/coreyhaines31/marketingskills",
    "slug": "ai-seo",
    "detailUrl": "../skills/ai-seo.html"
  },
  {
    "name": "营销文案",
    "team": "Corey Haines",
    "cat": "营销",
    "desc": "撰写和改写落地页、首页和广告的营销文案",
    "url": "https://github.com/coreyhaines31/marketingskills",
    "slug": "copywriting",
    "detailUrl": "../skills/copywriting.html"
  },
  {
    "name": "竞品对比页",
    "team": "Corey Haines",
    "cat": "营销",
    "desc": "为 SEO 构建竞品对比和替代品落地页",
    "url": "https://github.com/coreyhaines31/marketingskills",
    "slug": "competitor-alternatives",
    "detailUrl": "../skills/competitor-alternatives.html"
  },
  {
    "name": "定价策略",
    "team": "Corey Haines",
    "cat": "营销",
    "desc": "为 SaaS 定义定价、包装和变现策略",
    "url": "https://github.com/coreyhaines31/marketingskills",
    "slug": "pricing-strategy",
    "detailUrl": "../skills/pricing-strategy.html"
  },
  {
    "name": "程序化SEO",
    "team": "Corey Haines",
    "cat": "营销",
    "desc": "构建 SEO 驱动的页面模板用于大规模内容生成",
    "url": "https://github.com/coreyhaines31/marketingskills",
    "slug": "programmatic-seo",
    "detailUrl": "../skills/programmatic-seo.html"
  },
  {
    "name": "发布策略",
    "team": "Corey Haines",
    "cat": "营销",
    "desc": "规划产品发布、功能公告和上市策略",
    "url": "https://github.com/coreyhaines31/marketingskills",
    "slug": "launch-strategy",
    "detailUrl": "../skills/launch-strategy.html"
  },
  {
    "name": "SEO审计",
    "team": "Corey Haines",
    "cat": "营销",
    "desc": "审计和诊断技术性和页面级 SEO 问题",
    "url": "https://github.com/coreyhaines31/marketingskills",
    "slug": "seo-audit",
    "detailUrl": "../skills/seo-audit.html"
  },
  {
    "name": "冷邮件",
    "team": "Corey Haines",
    "cat": "营销",
    "desc": "撰写高转化率的 B2B 冷邮件和跟进序列",
    "url": "https://github.com/coreyhaines31/marketingskills",
    "slug": "cold-email",
    "detailUrl": "../skills/cold-email.html"
  },
  {
    "name": "推荐计划",
    "team": "Corey Haines",
    "cat": "营销",
    "desc": "设计和优化推荐、联盟和口碑营销计划",
    "url": "https://github.com/coreyhaines31/marketingskills",
    "slug": "referral-program",
    "detailUrl": "../skills/referral-program.html"
  },
  {
    "name": "吸睛广告创意",
    "team": "Kim Barrett",
    "cat": "营销",
    "desc": "创建在前 3 秒抓住注意力的广告概念",
    "url": "https://github.com/realkimbarrett/advertising-skills",
    "slug": "scroll-stopping-creative",
    "detailUrl": "../skills/scroll-stopping-creative.html"
  },
  {
    "name": "标题矩阵",
    "team": "Kim Barrett",
    "cat": "营销",
    "desc": "从不同角度生成高转化率的标题变体",
    "url": "https://github.com/realkimbarrett/advertising-skills",
    "slug": "headline-matrix",
    "detailUrl": "../skills/headline-matrix.html"
  },
  {
    "name": "全漏斗营销",
    "team": "Kim Barrett",
    "cat": "营销",
    "desc": "协调所有技能构建端到端的广告+漏斗营销活动",
    "url": "https://github.com/realkimbarrett/advertising-skills",
    "slug": "full-funnel-campaign",
    "detailUrl": "../skills/full-funnel-campaign.html"
  },
  {
    "name": "Remotion视频",
    "team": "Remotion",
    "cat": "视频",
    "desc": "用 React 编程式创建视频",
    "url": "https://github.com/remotion-dev/skills",
    "slug": "remotion",
    "detailUrl": "../skills/remotion.html"
  },
  {
    "name": "Replicate模型",
    "team": "Replicate",
    "cat": "AI/ML",
    "desc": "使用 Replicate API 发现、比较和运行 AI 模型",
    "url": "https://github.com/replicate/skills",
    "slug": "replicate",
    "detailUrl": "../skills/replicate.html"
  },
  {
    "name": "GSAP动画",
    "team": "GSAP",
    "cat": "前端开发",
    "desc": "专业级 Web 动效库",
    "url": "https://github.com/greensock/skills",
    "slug": "gsap-animation",
    "detailUrl": "../skills/gsap-animation.html"
  },
  {
    "name": "Redis Agent",
    "team": "Redis",
    "cat": "数据库",
    "desc": "Redis AI 辅助开发代理技能",
    "url": "https://github.com/redis/agent-skills",
    "slug": "redis-agent-skills",
    "detailUrl": "../skills/redis-agent-skills.html"
  },
  {
    "name": "NVIDIA技能",
    "team": "NVIDIA",
    "cat": "AI/ML",
    "desc": "NVIDIA AI 开发技能：GPU 加速计算",
    "url": "https://github.com/NVIDIA/skills",
    "slug": "nvidia-skills",
    "detailUrl": "../skills/nvidia-skills.html"
  },
  {
    "name": "MongoDB技能",
    "team": "MongoDB",
    "cat": "数据库",
    "desc": "MongoDB AI 代理开发技能",
    "url": "https://github.com/mongodb/skills",
    "slug": "mongodb-skills",
    "detailUrl": "../skills/mongodb-skills.html"
  },
  {
    "name": "Flutter开发",
    "team": "Flutter",
    "cat": "移动开发",
    "desc": "Flutter AI 编程代理开发技能",
    "url": "https://github.com/flutter/skills",
    "slug": "flutter-skills",
    "detailUrl": "../skills/flutter-skills.html"
  },
  {
    "name": "Angular开发",
    "team": "Angular",
    "cat": "前端开发",
    "desc": "生成 Angular 代码和架构指导",
    "url": "https://github.com/angular/skills",
    "slug": "angular-developer",
    "detailUrl": "../skills/angular-developer.html"
  },
  {
    "name": "Notion技能",
    "team": "Notion",
    "cat": "效率工具",
    "desc": "Notion AI 代理和自动化集成技能",
    "url": "https://github.com/makenotion/notion-cookbook",
    "slug": "notion-cookbook",
    "detailUrl": "../skills/notion-cookbook.html"
  },
  {
    "name": "云端浏览器",
    "team": "Browserbase",
    "cat": "测试",
    "desc": "托管的无头浏览器，用于可靠 Web 自动化",
    "url": "https://github.com/browserbase/skills",
    "slug": "browserbase",
    "detailUrl": "../skills/browserbase.html"
  },
  {
    "name": "AI代码审查",
    "team": "CodeRabbit",
    "cat": "开发工具",
    "desc": "AI 驱动的代码审查和 PR 分析",
    "url": "https://github.com/coderabbitai/skills",
    "slug": "coderabbit",
    "detailUrl": "../skills/coderabbit.html"
  },
  {
    "name": "Datadog监控",
    "team": "Datadog",
    "cat": "监控",
    "desc": "Datadog 可观测性和监控",
    "url": "https://github.com/DataDog/skills",
    "slug": "datadog-monitoring",
    "detailUrl": "../skills/datadog-monitoring.html"
  },
  {
    "name": "Tinybird管道",
    "team": "Tinybird",
    "cat": "数据分析",
    "desc": "实时数据管道和 SQL API 端点",
    "url": "https://github.com/tinybirdco/skills",
    "slug": "tinybird-pipes",
    "detailUrl": "../skills/tinybird-pipes.html"
  },
  {
    "name": "网页抓取",
    "team": "Firecrawl",
    "cat": "数据分析",
    "desc": "网页抓取、爬取和搜索，输出 AI 就绪数据",
    "url": "https://github.com/firecrawl/skills",
    "slug": "firecrawl",
    "detailUrl": "../skills/firecrawl.html"
  },
  {
    "name": "Sanity CMS",
    "team": "Sanity",
    "cat": "内容管理",
    "desc": "支持实时协作的无头 CMS",
    "url": "https://github.com/sanity-io/skills",
    "slug": "sanity-cms",
    "detailUrl": "../skills/sanity-cms.html"
  },
  {
    "name": "Neon数据库",
    "team": "Neon",
    "cat": "数据库",
    "desc": "支持分支管理的 Serverless Postgres",
    "url": "https://github.com/neondatabase/skills",
    "slug": "neon-postgres",
    "detailUrl": "../skills/neon-postgres.html"
  },
  {
    "name": "集成工具",
    "team": "Composio",
    "cat": "AI/ML",
    "desc": "连接 AI 代理到 250+ 工具和 API",
    "url": "https://github.com/ComposioHQ/skills",
    "slug": "composio",
    "detailUrl": "../skills/composio.html"
  },
  {
    "name": "社交媒体发布",
    "team": "Typefully",
    "cat": "内容创作",
    "desc": "撰写和定时发布社交媒体线索",
    "url": "https://github.com/typefully/skills",
    "slug": "typefully",
    "detailUrl": "../skills/typefully.html"
  },
  {
    "name": "邮件发送",
    "team": "Resend",
    "cat": "后端开发",
    "desc": "API 优先的事务邮件平台",
    "url": "https://github.com/resend/resend-skills",
    "slug": "resend-email",
    "detailUrl": "../skills/resend-email.html"
  },
  {
    "name": "Terraform部署",
    "team": "HashiCorp",
    "cat": "云服务",
    "desc": "使用 Terraform 管理基础设施即代码",
    "url": "https://github.com/hashicorp/skills",
    "slug": "terraform",
    "detailUrl": "../skills/terraform.html"
  },
  {
    "name": "VoltAgent平台",
    "team": "VoltAgent",
    "cat": "AI/ML",
    "desc": "通用 AI 代理平台，100+ 工具集成",
    "url": "https://github.com/VoltAgent/voltagent",
    "slug": "voltagent",
    "detailUrl": "../skills/voltagent.html"
  },
  {
    "name": "技能索引",
    "team": "VoltAgent",
    "cat": "资源合集",
    "desc": "精选 1497+ 代理技能合集",
    "url": "https://github.com/VoltAgent/awesome-agent-skills",
    "slug": "awesome-agent-skills",
    "detailUrl": "../skills/awesome-agent-skills.html"
  },
  {
    "name": "内容创作全流程",
    "team": "anbeime",
    "cat": "内容创作",
    "desc": "全流程内容创作和发布",
    "url": "https://github.com/anbeime/skill",
    "slug": "content-creation-publisher",
    "detailUrl": ""
  },
  {
    "name": "智能内容系统",
    "team": "anbeime",
    "cat": "内容创作",
    "desc": "AI 智能内容管理系统",
    "url": "https://github.com/anbeime/skill",
    "slug": "intelligent-content-system",
    "detailUrl": ""
  },
  {
    "name": "文章配图",
    "team": "anbeime",
    "cat": "内容创作",
    "desc": "AI 驱动的文章配图生成",
    "url": "https://github.com/anbeime/skill",
    "slug": "article-illustrator",
    "detailUrl": ""
  },
  {
    "name": "网页转Markdown",
    "team": "anbeime",
    "cat": "内容创作",
    "desc": "将网页转换为干净的 Markdown 格式",
    "url": "https://github.com/anbeime/skill",
    "slug": "baoyu-url-to-markdown",
    "detailUrl": ""
  },
  {
    "name": "Markdown格式化",
    "team": "anbeime",
    "cat": "内容创作",
    "desc": "格式化 Markdown 文档",
    "url": "https://github.com/anbeime/skill",
    "slug": "baoyu-format-markdown",
    "detailUrl": ""
  },
  {
    "name": "公众号发布",
    "team": "anbeime",
    "cat": "内容创作",
    "desc": "直接发布到微信公众号",
    "url": "https://github.com/anbeime/skill",
    "slug": "baoyu-post-to-wechat",
    "detailUrl": ""
  },
  {
    "name": "X/Twitter发布",
    "team": "anbeime",
    "cat": "内容创作",
    "desc": "直接发布帖子到 X/Twitter",
    "url": "https://github.com/anbeime/skill",
    "slug": "baoyu-post-to-x",
    "detailUrl": ""
  },
  {
    "name": "小红书图文",
    "team": "anbeime",
    "cat": "内容创作",
    "desc": "为小红书生成图文内容",
    "url": "https://github.com/anbeime/skill",
    "slug": "baoyu-xhs-images",
    "detailUrl": ""
  },
  {
    "name": "微信热点",
    "team": "anbeime",
    "cat": "内容创作",
    "desc": "为微信生成热点话题文章",
    "url": "https://github.com/anbeime/skill",
    "slug": "wechat-hotspot-publisher",
    "detailUrl": ""
  },
  {
    "name": "视频创作套件",
    "team": "anbeime",
    "cat": "视频",
    "desc": "从脚本到成片的完整视频创作",
    "url": "https://github.com/anbeime/skill",
    "slug": "video-creation-suite",
    "detailUrl": ""
  },
  {
    "name": "多智能体视频",
    "team": "anbeime",
    "cat": "视频",
    "desc": "多智能体协同视频创作流水线",
    "url": "https://github.com/anbeime/skill",
    "slug": "video-creation-collaborator",
    "detailUrl": ""
  },
  {
    "name": "商品视频",
    "team": "anbeime",
    "cat": "视频",
    "desc": "电商商品视频创作系统",
    "url": "https://github.com/anbeime/skill",
    "slug": "video-creation-pro",
    "detailUrl": ""
  },
  {
    "name": "视频二创",
    "team": "anbeime",
    "cat": "视频",
    "desc": "视频混剪和二创工具",
    "url": "https://github.com/anbeime/skill",
    "slug": "video-recreation",
    "detailUrl": ""
  },
  {
    "name": "视频反推",
    "team": "anbeime",
    "cat": "视频",
    "desc": "视频帧提取和反推工具",
    "url": "https://github.com/anbeime/skill",
    "slug": "video-frame-extractor",
    "detailUrl": ""
  },
  {
    "name": "爆款视频文案",
    "team": "anbeime",
    "cat": "视频",
    "desc": "爆款短视频文案生成",
    "url": "https://github.com/anbeime/skill",
    "slug": "viral-video-copywriting",
    "detailUrl": ""
  },
  {
    "name": "历史科普视频",
    "team": "anbeime",
    "cat": "视频",
    "desc": "历史科普视频制作工具包",
    "url": "https://github.com/anbeime/skill",
    "slug": "historical-science-video-prod",
    "detailUrl": ""
  },
  {
    "name": "历史访谈文案",
    "team": "anbeime",
    "cat": "视频",
    "desc": "历史访谈文案生成",
    "url": "https://github.com/anbeime/skill",
    "slug": "historical-interview-scripts",
    "detailUrl": ""
  },
  {
    "name": "三体视频",
    "team": "anbeime",
    "cat": "视频",
    "desc": "三体主题视频创作",
    "url": "https://github.com/anbeime/skill",
    "slug": "three-body-video-creator",
    "detailUrl": ""
  },
  {
    "name": "萌宠带货",
    "team": "anbeime",
    "cat": "营销",
    "desc": "萌宠带货短视频制作",
    "url": "https://github.com/anbeime/skill",
    "slug": "pet-commerce-creator",
    "detailUrl": ""
  },
  {
    "name": "电商文案",
    "team": "anbeime",
    "cat": "营销",
    "desc": "电商产品图片文案生成",
    "url": "https://github.com/anbeime/skill",
    "slug": "ecommerce-copywriter",
    "detailUrl": ""
  },
  {
    "name": "电商视频营销",
    "team": "anbeime",
    "cat": "营销",
    "desc": "电商视频营销工具",
    "url": "https://github.com/anbeime/skill",
    "slug": "ecommerce-video-marketing",
    "detailUrl": ""
  },
  {
    "name": "产品营销文案",
    "team": "anbeime",
    "cat": "营销",
    "desc": "高转化产品营销文案生成",
    "url": "https://github.com/anbeime/skill",
    "slug": "product-marketing-copywriter",
    "detailUrl": ""
  },
  {
    "name": "商品视频",
    "team": "anbeime",
    "cat": "营销",
    "desc": "AI 辅助专业产品视频",
    "url": "https://github.com/anbeime/skill",
    "slug": "product-video-creator",
    "detailUrl": ""
  },
  {
    "name": "小红书美妆",
    "team": "anbeime",
    "cat": "营销",
    "desc": "小红书美妆内容创作",
    "url": "https://github.com/anbeime/skill",
    "slug": "xiaohongshu-makeup",
    "detailUrl": ""
  },
  {
    "name": "AI PPT生成",
    "team": "anbeime",
    "cat": "文档处理",
    "desc": "AI 驱动的 PPT 生成（含图片和视频）",
    "url": "https://github.com/op7418/NanoBanana-PPT-Skills",
    "slug": "NanoBanana-PPT-Skills",
    "detailUrl": ""
  },
  {
    "name": "智能PPT",
    "team": "anbeime",
    "cat": "文档处理",
    "desc": "从提示生成智能 PPT",
    "url": "https://github.com/anbeime/skill",
    "slug": "ppt-generator",
    "detailUrl": ""
  },
  {
    "name": "JSON转PPTX",
    "team": "anbeime",
    "cat": "文档处理",
    "desc": "将 JSON 数据转为 PPTX 格式",
    "url": "https://github.com/anbeime/skill",
    "slug": "pptx-generator",
    "detailUrl": ""
  },
  {
    "name": "PPT视觉增强",
    "team": "anbeime",
    "cat": "文档处理",
    "desc": "演示文稿视觉增强",
    "url": "https://github.com/anbeime/skill",
    "slug": "nanobanana-ppt-visualizer",
    "detailUrl": ""
  },
  {
    "name": "PPT路演",
    "team": "anbeime",
    "cat": "文档处理",
    "desc": "路演风格视频演示生成器",
    "url": "https://github.com/anbeime/skill",
    "slug": "ppt-roadshow-generator",
    "detailUrl": ""
  },
  {
    "name": "视频转场",
    "team": "anbeime",
    "cat": "视频",
    "desc": "视频转场动画增强",
    "url": "https://github.com/anbeime/skill",
    "slug": "remotion-video-enhancer",
    "detailUrl": ""
  },
  {
    "name": "语音合成",
    "team": "anbeime",
    "cat": "语音",
    "desc": "智能文字转语音合成",
    "url": "https://github.com/anbeime/skill",
    "slug": "tts-voice-synthesis",
    "detailUrl": ""
  },
  {
    "name": "本地TTS",
    "team": "anbeime",
    "cat": "语音",
    "desc": "基于 Edge-TTS 的本地语音合成",
    "url": "https://github.com/anbeime/skill",
    "slug": "qwen3-tts-local",
    "detailUrl": ""
  },
  {
    "name": "语音转文字",
    "team": "anbeime",
    "cat": "语音",
    "desc": "高精度语音转文字",
    "url": "https://github.com/anbeime/skill",
    "slug": "qwen3-asr-assistant",
    "detailUrl": ""
  },
  {
    "name": "音频驱动配音",
    "team": "anbeime",
    "cat": "数字人",
    "desc": "音频驱动视频配音和口型同步",
    "url": "https://github.com/anbeime/skill",
    "slug": "infinitetalk",
    "detailUrl": ""
  },
  {
    "name": "带货数字人",
    "team": "anbeime",
    "cat": "数字人",
    "desc": "带货数字人提示词生成",
    "url": "https://github.com/anbeime/skill",
    "slug": "infinitetalk-shopping-avatar",
    "detailUrl": ""
  },
  {
    "name": "数字人口播",
    "team": "anbeime",
    "cat": "数字人",
    "desc": "数字人直播带货工具",
    "url": "https://github.com/anbeime/skill",
    "slug": "digital-avatar-shopping-video",
    "detailUrl": ""
  },
  {
    "name": "即梦提示词",
    "team": "anbeime",
    "cat": "数字人",
    "desc": "即梦视频提示词工程",
    "url": "https://github.com/anbeime/skill",
    "slug": "dream-video-prompt-generator",
    "detailUrl": ""
  },
  {
    "name": "多媒体带货",
    "team": "anbeime",
    "cat": "数字人",
    "desc": "多媒体产品推广视频工具",
    "url": "https://github.com/anbeime/skill",
    "slug": "agentkit-multimedia-shopping",
    "detailUrl": ""
  },
  {
    "name": "论文分析",
    "team": "anbeime",
    "cat": "数据分析",
    "desc": "arXiv 论文分析和研究助手",
    "url": "https://github.com/anbeime/skill",
    "slug": "paper-analysis-assistant",
    "detailUrl": ""
  },
  {
    "name": "合同审核",
    "team": "anbeime",
    "cat": "文档处理",
    "desc": "AI 驱动的合同审查和分析",
    "url": "https://github.com/anbeime/skill",
    "slug": "contract-review",
    "detailUrl": ""
  },
  {
    "name": "法律文档转换",
    "team": "anbeime",
    "cat": "文档处理",
    "desc": "将法律文档转换为结构化 Markdown",
    "url": "https://github.com/anbeime/skill",
    "slug": "law-to-markdown",
    "detailUrl": ""
  },
  {
    "name": "股票分析",
    "team": "anbeime",
    "cat": "金融",
    "desc": "多维度股票分析工具",
    "url": "https://github.com/anbeime/skill",
    "slug": "stock-analysis",
    "detailUrl": ""
  },
  {
    "name": "智能体团队",
    "team": "anbeime",
    "cat": "AI/ML",
    "desc": "多智能体团队协作和编排",
    "url": "https://github.com/anbeime/skill",
    "slug": "agent-team",
    "detailUrl": ""
  },
  {
    "name": "多智能体会议",
    "team": "anbeime",
    "cat": "AI/ML",
    "desc": "多智能体会议模拟",
    "url": "https://github.com/anbeime/skill",
    "slug": "multi-agent-meeting",
    "detailUrl": ""
  },
  {
    "name": "同行顾问团",
    "team": "anbeime",
    "cat": "AI/ML",
    "desc": "战略决策同行顾问团",
    "url": "https://github.com/anbeime/skill",
    "slug": "peers-advisory-group",
    "detailUrl": ""
  },
  {
    "name": "产品工具包",
    "team": "anbeime",
    "cat": "效率工具",
    "desc": "产品经理综合工具包",
    "url": "https://github.com/anbeime/skill",
    "slug": "product-manager-toolkit",
    "detailUrl": ""
  },
  {
    "name": "销售AI助手",
    "team": "anbeime",
    "cat": "营销",
    "desc": "AI 销售助手，集成 CRM",
    "url": "https://github.com/anbeime/skill",
    "slug": "sales-ai-assistant",
    "detailUrl": ""
  },
  {
    "name": "AI流程图",
    "team": "anbeime",
    "cat": "创意设计",
    "desc": "AI 驱动的 Draw.io 流程图生成",
    "url": "https://github.com/anbeime/skill",
    "slug": "ai-drawio",
    "detailUrl": ""
  },
  {
    "name": "立体书插画",
    "team": "anbeime",
    "cat": "创意设计",
    "desc": "3D 立体书风格插画",
    "url": "https://github.com/anbeime/skill",
    "slug": "pop-up-book-illustration",
    "detailUrl": ""
  },
  {
    "name": "网页转App",
    "team": "anbeime",
    "cat": "开发工具",
    "desc": "将 Web 应用转为桌面应用",
    "url": "https://github.com/anbeime/skill",
    "slug": "web-to-app",
    "detailUrl": ""
  },
  {
    "name": "财务建模",
    "team": "anbeime",
    "cat": "金融",
    "desc": "财务建模套件和分析工具",
    "url": "https://github.com/anbeime/skill",
    "slug": "creating-financial-models",
    "detailUrl": ""
  },
  {
    "name": "市场研究",
    "team": "anbeime",
    "cat": "金融",
    "desc": "市场研究和行业报告生成器",
    "url": "https://github.com/anbeime/skill",
    "slug": "market-research-reports",
    "detailUrl": ""
  },
  {
    "name": "古诗词配乐",
    "team": "anbeime",
    "cat": "创意设计",
    "desc": "古诗词可视化配乐",
    "url": "https://github.com/anbeime/skill",
    "slug": "poetry-music-visual",
    "detailUrl": ""
  },
  {
    "name": "中文去AI味",
    "team": "voidborne-d",
    "cat": "内容创作",
    "desc": "从中文文本中去除 AI 检测痕迹",
    "url": "https://github.com/voidborne-d/humanize-chinese",
    "slug": "humanize-chinese",
    "detailUrl": ""
  },
  {
    "name": "去AI味通用",
    "team": "blader",
    "cat": "内容创作",
    "desc": "从文本中移除 AI 生成痕迹",
    "url": "https://github.com/blader/humanizer",
    "slug": "humanizer",
    "detailUrl": ""
  },
  {
    "name": "记忆技能",
    "team": "hanfang",
    "cat": "AI/ML",
    "desc": "AI 代理的记忆管理和持久化",
    "url": "https://github.com/hanfang/claude-memory-skill",
    "slug": "claude-memory-skill",
    "detailUrl": ""
  },
  {
    "name": "SEO工具",
    "team": "AgriciDaniel",
    "cat": "营销",
    "desc": "Web 内容 SEO 优化技能",
    "url": "https://github.com/AgriciDaniel/claude-seo",
    "slug": "claude-seo",
    "detailUrl": ""
  },
  {
    "name": "法律技能",
    "team": "lawvable",
    "cat": "文档处理",
    "desc": "法律领域 AI 技能合集",
    "url": "https://github.com/lawvable/awesome-legal-skills",
    "slug": "awesome-legal-skills",
    "detailUrl": ""
  },
  {
    "name": "书籍翻译",
    "team": "deusyu",
    "cat": "内容创作",
    "desc": "书籍翻译和章节管理",
    "url": "https://github.com/deusyu/translate-book",
    "slug": "translate-book",
    "detailUrl": ""
  },
  {
    "name": "邮件营销",
    "team": "CosmoBlk",
    "cat": "营销",
    "desc": "邮件营销策略大全",
    "url": "https://github.com/CosmoBlk/email-marketing-bible",
    "slug": "email-marketing-bible",
    "detailUrl": ""
  },
  {
    "name": "NotebookLM",
    "team": "PleasePrompto",
    "cat": "AI/ML",
    "desc": "NotebookLM 研究集成",
    "url": "https://github.com/PleasePrompto/notebooklm-skill",
    "slug": "notebooklm-skill",
    "detailUrl": ""
  },
  {
    "name": "AI音乐",
    "team": "bitwize-music-studio",
    "cat": "创意设计",
    "desc": "AI 音乐创作与作曲",
    "url": "https://github.com/bitwize-music-studio/claude-ai-music-skills",
    "slug": "claude-ai-music-skills",
    "detailUrl": ""
  },
  {
    "name": "UI/UX大师",
    "team": "nextlevelbuilder",
    "cat": "前端开发",
    "desc": "高级 UI/UX 设计，专业级输出",
    "url": "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill",
    "slug": "ui-ux-pro-max-skill",
    "detailUrl": ""
  },
  {
    "name": "App Store预审",
    "team": "rudrankriyam",
    "cat": "移动开发",
    "desc": "App Store 提交预审检查",
    "url": "https://github.com/rudrankriyam/app-store-connect-cli-skills",
    "slug": "app-store-preflight-skills",
    "detailUrl": ""
  },
  {
    "name": "上下文工程",
    "team": "NeoLabHQ",
    "cat": "AI/ML",
    "desc": "上下文工程：优化代理行为",
    "url": "https://github.com/NeoLabHQ/context-engineering-kit",
    "slug": "context-engineering-kit",
    "detailUrl": ""
  },
  {
    "name": "速读",
    "team": "SeanZoR",
    "cat": "效率工具",
    "desc": "长文档速读助手",
    "url": "https://github.com/SeanZoR/claude-speed-reader",
    "slug": "claude-speed-reader",
    "detailUrl": ""
  },
  {
    "name": "创意指导",
    "team": "smixs",
    "cat": "创意设计",
    "desc": "多媒体项目创意指导",
    "url": "https://github.com/smixs/creative-director-skill",
    "slug": "creative-director-skill",
    "detailUrl": ""
  },
  {
    "name": "手绘图表",
    "team": "muthuishere",
    "cat": "创意设计",
    "desc": "手绘风格图表和流程图",
    "url": "https://github.com/muthuishere/hand-drawn-diagrams",
    "slug": "hand-drawn-diagrams",
    "detailUrl": ""
  },
  {
    "name": "代码清关",
    "team": "frmoretto",
    "cat": "开发工具",
    "desc": "代码清晰度和质量门禁",
    "url": "https://github.com/frmoretto/clarity-gate",
    "slug": "clarity-gate",
    "detailUrl": ""
  },
  {
    "name": "X文章发布",
    "team": "wshuyi",
    "cat": "内容创作",
    "desc": "发布长文到 X/Twitter",
    "url": "https://github.com/wshuyi/x-article-publisher-skill",
    "slug": "x-article-publisher-skill",
    "detailUrl": ""
  },
  {
    "name": "网络安全",
    "team": "mukul975",
    "cat": "安全",
    "desc": "网络安全评估技能集",
    "url": "https://github.com/mukul975/Anthropic-Cybersecurity-Skills",
    "slug": "Anthropic-Cybersecurity-Skills",
    "detailUrl": ""
  },
  {
    "name": "模型层级",
    "team": "zscole",
    "cat": "AI/ML",
    "desc": "模型层级管理：最优 API 路由",
    "url": "https://github.com/zscole/model-hierarchy-skill",
    "slug": "model-hierarchy-skill",
    "detailUrl": ""
  },
  {
    "name": "审美判断",
    "team": "Leonxlnx",
    "cat": "创意设计",
    "desc": "设计美学评判",
    "url": "https://github.com/Leonxlnx/taste-skill",
    "slug": "taste-skill",
    "detailUrl": ""
  },
  {
    "name": "电商AI",
    "team": "takechanman1228",
    "cat": "营销",
    "desc": "电商自动化和管理",
    "url": "https://github.com/takechanman1228/claude-ecom",
    "slug": "claude-ecom",
    "detailUrl": ""
  },
  {
    "name": "平台设计",
    "team": "ehmo",
    "cat": "开发工具",
    "desc": "平台设计模式和架构",
    "url": "https://github.com/ehmo/platform-design-skills",
    "slug": "platform-design-skills",
    "detailUrl": ""
  },
  {
    "name": "递归分解",
    "team": "massimodeluisa",
    "cat": "开发工具",
    "desc": "复杂任务的递归问题分解",
    "url": "https://github.com/massimodeluisa/recursive-decomposition-skill",
    "slug": "recursive-decomposition-skill",
    "detailUrl": ""
  },
  {
    "name": "去除冗余",
    "team": "MohamedAbdallah-14",
    "cat": "内容创作",
    "desc": "从 AI 输出中去除冗余",
    "url": "https://github.com/MohamedAbdallah-14/unslop",
    "slug": "unslop",
    "detailUrl": ""
  },
  {
    "name": "引导配置",
    "team": "alinaqi",
    "cat": "开发工具",
    "desc": "引导和配置 Claude 环境",
    "url": "https://github.com/alinaqi/claude-bootstrap",
    "slug": "claude-bootstrap",
    "detailUrl": ""
  },
  {
    "name": "前端全栈开发",
    "team": "MiniMax",
    "cat": "前端开发",
    "desc": "前端全栈开发：高级UI、动效、AI媒体生成、文案、创意编程",
    "url": "https://github.com/MiniMax-AI/skills/tree/main/skills/frontend-dev",
    "slug": "minimax-frontend-dev",
    "detailUrl": "../skills/minimax-frontend-dev.html"
  },
  {
    "name": "全栈架构",
    "team": "MiniMax",
    "cat": "后端开发",
    "desc": "后端架构与前后端集成：REST API、认证、实时通信、数据库、生产加固",
    "url": "https://github.com/MiniMax-AI/skills/tree/main/skills/fullstack-dev",
    "slug": "minimax-fullstack-dev",
    "detailUrl": "../skills/minimax-fullstack-dev.html"
  },
  {
    "name": "Android原生开发",
    "team": "MiniMax",
    "cat": "移动开发",
    "desc": "Android原生开发：Material Design 3、Jetpack Compose、自适应布局、性能优化",
    "url": "https://github.com/MiniMax-AI/skills/tree/main/skills/android-native-dev",
    "slug": "minimax-android-dev",
    "detailUrl": "../skills/minimax-android-dev.html"
  },
  {
    "name": "iOS应用开发",
    "team": "MiniMax",
    "cat": "移动开发",
    "desc": "iOS开发：UIKit、SnapKit、SwiftUI、动态字体、暗黑模式、无障碍",
    "url": "https://github.com/MiniMax-AI/skills/tree/main/skills/ios-application-dev",
    "slug": "minimax-ios-dev",
    "detailUrl": "../skills/minimax-ios-dev.html"
  },
  {
    "name": "Flutter跨平台",
    "team": "MiniMax",
    "cat": "移动开发",
    "desc": "Flutter跨平台开发：Widget模式、状态管理、路由、性能、测试",
    "url": "https://github.com/MiniMax-AI/skills/tree/main/skills/flutter-dev",
    "slug": "minimax-flutter-dev",
    "detailUrl": "../skills/minimax-flutter-dev.html"
  },
  {
    "name": "React Native开发",
    "team": "MiniMax",
    "cat": "移动开发",
    "desc": "React Native + Expo：组件、样式、动画、导航、原生能力、CI/CD",
    "url": "https://github.com/MiniMax-AI/skills/tree/main/skills/react-native-dev",
    "slug": "minimax-react-native-dev",
    "detailUrl": "../skills/minimax-react-native-dev.html"
  },
  {
    "name": "Shader着色器",
    "team": "MiniMax",
    "cat": "创意设计",
    "desc": "GLSL着色器：光线步进、SDF建模、流体模拟、粒子系统、程序化生成",
    "url": "https://github.com/MiniMax-AI/skills/tree/main/skills/shader-dev",
    "slug": "minimax-shader-dev",
    "detailUrl": "../skills/minimax-shader-dev.html"
  },
  {
    "name": "GIF贴纸生成",
    "team": "MiniMax",
    "cat": "图像",
    "desc": "将照片转为潮玩风格的动画GIF贴纸",
    "url": "https://github.com/MiniMax-AI/skills/tree/main/skills/gif-sticker-maker",
    "slug": "minimax-gif-sticker",
    "detailUrl": "../skills/minimax-gif-sticker.html"
  },
  {
    "name": "PDF生成",
    "team": "MiniMax",
    "cat": "文档处理",
    "desc": "生成、填写和重排PDF：15种封面风格、打印就绪",
    "url": "https://github.com/MiniMax-AI/skills/tree/main/skills/minimax-pdf",
    "slug": "minimax-pdf",
    "detailUrl": "../skills/minimax-pdf.html"
  },
  {
    "name": "PPT生成编辑",
    "team": "MiniMax",
    "cat": "文档处理",
    "desc": "生成、编辑和读取PPT：封面/目录/内容/分隔/总结页、XML工作流",
    "url": "https://github.com/MiniMax-AI/skills/tree/main/skills/pptx-generator",
    "slug": "minimax-pptx",
    "detailUrl": "../skills/minimax-pptx.html"
  },
  {
    "name": "Excel处理",
    "team": "MiniMax",
    "cat": "文档处理",
    "desc": "创建/读取/分析Excel：XML模板、pandas、无损编辑、财务格式",
    "url": "https://github.com/MiniMax-AI/skills/tree/main/skills/minimax-xlsx",
    "slug": "minimax-xlsx",
    "detailUrl": "../skills/minimax-xlsx.html"
  },
  {
    "name": "Word文档",
    "team": "MiniMax",
    "cat": "文档处理",
    "desc": "专业Word文档：OpenXML SDK创建、填充、格式化、XSD校验",
    "url": "https://github.com/MiniMax-AI/skills/tree/main/skills/minimax-docx",
    "slug": "minimax-docx",
    "detailUrl": "../skills/minimax-docx.html"
  },
  {
    "name": "视觉分析",
    "team": "MiniMax",
    "cat": "图像",
    "desc": "图像分析：描述、OCR、UI审查、图表提取、物体检测",
    "url": "https://github.com/MiniMax-AI/skills/tree/main/skills/vision-analysis",
    "slug": "minimax-vision",
    "detailUrl": "../skills/minimax-vision.html"
  },
  {
    "name": "多模态生成",
    "team": "MiniMax",
    "cat": "AI/ML",
    "desc": "语音合成、音乐、视频、图像生成——MiniMax多模态统一入口",
    "url": "https://github.com/MiniMax-AI/skills/tree/main/skills/minimax-multimodal-toolkit",
    "slug": "minimax-multimodal",
    "detailUrl": "../skills/minimax-multimodal.html"
  },
  {
    "name": "AI音乐生成",
    "team": "MiniMax",
    "cat": "创意设计",
    "desc": "AI音乐生成：人声歌曲、纯音乐、翻唱，基础和高级模式，流式播放",
    "url": "https://github.com/MiniMax-AI/skills/tree/main/skills/minimax-music-gen",
    "slug": "minimax-music",
    "detailUrl": "../skills/minimax-music.html"
  },
  {
    "name": "AI歌单生成",
    "team": "MiniMax",
    "cat": "创意设计",
    "desc": "个性化AI歌单：口味分析、风格、语言、人声偏好、专辑封面",
    "url": "https://github.com/MiniMax-AI/skills/tree/main/skills/minimax-music-playlist",
    "slug": "minimax-music-playlist",
    "detailUrl": "../skills/minimax-music-playlist.html"
  },
  {
    "name": "Google Drive管理",
    "team": "Google Workspace",
    "cat": "效率工具",
    "desc": "通过CLI管理Google Drive文件和共享",
    "url": "https://officialskills.sh/googleworkspace/skills/gws-drive",
    "slug": "gws-drive",
    "detailUrl": "../skills/gws-drive.html"
  },
  {
    "name": "Google Sheets读写",
    "team": "Google Workspace",
    "cat": "效率工具",
    "desc": "程序化读写Google Sheets电子表格",
    "url": "https://officialskills.sh/googleworkspace/skills/gws-sheets",
    "slug": "gws-sheets",
    "detailUrl": "../skills/gws-sheets.html"
  },
  {
    "name": "Gmail管理",
    "team": "Google Workspace",
    "cat": "效率工具",
    "desc": "通过CLI发送、读取和管理Gmail邮件",
    "url": "https://officialskills.sh/googleworkspace/skills/gws-gmail",
    "slug": "gws-gmail",
    "detailUrl": "../skills/gws-gmail.html"
  },
  {
    "name": "Google日历",
    "team": "Google Workspace",
    "cat": "效率工具",
    "desc": "管理Google日历活动和日程",
    "url": "https://officialskills.sh/googleworkspace/skills/gws-calendar",
    "slug": "gws-calendar",
    "detailUrl": "../skills/gws-calendar.html"
  },
  {
    "name": "Google Docs读写",
    "team": "Google Workspace",
    "cat": "内容创作",
    "desc": "程序化读写Google Docs文档",
    "url": "https://officialskills.sh/googleworkspace/skills/gws-docs",
    "slug": "gws-docs",
    "detailUrl": "../skills/gws-docs.html"
  },
  {
    "name": "RN性能优化",
    "team": "CallStack",
    "cat": "移动开发",
    "desc": "Callstack团队出品的React Native性能优化指南",
    "url": "https://officialskills.sh/callstackincubator/skills/react-native-best-practices",
    "slug": "callstack-rn-perf",
    "detailUrl": "../skills/callstack-rn-perf.html"
  },
  {
    "name": "GitHub工作流",
    "team": "CallStack",
    "cat": "开发工具",
    "desc": "PR、代码审查和分支管理的GitHub工作流模式",
    "url": "https://officialskills.sh/callstackincubator/skills/github",
    "slug": "callstack-github",
    "detailUrl": "../skills/callstack-github.html"
  },
  {
    "name": "RN版本升级",
    "team": "CallStack",
    "cat": "移动开发",
    "desc": "React Native升级流程：模板、依赖项和常见陷阱",
    "url": "https://officialskills.sh/callstackincubator/skills/upgrading-react-native",
    "slug": "callstack-rn-upgrade",
    "detailUrl": "../skills/callstack-rn-upgrade.html"
  },
  {
    "name": "Better Auth最佳实践",
    "team": "Better Auth",
    "cat": "安全",
    "desc": "Better Auth集成和配置最佳实践",
    "url": "https://officialskills.sh/better-auth/skills/best-practices",
    "slug": "better-auth-best",
    "detailUrl": "../skills/better-auth-best.html"
  },
  {
    "name": "认证系统搭建",
    "team": "Better Auth",
    "cat": "安全",
    "desc": "用Better Auth搭建完整认证系统",
    "url": "https://officialskills.sh/better-auth/skills/create-auth",
    "slug": "better-auth-create",
    "detailUrl": "../skills/better-auth-create.html"
  },
  {
    "name": "认证提供商",
    "team": "Better Auth",
    "cat": "安全",
    "desc": "Better Auth认证提供商和社交登录",
    "url": "https://officialskills.sh/better-auth/skills/providers",
    "slug": "better-auth-providers",
    "detailUrl": "../skills/better-auth-providers.html"
  },
  {
    "name": "双因素认证",
    "team": "Better Auth",
    "cat": "安全",
    "desc": "Better Auth双因素认证配置",
    "url": "https://officialskills.sh/better-auth/skills/twoFactor",
    "slug": "better-auth-2fa",
    "detailUrl": "../skills/better-auth-2fa.html"
  },
  {
    "name": "组织管理",
    "team": "Better Auth",
    "cat": "安全",
    "desc": "Better Auth组织和团队管理",
    "url": "https://officialskills.sh/better-auth/skills/organization",
    "slug": "better-auth-org",
    "detailUrl": "../skills/better-auth-org.html"
  },
  {
    "name": "多渠道通知",
    "team": "Courier",
    "cat": "后端开发",
    "desc": "多渠道通知：邮件、短信、推送、聊天API",
    "url": "https://github.com/trycourier/courier-skills",
    "slug": "courier-notifications",
    "detailUrl": "../skills/courier-notifications.html"
  },
  {
    "name": "Zero工具发现",
    "team": "Zero",
    "cat": "AI/ML",
    "desc": "为AI代理发现和调用外部付费工具，无需手动注册",
    "url": "https://github.com/officialzeroxyz/zero-plugins/blob/main/plugins/zero/skills/zero/SKILL.md",
    "slug": "zero-tools",
    "detailUrl": "../skills/zero-tools.html"
  },
  {
    "name": "Zero Gemini扩展",
    "team": "Zero",
    "cat": "AI/ML",
    "desc": "面向Gemini CLI代理的Zero工具发现和支付层",
    "url": "https://github.com/officialzeroxyz/zero-plugins/tree/main/plugins/zero-gemini",
    "slug": "zero-gemini",
    "detailUrl": "../skills/zero-gemini.html"
  },
  {
    "name": "DuckDB分析",
    "team": "DuckDB",
    "cat": "数据库",
    "desc": "DuckDB进程内OLAP数据库：数据分析和SQL查询",
    "url": "https://officialskills.sh/duckdb/skills/duckdb",
    "slug": "duckdb-skill",
    "detailUrl": "../skills/duckdb-skill.html"
  },
  {
    "name": "Web质量审计",
    "team": "Addy Osmani",
    "cat": "前端开发",
    "desc": "综合Web质量审计：Lighthouse、Core Web Vitals和最佳实践",
    "url": "https://github.com/addyosmani/web-quality-skills",
    "slug": "web-quality-audit",
    "detailUrl": "../skills/web-quality-audit.html"
  },
  {
    "name": "Core Web Vitals优化",
    "team": "Addy Osmani",
    "cat": "前端开发",
    "desc": "按Google Web性能指南优化LCP、INP和CLS指标",
    "url": "https://github.com/addyosmani/web-quality-skills",
    "slug": "core-web-vitals",
    "detailUrl": "../skills/core-web-vitals.html"
  },
  {
    "name": "Lighthouse优化",
    "team": "Addy Osmani",
    "cat": "前端开发",
    "desc": "不限技术栈的Lighthouse 90+分优化策略",
    "url": "https://github.com/addyosmani/web-quality-skills",
    "slug": "lighthouse-optimization",
    "detailUrl": "../skills/lighthouse-optimization.html"
  },
  {
    "name": "性能预算",
    "team": "Addy Osmani",
    "cat": "前端开发",
    "desc": "为Web项目设定和执行性能预算",
    "url": "https://github.com/addyosmani/web-quality-skills",
    "slug": "performance-budget",
    "detailUrl": "../skills/performance-budget.html"
  },
  {
    "name": "CEO审查",
    "team": "Garry Tan",
    "cat": "效率工具",
    "desc": "CEO级产品审查：战略、路线图和业务对齐",
    "url": "https://github.com/garrytan/gstack",
    "slug": "gstack-ceo",
    "detailUrl": "../skills/gstack-ceo.html"
  },
  {
    "name": "设计审查",
    "team": "Garry Tan",
    "cat": "创意设计",
    "desc": "资深设计师视角的设计审查：UX、视觉、一致性",
    "url": "https://github.com/garrytan/gstack",
    "slug": "gstack-designer",
    "detailUrl": "../skills/gstack-designer.html"
  },
  {
    "name": "QA测试",
    "team": "Garry Tan",
    "cat": "测试",
    "desc": "QA主管级别测试和质量保证（含浏览器自动化）",
    "url": "https://github.com/garrytan/gstack",
    "slug": "gstack-qa",
    "detailUrl": "../skills/gstack-qa.html"
  },
  {
    "name": "发布管理",
    "team": "Garry Tan",
    "cat": "开发工具",
    "desc": "发布管理：部署协调、变更日志、版本管理、/ship命令",
    "url": "https://github.com/garrytan/gstack",
    "slug": "gstack-release",
    "detailUrl": "../skills/gstack-release.html"
  },
  {
    "name": "工程管理",
    "team": "Garry Tan",
    "cat": "开发工具",
    "desc": "工程管理：代码审查、架构决策、技术债务管理",
    "url": "https://github.com/garrytan/gstack",
    "slug": "gstack-eng-mgr",
    "detailUrl": "../skills/gstack-eng-mgr.html"
  },
  {
    "name": "Playwright测试",
    "team": "TestMu AI",
    "cat": "测试",
    "desc": "生成Playwright端到端测试：支持TS/JS/Python/Java/C#",
    "url": "https://github.com/LambdaTest/agent-skills/tree/main/playwright-skill",
    "slug": "testmu-playwright",
    "detailUrl": "../skills/testmu-playwright.html"
  },
  {
    "name": "Cypress测试",
    "team": "TestMu AI",
    "cat": "测试",
    "desc": "生成Cypress端到端和组件测试",
    "url": "https://github.com/LambdaTest/agent-skills/tree/main/cypress-skill",
    "slug": "testmu-cypress",
    "detailUrl": "../skills/testmu-cypress.html"
  },
  {
    "name": "Jest测试",
    "team": "TestMu AI",
    "cat": "测试",
    "desc": "生成Jest单元和集成测试：Mock和快照",
    "url": "https://github.com/LambdaTest/agent-skills/tree/main/jest-skill",
    "slug": "testmu-jest",
    "detailUrl": "../skills/testmu-jest.html"
  },
  {
    "name": "Vitest测试",
    "team": "TestMu AI",
    "cat": "测试",
    "desc": "生成Vitest测试：Jest兼容API、ESM支持",
    "url": "https://github.com/LambdaTest/agent-skills/tree/main/vitest-skill",
    "slug": "testmu-vitest",
    "detailUrl": "../skills/testmu-vitest.html"
  },
  {
    "name": "pytest测试",
    "team": "TestMu AI",
    "cat": "测试",
    "desc": "生成pytest测试：fixtures、参数化、Mock",
    "url": "https://github.com/LambdaTest/agent-skills/tree/main/pytest-skill",
    "slug": "testmu-pytest",
    "detailUrl": "../skills/testmu-pytest.html"
  },
  {
    "name": "Selenium测试",
    "team": "TestMu AI",
    "cat": "测试",
    "desc": "生成Selenium WebDriver测试：多语言支持",
    "url": "https://github.com/LambdaTest/agent-skills/tree/main/selenium-skill",
    "slug": "testmu-selenium",
    "detailUrl": "../skills/testmu-selenium.html"
  },
  {
    "name": "CI/CD流水线",
    "team": "TestMu AI",
    "cat": "部署",
    "desc": "生成测试CI/CD流水线：GitHub Actions/Jenkins/GitLab CI/Azure DevOps",
    "url": "https://github.com/LambdaTest/agent-skills/tree/main/cicd-pipeline-skill",
    "slug": "testmu-cicd",
    "detailUrl": "../skills/testmu-cicd.html"
  },
  {
    "name": "Venice聊天API",
    "team": "Venice.ai",
    "cat": "AI/ML",
    "desc": "Venice AI聊天补全：多模态输入、工具调用、流式",
    "url": "https://github.com/veniceai/skills/tree/main/skills/venice-chat",
    "slug": "venice-chat",
    "detailUrl": "../skills/venice-chat.html"
  },
  {
    "name": "Venice图像生成",
    "team": "Venice.ai",
    "cat": "图像",
    "desc": "Venice API图像生成：端点和风格",
    "url": "https://github.com/veniceai/skills/tree/main/skills/venice-image-generate",
    "slug": "venice-image",
    "detailUrl": "../skills/venice-image.html"
  },
  {
    "name": "Venice语音合成",
    "team": "Venice.ai",
    "cat": "语音",
    "desc": "Venice文字转语音：多模型、多音色、流式",
    "url": "https://github.com/veniceai/skills/tree/main/skills/venice-audio-speech",
    "slug": "venice-audio",
    "detailUrl": "../skills/venice-audio.html"
  },
  {
    "name": "Venice视频生成",
    "team": "Venice.ai",
    "cat": "视频",
    "desc": "Venice视频生成和转录工作流",
    "url": "https://github.com/veniceai/skills/tree/main/skills/venice-video",
    "slug": "venice-video",
    "detailUrl": "../skills/venice-video.html"
  },
  {
    "name": "Venice模型目录",
    "team": "Venice.ai",
    "cat": "AI/ML",
    "desc": "Venice AI模型目录：特性、兼容性映射",
    "url": "https://github.com/veniceai/skills/tree/main/skills/venice-models",
    "slug": "venice-models",
    "detailUrl": "../skills/venice-models.html"
  },
  {
    "name": "OpenHands自主编程",
    "team": "OpenHands (All-Hands-AI)",
    "cat": "开发工具",
    "desc": "自主 AI 软件工程师，能自动写代码、执行调试、修复 Bug，像自律的编程搭档",
    "url": "https://github.com/OpenHands/openhands",
    "slug": "openhands",
    "detailUrl": "../skills/openhands.html"
  },
  {
    "name": "Hermes自进化Agent",
    "team": "Nous Research",
    "cat": "开发工具",
    "desc": "Nous Research 出品的自我进化 AI Agent，内置学习循环，越用越懂你的习惯，支持多渠道交互",
    "url": "https://github.com/NousResearch/hermes-agent",
    "slug": "hermes-agent",
    "detailUrl": "../skills/hermes-agent.html"
  },
  {
    "name": "CrewAI多Agent协作",
    "team": "CrewAI Inc.",
    "cat": "开发工具",
    "desc": "多 Agent 团队协作框架，让不同角色 AI 分工明确，从调研、分析到输出一条龙搞定",
    "url": "https://github.com/crewAIInc/crewAI",
    "slug": "crewai",
    "detailUrl": "../skills/crewai.html"
  },
  {
    "name": "Aider终端结对编程",
    "team": "Aider-AI",
    "cat": "开发工具",
    "desc": "终端里的 AI 结对编程神器，边聊边改代码，改完自动 commit 提交历史",
    "url": "https://github.com/Aider-AI/aider",
    "slug": "aider",
    "detailUrl": "../skills/aider.html"
  },
  {
    "name": "browser-use浏览器自动化",
    "team": "browser-use",
    "cat": "开发工具",
    "desc": "让 AI Agent 自主操控浏览器，完成点击、填表、导航等自动化任务",
    "url": "https://github.com/browser-use/browser-use",
    "slug": "browser-use",
    "detailUrl": "../skills/browser-use.html"
  },
  {
    "name": "Agent-Reach联网能力层",
    "team": "Panniantong",
    "cat": "开发工具",
    "desc": "为任意命令行 AI Agent 一键接入互联网，免费读取搜索 Twitter、Reddit、YouTube、B站、小红书等内容",
    "url": "https://github.com/Panniantong/Agent-Reach",
    "slug": "agent-reach",
    "detailUrl": "../skills/agent-reach.html"
  },
  {
    "name": "游资股票深度分析",
    "team": "wbh604",
    "cat": "金融",
    "desc": "AI 股票深度分析引擎，66 位投资风格评审团按量化规则打分，生成 Bloomberg 风格报告",
    "url": "https://github.com/wbh604/UZI-Skill",
    "slug": "uzi-skill",
    "detailUrl": "../skills/uzi-skill.html"
  },
  {
    "name": "股票数据接口",
    "team": "zhangxiangliang",
    "cat": "金融",
    "desc": "为 AI Agent 提供 A股/港股/美股行情与基本面数据接口",
    "url": "https://github.com/zhangxiangliang/stock-api",
    "slug": "stock-api",
    "detailUrl": "../skills/stock-api.html"
  },
  {
    "name": "Vibe-Trading交易代理",
    "team": "HKUDS (香港大学数据科学研究院)",
    "cat": "金融",
    "desc": "HKUDS 开源的 AI 个人交易代理，覆盖多市场数据、因子研究、回测与模拟交易，内置 75+ 技能",
    "url": "https://github.com/HKUDS/Vibe-Trading",
    "slug": "vibe-trading",
    "detailUrl": "../skills/vibe-trading.html"
  },
  {
    "name": "crawl4ai网页抓取",
    "team": "unclecode",
    "cat": "数据分析",
    "desc": "开源的 LLM 友好网页爬虫，异步抓取并输出结构化、AI 就绪的数据",
    "url": "https://github.com/unclecode/crawl4ai",
    "slug": "crawl4ai",
    "detailUrl": "../skills/crawl4ai.html"
  },
  {
    "name": "crawlee爬虫库",
    "team": "Apify",
    "cat": "数据分析",
    "desc": "Apify 出品的网页抓取与浏览器自动化库，支持 JS/Python，内置反爬与存储",
    "url": "https://github.com/apify/crawlee",
    "slug": "crawlee",
    "detailUrl": "../skills/crawlee.html"
  },
  {
    "name": "Scrapy爬虫框架",
    "team": "Scrapy",
    "cat": "数据分析",
    "desc": "Python 高性能开源爬虫框架，适合大规模结构化数据抓取",
    "url": "https://github.com/scrapy/scrapy",
    "slug": "scrapy",
    "detailUrl": "../skills/scrapy.html"
  },
  {
    "name": "Scrapling反爬爬虫",
    "team": "D4Vinci",
    "cat": "数据分析",
    "desc": "进阶网页抓取库，自带反爬绕过与指纹伪装，适配动态页面",
    "url": "https://github.com/D4Vinci/Scrapling",
    "slug": "scrapling",
    "detailUrl": "../skills/scrapling.html"
  },
  {
    "name": "AutoScraper智能爬虫",
    "team": "alirezamika",
    "cat": "数据分析",
    "desc": "极简智能爬虫，给定示例即可自动学习抓取规则，无需写选择器",
    "url": "https://github.com/alirezamika/autoscraper",
    "slug": "autoscraper",
    "detailUrl": "../skills/autoscraper.html"
  },
  {
    "name": "curl-impersonate指纹伪装",
    "team": "lwthiker",
    "cat": "数据分析",
    "desc": "带真实浏览器指纹伪装（TLS/JA3）的 curl，用于绕过反爬检测",
    "url": "https://github.com/lwthiker/curl-impersonate",
    "slug": "curl-impersonate",
    "detailUrl": "../skills/curl-impersonate.html"
  },
  {
    "name": "MoneyPrinterTurbo视频生成",
    "team": "harry0703",
    "cat": "视频",
    "desc": "输入主题自动生成短视频：AI 写脚本、配音、字幕、素材，一键产出",
    "url": "https://github.com/harry0703/MoneyPrinterTurbo",
    "slug": "money-printer-turbo",
    "detailUrl": "../skills/money-printer-turbo.html"
  },
  {
    "name": "品牌设计Skill",
    "team": "ziguishian",
    "cat": "设计",
    "desc": "以图像为先的 Codex 品牌设计 Skill，对话式澄清需求、探索 Logo、输出 VI 规范与 HTML 品牌手册",
    "url": "https://github.com/ziguishian/brand-design-skill",
    "slug": "brand-design-skill",
    "detailUrl": "../skills/brand-design-skill.html"
  },
  {
    "name": "赛博风PPT生成",
    "team": "crazyykhllc-bit",
    "cat": "创意设计",
    "desc": "用 AI 生成赛博朋克风格的 PPT 演示文稿",
    "url": "https://github.com/crazyykhllc-bit/CyberPPT",
    "slug": "cyberppt",
    "detailUrl": "../skills/cyberppt.html"
  },
  {
    "name": "小黑怪诞正文配图",
    "team": "helloianneo (Ian)",
    "cat": "创意设计",
    "desc": "为中文文章生成 16:9 白底手绘「小黑」怪诞正文配图，少量红橙蓝中文批注",
    "url": "https://github.com/helloianneo/ian-xiaohei-illustrations",
    "slug": "ian-xiaohei-illustrations",
    "detailUrl": "../skills/ian-xiaohei-illustrations.html"
  },
  {
    "name": "MarkItDown文档转MD",
    "team": "Microsoft",
    "cat": "文档处理",
    "desc": "微软出品的文件转 Markdown 工具，支持 PDF、Word、Excel、图片等批量转换",
    "url": "https://github.com/microsoft/markitdown",
    "slug": "markitdown",
    "detailUrl": "../skills/markitdown.html"
  },
  {
    "name": "scrcpy安卓投屏",
    "team": "Genymobile",
    "cat": "移动开发",
    "desc": "在电脑上显示并操控安卓设备，支持投屏、录屏、键鼠控制",
    "url": "https://github.com/Genymobile/scrcpy",
    "slug": "scrcpy",
    "detailUrl": "../skills/scrcpy.html"
  },
  {
    "name": "微信公众号文章导出",
    "team": "wechat-article",
    "cat": "内容管理",
    "desc": "一键导出微信公众号文章为 Markdown/HTML，保留排版与图片",
    "url": "https://github.com/wechat-article/wechat-article-exporter",
    "slug": "wechat-article-exporter",
    "detailUrl": "../skills/wechat-article-exporter.html"
  },
  {
    "name": "近30天中文舆情检索",
    "team": "Jesseovo",
    "cat": "搜索",
    "desc": "自动检索微博、小红书、B站、知乎等 8 大中文平台近 30 天内容，生成有据可查的研究报告",
    "url": "https://github.com/Jesseovo/last30days-skill-cn",
    "slug": "last30days-skill-cn",
    "detailUrl": "../skills/last30days-skill-cn.html"
  },
  {
    "name": "设计类Markdown技能合集",
    "team": "VoltAgent",
    "cat": "资源合集",
    "desc": "精选设计类 Markdown 技能合集，覆盖 UI、品牌、设计系统等多种场景",
    "url": "https://github.com/VoltAgent/awesome-design-md",
    "slug": "awesome-design-md",
    "detailUrl": "../skills/awesome-design-md.html"
  },
  {
    "name": "极简创业Claude技能合集",
    "team": "slavingia",
    "cat": "资源合集",
    "desc": "《极简创业家》作者 Sahil Lavingia 开源的 Claude Code 技能合集，覆盖独立开发全流程",
    "url": "https://github.com/slavingia/skills",
    "slug": "minimalist-entrepreneur-skills",
    "detailUrl": "../skills/minimalist-entrepreneur-skills.html"
  }
];
