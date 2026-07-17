// Add a consistent legal bar to every footer and a Blog link to every sidebar.
// Corrected: the sidebar regex anchors to the About <li> itself so it never
// spans from an earlier <li> (which could inject into <head>).
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const EXCLUDE = new Set(['404.html', 'hero-demo.html', 'skills/template.html', 'blog/index.html']);

function walk(dir, relBase) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === '.git' || e.name === 'node_modules') continue;
    const full = path.join(dir, e.name);
    const rel = relBase ? path.posix.join(relBase, e.name) : e.name;
    if (e.isDirectory()) out.push(...walk(full, rel));
    else if (e.name.endsWith('.html') && !EXCLUDE.has(rel)) out.push(rel);
  }
  return out;
}

const BLOG_LI = (pfx) =>
  `<li><a href="${pfx}blog/" class="sidebar-link"><svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>博客</a></li>`;

function legalBar(pfx, self) {
  const links = [
    ['privacy.html', '隐私政策'],
    ['terms.html', '服务条款'],
    ['disclaimer.html', '免责声明'],
    ['contact.html', '联系我们'],
    ['blog/', '博客'],
  ];
  const parts = links
    .filter(([f]) => f !== self)
    .map(([f, label]) => `<a href="${pfx}${f}">${label}</a>`)
    .join(' · ');
  return `<p style="margin-top:8px;font-size:13px;color:var(--text-secondary);">${parts}</p>`;
}

// Anchor to the About <li> itself: the <li> must not contain a nested </li>
// before reaching the about.html href.
const ABOUT_RE = /<li[^>]*>(?:(?!<\/li>)[\s\S])*?href="(\.\.\/)?about\.html"[\s\S]*?<\/li>/g;

let count = 0;
const files = walk(ROOT, '');
for (const rel of files) {
  const full = path.join(ROOT, rel);
  let html = fs.readFileSync(full, 'utf8');
  const pfx = rel.includes('/') ? '../' : '';
  const self = path.basename(rel);
  let changed = false;

  // ---- FOOTER ----
  const footerRe = /<footer class="footer">([\s\S]*?)<\/footer>/;
  const fm = html.match(footerRe);
  if (fm) {
    let inner = fm[1];
    const hasAll = ['privacy.html', 'terms.html', 'disclaimer.html', 'contact.html']
      .every((l) => inner.includes(l));
    if (hasAll) {
      inner = inner.replace(/<p[^>]*>[\s\S]*?privacy\.html[\s\S]*?<\/p>/g, '');
    } else {
      inner = inner.replace(/\s*\|\s*<a href="[^"]*(privacy|terms|disclaimer|contact)\.html"[^>]*>[^<]*<\/a>/g, '');
      inner = inner.replace(/<p[^>]*>\s*<a href="[^"]*(privacy|terms|disclaimer|contact)\.html"[^>]*>[^<]*<\/a>\s*<\/p>/g, '');
    }
    inner = inner.replace(/<p[^>]*>\s*<\/p>/g, '');
    const newInner = inner + '\n    ' + legalBar(pfx, self) + '\n    ';
    html = html.replace(footerRe, `<footer class="footer">${newInner}</footer>`);
    changed = true;
  }

  // ---- SIDEBAR Blog link (anchor to About <li>) ----
  if (/class="sidebar-links"/.test(html) &&
      !/href="(\.\.\/)?blog\/" class="sidebar-link"/.test(html)) {
    html = html.replace(ABOUT_RE, (m) => {
      const p = /^<li[^>]*>(?:(?!<\/li>)[\s\S])*?href="\.\.\//.test(m) ? '../' : '';
      return BLOG_LI(p) + '\n            ' + m;
    });
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(full, html, 'utf8');
    count++;
  }
}
console.log(`Updated ${count} files.`);
