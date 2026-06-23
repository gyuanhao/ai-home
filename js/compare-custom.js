// AI家AI户 - 自定义对比工具
(function() {

// 对比维度定义（label在render时通过t()动态获取）
const DIMENSIONS = [
    { i18nKey: 'compareCustom.dim.company', key: 'company' },
    { i18nKey: 'compareCustom.dim.priceLabel', key: 'priceLabel' },
    { i18nKey: 'compareCustom.dim.priceDetail', key: 'priceDetail' },
    { i18nKey: 'compareCustom.dim.chineseSupport', key: 'chineseSupport' },
    { i18nKey: 'compareCustom.dim.contextWindow', key: 'contextWindow' },
    { i18nKey: 'compareCustom.dim.apiAvailable', key: 'apiAvailable', format: v => v ? '✅ ' + (typeof t === 'function' ? t('compareCustom.dim.apiAvailableYes') : '可用') : '❌ ' + (typeof t === 'function' ? t('compareCustom.dim.apiAvailableNo') : '不可用') },
    { i18nKey: 'compareCustom.dim.released', key: 'released' },
    { i18nKey: 'compareCustom.dim.bestFor', key: 'bestFor' },
    { i18nKey: 'compareCustom.dim.strengths', key: 'strengths' },
    { i18nKey: 'compareCustom.dim.weaknesses', key: 'weaknesses' },
];

// 类别图标映射
const CAT_ICONS = {
    '语言模型': '🗣',
    'Agent平台': '🤖',
    '图像模型': '🎨',
    '视频模型': '🎬',
    '代码模型': '💻',
};

const CAT_ORDER = ['语言模型', 'Agent平台', '图像模型', '视频模型', '代码模型'];

let selectedIds = new Set();

// ---- 初始化 ----
document.addEventListener('DOMContentLoaded', function() {
    renderCheckboxes();
    bindEvents();
    loadFromURL();
});

function bindEvents() {
    const compareBtn = document.getElementById('compareBtn');
    if (compareBtn) {
        compareBtn.addEventListener('click', runCompare);
    }
}

// ---- 渲染勾选框 ----
function renderCheckboxes() {
    const container = document.getElementById('categoryCheckboxes');
    if (!container) return;

    let html = '';

    CAT_ORDER.forEach(cat => {
        const catModels = models.filter(m => m.category === cat);
        if (catModels.length === 0) return;

        html += '<div class="select-cat">';
        html += '<div class="select-cat-header">' + (CAT_ICONS[cat] || '') + ' ' + cat + ' <span class="select-cat-count">' + catModels.length + (typeof t === 'function' ? t('compareCustom.catCount').replace('{0}', catModels.length) : '个') + '</span></div>';
        html += '<div class="select-grid">';

        catModels.forEach(m => {
            html += '<label class="select-card" data-id="' + m.id + '" data-cat="' + cat + '">';
            html += '<input type="checkbox" name="cmp" value="' + m.id + '">';
            html += '<span class="select-name">' + m.name + '</span>';
            html += '</label>';
        });

        html += '</div></div>';
    });

    container.innerHTML = html;

    // 绑定勾选事件
    container.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', onCheckboxChange);
    });
}

function onCheckboxChange() {
    const allCbs = document.querySelectorAll('#selectorArea input[type="checkbox"]');

    // 收集已选
    selectedIds.clear();
    allCbs.forEach(cb => {
        if (cb.checked) selectedIds.add(cb.value);
    });

    const count = selectedIds.size;
    document.getElementById('selectedCount').textContent = count;

    const btn = document.getElementById('compareBtn');
    if (count >= 2 && count <= 6) {
        btn.disabled = false;
        btn.textContent = typeof t === 'function' ? t('compareCustom.btnReady').replace('{0}', count) : ('开始对比（已选' + count + '个）');
        btn.classList.remove('compare-btn-disabled');
        btn.classList.add('compare-btn-ready');
    } else if (count > 6) {
        btn.disabled = true;
        btn.textContent = typeof t === 'function' ? t('compareCustom.btnMax').replace('{0}', count) : ('最多选6个（当前' + count + '个）');
        btn.classList.add('compare-btn-disabled');
        btn.classList.remove('compare-btn-ready');
    } else {
        btn.disabled = true;
        btn.textContent = typeof t === 'function' ? t('compareCustom.btnMin') : '开始对比（至少选2个）';
        btn.classList.add('compare-btn-disabled');
        btn.classList.remove('compare-btn-ready');
    }
}

// ---- 执行对比 ----
function runCompare() {
    if (selectedIds.size < 2) return;

    const selectedModels = models.filter(m => selectedIds.has(m.id));
    if (selectedModels.length < 2) return;

    // 隐藏选择器，显示结果
    document.getElementById('selectorArea').style.display = 'none';
    document.getElementById('resultArea').style.display = 'block';

    renderTable(selectedModels);
    updateURL(selectedModels);

    // 滚动到结果区域
    document.getElementById('resultArea').scrollIntoView({ behavior: 'smooth' });

    // GA 事件
    if (typeof gtag === 'function') {
        gtag('event', 'custom_compare', {
            'model_count': selectedModels.length,
            'model_ids': selectedModels.map(m => m.id).join(',')
        });
    }
}

function renderTable(selectedModels) {
    const table = document.getElementById('customTable');
    if (!table) return;

    // 表头
    const dimColLabel = typeof t === 'function' ? t('compareCustom.dimCol') : '维度';
    let html = '<thead><tr><th>' + dimColLabel + '</th>';
    selectedModels.forEach(m => {
        html += '<th><a href="' + m.website + '" target="_blank" rel="noopener" title="点击访问官网">' + m.name + '</a><br><span style="font-size:11px;color:var(--text-secondary);font-weight:400;">' + m.company.split('（')[0] + '</span></th>';
    });
    html += '</tr></thead><tbody>';

    // 数据行
    DIMENSIONS.forEach(dim => {
        html += '<tr>';
        html += '<td>' + (typeof t === 'function' ? t(dim.i18nKey) : dim.label || dim.i18nKey) + '</td>';
        selectedModels.forEach(m => {
            let val = m[dim.key];
            if (dim.format) val = dim.format(val);
            if (val === undefined || val === '' || val === null) val = '—';
            val = String(val);
            // 对长文本截断提示
            if (val.length > 120) {
                val = '<span title="' + val.replace(/"/g, '&quot;') + '" style="cursor:help;border-bottom:1px dotted var(--text-secondary);">' + val.substring(0, 117) + '...</span>';
            }
            html += '<td>' + val + '</td>';
        });
        html += '</tr>';
    });

    html += '</tbody>';
    table.innerHTML = html;
}

// ---- URL 分享 ----
function updateURL(selectedModels) {
    const ids = selectedModels.map(m => m.id).join(',');
    const url = window.location.pathname + '?cmp=' + ids;
    window.history.replaceState({}, '', url);
}

function loadFromURL() {
    const params = new URLSearchParams(window.location.search);
    const cmp = params.get('cmp');
    if (!cmp) return;

    const ids = cmp.split(',');
    if (ids.length < 2) return;

    const validIds = new Set(ids.filter(id => models.some(m => m.id === id)));
    if (validIds.size < 2) return;

    // 勾选对应checkbox
    document.querySelectorAll('#selectorArea input[type="checkbox"]').forEach(cb => {
        if (validIds.has(cb.value)) {
            cb.checked = true;
            selectedIds.add(cb.value);
        }
    });

    // 更新计数
    document.getElementById('selectedCount').textContent = selectedIds.size;
    const btn = document.getElementById('compareBtn');
    btn.disabled = false;
    btn.textContent = typeof t === 'function' ? t('compareCustom.btnReady').replace('{0}', selectedIds.size) : ('开始对比（已选' + selectedIds.size + '个）');
    btn.classList.remove('compare-btn-disabled');
    btn.classList.add('compare-btn-ready');

    // 自动执行对比
    setTimeout(() => runCompare(), 200);
}

// ---- 复制链接 ----
function copyComparisonLink() {
    const url = window.location.origin + window.location.pathname + window.location.search;
    navigator.clipboard.writeText(url).then(() => {
        const fb = document.getElementById('copyFeedback');
        if (fb) {
            fb.style.opacity = '1';
            setTimeout(() => { fb.style.opacity = '0'; }, 2000);
        }
    }).catch(() => {
        prompt(typeof t === 'function' ? t('compareCustom.copyPrompt') : '复制以下链接分享对比结果：', url);
    });
}

// ---- 重置 ----
function resetCompare() {
    document.getElementById('resultArea').style.display = 'none';
    document.getElementById('selectorArea').style.display = 'block';
    window.history.replaceState({}, '', window.location.pathname);
    document.getElementById('selectorArea').scrollIntoView({ behavior: 'smooth' });
}

// 挂载到全局
window.runCompare = runCompare;
window.resetCompare = resetCompare;
window.copyComparisonLink = copyComparisonLink;

})();
