import os

ROOT = 'C:/Users/gyu/WorkBuddy/2026-06-11-09-27-51/ai-home'
new = 'src="https://myaishome.com/img/logo.png"'
cnt = 0
for dp, _, fs in os.walk(ROOT):
    for fn in fs:
        if not fn.endswith('.html'):
            continue
        fp = os.path.join(dp, fn).replace('\\', '/')
        if '/xianxia/' in fp:
            continue
        full = os.path.join(dp, fn)
        t = open(full, encoding='utf-8').read()
        n = t.replace('src="/img/logo.png"', new).replace('src="img/logo.png"', new)
        if n != t:
            open(full, 'w', encoding='utf-8').write(n)
            cnt += 1
print('files updated:', cnt)
