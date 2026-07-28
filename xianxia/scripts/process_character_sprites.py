#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
处理玩家角色素材：把美术排好的角色图切成 Phaser 标准精灵表。

原图是 5 行 × 8 列的等距网格，但角色在每个格子里略有偏移，
所以采用「先等分网格，再取每格内容包围盒」的策略，避免投影找峰误切。

规格：
- 行走图：5 个方向 × 8 帧（方向顺序从上到下：下/左下/左/左上/上）
- 待机图：5 个方向 × 1 帧（同方向）
- 输出统一帧大小的 walk.png / idle.png + player_atlas.json

右半边方向（右/右下/右上）在 Phaser 里通过 setFlipX(true) 镜像实现。
"""
from PIL import Image
import numpy as np
import json
import os
import math

# === 路径配置 ===
SRC_WALK = r'C:\Users\gyu\Desktop\个人\新版网站素材\角色行走-无背景.png'
SRC_IDLE = r'C:\Users\gyu\Desktop\个人\新版网站素材\角色待机-无背景.png'
OUT_DIR = r'C:\Users\gyu\WorkBuddy\2026-06-11-09-27-51\aihome-game\assets\images\sprites'

WALK_OUT = os.path.join(OUT_DIR, 'player_walk.png')
IDLE_OUT = os.path.join(OUT_DIR, 'player_idle.png')
META_OUT = os.path.join(OUT_DIR, 'player_atlas.json')

DIRECTIONS = ['down', 'down-left', 'left', 'up-left', 'up']


def remove_white_background(im):
    """把严格纯白色的背景变成透明（避免误伤皮肤/高光）。"""
    arr = np.array(im.convert('RGBA'))
    white = (arr[:, :, 0] == 255) & (arr[:, :, 1] == 255) & (arr[:, :, 2] == 255) & (arr[:, :, 3] > 0)
    arr[white] = [0, 0, 0, 0]
    return Image.fromarray(arr, 'RGBA')


def find_row_boundaries(mask, n_rows):
    """
    用水平投影找行边界。行与行之间通常有大段空白，
    所以对 -投影 找峰即可得到分隔线。
    """
    h_proj = mask.sum(axis=1).astype(float)
    # 轻微平滑，消除噪点
    smooth = np.convolve(h_proj, np.ones(11) / 11, mode='same')
    H = len(smooth)
    expected_distance = H // n_rows

    # 对 -smooth 找峰 = 找投影谷
    from scipy.signal import find_peaks
    valleys, _ = find_peaks(-smooth, distance=expected_distance * 0.6, prominence=30)

    if len(valleys) < n_rows - 1:
        print(f'警告：只找到 {len(valleys)} 个行谷，回退到等分边界')
        boundaries = [int(i * H / n_rows) for i in range(1, n_rows)]
    else:
        # 取最靠近等分位置的 n_rows-1 个谷
        ideal = [int(i * H / n_rows) for i in range(1, n_rows)]
        chosen = []
        used = set()
        for target in ideal:
            best = None
            best_dist = float('inf')
            for idx, v in enumerate(valleys):
                if idx in used:
                    continue
                d = abs(v - target)
                if d < best_dist:
                    best_dist = d
                    best = idx
            if best is not None:
                chosen.append(int(valleys[best]))
                used.add(best)
        boundaries = sorted(chosen)

    return [0] + boundaries + [H]


def bbox_in_region(mask, x0, y0, x1, y1):
    """在 mask 的 [x0,x1)×[y0,y1) 矩形区域内找非透明内容的包围盒。"""
    H, W = mask.shape
    x0, y0 = max(0, x0), max(0, y0)
    x1, y1 = min(W, x1), min(H, y1)
    if x0 >= x1 or y0 >= y1:
        return None
    sub = mask[y0:y1, x0:x1]
    rows_any = np.any(sub, axis=1)
    cols_any = np.any(sub, axis=0)
    if not rows_any.any() or not cols_any.any():
        return None
    dy1 = int(np.where(rows_any)[0][0])
    dy2 = int(np.where(rows_any)[0][-1])
    dx1 = int(np.where(cols_any)[0][0])
    dx2 = int(np.where(cols_any)[0][-1])
    return (x0 + dx1, y0 + dy1, x0 + dx2 + 1, y0 + dy2 + 1)


def extract_grid_frames(src_path, n_rows, n_cols, is_walk):
    """
    把原图按 n_rows × n_cols 等距网格切分，每格取内容包围盒。
    先裁剪掉全图空白边距，再在内容区域内等分，避免边缘切坏。
    返回 (透明化后的图, [(row, col, bbox, content), ...])。
    """
    im = Image.open(src_path).convert('RGBA')
    if is_walk:
        im = remove_white_background(im)

    arr = np.array(im)
    mask = arr[:, :, 3] > 10
    H, W = mask.shape

    # 1. 先找全图内容包围盒，去掉四周空白边距
    full_bb = bbox_in_region(mask, 0, 0, W, H)
    if not full_bb:
        print('警告：未检测到任何内容')
        return im, []
    fx0, fy0, fx1, fy1 = full_bb
    content_w = fx1 - fx0
    content_h = fy1 - fy0

    # 2. 在内容区域内找行边界
    content_mask = mask[fy0:fy1, fx0:fx1]
    row_bounds = find_row_boundaries(content_mask, n_rows)
    # 把相对坐标转回全图坐标
    row_bounds = [fy0 + b for b in row_bounds]

    frames = []
    # 列宽按内容宽度除以列数，而不是整图宽度
    col_width = content_w // n_cols

    for r in range(n_rows):
        y0, y1 = row_bounds[r], row_bounds[r + 1]
        for c in range(n_cols):
            x0 = fx0 + c * col_width
            x1 = x0 + col_width
            bb = bbox_in_region(mask, x0, y0, x1, y1)
            if bb:
                content = im.crop(bb)
                frames.append((r, c, bb, content))
            else:
                print(f'警告：第 {r} 行第 {c} 列未检测到内容')

    return im, frames


def build_sheet(frames, frame_w, frame_h):
    """把提取的帧拼成标准精灵表。"""
    max_row = max(r for r, _, _, _ in frames)
    max_col = max(c for _, c, _, _ in frames)
    sheet = Image.new('RGBA', ((max_col + 1) * frame_w, (max_row + 1) * frame_h), (0, 0, 0, 0))

    for r, c, bb, content in frames:
        cw, ch = content.size
        px = (frame_w - cw) // 2
        py = (frame_h - ch) // 2
        dest_x = c * frame_w + px
        dest_y = r * frame_h + py
        sheet.paste(content, (dest_x, dest_y), content)

    return sheet


def process():
    os.makedirs(OUT_DIR, exist_ok=True)

    walk_im, walk_frames = extract_grid_frames(SRC_WALK, n_rows=5, n_cols=8, is_walk=True)
    idle_im, idle_frames = extract_grid_frames(SRC_IDLE, n_rows=5, n_cols=1, is_walk=False)

    if len(walk_frames) != 40:
        print(f'警告：行走图只提取到 {len(walk_frames)}/40 帧')
    if len(idle_frames) != 5:
        print(f'警告：待机图只提取到 {len(idle_frames)}/5 帧')

    # 统一帧大小：取所有内容包围盒的最大宽高，再加一点边距
    all_bboxes = [bb for _, _, bb, _ in walk_frames + idle_frames]
    max_cw = max(bb[2] - bb[0] for bb in all_bboxes)
    max_ch = max(bb[3] - bb[1] for bb in all_bboxes)
    frame_w = math.ceil((max_cw + 16) / 4) * 4
    frame_h = math.ceil((max_ch + 16) / 4) * 4

    print(f'提取完成：行走 {len(walk_frames)} 帧，待机 {len(idle_frames)} 帧')
    print(f'最大内容尺寸: {max_cw}x{max_ch}，统一帧尺寸: {frame_w}x{frame_h}')

    walk_sheet = build_sheet(walk_frames, frame_w, frame_h)
    idle_sheet = build_sheet(idle_frames, frame_w, frame_h)

    walk_sheet.save(WALK_OUT)
    idle_sheet.save(IDLE_OUT)
    print(f'已保存: {WALK_OUT} ({walk_sheet.size})')
    print(f'已保存: {IDLE_OUT} ({idle_sheet.size})')

    meta = {
        'frameWidth': frame_w,
        'frameHeight': frame_h,
        'walkRows': 5,
        'walkCols': 8,
        'idleRows': 5,
        'idleCols': 1,
        'directions': DIRECTIONS,
        'sourceFiles': {
            'walk': os.path.basename(SRC_WALK),
            'idle': os.path.basename(SRC_IDLE),
        }
    }
    with open(META_OUT, 'w', encoding='utf-8') as f:
        json.dump(meta, f, ensure_ascii=False, indent=2)
    print(f'已保存: {META_OUT}')


if __name__ == '__main__':
    process()
