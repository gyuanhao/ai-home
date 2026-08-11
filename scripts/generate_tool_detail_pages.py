#!/usr/bin/env python3
"""Generate per-tool detail pages from tools.json -> tools/<id>.html

Each page is a real content page (summary / strengths / weaknesses / bestFor /
pricing / tags) reusing the site CSS, with Product + BreadcrumbList structured
data and an outbound "访问官网" link. This adds a large body of unique,
crawlable content to fix AdSense "low value content".

Run: python scripts/generate_tool_detail_pages.py
"""
import json
import os

PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JSON_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'tools.json')
OUT_DIR = os.path.join(PROJECT_DIR, 'tools')
SITE = 'https://myaishome.com'
LOGO = f'{SITE}/img/logo.png'
OG_IMAGE = f'{SITE}/img/og-image.png'

SIDEBAR = '''<aside class="sidebar" id="sidebar">
    <a href="../index.html" class="sidebar-logo">
        <img src="__LOGO__" alt="AI家AI户" class="logo-icon">
        AI家AI户
    </a>
    <nav class="sidebar-nav">
        <ul class="sidebar-links">
            <li><a href="../index.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.6V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.6"/><path d="M9.5 20v-5.5h5V20"/></svg>首页</a></li>
            <li><a href="../models.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 21 7.5 12 12 3 7.5z"/><path d="M3 12l9 4.5 9-4.5"/><path d="M3 16.5 12 21l9-4.5"/></svg>模型库</a></li>
            <li><a href="../tools.html" class="sidebar-link active"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>工具库</a></li>
            <li><a href="../compare.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20v-9"/><path d="M12 20V5"/><path d="M20 20v-6"/></svg>横向对比</a></li>
            <li><a href="../skills.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/><circle cx="12" cy="14.5" r="1.5"/></svg>技能包</a></li>
            <li><a href="../papers.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2z"/><path d="M8 7h8"/><path d="M8 11h8"/><path d="M8 15h5"/></svg>白皮书</a></li>
            <li><a href="../blog/" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v4h4"/><path d="M9 12h6"/><path d="M9 15.5h6"/></svg>博客</a></li>
            <li><a href="../about.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/></svg>关于</a></li>
        </ul>
    </nav>
    <div class="sidebar-footer"><button id="langSwitch" onclick="switchLang()" class="sidebar-lang-btn">EN</button></div>
</aside>
<button class="sidebar-toggle" onclick="toggleSidebar()" aria-label="menu">&#9776;</button>
<div class="sidebar-overlay" id="sidebarOverlay" onclick="closeSidebar()"></div>
<div class="sidebar-drawer" id="sidebarDrawer">
    <div class="drawer-head">
        <span class="d-logo"><img src="__LOGO__" alt="AI家AI户" class="logo-icon">AI家AI户</span>
        <button class="drawer-close-btn" onclick="closeSidebar()" aria-label="关闭">✕</button>
    </div>
    <nav class="sidebar-nav">
        <ul class="sidebar-links">
            <li><a href="../index.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.6V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.6"/><path d="M9.5 20v-5.5h5V20"/></svg>首页</a></li>
            <li><a href="../models.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 21 7.5 12 12 3 7.5z"/><path d="M3 12l9 4.5 9-4.5"/><path d="M3 16.5 12 21l9-4.5"/></svg>模型库</a></li>
            <li><a href="../tools.html" class="sidebar-link active"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>工具库</a></li>
            <li><a href="../compare.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20v-9"/><path d="M12 20V5"/><path d="M20 20v-6"/></svg>横向对比</a></li>
            <li><a href="../skills.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/><circle cx="12" cy="14.5" r="1.5"/></svg>技能包</a></li>
            <li><a href="../papers.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2z"/><path d="M8 7h8"/><path d="M8 11h8"/><path d="M8 15h5"/></svg>白皮书</a></li>
            <li><a href="../blog/" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v4h4"/><path d="M9 12h6"/><path d="M9 15.5h6"/></svg>博客</a></li>
            <li><a href="../about.html" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/></svg>关于</a></li>
        </ul>
    </nav>
    <div class="sidebar-footer"><button onclick="switchLang();closeSidebar();" class="sidebar-lang-btn">EN</button></div>
</div>
'''


def esc(s):
    return ('' if s is None else str(s)).replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;')


def split_items(s):
    if not s:
        return []
    parts = [p.strip(' ；;，,。.') for p in str(s).replace('；', ';').replace('；', ';').split(';')]
    return [p for p in parts if p]


def list_html(s):
    items = split_items(s)
    if not items:
        return '<p>' + esc(s) + '</p>'
    return '<ul>' + ''.join('<li>' + esc(i) + '</li>' for i in items) + '</ul>'


def page(t):
    tid = t.get('id', '')
    name = t.get('name', '')
    name_en = t.get('nameEn', '')
    company = t.get('company', '')
    region = t.get('region', '')
    category = t.get('category', '')
    pricing = t.get('pricing', '')
    price_label = t.get('priceLabel', '')
    price_detail = t.get('priceDetail', '')
    summary = t.get('summary', '')
    strengths = t.get('strengths', '')
    weaknesses = t.get('weaknesses', '')
    best_for = t.get('bestFor', '')
    website = t.get('website', '')
    official = t.get('affiliateUrl') or website
    tags = t.get('tags', []) or []
    last_updated = t.get('lastUpdated', '')
    canon = f'{SITE}/tools/{tid}.html'

    pc = 'badge-free' if pricing == 'free' else 'badge-freemium' if pricing == 'freemium' else 'badge-paid'
    pctext = '免费' if pricing == 'free' else '免费+付费' if pricing == 'freemium' else '付费'
    tag_html = ''.join('<span class="model-tag">' + esc(x) + '</span>' for x in tags)
    region_txt = (' · ' + esc(region)) if region else ''

    ld = [
        {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": name,
            "description": summary,
            "brand": {"@type": "Brand", "name": company},
            "image": OG_IMAGE,
            "url": canon,
            "offers": {
                "@type": "Offer",
                "priceCurrency": "CNY",
                "availability": "https://schema.org/OnlineOnly",
                "url": official
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "首页", "item": f"{SITE}/"},
                {"@type": "ListItem", "position": 2, "name": "工具库", "item": f"{SITE}/tools.html"},
                {"@type": "ListItem", "position": 3, "name": name, "item": canon}
            ]
        }
    ]
    ld_json = json.dumps(ld, ensure_ascii=False)

    desc_meta = (summary or name)[:120]

    html = f'''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="{esc(desc_meta)}">
    <title>{esc(name)} — AI家AI户工具库</title>
    <link rel="canonical" href="{canon}">
    <meta property="og:title" content="{esc(name)} — AI家AI户">
    <meta property="og:description" content="{esc(desc_meta)}">
    <meta property="og:url" content="{canon}">
    <meta property="og:type" content="article">
    <meta property="og:locale" content="zh_CN">
    <meta property="og:image" content="{OG_IMAGE}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="{esc(name)} — AI家AI户工具库">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{esc(name)} — AI家AI户">
    <meta name="twitter:description" content="{esc(desc_meta)}">
    <meta name="twitter:image" content="{OG_IMAGE}">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1082515322846897" crossorigin="anonymous"></script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-TBTFSXQ6NF"></script>
    <script>
      window.dataLayer=window.dataLayer||[];
      function gtag(){{dataLayer.push(arguments);}}
      gtag('js',new Date());
      gtag('config','G-TBTFSXQ6NF');
    </script>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/icons.css">
    <script type="application/ld+json">{ld_json}</script>
</head>
<body>
__SIDEBAR__
<main class="main-content">
<object data="../img/icons.svg" type="image/svg+xml" style="display:none" aria-hidden="true"></object>

<div class="container" style="max-width:860px;">
    <div class="breadcrumb"><a href="../index.html">首页</a> › <a href="../tools.html">工具库</a> › <span>{esc(name)}</span></div>

    <div class="tool-detail-head" style="display:flex;align-items:flex-start;justify-content:space-between;gap:16px;flex-wrap:wrap;margin:8px 0 4px;">
        <div>
            <h1 style="margin:0 0 6px;font-size:30px;line-height:1.25;">{esc(name)}</h1>
            <p style="margin:0;color:var(--text-secondary);">{esc(company)}{region_txt} · {esc(category)}</p>
        </div>
        <span class="model-badge {pc}" style="font-size:14px;padding:6px 14px;">{pctext}</span>
    </div>

    <a class="model-link" href="{esc(official)}" target="_blank" rel="noopener" style="display:inline-block;margin:14px 0 24px;">访问官网 →</a>

    <div class="about-section" style="background:var(--surface);padding:16px 18px;border-radius:10px;border-left:4px solid var(--primary);">
        <h2 style="margin-top:0;font-size:16px;">一句话结论</h2>
        <p style="margin:0;color:var(--text-primary);">{esc(best_for)} 适合关注 {esc(category)} 的用户；价格档位为 {esc(price_label)}，数据更新于 <time datetime="{esc(last_updated)}">{esc(last_updated)}</time>。</p>
    </div>

    <div class="about-section">
        <h2>这是什么</h2>
        <p>{esc(summary)}</p>
    </div>

    <div class="about-section">
        <h2>优势</h2>
        {list_html(strengths)}
    </div>

    <div class="about-section">
        <h2>不足</h2>
        {list_html(weaknesses)}
    </div>

    <div class="about-section">
        <h2>适合谁</h2>
        <p>{esc(best_for)}</p>
    </div>

    <div class="about-section">
        <h2>价格</h2>
        <p style="font-size:18px;font-weight:700;color:var(--primary);margin:0 0 6px;">{esc(price_label)}</p>
        <p style="color:var(--text-secondary);margin:0;">{esc(price_detail)}</p>
    </div>

    <div class="about-section">
        <h2>标签</h2>
        <div class="model-tags">{tag_html}</div>
    </div>

    <p style="margin-top:20px;color:var(--text-secondary);font-size:13px;">信息最后更新：<time datetime="{esc(last_updated)}">{esc(last_updated)}</time>。数据来自公开资料与官网，以官方最新为准。如发现错误或过时信息，欢迎<a href="../contact.html">联系我们</a>。</p>

    <div style="margin:24px 0 8px;">
        <a href="../tools.html" class="hot-view-all">← 返回工具库</a>
    </div>
</div>

<footer class="footer">
    <p style="margin-top:8px;font-size:13px;color:var(--text-secondary);"><a href="../privacy.html">隐私政策</a> · <a href="../terms.html">服务条款</a> · <a href="../disclaimer.html">免责声明</a> · <a href="../contact.html">联系我们</a> · <a href="../blog/">博客</a> · <a href="../about.html">关于</a></p>
    <p style="margin-top:6px;font-size:13px;color:var(--text-secondary);">关注我们：
        <a href="https://www.xiaohongshu.com/search_result?keyword=%E6%8A%B1%E8%B5%B0%E8%A5%BF%E7%93%9C" target="_blank" rel="noopener me">小红书 @抱走西瓜</a>
    </p>
</footer>

<script src="../js/main.js"></script>
<script src="../js/cookie-consent.js"></script>
<script src="../js/mobile-nav.js"></script>

<nav class="mobile-tabs" id="mobileTabs">
    <a href="../index.html" class="mobile-tab active"><span class="tab-icon"><span class="icon icon-lg"><svg width="24" height="24" class="icon-home"><use href="../img/icons.svg#icon-home"/></svg></span></span>首页</a>
    <a href="../models.html" class="mobile-tab"><span class="tab-icon"><span class="icon icon-lg"><svg width="24" height="24" class="icon-models"><use href="../img/icons.svg#icon-models"/></svg></span></span>模型库</a>
    <a href="../compare.html" class="mobile-tab"><span class="tab-icon"><span class="icon icon-lg"><svg width="24" height="24" class="icon-compare"><use href="../img/icons.svg#icon-compare"/></svg></span></span>对比</a>
    <a href="../skills.html" class="mobile-tab"><span class="tab-icon"><span class="icon icon-lg"><svg width="24" height="24" class="icon-skills"><use href="../img/icons.svg#icon-skills"/></svg></span></span>技能包</a>
</nav>
</main>
</body>
</html>
'''
    return html.replace('__SIDEBAR__', SIDEBAR.replace('__LOGO__', LOGO))


def main():
    with open(JSON_PATH, 'r', encoding='utf-8') as f:
        tools = json.load(f)
    os.makedirs(OUT_DIR, exist_ok=True)
    for t in tools:
        tid = t.get('id')
        if not tid:
            continue
        with open(os.path.join(OUT_DIR, f'{tid}.html'), 'w', encoding='utf-8') as f:
            f.write(page(t))
    print(f'Done! Generated {len(tools)} tool detail pages in tools/.')


if __name__ == '__main__':
    main()
