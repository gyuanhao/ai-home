# -*- coding: utf-8 -*-
"""
迁移脚本：把原站 ai-home/scripts/models.json 的真实模型数据，
转成游戏用的 xianxia/src/data/models.js（只保留中文字段，去掉英文冗余）。

【零基础说明】
这个脚本做三件事：
  1. 读"原站数据" ai-home/scripts/models.json
  2. 每个模型只留中文字段（名字/公司/品类/价格/优点/不足/中文支持/官网...）
  3. 写成"游戏数据" xianxia/src/data/models.js

以后原站更新了模型（运行"AI之家更新"后 models.json 变了），
重跑这个脚本 + sync 总命令即可同步到仙侠世界，不用手动改两处。
运行（在 ai-home 仓库根目录，或任意目录都行，路径按脚本位置自动算）：
  python xianxia/scripts/convert_models.py
"""
import json
import os

# 路径按脚本自身位置推算，无论从哪个目录运行都正确
HERE = os.path.dirname(os.path.abspath(__file__))        # xianxia/scripts
XIANXIA = os.path.dirname(HERE)                           # xianxia
ROOT = os.path.dirname(XIANXIA)                           # ai-home（仓库根）

SRC = os.path.join(ROOT, 'scripts', 'models.json')
OUT = os.path.join(XIANXIA, 'src', 'data', 'models.js')

# 1. 读原站数据
with open(SRC, encoding='utf-8') as f:
    src = json.load(f)

# 2. 每个模型只保留中文字段（游戏面向中文用户）
out = []
for m in src:
    out.append({
        'id': m.get('id', ''),
        'name': m.get('name', ''),
        'company': m.get('company', ''),
        'category': m.get('category', ''),
        'pricing': m.get('pricing', ''),
        'priceLabel': m.get('priceLabel', ''),
        'strengths': m.get('strengths', ''),
        'weaknesses': m.get('weaknesses', ''),
        'bestFor': m.get('bestFor', ''),
        'chineseSupport': m.get('chineseSupport', ''),
        'contextWindow': m.get('contextWindow', ''),
        'website': m.get('website', ''),
        'tags': m.get('tags', []),
    })

# 3. 写成游戏的 models.js（带注释头）
header = """/* ============================================================
 * 模型数据 (src/data/models.js)
 * 作用：万象阁里展示的 AI 模型卡片内容。
 * 本文件由 xianxia/scripts/convert_models.py 从原站 ai-home/scripts/models.json
 * 自动生成（只保留中文字段）。原站更新模型后重跑该脚本即同步。
 * 请勿手改本文件；要改请改原站 models.json 后重跑同步命令。
 * ============================================================ */
window.AIHome = window.AIHome || {};

AIHome.MODELS = """
body = json.dumps(out, ensure_ascii=False, indent=2)
footer = ";\n"

with open(OUT, 'w', encoding='utf-8') as f:
    f.write(header + body + footer)

print('迁移完成：' + str(len(out)) + ' 个模型 -> ' + OUT)
# 顺便打印品类分布，方便核对
from collections import Counter
cats = Counter(m['category'] for m in out)
print('品类分布：' + str(dict(cats)))
