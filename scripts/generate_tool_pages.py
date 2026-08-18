#!/usr/bin/env python3
"""Generate AI tool directory listing page from tools.json.

Outputs:
  - tools.html        category-filter listing page (reuses css/style.css .model-grid/.model-card)

Tool cards now link directly to official websites; no detail pages are generated.

Run: python scripts/generate_tool_pages.py
"""
import json
import os

PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JSON_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'tools.json')
SITE = 'https://myaishome.com'
LOGO = f'{SITE}/img/logo.png'
OG_IMAGE = f'{SITE}/img/og-image.png'

# ---------- sidebar / nav snippet (shared) ----------
SIDEBAR = '''<aside class="sidebar" id="sidebar">
    <a href="index.html" class="sidebar-logo">
        <img src="__LOGO__" alt="AI家AI户" class="logo-icon">
        AI家AI户
    </a>
    <nav class="sidebar-nav">
        <ul class="sidebar-links">
            <li><a href="index.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.6V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.6"/><path d="M9.5 20v-5.5h5V20"/></svg>首页</a></li>
            <li><a href="models.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 21 7.5 12 12 3 7.5z"/><path d="M3 12l9 4.5 9-4.5"/><path d="M3 16.5 12 21l9-4.5"/></svg>模型库</a></li>
            <li><a href="tools.html" class="sidebar-link active"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>工具库</a></li>
            <li><a href="compare.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20v-9"/><path d="M12 20V5"/><path d="M20 20v-6"/></svg>横向对比</a></li>
            <li><a href="compare-custom.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"/><path d="M8.5 12.5 11 15l4.5-4.8"/></svg>自定义对比</a></li>
            <li><a href="vs/" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 8h10l-3-3"/><path d="M17 16H7l3 3"/></svg>热门对比</a></li>
            <li><a href="picker.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h8"/><path d="M16 8h4"/><circle cx="14" cy="8" r="2"/><path d="M4 16h4"/><path d="M12 16h8"/><circle cx="10" cy="16" r="2"/></svg>AI选型器</a></li>
            <li><a href="news.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13a1 1 0 0 0 1 1 1 1 0 0 0 1-1V8"/><path d="M4 5v13a1 1 0 0 0 1 1h11"/><path d="M8 8h5"/><path d="M8 11.5h5"/></svg>新闻</a></li>
            <li><a href="skills.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/><circle cx="12" cy="14.5" r="1.5"/></svg>技能包</a></li>
            <li><a href="papers.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2z"/><path d="M8 7h8"/><path d="M8 11h8"/><path d="M8 15h5"/></svg>白皮书</a></li>
            <li><a href="blog/" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v4h4"/><path d="M9 12h6"/><path d="M9 15.5h6"/></svg>博客</a></li>
            <li><a href="about.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/></svg>关于</a></li>
        </ul>
    </nav>
    <div class="sidebar-footer">
        <button id="langSwitch" onclick="switchLang()" class="sidebar-lang-btn">EN</button>
    </div>
</aside>
<button class="sidebar-toggle" onclick="toggleSidebar()" aria-label="menu">&#9776;</button>
<div class="sidebar-overlay" id="sidebarOverlay" onclick="closeSidebar()"></div>
<div class="sidebar-drawer" id="sidebarDrawer">
    <div class="drawer-head">
        <span class="d-logo"><img src="__LOGO__" alt="AI家AI户" class="logo-icon">AI家AI户</span>
        <button class="drawer-close-btn" onclick="closeSidebar()" aria-label="close">&#10005;</button>
    </div>
    <nav class="sidebar-nav">
        <ul class="sidebar-links">
            <li><a href="index.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.6V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.6"/><path d="M9.5 20v-5.5h5V20"/></svg>首页</a></li>
            <li><a href="models.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 21 7.5 12 12 3 7.5z"/><path d="M3 12l9 4.5 9-4.5"/><path d="M3 16.5 12 21l9-4.5"/></svg>模型库</a></li>
            <li><a href="tools.html" class="sidebar-link active"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>工具库</a></li>
            <li><a href="compare.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20v-9"/><path d="M12 20V5"/><path d="M20 20v-6"/></svg>横向对比</a></li>
            <li><a href="compare-custom.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"/><path d="M8.5 12.5 11 15l4.5-4.8"/></svg>自定义对比</a></li>
            <li><a href="vs/" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 8h10l-3-3"/><path d="M17 16H7l3 3"/></svg>热门对比</a></li>
            <li><a href="picker.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h8"/><path d="M16 8h4"/><circle cx="14" cy="8" r="2"/><path d="M4 16h4"/><path d="M12 16h8"/><circle cx="10" cy="16" r="2"/></svg>AI选型器</a></li>
            <li><a href="news.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13a1 1 0 0 0 1 1 1 1 0 0 0 1-1V8"/><path d="M4 5v13a1 1 0 0 0 1 1h11"/><path d="M8 8h5"/><path d="M8 11.5h5"/></svg>新闻</a></li>
            <li><a href="skills.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/><circle cx="12" cy="14.5" r="1.5"/></svg>技能包</a></li>
            <li><a href="papers.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2z"/><path d="M8 7h8"/><path d="M8 11h8"/><path d="M8 15h5"/></svg>白皮书</a></li>
            <li><a href="blog/" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v4h4"/><path d="M9 12h6"/><path d="M9 15.5h6"/></svg>博客</a></li>
            <li><a href="about.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/></svg>关于</a></li>
        </ul>
    </nav>
    <div class="sidebar-footer"><button onclick="switchLang();closeSidebar();" class="sidebar-lang-btn">EN</button></div>
</div>
'''

# ---------- listing page template ----------
LISTING_TPL = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="AI家AI户工具库 — 收录市面主流 AI 工具：对话、图像、视频、音频、编程、写作、设计、办公、搜索、Agent、翻译、浏览器插件，按类目筛选，直达官网。">
    <meta name="keywords" content="AI工具库,AI工具导航,AI工具大全,ChatGPT,Midjourney,Sora,Cursor,Perplexity,AI工具推荐">
    <title>工具库 — AI家AI户</title>
    <link rel="canonical" href="__CANON__">
    <meta property="og:title" content="工具库 — AI家AI户">
    <meta property="og:description" content="收录市面主流 AI 工具，按类目筛选，直达官网。">
    <meta property="og:url" content="__CANON__">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="zh_CN">
    <meta property="og:image" content="__OG_IMAGE__">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="AI家AI户 — AI 模型与工具选型导航站">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="工具库 — AI家AI户">
    <meta name="twitter:description" content="收录市面主流 AI 工具，按类目筛选，直达官网。">
    <meta name="twitter:image" content="__OG_IMAGE__">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1082515322846897" crossorigin="anonymous"></script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-TBTFSXQ6NF"></script>
    <script>
      window.dataLayer=window.dataLayer||[];
      function gtag(){dataLayer.push(arguments);}
      gtag('js',new Date());
      gtag('config','G-TBTFSXQ6NF');
    </script>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/i18n.js"></script>
    <link rel="stylesheet" href="css/icons.css">
</head>
<body>
__SIDEBAR__
<main class="main-content">
<object data="img/icons.svg" type="image/svg+xml" style="display:none" aria-hidden="true"></object>

<div class="container">
    <div class="breadcrumb"><a href="index.html">首页</a> › <span>工具库</span></div>
    <h1 style="display:flex;align-items:center;gap:6px;">🧰 工具库</h1>
    <p style="color:var(--text-secondary); margin-bottom:12px;">
        <strong>核心结论：</strong>AI家AI户工具库收录 <strong id="totalCount">__COUNT__</strong> 个主流 AI 工具，按 12 个真实使用场景分类，每个工具都标注价格、来源与最后更新日期，帮你三分钟缩小选择范围。
    </p>
    <p style="color:var(--text-secondary); font-size:13px; margin-bottom:20px;">
        数据来自各产品官网与公开文档，信息最后更新：<time datetime="__UPDATED__">__UPDATED__</time>。如发现价格或功能变动，欢迎通过<a href="contact.html">联系我们</a>反馈。
    </p>

    <div class="search-bar" id="searchBar">
        <div class="search-bar-inner">
            <svg class="search-bar-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input type="text" id="toolSearch" placeholder="搜索工具名 / 标签 / 简介" autocomplete="off" spellcheck="false">
            <button class="search-bar-clear" id="searchClear" type="button" aria-label="清除搜索" style="display:none;">✕</button>
        </div>
    </div>

    <div class="filters" id="toolFilters"></div>

    <div class="model-grid" id="toolGrid"></div>
</div>

<div class="container" style="max-width:860px;">
    <section class="about-section">
        <h2>关于工具库的常见问题</h2>
        <div class="faq-list">
            <details class="faq"><summary>Q：AI家AI户 工具库收录哪些类型的工具？</summary><p>A：覆盖对话、图像、视频、音频、编程、写作、设计、办公、搜索、Agent、翻译、浏览器插件共 12 类主流 AI 工具，每个都标注价格、来源与更新日期。</p></details>
            <details class="faq"><summary>Q：工具信息多久更新一次？</summary><p>A：数据来自各产品官网与公开文档，最后更新于 __UPDATED__，价格或功能变动以官方为准。</p></details>
            <details class="faq"><summary>Q：这么多工具怎么选？</summary><p>A：用顶部搜索框按名称 / 标签筛选，或用分类按钮缩小范围；点「详情」看功能、优缺点与同类替代品对比后再决定。</p></details>
        </div>
    </section>
</div>

<footer class="footer">
    <p style="margin-top:8px;font-size:13px;color:var(--text-secondary);"><a href="privacy.html">隐私政策</a> · <a href="terms.html">服务条款</a> · <a href="disclaimer.html">免责声明</a> · <a href="contact.html">联系我们</a> · <a href="blog/">博客</a> · <a href="about.html">关于</a></p>
    <p style="margin-top:6px;font-size:13px;color:var(--text-secondary);">关注我们：
        <a href="https://www.xiaohongshu.com/search_result?keyword=%E6%8A%B1%E8%B5%B0%E8%A5%BF%E7%93%9C" target="_blank" rel="noopener me">小红书 @抱走西瓜</a>
    </p>
</footer>

<script src="js/cookie-consent.js"></script>
<script src="js/mobile-nav.js"></script>
<script>
const tools = __TOOLS_JSON__;
(function(){
    const grid = document.getElementById('toolGrid');
    const filtersEl = document.getElementById('toolFilters');
    const searchEl = document.getElementById('toolSearch');
    const searchClear = document.getElementById('searchClear');
    let activeCat = 'all';
    let query = '';

    // build category filters dynamically
    const cats = ['all'].concat(Array.from(new Set(tools.map(t => t.category))));
    filtersEl.innerHTML = cats.map((c, i) =>
        '<button class="filter-btn' + (i === 0 ? ' active' : '') + '" data-cat="' + c + '">' +
        (c === 'all' ? '全部' : c) + '</button>'
    ).join('');
    filtersEl.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            filtersEl.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCat = btn.getAttribute('data-cat');
            render();
        });
    });

    function esc(s){ return String(s == null ? '' : s).replace(/[&<>"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m])); }

    function render(){
        let list = tools;
        if (activeCat !== 'all') list = list.filter(t => t.category === activeCat);
        if (query){
            const q = query.toLowerCase();
            list = list.filter(t =>
                (t.name || '').toLowerCase().includes(q) ||
                (t.company || '').toLowerCase().includes(q) ||
                (t.summary || '').toLowerCase().includes(q) ||
                (t.tags || []).some(tag => tag.toLowerCase().includes(q))
            );
        }
        if (!list.length){
            grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--text-secondary)">没有找到匹配的工具，试试其他关键词？</div>';
            return;
        }
        grid.innerHTML = list.map(t => {
            const pc = t.pricing === 'free' ? 'badge-free' : t.pricing === 'freemium' ? 'badge-freemium' : 'badge-paid';
            const pctext = t.pricing === 'free' ? '免费' : t.pricing === 'freemium' ? '免费+付费' : '付费';
            const cta = (t.affiliate && t.affiliateUrl) ? t.affiliateUrl : t.website;
            const tags = (t.tags || []).slice(0, 5).map(tag => '<span class="model-tag">' + esc(tag) + '</span>').join('');
            const region = t.region ? esc(t.region) : '';
            return '<div class="model-card" data-href="' + esc(cta) + '" title="点击访问官网">'
                + '<div class="model-card-header"><div>'
                + '<div class="model-name">' + esc(t.name) + '</div>'
                + '<div class="model-company">' + esc(t.company || '') + (region ? ' · ' + region : '') + '</div>'
                + '</div><span class="model-badge ' + pc + '">' + pctext + '</span></div>'
                + '<div class="model-tags">' + tags + '</div>'
                + '<div class="model-desc">' + esc(t.summary || '') + '</div>'
                + '<div class="model-footer">'
            + '<div class="model-price"><strong>' + esc((t.priceLabel || '').split(' / ')[0]) + '</strong>' + ((t.priceLabel || '').includes('/') ? ' / ' + esc((t.priceLabel || '').split(' / ').slice(1).join(' / ')) : '') + '</div>'
            + '<a class="model-detail-link" href="tools/' + esc(t.id) + '.html">详情 →</a>'
            + '</div></div>';
        }).join('');
    }

    searchEl.addEventListener('input', () => {
        query = searchEl.value.trim();
        searchClear.style.display = query ? 'block' : 'none';
        render();
    });
    searchClear.addEventListener('click', () => {
        searchEl.value = ''; query = ''; searchClear.style.display = 'none'; render();
    });

    grid.addEventListener('click', function(e){
        var card = e.target.closest('.model-card');
        if (card && !e.target.closest('a')) {
            window.open(card.getAttribute('data-href'), '_blank', 'noopener');
        }
    });
    render();
})();
</script>
</body>
</html>'''


def gen_listing(tools):
    tools_json = json.dumps(tools, ensure_ascii=False)
    updated = max((t.get('lastUpdated', '') for t in tools), default='')
    html = (LISTING_TPL
            .replace('__SIDEBAR__', SIDEBAR.replace('__LOGO__', LOGO))
            .replace('__CANON__', f'{SITE}/tools')
            .replace('__COUNT__', str(len(tools)))
            .replace('__UPDATED__', updated)
            .replace('__TOOLS_JSON__', tools_json)
            .replace('__OG_IMAGE__', OG_IMAGE))
    return html


def main():
    with open(JSON_PATH, 'r', encoding='utf-8') as f:
        tools = json.load(f)

    with open(os.path.join(PROJECT_DIR, 'tools.html'), 'w', encoding='utf-8') as f:
        f.write(gen_listing(tools))

    print(f'Done! tools.html generated with {len(tools)} tools.')


if __name__ == '__main__':
    main()
