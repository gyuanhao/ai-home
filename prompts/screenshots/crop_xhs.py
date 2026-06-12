from PIL import Image
import os

base = "C:/Users/gyu/WorkBuddy/2026-06-11-09-27-51/ai-home/prompts/screenshots"
out = os.path.join(base, "xhs")
os.makedirs(out, exist_ok=True)

def crop_xhs_center(img_path, save_path, label=""):
    """Crop center 3:4 region for Xiaohongshu"""
    img = Image.open(img_path)
    w, h = img.size
    target_w = w
    target_h = int(w * 4 / 3)
    if target_h > h:
        target_h = h
        target_w = int(h * 3 / 4)
    left = (w - target_w) // 2
    top = (h - target_h) // 2
    cropped = img.crop((left, top, left + target_w, top + target_h))
    cropped.save(save_path, "PNG")
    print(f"  {label}: {cropped.size}")

def crop_region(img_path, save_path, top_pct, bottom_pct, label=""):
    """Crop a specific vertical region, then fit to 3:4"""
    img = Image.open(img_path)
    w, h = img.size
    top = int(h * top_pct)
    bottom = int(h * bottom_pct)
    region = img.crop((0, top, w, bottom))
    rw, rh = region.size
    target_w = rw
    target_h = int(rw * 4 / 3)
    if target_h > rh:
        target_h = rh
        target_w = int(rh * 3 / 4)
    left = (rw - target_w) // 2
    top2 = (rh - target_h) // 2
    final = region.crop((left, top2, left + target_w, top2 + target_h))
    final.save(save_path, "PNG")
    print(f"  {label}: {final.size}")

print("Processing screenshots for Xiaohongshu...")

# 1. 首页 - 整体效果
print("\n1. Homepage full:")
crop_xhs_center(os.path.join(base, "01-homepage-full.png"), os.path.join(out, "xhs-01-homepage.png"), "Homepage")

# 2. 对比页 - 语言模型对比表
print("\n2. Compare page - LLM table:")
crop_region(os.path.join(base, "02-compare-llm.png"), os.path.join(out, "xhs-02-llm-compare.png"), 0.05, 0.45, "LLM Compare")

# 3. 对比页 - 价格方案表
print("\n3. Compare page - Pricing:")
crop_region(os.path.join(base, "02-compare-llm.png"), os.path.join(out, "xhs-03-pricing.png"), 0.45, 0.70, "Pricing")

# 4. 对比页 - 场景推荐
print("\n4. Compare page - Use case:")
crop_region(os.path.join(base, "02-compare-llm.png"), os.path.join(out, "xhs-04-usecase.png"), 0.70, 0.95, "Use Case")

# 5. 模型库 - 卡片网格
print("\n5. Models page - Grid:")
crop_region(os.path.join(base, "03-models-page.png"), os.path.join(out, "xhs-05-models-grid.png"), 0.05, 0.55, "Models Grid")

# 6. 模型库 - 更多卡片
print("\n6. Models page - More cards:")
crop_region(os.path.join(base, "03-models-page.png"), os.path.join(out, "xhs-06-more-models.png"), 0.55, 0.95, "More Models")

print("\nDone! All images saved to:", out)
