/**
 * 第三遍：精确修复已知结构问题
 * - 修复不完整的 sidebar-drawer（缺 </div> 闭合和内部 nav）
 * - 清理孤立的 </div> / drawer-links 残留
 * - 格式化 sidebar 块之间的换行
 * - 转换 vs/index.html
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// ═══ 完整的 mobile drawer HTML（用于替换不完整的） ═══
function fullDrawer(prefix) {
    return `<div class="sidebar-overlay" id="sidebarOverlay" onclick="closeSidebar()"></div>
<div class="sidebar-drawer" id="sidebarDrawer">
    <div class="drawer-head">
        <span class="d-logo">🏠 AI家AI户</span>
        <button class="drawer-close-btn" onclick="closeSidebar()" aria-label="close">&#10005;</button>
    </div>
    <nav class="sidebar-nav">
        <ul class="sidebar-links">
            <li><a href="${prefix}index.html" class="sidebar-link">首页</a></li>
            <li><a href="${prefix}models.html" class="sidebar-link">模型库</a></li>
            <li><a href="${prefix}compare.html" class="sidebar-link">横向对比</a></li>
            <li><a href="${prefix}compare-custom.html" class="sidebar-link">自定义对比</a></li>
            <li><a href="${prefix}vs/" class="sidebar-link">热门对比</a></li>
            <li><a href="${prefix}picker.html" class="sidebar-link">AI选型器</a></li>
            <li><a href="${prefix}news.html" class="sidebar-link">新闻</a></li>
            <li><a href="${prefix}skills.html" class="sidebar-link">技能包</a></li>
            <li><a href="${prefix}about.html" class="sidebar-link">关于</a></li>
        </ul>
    </nav>
    <div class="sidebar-footer"><button onclick="switchLang();closeSidebar();" class="sidebar-lang-btn">EN</button></div>
</div>
`;
}

function getPrefix(fp) {
    const rel = path.relative(ROOT, fp).replace(/\\/g, '/');
    if (rel.startsWith('models/') || rel.startsWith('vs/')) return '../';
    return '';
}

// 收集所有 html（不含 index.html）
const files = [];
function walk(d) {
    try { for (const f of fs.readdirSync(d)) { const p=path.join(d,f); try{const s=fs.statSync(p);if(s.isDirectory())walk(p);else if(f.endsWith('.html')&&f!=='index.html')files.push(p);}catch{} } } catch{}
}
walk(ROOT);

let fixed = 0;
for (const fp of files) {
    let h = fs.readFileSync(fp, 'utf8);
    const rel = path.relative(ROOT, fp);
    
    // 跳过未转换文件
    if (!h.includes('<aside class="sidebar"')) continue;
    
    let changed = false;
    const prefix = getPrefix(fp);

    // ---- A) 修复格式：确保 aside > button > overlay > drawer 之间有换行 ----
    h = h.replace(/<\/aside><button class="sidebar-toggle"/, '</aside>\n<button class="sidebar-toggle"');

    // ---- B) 替换整个不完整的 drawer 区域 ----
    // 检测模式1: <div class="sidebar-overlay"...>...</div>\n<div class="sidebar-drawer"...> 后面缺少完整内容
    // 直接用正则找到从 sidebar-overlay 到 main-content 之间的所有 drawer 相关内容，整体替换
    
    // 找到 sidebar-overlay 到 <main 之间的所有内容
    const overlayIdx = h.indexOf('<div class="sidebar-overlay"');
    const mainIdx = h.indexOf('<main');
    
    if (overlayIdx !== -1 && mainIdx !== -1 && overlayIdx < mainIdx) {
        const between = h.slice(overlayIdx, mainIdx);
        // 如果这个区域看起来损坏（没有完整的 drawer 结构）
        if (!between.includes('</div>') || !between.includes('<nav class="sidebar-nav">') || 
            between.includes('<main') || between.length < 200) {
            h = h.slice(0, overlayIdx) + fullDrawer(prefix) + '\n' + h.slice(mainIdx);
            changed = true;
        }
    }

    // ---- C) 清理残留的旧 drawer/孤儿标签 ----
    // 孤立的 <div class="drawer-links" ...></div>
    h = h.replace(/^\s*<div class="drawer-links"[^>]*><\/div>\s*\n?/gm, () => { changed=true; return ''; });
    
    // 孤立的 </div> 行（仅当单独一行时才删——危险但必要）
    // 改为更安全的方式：只删除在 sidebar 和 main-content 之间出现的孤立 </div>
    
    // 删除 model-data script 前面的孤立 </div>
    h = h.replace(/<\/div>\s*\n(<script id="model-data")/, '\n$1', () => { changed=true; return ''; });

    // ---- D) 确保只有一层 <main> ----
    // 移除可能重复的 <main class="detail-page"> 或其他内层 main
    const openMains = [...h.matchAll(/<main[\s>]/g)];
    if (openMains.length > 1) {
        // 保留第一个 <main，移除后续的
        let firstEnd = h.indexOf('>', h.indexOf('<main')) + 1;
        let rest = h.slice(firstEnd);
        rest = rest.replace(/<main[\s>][\s\S]*?<\/main>/g, (m) => {
            // 只保留内部的 内容，去掉包裹的 main 标签
            const inner = m.replace(/<main[\s>]/, '').replace(/<\/main>\s*$/, '');
            changed = true;
            return inner;
        });
        h = h.slice(0, firstEnd) + rest;
    }

    if (changed) {
        fs.writeFileSync(fp, h, 'utf8');
        fixed++;
        console.log('FIXED', rel);
    } else {
        console.log('OK   ', rel);
    }
}

// 单独处理 vs/index.html
const vsIndex = path.join(ROOT, 'vs', 'index.html');
if (fs.existsSync(vsIndex)) {
    let h = fs.readFileSync(vsIndex, 'utf8');
    if (h.includes('<nav class="nav">')) {
        // 复用 convertFile 逻辑（简化版）
        h = h.replace(/<nav class="nav">\s*<div class="nav-inner">[\s\S]*?<\/div>\s*<\/nav>\s*\n?/, '');
        h = h.replace(/<div class="nav-overlay"[^>]*><\/div>\s*\n?/g, '');
        
        const insertPos = h.indexOf('<section') !== -1 ? h.indexOf('<section') : h.indexOf('<main');
        const newNav = fullDrawer('');
        const sbPart = `<aside class="sidebar" id="sidebar">
    <a href="../index.html" class="sidebar-logo">
        <svg width="26" height="26" class="logo-icon" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        AI家AI户
    </a>
    <nav class="sidebar-nav">
        <ul class="sidebar-links">
            <li><a href="../index.html" class="sidebar-link">首页</a></li>
            <li><a href="../models.html" class="sidebar-link">模型库</a></li>
            <li><a href="../compare.html" class="sidebar-link">横向对比</a></li>
            <li><a href="../compare-custom.html" class="sidebar-link">自定义对比</a></li>
            <li><a href="index.html" class="sidebar-link active">热门对比</a></li>
            <li><a href="../picker.html" class="sidebar-link">AI选型器</a></li>
            <li><a href="../news.html" class="sidebar-link">新闻</a></li>
            <li><a href="../skills.html" class="sidebar-link">技能包</a></li>
            <li><a href="../about.html" class="sidebar-link">关于</a></li>
        </ul>
    </nav>
</aside>

<button class="sidebar-toggle" onclick="toggleSidebar()" aria-label="menu">&#9776;</button>

`;
        
        h = h.slice(0, insertPos) + sbPart + newNav + '<main class="main-content">\n' + h.slice(insertPos);
        h = h.replace(/\n<\/body>/, '\n</main>\n</body>');
        fs.writeFileSync(vsIndex, h, 'utf8');
        fixed++;
        console.log('FIXED vs/index.html (old nav removed)');
    }
}

console.log(`\n=== ${fixed} files fixed in pass 3 ===`);
