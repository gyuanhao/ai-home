#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
把博客正文里提到的 AI 工具名，自动超链到对应工具详情页（../tools/<id>.html）。

安全约束：
- 只在「标签之外的可见正文」里替换，不碰 <script>/<style>/<head>/<title> 内部
- 不破坏已有的 <a> 链接（已有链接范围内的文本跳过）
- 每篇每个工具名只链第一次出现（避免刷屏）
- 幂等：已链过的不会重复处理
- 不改变任何原有标签/格式，仅插入 <a> 标签
"""
import json, re, sys, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TOOLS_JSON = os.path.join(ROOT, 'scripts', 'tools.json')
BLOG_DIR = os.path.join(ROOT, 'blog')

# 局部写法 -> 工具 id（库里只有完整名，博客常用简写，这里补一层）
SYNONYMS = {
    '混元': 'hunyuan-api',
    'MiniMax': 'minimax-chat',
    '海螺AI': 'minimax-chat',
    '海螺': 'minimax-chat',
    '阶跃星辰': 'step',
    '阶跃': 'step',
    '百川智能': 'baichuan',
    '百川': 'baichuan',
    'Copilot': 'copilot-ms',
}

def load_map():
    d = json.load(open(TOOLS_JSON, encoding='utf-8'))
    tools = d if isinstance(d, list) else d.get('tools', [])
    m = {}  # lower(variant) -> slug
    for t in tools:
        slug = t.get('id')
        if not slug:
            continue
        cands = [t.get('name'), t.get('nameEn')]
        al = t.get('aliases')
        if isinstance(al, list):
            cands += al
        elif isinstance(al, str):
            cands.append(al)
        for c in cands:
            if not c or not str(c).strip():
                continue
            c = str(c).strip()
            if len(c) < 3:
                continue
            m[c.lower()] = slug
    for k, v in SYNONYMS.items():
        m[k.lower()] = v
    return m

def forbidden_ranges(html):
    """返回所有禁止替换的区间 (start, end)：标签、<a>..</a>、script/style/head/title。"""
    ranges = []
    for m in re.finditer(r'<[^>]+>', html):
        ranges.append((m.start(), m.end()))
    for tag in (r'a', r'script', r'style', r'head', r'title'):
        for m in re.finditer(r'<%s\b[^>]*>.*?</%s>' % (tag, tag), html, re.DOTALL | re.IGNORECASE):
            ranges.append((m.start(), m.end()))
    ranges.sort()
    return ranges

def in_forbidden(pos, ranges):
    for a, b in ranges:
        if a <= pos < b:
            return True
    return False

def build_pattern(variants):
    # 长名优先，避免短名先匹配吃掉长名
    variants = sorted(set(variants), key=lambda x: -len(x))
    parts = []
    for v in variants:
        esc = re.escape(v)
        # 边界：前后不能是 字母/数字/下划线/汉字
        parts.append(r'(?<![\w\u4e00-\u9fff])' + esc + r'(?![\w\u4e00-\u9fff])')
    return re.compile('|'.join(parts), re.IGNORECASE)

def process_file(path, pattern, vmap):
    html = open(path, encoding='utf-8').read()
    ranges = forbidden_ranges(html)
    linked = set()
    # 预编译：每个 variant 的小写 -> slug
    def repl(m):
        s = m.start()
        if in_forbidden(s, ranges):
            return m.group(0)
        key = m.group(0).lower()
        slug = vmap.get(key)
        if not slug:
            return m.group(0)
        if slug in linked:
            return m.group(0)
        linked.add(slug)
        return '<a href="../tools/%s.html">%s</a>' % (slug, m.group(0))
    new_html, n = pattern.subn(repl, html)
    return new_html, n, len(linked)

def main():
    only = sys.argv[1] if len(sys.argv) > 1 else None
    vmap = load_map()
    variants = list(vmap.keys())
    pattern = build_pattern(variants)
    files = []
    for fn in sorted(os.listdir(BLOG_DIR)):
        if not fn.endswith('.html'):
            continue
        if fn == 'index.html':
            continue  # 枢纽页单独处理
        if only and fn != only:
            continue
        files.append(fn)
    total = 0
    changed = []
    for fn in files:
        p = os.path.join(BLOG_DIR, fn)
        new_html, n, distinct = process_file(p, pattern, vmap)
        if n:
            open(p, 'w', encoding='utf-8').write(new_html)
            total += n
            changed.append((fn, n, distinct))
            print('  + %-42s links=%2d distinct=%d' % (fn, n, distinct))
    print('Done. files changed=%d, total links inserted=%d' % (len(changed), total))

if __name__ == '__main__':
    main()
