#!/usr/bin/env python3
"""Generate SEO model detail pages from models.json"""
import json
import os

PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODELS_DIR = os.path.join(PROJECT_DIR, 'models')
JSON_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'models.json')

TARGET_IDS = ['deepseek', 'kimi', 'qwen', 'ernie', 'chatgpt', 'claude', 'gemini', 'bailian']

# Comparison mapping: for each model, show 3 comparison models
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

def tag_label(pricing):
    if pricing == 'free': return '免费'
    if pricing == 'freemium': return '免费+付费'
    return '付费'

def model_card(m):
    """Generate a mini card for comparison section"""
    return f'''<a href="{m['id']}.html" class="mini-card">
    <div class="mini-card-header">
        <span class="mini-name">{m['name']}</span>
        <span class="mini-badge {tag_class(m['pricing'])}">{tag_label(m['pricing'])}</span>
    </div>
    <div class="mini-price">{m['priceLabel']}</div>
    <div class="mini-best">{m['bestFor'][:60]}{'...' if len(m.get('bestFor','')) > 60 else ''}</div>
    <div class="mini-link">查看详情 →</div>
</a>'''

def generate_page(m, all_models):
    """Generate HTML for a single model"""
    model_id = m['id']
    model_name = m['name']
    category = m.get('category', '')
    company = m.get('company', '')
    
    # SEO title
    seo_title = f"{model_name}怎么样？2026年最新价格、功能与评测 | AI家AI户"
    seo_desc = f"{model_name} — {company}。{m.get('strengths','')[:120]}。价格为{m.get('priceLabel','')}。查看{model_name}与其他AI模型的横向对比，直达官网。"
    seo_kw = f"{model_name},{model_name}价格,{model_name}评测,AI模型对比,AI工具推荐"
    
    # Comparison models
    cmp_ids = COMPARISON_MAP.get(model_id, [])
    cmp_models = [m2 for m2 in all_models if m2['id'] in cmp_ids]
    
    cmp_html = '\n'.join(model_card(cm) for cm in cmp_models) if cmp_models else ''
    
    # Tags
    tags_html = ''.join(f'<span class="model-tag">{t}</span>' for t in m.get('tags', []))
    
    # API badge
    api_badge = '<span class="detail-badge detail-badge-yes">✅ API可用</span>' if m.get('apiAvailable') else '<span class="detail-badge detail-badge-no">❌ 无公开API</span>'
    
    # Pricing colors
    pc = tag_class(m.get('pricing', 'paid'))
    
    html = f'''<!DOCTYPE html>
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
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-TBTFSXQ6NF"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){{dataLayer.push(arguments);}}
      gtag('js', new Date());
      gtag('config', 'G-TBTFSXQ6NF');
    </script>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/detail.css">
    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "{model_name}",
      "applicationCategory": "AIApplication",
      "operatingSystem": "Web",
      "offers": {{
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "CNY"
      }},
      "description": "{m.get('strengths','')[:200]}",
      "url": "https://myaishome.com/models/{model_id}.html"
    }}
    </script>
</head>
<body>

<nav class="nav">
    <div class="nav-inner">
        <a href="../index.html" class="nav-logo">🏠 AI家AI户</a>
    </div>
</nav>

<main class="detail-page">
    <!-- Breadcrumb -->
    <div class="breadcrumb">
        <a href="../index.html">首页</a> &rsaquo; 
        <a href="../models.html">模型库</a> &rsaquo; 
        <span>{model_name}</span>
    </div>

    <!-- Hero -->
    <section class="detail-hero">
        <div class="detail-hero-top">
            <h1>{model_name} 怎么样？</h1>
            <span class="detail-badge {pc}">{tag_label(m.get('pricing','paid'))}</span>
        </div>
        <p class="detail-subtitle">{company} · {category} · 更新于 {m.get('lastUpdated','')}</p>
        <p class="detail-summary">{m.get('strengths','')}</p>
        <div class="detail-actions">
            <a href="{m.get('website','#')}" class="detail-cta" target="_blank" rel="nofollow noopener" onclick="gtag('event','click',{{'event_category':'model_detail','event_label':'{model_id}_visit'}})">
                访问官网 →
            </a>
            <a href="../compare.html" class="detail-secondary">查看横评对比表</a>
        </div>
    </section>

    <!-- Core Params -->
    <section class="detail-section">
        <h2>核心参数</h2>
        <div class="param-grid">
            <div class="param-item">
                <span class="param-label">价格</span>
                <span class="param-value">{m.get('priceLabel','')}</span>
            </div>
            <div class="param-item">
                <span class="param-label">定价详情</span>
                <span class="param-value detail-price-detail">{m.get('priceDetail','')}</span>
            </div>
            <div class="param-item">
                <span class="param-label">中文支持</span>
                <span class="param-value">{m.get('chineseSupport','')}</span>
            </div>
            <div class="param-item">
                <span class="param-label">上下文窗口</span>
                <span class="param-value">{m.get('contextWindow','')}</span>
            </div>
            <div class="param-item">
                <span class="param-label">API</span>
                <span class="param-value">{api_badge}</span>
            </div>
            <div class="param-item">
                <span class="param-label">发布日期</span>
                <span class="param-value">{m.get('released','')}</span>
            </div>
            <div class="param-item param-full">
                <span class="param-label">擅长场景</span>
                <span class="param-value">{m.get('bestFor','')}</span>
            </div>
        </div>
    </section>

    <!-- Pros & Cons -->
    <section class="detail-section">
        <h2>优势与不足</h2>
        <div class="pros-cons">
            <div class="pros">
                <h3>✅ 优势</h3>
                <p>{m.get('strengths','')}</p>
            </div>
            <div class="cons">
                <h3>⚠️ 不足</h3>
                <p>{m.get('weaknesses','')}</p>
            </div>
        </div>
    </section>

    <!-- Tags -->
    <section class="detail-section">
        <h2>功能标签</h2>
        <div class="detail-tags">{tags_html}</div>
    </section>

    <!-- Data Source -->
    <section class="detail-section detail-source">
        <p>📋 数据来源：{m.get('source','')}</p>
        <p>🕐 最后更新：{m.get('lastUpdated','')}</p>
    </section>

    <!-- Comparison -->
    <section class="detail-section">
        <h2>对比其他模型</h2>
        <div class="mini-card-grid">
            {cmp_html}
        </div>
        <div style="text-align:center;margin-top:16px;">
            <a href="../compare.html" class="detail-cta" style="display:inline-block;">查看全部36个模型横评 →</a>
        </div>
    </section>

    <!-- Back to models -->
    <div class="detail-back">
        <a href="../models.html">← 返回模型库</a>
    </div>
</main>

<footer class="footer">
    <p>AI家AI户 · 数据最后更新于 2026年6月26日 · 信息来源于各模型官方网站及公开资料 | <a href="../privacy.html">隐私政策</a></p>
    <p style="margin-top:6px;">这不是权威解读，只是帮你省掉搜索时间。用前请核实官方最新信息。</p>
</footer>

</body>
</html>'''
    return html


def main():
    with open(JSON_PATH, 'r', encoding='utf-8') as f:
        all_models = json.load(f)
    
    # Build lookup
    model_map = {m['id']: m for m in all_models}
    
    os.makedirs(MODELS_DIR, exist_ok=True)
    
    generated = []
    for mid in TARGET_IDS:
        if mid not in model_map:
            print(f'WARN: Model {mid} not found, skipping')
            continue
        
        m = model_map[mid]
        html = generate_page(m, all_models)
        filepath = os.path.join(MODELS_DIR, f'{mid}.html')
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(html)
        generated.append(mid)
        print(f'Generated: {mid}.html')
    
    print(f'\nDone! Generated {len(generated)} model detail pages.')
    print(f'Pages: {", ".join(generated)}')


if __name__ == '__main__':
    main()
