"""
Batch update all HTML files for mobile hamburger menu + bottom tab bar.
Changes:
  1. Add ☰ hamburger button before logo (if missing)
  2. Replace lang button inline style → class="nav-lang"
  3. Insert nav-overlay + nav-drawer after </nav>
  4. Insert mobile-tabs + mobile-nav.js before </body>
"""
import os
import re

BASE = r"C:\Users\gyu\WorkBuddy\2026-06-11-09-27-51\ai-home"

# Overlay + drawer HTML (inserted after </nav>)
def drawer_html(logo_href="index.html"):
    return f'''<!-- 移动端汉堡菜单遮罩+抽屉 -->
<div class="nav-overlay" id="navOverlay" onclick="closeMobileNav()"></div>
<div class="nav-drawer" id="navDrawer">
    <div class="drawer-header">
        <span class="drawer-logo">🏠 AI家AI户</span>
        <button class="drawer-close" onclick="closeMobileNav()" aria-label="关闭菜单">✕</button>
    </div>
    <ul class="drawer-links"></ul>
</div>'''

# Bottom tabs HTML (inserted before </body>)
def tabs_html(prefix=""):
    return f'''<script src="{prefix}js/mobile-nav.js"></script>

<!-- 移动端底部固定Tab栏 -->
<nav class="mobile-tabs" id="mobileTabs">
    <a href="{prefix}index.html" class="mobile-tab active">
        <span class="tab-icon">🏠</span>首页
    </a>
    <a href="{prefix}models.html" class="mobile-tab">
        <span class="tab-icon">📦</span>模型库
    </a>
    <a href="{prefix}compare.html" class="mobile-tab">
        <span class="tab-icon">⚖️</span>对比
    </a>
    <a href="{prefix}skills.html" class="mobile-tab">
        <span class="tab-icon">🧰</span>技能包
    </a>
</nav>
'''

# Lang button replacement
OLD_LANG = '<li style="margin-left:auto;"><button id="langSwitch" onclick="switchLang()" style="background:var(--primary-light);color:var(--primary-dark);border:none;padding:4px 12px;border-radius:50px;cursor:pointer;font-size:13px;font-weight:600;font-family:inherit;">EN</button></li>'
NEW_LANG = '<li style="margin-left:auto;"><button id="langSwitch" onclick="switchLang()" class="nav-lang">EN</button></li>'

# Hamburger button
NAV_TOGGLE = '<button class="nav-toggle" onclick="toggleMobileNav()" aria-label="打开菜单">☰</button>\n        '


def process_file(filepath, prefix=""):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    original = content

    # 1. Add hamburger button if not present
    if 'nav-toggle' not in content:
        # Find <a href="..." class="nav-logo"> and insert before it
        logo_pattern = re.compile(r'(<a href="[^"]*" class="nav-logo">)')
        content = logo_pattern.sub(NAV_TOGGLE + r'\1', content, count=1)

    # 2. Replace lang button style with class
    if OLD_LANG in content:
        content = content.replace(OLD_LANG, NEW_LANG)

    # 3. Insert overlay + drawer after the FIRST </nav>
    nav_end = '</nav>'
    if nav_end in content:
        idx = content.index(nav_end) + len(nav_end)
        # Check if drawer is already present
        if 'nav-overlay' not in content:
            drawer = drawer_html()
            content = content[:idx] + '\n' + drawer + content[idx:]

    # 4. Insert tabs + script before </body> (last occurrence)
    if '</body>' in content and 'mobile-tabs' not in content:
        # Find the last </body>
        body_idx = content.rindex('</body>')
        tabs = tabs_html(prefix)
        content = content[:body_idx] + tabs + '\n' + content[body_idx:]

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False


def main():
    files = []

    # Root-level pages (prefix = "")
    root_pages = [
        "models.html", "compare.html", "compare-custom.html",
        "picker.html", "news.html", "skills.html", "about.html",
        "privacy.html", "404.html",
    ]
    for fn in root_pages:
        fp = os.path.join(BASE, fn)
        if os.path.exists(fp):
            files.append((fp, ""))

    # hero-demo.html — special: no lang button, different nav structure
    hero = os.path.join(BASE, "hero-demo.html")
    if os.path.exists(hero):
        files.append((hero, ""))

    # vs/ directory pages (prefix = "../")
    vs_dir = os.path.join(BASE, "vs")
    vs_pages = [
        "index.html", "deepseek-vs-chatgpt.html", "deepseek-vs-kimi.html",
        "kimi-vs-tongyi.html", "claude-vs-chatgpt.html", "cursor-vs-copilot.html",
    ]
    for fn in vs_pages:
        fp = os.path.join(vs_dir, fn)
        if os.path.exists(fp):
            files.append((fp, "../"))

    print(f"Processing {len(files)} files...")
    updated = []
    skipped = []
    for fp, prefix in files:
        try:
            changed = process_file(fp, prefix)
            if changed:
                updated.append(os.path.basename(fp) if prefix == "" else f"vs/{os.path.basename(fp)}")
            else:
                skipped.append(os.path.basename(fp))
        except Exception as e:
            print(f"  ERROR {os.path.basename(fp)}: {e}")

    print(f"\nUpdated ({len(updated)}):")
    for u in sorted(updated):
        print(f"  ✅ {u}")
    if skipped:
        print(f"\nSkipped (already done) ({len(skipped)}):")
        for s in sorted(skipped):
            print(f"  ⏭️  {s}")


if __name__ == "__main__":
    main()
