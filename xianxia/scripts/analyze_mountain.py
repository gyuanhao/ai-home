#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""分析地图中山体/岩石的颜色特征，为生成遮罩提供阈值参考。"""
from PIL import Image
import numpy as np
from scipy import ndimage
import os

ROOT = r'C:\Users\gyu\WorkBuddy\2026-06-11-09-27-51\aihome-game'
SRC = os.path.join(ROOT, 'assets', 'images', 'map', 'world_map.jpg')

im = Image.open(SRC).convert('RGB')
arr = np.array(im).astype(np.float32)
r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]

# 山体/岩石：灰色系，R/G/B 接近，中等亮度，不要太白（天空/云）也不要太黑（阴影/边框）
mountain = (
    (abs(r - g) < 30) &
    (abs(g - b) < 30) &
    (abs(r - b) < 30) &
    (r > 90) & (r < 200) &
    (g > 90) & (g < 200) &
    (b > 90) & (b < 200)
)

print('mountain pixels:', mountain.sum())

labels, n = ndimage.label(mountain)
sizes = ndimage.sum(np.ones_like(labels), labels, range(1, n + 1))
print('mountain components:', n)

for i in range(n):
    if sizes[i] > 500:
        ys, xs = np.where(labels == i + 1)
        print(f'comp {i + 1}: size {int(sizes[i])}, x={xs.min()}-{xs.max()}, y={ys.min()}-{ys.max()}')

# 同时采样一些用户截图里的典型山点（凭截图肉眼估算在地图中的位置）
# 截图显示河流右下的大片灰岩，可能对应原图右侧山体
# 这里给出几个可能位置的 walkable 状态（基于当前遮罩）
from PIL import Image as PilImage
mask = np.array(PilImage.open(os.path.join(ROOT, 'assets', 'images', 'map', 'world_map_mask.png')))
print('\n当前遮罩在这些点的可走状态：')
points = [
    ('right-mountain-a', 1800, 1100),
    ('right-mountain-b', 1850, 1150),
    ('right-mountain-c', 1700, 1250),
    ('left-mountain-a', 100, 900),
    ('left-mountain-b', 150, 950),
]
for name, x, y in points:
    if 0 <= x < mask.shape[1] and 0 <= y < mask.shape[0]:
        print(f'{name} ({x},{y}): walkable={bool(mask[y, x] > 128)}')
