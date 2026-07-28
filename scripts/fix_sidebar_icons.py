#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""为桌面端 sidebar-link 自动补上缺失的 inline SVG 图标。"""
import re
from pathlib import Path

ICONS = {
    "home": '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.6V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.6"/><path d="M9.5 20v-5.5h5V20"/></svg>',
    "models": '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 21 7.5 12 12 3 7.5z"/><path d="M3 12l9 4.5 9-4.5"/><path d="M3 16.5 12 21l9-4.5"/></svg>',
    "compare": '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20v-9"/><path d="M12 20V5"/><path d="M20 20v-6"/></svg>',
    "custom": '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"/><path d="M8.5 12.5 11 15l4.5-4.8"/></svg>',
    "vs": '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 8h10l-3-3"/><path d="M17 16H7l3 3"/></svg>',
    "picker": '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h8"/><path d="M16 8h4"/><circle cx="14" cy="8" r="2"/><path d="M4 16h4"/><path d="M12 16h8"/><circle cx="10" cy="16" r="2"/></svg>',
    "news": '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13a1 1 0 0 0 1 1 1 1 0 0 0 1-1V8"/><path d="M4 5v13a1 1 0 0 0 1 1h11"/><path d="M8 8h5"/><path d="M8 11.5h5"/></svg>',
    "skills": '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/><circle cx="12" cy="14.5" r="1.5"/></svg>',
    "blog": '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v4h4"/><path d="M9 12h6"/><path d="M9 15.5h6"/></svg>',
    "about": '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/></svg>',
}


def href_to_icon_key(href: str, file_path: Path, root: Path) -> str:
    h = href.strip().lower()
    # 子目录下的 index.html 应对应当前栏目（如 vs/index.html 里的 index.html 是热门对比）
    is_subdir_index = (
        file_path.name.lower() == "index.html"
        and file_path.parent != root
        and h in ("index.html", "./index.html")
    )
    if is_subdir_index:
        return file_path.parent.name.lower()
    if h.endswith("index.html"):
        return "home"
    if "compare-custom" in h or h.endswith("compare-custom.html"):
        return "custom"
    if h.endswith("compare.html"):
        return "compare"
    if "/vs/" in h or h.endswith("/vs/") or h == "vs/":
        return "vs"
    if h.endswith("picker.html"):
        return "picker"
    if h.endswith("news.html"):
        return "news"
    if h.endswith("skills.html"):
        return "skills"
    if "/blog/" in h or h.endswith("/blog/") or h == "blog/":
        return "blog"
    if h.endswith("models.html"):
        return "models"
    if h.endswith("about.html"):
        return "about"
    return ""


ANCHOR_RE = re.compile(
    r'<a\s+href="([^"]+)"\s+class="(sidebar-link(?:\s+[^"]*)?)"\s*>(.*?)</a>',
    re.S | re.I,
)


def process_file(path: Path, root: Path) -> int:
    text = path.read_text(encoding="utf-8")
    changed = 0

    def repl(m: re.Match) -> str:
        nonlocal changed
        href = m.group(1)
        cls = m.group(2)
        inner = m.group(3)
        stripped = inner.lstrip()
        if stripped.lower().startswith("<svg"):
            return m.group(0)
        key = href_to_icon_key(href, path, root)
        if not key:
            return m.group(0)
        icon = ICONS[key]
        changed += 1
        # 保留原有的首尾空白，只在文本前插入图标
        leading_ws = inner[: len(inner) - len(stripped)]
        new_inner = leading_ws + icon + stripped
        return f'<a href="{href}" class="{cls}">{new_inner}</a>'

    new_text = ANCHOR_RE.sub(repl, text)
    if changed:
        path.write_text(new_text, encoding="utf-8")
    return changed


def main():
    root = Path(__file__).resolve().parent.parent
    targets = list(root.glob("*.html"))
    targets += list((root / "vs").glob("*.html"))
    targets += list((root / "blog").glob("*.html"))
    total = 0
    for p in targets:
        n = process_file(p, root)
        if n:
            print(f"{p.relative_to(root)}: {n} icon(s) added")
            total += n
    print(f"\nTotal: {total} icon(s) added across {len(targets)} files")


if __name__ == "__main__":
    main()
