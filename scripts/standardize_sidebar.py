#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
standardize_sidebar.py — 把全站所有 <ul class="sidebar-links">（桌面侧栏 + 移动抽屉各一份）
统一替换为同一套 13 项导航，消除「首页/模型库/工具库 顶部导航」与「博客/白皮书 侧边导航」不一致，
并补齐缺失模块（工具库 / 自定义对比 / 横向对比 / AI选型器 / 新闻 / 展示馆 等）。

- 按页面深度自动加相对前缀（根页面 ""，子目录 "../"）。
- 按页面位置推导 active 高亮（精确 basename 优先，其次按目录归属）。
- 幂等：重复执行结果一致。

用法：python scripts/standardize_sidebar.py
"""
import os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# 统一导航项：(链接后缀, 内联 SVG+标签文案)
# SVG 沿用站点既有柿子橙图标（stroke="#E8542C"），与 news.html 一致。
ITEMS = [
    ("index.html",    '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#E8542C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.6V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.6"/><path d="M9.5 20v-5.5h5V20"/></svg>首页'),
    ("models.html",   '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#E8542C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 21 7.5 12 12 3 7.5z"/><path d="M3 12l9 4.5 9-4.5"/><path d="M3 16.5 12 21l9-4.5"/></svg>模型库'),
    ("tools.html",    '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#E8542C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>工具库'),
    ("compare.html",  '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#E8542C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20v-9"/><path d="M12 20V5"/><path d="M20 20v-6"/></svg>横向对比'),
    ("compare-custom.html", '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#E8542C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"/><path d="M8.5 12.5 11 15l4.5-4.8"/></svg>自定义对比'),
    ("vs/",           '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#E8542C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 8h10l-3-3"/><path d="M17 16H7l3 3"/></svg>热门对比'),
    ("picker.html",   '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#E8542C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h8"/><path d="M16 8h4"/><circle cx="14" cy="8" r="2"/><path d="M4 16h4"/><path d="M12 16h8"/><circle cx="10" cy="16" r="2"/></svg>AI选型器'),
    ("news.html",     '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#E8542C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13a1 1 0 0 0 1 1 1 1 0 0 0 1-1V8"/><path d="M4 5v13a1 1 0 0 0 1 1h11"/><path d="M8 8h5"/><path d="M8 11.5h5"/></svg>新闻'),
    ("skills.html",   '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#E8542C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/><circle cx="12" cy="14.5" r="1.5"/></svg>技能包'),
    ("papers.html",   '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#E8542C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2z"/><path d="M8 7h8"/><path d="M8 11h8"/><path d="M8 15h5"/></svg>白皮书'),
    ("blog/",         '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#E8542C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v4h4"/><path d="M9 12h6"/><path d="M9 15.5h6"/></svg>博客'),
    ("about.html",    '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#E8542C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/></svg>关于'),
    ("showcase/",     '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#E8542C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>展示馆'),
]

UL_RE = re.compile(r'<ul class="sidebar-links">.*?</ul>', re.S)
LINK_SUFFIXES = [it[0] for it in ITEMS]


def build_ul(prefix, active_suffix):
    lis = []
    for suffix, svg_label in ITEMS:
        cls = "sidebar-link" + (" active" if suffix == active_suffix else "")
        lis.append(f'            <li><a href="{prefix}{suffix}" class="{cls}">{svg_label}</a></li>')
    return '<ul class="sidebar-links">\n' + "\n".join(lis) + "\n        </ul>"


def active_for(rel):
    base = os.path.basename(rel)
    section = rel.split('/')[0] if '/' in rel else ''
    if base == 'index.html' and section in ('blog', 'vs'):
        return section + '/'
    if base in LINK_SUFFIXES:
        return base
    if section == 'tools':
        return 'tools.html'
    if section == 'skills':
        return 'skills.html'
    if section == 'blog':
        return 'blog/'
    if section == 'vs':
        return 'vs/'
    return None


def process(page):
    path = os.path.join(ROOT, page)
    if not os.path.exists(path):
        return f"[SKIP] {page}: 不存在"
    with open(path, encoding='utf-8') as f:
        html = f.read()
    if 'class="sidebar-links"' not in html:
        return None
    depth = page.count('/')
    prefix = '../' * depth
    active = active_for(page)
    new_ul = build_ul(prefix, active)
    n = len(UL_RE.findall(html))
    html2 = UL_RE.sub(new_ul, html)
    if html2 == html:
        return f"[NOCH] {page}: 已是规范侧栏"
    with open(path, 'w', encoding='utf-8') as f:
        f.write(html2)
    return f"[OK]   {page}: 替换 {n} 个 sidebar-links（active={active or '无'}）"


def main():
    # 根目录内容页
    root_pages = [
        "about.html", "skills.html", "news.html", "compare.html",
        "compare-custom.html", "contact.html", "disclaimer.html",
        "privacy.html", "terms.html", "picker.html", "404.html",
        "hero-demo.html", "papers.html",
    ]
    pages = [p for p in root_pages]
    # 说明：tools/、skills/ 详情页（700+）属于生成器产物，侧栏仍用旧蓝图标 + 精简 6 项，
    # 留待更新各自生成器模板后随下次 regenerate 统一，不在本次聚焦改动范围内。
    for sub in ("blog", "vs"):
        sp = os.path.join(ROOT, sub)
        if os.path.isdir(sp):
            for f in sorted(os.listdir(sp)):
                if f.endswith(".html"):
                    pages.append(f"{sub}/{f}")
    print(f"ROOT = {ROOT}\n")
    changed = 0
    for p in pages:
        r = process(p)
        if r:
            print(r)
            if r.startswith("[OK]"):
                changed += 1
    print(f"\n完成：{changed} 个页面侧栏已规范化。")


if __name__ == "__main__":
    main()
