#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
upgrade_legacy_pages.py — 将旧版单页（蓝紫主题、无动效）统一换肤到
「暖纸白反SaaS」新视觉语言 + 滚动进场动效。

对目标页做三件事（幂等，已注入则跳过该步骤）：
  1) 侧栏 SVG 图标 stroke="#3B5BDB"(蓝) → stroke="#E8542C"(柿子橙)
  2) 在 css/style.css 之后注入 design-system.css + legacy-upgrade.css
  3) 注入 js/reveal.js + 初始化脚本（给 .main-content 顶层块加 .reveal 并 initReveal）
     —— papers.html 已有自己的 reveal 逻辑，仅做 1)+2) 换肤，跳过 3)

目标页（由 css/style.css 驱动的内容页，支持子目录）：
  about / skills / news / compare / compare-custom / contact /
  disclaimer / privacy / terms / picker / 404 / hero-demo / papers /
  blog/index / vs/index

排除：index|tools|models.html(React SPA)、*_legacy.html(备份)、
      showcase*/、go.html、social-card-*/、node_modules/。
"""
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

PAGES = [
    "about.html", "skills.html", "news.html", "compare.html",
    "compare-custom.html", "contact.html", "disclaimer.html",
    "privacy.html", "terms.html", "picker.html", "404.html",
    "hero-demo.html", "papers.html",
]

# 自动发现 blog / vs 目录下所有旧版内容页（排除已有 React/新样式的页面）
for subdir in ("blog", "vs"):
    sub_path = os.path.join(ROOT, subdir)
    if os.path.isdir(sub_path):
        for f in sorted(os.listdir(sub_path)):
            if f.endswith(".html"):
                PAGES.append(f"{subdir}/{f}")

# papers 已有独立 reveal 逻辑，只换肤不重复注入动效脚本
NO_MOTION = {"papers.html"}

STYLE_RE = re.compile(r'<link\s+rel="stylesheet"\s+href="([^"]*css/style\.css)">')


def rel_prefix(page):
    """返回从页面所在目录指向站点根的相对前缀，例如 blog/index.html -> ../"""
    depth = page.count('/')
    return '../' * depth


def upgrade(page):
    path = os.path.join(ROOT, page)
    if not os.path.exists(path):
        return f"[SKIP] {page}: 文件不存在"
    with open(path, "r", encoding="utf-8") as f:
        html = f.read()

    actions = []
    prefix = rel_prefix(page)

    # 1) 侧栏蓝色 stroke → 柿子橙
    n_stroke = html.count('stroke="#3B5BDB"')
    if n_stroke:
        html = html.replace('stroke="#3B5BDB"', 'stroke="#E8542C"')
        actions.append(f"替换侧栏蓝图标 {n_stroke} 处")

    # 2) 注入 design-system + legacy-upgrade（幂等）
    if "legacy-upgrade.css" not in html:
        m = STYLE_RE.search(html)
        if m:
            style_link = m.group(0)
            inject_links = (
                f'{style_link}\n'
                f'    <link rel="stylesheet" href="{prefix}css/design-system.css">\n'
                f'    <link rel="stylesheet" href="{prefix}css/legacy-upgrade.css">'
            )
            html = html.replace(style_link, inject_links, 1)
            actions.append("注入 design-system.css + legacy-upgrade.css")
        else:
            return f"[WARN] {page}: 未找到 css/style.css 链接，跳过链接注入"
    else:
        actions.append("链接已注入(跳过)")

    # 3) 注入 reveal 动效（papers 除外，已自有逻辑）
    if page not in NO_MOTION and "js/reveal.js" not in html:
        if "</body>" in html:
            snippet = f"""    <script src="{prefix}js/reveal.js"></script>
    <script>
    (function () {{
      var m = document.querySelector('.main-content');
      if (m) {{
        var sel = ':scope > .container > *, :scope > section, :scope > .about-section, '
                + ':scope > .page-hero, :scope > .hero, :scope > .related, '
                + ':scope > .tool-grid, :scope > .model-grid, :scope > .compare-wrap, '
                + ':scope > .compare-panel, :scope > .blog-list';
        var blocks = m.querySelectorAll(sel);
        if (!blocks.length) {{
          blocks = Array.prototype.filter.call(m.children, function (c) {{
            return !/footer|nav|script|mobile-tabs|sidebar|object|svg/i.test(c.tagName + ' ' + (c.className || ''));
          }});
        }}
        Array.prototype.forEach.call(blocks, function (b) {{
          if (b && !b.classList.contains('reveal')) b.classList.add('reveal');
        }});
      }}
      if (window.initReveal) window.initReveal(document);
    }})();
    </script>
"""
            html = html.replace("</body>", snippet + "</body>", 1)
            actions.append("注入 js/reveal.js + 滚动进场初始化")
        else:
            return f"[WARN] {page}: 未找到 </body>"
    elif page not in NO_MOTION:
        actions.append("reveal 已注入(跳过)")
    else:
        actions.append("papers: 保留自有 reveal 逻辑")

    with open(path, "w", encoding="utf-8") as f:
        f.write(html)
    return f"[OK]   {page}: " + "; ".join(actions)


def main():
    print(f"ROOT = {ROOT}\n")
    for p in PAGES:
        print(upgrade(p))


if __name__ == "__main__":
    main()
