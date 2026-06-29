#!/usr/bin/env python3
"""Generate SEO model detail pages from models.json — bilingual version"""
import json
import os

PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODELS_DIR = os.path.join(PROJECT_DIR, 'models')
JSON_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'models.json')

TARGET_IDS = ['deepseek', 'kimi', 'qwen', 'ernie', 'chatgpt', 'claude', 'gemini', 'bailian']

COMPARISON_MAP = {
    'deepseek': ['chatgpt', 'claude', 'kimi'],
    'kimi': ['deepseek', 'qwen', 'ernie'],
    'qwen': ['deepseek', 'kimi', 'chatgpt'],
    'ernie': ['kimi', 'qwen', 'chatgpt'],
    'chatgpt': ['claude', 'deepseek', 'gemini'],
    'claude': ['chatgpt', 'deepseek', 'kimi'],
    'gemini': ['chatgpt', 'deepseek', 'claude'],
    'bailian': ['qwen', 'coze', 'dify'],
}

def tag_class(pricing):
    if pricing == 'free': return 'badge-free'
    if pricing == 'freemium': return 'badge-freemium'
    return 'badge-paid'

def mini_card(m):
    return f'''<a href="{m['id']}.html" class="mini-card">
    <div class="mini-card-header">
        <span class="mini-name">{m['name']}</span>
        <span class="mini-badge {tag_class(m['pricing'])}"></span>
    </div>
    <div class="mini-price">{m['priceLabel']}</div>
    <div class="mini-best">{m.get('bestFor','')[:60]}{'...' if len(m.get('bestFor','')) > 60 else ''}</div>
    <div class="mini-link">查看详情 →</div>
</a>'''

def generate_page(m, all_models):
    model_id = m['id']
    model_name = m['name']
    category = m.get('category', '')
    company = m.get('company', '')

    seo_title = f"{model_name}怎么样？2026年最新价格、功能与评测 | AI家AI户"
    seo_desc = f"{model_name} — {company}。{m.get('strengths','')[:120]}。价格为{m.get('priceLabel','')}。查看{model_name}与其他AI模型的横向对比，直达官网。"
    seo_kw = f"{model_name},{model_name}价格,{model_name}评测,AI模型对比,AI工具推荐"

    cmp_ids = COMPARISON_MAP.get(model_id, [])
    cmp_models = [m2 for m2 in all_models if m2['id'] in cmp_ids]
    cmp_html = '\n'.join(mini_card(cm) for cm in cmp_models) if cmp_models else ''

    # Model data as compact JSON
    model_json = json.dumps(m, ensure_ascii=False, separators=(',', ':'))

    # Pricing
    pc = tag_class(m.get('pricing', 'paid'))

    return f'''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="{seo_desc}">
    <meta name="keywords" content="{seo_kw}">
    <title>{seo_title}</title>
    <link rel="canonical" href="https://myaishome.com/models/{model_id}.html">
    <meta property="og:title" content="{seo_title}">
    <meta property="og:description" content="{seo_desc}">
    <meta property="og:url" content="https://myaishome.com/models/{model_id}.html">
    <meta property="og:type" content="article">
    <meta property="og:locale" content="zh_CN">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{seo_title}">
    <meta name="twitter:description" content="{seo_desc}">
    <meta name="google-site-verification" content="xt9f05QoKT1xpnVg94WeUsSOYPO88A3CT1j57ePzKZ8" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-TBTFSXQ6NF"></script>
    <script>
      window.dataLayer=window.dataLayer||[];
      function gtag(){{dataLayer.push(arguments);}}
      gtag('js',new Date());
      gtag('config','G-TBTFSXQ6NF');
    </script>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/detail.css">
    <script type="application/ld+json">
    {{
      "@context":"https://schema.org",
      "@type":"SoftwareApplication",
      "name":"{model_name}",
      "applicationCategory":"AIApplication",
      "operatingSystem":"Web",
      "offers":{{"@type":"Offer","price":"0","priceCurrency":"CNY"}},
      "description":"{m.get('strengths','')[:200]}",
      "url":"https://myaishome.com/models/{model_id}.html"
    }}
    </script>
</head>
<body>

<!-- Model data for JS rendering -->
<script id="model-data" type="application/json">{model_json}</script>

<nav class="nav">
    <div class="nav-inner">
        <a href="../index.html" class="nav-logo">🏠 AI家AI户</a>
        <button class="nav-toggle" onclick="toggleMobileNav()" aria-label="打开菜单">☰</button>
        <div class="nav-lang">
            <a href="https://myaishome.com/models/{model_id}.html" onclick="switchLang();return false;" class="lang-btn" id="langSwitch">EN</a>
        </div>
    </div>
</nav>

<!-- Mobile nav overlay + drawer -->
<div class="nav-overlay" id="navOverlay" onclick="closeMobileNav()"></div>
<div class="nav-drawer" id="navDrawer">
    <div class="drawer-header">
        <a href="../index.html" class="nav-logo" style="font-size:20px;">🏠 AI家AI户</a>
        <button onclick="closeMobileNav()" style="background:none;border:none;font-size:24px;cursor:pointer;" aria-label="关闭菜单">✕</button>
    </div>
    <div class="drawer-links" id="drawerLinks"></div>
</div>

<!-- Mobile bottom tabs -->
<nav class="mobile-tabs">
    <a href="../index.html" class="mobile-tab">🏠<span>首页</span></a>
    <a href="../models.html" class="mobile-tab">📦<span>模型库</span></a>
    <a href="../compare.html" class="mobile-tab">⚖️<span>对比</span></a>
    <a href="../skills.html" class="mobile-tab">🛠<span>技能包</span></a>
</nav>

<main class="detail-page">
    <div class="breadcrumb">
        <a href="../index.html" data-i18n="detail.breadcrumb.home">首页</a> &rsaquo;
        <a href="../models.html" data-i18n="detail.breadcrumb.models">模型库</a> &rsaquo;
        <span id="breadcrumb-model">{model_name}</span>
    </div>

    <section class="detail-hero">
        <div class="detail-hero-top">
            <h1><span id="detail-name">{model_name}</span><span data-i18n="detail.h1"> 怎么样？</span></h1>
            <span id="detail-badge" class="detail-badge {pc}"></span>
        </div>
        <p class="detail-subtitle" id="detail-subtitle">{company} · {category} · 更新于 {m.get('lastUpdated','')}</p>
        <p class="detail-summary" id="detail-summary">{m.get('strengths','')}</p>
        <div class="detail-actions">
            <a href="{m.get('website','#')}" id="detail-cta" class="detail-cta" target="_blank" rel="nofollow noopener" onclick="gtag('event','click',{{'event_category':'model_detail','event_label':'{model_id}_visit'}})">访问官网 →</a>
            <a href="../compare.html" class="detail-secondary" data-i18n="rec.compare">查看完整对比表 →</a>
        </div>
    </section>

    <section class="detail-section">
        <h2 data-i18n="detail.coreParams">核心参数</h2>
        <div class="param-grid">
            <div class="param-item">
                <span class="param-label" data-i18n="detail.param.price">价格</span>
                <span class="param-value" id="param-price">{m.get('priceLabel','')}</span>
            </div>
            <div class="param-item">
                <span class="param-label" data-i18n="detail.param.priceDetail">定价详情</span>
                <span class="param-value detail-price-detail" id="param-priceDetail">{m.get('priceDetail','')}</span>
            </div>
            <div class="param-item">
                <span class="param-label" data-i18n="detail.param.cnSupport">中文支持</span>
                <span class="param-value" id="param-cn">{m.get('chineseSupport','')}</span>
            </div>
            <div class="param-item">
                <span class="param-label" data-i18n="detail.param.context">上下文窗口</span>
                <span class="param-value" id="param-context">{m.get('contextWindow','')}</span>
            </div>
            <div class="param-item">
                <span class="param-label" data-i18n="detail.param.api">API</span>
                <span class="param-value" id="param-api"></span>
            </div>
            <div class="param-item">
                <span class="param-label" data-i18n="detail.param.released">发布日期</span>
                <span class="param-value" id="param-released">{m.get('released','')}</span>
            </div>
            <div class="param-item param-full">
                <span class="param-label" data-i18n="detail.param.bestFor">擅长场景</span>
                <span class="param-value" id="param-bestFor">{m.get('bestFor','')}</span>
            </div>
        </div>
    </section>

    <section class="detail-section">
        <h2 data-i18n="detail.prosCons">优势与不足</h2>
        <div class="pros-cons">
            <div class="pros">
                <h3 data-i18n="detail.pros">✅ 优势</h3>
                <p id="pros-text">{m.get('strengths','')}</p>
            </div>
            <div class="cons">
                <h3 data-i18n="detail.cons">⚠️ 不足</h3>
                <p id="cons-text">{m.get('weaknesses','')}</p>
            </div>
        </div>
    </section>

    <section class="detail-section">
        <h2 data-i18n="detail.tags">功能标签</h2>
        <div class="detail-tags" id="detail-tags"></div>
    </section>

    <section class="detail-section detail-source">
        <p id="detail-source">📋 数据来源：{m.get('source','')}</p>
        <p id="detail-date">🕐 最后更新：{m.get('lastUpdated','')}</p>
    </section>

    <section class="detail-section">
        <h2 data-i18n="detail.compare">对比其他模型</h2>
        <div class="mini-card-grid" id="mini-card-grid">
            {cmp_html}
        </div>
        <div style="text-align:center;margin-top:16px;">
            <a href="../compare.html" class="detail-cta" style="display:inline-block;" data-i18n="detail.compareAll">查看全部横评 →</a>
        </div>
    </section>

    <div class="detail-back">
        <a href="../models.html" data-i18n="detail.back">← 返回模型库</a>
    </div>
</main>

<footer class="footer">
    <p data-i18n="detail.footer">AI家AI户 · 数据最后更新于 2026年6月29日 · 信息来源于各模型官方网站及公开资料</p>
    <p style="margin-top:6px;" data-i18n="detail.footer2">这不是权威解读，只是帮你省掉搜索时间。用前请核实官方最新信息。</p>
</footer>

<script src="../js/i18n.js"></script>
<script src="../js/mobile-nav.js"></script>
<script src="../js/detail-page.js"></script>
</body>
</html>'''


def main():
    with open(JSON_PATH, 'r', encoding='utf-8') as f:
        all_models = json.load(f)

    model_map = {m['id']: m for m in all_models}
    os.makedirs(MODELS_DIR, exist_ok=True)

    generated = []
    for mid in TARGET_IDS:
        if mid not in model_map:
            print(f'WARN: Model {mid} not found, skipping')
            continue
        html = generate_page(model_map[mid], all_models)
        with open(os.path.join(MODELS_DIR, f'{mid}.html'), 'w', encoding='utf-8') as f:
            f.write(html)
        generated.append(mid)
        print(f'Generated: {mid}.html')

    print(f'\nDone! {len(generated)} pages generated: {", ".join(generated)}')


if __name__ == '__main__':
    main()
