// 首页全局搜索：站内 + 外部搜索引擎/社区/图片/生活
(function () {
    const blogData = [
        { title: "AI编程工具真实体验：从免费到付费，我用过的6个", url: "blog/ai-coding-tools-experience-2026.html", tags: "编程,Cursor,Copilot,Claude Code,WorkBuddy,通义灵码" },
        { title: "自从去年底沾上了，我就……", url: "blog/my-ai-journey-2026.html", tags: "AI,普通用户,真实经历,找工作,改简历" },
        { title: "2026 AI大模型选购指南", url: "blog/ai-buying-guide-2026.html", tags: "选购,指南,模型,对比,场景" },
        { title: "Kimi K3 对上 Claude Fable 5", url: "blog/kimi-k3-vs-claude-fable5-2026.html", tags: "Kimi,K3,Claude,Fable5,对比" },
        { title: "Vibe Coding 入门 2026", url: "blog/vibe-coding-guide-2026.html", tags: "vibe coding,入门,Cursor,Lovable,Bolt" },
        { title: "为什么我做了个AI导航站", url: "blog/why-i-built-this-site.html", tags: "AI家AI户,导航站,故事" },
        { title: "DeepSeek、ChatGPT、Claude 对比体验", url: "blog/deepseek-vs-chatgpt-claude-2026.html", tags: "DeepSeek,ChatGPT,Claude,对比" },
        { title: "AI图像模型对比：Midjourney、DALL·E、Stable Diffusion", url: "blog/ai-image-models-comparison-2026.html", tags: "图像,Midjourney,DALL·E,Stable Diffusion" },
        { title: "AI视频模型横评", url: "blog/ai-video-models-review-2026.html", tags: "视频,Sora,Runway,Pika" },
        { title: "AI Agent 入门指南 2026", url: "blog/ai-agent-guide-2026.html", tags: "Agent,Coze,Dify,Manus" },
        { title: "国产AI与海外AI怎么选", url: "blog/domestic-vs-overseas-ai-2026.html", tags: "国产,海外,ChatGPT,Claude,选择" },
        { title: "免费 AI 生产力工具组合", url: "blog/ai-productivity-free-2026.html", tags: "免费,生产力,工具组合" },
        { title: "AI价格战：谁真降价谁玩套路", url: "blog/ai-price-war-2026.html", tags: "价格战,API,降价" },
        { title: "AI编程工具对比 2026", url: "blog/ai-coding-tools-comparison-2026.html", tags: "编程,Cursor,Windsurf,对比" },
        { title: "把一本书转成 Skill 的踩坑记录", url: "blog/book-to-skill-experience-2026.html", tags: "Skill,Book,WorkBuddy,经验" }
    ];

    const searchWrap = document.getElementById('heroSearch');
    if (!searchWrap) return;

    const input = searchWrap.querySelector('.hero-search-input');
    const dropdown = searchWrap.querySelector('.hero-search-dropdown');
    const enginesRow = document.getElementById('heroSearchEngines');
    const tabs = searchWrap.querySelectorAll('.hero-search-tab');
    const quickTags = searchWrap.querySelectorAll('.hero-search-tag');
    const searchBtn = searchWrap.querySelector('.hero-search-btn');
    const modelsArr = (typeof models !== 'undefined' ? models : []);
    const skillsArr = (typeof skillsData !== 'undefined' ? skillsData : []);

    const engineMap = {
        site:    { label: '站内', url: null },
        bing:    { label: 'Bing', url: 'https://www.bing.com/search?q={q}' },
        baidu:   { label: '百度', url: 'https://www.baidu.com/s?wd={q}' },
        google:  { label: 'Google', url: 'https://www.google.com/search?q={q}' },
        perplexity: { label: 'Perplexity', url: 'https://www.perplexity.ai/search?q={q}' },
        duckduckgo: { label: 'DuckDuckGo', url: 'https://duckduckgo.com/?q={q}' },
        zhihu:   { label: '知乎', url: 'https://www.zhihu.com/search?type=content&q={q}' },
        github:  { label: 'GitHub', url: 'https://github.com/search?q={q}' },
        juejin:  { label: '掘金', url: 'https://juejin.cn/search?query={q}' },
        jike:    { label: '即刻', url: 'https://m.okjike.com/search?q={q}' },
        reddit:  { label: 'Reddit', url: 'https://www.reddit.com/search/?q={q}' },
        twitter: { label: 'X/Twitter', url: 'https://x.com/search?q={q}' },
        'baidu-image': { label: '百度图片', url: 'https://image.baidu.com/search/index?tn=baiduimage&word={q}' },
        'google-image': { label: 'Google图片', url: 'https://www.google.com/search?tbm=isch&q={q}' },
        'bing-image': { label: 'Bing图片', url: 'https://www.bing.com/images/search?q={q}' },
        taobao:  { label: '淘宝', url: 'https://s.taobao.com/search?q={q}' },
        jd:      { label: '京东', url: 'https://search.jd.com/Search?keyword={q}' },
        meituan: { label: '美团', url: 'https://www.meituan.com/s/{q}' },
        dianping:{ label: '大众点评', url: 'https://www.dianping.com/search/keyword/1/0_{q}' }
    };

    const tabEngines = {
        common:    ['site'],
        search:    ['bing', 'baidu', 'google', 'perplexity', 'duckduckgo'],
        community: ['zhihu', 'github', 'juejin', 'jike', 'reddit', 'twitter'],
        image:     ['baidu-image', 'google-image', 'bing-image'],
        life:      ['taobao', 'jd', 'meituan', 'dianping']
    };

    const placeholders = {
        common:    '站内AI工具搜索',
        search:    '搜全网：Google、Bing、百度、Perplexity…',
        community: '搜社区：知乎、GitHub、掘金、即刻、Reddit…',
        image:     '搜图片：百度图片、Google图片、Bing图片…',
        life:      '搜生活：淘宝、京东、美团、大众点评…'
    };

    let currentTab = 'common';
    let currentEngine = 'site';
    let activeIndex = -1;
    let flatResults = [];

    function buildIndex() {
        const index = [];
        modelsArr.forEach(m => {
            index.push({
                type: 'model',
                group: '模型库',
                title: m.name,
                desc: [m.company, m.category, m.priceLabel].filter(Boolean).join(' · '),
                tags: (m.tags || []).join(','),
                url: 'models/' + m.id + '.html',
                searchText: [m.name, m.company, m.category, (m.tags || []).join(' '), m.strengths, m.bestFor].join(' ').toLowerCase()
            });
        });
        skillsArr.forEach(s => {
            index.push({
                type: 'skill',
                group: '技能包',
                title: s.nameZh || s.name,
                desc: (s.descZh || s.desc || '').slice(0, 60) + ((s.descZh || s.desc || '').length > 60 ? '…' : ''),
                tags: [s.team, s.cat].filter(Boolean).join(','),
                url: s.url,
                searchText: [s.nameZh, s.name, s.descZh, s.desc, s.team, s.cat].join(' ').toLowerCase()
            });
        });
        blogData.forEach(b => {
            index.push({
                type: 'blog',
                group: '博客',
                title: b.title,
                desc: '',
                tags: b.tags,
                url: b.url,
                searchText: (b.title + ' ' + b.tags).toLowerCase()
            });
        });
        return index;
    }

    const index = buildIndex();

    // 工具库接入站内搜索：运行时拉取 scripts/tools.json（数据驱动，单一数据源、自动同步）
    // 追加到同一个 index 数组，下拉结果按「工具库」分组展示
    fetch('scripts/tools.json')
        .then(r => (r.ok ? r.json() : []))
        .then(tools => {
            if (!Array.isArray(tools)) return;
            tools.forEach(t => {
                index.push({
                    type: 'tool',
                    group: '工具库',
                    title: t.name,
                    desc: [t.company, t.category, t.priceLabel].filter(Boolean).join(' · '),
                    tags: (t.tags || []).join(','),
                    url: 'tools/' + t.id + '.html',
                    searchText: [t.name, t.nameEn, t.company, t.category, (t.tags || []).join(' '), t.summary, t.strengths, t.bestFor].join(' ').toLowerCase()
                });
            });
            if (input && input.value.trim()) renderResults(input.value);
        })
        .catch(function () { /* 拉取失败不阻塞站内搜索 */ });

    function renderEngines() {
        const list = tabEngines[currentTab] || ['site'];
        if (!enginesRow) return;
        enginesRow.innerHTML = list.map(key => {
            const cfg = engineMap[key];
            const active = key === currentEngine ? ' active' : '';
            return '<button class="hero-search-engine' + active + '" data-engine="' + key + '" data-tab="' + currentTab + '">' + cfg.label + '</button>';
        }).join('');
    }

    function switchTab(tab) {
        currentTab = tab;
        currentEngine = (tabEngines[tab] || ['site'])[0];
        tabs.forEach(t => {
            const isActive = t.dataset.tab === tab;
            t.classList.toggle('active', isActive);
            t.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
        input.placeholder = placeholders[tab] || '搜索';
        dropdown.style.display = 'none';
        renderEngines();
    }

    function doSearch(query) {
        const q = query.trim();
        if (!q) {
            input.focus();
            return;
        }
        if (currentTab === 'common' && currentEngine === 'site') {
            window.location.href = 'models.html?q=' + encodeURIComponent(q);
            return;
        }
        const cfg = engineMap[currentEngine];
        if (cfg && cfg.url) {
            const url = cfg.url.replace('{q}', encodeURIComponent(q));
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    }

    function renderResults(query) {
        if (currentTab !== 'common' || currentEngine !== 'site') {
            dropdown.style.display = 'none';
            return;
        }
        const q = query.trim().toLowerCase();
        dropdown.innerHTML = '';
        activeIndex = -1;
        flatResults = [];

        if (!q) {
            dropdown.style.display = 'none';
            return;
        }

        const matched = index.filter(item => item.searchText.includes(q));
        if (matched.length === 0) {
            dropdown.innerHTML = '<div class="hero-search-empty">站内没找到相关内容，按回车跳转到模型列表，或切换到 Bing/Google 搜全网</div>';
            dropdown.style.display = 'block';
            return;
        }

        const groups = {};
        matched.forEach(item => {
            if (!groups[item.group]) groups[item.group] = [];
            if (groups[item.group].length < 5) groups[item.group].push(item);
        });

        const frag = document.createDocumentFragment();
        Object.keys(groups).forEach(groupName => {
            const header = document.createElement('div');
            header.className = 'hero-search-group';
            header.textContent = groupName;
            frag.appendChild(header);

            groups[groupName].forEach(item => {
                const el = document.createElement('a');
                el.className = 'hero-search-result';
                el.href = item.url;
                el.setAttribute('data-type', item.type);
                el.innerHTML = '<div class="r-title">' + highlight(item.title, q) + '</div>' +
                    (item.desc ? '<div class="r-desc">' + escapeHtml(item.desc) + '</div>' : '');
                frag.appendChild(el);
                flatResults.push(el);
            });
        });

        dropdown.appendChild(frag);
        dropdown.style.display = 'block';
    }

    function highlight(text, q) {
        const safe = escapeHtml(text);
        if (!q) return safe;
        const re = new RegExp('(' + escapeRegExp(q) + ')', 'gi');
        return safe.replace(re, '<mark>$1</mark>');
    }

    function escapeHtml(str) {
        const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
        return String(str).replace(/[&<>"']/g, c => map[c]);
    }

    function escapeRegExp(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function setActive(i) {
        flatResults.forEach(el => el.classList.remove('active'));
        activeIndex = i;
        if (flatResults[i]) {
            flatResults[i].classList.add('active');
            flatResults[i].scrollIntoView({ block: 'nearest' });
        }
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });

    if (enginesRow) {
        enginesRow.addEventListener('click', e => {
            const btn = e.target.closest('.hero-search-engine');
            if (!btn) return;
            currentEngine = btn.dataset.engine;
            renderEngines();
            input.focus();
            if (input.value.trim()) renderResults(input.value);
        });
    }

    input.addEventListener('input', function () {
        renderResults(this.value);
    });

    input.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (flatResults.length === 0) return;
            setActive(activeIndex + 1 >= flatResults.length ? 0 : activeIndex + 1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (flatResults.length === 0) return;
            setActive(activeIndex - 1 < 0 ? flatResults.length - 1 : activeIndex - 1);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (activeIndex >= 0 && flatResults[activeIndex]) {
                flatResults[activeIndex].click();
            } else {
                doSearch(this.value);
            }
        } else if (e.key === 'Escape') {
            dropdown.style.display = 'none';
            input.blur();
        }
    });

    dropdown.addEventListener('click', function (e) {
        const a = e.target.closest('.hero-search-result');
        if (!a) return;
        e.preventDefault();
        window.location.href = a.href;
    });

    searchBtn.addEventListener('click', () => doSearch(input.value));

    quickTags.forEach(tag => {
        tag.addEventListener('click', function () {
            input.value = this.dataset.q || this.textContent.trim();
            input.focus();
            doSearch(input.value);
        });
    });

    document.addEventListener('click', function (e) {
        if (!searchWrap.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });

    input.addEventListener('focus', function () {
        if (this.value.trim()) renderResults(this.value);
    });

    renderEngines();
})();
