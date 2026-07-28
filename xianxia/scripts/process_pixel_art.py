# ============================================================
# 像素美术后处理脚本 (scripts/process_pixel_art.py)
# 作用：把 AI 生成的大图(256x256)转成游戏里可用的像素纹理。
# 处理三件事：
#   1. 缩放到目标小尺寸（抗锯齿降采样）→ 再保持目标尺寸输出，像素块干净
#   2. 瓦片(tile)做边缘混合，近似无缝平铺
#   3. 图标/玩家保持透明背景，统一输出 PNG
#
# 用法：python scripts/process_pixel_art.py
# 输出：assets/images/tiles/tile.png
#       assets/images/sprites/player.png
#       assets/images/locations/{7个地点}.png
# ============================================================
from PIL import Image
import os
import sys

# --- 项目路径配置 ---
BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_DIR = os.path.join(BASE, 'assets', 'images')

def ensure_dir(path):
    os.makedirs(os.path.dirname(path), exist_ok=True)

def smoothstep(edge0, edge1, x):
    """平滑过渡函数：0~1 之间平滑插值"""
    if x <= edge0: return 0.0
    if x >= edge1: return 1.0
    t = (x - edge0) / (edge1 - edge0)
    return t * t * (3 - 2 * t)

def blend_edges(img, margin=8):
    """
    对瓦片做边缘混合，让平铺时接缝不那么明显。
    思路：把右边缘渐变到左边缘，下边缘渐变到上边缘，
         中间区域保持原样，只模糊边界。
    """
    w, h = img.size
    # 转成可运算的 RGBA 浮点数组
    src = img.convert('RGBA')
    px = src.load()

    # 创建结果图（复制原图）
    out = src.copy()
    ox = out.load()

    for y in range(h):
        for x in range(w):
            # 计算横向混合权重：左右边缘 margin 区域内向对侧混合
            ax = smoothstep(0, margin, x) * (1 - smoothstep(w - margin, w, x))
            # 纵向权重：上下边缘 margin 区域内向对侧混合
            ay = smoothstep(0, margin, y) * (1 - smoothstep(h - margin, h, y))
            # 取中心和边缘的平均权重（避免单一边缘太软）
            a = min(ax, ay)

            # 对侧坐标（wrap）
            wx = (x + w // 2) % w
            wy = (y + h // 2) % h

            # 原文：这里用原像素和对侧像素按 a 混合
            r1, g1, b1, a1 = px[x, y]
            r2, g2, b2, a2 = px[wx, wy]
            # 只在边缘（a 较小）处混合；中心 a≈1 几乎不动
            ox[x, y] = (
                int(r1 * a + r2 * (1 - a)),
                int(g1 * a + g2 * (1 - a)),
                int(b1 * a + b2 * (1 - a)),
                int(a1 * a + a2 * (1 - a)),
            )
    return out

def process_tile(src_path, out_path, target=64):
    """处理地图瓦片：缩小到目标尺寸 + 边缘混合"""
    img = Image.open(src_path)
    # 第 1 步：高质量抗锯齿缩到目标尺寸（256 -> 64）
    small = img.resize((target, target), Image.Resampling.LANCZOS)
    # 第 2 步：边缘混合，让平铺接缝尽量不明显
    blended = blend_edges(small, margin=max(2, target // 8))
    ensure_dir(out_path)
    blended.save(out_path)
    print(f'[tile] {src_path} -> {out_path} ({target}x{target})')

def process_sprite(src_path, out_path, target_width, target_height):
    """处理精灵/图标：按比例缩放到目标框，保持透明，硬边像素风"""
    img = Image.open(src_path).convert('RGBA')
    # 先缩到目标尺寸（用 LANCZOS 抗锯齿，避免杂色）
    small = img.resize((target_width, target_height), Image.Resampling.LANCZOS)
    ensure_dir(out_path)
    small.save(out_path)
    print(f'[sprite] {src_path} -> {out_path} ({target_width}x{target_height})')

def main():
    # 1) 瓦片：64x64，边缘混合
    process_tile(
        os.path.join(SRC_DIR, 'tiles', 'tile_src.png'),
        os.path.join(SRC_DIR, 'tiles', 'tile.png'),
        target=64,
    )

    # 2) 玩家：32x48（小人比例偏高），游戏里再用 setDisplaySize 放大显示
    process_sprite(
        os.path.join(SRC_DIR, 'sprites', 'player_src.png'),
        os.path.join(SRC_DIR, 'sprites', 'player.png'),
        target_width=32, target_height=48,
    )

    # 3) 7 个地点图标：64x64
    locations = [
        'wanxiangge', 'lunjiantai', 'mijige',
        'cangjingge', 'fengyunbang', 'wendaolu', 'yingbinkezhan',
    ]
    for loc in locations:
        process_sprite(
            os.path.join(SRC_DIR, 'locations', f'{loc}_src.png'),
            os.path.join(SRC_DIR, 'locations', f'{loc}.png'),
            target_width=64, target_height=64,
        )

    print('\n后处理完成。生成的游戏纹理在 assets/images/{tiles,sprites,locations}/')

if __name__ == '__main__':
    main()
