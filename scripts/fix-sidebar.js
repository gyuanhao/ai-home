/**
 * 第二遍清理：修复批量转换遗留问题
 * 1) 移除残留的旧 nav-drawer / nav-overlay / drawer-links
 * 2) 把 <aside.sidebar> 移到正确位置（body内容最前面）
 * 3) 确保 </main> 在 </body> 前
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const files = [];
function walk(d) {
    try { for (const f of fs.readdirSync(d)) { const p=path.join(d,f); try{const s=fs.statSync(p);if(s.isDirectory())walk(p);else if(f.endsWith('.html')&&f!=='index.html')files.push(p);}catch{} } } catch{}
}
walk(ROOT);
console.log('Processing', files.length, 'files...');

let fixed = 0;
for (const fp of files) {
    let html = fs.readFileSync(fp, 'utf8');

    // 跳过未转换的文件
    if (!html.includes('<aside class="sidebar"')) continue;

    const rel = path.relative(ROOT, fp);
    let changed = false;

    // ---- 1) 删除残留的旧 drawer/overlay ----
    // <div class="nav-overlay" ... >...</div>
    html = html.replace(/<div class="nav-overlay"[^>]*><\/div>\s*\n?/g, () => { changed=true; return ''; });
    
    // <div class="nav-drawer" id="navDrawer"> ... </div>（可能跨多行）
    html = html.replace(/\s*<div class="nav-drawer"[^>]*>[\s\S]*?<\/div>\s*\n?/g, (m) => {
        if (m.includes('id="navDrawer"') || m.includes('id="navDrawer"')) { changed=true; return ''; }
        return m;
    });

    // 孤立的 <div class="drawer-links" id="drawerLinks"></div>
    html = html.replace(/<div class="drawer-links"[^>]*><\/div>\s*\n?/g, () => { changed=true; return ''; });
    
    // 孤立的 </div> 如果是旧nav-inner/nav留下的（危险操作，仅当行只有</div>时）
    // 不安全，跳过

    // ---- 2) 提取 sidebar 块并移到 body 内容开头 ----
    const sbMatch = html.match(/(<aside class="sidebar"[\s\S]*?<\/aside>)/);
    const toggleMatch = html.match(/(<button class="sidebar-toggle"[^>]*>.*?<\/button>\s*\n?)/s);
    const overlayMatch = html.match(/(<div class="sidebar-overlay"[^>]*><\/div>\s*\n?)/);
    const drawerMatch = html.match(/(<div class="sidebar-drawer"[^>]*>[\s\S]*?<\/div>\s*\n?)/);

    if (sbMatch && (html.indexOf(sbMatch[0]) > 500)) {
        // sidebar 不在文件开头附近 → 需要移动
        const sbFull = [sbMatch[0], '', toggleMatch ? toggleMatch[0] : '', overlayMatch ? overlayMatch[0] : '', drawerMatch ? drawerMatch[0] : '', '\n<main class="main-content">\n'].join('');
        
        // 从原位删除这些块
        let newHtml = html;
        if (sbMatch) newHtml = newHtml.replace(sbMatch[0], '');
        if (toggleMatch) newHtml = newHtml.replace(toggleMatch[0], '');
        if (overlayMatch) newHtml = newHtml.replace(overlayMatch[0], '');
        if (drawerMatch && drawerMatch[0].includes('sidebar-drawer')) newHtml = newHtml.replace(drawerMatch[0], '');

        // 找到插入点：<body> 后第一个实质性内容标签前
        const bodyIdx = newHtml.indexOf('<body');
        const afterBody = newHtml.indexOf('>', bodyIdx) + 1;
        // 跳过空白和注释找到第一个真正的标签
        let insertAt = afterBody;
        const rest = newHtml.slice(insertAt, insertAt + 200);
        const firstTag = rest.match(/<(?:section|div|script|!--|main|nav|header)/);
        if (firstTag && firstTag.index !== undefined) {
            insertAt += firstTag.index;
        }

        newHtml = newHtml.slice(0, insertAt) + '\n' + sbFull + newHtml.slice(insertAt);
        
        // 确保没有重复的 <main class="main-content">
        const mainCount = (newHtml.match(/<main class="main-content">/g)||[]).length;
        if (mainCount > 1) {
            // 只保留第一个
            let idx = newHtml.indexOf('<main class="main-content">');
            idx = newHtml.indexOf('<main class="main-content">', idx + 1);
            while (idx !== -1) {
                newHtml = newHtml.slice(0, idx) + newHtml.slice(idx + '<main class="main-content">'.length);
                idx = newHtml.indexOf('<main class="main-content">', idx);
            }
        }

        html = newHtml;
        changed = true;
    }

    // ---- 3) 确保 </main> 在 </body> 前 ----
    if (html.includes('<main') && !html.includes('</main>')) {
        html = html.replace(/\n<\/body>/, '\n</main>\n</body>');
        changed = true;
    }
    // 处理多个 </main> 的情况
    const closeMainCount = (html.match(/<\/main>/g)||[]).length;
    if (closeMainCount > 1) {
        // 只保留最后一个（在 </body> 前的那个）
        let lastIdx = html.lastIndexOf('</main>');
        let prevIdx = html.lastIndexOf('</main>', lastIdx - 1);
        while (prevIdx !== -1) {
            html = html.slice(0, prevIdx) + html.slice(prevIdx + '</main>'.length);
            lastIdx = html.lastIndexOf('</main>');
            prevIdx = html.lastIndexOf('</main>', lastIdx - 1);
        }
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(fp, html, 'utf8');
        fixed++;
        console.log('FIXED', rel);
    } else {
        console.log('OK   ', rel);
    }
}

console.log(`\n=== ${fixed} files fixed ===`);
