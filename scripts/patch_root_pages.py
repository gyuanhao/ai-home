#!/usr/bin/env python3
"""Patch root-level static pages for OG image and footer consistency."""
import os
import re

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OG_IMAGE = 'https://myaishome.com/img/og-image.png'
TARGETS = [
    'models.html', 'compare.html', 'compare-custom.html', 'picker.html',
    'news.html', 'skills.html', 'contact.html', 'privacy.html', 'terms.html', 'disclaimer.html'
]

SOCIAL_FOOTER = (
    '    <p style="margin-top:6px;font-size:13px;color:var(--text-secondary);">关注我们：\n'
    '        <a href="https://www.xiaohongshu.com/search_result?keyword=%E6%8A%B1%E8%B5%B0%E8%A5%BF%E7%93%9C" target="_blank" rel="noopener me">小红书 @抱走西瓜</a>\n'
    '    </p>\n'
    '    <p style="margin-top:6px;font-size:13px;color:var(--text-secondary);">站点最后更新：<time datetime="2026-08-11">2026年8月11日</time></p>\n'
)


def patch_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()

    original = html

    # Add og:image after og:locale if not present
    if 'og:image' not in html:
        html = re.sub(
            r'(<meta property="og:locale" content="zh_CN">)',
            r'\1\n    <meta property="og:image" content="' + OG_IMAGE + '">\n    <meta property="og:image:width" content="1200">\n    <meta property="og:image:height" content="630">\n    <meta property="og:image:alt" content="AI家AI户 — AI 模型与工具选型导航站">',
            html
        )

    # Add twitter:image after twitter:description if not present
    if 'name="twitter:image"' not in html and 'name="twitter:card"' in html:
        html = re.sub(
            r'(<meta name="twitter:description" content="[^"]*">)',
            r'\1\n    <meta name="twitter:image" content="' + OG_IMAGE + '">',
            html
        )

    # Enhance footer if it's the simple version
    if '<footer class="footer">' in html and '站点最后更新' not in html:
        # Add social line before closing footer tag if footer is present
        html = re.sub(
            r'(<footer class="footer">.*?)(</footer>)',
            lambda m: m.group(1) + SOCIAL_FOOTER + m.group(2),
            html,
            count=1,
            flags=re.DOTALL
        )

    if html != original:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(html)
        return True
    return False


def main():
    changed = 0
    for fname in TARGETS:
        path = os.path.join(ROOT_DIR, fname)
        if os.path.exists(path) and patch_file(path):
            changed += 1
            print(f'Patched {fname}')
    print(f'\nDone! Patched {changed} root pages.')


if __name__ == '__main__':
    main()
