# -*- coding: utf-8 -*-
"""给全站左侧/抽屉导航栏(.sidebar-links)插入「工具库」入口（紧跟技能包之后）。
跳过已含工具库 sidebar-link 的页面（tools.html），兼容子目录 ../ 前缀。"""
import os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

ICO = ('<svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" '
       'stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'
       '<path d="M3 7h18v13H3z"/>'
       '<path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>'
       '<path d="M3 12h18"/>'
       '<circle cx="12" cy="14.5" r="1.5"/></svg>')

def new_li(px):
    return ('            <li><a href="%stools.html" class="sidebar-link">%s工具库</a></li>'
            % (px, ICO))

# 匹配「技能包」所在的 sidebar-link <li>（兼容 ../ 前缀、有无 data-i18n）
PAT = re.compile(r'(<li><a href="(\.\./)?skills\.html"[^>]*>.*?技能包</a></li>)', re.S)

def process(fp):
    t = open(fp, encoding='utf-8').read()
    # 已有工具库 sidebar-link 则跳过（tools.html）
    if 'class="sidebar-link' in t and ('tools.html" class="sidebar-link' in t or '../tools.html" class="sidebar-link' in t):
        return False
    # 没有技能包导航则跳过（详情页/其他布局）
    if '技能包' not in t or 'sidebar-link' not in t:
        return False
    def repl(m):
        px = m.group(2) or ''
        return m.group(1) + '\n' + new_li(px)
    new, n = PAT.subn(repl, t)
    if n:
        open(fp, 'w', encoding='utf-8').write(new)
        return True
    return False

cnt = 0
for dp, _, fs in os.walk(ROOT):
    if '/xianxia/' in dp.replace('\\', '/'):
        continue
    for fn in fs:
        if not fn.endswith('.html'):
            continue
        if process(os.path.join(dp, fn)):
            cnt += 1
print('已插入工具库导航的页面数:', cnt)
