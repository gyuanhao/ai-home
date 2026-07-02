"""Fix all remaining emoji in HTML files after the main replacement script."""
import re

def SVG(n, s=20, extra_class=''):
    cls = f'icon-{n} {extra_class}'.strip()
    return f'<svg width="{s}" height="{s}" class="{cls}"><use href="img/icons.svg#icon-{n}"/></svg>'

# ============================================================
# models.html — filter buttons + toolsNote
# ============================================================
FIXES_MODELS = [
    ('🗣 语言模型', SVG('language') + ' 语言模型'),
    ('🤖 Agent平台', SVG('agent') + ' Agent平台'),
    ('🎨 图像模型', SVG('image') + ' 图像模型'),
    ('🎬 视频模型', SVG('video') + ' 视频模型'),
    ('💻 代码模型', SVG('code') + ' 代码模型'),
    ('🛠 AI辅助工具', SVG('tools') + ' AI辅助工具'),
]

# ============================================================
# compare-custom.html
# ============================================================
FIXES_COMPARE_CUSTOM = [
    ('🔗 复制对比链接', SVG('link') + ' 复制对比链接'),
    ('✅ 链接已复制，可直接分享', SVG('check', 16) + ' 链接已复制，可直接分享'),
]

# ============================================================
# skills.html
# ============================================================
FIXES_SKILLS = [
    ('<p style="font-size:48px;margin-bottom:16px;">🔍</p>',
     f'<p style="font-size:48px;margin-bottom:16px;">{SVG("search", 48)}</p>'),
]

# ============================================================
# picker.html
# ============================================================
FIXES_PICKER = [
    ('<div style="font-size:48px;color:var(--text-secondary);margin-bottom:16px;">⏳</div>',
     f'<div style="font-size:48px;color:var(--text-secondary);margin-bottom:16px;">{SVG("target", 48)}</div>'),
]

# ============================================================
# hero-demo.html — same patterns as index.html
# ============================================================
FIXES_HERO = [
    # nav-logo
    ('🏠 AI家AI户', SVG('logo', 24) + ' AI家AI户'),
    # scenario label
    ('<div class="scenario-label">👇 你想用AI做什么？</div>',
     f'<div class="scenario-label">{SVG("arrow-down", 18, "icon-primary")} 你想用AI做什么？</div>'),
    # category heading
    ('<h2>🔍 按品类找工具</h2>',
     f'<h2 style="display:flex;align-items:center;gap:8px;">{SVG("search", 24, "icon-primary")}按品类找工具</h2>'),
    # recommendations JS - titles
    ("title: '✍️ 写作推荐'", f"title: '{SVG('write', 18)} 写作推荐'"),
    ("title: '💻 编程推荐'", f"title: '{SVG('code', 18)} 编程推荐'"),
    ("title: '🎨 画图推荐'", f"title: '{SVG('draw', 18)} 画图推荐'"),
    ("title: '🎬 视频推荐'", f"title: '{SVG('video', 18)} 视频推荐'"),
    ("title: '🤖 通用推荐'", f"title: '{SVG('agent', 18)} 通用推荐'"),
    # recommendations JS - icons
    ("icon: '📝'", f"icon: '{SVG('kimi', 18)}'"),
    ("icon: '🧠'", f"icon: '{SVG('claude', 18)}'"),
    ("icon: '🤖'", f"icon: '{SVG('agent', 18)}'"),
    ("icon: '💻'", f"icon: '{SVG('code', 18)}'"),
    ("icon: '⌨️'", f"icon: '{SVG('cursor', 18)}'"),
    ("icon: '🐋'", f"icon: '{SVG('deepseek', 18)}'"),
    ("icon: '🎨'", f"icon: '{SVG('draw', 18)}'"),
    ("icon: '🖼️'", f"icon: '{SVG('image', 18)}'"),
    ("icon: '🎬'", f"icon: '{SVG('video', 18)}'"),
    ("icon: '🎥'", f"icon: '{SVG('video', 18)}'"),
    ("icon: '🌟'", f"icon: '{SVG('video', 18)}'"),
    ("icon: '🐚'", f"icon: '{SVG('video', 18)}'"),
    ("icon: '☁️'", f"icon: '{SVG('tongyi', 18)}'"),
    ("icon: '🫘'", f"icon: '{SVG('doubao', 18)}'"),
]


def fix_file(filename, replacements):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    count = 0
    for old, new in replacements:
        if old in content:
            content = content.replace(old, new)
            count += 1
        else:
            print(f'  WARNING: Not found: {old[:40]}...')

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f'  Done: {count} replacements')


# ---- main ----
fix_file('models.html', FIXES_MODELS)
fix_file('compare-custom.html', FIXES_COMPARE_CUSTOM)
fix_file('skills.html', FIXES_SKILLS)
fix_file('picker.html', FIXES_PICKER)
fix_file('hero-demo.html', FIXES_HERO)
print('\nAll remaining emoji fixed.')
