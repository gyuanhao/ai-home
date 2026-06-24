// AI家AI户 — 双语翻译系统 (i18n)
// 使用：页面上对需要翻译的元素加 data-i18n="key"，加载时自动替换
// 模型卡片在 renderModelCards 中根据当前语言切换字段

const i18n = {
    // ==================== 导航栏 ====================
    "nav.home": { zh: "首页", en: "Home" },
    "nav.models": { zh: "模型库", en: "Models" },
    "nav.compare": { zh: "横向对比", en: "Compare" },
    "nav.news": { zh: "新闻", en: "News" },
    "nav.compareCustom": { zh: "自定义对比", en: "Custom Compare" },
    "nav.vs": { zh: "热门对比", en: "Top Comparisons" },
    "nav.picker": { zh: "AI选型器", en: "AI Picker" },
    "nav.about": { zh: "关于", en: "About" },
    "nav.switch": { zh: "EN", en: "中文" },

    // ==================== 首页 Hero ====================
    "hero.title": { zh: "AI工具不会挑？<span>三秒给你答案</span>", en: "Too many AI tools? <span>Pick in seconds</span>" },
    "hero.subtitle": { zh: "35款产品横向对比，价格功能一目了然。<br>点场景 → 看推荐 → 直接跳转去用。", en: "35 tools compared side-by-side — pricing, features, all clear.<br>Pick a task → See top picks → Go use it." },
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
    "cat.subtitle": { zh: "43个模型覆盖6大品类，点击直接筛选", en: "43 models across 6 categories. Click to filter." },
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
    "cat.tools.hint": { zh: "找办公助手，含联盟折扣 →", en: "Productivity tools + discount links →" },

    // ==================== 推荐面板 ====================
    "rec.writing": { zh: "✍️ 写作推荐", en: "✍️ Top Writing Picks" },
    "rec.coding": { zh: "💻 编程推荐", en: "💻 Top Coding Picks" },
    "rec.image": { zh: "🎨 画图推荐", en: "🎨 Top Image Picks" },
    "rec.video": { zh: "🎬 视频推荐", en: "🎬 Top Video Picks" },
    "rec.general": { zh: "🤖 通用推荐", en: "🤖 Top All-Rounders" },
    "rec.compare": { zh: "查看完整对比表 →", en: "See full comparison →" },

    // ==================== 模型库页面 ====================
    "models.title": { zh: "📦 模型库", en: "📦 Model Library" },
    "models.total": { zh: "共收录 <strong id=\"totalCount\">35</strong> 个产品，涵盖 AI 大模型、Agent 平台、图像/视频/代码模型。点击卡片跳转官网。信息最后更新：2026年6月15日", en: "<strong id=\"totalCount\">35</strong> tools listed — LLMs, Agent platforms, image/video/coding models. Click cards to visit official sites. Last updated: June 15, 2026" },
    "models.search": { zh: "搜模型（名称/功能/公司/标签）……", en: "Search models (name, feature, company, tag)..." },
    "models.filter.all": { zh: "全部", en: "All" },
    "models.filter.llm": { zh: "🗣 语言模型", en: "🗣 Chat & LLMs" },
    "models.filter.agent": { zh: "🤖 Agent平台", en: "🤖 Agent Platforms" },
    "models.filter.image": { zh: "🎨 图像模型", en: "🎨 Image Models" },
    "models.filter.video": { zh: "🎬 视频模型", en: "🎬 Video Models" },
    "models.filter.code": { zh: "💻 代码模型", en: "💻 Coding Tools" },
    "models.filter.tools": { zh: "🛠 AI辅助工具", en: "🛠 AI Tools" },
    "models.codeNote": { zh: "💡 代码模型包含 IDE 插件（Cursor/Copilot）和终端 Agent（Codex/Claude Code），后者在命令行运行，可自主读项目、写代码、跑测试。", en: "💡 Coding tools include IDE plugins (Cursor, Copilot) and CLI agents (Codex, Claude Code) that run in terminal — they read your codebase, write code, and run tests autonomously." },
    "models.toolsNote": { zh: "🛠 AI辅助工具包含设计/写作/语音/SEO等周边工具，部分有联盟返佣。点击卡片通过本站专享链接可享折扣。", en: "🛠 AI Tools cover design, writing, voice, SEO & more. Some have affiliate discounts — click through for exclusive deals." },
    "models.empty": { zh: "没有找到匹配的模型，试试其他关键词？", en: "No models found. Try different keywords?" },
    "models.footer1": { zh: "AI家AI户 · 数据最后更新于 2026年6月15日 · 信息来源于各模型官方网站及公开资料", en: "AI Home · Last updated June 15, 2026 · Data sourced from official websites & public docs" },
    "models.footer2": { zh: "所有模型信息均标注来源。点击卡片直接跳转对应官网。", en: "All model info cites sources. Click any card to visit the official site." },

    // ==================== 对比页 ====================
    "compare.title": { zh: "⚖️ 横向对比", en: "⚖️ Side-by-side Comparison" },
    "compare.subtitle": { zh: "43个AI产品按6大品类并排对比，价格功能一目了然。数据最后更新：2026年6月23日。所有信息标注来源，用前请核实官网最新信息。", en: "43 AI tools compared across 6 categories. Pricing and features at a glance. Last updated: June 23, 2026. All info cites sources — verify before using." },
    "compare.infoTitle": { zh: "📊 基础信息对比", en: "📊 Basic Info" },
    "compare.pricingTitle": { zh: "💰 付费方案速览", en: "💰 Pricing at a Glance" },
    "compare.sceneTitle": { zh: "🎯 按使用场景选", en: "🎯 By Use Case" },
    "compare.agentTitle": { zh: "🤖 Agent平台横向对比", en: "🤖 Agent Platform Comparison" },
    "compare.agentDesc": { zh: "语言模型是「引擎」，Agent平台是「整车」——帮你把AI能力串成自动化流程。以下6大Agent平台按关键维度并排对比。", en: "LLMs are the engine; Agent platforms are the whole car — turning AI power into automated workflows. 6 major platforms compared." },
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
    "compare.dim.affiliate": { zh: "联盟返佣", en: "Affiliate" },

    "compare.llm": { zh: "语言模型对比", en: "LLM Comparison" },
    "compare.agent": { zh: "Agent 平台对比", en: "Agent Platform Comparison" },
    "compare.image": { zh: "图像模型对比", en: "Image Model Comparison" },
    "compare.video": { zh: "视频模型对比", en: "Video Model Comparison" },
    "compare.code": { zh: "代码模型对比", en: "Coding Tool Comparison" },
    "compare.toolsTitle": { zh: "🛠 AI辅助工具横向对比", en: "🛠 AI Tools Comparison" },
    "compare.toolsDesc": { zh: "8款AI办公辅助工具横向对比——覆盖写作、设计、语音、视频、SEO。部分工具支持联盟返佣，通过本站链接可享优惠。", en: "8 AI productivity tools compared — writing, design, voice, video & SEO. Some offer affiliate discounts via our links." },
    "compare.tools": { zh: "AI辅助工具对比", en: "AI Tools Comparison" },
    "compare.footer1": { zh: "AI家AI户 · 数据最后更新于 2026年6月15日 · 信息来源于各模型官方网站及公开资料", en: "AI Home · Last updated June 15, 2026 · Data sourced from official websites & public docs" },

    // ==================== 新闻页 ====================
    "news.title": { zh: "📰 AI行业动态", en: "📰 AI Industry News" },
    "news.desc": { zh: "标题链接直达信息出处，点击查看原文。本站不做二次解读，仅做信息导航。", en: "Headlines link directly to sources. No commentary — just a news index." },
    "news.about": { zh: "关于这个模块", en: "About This Section" },
    "news.aboutDesc": { zh: "这里<strong>不做新闻解读或二次加工</strong>——只做标题索引。每条标题对应一个链接，直接跳转到信息来源网站。信息筛选偏向中文用户关心的AI动态：国产大模型、国际旗舰更新、价格变动、行业趋势。", en: "<strong>No commentary or spin</strong> — just a headline index. Each title links to the source. Curated for Chinese-speaking users: domestic LLMs, global flagship updates, pricing changes, industry trends." },
    "news.updated": { zh: "更新频率：不定期。有大新闻时手动添加。最后整理：<strong>2026年6月15日</strong>", en: "Updated irregularly — when big news breaks. Last curated: <strong>June 15, 2026</strong>" },
    "news.footer1": { zh: "AI家AI户 · 数据最后更新于 2026年6月15日 · 信息来源于各模型官方网站及公开资料", en: "AI Home · Last updated June 15, 2026 · Data sourced from official websites & public docs" },
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
    "about.countNum": { zh: "43个产品", en: "43 tools" },
    "about.countDetail": { zh: "12个语言模型 + 6个Agent平台 + 5个图像模型 + 6个视频模型 + 7个代码模型 + 8个AI辅助工具", en: "12 LLMs + 6 Agent platforms + 5 image models + 6 video models + 7 coding tools + 8 AI productivity tools" },
    "about.lastUpdated": { zh: "最后更新：<strong>2026年6月15日</strong>", en: "Last updated: <strong>June 15, 2026</strong>" },
    "about.footer1": { zh: "AI家AI户 · 数据最后更新于 2026年6月15日 · 信息来源于各模型官方网站及公开资料", en: "AI Home · Last updated June 15, 2026 · Data sourced from official websites & public docs" },
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
    "compareCustom.footer": { zh: "AI家AI户 · 自定义对比工具 · 数据最后更新于 2026年6月15日", en: "AI Home · Custom Compare Tool · Last updated June 15, 2026" },
    "compareCustom.sourceNote": { zh: "💡 数据来源于各模型官方网站及公开资料，最后更新：2026年6月15日。建议做最终决策前点击模型名进入官网核实。", en: "💡 Data sourced from official websites & public docs. Last updated: June 15, 2026. We recommend visiting the official site via the model name link before making a final decision." },
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
    "picker.tag.typeSuffix": { zh: "型", en: " Type" },
    "picker.tag.sceneSuffix": { zh: "场景", en: "" },

    // ==================== VS 对比首页 ====================
    "vs.title": { zh: "🔥 热门模型一对一对比", en: "🔥 Top Model 1v1 Comparisons" },
    "vs.desc": { zh: "挑你最纠结的两个模型，看深度拆解。数据全部来自各模型官方网站及公开资料，最后更新于2026年6月15日。", en: "Pick the two models you're torn between. All data sourced from official sites & public docs, last updated June 15, 2026." },
    "vs.hint": { zh: "💡 如果这里没有你想比的组合，试试 <a href=\"../compare-custom.html\">自定义对比工具</a>，勾选任意模型一键生成对比表。", en: "💡 Don't see your matchup? Try the <a href=\"../compare-custom.html\">Custom Compare tool</a> — pick any models and generate a table." },
    "vs.seoHint": { zh: "💡 这些对比页的标题都经过SEO优化，搜\"DeepSeek ChatGPT 对比\"\"Claude ChatGPT 对比\"等关键词会直接跳转到对应页面。<br>同时也支持 <a href=\"../compare-custom.html\">勾选任意模型自定义对比</a>，一键生成并排表，复制链接分享。", en: "💡 These pages are SEO-optimized — searching \"DeepSeek vs ChatGPT\" etc. leads directly here.<br>Also try <a href=\"../compare-custom.html\">Custom Compare</a> to mix any models." },
    "vs.footer": { zh: "AI家AI户 · 热门模型对比 · 数据最后更新于 2026年6月15日 · <a href=\"../index.html\">返回首页</a>", en: "AI Home · Top Comparisons · Last updated June 15, 2026 · <a href=\"../index.html\">Home</a>" },
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
