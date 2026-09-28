#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""patch_skill_noindex.py — 技能详情页精品/长尾分层（幂等）。

背景：296 个 skills/<name>.html 的内容主体是按分类套用的模板文案库（gen_skill_pages.js
的 CAT_BANK），同分类页面文字高度雷同 → 被 Google 判为 scaled / template content，
是 AdSense「低价值内容」的重要风险面。

策略与工具页一致：只保留少数精品（大厂官方 + 通用高频，见 featured_skills.json）
参与索引，其余长尾页加 <meta name="robots" content="noindex"> 让审核忽略。

用法：python scripts/patch_skill_noindex.py
"""
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SKILLS_DIR = os.path.join(ROOT, 'skills')
FEATURED_PATH = os.path.join(ROOT, 'scripts', 'featured_skills.json')

ROBOTS_TAG = '<meta name="robots" content="noindex">'
CANON_RE = re.compile(r'(<link rel="canonical" href="[^"]*">)')


def load_featured():
    try:
        with open(FEATURED_PATH, encoding='utf-8') as f:
            return set(json.load(f))
    except Exception:
        return set()


def main():
    featured = load_featured()
    files = sorted(f for f in os.listdir(SKILLS_DIR) if f.endswith('.html'))
    added = removed = unchanged = 0

    for fn in files:
        slug = fn[:-5]
        path = os.path.join(SKILLS_DIR, fn)
        with open(path, encoding='utf-8') as f:
            html = f.read()

        has_tag = ROBOTS_TAG in html
        want_tag = slug not in featured

        if want_tag and not has_tag:
            m = CANON_RE.search(html)
            if not m:
                print(f'[WARN] {fn}: 未找到 canonical，跳过')
                continue
            html = html.replace(m.group(1), m.group(1) + '\n    ' + ROBOTS_TAG, 1)
            with open(path, 'w', encoding='utf-8') as f:
                f.write(html)
            added += 1
        elif not want_tag and has_tag:
            html = re.sub(r'\n\s*' + re.escape(ROBOTS_TAG), '', html, count=1)
            with open(path, 'w', encoding='utf-8') as f:
                f.write(html)
            removed += 1
        else:
            unchanged += 1

    total = len(files)
    print(f'技能页 {total} 个：精品 {len(featured)} / 长尾 {total - len(featured)}')
    print(f'  新增 noindex: {added}，移除 noindex: {removed}，无变化: {unchanged}')

    # 校验
    idx = sum(1 for fn in files if ROBOTS_TAG not in open(os.path.join(SKILLS_DIR, fn), encoding='utf-8').read())
    print(f'  校验 → 参与索引(无 noindex): {idx} 个；已 noindex: {total - idx} 个')


if __name__ == '__main__':
    main()
