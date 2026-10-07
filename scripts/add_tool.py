#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""add_tool.py — 往 scripts/tools.json 追加/更新一个 AI 工具（幂等，按 id 覆盖）。

用法（从文件读取 JSON 对象）：
    python scripts/add_tool.py new_tool.json
用法（直接传 JSON 字符串，适合短条目）：
    python scripts/add_tool.py '{"id":"duck-ai","name":"Duck.ai", ...}'

可同时指定是否加入精品清单：
    python scripts/add_tool.py new_tool.json --featured

字段模板见 FIELDS；缺失字段会补空值，保证生成器不报错。
入库后需重跑：python scripts/generate_tool_detail_pages.py
"""
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TOOLS_PATH = os.path.join(ROOT, 'scripts', 'tools.json')
FEATURED_PATH = os.path.join(ROOT, 'scripts', 'featured_tools.json')

FIELDS = [
    'id', 'name', 'nameEn', 'category', 'tags', 'tagsEn',
    'pricing', 'priceLabel', 'priceLabelEn', 'priceDetail', 'priceDetailEn',
    'website', 'company', 'companyEn', 'region',
    'summary', 'summaryEn', 'strengths', 'strengthsEn',
    'weaknesses', 'weaknessesEn', 'bestFor', 'bestForEn',
    'affiliate', 'source', 'lastUpdated', 'affiliateUrl', 'editorNote',
]


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)

    arg = sys.argv[1]
    if os.path.exists(arg):
        with open(arg, encoding='utf-8') as f:
            tool = json.load(f)
    else:
        tool = json.loads(arg)

    if not tool.get('id'):
        print('❌ 缺少 id 字段')
        sys.exit(1)

    # 补全缺失字段
    for k in FIELDS:
        if k not in tool:
            if k in ('tags', 'tagsEn'):
                tool[k] = []
            elif k == 'affiliate':
                tool[k] = False
            else:
                tool[k] = ''

    with open(TOOLS_PATH, encoding='utf-8') as f:
        tools = json.load(f)

    updated = False
    for i, t in enumerate(tools):
        if t.get('id') == tool['id']:
            tools[i] = tool
            updated = True
            break
    if not updated:
        tools.insert(0, tool)

    with open(TOOLS_PATH, 'w', encoding='utf-8') as f:
        json.dump(tools, f, ensure_ascii=False, indent=2)
        f.write('\n')

    action = '更新' if updated else '新增'
    print(f'✅ {action}工具 {tool["id"]}（{tool.get("name")}），tools.json 共 {len(tools)} 个')

    if '--featured' in sys.argv:
        with open(FEATURED_PATH, encoding='utf-8') as f:
            featured = json.load(f)
        if tool['id'] not in featured:
            featured.append(tool['id'])
            with open(FEATURED_PATH, 'w', encoding='utf-8') as f:
                json.dump(featured, f, ensure_ascii=False, indent=2)
                f.write('\n')
            print(f'✅ 已加入精品清单，共 {len(featured)} 个')
        else:
            print('ℹ️ 已在精品清单中')


if __name__ == '__main__':
    main()
