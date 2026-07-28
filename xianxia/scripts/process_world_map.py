#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
处理完整地图素材：
1. 去右下角水印。
2. 生成可行走遮罩：白色=可走，黑色=河流/山体/天空（不可走）。
3. 桥梁强制可走 + 各地点间 A* 最短路加宽保护 + 接受用户蓝框"应可走"区域。

输出：
- assets/images/map/world_map.jpg
- assets/images/map/world_map_mask.png
- assets/images/map/world_map_obstacle_preview.jpg
"""
from PIL import Image, ImageDraw
import numpy as np
from scipy import ndimage
import heapq
import os

ROOT = r'C:\Users\gyu\WorkBuddy\2026-06-11-09-27-51\aihome-game'
SRC = os.path.join(ROOT, 'assets', 'images', 'map', 'world_map.jpg')
OUT_MAP = os.path.join(ROOT, 'assets', 'images', 'map', 'world_map.jpg')
OUT_MASK = os.path.join(ROOT, 'assets', 'images', 'map', 'world_map_mask.png')

# 用户标注图：红色画笔补标禁区 + 蓝色框标应可走区域
USER_RED_ANNOTATION = r'C:\Users\gyu\.workbuddy\clipboard-images\clipboard-2026-07-27T09-49-29-786Z-91e70dc3.jpg'
USER_BLUE_ANNOTATION = r'C:\Users\gyu\.workbuddy\clipboard-images\clipboard-2026-07-28T00-47-29-389Z-ff9aea68.jpg'
USER_GREEN_ANNOTATION = r'C:\Users\gyu\.workbuddy\clipboard-images\clipboard-2026-07-28T01-07-21-035Z-85609817.jpg'

# 7 地点 + 出生地
LOCATIONS = [
    (743, 693, '万象阁'),
    (344, 1015, '秘籍阁'),
    (2175, 953, '藏经阁'),
    (1659, 795, '风云榜'),
    (1761, 1065, '迎宾客栈'),
    (1631, 1395, '论剑台'),
    (1039, 1375, '问道路'),
    (1331, 1441, '出生地'),
]


def remove_watermark(im):
    return im


def _resize_user_im(user_im, size):
    return user_im.convert('RGB').resize(size, Image.Resampling.LANCZOS)


def detect_user_red_annotation(user_im, size):
    """从用户标注图提取红色禁区。"""
    if user_im is None:
        return None
    arr = np.array(_resize_user_im(user_im, size)).astype(np.float32)
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    red = (
        (r > 155) & (g < 130) & (b < 130) &
        (r - g > 35) & (r - b > 35)
    )
    labels, n = ndimage.label(red)
    if n == 0:
        return None
    sizes = ndimage.sum(np.ones_like(labels), labels, range(1, n + 1))
    out = np.zeros_like(red)
    for i in range(n):
        if sizes[i] > 80:
            out |= (labels == i + 1)
    return ndimage.binary_dilation(out, iterations=2)


def detect_user_blue_annotation(user_im, size):
    """从用户标注图提取蓝色"应可走"区域，并在 2401×1800 上返回精确坐标。"""
    if user_im is None:
        return None
    img = user_im.convert('RGB')
    uW, uH = img.size

    arr = np.array(img).astype(np.float32)
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    blue = (
        (b > 150) &
        (b > r + 30) &
        (b > g + 5) &
        (r < 220) & (g < 220)
    )
    labels, n = ndimage.label(blue)
    if n == 0:
        return None

    # 寻找 preview 在用户图中的实际边界（红色覆盖区域）
    red_overlay = (r > 140) & (g < r - 20) & (b < r - 20)
    red_rows = np.where(red_overlay.any(axis=1))[0]
    red_cols = np.where(red_overlay.any(axis=0))[0]
    if len(red_rows) == 0 or len(red_cols) == 0:
        return None

    ux0 = red_cols.min()
    ux1 = red_cols.max()
    uy0 = red_rows.min()
    uy1 = red_rows.max()
    sx = (ux1 - ux0) / size[0]
    sy = (uy1 - uy0) / size[1]

    # 收集较大蓝色连通块（>500px 用户图）
    boxes = []
    for i in range(1, n + 1):
        ys, xs = np.where(labels == i)
        if len(xs) < 500:
            continue
        ox_min = int((xs.min() - ux0) / sx)
        ox_max = int((xs.max() - ux0) / sx)
        oy_min = int((ys.min() - uy0) / sy)
        oy_max = int((ys.max() - uy0) / sy)
        boxes.append((ox_min, ox_max, oy_min, oy_max))

    if not boxes:
        return None

    H, W = size[1], size[0]
    out = np.zeros((H, W), dtype=bool)
    for ox0, ox1, oy0, oy1 in boxes:
        # 扩展一些边距
        ox0 = max(0, ox0 - 20)
        oy0 = max(0, oy0 - 20)
        ox1 = min(W, ox1 + 20)
        oy1 = min(H, oy1 + 20)
        out[oy0:oy1, ox0:ox1] = True
    return out


def detect_user_green_annotation(user_im, size):
    """
    从用户标注图提取绿色"应可走"区域（用户用绿色框标出所有可通行区域）。
    用户绿色框可能覆盖水域，所以扣除已识别河流，但仍保留陆地。
    返回填充后的 2D bool mask，投影到 size。
    """
    if user_im is None:
        return None
    img = user_im.convert('RGB')
    uW, uH = img.size
    arr = np.array(img).astype(np.float32)
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]

    # 绿色：G 显著高于 R/B，且整体不过暗
    green = (
        (g > 130) &
        (g > r + 25) &
        (g > b + 25) &
        (r < 200) &
        (b < 200)
    )

    # 找 preview 在用户图中的边界
    red_overlay = (r > 140) & (g < r - 20) & (b < r - 20)
    red_rows = np.where(red_overlay.any(axis=1))[0]
    red_cols = np.where(red_overlay.any(axis=0))[0]
    if len(red_rows) == 0 or len(red_cols) == 0:
        return None

    ux0 = red_cols.min()
    ux1 = red_cols.max()
    uy0 = red_rows.min()
    uy1 = red_rows.max()
    sx = (ux1 - ux0) / size[0]
    sy = (uy1 - uy0) / size[1]

    # 闭运算 + 填充，让绿色框内部也被认为可走
    green_dilated = ndimage.binary_dilation(green, iterations=3)
    green_filled = ndimage.binary_fill_holes(green_dilated)

    # 投影回原图坐标
    H, W = size[1], size[0]
    out = np.zeros((H, W), dtype=bool)
    uH_int, uW_int = green_filled.shape
    for y in range(uH_int):
        for x in range(uW_int):
            if green_filled[y, x]:
                ox = int((x - ux0) / sx)
                oy = int((y - uy0) / sy)
                if 0 <= ox < W and 0 <= oy < H:
                    out[oy, ox] = True
    return out


def build_walk_mask(im, user_red_im=None, user_blue_im=None, user_green_im=None):
    """
    生成可行走遮罩：白色=可走，黑色=河流/山体/天空（不可走）。
    桥梁硬编码可走 + A* 路径加宽 + 用户蓝/绿框区域覆盖为白。
    """
    arr = np.array(im.convert('RGB')).astype(np.float32)
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    H, W = arr.shape[:2]
    gray = 0.299 * r + 0.587 * g + 0.114 * b

    yy, xx = np.mgrid[:H, :W]

    # 天空带直接禁行
    sky_band = np.zeros((H, W), dtype=bool)
    sky_band[:240, :] = True

    # 远山
    distant_mountain = (
        (yy < 420) & (yy >= 180) &
        (gray > 90) & (gray < 215) &
        (abs(r - g) < 45) &
        (abs(g - b) < 50) &
        (abs(r - b) < 50) &
        ((b > 110) | (gray > 130))
    )

    # 河流
    water = (b > 110) & (g > 90) & (b > r + 3) & (g >= r - 10) & (r < 215)
    water = water & (~sky_band)
    labels, n = ndimage.label(water)
    sizes = ndimage.sum(np.ones_like(labels), labels, range(1, n + 1))
    river = np.zeros_like(water)
    for i in range(n):
        if sizes[i] > 1500:
            river |= (labels == i + 1)
    river = ndimage.binary_dilation(river, iterations=2)

    # 山体/岩石
    gx = ndimage.sobel(gray, axis=1)
    gy = ndimage.sobel(gray, axis=0)
    grad = np.sqrt(gx * gx + gy * gy)
    textured = grad > 12

    rock_gray = (
        (abs(r - g) < 38) &
        (abs(g - b) < 42) &
        (abs(r - b) < 42) &
        (gray > 60) & (gray < 240) &
        (~sky_band)
    )
    rock_brown = (
        (r > 95) & (g > 65) & (b < 140) &
        (r > b + 15) &
        (g > b + 5) &
        (~sky_band)
    )
    forest = (
        (g > 35) & (g < 120) &
        (r > 15) & (r < 100) &
        (b > 10) & (b < 90) &
        (g > r + 5) & (g > b + 8) &
        (~sky_band)
    )
    mountain = (rock_gray | rock_brown | forest) & textured
    m_labels, m_n = ndimage.label(mountain)
    m_sizes = ndimage.sum(np.ones_like(m_labels), m_labels, range(1, m_n + 1))
    mountain_big = np.zeros_like(mountain)
    for i in range(m_n):
        if m_sizes[i] > 300:
            mountain_big |= (m_labels == i + 1)
    # 减少山体膨胀：2 → 1，避免吃掉路边
    mountain_big = ndimage.binary_dilation(mountain_big, iterations=1)

    # 桥梁颜色检测 + 硬编码主桥细线
    bridge = (
        (r > 100) & (g > 80) & (b < 150) &
        (r > b + 5) & (g > b + 5) & (~sky_band)
    )
    br_labels, br_n = ndimage.label(bridge)
    br_sizes = ndimage.sum(np.ones_like(br_labels), br_labels, range(1, br_n + 1))
    bridge_clean = np.zeros_like(bridge)
    for i in range(br_n):
        if 150 < br_sizes[i] < 12000:
            bridge_clean |= (br_labels == i + 1)

    # 硬编码主桥：画一条窄线（宽 38px），从左岸 (770, 925) 到右岸 (960, 960)
    bridge_force_img = Image.new('L', (W, H), 0)
    draw = ImageDraw.Draw(bridge_force_img)
    draw.line([(770, 925), (960, 960)], fill=255, width=38)
    # 桥两端落地延伸一段
    draw.line([(720, 920), (790, 925)], fill=255, width=38)
    draw.line([(940, 960), (1010, 960)], fill=255, width=38)
    bridge_force = np.array(bridge_force_img, dtype=bool)
    bridge_clean = bridge_clean | bridge_force

    obstacle = sky_band | distant_mountain | river | mountain_big

    # 合并用户红色禁区
    user_red = detect_user_red_annotation(user_red_im, (W, H))
    if user_red is not None:
        obstacle = obstacle | user_red

    walkable = (~obstacle) | bridge_clean
    mask = np.where(walkable, 255, 0).astype(np.uint8)

    # 保护各地点入口（半径加大）
    yy_grid, xx_grid = np.ogrid[:H, :W]
    for cx, cy, _ in LOCATIONS:
        rr = 90
        disk = (xx_grid - cx) ** 2 + (yy_grid - cy) ** 2 <= rr * rr
        mask[disk] = 255

    # 各地点间 A* 最短路 → 膨胀 ~20px 设为白（确保连通）
    path_mask = compute_path_corridors(mask)
    mask[path_mask] = 255

    # 用户蓝框"应可走"区域：扣除已识别的河流，避免把水色误开
    user_blue = detect_user_blue_annotation(user_blue_im, (W, H))
    if user_blue is not None:
        safe_blue = user_blue & (~river)
        mask[safe_blue] = 255
        print(f'用户蓝框区域像素: {user_blue.sum()}, 扣除水域后设为白: {safe_blue.sum()}')

    # 用户绿框"应可走"区域：扣除已识别的河流，避免把水色误开；扣除天空带和远山
    user_green = detect_user_green_annotation(user_green_im, (W, H))
    if user_green is not None:
        safe_green = user_green & (~river) & (~sky_band) & (~distant_mountain)
        mask[safe_green] = 255
        print(f'用户绿框区域像素: {user_green.sum()}, 扣除水域/天空/远山后设为白: {safe_green.sum()}')

    return Image.fromarray(mask, 'L')


def compute_path_corridors(mask, cell=24):
    """
    对各地点两两间跑 A*，把找到的路径膨胀 ~20px 作为可行走通道。
    A* 严格只在已有可走格子中寻路（避免穿过河流/山体），并强制主桥格子可走。
    """
    H, W = mask.shape
    grid_h = H // cell
    grid_w = W // cell

    # 下采样：块内可走像素 > 50% 才视为可走
    walk = np.zeros((grid_h, grid_w), dtype=bool)
    for gy in range(grid_h):
        for gx in range(grid_w):
            block = mask[gy * cell:(gy + 1) * cell, gx * cell:(gx + 1) * cell]
            walk[gy, gx] = (block == 255).sum() > (cell * cell * 0.50)

    # 强制主桥格子可走（用与 build_walk_mask 中相同的细线）
    bridge_grid_img = Image.new('L', (W, H), 0)
    ImageDraw.Draw(bridge_grid_img).line([(770, 925), (960, 960)], fill=255, width=60)
    bridge_grid_arr = np.array(bridge_grid_img, dtype=bool)
    for gy in range(grid_h):
        for gx in range(grid_w):
            cx_pix = gx * cell + cell // 2
            cy_pix = gy * cell + cell // 2
            if bridge_grid_arr[cy_pix, cx_pix]:
                walk[gy, gx] = True

    # 强制地点 80px 内格子可走（确保起点/终点可达）
    for cx, cy, _ in LOCATIONS:
        for gy in range(grid_h):
            for gx in range(grid_w):
                cx_pix = gx * cell + cell // 2
                cy_pix = gy * cell + cell // 2
                if (cx_pix - cx) ** 2 + (cy_pix - cy) ** 2 <= 80 * 80:
                    walk[gy, gx] = True

    def to_grid(x, y):
        return min(x // cell, grid_w - 1), min(y // cell, grid_h - 1)

    def heuristic(a, b):
        return abs(a[0] - b[0]) + abs(a[1] - b[1])

    def find_path(start, end):
        sx, sy = to_grid(*start)
        ex, ey = to_grid(*end)
        if (sx, sy) == (ex, ey):
            return [(sx, sy)] if walk[sy, sx] else None
        if not (walk[sy, sx] and walk[ey, ex]):
            return None
        open_set = [(heuristic((sx, sy), (ex, ey)), 0, sx, sy)]
        came = {}
        g = {(sx, sy): 0}
        visited = set()
        while open_set:
            _, gc, x, y = heapq.heappop(open_set)
            if (x, y) in visited:
                continue
            visited.add((x, y))
            if (x, y) == (ex, ey):
                path = []
                cur = (x, y)
                while cur is not None:
                    path.append(cur)
                    cur = came.get(cur)
                return path
            for dx, dy in [(1, 0), (-1, 0), (0, 1), (0, -1),
                           (1, 1), (1, -1), (-1, 1), (-1, -1)]:
                nx, ny = x + dx, y + dy
                if 0 <= nx < grid_w and 0 <= ny < grid_h and walk[ny, nx]:
                    ng = gc + (1.414 if dx != 0 and dy != 0 else 1)
                    if (nx, ny) not in g or ng < g[(nx, ny)]:
                        came[(nx, ny)] = (x, y)
                        g[(nx, ny)] = ng
                        heapq.heappush(open_set, (ng + heuristic((nx, ny), (ex, ey)), ng, nx, ny))
        return None

    # 收集所有路径
    all_path = []
    locs = [(x, y) for x, y, _ in LOCATIONS]
    path_count = 0
    for i in range(len(locs)):
        for j in range(i + 1, len(locs)):
            path = find_path(locs[i], locs[j])
            if path:
                all_path.extend(path)
                path_count += 1
    print(f'A* 路径: 成功 {path_count}/{len(locs)*(len(locs)-1)//2}')

    if not all_path:
        return np.zeros((H, W), dtype=bool)

    # 把网格路径映射回像素坐标并膨胀 18 像素
    corridor = np.zeros((H, W), dtype=bool)
    for gx, gy in all_path:
        cx_p = gx * cell + cell // 2
        cy_p = gy * cell + cell // 2
        corridor[cy_p, cx_p] = True
    corridor = ndimage.binary_dilation(corridor, iterations=18)
    return corridor


def create_preview(im, mask):
    """生成红色禁区预览图。"""
    arr = np.array(im.convert('RGB')).astype(np.float32)
    m = np.array(mask.convert('L')).astype(np.float32) / 255.0
    red_overlay = np.zeros_like(arr)
    red_overlay[:, :, 0] = 255
    blended = arr * 0.55 + red_overlay * 0.45
    preview = arr * m[:, :, None] + blended * (1 - m[:, :, None])
    return Image.fromarray(np.clip(preview, 0, 255).astype(np.uint8), 'RGB')


def main():
    im = Image.open(SRC)
    print(f'原始尺寸: {im.size}')

    user_red_im = None
    if os.path.exists(USER_RED_ANNOTATION):
        user_red_im = Image.open(USER_RED_ANNOTATION)
        print(f'加载红色用户标注: {USER_RED_ANNOTATION} ({user_red_im.size})')

    user_blue_im = None
    if os.path.exists(USER_BLUE_ANNOTATION):
        user_blue_im = Image.open(USER_BLUE_ANNOTATION)
        print(f'加载蓝色用户标注: {USER_BLUE_ANNOTATION} ({user_blue_im.size})')

    user_green_im = None
    if os.path.exists(USER_GREEN_ANNOTATION):
        user_green_im = Image.open(USER_GREEN_ANNOTATION)
        print(f'加载绿色用户标注: {USER_GREEN_ANNOTATION} ({user_green_im.size})')

    im_cleaned = remove_watermark(im)
    im_cleaned.save(OUT_MAP, quality=95)
    print(f'已保存清理地图: {OUT_MAP}')

    mask = build_walk_mask(im_cleaned, user_red_im, user_blue_im, user_green_im)
    mask.save(OUT_MASK)
    print(f'已保存行走遮罩: {OUT_MASK}')

    preview = create_preview(im_cleaned, mask)
    preview_path = os.path.join(ROOT, 'assets', 'images', 'map', 'world_map_obstacle_preview.jpg')
    preview.save(preview_path, quality=95)
    print(f'已保存禁区预览: {preview_path}')


if __name__ == '__main__':
    main()
