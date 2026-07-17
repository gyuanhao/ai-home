// Regenerate sitemap.xml from the filesystem, preserving sensible priorities.
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const BASE = 'https://myaishome.com/';
const TODAY = '2026-07-13';

const EXCLUDE = new Set([
  '404.html',
  'hero-demo.html',
  'skills/template.html',
  'ads.txt',
]);

function walk(dir, relBase) {
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name === '.git' || e.name === 'node_modules') continue;
    const full = path.join(dir, e.name);
    const rel = relBase ? path.posix.join(relBase, e.name) : e.name;
    if (e.isDirectory()) {
      out.push(...walk(full, rel));
    } else if (e.name.endsWith('.html')) {
      if (EXCLUDE.has(rel)) continue;
      out.push(rel);
    }
  }
  return out;
}

function urlFor(rel) {
  // rel uses forward slashes already
  if (rel === 'index.html') return BASE;
  return BASE + rel;
}

function metaFor(rel) {
  // returns {priority, changefreq, lastmod}
  if (rel === 'index.html') return { p: 1.0, c: 'weekly', m: TODAY };
  if (['models.html', 'compare.html', 'skills.html', 'vs/index.html'].includes(rel))
    return { p: 0.9, c: 'weekly', m: TODAY };
  if (['compare-custom.html', 'picker.html', 'news.html', 'about.html'].includes(rel))
    return { p: 0.8, c: 'monthly', m: TODAY };
  if (rel.startsWith('models/')) return { p: 0.8, c: 'weekly', m: TODAY };
  if (rel.startsWith('blog/')) return { p: 0.7, c: 'monthly', m: TODAY };
  if (rel.startsWith('skills/')) return { p: 0.6, c: 'weekly', m: TODAY };
  if (rel.startsWith('vs/')) return { p: 0.6, c: 'monthly', m: TODAY };
  if (['privacy.html', 'contact.html', 'terms.html', 'disclaimer.html'].includes(rel))
    return { p: 0.5, c: 'yearly', m: TODAY };
  return { p: 0.6, c: 'monthly', m: TODAY };
}

const files = walk(ROOT, '').sort();

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

// Put the homepage first
const ordered = ['index.html', ...files.filter(f => f !== 'index.html')];

for (const f of ordered) {
  const { p, c, m } = metaFor(f);
  xml += '  <url>\n';
  xml += `    <loc>${urlFor(f)}</loc>\n`;
  xml += `    <lastmod>${m}</lastmod>\n`;
  xml += `    <changefreq>${c}</changefreq>\n`;
  xml += `    <priority>${p.toFixed(1)}</priority>\n`;
  xml += '  </url>\n';
}

xml += '</urlset>\n';

fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml, 'utf8');
console.log(`Wrote sitemap.xml with ${ordered.length} URLs.`);
// Report categories
const cats = {};
for (const f of ordered) {
  const key = f.includes('/') ? f.split('/')[0] : 'root';
  cats[key] = (cats[key] || 0) + 1;
}
console.log(cats);
