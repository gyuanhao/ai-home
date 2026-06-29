// AI家AI户 — 模型详情页双语渲染
// 从页面内嵌的 <script id="model-data"> JSON 读取模型数据
// 根据当前语言渲染所有内容

(function() {
    // Read model data from embedded JSON
    const dataScript = document.getElementById('model-data');
    if (!dataScript) return;
    let model;
    try {
        model = JSON.parse(dataScript.textContent);
    } catch(e) {
        console.warn('Failed to parse model data');
        return;
    }

    const lang = function() {
        return localStorage.getItem('aihome_lang') || 'zh';
    };

    const isEn = function() { return lang() === 'en'; };

    // Simple lookup: get zh or en field
    const f = function(zhVal, enVal) {
        if (!enVal) return zhVal; // no English fallback
        return isEn() ? enVal : zhVal;
    };

    // =================== Render Functions ===================

    function renderBreadcrumb() {
        const el = document.getElementById('breadcrumb-model');
        if (el) el.textContent = f(model.name, model.nameEn || model.name);
    }

    function renderHero() {
        const nameEl = document.getElementById('detail-name');
        const subtitleEl = document.getElementById('detail-subtitle');
        const summaryEl = document.getElementById('detail-summary');
        const badgeEl = document.getElementById('detail-badge');
        const ctaEl = document.getElementById('detail-cta');

        if (nameEl) nameEl.textContent = f(model.name, model.nameEn || model.name);
        if (subtitleEl) {
            const company = f(model.company, model.company);
            const cat = f(model.category, model.category);
            subtitleEl.innerHTML = company + ' · ' + cat + ' · ' +
                (isEn() ? 'Updated ' : '更新于 ') + model.lastUpdated;
        }
        if (summaryEl) summaryEl.textContent = f(model.strengths, model.strengthsEn || model.strengths);
        if (ctaEl) ctaEl.textContent = isEn() ? 'Visit Official Site →' : '访问官网 →';
        if (badgeEl) {
            const pricing = model.pricing;
            badgeEl.textContent = isEn() ?
                (pricing === 'free' ? 'Free' : pricing === 'freemium' ? 'Free+Paid' : 'Paid') :
                (pricing === 'free' ? '免费' : pricing === 'freemium' ? '免费+付费' : '付费');
            badgeEl.className = 'detail-badge badge-' + pricing;
        }
    }

    function renderParams() {
        // Price
        const priceEl = document.getElementById('param-price');
        if (priceEl) priceEl.textContent = f(model.priceLabel, model.priceLabelEn || model.priceLabel);

        // Price detail
        const pdEl = document.getElementById('param-priceDetail');
        if (pdEl) pdEl.textContent = f(model.priceDetail, model.priceDetailEn || model.priceDetail);

        // Chinese support
        const cnEl = document.getElementById('param-cn');
        if (cnEl) cnEl.textContent = f(model.chineseSupport, model.chineseSupportEn || model.chineseSupport);

        // Context window
        const ctxEl = document.getElementById('param-context');
        if (ctxEl) ctxEl.textContent = model.contextWindow || '';

        // API
        const apiEl = document.getElementById('param-api');
        if (apiEl) {
            if (model.apiAvailable) {
                apiEl.innerHTML = isEn() ? '<span class="detail-badge detail-badge-yes">✅ API Available</span>' :
                    '<span class="detail-badge detail-badge-yes">✅ API可用</span>';
            } else {
                apiEl.innerHTML = isEn() ? '<span class="detail-badge detail-badge-no">❌ No API</span>' :
                    '<span class="detail-badge detail-badge-no">❌ 无API</span>';
            }
        }

        // Released
        const relEl = document.getElementById('param-released');
        if (relEl) relEl.textContent = f(model.released, model.releasedEn || model.released);

        // Best for
        const bestEl = document.getElementById('param-bestFor');
        if (bestEl) bestEl.textContent = f(model.bestFor, model.bestForEn || model.bestFor);
    }

    function renderProsCons() {
        const prosEl = document.getElementById('pros-text');
        const consEl = document.getElementById('cons-text');
        if (prosEl) prosEl.textContent = f(model.strengths, model.strengthsEn || model.strengths);
        if (consEl) consEl.textContent = f(model.weaknesses, model.weaknessesEn || model.weaknesses);
    }

    function renderTags() {
        const tagsEl = document.getElementById('detail-tags');
        if (!tagsEl) return;
        const tags = isEn() && model.tagsEn ? model.tagsEn : model.tags;
        tagsEl.innerHTML = tags.map(t => '<span class="model-tag">' + t + '</span>').join('');
    }

    function renderSource() {
        const srcEl = document.getElementById('detail-source');
        const dateEl = document.getElementById('detail-date');
        if (srcEl) srcEl.textContent = (isEn() ? 'Source: ' : '数据来源：') + (model.source || '');
        if (dateEl) dateEl.textContent = (isEn() ? 'Last updated: ' : '最后更新：') + (model.lastUpdated || '');
    }

    function renderMiniCards() {
        const grid = document.getElementById('mini-card-grid');
        if (!grid) return;

        // Update badge text
        grid.querySelectorAll('.mini-badge').forEach(function(b) {
            if (b.classList.contains('badge-free')) {
                b.textContent = isEn() ? 'Free' : '免费';
            } else if (b.classList.contains('badge-freemium')) {
                b.textContent = isEn() ? 'Free+Paid' : '免费+付费';
            } else if (b.classList.contains('badge-paid')) {
                b.textContent = isEn() ? 'Paid' : '付费';
            }
        });
        // Update link text
        grid.querySelectorAll('.mini-link').forEach(function(l) {
            l.textContent = isEn() ? 'View details →' : '查看详情 →';
        });
        // Update name, price and bestFor based on language
        grid.querySelectorAll('[data-zh][data-en]').forEach(function(el) {
            el.textContent = isEn() ? el.getAttribute('data-en') : el.getAttribute('data-zh');
        });
    }

    function renderPageTitle() {
        // Update <title> for SEO
        var name = f(model.name, model.nameEn || model.name);
        document.title = isEn() ?
            name + ' Review — 2026 Price, Features & Benchmarks | AI Home' :
            name + '怎么样？2026年最新价格、功能与评测 | AI家AI户';
    }

    // =================== Run All ===================
    function renderAll() {
        renderPageTitle();
        renderBreadcrumb();
        renderHero();
        renderParams();
        renderProsCons();
        renderTags();
        renderSource();
        renderMiniCards();
    }

    // Render after DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderAll);
    } else {
        renderAll();
    }
})();
