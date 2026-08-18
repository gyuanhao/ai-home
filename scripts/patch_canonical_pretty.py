#!/usr/bin/env python3
"""Convert canonical / og:url / JSON-LD url + sitemap <loc> from .html to
pretty URLs (e.g. /tools/chatgpt) so crawlers avoid the Cloudflare 307
redirect. Verified all pretty URLs return HTTP 200 beforehand.

Only rewrites the canonical/og:url/url attributes — internal nav links
(.html) are left untouched. Idempotent.

Run: python scripts/patch_canonical_pretty.py
"""
import re
import glob

CANON_RE = re.compile(r'(<link rel="canonical" href="https://myaishome\.com/)([^"]+?)\.html(")')
OG_RE = re.compile(r'(<meta property="og:url" content="https://myaishome\.com/)([^"]+?)\.html(")')
LD_RE = re.compile(r'("url"\s*:\s*"https://myaishome\.com/)([^"]+?)\.html(")')
LOC_RE = re.compile(r'(<loc>https://myaishome\.com/)([^<]+?)\.html(</loc>)')


def fix(s):
    s = CANON_RE.sub(r'\1\2\3', s)
    s = OG_RE.sub(r'\1\2\3', s)
    s = LD_RE.sub(r'\1\2\3', s)
    return s


changed = 0
for fp in glob.glob('**/*.html', recursive=True):
    with open(fp, encoding='utf-8') as f:
        t = f.read()
    t2 = fix(t)
    if t2 != t:
        with open(fp, 'w', encoding='utf-8') as f:
            f.write(t2)
        changed += 1

# sitemap
sp = 'sitemap.xml'
with open(sp, encoding='utf-8') as f:
    s = f.read()
s2 = LOC_RE.sub(r'\1\2\3', s)
if s2 != s:
    with open(sp, 'w', encoding='utf-8') as f:
        f.write(s2)
    print('sitemap.xml -> pretty URLs')

print(f'Done! Rewrote canonical/og:url in {changed} html files to pretty URLs.')
