const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();

function walk(d) {
  let o = [];
  try {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      if (e.name === '.git' || e.name === 'node_modules') continue;
      const f = path.join(d, e.name);
      if (e.isDirectory()) o.push(...walk(f));
      else if (f.endsWith('.html')) o.push(f);
    }
  } catch (e) {}
  return o;
}

// Icon SVG map: link text (or href keyword) → <svg> markup
// These match the desktop sidebar icons exactly
const ICON_MAP = [
  {
    key: '首页',
    svg: '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>'
  },
  {
    key: '模型库',
    svg: '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>'
  },
  {
    key: '横向对比',
    svg: '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>'
  },
  {
    key: '自定义对比',
    svg: '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>'
  },
  {
    key: '热门对比',
    svg: '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>'
  },
  {
    key: 'AI选型器',
    svg: '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>'
  },
  {
    key: '新闻',
    svg: '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8z"/></svg>'
  },
  {
    key: '技能包',
    svg: '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>'
  },
  {
    key: '博客',
    svg: '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8"y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>'
  },
  {
    key: '关于',
    svg: '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>'
  }
];

let fixedCount = 0;
let filesChanged = 0;

for (const filePath of walk(ROOT)) {
  let html = fs.readFileSync(filePath, 'utf8');
  
  // Only target the mobile drawer (sidebar-drawer), not the desktop aside
  const drawerIdx = html.indexOf('sidebar-drawer');
  if (drawerIdx < 0) continue;
  
  const ulStart = html.indexOf('<ul class="sidebar-links">', drawerIdx);
  if (ulStart < 0) continue;
  const ulEnd = html.indexOf('</ul>', ulStart);
  if (ulEnd < 0) continue;
  
  const ulContent = html.slice(ulStart, ulEnd);
  let newUlContent = ulContent;
  let changed = false;
  
  for (const entry of ICON_MAP) {
    // Match: <li><a href="..." class="sidebar-link"...>TEXT</a></li>
    // where TEXT is NOT preceded by an SVG (i.e., no icon yet)
    const regex = new RegExp(
      '(<li><a [^>]*class="sidebar-link"[^>]*)>(' + entry.key + ')(</a></li>)',
      'g'
    );
    
    const matches = [...newUlContent.matchAll(regex)];
    for (const m of matches) {
      // Skip if this link already has an svg inside
      if (m[1].includes('<svg')) continue;
      
      newUlContent = newUlContent.replace(m[0], 
        m[1] + '>' + entry.svg + m[2] + m[3]
      );
      changed = true;
      fixedCount++;
    }
  }
  
  if (changed) {
    html = html.slice(0, ulStart) + newUlContent + html.slice(ulEnd);
    fs.writeFileSync(filePath, html, 'utf8');
    filesChanged++;
    console.log('FIXED:', path.relative(ROOT, filePath));
  }
}

console.log(`\nDone: ${fixedCount} icons added across ${filesChanged} files`);
