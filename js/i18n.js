// AI家AI户 — 双语翻译系统 (i18n)
// 使用：页面上对需要翻译的元素加 data-i18n="key"，加载时自动替换
// 模型卡片在 renderModelCards 中根据当前语言切换字段

const i18n = {
    // ==================== 导航栏 ====================
    "nav.home": { zh: "首页", en: "Home" },
    "nav.models": { zh: "模型库", en: "Models" },
    "nav.tools": { zh: "工具库", en: "Tools" },
    "nav.compare": { zh: "横向对比", en: "Compare" },
    "nav.news": { zh: "新闻", en: "News" },
    "nav.compareCustom": { zh: "自定义对比", en: "Custom Compare" },
    "nav.vs": { zh: "热门对比", en: "Top Comparisons" },
    "nav.picker": { zh: "AI选型器", en: "AI Picker" },
    "nav.skills": { zh: "技能包", en: "Skills" },
    "nav.papers": { zh: "白皮书", en: "Papers" },
    "nav.blog": { zh: "博客", en: "Blog" },
    "nav.about": { zh: "关于", en: "About" },
    "nav.privacy": { zh: "隐私政策", en: "Privacy" },
    "nav.switch": { zh: "EN", en: "中文" },

    // ==================== 首页 Hero ====================
    "hero.title": { zh: "帮你省掉搜评测的时间<span>44个AI工具已对比好</span>", en: "Save time searching reviews<span>44 AI tools compared</span>" },
    "hero.subtitle": { zh: "价格、功能、中文体验一目了然，来源标注+更新日期。<br>不评测，不软文，就是个帮你省事的便利店。", en: "Pricing, features, Chinese support — all transparent with sources & dates.<br>No reviews, no ads — just a convenient store for your AI needs." },
    "hero.scenario.label": { zh: "👇 你想用AI做什么？", en: "👇 What do you want AI to do?" },
    "hero.scenario.writing": { zh: "写文章", en: "Writing" },
    "hero.scenario.writingHint": { zh: "文案、报告、论文", en: "Copy, reports, essays" },
    "hero.scenario.coding": { zh: "写代码", en: "Coding" },
    "hero.scenario.codingHint": { zh: "编程、Bug修复", en: "Dev, bug fixes" },
    "hero.scenario.image": { zh: "画图", en: "Images" },
    "hero.scenario.imageHint": { zh: "插画、海报、LOGO", en: "Illustrations, logos" },
    "hero.scenario.video": { zh: "做视频", en: "Videos" },
    "hero.scenario.videoHint": { zh: "短视频、特效", en: "Short clips, VFX" },
    "hero.scenario.general": { zh: "啥都问", en: "Anything" },
    "hero.scenario.generalHint": { zh: "问答、学习、闲聊", en: "Q&A, learning" },
    "hero.stat.models": { zh: "收录产品", en: "Tools listed" },
    "hero.stat.cats": { zh: "产品品类", en: "Categories" },
    "hero.stat.updated": { zh: "最后更新", en: "Last updated" },

    // ==================== 首页品类卡片 ====================
    "cat.title": { zh: "🔍 按品类找工具", en: "🔍 Browse by category" },
    "cat.subtitle": { zh: "44个模型覆盖6大品类，点击直接筛选", en: "44 models across 6 categories. Click to filter." },
    "cat.llm.name": { zh: "语言模型", en: "Chat & LLMs" },
    "cat.llm.desc": { zh: "12款 · ChatGPT、DeepSeek、Claude", en: "12 tools · ChatGPT, DeepSeek, Claude" },
    "cat.agent.name": { zh: "Agent 平台", en: "Agent Platforms" },
    "cat.agent.desc": { zh: "6款 · Coze、Dify、Manus", en: "6 tools · Coze, Dify, Manus" },
    "cat.image.name": { zh: "图像模型", en: "Image Models" },
    "cat.image.desc": { zh: "5款 · Midjourney、DALL-E、即梦", en: "5 tools · Midjourney, DALL-E, Jimeng" },
    "cat.video.name": { zh: "视频模型", en: "Video Models" },
    "cat.video.desc": { zh: "6款 · Sora、可灵、海螺", en: "6 tools · Sora, Kling, Hailuo" },
    "cat.code.name": { zh: "代码模型", en: "Coding Tools" },
    "cat.code.desc": { zh: "7款 · Codex、Cursor、Claude Code", en: "7 tools · Codex, Cursor, Claude Code" },
    "cat.tools.name": { zh: "AI辅助工具", en: "AI Tools" },
    "cat.tools.desc": { zh: "8款 · 写作、设计、语音、SEO", en: "8 tools · Writing, Design, Voice, SEO" },
    "cat.llm.hint": { zh: "找聊天、写作、推理工具 →", en: "Chat, writing, reasoning →" },
    "cat.agent.hint": { zh: "找AI助手、自动化工具 →", en: "AI assistants, automation →" },
    "cat.image.hint": { zh: "找画图、设计工具 →", en: "Image generation, design →" },
    "cat.video.hint": { zh: "找视频生成、特效工具 →", en: "Video generation, VFX →" },
    "cat.code.hint": { zh: "找编程助手（IDE+终端） →", en: "Coding agents (IDE + CLI) →" },
    "cat.tools.hint": { zh: "找办公助手、创作工具 →", en: "Productivity & creation →" },

    // ==================== 推荐面板 ====================
    "rec.writing": { zh: "✍️ 写作推荐", en: "✍️ Top Writing Picks" },
    "rec.coding": { zh: "💻 编程推荐", en: "💻 Top Coding Picks" },
    "rec.image": { zh: "🎨 画图推荐", en: "🎨 Top Image Picks" },
    "rec.video": { zh: "🎬 视频推荐", en: "🎬 Top Video Picks" },
    "rec.general": { zh: "🤖 通用推荐", en: "🤖 Top All-Rounders" },
    "rec.compare": { zh: "查看完整对比表 →", en: "See full comparison →" },

    // ==================== 首页热门模型 ====================
    "hot.title": { zh: "🔥 大家都在看", en: "🔥 Most Popular" },
    "hot.subtitle": { zh: "最热门的3个模型，点卡片直达详情", en: "Top 3 models — tap any card for details" },
    "hot.detail": { zh: "查看详情 →", en: "View details →" },
    "hot.viewAll": { zh: "查看全部44个模型 →", en: "View all 44 models →" },
    "hot.ds.name": { zh: "DeepSeek", en: "DeepSeek" },
    "hot.ds.company": { zh: "深度求索", en: "DeepSeek AI" },
    "hot.ds.desc": { zh: "完全免费无限制，推理能力极强。中文原生支持，V4.1即将支持多模态", en: "Completely free, no limits. Top reasoning, native Chinese support. V4.1 multimodal coming soon" },
    "hot.ds.tags": { zh: "编程 · 推理 · 中文原生", en: "Coding · Reasoning · Native Chinese" },
    "hot.kimi.name": { zh: "Kimi", en: "Kimi" },
    "hot.kimi.company": { zh: "月之暗面", en: "Moonshot AI" },
    "hot.kimi.desc": { zh: "中文写作最细腻，长文案生成不跑题。深度研究+PPT生成，打工人神器", en: "Best Chinese writing quality, stays on-topic for long copy. Deep research + PPT generation — office worker's secret weapon" },
    "hot.kimi.tags": { zh: "写作 · PPT · 深度研究", en: "Writing · PPT · Deep Research" },
    "hot.qwen.name": { zh: "通义千问", en: "Tongyi Qianwen" },
    "hot.qwen.company": { zh: "阿里巴巴", en: "Alibaba Cloud" },
    "hot.qwen.desc": { zh: "阿里云生态深度集成，企业级首选。百炼平台新用户送7000万免费Tokens", en: "Deep Alibaba ecosystem integration, enterprise-grade. Bailian platform offers 70M free tokens for new users" },
    "hot.qwen.tags": { zh: "企业级 · 开源 · 阿里云", en: "Enterprise · Open Source · Alibaba Cloud" },

    // ==================== 模型库页面 ====================
    "models.title": { zh: "📦 模型库", en: "📦 Model Library" },
    "models.total": { zh: "共收录 <strong id=\"totalCount\">44</strong> 个产品，涵盖 AI 大模型、Agent 平台、图像/视频/代码模型、AI辅助工具。点击卡片跳转官网。信息最后更新：2026年7月30日", en: "<strong id=\"totalCount\">44</strong> tools listed — LLMs, Agent platforms, image/video/coding models & AI tools. Click cards to visit official sites. Last updated: July 30, 2026" },
    "models.search": { zh: "搜模型（名称/功能/公司/标签）……", en: "Search models (name, feature, company, tag)..." },
    "models.filter.all": { zh: "全部", en: "All" },
    "models.filter.llm": { zh: "🗣 语言模型", en: "🗣 Chat & LLMs" },
    "models.filter.agent": { zh: "🤖 Agent平台", en: "🤖 Agent Platforms" },
    "models.filter.image": { zh: "🎨 图像模型", en: "🎨 Image Models" },
    "models.filter.video": { zh: "🎬 视频模型", en: "🎬 Video Models" },
    "models.filter.code": { zh: "💻 代码模型", en: "💻 Coding Tools" },
    "models.filter.tools": { zh: "🛠 AI辅助工具", en: "🛠 AI Tools" },
    "models.codeNote": { zh: "💡 代码模型包含 IDE 插件（Cursor/Copilot）和终端 Agent（Codex/Claude Code），后者在命令行运行，可自主读项目、写代码、跑测试。", en: "💡 Coding tools include IDE plugins (Cursor, Copilot) and CLI agents (Codex, Claude Code) that run in terminal — they read your codebase, write code, and run tests autonomously." },
    "models.toolsNote": { zh: "🛠 AI辅助工具包含设计/写作/语音/SEO等周边办公工具，覆盖创作与运营全流程。", en: "🛠 AI Tools covering design, writing, voice, SEO & more — supporting your creative and operational workflows." },
    "models.empty": { zh: "没有找到匹配的模型，试试其他关键词？", en: "No models found. Try different keywords?" },
    "models.footer1": { zh: "AI家AI户 · 数据最后更新于 2026年7月30日 · 信息来源于各模型官方网站及公开资料", en: "AI Home · Last updated July 30, 2026 · Data sourced from official websites & public docs" },
    "models.footer2": { zh: "所有模型信息均标注来源。点击卡片直接跳转对应官网。", en: "All model info cites sources. Click any card to visit the official site." },

    // ==================== 对比页 ====================
    "compare.title": { zh: "⚖️ 横向对比", en: "⚖️ Side-by-side Comparison" },
    "compare.subtitle": { zh: "44个AI产品按6大品类并排对比，价格功能一目了然。数据最后更新：2026年7月30日。所有信息标注来源，用前请核实官网最新信息。", en: "44 AI tools compared across 6 categories. Pricing and features at a glance. Last updated: July 30, 2026. All info cites sources — verify before using." },
    "compare.infoTitle": { zh: "📊 基础信息对比", en: "📊 Basic Info" },
    "compare.pricingTitle": { zh: "💰 付费方案速览", en: "💰 Pricing at a Glance" },
    "compare.sceneTitle": { zh: "🎯 按使用场景选", en: "🎯 By Use Case" },
    "compare.agentTitle": { zh: "🤖 Agent平台横向对比", en: "🤖 Agent Platform Comparison" },
    "compare.agentDesc": { zh: "语言模型是「引擎」，Agent平台是「整车」——帮你把AI能力串成自动化流程。以下7大Agent平台按关键维度并排对比。", en: "LLMs are the engine; Agent platforms are the whole car — turning AI power into automated workflows. 7 major platforms compared." },
    "compare.imageTitle": { zh: "🎨 图像模型横向对比", en: "🎨 Image Model Comparison" },
    "compare.imageDesc": { zh: "5大主流AI图像生成工具按关键维度并排对比——从免费开源到专业付费，覆盖所有预算。", en: "5 major AI image tools compared — from free open-source to pro paid, all budgets covered." },
    "compare.videoTitle": { zh: "🎬 视频模型横向对比", en: "🎬 Video Model Comparison" },
    "compare.videoDesc": { zh: "5大AI视频生成工具横向对比——从免费国货到影视级工具，按需选择。", en: "5 AI video tools compared — from free domestic to pro cinematic." },
    "compare.codeTitle": { zh: "💻 代码模型横向对比", en: "💻 Coding Tool Comparison" },
    "compare.codeDesc": { zh: "5大AI编程工具横向对比——从免费国货到国际顶流，覆盖IDE插件和独立IDE。", en: "5 AI coding tools compared — from free domestic to top international, covering IDE plugins and standalone IDEs." },
    "compare.disclaimer": { zh: "⚠️ 以上推荐基于2026年6月公开信息，各模型更新频繁，建议做最终决策前点进官网确认。", en: "⚠️ Recommendations based on public info as of June 2026. Models update frequently — visit official sites before deciding." },

    // --- compare table dimension labels ---
    "compare.dim.dimension": { zh: "维度", en: "Dimension" },
    "compare.dim.company": { zh: "开发商", en: "Developer" },
    "compare.dim.freePlan": { zh: "免费版", en: "Free Tier" },
    "compare.dim.minPrice": { zh: "最低付费", en: "Min Paid" },
    "compare.dim.cnAccess": { zh: "中国访问", en: "China Access" },
    "compare.dim.cnSupport": { zh: "中文支持", en: "Chinese Support" },
    "compare.dim.context": { zh: "上下文", en: "Context" },
    "compare.dim.apiAvailable": { zh: "API可用", en: "API Available" },
    "compare.dim.bestFor": { zh: "最适合", en: "Best For" },
    "compare.dim.model": { zh: "模型", en: "Model" },
    "compare.dim.freeCapability": { zh: "免费版能力", en: "Free Capabilities" },
    "compare.dim.entryPrice": { zh: "入门付费", en: "Entry Price" },
    "compare.dim.topPrice": { zh: "顶配付费", en: "Top Price" },
    "compare.dim.yourScene": { zh: "你的场景", en: "Your Scenario" },
    "compare.dim.topPick": { zh: "首推", en: "Top Pick" },
    "compare.dim.alternative": { zh: "备选", en: "Alternative" },
    "compare.dim.notRec": { zh: "不推荐", en: "Not Recommended" },
    "compare.dim.positioning": { zh: "定位", en: "Positioning" },
    "compare.dim.selfHosted": { zh: "开源/自托管", en: "Open Source / Self-hosted" },
    "compare.dim.vertical": { zh: "垂直领域", en: "Vertical" },
    "compare.dim.bestForWho": { zh: "最适合谁", en: "Best For Whom" },
    "compare.dim.bestAbility": { zh: "最强能力", en: "Best Ability" },
    "compare.dim.qualityLevel": { zh: "画质水平", en: "Quality" },
    "compare.dim.genSpeed": { zh: "生成速度", en: "Speed" },
    "compare.dim.productForm": { zh: "产品形态", en: "Product Form" },
    "compare.dim.coreAbility": { zh: "核心能力", en: "Core Ability" },
    "compare.dim.category": { zh: "类别", en: "Category" },


    "compare.llm": { zh: "语言模型对比", en: "LLM Comparison" },
    "compare.agent": { zh: "Agent 平台对比", en: "Agent Platform Comparison" },
    "compare.image": { zh: "图像模型对比", en: "Image Model Comparison" },
    "compare.video": { zh: "视频模型对比", en: "Video Model Comparison" },
    "compare.code": { zh: "代码模型对比", en: "Coding Tool Comparison" },
    "compare.toolsTitle": { zh: "🛠 AI辅助工具横向对比", en: "🛠 AI Tools Comparison" },
    "compare.toolsDesc": { zh: "8款AI办公辅助工具横向对比——覆盖写作、设计、语音、视频、SEO，一站式对比选型。", en: "8 AI productivity tools compared — writing, design, voice, video & SEO, all in one place." },
    "compare.tools": { zh: "AI辅助工具对比", en: "AI Tools Comparison" },
    "compare.footer1": { zh: "AI家AI户 · 数据最后更新于 2026年7月30日 · 信息来源于各模型官方网站及公开资料", en: "AI Home · Last updated July 30, 2026 · Data sourced from official websites & public docs" },

    // ==================== 新闻页 ====================
    "news.title": { zh: "📰 AI行业动态", en: "📰 AI Industry News" },
    "news.desc": { zh: "标题链接直达信息出处，点击查看原文。本站不做二次解读，仅做信息导航。", en: "Headlines link directly to sources. No commentary — just a news index." },
    "news.about": { zh: "关于这个模块", en: "About This Section" },
    "news.aboutDesc": { zh: "这里<strong>不做新闻解读或二次加工</strong>——只做标题索引。每条标题对应一个链接，直接跳转到信息来源网站。信息筛选偏向中文用户关心的AI动态：国产大模型、国际旗舰更新、价格变动、行业趋势。", en: "<strong>No commentary or spin</strong> — just a headline index. Each title links to the source. Curated for Chinese-speaking users: domestic LLMs, global flagship updates, pricing changes, industry trends." },
    "news.updated": { zh: "更新频率：不定期。有大新闻时手动添加。最后整理：<strong>2026年6月26日</strong>", en: "Updated irregularly — when big news breaks. Last curated: <strong>June 26, 2026</strong>" },
    "news.footer1": { zh: "AI家AI户 · 数据最后更新于 2026年7月30日 · 信息来源于各模型官方网站及公开资料", en: "AI Home · Last updated July 30, 2026 · Data sourced from official websites & public docs" },
    "news.footer2": { zh: "标题链接直达出处，不做二次解读。用前请核实官方最新信息。", en: "Headlines link to sources. No commentary. Verify with official sites before using." },

    // ==================== 关于页 ====================
    "about.title": { zh: "🙋 关于 AI家AI户", en: "🙋 About AI Home" },
    "about.what": { zh: "这个站是干嘛的？", en: "What is this site?" },
    "about.whatDesc": { zh: "AI家AI户是一个AI工具对比导航站——覆盖 <strong>AI大模型、图像模型、视频模型、代码模型、Agent平台、AI辅助工具</strong> 六大品类。我们的目标是：<strong>让你三秒看清哪个工具适合你</strong>——不用翻十篇评测、不用看20分钟视频、不用一个个官网去翻价格。", en: "AI Home is a comparison navigator for AI tools — covering <strong>LLMs, image models, video models, coding tools, Agent platforms, and AI productivity tools</strong>. Our goal: <strong>help you pick the right tool in seconds</strong> — no scrolling through 10 reviews, no watching 20-minute videos, no digging through pricing pages one by one." },
    "about.whatDesc2": { zh: "你只需要打开对比表，选维度、看差异、点链接——剩下的你自己判断。", en: "Open the comparison table, check differences, click a link — the rest is up to you." },
    "about.not": { zh: "我们不是什么", en: "What we're not" },
    "about.not1": { zh: "不是权威评测机构——我们不做深度跑分，不编造「最佳」结论", en: "Not an authority — we don't run benchmarks or make up 'best' verdicts" },
    "about.not2": { zh: "不是AI厂商的广告位——所有信息标注来源，你可以自己去核实", en: "Not an ad space — every piece of info cites its source, go verify yourself" },
    "about.not3": { zh: "不是一次性评测——我们会持续更新，但速度取决于业余时间", en: "Not a one-time review — we update regularly, but speed depends on free time" },
    "about.trust": { zh: "信息靠谱吗？", en: "Is the info reliable?" },
    "about.trustDesc": { zh: "所有模型信息（价格、功能、适用场景）均来自：", en: "All model info (pricing, features, use cases) comes from:" },
    "about.trust1": { zh: "各模型官方网站", en: "Official model websites" },
    "about.trust2": { zh: "公开的价格页面和API文档", en: "Public pricing pages & API docs" },
    "about.trust3": { zh: "第三方价格对比站（如 aipricecompare.org、Artificial Analysis）", en: "Third-party comparison sites (aipricecompare.org, Artificial Analysis, etc.)" },
    "about.trustDesc2": { zh: "我们只是做<strong>整理和翻译</strong>，不是做原创评测。每条数据都标注了来源，你可以自己去验证。", en: "We <strong>curate and translate</strong>, not review. Every data point cites its source — go check." },
    "about.update": { zh: "多久更新一次？", en: "How often is it updated?" },
    "about.updateDesc": { zh: "AI模型更新速度极快（2026年3月一个月内四家同步发布新版本），我们会尽量保持追踪。但由于是业余时间维护，<strong>不承诺每日更新</strong>。", en: "AI models move fast (four companies shipped new versions in March 2026 alone). We track as best we can, but this is a side project — <strong>not a daily feed</strong>." },
    "about.updateDesc2": { zh: "页面底部始终标注<strong>最后更新日期</strong>，你可以据此判断信息时效性。", en: "The footer always shows the <strong>last update date</strong> — use that to gauge freshness." },
    "about.name": { zh: "为什么叫「AI家AI户」？", en: "Why the name?" },
    "about.nameDesc": { zh: "谐音「家家户户」。希望未来的AI能像家用电器一样，走入每个家庭——而我们的站，就是你挑选「AI家电」时的选购指南。", en: "The name plays on the Chinese phrase for 'every household'. We hope AI becomes as common as home appliances — and this site is your shopping guide for picking the right ones." },
    "about.count": { zh: "目前收录", en: "Currently Listed" },
    "about.countNum": { zh: "44个产品", en: "44 tools" },
    "about.countDetail": { zh: "12个语言模型 + 7个Agent平台 + 5个图像模型 + 6个视频模型 + 7个代码模型 + 8个AI辅助工具", en: "12 LLMs + 7 Agent platforms + 5 image models + 6 video models + 7 coding tools + 8 AI productivity tools" },
    "about.lastUpdated": { zh: "最后更新：<strong>2026年7月30日</strong>", en: "Last updated: <strong>June 26, 2026</strong>" },
    "about.footer1": { zh: "AI家AI户 · 数据最后更新于 2026年7月30日 · 信息来源于各模型官方网站及公开资料", en: "AI Home · Last updated July 30, 2026 · Data sourced from official websites & public docs" },
    "about.footer2": { zh: "这不是权威解读，只是帮你省掉搜索时间。用前请核实官方最新信息。", en: "Not an authority — just saving you search time. Verify with official sources before using." },

    // ==================== 404 页 ====================
    "404.title": { zh: "抱歉，你要找的页面不存在。", en: "Sorry, that page doesn't exist." },
    "404.home": { zh: "返回首页", en: "Back to Home" },

    // ==================== 自定义对比页 ====================
    "compareCustom.title": { zh: "🔧 自定义对比", en: "🔧 Custom Compare" },
    "compareCustom.desc": { zh: "勾选你想对比的模型（最少2个，最多6个），点击「开始对比」生成并排表格。", en: "Check the models you want to compare (min 2, max 6), then click Compare to generate a side-by-side table." },
    "compareCustom.selectedHint": { zh: "已选 <strong id=\"selectedCount\">0</strong> / 6 个", en: "<strong id=\"selectedCount\">0</strong> / 6 selected" },
    "compareCustom.btnMin": { zh: "开始对比（至少选2个）", en: "Start Compare (pick at least 2)" },
    "compareCustom.btnReady": { zh: "开始对比（已选{0}个）", en: "Start Compare ({0} selected)" },
    "compareCustom.btnMax": { zh: "最多选6个（当前{0}个）", en: "Max 6 (currently {0})" },
    "compareCustom.reset": { zh: "← 重新选择", en: "← Back to Select" },
    "compareCustom.copyLink": { zh: "🔗 复制对比链接", en: "🔗 Copy Compare Link" },
    "compareCustom.copied": { zh: "✅ 链接已复制，可直接分享", en: "✅ Link copied, ready to share" },
    "compareCustom.dimCol": { zh: "维度", en: "Dimension" },
    "compareCustom.footer": { zh: "AI家AI户 · 自定义对比工具 · 数据最后更新于 2026年7月30日", en: "AI Home · Custom Compare Tool · Last updated July 30, 2026" },
    "compareCustom.sourceNote": { zh: "💡 数据来源于各模型官方网站及公开资料，最后更新：2026年7月30日。建议做最终决策前点击模型名进入官网核实。", en: "💡 Data sourced from official websites & public docs. Last updated: July 30, 2026. We recommend visiting the official site via the model name link before making a final decision." },
    "compareCustom.catCount": { zh: "{0}个", en: "{0} tools" },
    "compareCustom.copyPrompt": { zh: "复制以下链接分享对比结果：", en: "Copy this link to share the comparison:" },
    "compareCustom.dim.apiAvailableYes": { zh: "可用", en: "Available" },
    "compareCustom.dim.apiAvailableNo": { zh: "不可用", en: "Unavailable" },

    // ==================== AI选型器 (picker) ====================
    "picker.title": { zh: "🤔 我该用哪个AI工具？", en: "🤔 Which AI tool should I use?" },
    "picker.desc": { zh: "回答4个问题，从35个模型中精准匹配最适合你的AI", en: "Answer 4 questions — get the best AI match from 35 models" },
    "picker.loading": { zh: "加载中...", en: "Loading..." },
    "picker.footerHint": { zh: "已有明确想对比的目标？", en: "Already know what to compare?" },
    "picker.goCustom": { zh: "→ 去自定义对比，自由勾选模型", en: "→ Custom Compare — pick any models" },
    "picker.goVs": { zh: "→ 看热门模型一对一对比", en: "→ Top 1v1 Comparisons" },
    "picker.footerBrand": { zh: "AI家AI户", en: "AI Home" },
    "picker.footerTagline": { zh: "便利店模式AI选型 — 不是权威，是省事", en: "Convenience-store style AI picks — saving time, not claiming authority" },
    "picker.step1": { zh: "你主要用AI来干什么？", en: "What do you mainly use AI for?" },
    "picker.step2": { zh: "你是AI新手还是老手？", en: "How experienced are you with AI?" },
    "picker.step3": { zh: "你的预算是多少？", en: "What's your budget?" },
    "picker.step4": { zh: "你的「AI人格」是？", en: "Your AI personality?" },
    "picker.back": { zh: "← 上一步", en: "← Back" },
    "picker.resultCrown": { zh: "🏆 最适合你的是", en: "🏆 Best match for you" },
    "picker.resultAlt": { zh: "📋 备选方案", en: "📋 Alternatives" },
    "picker.resultGo": { zh: "直达 ", en: "Go to " },
    "picker.resultLink": { zh: " →", en: " →" },
    "picker.btnReset": { zh: "🔄 重新测试", en: "🔄 Retake Quiz" },
    "picker.btnCompare": { zh: "📋 去自定义对比", en: "📋 Custom Compare" },
    "picker.btnShare": { zh: "📤 分享你的AI人格", en: "📤 Share Your AI Match" },
    "picker.shareOk": { zh: "✅ 链接已复制！分享给你的朋友看看他们适合哪个AI工具", en: "✅ Link copied! Share with friends to see which AI fits them" },
    "picker.sharePrompt": { zh: "复制这个链接分享：", en: "Copy this link to share:" },
    // Scene labels
    "picker.scene.code": { zh: "写代码", en: "Coding" },
    "picker.scene.codingDesc": { zh: "编程辅助、Debug、项目开发", en: "Code assistant, debugging, development" },
    "picker.scene.writing": { zh: "写作", en: "Writing" },
    "picker.scene.writingDesc": { zh: "写文章、论文、文案、邮件", en: "Articles, essays, copywriting, emails" },
    "picker.scene.image": { zh: "生成图片", en: "Images" },
    "picker.scene.imageDesc": { zh: "AI绘画、设计、插画、海报", en: "AI art, design, illustrations, posters" },
    "picker.scene.search": { zh: "搜索研究", en: "Research" },
    "picker.scene.searchDesc": { zh: "信息检索、深度分析、调研", en: "Info search, deep analysis, research" },
    "picker.scene.video": { zh: "生成视频", en: "Videos" },
    "picker.scene.videoDesc": { zh: "AI视频、短视频、动画", en: "AI video, short clips, animation" },
    "picker.scene.chat": { zh: "日常聊天", en: "Chat" },
    "picker.scene.chatDesc": { zh: "问答、陪伴、效率助手", en: "Q&A, companion, productivity" },
    // Experience labels
    "picker.exp.newbie": { zh: "新手", en: "Beginner" },
    "picker.exp.newbieDesc": { zh: "刚接触AI，最好打开就能用", en: "New to AI — just want it to work" },
    "picker.exp.some": { zh: "用过几个", en: "Some experience" },
    "picker.exp.someDesc": { zh: "试过几款，愿意探索新工具", en: "Tried a few, open to new tools" },
    "picker.exp.expert": { zh: "老手", en: "Expert" },
    "picker.exp.expertDesc": { zh: "明确偏好，追求性能天花板", en: "Know what I want, chasing peak performance" },
    // Budget labels
    "picker.budget.free": { zh: "零预算", en: "Zero budget" },
    "picker.budget.freeDesc": { zh: "只用免费就够了", en: "Free tools only" },
    "picker.budget.moderate": { zh: "轻度付费", en: "Light paid" },
    "picker.budget.moderateDesc": { zh: "月费50块以内可以接受", en: "Up to ~$7/month" },
    "picker.budget.unlimited": { zh: "愿意付费", en: "Willing to pay" },
    "picker.budget.unlimitedDesc": { zh: "好用就买，预算不是问题", en: "If it's good, I'll pay" },
    // Personality labels
    "picker.person.pragmatist": { zh: "务实派", en: "Pragmatist" },
    "picker.person.pragmatistDesc": { zh: "稳定可靠最重要，不想折腾", en: "Stability matters most, no fuss" },
    "picker.person.creator": { zh: "创作者", en: "Creator" },
    "picker.person.creatorDesc": { zh: "输出质量是唯一标准", en: "Output quality above all" },
    "picker.person.efficiency": { zh: "效率控", en: "Speed seeker" },
    "picker.person.efficiencyDesc": { zh: "时间比钱贵，越快越好", en: "Time is money — faster = better" },
    "picker.person.privacy": { zh: "独行侠", en: "Lone wolf" },
    "picker.person.privacyDesc": { zh: "数据不上云端，本地优先", en: "Keep data local, avoid cloud" },
    "picker.tag.typeSuffix": { zh: "型", en: " Type" },
    "picker.tag.sceneSuffix": { zh: "场景", en: "" },

    // ==================== VS 对比首页 ====================
    "vs.title": { zh: "🔥 热门模型一对一对比", en: "🔥 Top Model 1v1 Comparisons" },
    "vs.desc": { zh: "挑你最纠结的两个模型，看深度拆解。数据全部来自各模型官方网站及公开资料，最后更新于2026年7月30日。", en: "Pick the two models you're torn between. All data sourced from official sites & public docs, last updated July 30, 2026." },
    "vs.hint": { zh: "💡 如果这里没有你想比的组合，试试 <a href=\"../compare-custom.html\">自定义对比工具</a>，勾选任意模型一键生成对比表。", en: "💡 Don't see your matchup? Try the <a href=\"../compare-custom.html\">Custom Compare tool</a> — pick any models and generate a table." },
    "vs.seoHint": { zh: "💡 这些对比页的标题都经过SEO优化，搜\"DeepSeek ChatGPT 对比\"\"Claude ChatGPT 对比\"等关键词会直接跳转到对应页面。<br>同时也支持 <a href=\"../compare-custom.html\">勾选任意模型自定义对比</a>，一键生成并排表，复制链接分享。", en: "💡 These pages are SEO-optimized — searching \"DeepSeek vs ChatGPT\" etc. leads directly here.<br>Also try <a href=\"../compare-custom.html\">Custom Compare</a> to mix any models." },
    "vs.footer": { zh: "AI家AI户 · 热门模型对比 · 数据最后更新于 2026年7月30日 · <a href=\"../index.html\">返回首页</a>", en: "AI Home · Top Comparisons · Last updated July 30, 2026 · <a href=\"../index.html\">Home</a>" },
    "vs.cardCta": { zh: "查看详细对比", en: "See full comparison" },
    "vs.card1.desc": { zh: "免费天花板和综合全能王的正面交锋。完全免费无限制使用的DeepSeek，对上每月$20但功能最全的ChatGPT——看完就知道哪个更适合你的预算和使用场景。", en: "The free champion vs the all-rounder. Completely free & unlimited DeepSeek faces the $20/month ChatGPT with the widest feature set — see which fits your budget and needs." },
    "vs.card1.tag": { zh: "免费 vs 付费", en: "Free vs Paid" },
    "vs.card2.desc": { zh: "2026年两大顶流AI的正面对决。Claude Opus 4.8 登顶编程榜（AGI Ranker 81.03分），ChatGPT GPT-5.6 综合体验最均衡。同样$20/月，钱该给谁？", en: "2026's top two AI titans face off. Claude Opus 4.8 tops coding charts (AGI Ranker 81.03), while ChatGPT GPT-5.6 offers the most balanced experience. Both $20/month — who gets your money?" },
    "vs.card2.tag": { zh: "编程对决", en: "Coding Showdown" },
    "vs.card3.desc": { zh: "国产AI长文写作两大王牌。月之暗面Kimi的中文写作细腻度和阿里巴巴通义千问的阿里云生态，到底哪个更适合你的日常办公？", en: "China's top two long-form writing AIs. Moonshot Kimi's nuanced Chinese writing vs Alibaba Tongyi's cloud ecosystem — which fits your daily work?" },
    "vs.card3.tag": { zh: "国产对决", en: "China Showdown" },
    "vs.card4.desc": { zh: "两大免费国产AI的终极选择。DeepSeek擅长推理编程，Kimi擅长中文长文写作。预算为零的情况下，选推理派还是写作派？", en: "The ultimate free China AI choice. DeepSeek excels at reasoning & coding, Kimi dominates Chinese long-form writing. Zero budget — logic or prose?" },
    "vs.card4.tag": { zh: "免费国产", en: "Free & Chinese" },
    "vs.card5.desc": { zh: "独立AI IDE对战老牌IDE插件。Cursor的Agent模式和补全准确率对上Copilot的GitHub生态整合——不是简单选贵的，关键看你是什么类型的开发者。", en: "Standalone AI IDE vs veteran IDE plugin. Cursor's Agent mode & completion accuracy vs Copilot's GitHub ecosystem — it's not just about price, it's about your dev style." },
    "vs.card5.tag": { zh: "编程工具", en: "Coding Tools" },
    // Dimension labels
    "compareCustom.dim.company": { zh: "开发商", en: "Company" },
    "compareCustom.dim.priceLabel": { zh: "价格", en: "Pricing" },
    "compareCustom.dim.priceDetail": { zh: "详细定价", en: "Pricing Details" },
    "compareCustom.dim.chineseSupport": { zh: "中文支持", en: "Chinese Support" },
    "compareCustom.dim.contextWindow": { zh: "上下文窗口", en: "Context Window" },
    "compareCustom.dim.apiAvailable": { zh: "API可用", en: "API Available" },
    "compareCustom.dim.released": { zh: "发布日期", en: "Release Date" },
    "compareCustom.dim.bestFor": { zh: "擅长领域", en: "Best For" },
    "compareCustom.dim.strengths": { zh: "核心优势", en: "Strengths" },
    "compareCustom.dim.weaknesses": { zh: "主要短板", en: "Weaknesses" },

    // ==================== 模型卡片字段 ====================
    "card.bestFor": { zh: "最适合", en: "Best for" },
    "card.viewAll": { zh: "查看全部产品 →", en: "Browse all tools →" },
    "card.free": { zh: "免费", en: "Free" },
    "card.freemium": { zh: "免费+付费", en: "Free+Paid" },
    "card.paid": { zh: "付费", en: "Paid" },

    // ==================== 模型详情页 ====================
    "detail.h1": { zh: " 怎么样？", en: " Review" },
    "detail.breadcrumb.home": { zh: "首页", en: "Home" },
    "detail.breadcrumb.models": { zh: "模型库", en: "Models" },
    "detail.coreParams": { zh: "核心参数", en: "Specs" },
    "detail.param.price": { zh: "价格", en: "Price" },
    "detail.param.priceDetail": { zh: "定价详情", en: "Pricing Details" },
    "detail.param.cnSupport": { zh: "中文支持", en: "Chinese Support" },
    "detail.param.context": { zh: "上下文窗口", en: "Context Window" },
    "detail.param.api": { zh: "API", en: "API" },
    "detail.param.released": { zh: "发布日期", en: "Released" },
    "detail.param.bestFor": { zh: "擅长场景", en: "Best For" },
    "detail.prosCons": { zh: "优势与不足", en: "Pros & Cons" },
    "detail.pros": { zh: "✅ 优势", en: "✅ Pros" },
    "detail.cons": { zh: "⚠️ 不足", en: "⚠️ Cons" },
    "detail.tags": { zh: "功能标签", en: "Tags" },
    "detail.compare": { zh: "对比其他模型", en: "Compare with Others" },
    "detail.compareAll": { zh: "查看全部横评 →", en: "See all comparisons →" },
    "detail.back": { zh: "← 返回模型库", en: "← Back to Models" },
    "detail.footer": { zh: "AI家AI户 · 数据最后更新于 2026年7月30日 · 信息来源于各模型官方网站及公开资料", en: "AI Home · Last updated July 30, 2026 · Data sourced from official websites & public docs" },
    "detail.footer2": { zh: "这不是权威解读，只是帮你省掉搜索时间。用前请核实官方最新信息。", en: "Not an authority — just saving you search time. Verify with official sources before using." },

    // ==================== 尾部 ====================

    // ==================== 技能包页 ====================
    "skills.title": { zh: "🧩 AI 技能包", en: "🧩 AI Skills Hub" },
    "skills.subtitle": { zh: "收录 <strong id=\"totalCount\">0</strong> 个精选 Agent 技能，来自 50+ 官方团队和社区。", en: "<strong id=\"totalCount\">0</strong> curated agent skills from 50+ official teams and the community." },
    "skills.updated": { zh: "数据更新: 2026-07-13", en: "Updated: 2026-07-13" },
    "skills.noResults": { zh: "没有找到匹配的技能，试试其他关键词", en: "No matching skills found. Try different keywords." },
    "skills.footer1": { zh: "数据来源：<a href=\"https://github.com/VoltAgent/awesome-agent-skills\" target=\"_blank\" rel=\"noopener\">VoltAgent/awesome-agent-skills</a> 和 <a href=\"https://github.com/anbeime/skill\" target=\"_blank\" rel=\"noopener\">anbeime/skill</a>，按 Apache 2.0 / MIT 许可证开源。本站仅做聚合索引，具体使用规则请查阅各技能仓库。", en: "Data from <a href=\"https://github.com/VoltAgent/awesome-agent-skills\" target=\"_blank\" rel=\"noopener\">VoltAgent/awesome-agent-skills</a> and <a href=\"https://github.com/anbeime/skill\" target=\"_blank\" rel=\"noopener\">anbeime/skill</a>, under Apache 2.0 / MIT license. This site is an index only — check individual repos for usage terms." },
    "skills.footer2": { zh: "💡 技能(Skills)是AI Agent的\"插件\"，安装后可以赋予AI阅读PDF、生成PPT、调用API等专项能力。点击卡片跳转GitHub查看安装方法。", en: "💡 Skills are AI Agent \"plugins\" — install them to give AI abilities like reading PDFs, creating PPT, calling APIs, etc. Click a card to see install instructions on GitHub." },

    // ==================== 隐私政策页 ====================
    "privacy.title": { zh: "隐私政策", en: "Privacy Policy" },
    "privacy.lastUpdated": { zh: "最后更新：2026年7月30日", en: "Last updated: July 30, 2026" },
    "privacy.intro": { zh: "AI家AI户（myaishome.com）重视你的隐私。本隐私政策说明了我们如何收集、使用和保护你的信息。", en: "AI Home (myaishome.com) values your privacy. This Privacy Policy explains how we collect, use, and protect your information." },
    "privacy.h1_data": { zh: "📊 我们收集什么数据", en: "📊 What Data We Collect" },
    "privacy.data1": { zh: "<strong>自动收集的技术信息：</strong>当你访问本网站时，我们会通过 Google Analytics（Google分析）自动收集：IP地址（匿名化处理）、浏览器类型和设备信息、访问的页面和停留时间、来源渠道（如搜索引擎、社交媒体）", en: "<strong>Automatically collected technical data:</strong> When you visit this site, we automatically collect via Google Analytics: anonymized IP address, browser type and device info, pages visited and time spent, referral sources (e.g. search engines, social media)." },
    "privacy.data2": { zh: "<strong>我们<u>不会</u>收集：</strong>姓名、邮箱、电话号码等个人身份信息（除非你主动通过联系邮箱发送给我们）", en: "<strong>We <u>do not</u> collect:</strong> Names, emails, phone numbers, or other personally identifiable information (unless you voluntarily send them to us via our contact email)." },
    "privacy.h1_how": { zh: "🔧 我们如何使用数据", en: "🔧 How We Use Data" },
    "privacy.how1": { zh: "了解网站访问情况（哪些页面受欢迎、用户从哪里来）", en: "Understanding site traffic (popular pages, traffic sources)." },
    "privacy.how2": { zh: "改进网站内容和用户体验", en: "Improving content and user experience." },
    "privacy.how3": { zh: "展示个性化广告（详见下方广告说明）", en: "Displaying personalized ads (see Advertising section below)." },
    "privacy.h1_cookies": { zh: "🍪 关于 Cookie", en: "🍪 About Cookies" },
    "privacy.cookies1": { zh: "Cookie 是网站存储在浏览器中的小文件，用于记住你的偏好和统计访问数据。本网站使用以下类型的 Cookie：", en: "Cookies are small files stored in your browser that remember preferences and track usage. This site uses the following types of cookies:" },
    "privacy.cookies2": { zh: "<strong>必要性 Cookie：</strong>用于记住你的语言偏好（中文/英文）和 Cookie 同意状态，无法关闭。", en: "<strong>Essential Cookies:</strong> Remember your language preference (Chinese/English) and cookie consent status. Cannot be disabled." },
    "privacy.cookies3": { zh: "<strong>分析 Cookie（Google Analytics）：</strong>用于统计网站访问数据，帮助我们了解哪些内容对你有用。", en: "<strong>Analytics Cookies (Google Analytics):</strong> Track site usage to help us understand which content is useful to you." },
    "privacy.cookies4": { zh: "<strong>广告 Cookie（Google AdSense）：</strong>用于展示你可能感兴趣的个性化广告。", en: "<strong>Advertising Cookies (Google AdSense):</strong> Used to show personalized ads that may interest you." },
    "privacy.cookies5": { zh: "你可以在浏览器设置中管理或禁用 Cookie（具体方法因浏览器而异）。禁用 Cookie 不影响网站正常使用，但可能导致语言偏好不会被记住。", en: "You can manage or disable cookies in your browser settings (methods vary by browser). Disabling cookies won't affect site functionality, but your language preference may not be saved." },
    "privacy.h1_ads": { zh: "📢 广告说明", en: "📢 Advertising" },
    "privacy.ads1": { zh: "本网站使用 <strong>Google AdSense</strong> 展示广告。Google 使用 Cookie 根据你的浏览历史展示个性化广告。", en: "This site uses <strong>Google AdSense</strong> to display ads. Google uses cookies to show personalized ads based on your browsing history." },
    "privacy.ads2": { zh: "你可以通过 <a href=\"https://adssettings.google.com\" target=\"_blank\" rel=\"noopener\">Google 广告设置</a> 管理广告偏好，或访问 <a href=\"https://www.aboutads.info/\" target=\"_blank\" rel=\"noopener\">www.aboutads.info</a> 关闭个性化广告。", en: "You can manage ad preferences at <a href=\"https://adssettings.google.com\" target=\"_blank\" rel=\"noopener\">Google Ad Settings</a>, or opt out of personalized ads at <a href=\"https://www.aboutads.info/\" target=\"_blank\" rel=\"noopener\">www.aboutads.info</a>." },
    "privacy.ads3": { zh: "本网站使用的广告服务商：Google AdSense。", en: "Advertising providers used on this site: Google AdSense." },
    "privacy.h1_third": { zh: "🔗 第三方服务", en: "🔗 Third-Party Services" },
    "privacy.third1": { zh: "本网站链接了大量AI模型和服务商的官方网站。点击这些链接后，你将离开本网站，对方网站的隐私政策适用。我们不对第三方网站的隐私做法负责。", en: "This site links to many AI model and service provider websites. Clicking these links takes you away from our site, and their privacy policies will apply. We are not responsible for third-party privacy practices." },
    "privacy.h1_rights": { zh: "👤 你的权利", en: "👤 Your Rights" },
    "privacy.rights1": { zh: "根据适用的数据保护法律（如 GDPR），你有权：访问我们持有的关于你的数据、要求更正或删除你的数据、限制或反对数据处理、数据可携带权。", en: "Under applicable data protection laws (e.g. GDPR), you have the right to: access data we hold about you, request correction or deletion, restrict or object to processing, data portability." },
    "privacy.rights2": { zh: "由于我们不收集个人身份信息，大多数请求我们将无法处理（因为我们无法识别你的身份）。但如果你有任何隐私问题，欢迎联系我们。", en: "Since we do not collect personally identifiable information, most requests cannot be fulfilled (we can't identify you). But if you have privacy concerns, please reach out." },
    "privacy.h1_contact": { zh: "📧 联系我们", en: "📧 Contact Us" },
    "privacy.contact1": { zh: "如果你对本隐私政策有任何疑问，请发送邮件至：<strong>195486937@qq.com</strong>", en: "For questions about this Privacy Policy, email: <strong>195486937@qq.com</strong>" },
    "privacy.contact2": { zh: "我们会在7个工作日内回复。", en: "We will respond within 7 business days." },
    "privacy.footer": { zh: "AI家AI户 · 隐私政策 · myaishome.com", en: "AI Home · Privacy Policy · myaishome.com" },

    // ==================== Cookie 同意弹窗 ====================
    "cookie.title": { zh: "🍪 Cookie 使用说明", en: "🍪 Cookie Notice" },
    "cookie.text": { zh: "本网站使用 Cookie 来记住你的语言偏好、统计访问数据（Google Analytics），以及展示个性化广告（Google AdSense）。点击「接受」即表示同意。", en: "This site uses cookies to remember your language preference, track usage (Google Analytics), and show personalized ads (Google AdSense). Click \"Accept\" to agree." },
    "cookie.accept": { zh: "接受", en: "Accept" },
    "cookie.decline": { zh: "拒绝", en: "Decline" },
    "cookie.more": { zh: "了解更多", en: "Learn more" },
};

// ==================== 获取翻译 ====================
function t(key) {
    const lang = localStorage.getItem('aihome_lang') || 'zh';
    const entry = i18n[key];
    return entry ? entry[lang] : key;
}

// ==================== 获取当前语言 ====================
function currentLang() {
    return localStorage.getItem('aihome_lang') || 'zh';
}

// ==================== 切换语言 ====================
function switchLang() {
    const current = currentLang();
    const next = current === 'zh' ? 'en' : 'zh';
    localStorage.setItem('aihome_lang', next);
    location.reload();
}

// ==================== 应用所有 data-i18n 翻译 ====================
function applyI18n() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = t(key);
        } else if (el.querySelector('.sb-icon')) {
            // 保留 SVG 图标子节点，只更新文字（最后一个文本节点）
            const svg = el.querySelector('.sb-icon');
            // 移除 SVG 之后的所有兄弟节点（旧文字）
            let sibling = svg.nextSibling;
            while (sibling) {
                const next = sibling.nextSibling;
                el.removeChild(sibling);
                sibling = next;
            }
            // 在 SVG 后面插入新文字
            el.appendChild(document.createTextNode(t(key)));
        } else {
            el.innerHTML = t(key);
        }
    });
}

// ==================== 页面加载时初始化 ====================
document.addEventListener('DOMContentLoaded', function() {
    applyI18n();

    // 更新语言切换按钮文字
    const langBtn = document.getElementById('langSwitch');
    if (langBtn) {
        langBtn.textContent = currentLang() === 'zh' ? 'EN' : '中文';
    }
});
