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
    "cat.subtitle": { zh: "35个模型覆盖5大品类，点击直接筛选", en: "35 models across 5 categories. Click to filter." },
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
    "cat.llm.hint": { zh: "找聊天、写作、推理工具 →", en: "Chat, writing, reasoning →" },
    "cat.agent.hint": { zh: "找AI助手、自动化工具 →", en: "AI assistants, automation →" },
    "cat.image.hint": { zh: "找画图、设计工具 →", en: "Image generation, design →" },
    "cat.video.hint": { zh: "找视频生成、特效工具 →", en: "Video generation, VFX →" },
    "cat.code.hint": { zh: "找编程助手（IDE+终端） →", en: "Coding agents (IDE + CLI) →" },

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
    "models.codeNote": { zh: "💡 代码模型包含 IDE 插件（Cursor/Copilot）和终端 Agent（Codex/Claude Code），后者在命令行运行，可自主读项目、写代码、跑测试。", en: "💡 Coding tools include IDE plugins (Cursor, Copilot) and CLI agents (Codex, Claude Code) that run in terminal — they read your codebase, write code, and run tests autonomously." },
    "models.empty": { zh: "没有找到匹配的模型，试试其他关键词？", en: "No models found. Try different keywords?" },
    "models.footer1": { zh: "AI家AI户 · 数据最后更新于 2026年6月15日 · 信息来源于各模型官方网站及公开资料", en: "AI Home · Last updated June 15, 2026 · Data sourced from official websites & public docs" },
    "models.footer2": { zh: "所有模型信息均标注来源。点击卡片直接跳转对应官网。", en: "All model info cites sources. Click any card to visit the official site." },

    // ==================== 对比页 ====================
    "compare.title": { zh: "横向对比", en: "Side-by-side Comparison" },
    "compare.llm": { zh: "语言模型对比", en: "LLM Comparison" },
    "compare.agent": { zh: "Agent 平台对比", en: "Agent Platform Comparison" },
    "compare.image": { zh: "图像模型对比", en: "Image Model Comparison" },
    "compare.video": { zh: "视频模型对比", en: "Video Model Comparison" },
    "compare.code": { zh: "代码模型对比", en: "Coding Tool Comparison" },
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
    "about.whatDesc": { zh: "AI家AI户是一个AI工具对比导航站——覆盖 <strong>AI大模型、图像模型、视频模型、代码模型、Agent平台</strong> 五大品类。我们的目标是：<strong>让你三秒看清哪个工具适合你</strong>——不用翻十篇评测、不用看20分钟视频、不用一个个官网去翻价格。", en: "AI Home is a comparison navigator for AI tools — covering <strong>LLMs, image models, video models, coding tools, and Agent platforms</strong>. Our goal: <strong>help you pick the right tool in seconds</strong> — no scrolling through 10 reviews, no watching 20-minute videos, no digging through pricing pages one by one." },
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
    "about.countNum": { zh: "35个产品", en: "35 tools" },
    "about.countDetail": { zh: "12个语言模型 + 6个Agent平台 + 5个图像模型 + 6个视频模型 + 7个代码模型", en: "12 LLMs + 6 Agent platforms + 5 image models + 6 video models + 7 coding tools" },
    "about.footer1": { zh: "AI家AI户 · 数据最后更新于 2026年6月15日 · 信息来源于各模型官方网站及公开资料", en: "AI Home · Last updated June 15, 2026 · Data sourced from official websites & public docs" },
    "about.footer2": { zh: "这不是权威解读，只是帮你省掉搜索时间。用前请核实官方最新信息。", en: "Not an authority — just saving you search time. Verify with official sources before using." },

    // ==================== 404 页 ====================
    "404.title": { zh: "抱歉，你要找的页面不存在。", en: "Sorry, that page doesn't exist." },
    "404.home": { zh: "返回首页", en: "Back to Home" },

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
