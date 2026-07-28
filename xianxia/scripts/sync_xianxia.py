# -*- coding: utf-8 -*-
"""
总同步命令：一键把"主站"的内容同步到"仙侠世界"。
以后只要改了主站的任何内容（模型 / 技能 / 新闻），
跑这一个命令就能让仙侠世界跟着更新，不用手动抄。

运行（在 ai-home 仓库根目录，或任意目录都行）：
  python xianxia/scripts/sync_xianxia.py

它会依次执行：
  1. convert_models.py  —— models.json      -> xianxia/src/data/models.js
  2. convert_skills.js  —— skills-data.js   -> xianxia/src/data/skills.js（含 slug/detailUrl）
  3. convert_news.py    —— news.html         -> xianxia/src/data/news.js

注意：
  - 选型器 picker.js 是仙侠专用精简中文版，规则里的模型ID引用的是已同步的
    模型数据；如果主站 picker 的推荐逻辑/模型ID有大改，需要人工校对仙侠的
    xianxia/src/data/picker.js（这部分无法全自动，因为两边结构不同）。
  - 跑完后会改动 xianxia/src/data/ 下三个文件，记得一起 git commit + push 上线。
"""
import os
import shutil
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))        # xianxia/scripts

# Python 用当前解释器本身（建议在 managed python 下运行）
PY = sys.executable
# Node 优先用 PATH 里的，找不到再用 managed 固定路径
NODE = shutil.which('node')
if not NODE:
    NODE = r'C:\Users\gyu\.workbuddy\binaries\node\versions\22.22.2\node.exe'


def run(step, cmd):
    print('\n=== ' + step + ' ===')
    print('$ ' + ' '.join(cmd))
    subprocess.run(cmd, check=True)


run('1/3 同步模型 (models.json -> models.js)',
    [PY, os.path.join(HERE, 'convert_models.py')])
run('2/3 同步技能 (skills-data.js -> skills.js)',
    [NODE, os.path.join(HERE, 'convert_skills.js')])
run('3/3 同步新闻 (news.html -> news.js)',
    [PY, os.path.join(HERE, 'convert_news.py')])

print('\n========================================')
print('✅ 仙侠世界内容已与主站同步完成')
print('下一步：git add xianxia/src/data/ && git commit && git push')
print('（选型器 picker.js 若主站有大改，请人工校对）')
print('========================================')
