# -*- coding: utf-8 -*-
"""
同步新闻：解析原站 ai-home/js/news-data.js 里的 window.AIHomeNews 数组，
生成游戏用的 xianxia/src/data/news.js（风云榜数据）。

【为什么需要它】
新闻数据已改为数据驱动：js/news-data.js 是一个按日期分组的数组
（每个元素 { date, display, weekday, items:[ {title,url,summary,source} ] }）。
仙侠的"风云榜"之前是手动抄了一份，主站加了新闻仙侠就漏了，
所以这个脚本直接从数据源解析，保证两边永远一致。

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

SRC = os.path.join(ROOT, 'js', 'news-data.js')
OUT = os.path.join(XIANXIA, 'src', 'data', 'news.js')

with open(SRC, encoding='utf-8') as f:
    js = f.read()

# 提取 window.AIHomeNews = [ ... ]; 中的数组部分
m = re.search(r'window\.AIHomeNews\s*=\s*(\[.*\])\s*;', js, re.S)
if not m:
    raise SystemExit('在 news-data.js 中找不到 window.AIHomeNews 数组')
data = json.loads(m.group(1))

news = []
for day in data:
    date_iso = day.get('date', '')          # YYYY-MM-DD
    mmdd = date_iso[5:] if len(date_iso) >= 10 else date_iso  # MM-DD
    for it in day.get('items', []):
        news.append({
            'title': it.get('title', '').strip(),
            'url': it.get('url', '').strip(),
            'date': mmdd,
            'source': it.get('source', '').strip(),
        })

# 写成游戏的 news.js
header = """/* ============================================================
 * 风云榜（新闻）数据 —— 由 xianxia/scripts/convert_news.py
 * 从原站 ai-home/js/news-data.js 自动解析生成（标题/链接/日期/来源）。
 * 主站更新新闻后重跑该脚本即同步，请勿手改本文件。
 * ============================================================ */
window.AIHome = window.AIHome || {};

AIHome.NEWS = """
body = json.dumps(news, ensure_ascii=False, indent=2)
footer = ";\n"

with open(OUT, 'w', encoding='utf-8') as f:
    f.write(header + body + footer)

print('生成新闻 ' + str(len(news)) + ' 条 -> ' + OUT)
