// 重新设计全站导航图标：保留 stroke-line 语言，换成「晴山」风格
// - 霁蓝 #3B5BDB 主色（落地设计方向主色）
// - 圆头线条 round caps，更亲切
// - 以中文标签为锚点，同时替换桌面侧边栏 + 移动抽屉两套图标
const fs = require('fs');
const path = require('path');
const ROOT = process.cwd();

// 每个导航项的新 SVG（保持 class="sb-icon"，viewBox 24，圆头，霁蓝）
const ICONS = {
  '首页':   '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.6V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.6"/><path d="M9.5 20v-5.5h5V20"/></svg>',
  '模型库': '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 21 7.5 12 12 3 7.5z"/><path d="M3 12l9 4.5 9-4.5"/><path d="M3 16.5 12 21l9-4.5"/></svg>',
  '横向对比': '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20v-9"/><path d="M12 20V5"/><path d="M20 20v-6"/></svg>',
  '自定义对比': '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"/><path d="M8.5 12.5 11 15l4.5-4.8"/></svg>',
  '热门对比': '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 8h10l-3-3"/><path d="M17 16H7l3 3"/></svg>',
  'AI选型器': '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h8"/><path d="M16 8h4"/><circle cx="14" cy="8" r="2"/><path d="M4 16h4"/><path d="M12 16h8"/><circle cx="10" cy="16" r="2"/></svg>',
  '新闻':   '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13a1 1 0 0 0 1 1 1 1 0 0 0 1-1V8"/><path d="M4 5v13a1 1 0 0 0 1 1h11"/><path d="M8 8h5"/><path d="M8 11.5h5"/></svg>',
  '技能包': '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/><circle cx="12" cy="14.5" r="1.5"/></svg>',
  '博客':   '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v4h4"/><path d="M9 12h6"/><path d="M9 15.5h6"/></svg>',
  '关于':   '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/></svg>'
};

function walk(d, rb) {
  let o = [];
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (e.name === '.git' || e.name === 'node_modules') continue;
    const f = path.join(d, e.name);
    const r = rb ? path.posix.join(rb, e.name) : e.name;
    if (e.isDirectory()) o.push(...walk(f, r));
    else if (e.name.endsWith('.html')) o.push(r);
  }
  return o;
}

let fileCount = 0;
const totals = {};
for (const label of Object.keys(ICONS)) totals[label] = 0;

for (const rel of walk(ROOT, '')) {
  const full = path.join(ROOT, rel);
  let h = fs.readFileSync(full, 'utf8');
  let changed = false;
  for (const [label, svg] of Object.entries(ICONS)) {
    // 负向前瞻 (?!</svg>) 保证匹配的 svg 内容不会跨过自身的 </svg>，
    // 从而不会吞掉后续导航项；再用标签锚定到正确的 svg。
    const re = new RegExp('<svg class="sb-icon"[^>]*>(?:(?!</svg>)[\\s\\S])*?</svg>\\s*(' + label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'g');
    const matches = h.match(re);
    if (matches && matches.length) {
      totals[label] += matches.length;
      h = h.replace(re, svg + '$1');
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(full, h, 'utf8');
    fileCount++;
  }
}

console.log('已修改文件数:', fileCount);
console.log('各图标替换次数:');
for (const [label, n] of Object.entries(totals)) console.log('  ' + label + ': ' + n);
