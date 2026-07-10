/**
 * 批量更新：顶部导航 → 左侧边栏（小红书风格）
 * 处理 3 种页面类型的路径差异：
 *   1) 顶级页（index.html 除外，已手动改）— 绝对路径
 *   2) models/*.html — 相对路径 ../
 *   3) vs/*.html       — 相对路径 ../
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// ═══ 侧边栏 HTML 模板 ═══
function sidebarHTML(prefix, activePage, hasLang = true) {
    const p = prefix; // '' or '../'
    const act = (name) => name === activePage ? ' active' : '';
    return `<aside class="sidebar" id="sidebar">
    <a href="${p}index.html" class="sidebar-logo">
        <svg width="26" height="26" class="logo-icon" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        AI家AI户
    </a>
    <nav class="sidebar-nav">
        <ul class="sidebar-links">
            <li><a href="${p}index.html" class="sidebar-link${act('home')}">首页</a></li>
            <li><a href="${p}models.html" class="sidebar-link${act('models')}">模型库</a></li>
            <li><a href="${p}compare.html" class="sidebar-link${act('compare')}">横向对比</a></li>
            <li><a href="${p}compare-custom.html" class="sidebar-link">自定义对比</a></li>
            <li><a href="${p}vs/" class="sidebar-link${act('vs')}">热门对比</a></li>
            <li><a href="${p}picker.html" class="sidebar-link">AI选型器</a></li>
            <li><a href="${p}news.html" class="sidebar-link">新闻</a></li>
            <li><a href="${p}skills.html" class="sidebar-link${act('skills')}">技能包</a></li>
            <li><a href="${p}about.html" class="sidebar-link${act('about')}">关于</a></li>
        </ul>
    </nav>
    ${hasLang ? `<div class="sidebar-footer">
        <button id="langSwitch" onclick="switchLang()" class="sidebar-lang-btn">EN</button>
    </div>` : ''}
</aside>

<button class="sidebar-toggle" onclick="toggleSidebar()" aria-label="menu">&#9776;</button>

<div class="sidebar-overlay" id="sidebarOverlay" onclick="closeSidebar()"></div>
<div class="sidebar-drawer" id="sidebarDrawer">
    <div class="drawer-head">
        <span class="d-logo">🏠 AI家AI户</span>
        <button class="drawer-close-btn" onclick="closeSidebar()" aria-label="close">&#10005;</button>
    </div>
    <nav class="sidebar-nav">
        <ul class="sidebar-links">
            <li><a href="${p}index.html" class="sidebar-link${act('home')}">首页</a></li>
            <li><a href="${p}models.html" class="sidebar-link${act('models')}">模型库</a></li>
            <li><a href="${p}compare.html" class="sidebar-link${act('compare')}">横向对比</a></li>
            <li><a href="${p}compare-custom.html" class="sidebar-link">自定义对比</a></li>
            <li><a href="${p}vs/" class="sidebar-link${act('vs')}">热门对比</a></li>
            <li><a href="${p}picker.html" class="sidebar-link">AI选型器</a></li>
            <li><a href="${p}news.html" class="sidebar-link">新闻</a></li>
            <li><a href="${p}skills.html" class="sidebar-link">技能包</a></li>
            <li><a href="${p}about.html" class="sidebar-link">关于</a></li>
        </ul>
    </nav>
    ${hasLang ? `<div class="sidebar-footer"><button onclick="switchLang();closeSidebar();" class="sidebar-lang-btn">EN</button></div>` : ''}
</div>

<main class="main-content">
`;
}

// ═══ 判断页面类型和活跃页 ═══
function detectType(filePath) {
    const rel = path.relative(ROOT, filePath).replace(/\\/g, '/');
    if (rel.startsWith('models/') && rel.endsWith('.html')) {
        const name = path.basename(filePath, '.html');
        return { type: 'detail', prefix: '../', activePage: 'models', model: name };
    }
    if (rel.startsWith('vs/') && rel.endsWith('.html')) {
        return { type: 'vs', prefix: '../', activePage: 'vs' };
    }
    // top-level
    const name = path.basename(filePath, '.html');
    const map = { 'models': 'models', 'compare': 'compare', 'about': 'about',
                 'skills': 'skills', 'news': 'news', 'picker': 'picker',
                 'compare-custom': 'custom', 'hero-demo': 'home', 'privacy': 'home', '404': 'home' };
    return { type: 'top', prefix: '', activePage: map[name] || 'home' };
}

// ═══ 单页转换 ═══
function convertFile(filePath) {
    let html = fs.readFileSync(filePath, 'utf8');

    // 检查是否已转换（有 <aside class="sidebar">）
    if (html.includes('<aside class="sidebar"')) {
        return { status: 'skip', reason: 'already converted' };
    }

    // 检查是否有旧 nav
    if (!html.includes('<nav class="nav">')) {
        return { status: 'skip', reason: 'no old nav found' };
    }

    const info = detectType(filePath);

    // 1) 删除旧的 nav 块：<nav class="nav"> ... </nav>
    html = html.replace(/<nav class="nav">\s*<div class="nav-inner">[\s\S]*?<\/div>\s*<\/nav>\s*\n?/, '');

    // 2) 删除旧的 overlay+drawer：<div class="nav-overlay"...> 到下一个 </div>\n 或到 <section/其他内容前
    html = html.replace(/<!-- 移动端汉堡菜单遮罩[^\n]*\n[\s\S]*?<\/ul>\s*<\/div>\s*\n?/, '');
    html = html.replace(/<!-- Mobile nav overlay[\s\S]*?<\/div>\s*\n?/g, '');

    // 更精确地删除 drawer 相关块
    html = html.replace(/<div class="nav-overlay"[^>]*><\/div>\s*\n?/g, '');
    html = html.replace(/<div class="nav-drawer"[^>]*>[\s\S]*?<\/div>\s*\n?(?=<\w)/g, '');

    // 3) 在 body 内容开头插入侧边栏
    const insertPos = html.indexOf('<section') !== -1
        ? html.indexOf('<section')
        : html.indexOf('<div', html.indexOf('<body>') + 6);
    
    if (insertPos === -1) {
        return { status: 'error', reason: 'cannot find insertion point' };
    }

    const newNav = sidebarHTML(info.prefix, info.activePage);
    html = html.slice(0, insertPos) + newNav + '\n' + html.slice(insertPos);

    // 4) 在 </body> 前加 </main>
    html = html.replace(/(<\/(?:nav|script)>)\s*(\n\s*)<\/body>/, '$1$2</main>\n</body>');
    // 也处理无 footer 直接 </body> 的情况
    if (!html.includes('</main>')) {
        html = html.replace(/\n<\/body>/, '\n</main>\n</body>');
    }

    fs.writeFileSync(filePath, html, 'utf8');
    return { status: 'ok', type: info.type, active: info.activePage };
}

// ═══ 主流程 ═══
const files = [];
function collect(dir, ext = '.html') {
    try {
        const entries = fs.readdirSync(dir);
        for (const f of entries) {
            const fp = path.join(dir, f);
            try {
                const stat = fs.statSync(fp);
                if (stat.isDirectory()) collect(fp, ext);
                else if (f.endsWith(ext)) files.push(fp);
            } catch {}
        }
    } catch (e) {
        console.error('collect error:', dir, e.message);
    }
}
console.log('ROOT =', ROOT);
collect(ROOT);
console.log('collected', files.length, 'html files');

let ok = 0, skip = 0, err = 0;
for (const f of files) {
    if (f.endsWith('index.html')) { skip++; continue; } // 已手动改
    const r = convertFile(f);
    if (r.status === 'ok') { ok++; console.log(`OK   ${path.relative(ROOT, f)} (${r.type}, active=${r.active})`); }
    else if (r.status === 'skip') { skip++; console.log(`SKIP ${path.relative(ROOT, f)}: ${r.reason}`); }
    else { err++; console.log(`ERR  ${path.relative(ROOT, f)}: ${r.reason}`); }
}

console.log(`\n=== 完成: ${ok} updated, ${skip} skipped, ${err} errors ===`);
