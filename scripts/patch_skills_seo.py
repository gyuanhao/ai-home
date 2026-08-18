#!/usr/bin/env python3
"""Patch the 296 static skills detail pages (no generator exists) with:
  - 相关技能（same category）internal links
  - 常见问题 FAQ section + FAQPage JSON-LD
Canonical/og:url prettification is handled by patch_canonical_pretty.py.

Run: python scripts/patch_skills_seo.py
"""
import re
import os
import glob
import json

SKILLS_DIR = 'skills'


def esc(s):
    return ('' if s is None else str(s)).replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;')


def extract(text, pat, default=''):
    m = re.search(pat, text, re.S)
    return m.group(1).strip() if m else default


skill_files = sorted(glob.glob(os.path.join(SKILLS_DIR, '*.html')))

# ---- pass 1: build meta (id -> (name, category)) ----
meta = {}
for fp in skill_files:
    with open(fp, encoding='utf-8') as f:
        txt = f.read()
    fid = os.path.splitext(os.path.basename(fp))[0]
    h1 = extract(txt, r'<h1[^>]*>(.*?)</h1>', '')
    name = re.sub(r'<span.*?</span>', '', h1, flags=re.S).strip()
    cat = extract(txt, r'归类于「(.+?)」分类', '')
    meta[fid] = (name, cat)

by_cat = {}
for fid, (n, c) in meta.items():
    by_cat.setdefault(c, []).append(fid)

# ---- pass 2: inject ----
patched = 0
for fp in skill_files:
    with open(fp, encoding='utf-8') as f:
        txt = f.read()
    if '相关技能（' in txt:
        continue  # already patched
    fid = os.path.splitext(os.path.basename(fp))[0]
    name, cat = meta[fid]

    others = [o for o in by_cat.get(cat, []) if o != fid][:6]
    rel_cards = ''.join(
        '<a class="related-card" href="../skills/' + esc(o) + '.html">'
        '<span class="rc-name">' + esc(meta[o][0]) + '</span>'
        '<span class="rc-cat">' + esc(meta[o][1]) + '</span></a>'
        for o in others)
    related_block = ''
    if rel_cards:
        related_block = ('<section style="margin-top:28px;">'
                         '<h2 class="sd-section">相关技能（' + esc(cat) + '）</h2>'
                         '<div class="related-grid">' + rel_cards + '</div></section>')

    faq = [
        (name + ' 是做什么的？',
         name + ' 是面向「' + cat + '」场景的 AI 技能，安装后让 AI 在该领域具备专项能力，适合用自然语言快速完成相关任务。'),
        (name + ' 怎么用？',
         '在支持 Skill 的 AI 客户端（如 Claude、CodeBuddy）中安装后，用自然语言描述需求即可调用，AI 会自动执行并交付结果。'),
        (name + ' 免费吗？',
         '多为社区技能，通常可免费安装使用；具体以提供方与所用客户端为准。'),
        ('哪里能找到 ' + name + ' 的官方来源？',
         '本页「来源信息」区块已列出提供方与来源链接，建议以官方最新信息为准。'),
    ]
    faq_html = ('<section style="margin-top:28px;"><h2 class="sd-section">常见问题</h2>'
                '<div class="faq-list">'
                + ''.join('<details class="faq"><summary>Q：' + esc(q) + '</summary><p>A：' + esc(a) + '</p></details>' for q, a in faq)
                + '</div></section>')

    inject = related_block + '\n' + faq_html + '\n'
    txt2, n = re.subn(r'(<a class="sd-back"[^>]*>)', inject + r'\1', txt, count=1)
    if n == 0:
        continue  # no injection point found, skip

    faq_ld = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}}
            for q, a in faq
        ]
    }
    ld_script = '<script type="application/ld+json">' + json.dumps(faq_ld, ensure_ascii=False) + '</script>'
    txt2 = txt2.replace('</body>', ld_script + '\n</body>', 1)

    with open(fp, 'w', encoding='utf-8') as f:
        f.write(txt2)
    patched += 1

print(f'Done! Patched {patched} skills detail pages with FAQ + related links.')
