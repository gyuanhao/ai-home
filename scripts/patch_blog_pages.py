#!/usr/bin/env python3
"""Patch all blog pages for GEO/SEO improvements.

Adds og:image, twitter:image, wraps publish date in <time>, and clarifies author.
"""
import os
import re

BLOG_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'blog')
OG_IMAGE = 'https://myaishome.com/img/og-image.png'

def patch_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()

    original = html

    # Add og:image after og:locale if not present
    if 'og:image' not in html:
        html = re.sub(
            r'(<meta property="og:locale" content="zh_CN">)',
            r'\1\n    <meta property="og:image" content="' + OG_IMAGE + '">\n    <meta property="og:image:width" content="1200">\n    <meta property="og:image:height" content="630">\n    <meta property="og:image:alt" content="AI家AI户博客">',
            html
        )

    # Add twitter:image after twitter:description if not present
    if 'twitter:image' not in html:
        html = re.sub(
            r'(<meta name="twitter:description" content="[^"]*">)',
            r'\1\n    <meta name="twitter:image" content="' + OG_IMAGE + '">',
            html
        )

    # Wrap publish date in <time>
    # Pattern: 发布于 2026年7月17日
    html = re.sub(
        r'发布于 (\d{4})年(\d{1,2})月(\d{1,2})日',
        lambda m: f'发布于 <time datetime="{m.group(1)}-{int(m.group(2)):02d}-{int(m.group(3)):02d}">{m.group(1)}年{m.group(2)}月{m.group(3)}日</time>',
        html
    )

    # Clarify author
    html = html.replace('作者：AI家AI户', '作者：gyuanhao（抱走西瓜）/ AI家AI户')

    # Add a core summary section right after the meta line if not present
    if 'class="article-summary"' not in html and '<p style="color:var(--text-secondary); font-size:14px; margin-bottom:24px;">' in html:
        # Find the meta paragraph and inject a summary after it
        # We can't auto-generate a real summary, so add a generic but useful one
        meta_pattern = r'(<p style="color:var\(--text-secondary\); font-size:14px; margin-bottom:24px;">.*?</p>)'
        match = re.search(meta_pattern, html, re.DOTALL)
        if match and 'data-source' not in html:
            insert = (
                '\n    <p style="font-size:15px;line-height:1.8;background:var(--surface);padding:14px 16px;border-radius:10px;border-left:4px solid var(--primary);margin-bottom:24px;">'
                '<strong>阅读提示：</strong>本文由 AI家AI户（抱走西瓜）原创整理，所有价格与功能数据均来自官方公开资料，最后更新以文中标注日期为准。使用前建议再次核实官网信息。'
                '</p>'
            )
            # Insert after first meta paragraph
            pos = match.end()
            html = html[:pos] + insert + html[pos:]

    if html != original:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(html)
        return True
    return False


def main():
    changed = 0
    for fname in os.listdir(BLOG_DIR):
        if fname.endswith('.html') and fname != 'index.html':
            path = os.path.join(BLOG_DIR, fname)
            if patch_file(path):
                changed += 1
                print(f'Patched {fname}')
    print(f'\nDone! Patched {changed} blog pages.')


if __name__ == '__main__':
    main()
