#!/usr/bin/env python3
"""Generate a 1200x630 Open Graph image for AI家AI户."""
import os
from PIL import Image, ImageDraw, ImageFont

PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_PATH = os.path.join(PROJECT_DIR, 'img', 'og-image.png')

# Try common Windows Chinese fonts
FONT_CANDIDATES = [
    'C:/Windows/Fonts/NotoSansSC-VF.ttf',
    'C:/Windows/Fonts/simhei.ttf',
    'C:/Windows/Fonts/simsun.ttc',
]

def find_font():
    for path in FONT_CANDIDATES:
        if os.path.exists(path):
            return path
    return None

def main():
    font_path = find_font()
    if not font_path:
        raise RuntimeError('No Chinese font found for OG image generation')

    W, H = 1200, 630
    # Gradient-ish background: deep blue to purple
    img = Image.new('RGB', (W, H), '#1a1f3d')
    draw = ImageDraw.Draw(img)

    # Simple diagonal accent
    draw.polygon([(0, H), (W, H), (W, H - 180), (0, H - 80)], fill='#3b5bdb')

    # Title
    title_font = ImageFont.truetype(font_path, 72)
    subtitle_font = ImageFont.truetype(font_path, 34)
    tagline_font = ImageFont.truetype(font_path, 28)

    title = 'AI家AI户'
    subtitle = 'AI 模型与工具选型导航站'
    tagline = '352 个工具 · 44 个模型 · 一站式对比'

    # Draw text centered horizontally
    def text_size(text, font):
        bbox = draw.textbbox((0, 0), text, font=font)
        return bbox[2] - bbox[0], bbox[3] - bbox[1]

    tw, th = text_size(title, title_font)
    draw.text(((W - tw) // 2, 160), title, font=title_font, fill='#ffffff')

    sw, sh = text_size(subtitle, subtitle_font)
    draw.text(((W - sw) // 2, 270), subtitle, font=subtitle_font, fill='#dbe4ff')

    tw2, th2 = text_size(tagline, tagline_font)
    draw.text(((W - tw2) // 2, 350), tagline, font=tagline_font, fill='#bac8ff')

    # Domain at bottom
    domain_font = ImageFont.truetype(font_path, 26)
    domain = 'myaishome.com'
    dw, dh = text_size(domain, domain_font)
    draw.text(((W - dw) // 2, 540), domain, font=domain_font, fill='#ffffff')

    img.save(OUT_PATH, 'PNG')
    print(f'Saved OG image to {OUT_PATH}')

if __name__ == '__main__':
    main()
