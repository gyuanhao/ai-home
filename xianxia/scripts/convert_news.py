# -*- coding: utf-8 -*-
"""
同步新闻：解析原站 ai-home/news.html 里的静态新闻条目，
生成游戏用的 xianxia/src/data/news.js（风云榜数据）。

【为什么需要它】
主站新闻是写死在 news.html 里的 <li class="news-item"> 静态 HTML，
没有独立的数据文件。仙侠的"风云榜"之前是手动抄了一份，
所以主站加了新闻、仙侠这边就漏了（曾出现主站22条、仙侠20条）。
这个脚本直接解析 news.html，保证两边永远一致。

每条提取：标题 / 来源链接 / 日期(MM-DD) / 来源媒体
运行：python xianxia/scripts/convert_news.py
"""
import json
import os
import re

# 路径按脚本自身位置推算
HERE = os.path.dirname(os.path.abspath(__file__))        # xianxia/scripts
XIANXIA = os.path.dirname(HERE)                           # xianxia
ROOT = os.path.dirname(XIANXIA)                           # ai-home（仓库根）

SRC = os.path.join(ROOT, 'news.html')
OUT = os.path.join(XIANXIA, 'src', 'data', 'news.js')

with open(SRC, encoding='utf-8') as f:
    html = f.read()

# 每个新闻条目：<li class="news-item"> ... </li>
items = re.findall(r'<li class="news-item">(.*?)</li>', html, re.S)
news = []
for item in items:
    # 标题链接：<a ... href="URL" ... class="news-title" ...>标题</a>
    a = re.search(
        r'<a\s+[^>]*href="([^"]+)"[^>]*class="news-title"[^>]*>(.*?)</a>',
        item, re.S
    )
    if not a:
        continue
    url = a.group(1).strip()
    title = re.sub(r'\s+', ' ', a.group(2)).strip()

    # 日期：<span class="news-date">MM-DD</span>
    date_m = re.search(r'class="news-date"[^>]*>([^<]+)<', item)
    date = date_m.group(1).strip() if date_m else ''

    # 来源：news-meta 里去掉日期 span 后剩下的文字
    source = ''
    meta = re.search(r'class="news-meta"[^>]*>(.*?)</div>', item, re.S)
    if meta:
        tmp = re.sub(r'<span[^>]*class="news-date"[^>]*>.*?</span>', '', meta.group(1), flags=re.S)
        tmp = re.sub(r'<[^>]+>', '', tmp)          # 去掉其余标签
        source = re.sub(r'\s+', ' ', tmp).strip()

    news.append({'title': title, 'url': url, 'date': date, 'source': source})

# 写成游戏的 news.js
header = """/* ============================================================
 * 风云榜（新闻）数据 —— 由 xianxia/scripts/convert_news.py
 * 从原站 ai-home/news.html 自动解析生成（标题/链接/日期/来源）。
 * 主站更新新闻后重跑该脚本即同步，请勿手改本文件。
 * ============================================================ */
window.AIHome = window.AIHome || {};

AIHome.NEWS = """
body = json.dumps(news, ensure_ascii=False, indent=2)
footer = ";\n"

with open(OUT, 'w', encoding='utf-8') as f:
    f.write(header + body + footer)

print('生成新闻 ' + str(len(news)) + ' 条 -> ' + OUT)
