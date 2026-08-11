#!/usr/bin/env python3
"""
Add missing 白皮书 (papers) link to all sidebar navigation blocks.
Inserts before 博客 if present; otherwise after 工具库 if present.
Preserves active classes and computes correct relative path prefix.
"""
import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent.parent

PAPERS_SVG = '<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2z"/><path d="M8 7h8"/><path d="M8 11h8"/><path d="M8 15h5"/></svg>'


def rel_prefix(file_path: Path) -> str:
    """Return '../' for subdir files, '' for root-level files."""
    rel = file_path.relative_to(ROOT)
    depth = len(rel.parts) - 1
    return "../" * depth if depth > 0 else ""


def make_papers_li(prefix: str) -> str:
    return f'<li><a href="{prefix}papers.html" class="sidebar-link">{PAPERS_SVG}白皮书</a></li>'


def patch_sidebar_block(block: str, prefix: str) -> str | None:
    """Patch a single sidebar-links block. Return new block or None if no change."""
    # Already has papers? 支持 .html 和 pretty URL /papers
    if re.search(r'href="[^"]*papers(?:\.html)?"', block):
        return None

    new_li = make_papers_li(prefix)

    # Try insert before 博客
    blog_match = re.search(r'(<li><a href="[^"]*blog[^"]*" class="sidebar-link[^"]*">.*?</a></li>)', block)
    if blog_match:
        insert_pos = blog_match.start()
        return block[:insert_pos] + "\n            " + new_li + "\n            " + block[insert_pos:]

    # Fallback: insert after 工具库
    tools_match = re.search(r'(<li><a href="[^"]*tools[^"]*" class="sidebar-link[^"]*">.*?</a></li>)', block)
    if tools_match:
        insert_pos = tools_match.end()
        return block[:insert_pos] + "\n            " + new_li + block[insert_pos:]

    return None


def patch_file(file_path: Path) -> int:
    text = file_path.read_text(encoding="utf-8")
    prefix = rel_prefix(file_path)

    # Find each <ul class="sidebar-links">...</ul> block (non-greedy)
    pattern = re.compile(r'(<ul class="sidebar-links">)(.*?)(</ul>)', re.DOTALL)

    new_blocks = []
    changed = 0
    last_end = 0
    for m in pattern.finditer(text):
        start, end = m.span()
        new_blocks.append(text[last_end:start])
        block = m.group(2)
        patched = patch_sidebar_block(block, prefix)
        if patched:
            new_blocks.append(m.group(1) + patched + m.group(3))
            changed += 1
        else:
            new_blocks.append(m.group(0))
        last_end = end
    new_blocks.append(text[last_end:])

    if changed:
        file_path.write_text("".join(new_blocks), encoding="utf-8")
    return changed


def main():
    files = sorted(ROOT.rglob("*.html"))
    changed_files = []
    for fp in files:
        # Skip files under xianxia to avoid touching the easter-egg subsite
        if "xianxia" in fp.parts:
            continue
        try:
            n = patch_file(fp)
            if n:
                changed_files.append((str(fp.relative_to(ROOT)), n))
        except Exception as e:
            print(f"ERR {fp}: {e}", file=sys.stderr)

    print(f"Patched {len(changed_files)} files:")
    for rel, n in changed_files:
        print(f"  {rel}: {n} sidebar(s)")


if __name__ == "__main__":
    main()
