import os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

svg_re = re.compile(r'<svg\b[^>]*class="logo-icon"[^>]*>.*?</svg>', re.DOTALL)
emoji_str = '🏠 AI家AI户'
img_tag = '<img src="/img/logo.png" alt="AI家AI户" class="logo-icon">'

count_svg = 0
count_emoji = 0
changed_files = []

for dirpath, _, filenames in os.walk(ROOT):
    for fn in filenames:
        if not fn.endswith('.html'):
            continue
        # skip xianxia mirror (separate project)
        if '/xianxia/' in os.path.join(dirpath, fn).replace('\\', '/'):
            continue
        fp = os.path.join(dirpath, fn)
        with open(fp, 'r', encoding='utf-8') as f:
            txt = f.read()
        new = txt
        new, n_svg = svg_re.subn(img_tag, new)
        if n_svg:
            count_svg += n_svg
        if emoji_str in new:
            new = new.replace(emoji_str, img_tag + 'AI家AI户')
            count_emoji += 1
        if new != txt:
            with open(fp, 'w', encoding='utf-8') as f:
                f.write(new)
            changed_files.append(fp)

print('SVG replaced:', count_svg)
print('Emoji replaced:', count_emoji)
print('Files changed:', len(changed_files))
for f in changed_files[:50]:
    print(' -', os.path.relpath(f, ROOT))
