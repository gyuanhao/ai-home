// 首页全局搜索：模型 + 技能包 + 博客
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
    const quickTags = searchWrap.querySelectorAll('.hero-search-tag');
    const modelsArr = (typeof models !== 'undefined' ? models : []);
    const skillsArr = (typeof skillsData !== 'undefined' ? skillsData : []);

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

    function renderResults(query) {
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
            dropdown.innerHTML = '<div class="hero-search-empty">没找到相关内容，换个关键词试试</div>';
            dropdown.style.display = 'block';
            return;
        }

        // 按分组聚合，每组最多 5 条
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
        return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
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
            } else if (this.value.trim()) {
                window.location.href = 'models.html?q=' + encodeURIComponent(this.value.trim());
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

    // 快捷标签点击
    quickTags.forEach(tag => {
        tag.addEventListener('click', function () {
            input.value = this.dataset.q || this.textContent.trim();
            input.focus();
            renderResults(input.value);
        });
    });

    // 点击外部关闭
    document.addEventListener('click', function (e) {
        if (!searchWrap.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });

    // 聚焦时如果有内容就显示下拉
    input.addEventListener('focus', function () {
        if (this.value.trim()) renderResults(this.value);
    });
})();
