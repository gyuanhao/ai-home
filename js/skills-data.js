/**
 * AI Agent Skills Hub — 技能包数据中心
 * 数据来源:
 *   - VoltAgent/awesome-agent-skills (1497+ 官方+社区技能)
 *   - anbeime/skill (208 本地+社区技能)
 * 包含团队: Anthropic / OpenAI / MiniMax / Vercel / Cloudflare / Google / Google Workspace / Microsoft / Meta / Stripe / HuggingFace / Sentry / Expo / Netlify / Figma / Trail of Bits / Firebase / WordPress / Apollo / Coinbase / Binance / Auth0 / Brave / fal.ai / ClickHouse / DuckDB / Remotion / Replicate / GSAP / Redis / NVIDIA / MongoDB / Flutter / Angular / Notion / Browserbase / CodeRabbit / Datadog / Tinybird / Firecrawl / Sanity / Neon / Composio / Typefully / Resend / Terraform / VoltAgent / CallStack / BetterAuth / Courier / Zero / Venice.ai / Addy Osmani / Garry Tan / TestMu AI / Corey Haines / Kim Barrett / anbeime 等
 * 最后更新: 2026-07-13（新增 25 个社区精选技能）
 */

const skillsData = [
  // ===================== VoltAgent 官方团队技能 =====================

  // --- Anthropic (Claude) --- 17 skills
  { name:"docx", nameZh:"Word文档处理", desc:"Create, edit, and analyze Word documents", descZh:"创建、编辑和分析 Word 文档", team:"Anthropic", source:"voltagent", cat:"文档处理", url:"https://github.com/anthropics/skills/tree/main/skills/docx" },
  { name:"doc-coauthoring", nameZh:"文档协作", desc:"Collaborative document editing and co-authoring", descZh:"协作文档编辑与合著", team:"Anthropic", source:"voltagent", cat:"文档处理", url:"https://github.com/anthropics/skills/tree/main/skills/doc-coauthoring" },
  { name:"pptx", nameZh:"PPT处理", desc:"Create, edit, and analyze PowerPoint presentations", descZh:"创建、编辑和分析 PPT 演示文稿", team:"Anthropic", source:"voltagent", cat:"文档处理", url:"https://github.com/anthropics/skills/tree/main/skills/pptx" },
  { name:"xlsx", nameZh:"Excel处理", desc:"Create, edit, and analyze Excel spreadsheets", descZh:"创建、编辑和分析 Excel 表格", team:"Anthropic", source:"voltagent", cat:"文档处理", url:"https://github.com/anthropics/skills/tree/main/skills/xlsx" },
  { name:"pdf", nameZh:"PDF处理", desc:"Extract text, create PDFs, and handle forms", descZh:"提取文本、创建PDF、处理表单", team:"Anthropic", source:"voltagent", cat:"文档处理", url:"https://github.com/anthropics/skills/tree/main/skills/pdf" },
  { name:"algorithmic-art", nameZh:"算法艺术", desc:"Create generative art using p5.js with seeded randomness", descZh:"使用 p5.js 创建带种子的生成艺术", team:"Anthropic", source:"voltagent", cat:"创意设计", url:"https://github.com/anthropics/skills/tree/main/skills/algorithmic-art" },
  { name:"canvas-design", nameZh:"画布设计", desc:"Design visual art in PNG and PDF formats", descZh:"设计 PNG 和 PDF 格式的视觉艺术", team:"Anthropic", source:"voltagent", cat:"创意设计", url:"https://github.com/anthropics/skills/tree/main/skills/canvas-design" },
  { name:"frontend-design", nameZh:"前端设计", desc:"Frontend design and UI/UX development tools", descZh:"前端设计和 UI/UX 开发工具", team:"Anthropic", source:"voltagent", cat:"前端开发", url:"https://github.com/anthropics/skills/tree/main/skills/frontend-design" },
  { name:"slack-gif-creator", nameZh:"Slack GIF", desc:"Create animated GIFs optimized for Slack size constraints", descZh:"创建适配 Slack 尺寸的动画 GIF", team:"Anthropic", source:"voltagent", cat:"创意设计", url:"https://github.com/anthropics/skills/tree/main/skills/slack-gif-creator" },
  { name:"theme-factory", nameZh:"主题工厂", desc:"Style artifacts with professional themes or generate custom themes", descZh:"为制品应用专业主题或生成自定义主题", team:"Anthropic", source:"voltagent", cat:"前端开发", url:"https://github.com/anthropics/skills/tree/main/skills/theme-factory" },
  { name:"web-artifacts-builder", nameZh:"Web组件构建", desc:"Build complex claude.ai HTML artifacts with React and Tailwind", descZh:"用 React 和 Tailwind 构建复杂的 claude.ai HTML 制品", team:"Anthropic", source:"voltagent", cat:"前端开发", url:"https://github.com/anthropics/skills/tree/main/skills/web-artifacts-builder" },
  { name:"mcp-builder", nameZh:"MCP构建器", desc:"Create MCP servers to integrate external APIs and services", descZh:"创建 MCP 服务器以集成外部 API 和服务", team:"Anthropic", source:"voltagent", cat:"开发工具", url:"https://github.com/anthropics/skills/tree/main/skills/mcp-builder" },
  { name:"webapp-testing", nameZh:"Web测试", desc:"Test local web applications using Playwright", descZh:"使用 Playwright 测试本地 Web 应用", team:"Anthropic", source:"voltagent", cat:"测试", url:"https://github.com/anthropics/skills/tree/main/skills/webapp-testing" },
  { name:"brand-guidelines", nameZh:"品牌规范", desc:"Apply Anthropic's brand colors and typography to artifacts", descZh:"将 Anthropic 品牌配色和排版应用到制品", team:"Anthropic", source:"voltagent", cat:"创意设计", url:"https://github.com/anthropics/skills/tree/main/skills/brand-guidelines" },
  { name:"internal-comms", nameZh:"内部通讯", desc:"Write status reports, newsletters, and FAQs", descZh:"撰写状态报告、通讯和常见问题", team:"Anthropic", source:"voltagent", cat:"内容创作", url:"https://github.com/anthropics/skills/tree/main/skills/internal-comms" },
  { name:"skill-creator", nameZh:"技能创建器", desc:"Guide for creating skills that extend Claude's capabilities", descZh:"创建扩展 Claude 能力的技能指南", team:"Anthropic", source:"voltagent", cat:"开发工具", url:"https://github.com/anthropics/skills/tree/main/skills/skill-creator" },
  { name:"template", nameZh:"模板", desc:"Basic template for creating new skills", descZh:"创建新技能的基础模板", team:"Anthropic", source:"voltagent", cat:"开发工具", url:"https://github.com/anthropics/skills/tree/main/skills/template" },

  // --- OpenAI --- 精选技能
  { name:"codex-cli", nameZh:"Codex CLI", desc:"OpenAI's coding agent CLI with multi-model support", descZh:"OpenAI 的编程代理 CLI，支持多模型", team:"OpenAI", source:"voltagent", cat:"开发工具", url:"https://github.com/openai/codex" },
  { name:"openai-docs", nameZh:"OpenAI文档", desc:"Provide authoritative guidance from OpenAI developer documentation", descZh:"从 OpenAI 开发者文档提供权威指导", team:"OpenAI", source:"voltagent", cat:"AI/ML", url:"https://github.com/openai/skills" },
  { name:"imagegen", nameZh:"图像生成", desc:"Generate and edit images using OpenAI's Image API", descZh:"使用 OpenAI 图像 API 生成和编辑图像", team:"OpenAI", source:"voltagent", cat:"图像", url:"https://github.com/openai/skills" },
  { name:"sora", nameZh:"Sora视频", desc:"Generate, remix, and manage short video clips via OpenAI's Sora API", descZh:"通过 OpenAI Sora API 生成、混剪和管理短视频", team:"OpenAI", source:"voltagent", cat:"视频", url:"https://github.com/openai/skills" },
  { name:"speech", nameZh:"语音合成", desc:"Generate spoken audio from text using OpenAI's API", descZh:"使用 OpenAI API 从文本生成语音", team:"OpenAI", source:"voltagent", cat:"语音", url:"https://github.com/openai/skills" },
  { name:"transcribe", nameZh:"语音转文字", desc:"Transcribe audio files to text with optional speaker diarization", descZh:"将音频文件转录为文字，支持说话人分离", team:"OpenAI", source:"voltagent", cat:"语音", url:"https://github.com/openai/skills" },
  { name:"playwright", nameZh:"浏览器自动化", desc:"Automate real browser interactions for navigation, forms, and scraping", descZh:"自动化真实浏览器交互：导航、填表、抓取", team:"OpenAI", source:"voltagent", cat:"测试", url:"https://github.com/openai/skills" },
  { name:"cloudflare-deploy", nameZh:"Cloudflare部署", desc:"Deploy apps to Cloudflare using Workers, Pages, and platform services", descZh:"使用 Workers、Pages 和平台服务部署应用到 Cloudflare", team:"OpenAI", source:"voltagent", cat:"部署", url:"https://github.com/openai/skills" },
  { name:"vercel-deploy", nameZh:"Vercel部署", desc:"Deploy applications and websites to Vercel", descZh:"部署应用和网站到 Vercel", team:"OpenAI", source:"voltagent", cat:"部署", url:"https://github.com/openai/skills" },
  { name:"netlify-deploy", nameZh:"Netlify部署", desc:"Automate Netlify deployments with CLI auth and linking", descZh:"通过 CLI 认证和链接自动化 Netlify 部署", team:"OpenAI", source:"voltagent", cat:"部署", url:"https://github.com/openai/skills" },
  { name:"chatgpt-apps", nameZh:"ChatGPT应用", desc:"Build ChatGPT Apps SDK apps with MCP server and widget UI", descZh:"用 MCP 服务器和 Widget UI 构建 ChatGPT Apps SDK 应用", team:"OpenAI", source:"voltagent", cat:"开发工具", url:"https://github.com/openai/skills" },
  { name:"figma-implement-design", nameZh:"Figma转代码", desc:"Translate Figma designs into production-ready code", descZh:"将 Figma 设计转化为生产就绪代码", team:"OpenAI", source:"voltagent", cat:"前端开发", url:"https://github.com/openai/skills" },

  // --- Vercel ---
  { name:"next-best-practices", nameZh:"Next.js最佳实践", desc:"Next.js best practices and recommended patterns", descZh:"Next.js 最佳实践和推荐模式", team:"Vercel", source:"voltagent", cat:"前端开发", url:"https://github.com/vercel-labs/skills" },
  { name:"next-cache-components", nameZh:"Next.js缓存", desc:"Caching strategies and cache-aware components in Next.js", descZh:"Next.js 的缓存策略和缓存感知组件", team:"Vercel", source:"voltagent", cat:"前端开发", url:"https://github.com/vercel-labs/skills" },
  { name:"next-upgrade", nameZh:"Next.js升级", desc:"Upgrade Next.js projects to newer versions", descZh:"将 Next.js 项目升级到新版本", team:"Vercel", source:"voltagent", cat:"前端开发", url:"https://github.com/vercel-labs/skills" },

  // --- Cloudflare ---
  { name:"agents-sdk", nameZh:"Agents SDK", desc:"Build stateful AI agents with scheduling, RPC, and MCP servers on Cloudflare", descZh:"在 Cloudflare 上构建带调度、RPC 和 MCP 的有状态 AI 代理", team:"Cloudflare", source:"voltagent", cat:"AI/ML", url:"https://github.com/cloudflare/skills" },
  { name:"workers-best-practices", nameZh:"Workers最佳实践", desc:"Review and author Workers code against production best practices", descZh:"按生产最佳实践审查和编写 Workers 代码", team:"Cloudflare", source:"voltagent", cat:"后端开发", url:"https://github.com/cloudflare/skills" },
  { name:"wrangler", nameZh:"Wrangler部署", desc:"Deploy and manage Workers, KV, R2, D1, Vectorize, Queues", descZh:"部署和管理 Workers、KV、R2、D1、Vectorize、Queues", team:"Cloudflare", source:"voltagent", cat:"部署", url:"https://github.com/cloudflare/skills" },
  { name:"durable-objects", nameZh:"Durable Objects", desc:"Stateful coordination with RPC, SQLite, and WebSockets", descZh:"通过 RPC、SQLite 和 WebSocket 实现有状态协调", team:"Cloudflare", source:"voltagent", cat:"后端开发", url:"https://github.com/cloudflare/skills" },
  { name:"web-perf", nameZh:"Web性能审计", desc:"Audit Core Web Vitals and render-blocking resources", descZh:"审计 Core Web Vitals 和渲染阻塞资源", team:"Cloudflare", source:"voltagent", cat:"前端开发", url:"https://github.com/cloudflare/skills" },
  { name:"sandbox-sdk", nameZh:"沙箱SDK", desc:"Build sandboxed applications for secure, isolated code execution", descZh:"构建沙箱化应用以实现安全隔离的代码执行", team:"Cloudflare", source:"voltagent", cat:"安全", url:"https://github.com/cloudflare/skills" },

  // --- Google ---
  { name:"gemini-api-dev", nameZh:"Gemini API开发", desc:"Best practices for developing Gemini-powered apps", descZh:"开发 Gemini 驱动应用的最佳实践", team:"Google Gemini", source:"voltagent", cat:"AI/ML", url:"https://github.com/google-gemini/skills" },
  { name:"gemini-live-api-dev", nameZh:"Gemini实时API", desc:"Building real-time bidirectional streaming apps with Gemini Live API", descZh:"用 Gemini Live API 构建实时双向流应用", team:"Google Gemini", source:"voltagent", cat:"AI/ML", url:"https://github.com/google-gemini/skills" },
  { name:"design-md", nameZh:"设计文档", desc:"Create and manage DESIGN.md files with Google Stitch", descZh:"用 Google Stitch 创建和管理 DESIGN.md 文件", team:"Google Labs", source:"voltagent", cat:"开发工具", url:"https://github.com/google-labs-code/skills" },
  { name:"shadcn-ui", nameZh:"shadcn/ui组件", desc:"Build UI components with shadcn/ui", descZh:"用 shadcn/ui 构建 UI 组件", team:"Google Labs", source:"voltagent", cat:"前端开发", url:"https://github.com/google-labs-code/skills" },

  // --- Stripe ---
  { name:"stripe-best-practices", nameZh:"Stripe最佳实践", desc:"Best practices for building Stripe integrations", descZh:"构建 Stripe 集成的最佳实践", team:"Stripe", source:"voltagent", cat:"后端开发", url:"https://github.com/stripe/skills" },
  { name:"upgrade-stripe", nameZh:"Stripe升级", desc:"Upgrade Stripe SDK and API versions", descZh:"升级 Stripe SDK 和 API 版本", team:"Stripe", source:"voltagent", cat:"后端开发", url:"https://github.com/stripe/skills" },

  // --- Hugging Face ---
  { name:"hugging-face-model-trainer", nameZh:"模型训练", desc:"Train models with TRL: SFT, DPO, GRPO, GGUF conversion", descZh:"使用 TRL 训练模型：SFT、DPO、GRPO、GGUF 转换", team:"Hugging Face", source:"voltagent", cat:"AI/ML", url:"https://github.com/huggingface/skills" },
  { name:"transformers.js", nameZh:"浏览器ML", desc:"Run ML models in the browser with Transformers.js", descZh:"用 Transformers.js 在浏览器中运行 ML 模型", team:"Hugging Face", source:"voltagent", cat:"AI/ML", url:"https://github.com/huggingface/skills" },
  { name:"huggingface-gradio", nameZh:"Gradio应用", desc:"Build Gradio apps and deploy to HF Spaces", descZh:"构建 Gradio 应用并部署到 HF Spaces", team:"Hugging Face", source:"voltagent", cat:"AI/ML", url:"https://github.com/huggingface/skills" },
  { name:"hugging-face-datasets", nameZh:"数据集管理", desc:"Create and manage datasets with configs and SQL querying", descZh:"通过配置和 SQL 查询创建并管理数据集", team:"Hugging Face", source:"voltagent", cat:"AI/ML", url:"https://github.com/huggingface/skills" },
  { name:"hugging-face-evaluation", nameZh:"模型评估", desc:"Model evaluation with vLLM/lighteval and eval tables", descZh:"使用 vLLM/lighteval 和评估表进行模型评估", team:"Hugging Face", source:"voltagent", cat:"AI/ML", url:"https://github.com/huggingface/skills" },
  { name:"hugging-face-vision-trainer", nameZh:"视觉模型训练", desc:"Train vision models on HF infrastructure", descZh:"在 HF 基础设施上训练视觉模型", team:"Hugging Face", source:"voltagent", cat:"AI/ML", url:"https://github.com/huggingface/skills" },

  // --- Sentry ---
  { name:"sentry-sdk-setup", nameZh:"Sentry SDK安装", desc:"Set up Sentry in any language or framework", descZh:"在任何语言或框架中设置 Sentry", team:"Sentry", source:"voltagent", cat:"监控", url:"https://github.com/getsentry/skills" },
  { name:"sentry-fix-issues", nameZh:"Sentry问题修复", desc:"Find and fix Sentry issues with stack trace and trace context", descZh:"通过堆栈追踪和跟踪上下文查找并修复 Sentry 问题", team:"Sentry", source:"voltagent", cat:"监控", url:"https://github.com/getsentry/skills" },
  { name:"sentry-code-review", nameZh:"Sentry代码审查", desc:"Review code changes using Sentry issue and trace context", descZh:"使用 Sentry 问题和跟踪上下文审查代码变更", team:"Sentry", source:"voltagent", cat:"监控", url:"https://github.com/getsentry/skills" },
  { name:"sentry-setup-ai-monitoring", nameZh:"AI监控", desc:"Instrument OpenAI, Anthropic, Vercel AI, LangChain for monitoring", descZh:"为 OpenAI、Anthropic、Vercel AI、LangChain 添加监控", team:"Sentry", source:"voltagent", cat:"AI/ML", url:"https://github.com/getsentry/skills" },

  // --- Expo ---
  { name:"building-native-ui", nameZh:"原生UI构建", desc:"Build apps with Expo Router, styling, components, navigation, animations", descZh:"用 Expo Router 构建应用：样式、组件、导航、动画", team:"Expo", source:"voltagent", cat:"移动开发", url:"https://github.com/expo/skills" },
  { name:"expo-deployment", nameZh:"Expo部署", desc:"Deploy Expo apps to production", descZh:"将 Expo 应用部署到生产环境", team:"Expo", source:"voltagent", cat:"移动开发", url:"https://github.com/expo/skills" },
  { name:"expo-tailwind-setup", nameZh:"Expo+Tailwind", desc:"Set up Tailwind CSS v4 in Expo with NativeWind v5", descZh:"用 NativeWind v5 在 Expo 中配置 Tailwind CSS v4", team:"Expo", source:"voltagent", cat:"移动开发", url:"https://github.com/expo/skills" },

  // --- Netlify ---
  { name:"netlify-functions", nameZh:"Netlify函数", desc:"Build serverless API endpoints and background tasks", descZh:"构建无服务器 API 端点和后台任务", team:"Netlify", source:"voltagent", cat:"后端开发", url:"https://github.com/netlify/skills" },
  { name:"netlify-edge-functions", nameZh:"边缘函数", desc:"Low-latency edge middleware and geolocation logic", descZh:"低延迟边缘中间件和地理定位逻辑", team:"Netlify", source:"voltagent", cat:"后端开发", url:"https://github.com/netlify/skills" },
  { name:"netlify-ai-gateway", nameZh:"AI网关", desc:"Access AI models via unified gateway endpoint", descZh:"通过统一网关端点访问 AI 模型", team:"Netlify", source:"voltagent", cat:"AI/ML", url:"https://github.com/netlify/skills" },

  // --- Supabase ---
  { name:"postgres-best-practices", nameZh:"PostgreSQL最佳实践", desc:"PostgreSQL best practices for Supabase", descZh:"Supabase 的 PostgreSQL 最佳实践", team:"Supabase", source:"voltagent", cat:"数据库", url:"https://github.com/supabase/skills" },

  // --- Figma ---
  { name:"figma-code-connect", nameZh:"Figma代码连接", desc:"Connect Figma design components to code components", descZh:"将 Figma 设计组件连接到代码组件", team:"Figma", source:"voltagent", cat:"设计", url:"https://github.com/figma/skills" },
  { name:"figma-generate-design", nameZh:"Figma生成设计", desc:"Build or update screens in Figma from code or description", descZh:"从代码或描述在 Figma 中构建或更新界面", team:"Figma", source:"voltagent", cat:"设计", url:"https://github.com/figma/skills" },
  { name:"figma-implement-design", nameZh:"Figma实现设计", desc:"Translate Figma designs into production-ready application code", descZh:"【Figma实现设计】Translate Figma designs into production-", team:"Figma", source:"voltagent", cat:"前端开发", url:"https://github.com/figma/skills" },

  // --- Trail of Bits (Security) ---
  { name:"building-secure-contracts", nameZh:"安全合约构建", desc:"Smart contract security toolkit with vulnerability scanners for 6 blockchains", descZh:"智能合约安全工具包，支持 6 条链的漏洞扫描", team:"Trail of Bits", source:"voltagent", cat:"安全", url:"https://github.com/trailofbits/skills" },
  { name:"semgrep-rule-creator", nameZh:"Semgrep规则", desc:"Create and refine Semgrep rules for vulnerability detection", descZh:"创建和优化 Semgrep 规则用于漏洞检测", team:"Trail of Bits", source:"voltagent", cat:"安全", url:"https://github.com/trailofbits/skills" },
  { name:"static-analysis", nameZh:"静态分析", desc:"Static analysis toolkit with CodeQL, Semgrep, and SARIF", descZh:"静态分析工具包：CodeQL、Semgrep、SARIF", team:"Trail of Bits", source:"voltagent", cat:"安全", url:"https://github.com/trailofbits/skills" },
  { name:"variant-analysis", nameZh:"变体分析", desc:"Find similar vulnerabilities via pattern-based analysis", descZh:"通过基于模式的分析查找相似漏洞", team:"Trail of Bits", source:"voltagent", cat:"安全", url:"https://github.com/trailofbits/skills" },
  { name:"property-based-testing", nameZh:"属性测试", desc:"Property-based testing for multiple languages and smart contracts", descZh:"多语言和智能合约的属性测试", team:"Trail of Bits", source:"voltagent", cat:"测试", url:"https://github.com/trailofbits/skills" },

  // --- Firebase ---
  { name:"firebase-auth-basics", nameZh:"Firebase认证", desc:"Set up Firebase Authentication with sign-in providers", descZh:"配置 Firebase 认证和登录提供商", team:"Firebase", source:"voltagent", cat:"后端开发", url:"https://github.com/firebase/skills" },
  { name:"firebase-firestore-standard", nameZh:"Firestore指南", desc:"Complete guide for Cloud Firestore Standard Edition", descZh:"Cloud Firestore 标准版完整指南", team:"Firebase", source:"voltagent", cat:"数据库", url:"https://github.com/firebase/skills" },
  { name:"developing-genkit-js", nameZh:"Genkit JS", desc:"Build AI-powered apps with Firebase Genkit in Node.js", descZh:"用 Firebase Genkit 在 Node.js 中构建 AI 驱动应用", team:"Firebase", source:"voltagent", cat:"AI/ML", url:"https://github.com/firebase/skills" },
  { name:"firebase-security-rules-auditor", nameZh:"安全规则审计", desc:"Audit Firestore security rules and flag risky patterns", descZh:"审计 Firestore 安全规则并标记风险模式", team:"Firebase", source:"voltagent", cat:"安全", url:"https://github.com/firebase/skills" },

  // --- Microsoft Azure ---
  { name:"cloud-solution-architect", nameZh:"云架构设计", desc:"Design well-architected Azure cloud systems", descZh:"设计架构良好的 Azure 云系统", team:"Microsoft", source:"voltagent", cat:"云服务", url:"https://github.com/microsoft/skills" },
  { name:"copilot-sdk", nameZh:"Copilot SDK", desc:"Build applications powered by GitHub Copilot SDK", descZh:"用 GitHub Copilot SDK 构建应用", team:"Microsoft", source:"voltagent", cat:"开发工具", url:"https://github.com/microsoft/skills" },
  { name:"entra-agent-id", nameZh:"Entra身份认证", desc:"Microsoft Entra Agent ID OAuth2 identities via Graph API", descZh:"通过 Graph API 实现 Microsoft Entra Agent ID OAuth2 身份认证", team:"Microsoft", source:"voltagent", cat:"安全", url:"https://github.com/microsoft/skills" },
  { name:"azure-ai-openai-dotnet", nameZh:"Azure OpenAI .NET", desc:"GPT-4, embeddings, DALL-E, and Whisper client for .NET", descZh:"适用于 .NET 的 GPT-4、嵌入、DALL-E 和 Whisper 客户端", team:"Microsoft", source:"voltagent", cat:"AI/ML", url:"https://github.com/microsoft/skills" },
  { name:"azure-ai-projects-py", nameZh:"Azure AI项目", desc:"AI Foundry project client and agents for Python", descZh:"适用于 Python 的 AI Foundry 项目客户端和代理", team:"Microsoft", source:"voltagent", cat:"AI/ML", url:"https://github.com/microsoft/skills" },
  { name:"agent-framework-azure-ai-py", nameZh:"Agent框架", desc:"Agent Framework for Azure AI Foundry", descZh:"Azure AI Foundry 的代理框架", team:"Microsoft", source:"voltagent", cat:"AI/ML", url:"https://github.com/microsoft/skills" },
  { name:"azure-identity-ts", nameZh:"Azure身份认证TS", desc:"Microsoft Entra ID authentication for TypeScript", descZh:"适用于 TypeScript 的 Microsoft Entra ID 认证", team:"Microsoft", source:"voltagent", cat:"安全", url:"https://github.com/microsoft/skills" },
  { name:"azure-search-documents-py", nameZh:"Azure搜索", desc:"Full-text, vector, and hybrid search for Python", descZh:"Python 全文、向量和混合搜索", team:"Microsoft", source:"voltagent", cat:"AI/ML", url:"https://github.com/microsoft/skills" },

  // --- WordPress ---
  { name:"wp-block-development", nameZh:"WP区块开发", desc:"Gutenberg blocks: block.json, attributes, rendering, deprecations", descZh:"Gutenberg 区块：block.json、属性、渲染、弃用管理", team:"WordPress", source:"voltagent", cat:"前端开发", url:"https://github.com/WordPress/skills" },
  { name:"wp-plugin-development", nameZh:"WP插件开发", desc:"Plugin architecture, hooks, settings API, security", descZh:"插件架构、钩子、设置 API、安全", team:"WordPress", source:"voltagent", cat:"后端开发", url:"https://github.com/WordPress/skills" },
  { name:"wp-rest-api", nameZh:"WP REST API", desc:"REST API routes/endpoints, schema, auth, and response shaping", descZh:"REST API 路由/端点、Schema、认证和响应整形", team:"WordPress", source:"voltagent", cat:"后端开发", url:"https://github.com/WordPress/skills" },

  // --- Apollo GraphQL ---
  { name:"apollo-client", nameZh:"Apollo客户端", desc:"Build React applications with Apollo Client 4", descZh:"用 Apollo Client 4 构建 React 应用", team:"Apollo GraphQL", source:"voltagent", cat:"前端开发", url:"https://github.com/apollographql/skills" },
  { name:"apollo-federation", nameZh:"Apollo联邦", desc:"Write Apollo Federation 2 subgraph schemas and compose supergraph", descZh:"编写 Apollo Federation 2 子图 Schema 并组合超级图", team:"Apollo GraphQL", source:"voltagent", cat:"后端开发", url:"https://github.com/apollographql/skills" },
  { name:"apollo-mcp-server", nameZh:"GraphQL MCP", desc:"Connect AI agents to GraphQL APIs through MCP", descZh:"通过 MCP 连接 AI 代理到 GraphQL API", team:"Apollo GraphQL", source:"voltagent", cat:"AI/ML", url:"https://github.com/apollographql/skills" },

  // --- Coinbase ---
  { name:"query-onchain-data", nameZh:"链上数据查询", desc:"Query decoded onchain data (events, tx, blocks) on Base", descZh:"在 Base 链上查询解码后的链上数据（事件、交易、区块）", team:"Coinbase", source:"voltagent", cat:"Web3", url:"https://github.com/coinbase/skills" },
  { name:"send-usdc", nameZh:"USDC转账", desc:"Send USDC to any Ethereum address or ENS name on Base", descZh:"在 Base 链上将 USDC 发送到任意以太坊地址或 ENS 名称", team:"Coinbase", source:"voltagent", cat:"Web3", url:"https://github.com/coinbase/skills" },
  { name:"trade", nameZh:"代币交易", desc:"Swap and trade tokens on Base using the CDP Swap API", descZh:"使用 CDP Swap API 在 Base 链上交换和交易代币", team:"Coinbase", source:"voltagent", cat:"Web3", url:"https://github.com/coinbase/skills" },
  { name:"monetize-service", nameZh:"API变现", desc:"Scaffold an Express server that charges USDC per request using x402", descZh:"搭建按请求收取 USDC 的 Express 服务器（x402协议）", team:"Coinbase", source:"voltagent", cat:"Web3", url:"https://github.com/coinbase/skills" },

  // --- Binance ---
  { name:"crypto-market-rank", nameZh:"加密市场排行", desc:"Query crypto market rankings including trending tokens and smart money", descZh:"查询加密市场排行：热门代币和聪明钱", team:"Binance", source:"voltagent", cat:"Web3", url:"https://github.com/binance/skills" },
  { name:"query-token-audit", nameZh:"代币安全审计", desc:"Audit token security to detect scams, honeypots, and malicious contracts", descZh:"审计代币安全以检测骗局、蜜罐和恶意合约", team:"Binance", source:"voltagent", cat:"安全", url:"https://github.com/binance/skills" },
  { name:"spot", nameZh:"现货交易", desc:"Place and manage spot trading orders on Binance via API", descZh:"通过 API 在 Binance 上管理现货交易订单", team:"Binance", source:"voltagent", cat:"Web3", url:"https://github.com/binance/skills" },
  { name:"trading-signal", nameZh:"交易信号", desc:"Monitor on-chain Smart Money buy/sell signals", descZh:"监控链上聪明钱买入/卖出信号", team:"Binance", source:"voltagent", cat:"Web3", url:"https://github.com/binance/skills" },

  // --- Auth0 ---
  { name:"auth0-react", nameZh:"Auth0 React", desc:"Add authentication to React SPAs using @auth0/auth0-react", descZh:"使用 @auth0/auth0-react 为 React SPA 添加认证", team:"Auth0", source:"voltagent", cat:"安全", url:"https://github.com/auth0/skills" },
  { name:"auth0-nextjs", nameZh:"Auth0 Next.js", desc:"Add authentication to Next.js apps", descZh:"为 Next.js 应用添加认证", team:"Auth0", source:"voltagent", cat:"安全", url:"https://github.com/auth0/skills" },
  { name:"auth0-mfa", nameZh:"多因素认证", desc:"Add Multi-Factor Authentication to Auth0-powered apps", descZh:"为 Auth0 驱动的应用添加多因素认证", team:"Auth0", source:"voltagent", cat:"安全", url:"https://github.com/auth0/skills" },

  // --- Brave ---
  { name:"web-search", nameZh:"Brave网页搜索", desc:"Search the web via Brave's Search API with ranked results", descZh:"通过 Brave Search API 搜索网页并返回排序结果", team:"Brave", source:"voltagent", cat:"搜索", url:"https://github.com/brave/skills" },
  { name:"llm-context", nameZh:"LLM上下文", desc:"Return pre-extracted web content for LLM consumption", descZh:"返回预提取的网页内容供 LLM 使用", team:"Brave", source:"voltagent", cat:"AI/ML", url:"https://github.com/brave/skills" },

  // --- fal.ai ---
  { name:"fal-generate", nameZh:"fal图像视频", desc:"Generate images and videos using fal.ai AI models", descZh:"使用 fal.ai AI 模型生成图像和视频", team:"fal.ai", source:"voltagent", cat:"图像", url:"https://github.com/fal-ai-community/skills" },
  { name:"fal-3d", nameZh:"fal 3D模型", desc:"Generate 3D models from text or images", descZh:"从文本或图像生成 3D 模型", team:"fal.ai", source:"voltagent", cat:"3D", url:"https://github.com/fal-ai-community/skills" },
  { name:"fal-train", nameZh:"fal模型训练", desc:"Train custom AI models (LoRA) on fal.ai for personalized generation", descZh:"在 fal.ai 上训练定制 AI 模型（LoRA）实现个性化生成", team:"fal.ai", source:"voltagent", cat:"AI/ML", url:"https://github.com/fal-ai-community/skills" },

  // --- ClickHouse ---
  { name:"clickhouse-best-practices", nameZh:"ClickHouse最佳实践", desc:"Best practices for working with ClickHouse", descZh:"ClickHouse 使用最佳实践", team:"ClickHouse", source:"voltagent", cat:"数据库", url:"https://github.com/clickhouse/skills" },
  { name:"chdb-datastore", nameZh:"chDB数据存储", desc:"Drop-in pandas replacement with ClickHouse performance", descZh:"借助 ClickHouse 性能的 pandas 替代方案", team:"ClickHouse", source:"voltagent", cat:"数据库", url:"https://github.com/clickhouse/skills" },

  // --- Marketing (Corey Haines) ---
  { name:"ai-seo", nameZh:"AI SEO优化", desc:"Optimize content to appear in AI-generated answers and LLM search results", descZh:"优化内容以出现在 AI 生成答案和 LLM 搜索结果中", team:"Corey Haines", source:"voltagent", cat:"营销", url:"https://github.com/coreyhaines31/marketingskills" },
  { name:"copywriting", nameZh:"营销文案", desc:"Write and rewrite marketing copy for landing pages, homepages, and ads", descZh:"撰写和改写落地页、首页和广告的营销文案", team:"Corey Haines", source:"voltagent", cat:"营销", url:"https://github.com/coreyhaines31/marketingskills" },
  { name:"competitor-alternatives", nameZh:"竞品对比页", desc:"Build competitor comparison and alternative landing pages for SEO", descZh:"为 SEO 构建竞品对比和替代品落地页", team:"Corey Haines", source:"voltagent", cat:"营销", url:"https://github.com/coreyhaines31/marketingskills" },
  { name:"pricing-strategy", nameZh:"定价策略", desc:"Define pricing, packaging, and monetization strategy for SaaS", descZh:"为 SaaS 定义定价、包装和变现策略", team:"Corey Haines", source:"voltagent", cat:"营销", url:"https://github.com/coreyhaines31/marketingskills" },
  { name:"programmatic-seo", nameZh:"程序化SEO", desc:"Build SEO-driven page templates for large-scale content generation", descZh:"构建 SEO 驱动的页面模板用于大规模内容生成", team:"Corey Haines", source:"voltagent", cat:"营销", url:"https://github.com/coreyhaines31/marketingskills" },
  { name:"launch-strategy", nameZh:"发布策略", desc:"Plan product launches, feature announcements, and GTM strategies", descZh:"规划产品发布、功能公告和上市策略", team:"Corey Haines", source:"voltagent", cat:"营销", url:"https://github.com/coreyhaines31/marketingskills" },
  { name:"seo-audit", nameZh:"SEO审计", desc:"Audit and diagnose technical and on-page SEO issues", descZh:"审计和诊断技术性和页面级 SEO 问题", team:"Corey Haines", source:"voltagent", cat:"营销", url:"https://github.com/coreyhaines31/marketingskills" },
  { name:"cold-email", nameZh:"冷邮件", desc:"Write B2B cold emails and follow-up sequences that convert", descZh:"撰写高转化率的 B2B 冷邮件和跟进序列", team:"Corey Haines", source:"voltagent", cat:"营销", url:"https://github.com/coreyhaines31/marketingskills" },
  { name:"referral-program", nameZh:"推荐计划", desc:"Design and optimize referral, affiliate, and word-of-mouth programs", descZh:"设计和优化推荐、联盟和口碑营销计划", team:"Corey Haines", source:"voltagent", cat:"营销", url:"https://github.com/coreyhaines31/marketingskills" },

  // --- Advertising (Kim Barrett) ---
  { name:"scroll-stopping-creative", nameZh:"吸睛广告创意", desc:"Create ad concepts that stop attention in the first 3 seconds", descZh:"创建在前 3 秒抓住注意力的广告概念", team:"Kim Barrett", source:"voltagent", cat:"营销", url:"https://github.com/realkimbarrett/advertising-skills" },
  { name:"headline-matrix", nameZh:"标题矩阵", desc:"Generate high-performing headline variations across different angles", descZh:"从不同角度生成高转化率的标题变体", team:"Kim Barrett", source:"voltagent", cat:"营销", url:"https://github.com/realkimbarrett/advertising-skills" },
  { name:"full-funnel-campaign", nameZh:"全漏斗营销", desc:"Coordinate all skills to build a complete ads+funnel campaign end-to-end", descZh:"协调所有技能构建端到端的广告+漏斗营销活动", team:"Kim Barrett", source:"voltagent", cat:"营销", url:"https://github.com/realkimbarrett/advertising-skills" },

  // --- Remotion ---
  { name:"remotion", nameZh:"Remotion视频", desc:"Programmatic video creation with React", descZh:"用 React 编程式创建视频", team:"Remotion", source:"voltagent", cat:"视频", url:"https://github.com/remotion-dev/skills" },

  // --- Replicate ---
  { name:"replicate", nameZh:"Replicate模型", desc:"Discover, compare, and run AI models using Replicate's API", descZh:"使用 Replicate API 发现、比较和运行 AI 模型", team:"Replicate", source:"voltagent", cat:"AI/ML", url:"https://github.com/replicate/skills" },

  // --- GSAP ---
  { name:"gsap-animation", nameZh:"GSAP动画", desc:"Professional-grade animation library for web development", descZh:"专业级 Web 动效库", team:"GSAP", source:"voltagent", cat:"前端开发", url:"https://github.com/greensock/skills" },

  // --- Redis ---
  { name:"redis-agent-skills", nameZh:"Redis Agent", desc:"Redis agent skills for AI-assisted development with Redis", descZh:"Redis AI 辅助开发代理技能", team:"Redis", source:"voltagent", cat:"数据库", url:"https://github.com/redis/agent-skills" },

  // --- NVIDIA ---
  { name:"nvidia-skills", nameZh:"NVIDIA技能", desc:"NVIDIA AI development skills for GPU-accelerated computing", descZh:"NVIDIA AI 开发技能：GPU 加速计算", team:"NVIDIA", source:"voltagent", cat:"AI/ML", url:"https://github.com/NVIDIA/skills" },

  // --- MongoDB ---
  { name:"mongodb-skills", nameZh:"MongoDB技能", desc:"MongoDB development skills for AI agents", descZh:"MongoDB AI 代理开发技能", team:"MongoDB", source:"voltagent", cat:"数据库", url:"https://github.com/mongodb/skills" },

  // --- Flutter ---
  { name:"flutter-skills", nameZh:"Flutter开发", desc:"Flutter app development skills for AI coding agents", descZh:"Flutter AI 编程代理开发技能", team:"Flutter", source:"voltagent", cat:"移动开发", url:"https://github.com/flutter/skills" },

  // --- Angular ---
  { name:"angular-developer", nameZh:"Angular开发", desc:"Generate Angular code and architectural guidance", descZh:"生成 Angular 代码和架构指导", team:"Angular", source:"voltagent", cat:"前端开发", url:"https://github.com/angular/skills" },

  // --- Notion ---
  { name:"notion-cookbook", nameZh:"Notion技能", desc:"Notion integration skills for AI agents and automation", descZh:"Notion AI 代理和自动化集成技能", team:"Notion", source:"voltagent", cat:"效率工具", url:"https://github.com/makenotion/notion-cookbook" },

  // --- 更多主流团队技能 ---
  { name:"browserbase", nameZh:"云端浏览器", desc:"Managed headless browsers for reliable web automation", descZh:"托管的无头浏览器，用于可靠 Web 自动化", team:"Browserbase", source:"voltagent", cat:"测试", url:"https://github.com/browserbase/skills" },
  { name:"coderabbit", nameZh:"AI代码审查", desc:"AI-powered code review and pull request analysis", descZh:"AI 驱动的代码审查和 PR 分析", team:"CodeRabbit", source:"voltagent", cat:"开发工具", url:"https://github.com/coderabbitai/skills" },
  { name:"datadog-monitoring", nameZh:"Datadog监控", desc:"Observability and monitoring with Datadog", descZh:"Datadog 可观测性和监控", team:"Datadog", source:"voltagent", cat:"监控", url:"https://github.com/DataDog/skills" },
  { name:"tinybird-pipes", nameZh:"Tinybird管道", desc:"Real-time data pipelines and SQL API endpoints", descZh:"实时数据管道和 SQL API 端点", team:"Tinybird", source:"voltagent", cat:"数据分析", url:"https://github.com/tinybirdco/skills" },
  { name:"firecrawl", nameZh:"网页抓取", desc:"Scrape, crawl and search web with AI-ready output", descZh:"网页抓取、爬取和搜索，输出 AI 就绪数据", team:"Firecrawl", source:"voltagent", cat:"数据分析", url:"https://github.com/firecrawl/skills" },
  { name:"sanity-cms", nameZh:"Sanity CMS", desc:"Headless CMS with real-time collaboration", descZh:"支持实时协作的无头 CMS", team:"Sanity", source:"voltagent", cat:"内容管理", url:"https://github.com/sanity-io/skills" },
  { name:"neon-postgres", nameZh:"Neon数据库", desc:"Serverless Postgres with branching", descZh:"支持分支管理的 Serverless Postgres", team:"Neon", source:"voltagent", cat:"数据库", url:"https://github.com/neondatabase/skills" },
  { name:"composio", nameZh:"集成工具", desc:"Connect AI agents with 250+ tools and APIs", descZh:"连接 AI 代理到 250+ 工具和 API", team:"Composio", source:"voltagent", cat:"AI/ML", url:"https://github.com/ComposioHQ/skills" },
  { name:"typefully", nameZh:"社交媒体发布", desc:"Craft and schedule social media threads", descZh:"撰写和定时发布社交媒体线索", team:"Typefully", source:"voltagent", cat:"内容创作", url:"https://github.com/typefully/skills" },
  { name:"resend-email", nameZh:"邮件发送", desc:"API-first email platform for transactional emails", descZh:"API 优先的事务邮件平台", team:"Resend", source:"voltagent", cat:"后端开发", url:"https://github.com/resend/resend-skills" },
  { name:"terraform", nameZh:"Terraform部署", desc:"Infrastructure as Code with Terraform", descZh:"使用 Terraform 管理基础设施即代码", team:"HashiCorp", source:"voltagent", cat:"云服务", url:"https://github.com/hashicorp/skills" },
  { name:"voltagent", nameZh:"VoltAgent平台", desc:"Universal AI agent platform with 100+ tools", descZh:"通用 AI 代理平台，100+ 工具集成", team:"VoltAgent", source:"voltagent", cat:"AI/ML", url:"https://github.com/VoltAgent/voltagent" },
  { name:"awesome-agent-skills", nameZh:"技能索引", desc:"Curated 1497+ agent skills collection", descZh:"精选 1497+ 代理技能合集", team:"VoltAgent", source:"voltagent", cat:"资源合集", url:"https://github.com/VoltAgent/awesome-agent-skills" },

  // ===================== anbeime/skill 本地技能 (61) =====================
  { name:"content-creation-publisher", nameZh:"内容创作全流程", desc:"Full-pipeline content creation and publishing", descZh:"全流程内容创作和发布", team:"anbeime", source:"anbeime", cat:"内容创作", url:"https://github.com/anbeime/skill" },
  { name:"intelligent-content-system", nameZh:"智能内容系统", desc:"Intelligent content management with AI generation", descZh:"AI 智能内容管理系统", team:"anbeime", source:"anbeime", cat:"内容创作", url:"https://github.com/anbeime/skill" },
  { name:"article-illustrator", nameZh:"文章配图", desc:"AI-powered article illustration and image generation", descZh:"AI 驱动的文章配图生成", team:"anbeime", source:"anbeime", cat:"内容创作", url:"https://github.com/anbeime/skill" },
  { name:"baoyu-url-to-markdown", nameZh:"网页转Markdown", desc:"Convert web pages to clean Markdown format", descZh:"将网页转换为干净的 Markdown 格式", team:"anbeime", source:"anbeime", cat:"内容创作", url:"https://github.com/anbeime/skill" },
  { name:"baoyu-format-markdown", nameZh:"Markdown格式化", desc:"Format and beautify Markdown documents", descZh:"格式化 Markdown 文档", team:"anbeime", source:"anbeime", cat:"内容创作", url:"https://github.com/anbeime/skill" },
  { name:"baoyu-post-to-wechat", nameZh:"公众号发布", desc:"Publish to WeChat Official Accounts directly", descZh:"直接发布到微信公众号", team:"anbeime", source:"anbeime", cat:"内容创作", url:"https://github.com/anbeime/skill" },
  { name:"baoyu-post-to-x", nameZh:"X/Twitter发布", desc:"Publish posts directly to X/Twitter", descZh:"直接发布帖子到 X/Twitter", team:"anbeime", source:"anbeime", cat:"内容创作", url:"https://github.com/anbeime/skill" },
  { name:"baoyu-xhs-images", nameZh:"小红书图文", desc:"Generate image-text content for Xiaohongshu", descZh:"为小红书生成图文内容", team:"anbeime", source:"anbeime", cat:"内容创作", url:"https://github.com/anbeime/skill" },
  { name:"wechat-hotspot-publisher", nameZh:"微信热点", desc:"Generate trending hot topic articles for WeChat", descZh:"为微信生成热点话题文章", team:"anbeime", source:"anbeime", cat:"内容创作", url:"https://github.com/anbeime/skill" },
  { name:"video-creation-suite", nameZh:"视频创作套件", desc:"Complete video creation from script to final cut", descZh:"从脚本到成片的完整视频创作", team:"anbeime", source:"anbeime", cat:"视频", url:"https://github.com/anbeime/skill" },
  { name:"video-creation-collaborator", nameZh:"多智能体视频", desc:"Multi-agent collaborative video creation pipeline", descZh:"多智能体协同视频创作流水线", team:"anbeime", source:"anbeime", cat:"视频", url:"https://github.com/anbeime/skill" },
  { name:"video-creation-pro", nameZh:"商品视频", desc:"Product video creation system for e-commerce", descZh:"电商商品视频创作系统", team:"anbeime", source:"anbeime", cat:"视频", url:"https://github.com/anbeime/skill" },
  { name:"video-recreation", nameZh:"视频二创", desc:"Video remix and recreation tools", descZh:"视频混剪和二创工具", team:"anbeime", source:"anbeime", cat:"视频", url:"https://github.com/anbeime/skill" },
  { name:"video-frame-extractor", nameZh:"视频反推", desc:"Frame extraction and reverse engineering tool", descZh:"视频帧提取和反推工具", team:"anbeime", source:"anbeime", cat:"视频", url:"https://github.com/anbeime/skill" },
  { name:"viral-video-copywriting", nameZh:"爆款视频文案", desc:"Viral short video scripts and copywriting generation", descZh:"爆款短视频文案生成", team:"anbeime", source:"anbeime", cat:"视频", url:"https://github.com/anbeime/skill" },
  { name:"historical-science-video-prod", nameZh:"历史科普视频", desc:"Historical science video production toolkit", descZh:"历史科普视频制作工具包", team:"anbeime", source:"anbeime", cat:"视频", url:"https://github.com/anbeime/skill" },
  { name:"historical-interview-scripts", nameZh:"历史访谈文案", desc:"Historical interview script generation", descZh:"历史访谈文案生成", team:"anbeime", source:"anbeime", cat:"视频", url:"https://github.com/anbeime/skill" },
  { name:"three-body-video-creator", nameZh:"三体视频", desc:"Three-Body Problem themed video creator", descZh:"三体主题视频创作", team:"anbeime", source:"anbeime", cat:"视频", url:"https://github.com/anbeime/skill" },
  { name:"pet-commerce-creator", nameZh:"萌宠带货", desc:"Pet-themed product short video maker", descZh:"萌宠带货短视频制作", team:"anbeime", source:"anbeime", cat:"营销", url:"https://github.com/anbeime/skill" },
  { name:"ecommerce-copywriter", nameZh:"电商文案", desc:"E-commerce copywriting for product images", descZh:"电商产品图片文案生成", team:"anbeime", source:"anbeime", cat:"营销", url:"https://github.com/anbeime/skill" },
  { name:"ecommerce-video-marketing", nameZh:"电商视频营销", desc:"E-commerce video marketing tools", descZh:"电商视频营销工具", team:"anbeime", source:"anbeime", cat:"营销", url:"https://github.com/anbeime/skill" },
  { name:"product-marketing-copywriter", nameZh:"产品营销文案", desc:"Persuasive product marketing copy generation", descZh:"高转化产品营销文案生成", team:"anbeime", source:"anbeime", cat:"营销", url:"https://github.com/anbeime/skill" },
  { name:"product-video-creator", nameZh:"商品视频", desc:"Professional product video with AI assistance", descZh:"AI 辅助专业产品视频", team:"anbeime", source:"anbeime", cat:"营销", url:"https://github.com/anbeime/skill" },
  { name:"xiaohongshu-makeup", nameZh:"小红书美妆", desc:"Xiaohongshu beauty content creation", descZh:"小红书美妆内容创作", team:"anbeime", source:"anbeime", cat:"营销", url:"https://github.com/anbeime/skill" },
  { name:"NanoBanana-PPT-Skills", nameZh:"AI PPT生成", desc:"AI-powered PPT with images and video", descZh:"AI 驱动的 PPT 生成（含图片和视频）", team:"anbeime", source:"anbeime", cat:"文档处理", url:"https://github.com/op7418/NanoBanana-PPT-Skills" },
  { name:"ppt-generator", nameZh:"智能PPT", desc:"Intelligent PowerPoint generation from prompts", descZh:"从提示生成智能 PPT", team:"anbeime", source:"anbeime", cat:"文档处理", url:"https://github.com/anbeime/skill" },
  { name:"pptx-generator", nameZh:"JSON转PPTX", desc:"Convert JSON data to PPTX presentation format", descZh:"将 JSON 数据转为 PPTX 格式", team:"anbeime", source:"anbeime", cat:"文档处理", url:"https://github.com/anbeime/skill" },
  { name:"nanobanana-ppt-visualizer", nameZh:"PPT视觉增强", desc:"Visual enhancement for presentations", descZh:"演示文稿视觉增强", team:"anbeime", source:"anbeime", cat:"文档处理", url:"https://github.com/anbeime/skill" },
  { name:"ppt-roadshow-generator", nameZh:"PPT路演", desc:"Roadshow-style video presentation generator", descZh:"路演风格视频演示生成器", team:"anbeime", source:"anbeime", cat:"文档处理", url:"https://github.com/anbeime/skill" },
  { name:"remotion-video-enhancer", nameZh:"视频转场", desc:"Video transition animation enhancement", descZh:"视频转场动画增强", team:"anbeime", source:"anbeime", cat:"视频", url:"https://github.com/anbeime/skill" },
  { name:"tts-voice-synthesis", nameZh:"语音合成", desc:"Intelligent text-to-speech voice synthesis", descZh:"智能文字转语音合成", team:"anbeime", source:"anbeime", cat:"语音", url:"https://github.com/anbeime/skill" },
  { name:"qwen3-tts-local", nameZh:"本地TTS", desc:"Local TTS based on Edge-TTS platform", descZh:"基于 Edge-TTS 的本地语音合成", team:"anbeime", source:"anbeime", cat:"语音", url:"https://github.com/anbeime/skill" },
  { name:"qwen3-asr-assistant", nameZh:"语音转文字", desc:"Speech-to-text with high accuracy", descZh:"高精度语音转文字", team:"anbeime", source:"anbeime", cat:"语音", url:"https://github.com/anbeime/skill" },
  { name:"infinitetalk", nameZh:"音频驱动配音", desc:"Audio-driven video dubbing and lip sync", descZh:"音频驱动视频配音和口型同步", team:"anbeime", source:"anbeime", cat:"数字人", url:"https://github.com/anbeime/skill" },
  { name:"infinitetalk-shopping-avatar", nameZh:"带货数字人", desc:"Shopping guide avatar prompt generation", descZh:"带货数字人提示词生成", team:"anbeime", source:"anbeime", cat:"数字人", url:"https://github.com/anbeime/skill" },
  { name:"digital-avatar-shopping-video", nameZh:"数字人口播", desc:"Digital avatar live-streaming product tools", descZh:"数字人直播带货工具", team:"anbeime", source:"anbeime", cat:"数字人", url:"https://github.com/anbeime/skill" },
  { name:"dream-video-prompt-generator", nameZh:"即梦提示词", desc:"Dream video prompt engineering", descZh:"即梦视频提示词工程", team:"anbeime", source:"anbeime", cat:"数字人", url:"https://github.com/anbeime/skill" },
  { name:"agentkit-multimedia-shopping", nameZh:"多媒体带货", desc:"Multi-media product promotion video tool", descZh:"多媒体产品推广视频工具", team:"anbeime", source:"anbeime", cat:"数字人", url:"https://github.com/anbeime/skill" },
  { name:"paper-analysis-assistant", nameZh:"论文分析", desc:"arXiv paper analysis and research assistant", descZh:"arXiv 论文分析和研究助手", team:"anbeime", source:"anbeime", cat:"数据分析", url:"https://github.com/anbeime/skill" },
  { name:"contract-review", nameZh:"合同审核", desc:"AI-powered contract review and analysis", descZh:"AI 驱动的合同审查和分析", team:"anbeime", source:"anbeime", cat:"文档处理", url:"https://github.com/anbeime/skill" },
  { name:"law-to-markdown", nameZh:"法律文档转换", desc:"Convert legal documents to structured Markdown", descZh:"将法律文档转换为结构化 Markdown", team:"anbeime", source:"anbeime", cat:"文档处理", url:"https://github.com/anbeime/skill" },
  { name:"stock-analysis", nameZh:"股票分析", desc:"Multi-dimensional stock analysis tool", descZh:"多维度股票分析工具", team:"anbeime", source:"anbeime", cat:"金融", url:"https://github.com/anbeime/skill" },
  { name:"agent-team", nameZh:"智能体团队", desc:"Multi-agent team collaboration and orchestration", descZh:"多智能体团队协作和编排", team:"anbeime", source:"anbeime", cat:"AI/ML", url:"https://github.com/anbeime/skill" },
  { name:"multi-agent-meeting", nameZh:"多智能体会议", desc:"Multi-agent meeting simulation", descZh:"多智能体会议模拟", team:"anbeime", source:"anbeime", cat:"AI/ML", url:"https://github.com/anbeime/skill" },
  { name:"peers-advisory-group", nameZh:"同行顾问团", desc:"Peer advisory group for strategic decisions", descZh:"战略决策同行顾问团", team:"anbeime", source:"anbeime", cat:"AI/ML", url:"https://github.com/anbeime/skill" },
  { name:"product-manager-toolkit", nameZh:"产品工具包", desc:"Comprehensive toolkit for product managers", descZh:"产品经理综合工具包", team:"anbeime", source:"anbeime", cat:"效率工具", url:"https://github.com/anbeime/skill" },
  { name:"sales-ai-assistant", nameZh:"销售AI助手", desc:"AI-powered sales assistant with CRM", descZh:"AI 销售助手，集成 CRM", team:"anbeime", source:"anbeime", cat:"营销", url:"https://github.com/anbeime/skill" },
  { name:"ai-drawio", nameZh:"AI流程图", desc:"AI-powered flowchart with Draw.io", descZh:"AI 驱动的 Draw.io 流程图生成", team:"anbeime", source:"anbeime", cat:"创意设计", url:"https://github.com/anbeime/skill" },
  { name:"pop-up-book-illustration", nameZh:"立体书插画", desc:"3D pop-up book style illustration", descZh:"3D 立体书风格插画", team:"anbeime", source:"anbeime", cat:"创意设计", url:"https://github.com/anbeime/skill" },
  { name:"web-to-app", nameZh:"网页转App", desc:"Convert web apps to desktop applications", descZh:"将 Web 应用转为桌面应用", team:"anbeime", source:"anbeime", cat:"开发工具", url:"https://github.com/anbeime/skill" },
  { name:"creating-financial-models", nameZh:"财务建模", desc:"Financial modeling suite with analysis tools", descZh:"财务建模套件和分析工具", team:"anbeime", source:"anbeime", cat:"金融", url:"https://github.com/anbeime/skill" },
  { name:"market-research-reports", nameZh:"市场研究", desc:"Market research and industry report generator", descZh:"市场研究和行业报告生成器", team:"anbeime", source:"anbeime", cat:"金融", url:"https://github.com/anbeime/skill" },
  { name:"poetry-music-visual", nameZh:"古诗词配乐", desc:"Classical poetry visualization with music", descZh:"古诗词可视化配乐", team:"anbeime", source:"anbeime", cat:"创意设计", url:"https://github.com/anbeime/skill" },

  // ===================== anbeime 精选社区技能 =====================
  { name:"humanize-chinese", nameZh:"中文去AI味", desc:"Remove AI detection markers from Chinese text", descZh:"从中文文本中去除 AI 检测痕迹", team:"voidborne-d", source:"anbeime", cat:"内容创作", url:"https://github.com/voidborne-d/humanize-chinese" },
  { name:"humanizer", nameZh:"去AI味通用", desc:"Remove AI-generated writing patterns from text", descZh:"从文本中移除 AI 生成痕迹", team:"blader", source:"anbeime", cat:"内容创作", url:"https://github.com/blader/humanizer" },
  { name:"claude-memory-skill", nameZh:"记忆技能", desc:"Memory management and persistence for AI agents", descZh:"AI 代理的记忆管理和持久化", team:"hanfang", source:"anbeime", cat:"AI/ML", url:"https://github.com/hanfang/claude-memory-skill" },
  { name:"claude-seo", nameZh:"SEO工具", desc:"Search engine optimization skill for web content", descZh:"Web 内容 SEO 优化技能", team:"AgriciDaniel", source:"anbeime", cat:"营销", url:"https://github.com/AgriciDaniel/claude-seo" },
  { name:"awesome-legal-skills", nameZh:"法律技能", desc:"Collection of legal domain AI skills", descZh:"法律领域 AI 技能合集", team:"lawvable", source:"anbeime", cat:"文档处理", url:"https://github.com/lawvable/awesome-legal-skills" },
  { name:"translate-book", nameZh:"书籍翻译", desc:"Book translation with chapter management", descZh:"书籍翻译和章节管理", team:"deusyu", source:"anbeime", cat:"内容创作", url:"https://github.com/deusyu/translate-book" },
  { name:"email-marketing-bible", nameZh:"邮件营销", desc:"Comprehensive email marketing strategy", descZh:"邮件营销策略大全", team:"CosmoBlk", source:"anbeime", cat:"营销", url:"https://github.com/CosmoBlk/email-marketing-bible" },
  { name:"notebooklm-skill", nameZh:"NotebookLM", desc:"NotebookLM integration for research", descZh:"NotebookLM 研究集成", team:"PleasePrompto", source:"anbeime", cat:"AI/ML", url:"https://github.com/PleasePrompto/notebooklm-skill" },
  { name:"claude-ai-music-skills", nameZh:"AI音乐", desc:"AI music creation and composition", descZh:"AI 音乐创作与作曲", team:"bitwize-music-studio", source:"anbeime", cat:"创意设计", url:"https://github.com/bitwize-music-studio/claude-ai-music-skills" },
  { name:"ui-ux-pro-max-skill", nameZh:"UI/UX大师", desc:"Advanced UI/UX design with pro-grade output", descZh:"高级 UI/UX 设计，专业级输出", team:"nextlevelbuilder", source:"anbeime", cat:"前端开发", url:"https://github.com/nextlevelbuilder/ui-ux-pro-max-skill" },
  { name:"app-store-preflight-skills", nameZh:"App Store预审", desc:"App Store submission preflight check", descZh:"App Store 提交预审检查", team:"rudrankriyam", source:"anbeime", cat:"移动开发", url:"https://github.com/rudrankriyam/app-store-connect-cli-skills" },
  { name:"context-engineering-kit", nameZh:"上下文工程", desc:"Context engineering for agent optimization", descZh:"上下文工程：优化代理行为", team:"NeoLabHQ", source:"anbeime", cat:"AI/ML", url:"https://github.com/NeoLabHQ/context-engineering-kit" },
  { name:"claude-speed-reader", nameZh:"速读", desc:"Speed reading for long documents", descZh:"长文档速读助手", team:"SeanZoR", source:"anbeime", cat:"效率工具", url:"https://github.com/SeanZoR/claude-speed-reader" },
  { name:"creative-director-skill", nameZh:"创意指导", desc:"Creative direction for multimedia projects", descZh:"多媒体项目创意指导", team:"smixs", source:"anbeime", cat:"创意设计", url:"https://github.com/smixs/creative-director-skill" },
  { name:"hand-drawn-diagrams", nameZh:"手绘图表", desc:"Hand-drawn style diagrams and flowcharts", descZh:"手绘风格图表和流程图", team:"muthuishere", source:"anbeime", cat:"创意设计", url:"https://github.com/muthuishere/hand-drawn-diagrams" },
  { name:"clarity-gate", nameZh:"代码清关", desc:"Code clarity and quality gate enforcement", descZh:"代码清晰度和质量门禁", team:"frmoretto", source:"anbeime", cat:"开发工具", url:"https://github.com/frmoretto/clarity-gate" },
  { name:"x-article-publisher-skill", nameZh:"X文章发布", desc:"Publish long-form articles to X/Twitter", descZh:"发布长文到 X/Twitter", team:"wshuyi", source:"anbeime", cat:"内容创作", url:"https://github.com/wshuyi/x-article-publisher-skill" },
  { name:"Anthropic-Cybersecurity-Skills", nameZh:"网络安全", desc:"Cybersecurity skill set for assessment", descZh:"网络安全评估技能集", team:"mukul975", source:"anbeime", cat:"安全", url:"https://github.com/mukul975/Anthropic-Cybersecurity-Skills" },
  { name:"model-hierarchy-skill", nameZh:"模型层级", desc:"Model hierarchy for optimal API routing", descZh:"模型层级管理：最优 API 路由", team:"zscole", source:"anbeime", cat:"AI/ML", url:"https://github.com/zscole/model-hierarchy-skill" },
  { name:"taste-skill", nameZh:"审美判断", desc:"Aesthetic judgment for design evaluation", descZh:"设计美学评判", team:"Leonxlnx", source:"anbeime", cat:"创意设计", url:"https://github.com/Leonxlnx/taste-skill" },
  { name:"claude-ecom", nameZh:"电商AI", desc:"E-commerce automation and management", descZh:"电商自动化和管理", team:"takechanman1228", source:"anbeime", cat:"营销", url:"https://github.com/takechanman1228/claude-ecom" },
  { name:"platform-design-skills", nameZh:"平台设计", desc:"Platform design patterns and architecture", descZh:"平台设计模式和架构", team:"ehmo", source:"anbeime", cat:"开发工具", url:"https://github.com/ehmo/platform-design-skills" },
  { name:"recursive-decomposition-skill", nameZh:"递归分解", desc:"Recursive problem decomposition for complex tasks", descZh:"复杂任务的递归问题分解", team:"massimodeluisa", source:"anbeime", cat:"开发工具", url:"https://github.com/massimodeluisa/recursive-decomposition-skill" },
  { name:"unslop", nameZh:"去除冗余", desc:"Remove slop from AI outputs", descZh:"从 AI 输出中去除冗余", team:"MohamedAbdallah-14", source:"anbeime", cat:"内容创作", url:"https://github.com/MohamedAbdallah-14/unslop" },
  { name:"claude-bootstrap", nameZh:"引导配置", desc:"Bootstrap and configure Claude environments", descZh:"引导和配置 Claude 环境", team:"alinaqi", source:"anbeime", cat:"开发工具", url:"https://github.com/alinaqi/claude-bootstrap" },

  // ===================== MiniMax 官方团队技能 (16) =====================
  { name:"minimax-frontend-dev", nameZh:"前端全栈开发", desc:"Full-stack frontend dev with premium UI, Framer Motion, GSAP, AI media via MiniMax API, AIDA copywriting, p5.js art", descZh:"前端全栈开发：高级UI、动效、AI媒体生成、文案、创意编程", team:"MiniMax", source:"voltagent", cat:"前端开发", url:"https://github.com/MiniMax-AI/skills/tree/main/skills/frontend-dev" },
  { name:"minimax-fullstack-dev", nameZh:"全栈架构", desc:"Backend architecture + frontend integration: REST API, auth, real-time, databases, production hardening", descZh:"后端架构与前后端集成：REST API、认证、实时通信、数据库、生产加固", team:"MiniMax", source:"voltagent", cat:"后端开发", url:"https://github.com/MiniMax-AI/skills/tree/main/skills/fullstack-dev" },
  { name:"minimax-android-dev", nameZh:"Android原生开发", desc:"Android native dev with Material Design 3, Jetpack Compose, adaptive layouts, performance optimization", descZh:"Android原生开发：Material Design 3、Jetpack Compose、自适应布局、性能优化", team:"MiniMax", source:"voltagent", cat:"移动开发", url:"https://github.com/MiniMax-AI/skills/tree/main/skills/android-native-dev" },
  { name:"minimax-ios-dev", nameZh:"iOS应用开发", desc:"iOS dev with UIKit, SnapKit, SwiftUI, Dynamic Type, Dark Mode, accessibility, Apple HIG compliance", descZh:"iOS开发：UIKit、SnapKit、SwiftUI、动态字体、暗黑模式、无障碍", team:"MiniMax", source:"voltagent", cat:"移动开发", url:"https://github.com/MiniMax-AI/skills/tree/main/skills/ios-application-dev" },
  { name:"minimax-flutter-dev", nameZh:"Flutter跨平台", desc:"Flutter cross-platform: widget patterns, Riverpod/Bloc, GoRouter, performance, testing", descZh:"Flutter跨平台开发：Widget模式、状态管理、路由、性能、测试", team:"MiniMax", source:"voltagent", cat:"移动开发", url:"https://github.com/MiniMax-AI/skills/tree/main/skills/flutter-dev" },
  { name:"minimax-react-native-dev", nameZh:"React Native开发", desc:"React Native + Expo: components, styling, animations, navigation, native capabilities, CI/CD", descZh:"React Native + Expo：组件、样式、动画、导航、原生能力、CI/CD", team:"MiniMax", source:"voltagent", cat:"移动开发", url:"https://github.com/MiniMax-AI/skills/tree/main/skills/react-native-dev" },
  { name:"minimax-shader-dev", nameZh:"Shader着色器", desc:"GLSL shader techniques: ray marching, SDF, fluid sim, particles, procedural generation, post-processing", descZh:"GLSL着色器：光线步进、SDF建模、流体模拟、粒子系统、程序化生成", team:"MiniMax", source:"voltagent", cat:"创意设计", url:"https://github.com/MiniMax-AI/skills/tree/main/skills/shader-dev" },
  { name:"minimax-gif-sticker", nameZh:"GIF贴纸生成", desc:"Convert photos into Funko Pop / Pop Mart style animated GIF stickers with captions", descZh:"将照片转为潮玩风格的动画GIF贴纸", team:"MiniMax", source:"voltagent", cat:"图像", url:"https://github.com/MiniMax-AI/skills/tree/main/skills/gif-sticker-maker" },
  { name:"minimax-pdf", nameZh:"PDF生成", desc:"Generate, fill, and reformat PDFs with token-based design, 15 cover styles, print-ready output", descZh:"生成、填写和重排PDF：15种封面风格、打印就绪", team:"MiniMax", source:"voltagent", cat:"文档处理", url:"https://github.com/MiniMax-AI/skills/tree/main/skills/minimax-pdf" },
  { name:"minimax-pptx", nameZh:"PPT生成编辑", desc:"Generate, edit, and read PPTX: cover/TOC/content/section/summary slides, XML workflows", descZh:"生成、编辑和读取PPT：封面/目录/内容/分隔/总结页、XML工作流", team:"MiniMax", source:"voltagent", cat:"文档处理", url:"https://github.com/MiniMax-AI/skills/tree/main/skills/pptx-generator" },
  { name:"minimax-xlsx", nameZh:"Excel处理", desc:"Create, read, analyze Excel files: XML templates, pandas, zero-loss editing, financial formatting", descZh:"创建/读取/分析Excel：XML模板、pandas、无损编辑、财务格式", team:"MiniMax", source:"voltagent", cat:"文档处理", url:"https://github.com/MiniMax-AI/skills/tree/main/skills/minimax-xlsx" },
  { name:"minimax-docx", nameZh:"Word文档", desc:"Professional DOCX creation with OpenXML SDK: create, fill, format, XSD validation", descZh:"专业Word文档：OpenXML SDK创建、填充、格式化、XSD校验", team:"MiniMax", source:"voltagent", cat:"文档处理", url:"https://github.com/MiniMax-AI/skills/tree/main/skills/minimax-docx" },
  { name:"minimax-vision", nameZh:"视觉分析", desc:"Analyze images: describe, OCR, UI review, chart extraction, object detection via MiniMax VL + GPT-4V", descZh:"图像分析：描述、OCR、UI审查、图表提取、物体检测", team:"MiniMax", source:"voltagent", cat:"图像", url:"https://github.com/MiniMax-AI/skills/tree/main/skills/vision-analysis" },
  { name:"minimax-multimodal", nameZh:"多模态生成", desc:"TTS, music, video, image generation via MiniMax APIs — unified multimodal entry point", descZh:"语音合成、音乐、视频、图像生成——MiniMax多模态统一入口", team:"MiniMax", source:"voltagent", cat:"AI/ML", url:"https://github.com/MiniMax-AI/skills/tree/main/skills/minimax-multimodal-toolkit" },
  { name:"minimax-music", nameZh:"AI音乐生成", desc:"Generate vocal songs, instrumentals, covers: Basic + Advanced modes, lyrics, streaming, iterative feedback", descZh:"AI音乐生成：人声歌曲、纯音乐、翻唱，基础和高级模式，流式播放", team:"MiniMax", source:"voltagent", cat:"创意设计", url:"https://github.com/MiniMax-AI/skills/tree/main/skills/minimax-music-gen" },
  { name:"minimax-music-playlist", nameZh:"AI歌单生成", desc:"Personalized playlists by taste profile: genre, mood, language, vocal preferences, album art", descZh:"个性化AI歌单：口味分析、风格、语言、人声偏好、专辑封面", team:"MiniMax", source:"voltagent", cat:"创意设计", url:"https://github.com/MiniMax-AI/skills/tree/main/skills/minimax-music-playlist" },

  // ===================== Google Workspace CLI (5) =====================
  { name:"gws-drive", nameZh:"Google Drive管理", desc:"Manage Google Drive files, folders, and shared drives via CLI", descZh:"通过CLI管理Google Drive文件和共享", team:"Google Workspace", source:"voltagent", cat:"效率工具", url:"https://officialskills.sh/googleworkspace/skills/gws-drive" },
  { name:"gws-sheets", nameZh:"Google Sheets读写", desc:"Read and write Google Sheets spreadsheets programmatically", descZh:"程序化读写Google Sheets电子表格", team:"Google Workspace", source:"voltagent", cat:"效率工具", url:"https://officialskills.sh/googleworkspace/skills/gws-sheets" },
  { name:"gws-gmail", nameZh:"Gmail管理", desc:"Send, read, and manage Gmail emails via CLI", descZh:"通过CLI发送、读取和管理Gmail邮件", team:"Google Workspace", source:"voltagent", cat:"效率工具", url:"https://officialskills.sh/googleworkspace/skills/gws-gmail" },
  { name:"gws-calendar", nameZh:"Google日历", desc:"Manage Google Calendar events and scheduling", descZh:"管理Google日历活动和日程", team:"Google Workspace", source:"voltagent", cat:"效率工具", url:"https://officialskills.sh/googleworkspace/skills/gws-calendar" },
  { name:"gws-docs", nameZh:"Google Docs读写", desc:"Read and write Google Docs documents programmatically", descZh:"程序化读写Google Docs文档", team:"Google Workspace", source:"voltagent", cat:"内容创作", url:"https://officialskills.sh/googleworkspace/skills/gws-docs" },

  // ===================== CallStack React Native (3) =====================
  { name:"callstack-rn-perf", nameZh:"RN性能优化", desc:"React Native performance optimization from Callstack engineering team", descZh:"Callstack团队出品的React Native性能优化指南", team:"CallStack", source:"voltagent", cat:"移动开发", url:"https://officialskills.sh/callstackincubator/skills/react-native-best-practices" },
  { name:"callstack-github", nameZh:"GitHub工作流", desc:"GitHub workflow patterns for PRs, code review, and branching", descZh:"PR、代码审查和分支管理的GitHub工作流模式", team:"CallStack", source:"voltagent", cat:"开发工具", url:"https://officialskills.sh/callstackincubator/skills/github" },
  { name:"callstack-rn-upgrade", nameZh:"RN版本升级", desc:"React Native upgrade workflow: templates, dependencies, and common pitfalls", descZh:"React Native升级流程：模板、依赖项和常见陷阱", team:"CallStack", source:"voltagent", cat:"移动开发", url:"https://officialskills.sh/callstackincubator/skills/upgrading-react-native" },

  // ===================== Better Auth (5) =====================
  { name:"better-auth-best", nameZh:"Better Auth最佳实践", desc:"Best practices for Better Auth integration and setup", descZh:"Better Auth集成和配置最佳实践", team:"Better Auth", source:"voltagent", cat:"安全", url:"https://officialskills.sh/better-auth/skills/best-practices" },
  { name:"better-auth-create", nameZh:"认证系统搭建", desc:"Create complete authentication setup with Better Auth", descZh:"用Better Auth搭建完整认证系统", team:"Better Auth", source:"voltagent", cat:"安全", url:"https://officialskills.sh/better-auth/skills/create-auth" },
  { name:"better-auth-providers", nameZh:"认证提供商", desc:"Better Auth authentication providers and social login", descZh:"Better Auth认证提供商和社交登录", team:"Better Auth", source:"voltagent", cat:"安全", url:"https://officialskills.sh/better-auth/skills/providers" },
  { name:"better-auth-2fa", nameZh:"双因素认证", desc:"Two-factor authentication setup with Better Auth", descZh:"Better Auth双因素认证配置", team:"Better Auth", source:"voltagent", cat:"安全", url:"https://officialskills.sh/better-auth/skills/twoFactor" },
  { name:"better-auth-org", nameZh:"组织管理", desc:"Organization and team management with Better Auth", descZh:"Better Auth组织和团队管理", team:"Better Auth", source:"voltagent", cat:"安全", url:"https://officialskills.sh/better-auth/skills/organization" },

  // ===================== Courier / Zero / DuckDB (4) =====================
  { name:"courier-notifications", nameZh:"多渠道通知", desc:"Multi-channel notifications via email, SMS, push, and chat APIs", descZh:"多渠道通知：邮件、短信、推送、聊天API", team:"Courier", source:"voltagent", cat:"后端开发", url:"https://github.com/trycourier/courier-skills" },
  { name:"zero-tools", nameZh:"Zero工具发现", desc:"Discover and call external paid tools for AI agents without manual signup", descZh:"为AI代理发现和调用外部付费工具，无需手动注册", team:"Zero", source:"voltagent", cat:"AI/ML", url:"https://github.com/officialzeroxyz/zero-plugins/blob/main/plugins/zero/skills/zero/SKILL.md" },
  { name:"zero-gemini", nameZh:"Zero Gemini扩展", desc:"Zero tool-discovery and payment layer for Gemini CLI agents", descZh:"面向Gemini CLI代理的Zero工具发现和支付层", team:"Zero", source:"voltagent", cat:"AI/ML", url:"https://github.com/officialzeroxyz/zero-plugins/tree/main/plugins/zero-gemini" },
  { name:"duckdb-skill", nameZh:"DuckDB分析", desc:"DuckDB in-process OLAP database for data analysis and SQL queries", descZh:"DuckDB进程内OLAP数据库：数据分析和SQL查询", team:"DuckDB", source:"voltagent", cat:"数据库", url:"https://officialskills.sh/duckdb/skills/duckdb" },

  // ===================== Addy Osmani Web Quality (4) =====================
  { name:"web-quality-audit", nameZh:"Web质量审计", desc:"Comprehensive web quality audit covering Lighthouse, Core Web Vitals, and best practices", descZh:"综合Web质量审计：Lighthouse、Core Web Vitals和最佳实践", team:"Addy Osmani", source:"voltagent", cat:"前端开发", url:"https://github.com/addyosmani/web-quality-skills" },
  { name:"core-web-vitals", nameZh:"Core Web Vitals优化", desc:"Optimize LCP, FID/INP, and CLS metrics following Google's web performance guidance", descZh:"按Google Web性能指南优化LCP、INP和CLS指标", team:"Addy Osmani", source:"voltagent", cat:"前端开发", url:"https://github.com/addyosmani/web-quality-skills" },
  { name:"lighthouse-optimization", nameZh:"Lighthouse优化", desc:"Target 90+ Lighthouse scores with stack-agnostic optimization strategies", descZh:"不限技术栈的Lighthouse 90+分优化策略", team:"Addy Osmani", source:"voltagent", cat:"前端开发", url:"https://github.com/addyosmani/web-quality-skills" },
  { name:"performance-budget", nameZh:"性能预算", desc:"Set and enforce performance budgets for web projects", descZh:"为Web项目设定和执行性能预算", team:"Addy Osmani", source:"voltagent", cat:"前端开发", url:"https://github.com/addyosmani/web-quality-skills" },

  // ===================== Garry Tan gstack (5) =====================
  { name:"gstack-ceo", nameZh:"CEO审查", desc:"CEO-level product review: strategy, roadmap, and business alignment", descZh:"CEO级产品审查：战略、路线图和业务对齐", team:"Garry Tan", source:"voltagent", cat:"效率工具", url:"https://github.com/garrytan/gstack" },
  { name:"gstack-designer", nameZh:"设计审查", desc:"Design review from a senior designer perspective: UX, visuals, consistency", descZh:"资深设计师视角的设计审查：UX、视觉、一致性", team:"Garry Tan", source:"voltagent", cat:"创意设计", url:"https://github.com/garrytan/gstack" },
  { name:"gstack-qa", nameZh:"QA测试", desc:"QA lead testing and quality assurance with browser automation", descZh:"QA主管级别测试和质量保证（含浏览器自动化）", team:"Garry Tan", source:"voltagent", cat:"测试", url:"https://github.com/garrytan/gstack" },
  { name:"gstack-release", nameZh:"发布管理", desc:"Release manager: deployment coordination, changelog, versioning, /ship command", descZh:"发布管理：部署协调、变更日志、版本管理、/ship命令", team:"Garry Tan", source:"voltagent", cat:"开发工具", url:"https://github.com/garrytan/gstack" },
  { name:"gstack-eng-mgr", nameZh:"工程管理", desc:"Engineering manager: code review, architecture decisions, tech debt management", descZh:"工程管理：代码审查、架构决策、技术债务管理", team:"Garry Tan", source:"voltagent", cat:"开发工具", url:"https://github.com/garrytan/gstack" },

  // ===================== TestMu AI (7 selected) =====================
  { name:"testmu-playwright", nameZh:"Playwright测试", desc:"Generate Playwright E2E tests in TS, JS, Python, Java, or C#", descZh:"生成Playwright端到端测试：支持TS/JS/Python/Java/C#", team:"TestMu AI", source:"voltagent", cat:"测试", url:"https://github.com/LambdaTest/agent-skills/tree/main/playwright-skill" },
  { name:"testmu-cypress", nameZh:"Cypress测试", desc:"Generate Cypress E2E and component tests in JavaScript or TypeScript", descZh:"生成Cypress端到端和组件测试", team:"TestMu AI", source:"voltagent", cat:"测试", url:"https://github.com/LambdaTest/agent-skills/tree/main/cypress-skill" },
  { name:"testmu-jest", nameZh:"Jest测试", desc:"Generate Jest unit and integration tests with mocking and snapshots", descZh:"生成Jest单元和集成测试：Mock和快照", team:"TestMu AI", source:"voltagent", cat:"测试", url:"https://github.com/LambdaTest/agent-skills/tree/main/jest-skill" },
  { name:"testmu-vitest", nameZh:"Vitest测试", desc:"Generate Vitest tests with Jest-compatible API and ESM support", descZh:"生成Vitest测试：Jest兼容API、ESM支持", team:"TestMu AI", source:"voltagent", cat:"测试", url:"https://github.com/LambdaTest/agent-skills/tree/main/vitest-skill" },
  { name:"testmu-pytest", nameZh:"pytest测试", desc:"Generate pytest tests with fixtures, parametrize, and mocking", descZh:"生成pytest测试：fixtures、参数化、Mock", team:"TestMu AI", source:"voltagent", cat:"测试", url:"https://github.com/LambdaTest/agent-skills/tree/main/pytest-skill" },
  { name:"testmu-selenium", nameZh:"Selenium测试", desc:"Generate Selenium WebDriver tests in Java, Python, JS, C#, Ruby, or PHP", descZh:"生成Selenium WebDriver测试：多语言支持", team:"TestMu AI", source:"voltagent", cat:"测试", url:"https://github.com/LambdaTest/agent-skills/tree/main/selenium-skill" },
  { name:"testmu-cicd", nameZh:"CI/CD流水线", desc:"Generate CI/CD pipelines for tests: GitHub Actions, Jenkins, GitLab CI, Azure DevOps", descZh:"生成测试CI/CD流水线：GitHub Actions/Jenkins/GitLab CI/Azure DevOps", team:"TestMu AI", source:"voltagent", cat:"部署", url:"https://github.com/LambdaTest/agent-skills/tree/main/cicd-pipeline-skill" },

  // ===================== Venice.ai (5 selected) =====================
  { name:"venice-chat", nameZh:"Venice聊天API", desc:"Chat completions with multimodal inputs, tools, and streaming via Venice AI", descZh:"Venice AI聊天补全：多模态输入、工具调用、流式", team:"Venice.ai", source:"voltagent", cat:"AI/ML", url:"https://github.com/veniceai/skills/tree/main/skills/venice-chat" },
  { name:"venice-image", nameZh:"Venice图像生成", desc:"Image generation endpoints and styles via Venice API", descZh:"Venice API图像生成：端点和风格", team:"Venice.ai", source:"voltagent", cat:"图像", url:"https://github.com/veniceai/skills/tree/main/skills/venice-image-generate" },
  { name:"venice-audio", nameZh:"Venice语音合成", desc:"Text-to-speech with multiple models, voices, formats, and streaming", descZh:"Venice文字转语音：多模型、多音色、流式", team:"Venice.ai", source:"voltagent", cat:"语音", url:"https://github.com/veniceai/skills/tree/main/skills/venice-audio-speech" },
  { name:"venice-video", nameZh:"Venice视频生成", desc:"Video generation and transcription workflows via Venice", descZh:"Venice视频生成和转录工作流", team:"Venice.ai", source:"voltagent", cat:"视频", url:"https://github.com/veniceai/skills/tree/main/skills/venice-video" },
  { name:"venice-models", nameZh:"Venice模型目录", desc:"Venice AI model catalog with traits and compatibility mappings", descZh:"Venice AI模型目录：特性、兼容性映射", team:"Venice.ai", source:"voltagent", cat:"AI/ML", url:"https://github.com/veniceai/skills/tree/main/skills/venice-models" },

  // ===================== 社区精选（2026-07-13 新增） =====================

  // --- 开发工具 / AI Agent ---
  { name:"openhands", nameZh:"OpenHands自主编程", desc:"Autonomous AI software engineer that writes, runs, and fixes code", descZh:"自主 AI 软件工程师，能自动写代码、执行调试、修复 Bug，像自律的编程搭档", team:"OpenHands (All-Hands-AI)", source:"community", cat:"开发工具", url:"https://github.com/OpenHands/openhands" },
  { name:"hermes-agent", nameZh:"Hermes自进化Agent", desc:"Self-improving AI agent with built-in learning loop and multi-channel access", descZh:"Nous Research 出品的自我进化 AI Agent，内置学习循环，越用越懂你的习惯，支持多渠道交互", team:"Nous Research", source:"community", cat:"开发工具", url:"https://github.com/NousResearch/hermes-agent" },
  { name:"crewai", nameZh:"CrewAI多Agent协作", desc:"Multi-agent orchestration framework for role-playing AI teams", descZh:"多 Agent 团队协作框架，让不同角色 AI 分工明确，从调研、分析到输出一条龙搞定", team:"CrewAI Inc.", source:"community", cat:"开发工具", url:"https://github.com/crewAIInc/crewAI" },
  { name:"aider", nameZh:"Aider终端结对编程", desc:"In-terminal AI pair programming that edits code and auto-commits", descZh:"终端里的 AI 结对编程神器，边聊边改代码，改完自动 commit 提交历史", team:"Aider-AI", source:"community", cat:"开发工具", url:"https://github.com/Aider-AI/aider" },
  { name:"browser-use", nameZh:"browser-use浏览器自动化", desc:"AI agents that control and automate web browsers", descZh:"让 AI Agent 自主操控浏览器，完成点击、填表、导航等自动化任务", team:"browser-use", source:"community", cat:"开发工具", url:"https://github.com/browser-use/browser-use" },
  { name:"agent-reach", nameZh:"Agent-Reach联网能力层", desc:"CLI capability layer giving AI agents free internet access to social platforms", descZh:"为任意命令行 AI Agent 一键接入互联网，免费读取搜索 Twitter、Reddit、YouTube、B站、小红书等内容", team:"Panniantong", source:"community", cat:"开发工具", url:"https://github.com/Panniantong/Agent-Reach" },

  // --- 金融 / 量化 ---
  { name:"uzi-skill", nameZh:"游资股票深度分析", desc:"AI stock deep-analysis engine with 66-investor jury scoring", descZh:"AI 股票深度分析引擎，66 位投资风格评审团按量化规则打分，生成 Bloomberg 风格报告", team:"wbh604", source:"community", cat:"金融", url:"https://github.com/wbh604/UZI-Skill" },
  { name:"stock-api", nameZh:"股票数据接口", desc:"A-share/HK/US stock market data API for AI agents", descZh:"为 AI Agent 提供 A股/港股/美股行情与基本面数据接口", team:"zhangxiangliang", source:"community", cat:"金融", url:"https://github.com/zhangxiangliang/stock-api" },
  { name:"vibe-trading", nameZh:"Vibe-Trading交易代理", desc:"AI personal trading agent with multi-market data, backtest, and factor research", descZh:"HKUDS 开源的 AI 个人交易代理，覆盖多市场数据、因子研究、回测与模拟交易，内置 75+ 技能", team:"HKUDS (香港大学数据科学研究院)", source:"community", cat:"金融", url:"https://github.com/HKUDS/Vibe-Trading" },

  // --- 数据分析 / 爬虫 ---
  { name:"crawl4ai", nameZh:"crawl4ai网页抓取", desc:"Open-source LLM-friendly web crawler for structured data", descZh:"开源的 LLM 友好网页爬虫，异步抓取并输出结构化、AI 就绪的数据", team:"unclecode", source:"community", cat:"数据分析", url:"https://github.com/unclecode/crawl4ai" },
  { name:"crawlee", nameZh:"crawlee爬虫库", desc:"Web scraping and browser automation library by Apify", descZh:"Apify 出品的网页抓取与浏览器自动化库，支持 JS/Python，内置反爬与存储", team:"Apify", source:"community", cat:"数据分析", url:"https://github.com/apify/crawlee" },
  { name:"scrapy", nameZh:"Scrapy爬虫框架", desc:"Fast and open-source web crawling framework for Python", descZh:"Python 高性能开源爬虫框架，适合大规模结构化数据抓取", team:"Scrapy", source:"community", cat:"数据分析", url:"https://github.com/scrapy/scrapy" },
  { name:"scrapling", nameZh:"Scrapling反爬爬虫", desc:"Advanced web scraping library with anti-bot bypass", descZh:"进阶网页抓取库，自带反爬绕过与指纹伪装，适配动态页面", team:"D4Vinci", source:"community", cat:"数据分析", url:"https://github.com/D4Vinci/Scrapling" },
  { name:"autoscraper", nameZh:"AutoScraper智能爬虫", desc:"Smart minimalist web scraper that learns from examples", descZh:"极简智能爬虫，给定示例即可自动学习抓取规则，无需写选择器", team:"alirezamika", source:"community", cat:"数据分析", url:"https://github.com/alirezamika/autoscraper" },
  { name:"curl-impersonate", nameZh:"curl-impersonate指纹伪装", desc:"curl with real browser TLS/JA3 fingerprint impersonation", descZh:"带真实浏览器指纹伪装（TLS/JA3）的 curl，用于绕过反爬检测", team:"lwthiker", source:"community", cat:"数据分析", url:"https://github.com/lwthiker/curl-impersonate" },

  // --- 视频 / 设计 / 创意 ---
  { name:"money-printer-turbo", nameZh:"MoneyPrinterTurbo视频生成", desc:"Auto-generate short videos from a topic with AI scripts and voiceover", descZh:"输入主题自动生成短视频：AI 写脚本、配音、字幕、素材，一键产出", team:"harry0703", source:"community", cat:"视频", url:"https://github.com/harry0703/MoneyPrinterTurbo" },
  { name:"brand-design-skill", nameZh:"品牌设计Skill", desc:"Image-first Codex skill for brand identity and HTML brand manuals", descZh:"以图像为先的 Codex 品牌设计 Skill，对话式澄清需求、探索 Logo、输出 VI 规范与 HTML 品牌手册", team:"ziguishian", source:"community", cat:"设计", url:"https://github.com/ziguishian/brand-design-skill" },
  { name:"cyberppt", nameZh:"赛博风PPT生成", desc:"Generate cyberpunk-style PowerPoint presentations with AI", descZh:"用 AI 生成赛博朋克风格的 PPT 演示文稿", team:"crazyykhllc-bit", source:"community", cat:"创意设计", url:"https://github.com/crazyykhllc-bit/CyberPPT" },
  { name:"ian-xiaohei-illustrations", nameZh:"小黑怪诞正文配图", desc:"Generate 16:9 hand-drawn Xiaohei illustrations for Chinese articles", descZh:"为中文文章生成 16:9 白底手绘「小黑」怪诞正文配图，少量红橙蓝中文批注", team:"helloianneo (Ian)", source:"community", cat:"创意设计", url:"https://github.com/helloianneo/ian-xiaohei-illustrations" },

  // --- 文档 / 移动 / 内容 / 搜索 ---
  { name:"markitdown", nameZh:"MarkItDown文档转MD", desc:"Convert files (PDF, docx, xlsx, images) to Markdown by Microsoft", descZh:"微软出品的文件转 Markdown 工具，支持 PDF、Word、Excel、图片等批量转换", team:"Microsoft", source:"community", cat:"文档处理", url:"https://github.com/microsoft/markitdown" },
  { name:"scrcpy", nameZh:"scrcpy安卓投屏", desc:"Display and control Android devices over USB/network", descZh:"在电脑上显示并操控安卓设备，支持投屏、录屏、键鼠控制", team:"Genymobile", source:"community", cat:"移动开发", url:"https://github.com/Genymobile/scrcpy" },
  { name:"wechat-article-exporter", nameZh:"微信公众号文章导出", desc:"Export WeChat official account articles to Markdown/HTML", descZh:"一键导出微信公众号文章为 Markdown/HTML，保留排版与图片", team:"wechat-article", source:"community", cat:"内容管理", url:"https://github.com/wechat-article/wechat-article-exporter" },
  { name:"last30days-skill-cn", nameZh:"近30天中文舆情检索", desc:"Search and analyze last-30-days Chinese internet content across 8 platforms", descZh:"自动检索微博、小红书、B站、知乎等 8 大中文平台近 30 天内容，生成有据可查的研究报告", team:"Jesseovo", source:"community", cat:"搜索", url:"https://github.com/Jesseovo/last30days-skill-cn" },

  // --- 资源合集 ---
  { name:"awesome-design-md", nameZh:"设计类Markdown技能合集", desc:"Curated collection of design-related markdown skills", descZh:"精选设计类 Markdown 技能合集，覆盖 UI、品牌、设计系统等多种场景", team:"VoltAgent", source:"community", cat:"资源合集", url:"https://github.com/VoltAgent/awesome-design-md" },
  { name:"minimalist-entrepreneur-skills", nameZh:"极简创业Claude技能合集", desc:"Collection of Claude Code skills from The Minimalist Entrepreneur", descZh:"《极简创业家》作者 Sahil Lavingia 开源的 Claude Code 技能合集，覆盖独立开发全流程", team:"slavingia", source:"community", cat:"资源合集", url:"https://github.com/slavingia/skills" }
];