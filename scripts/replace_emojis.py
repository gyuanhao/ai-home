#!/usr/bin/env python3
"""
AI家AI户 — Emoji图标批量替换为SVG图标系统
将全站11个HTML文件中的emoji图标替换为统一的SVG <use>引用
"""

import re
import os
from pathlib import Path

BASE = Path(r"C:\Users\gyu\WorkBuddy\2026-06-11-09-27-51\ai-home")

# ====== SVG图标辅助函数 ======

def svg(name, size="md", cls=""):
    """生成内联SVG引用"""
    sz = {"sm":"14","md":"18","lg":"24","xl":"32","2xl":"40"}
    w = sz.get(size, "20")
    return f'<svg width="{w}" height="{w}" class="icon-{name} {cls}"><use href="img/icons.svg#icon-{name}"/></svg>'

def span_icon(name, size="md", extra_class=""):
    """生成带<span>包装的SVG图标"""
    return f'<span class="icon icon-{size} {extra_class}">{svg(name, size)}</span>'

# ====== 替换规则 ======
# 格式: (搜索正则, 替换字符串, 描述)

# 通用规则：在所有页面都存在的元素
GLOBAL_RULES = [
    # 导航栏Logo
    (r'(<a href="index\.html" class="nav-logo">)\s*🏠\s*(AI家AI户)', r'\1' + span_icon("logo", "lg", "icon-primary") + r' \2', "导航Logo"),
    
    # 抽屉式导航Logo
    (r'(<span class="drawer-logo">)\s*🏠\s*(AI家AI户)', r'\1' + span_icon("logo", "lg", "icon-primary") + r' \2', "抽屉Logo"),

    # 汉堡菜单按钮
    (r'(<button class="nav-toggle"[^>]*>)\s*☰\s*(</button>)', r'\1' + span_icon("menu", "lg") + r'\2', "汉堡菜单"),
    
    # 抽屉关闭按钮
    (r'(<button class="drawer-close"[^>]*>)\s*✕\s*(</button>)', r'\1' + span_icon("close", "lg") + r'\2', "关闭按钮"),
    
    # 移动端底部Tab - 首页
    (r'(<span class="tab-icon">)\s*🏠\s*(</span>\s*首页)', r'\1' + span_icon("home", "lg") + r'\2', "移动Tab-首页"),
    
    # 移动端底部Tab - 模型库
    (r'(<span class="tab-icon">)\s*📦\s*(</span>\s*模型库)', r'\1' + span_icon("models", "lg") + r'\2', "移动Tab-模型库"),
    
    # 移动端底部Tab - 对比
    (r'(<span class="tab-icon">)\s*⚖️\s*(</span>\s*对比)', r'\1' + span_icon("compare", "lg") + r'\2', "移动Tab-对比"),
    
    # 移动端底部Tab - 技能包
    (r'(<span class="tab-icon">)\s*🧰\s*(</span>\s*技能包)', r'\1' + span_icon("skills", "lg") + r'\2', "移动Tab-技能包"),
]

# 页面专属规则
PAGE_RULES = {
    "index.html": [
        # Hero场景选择器
        (r'<div class="scenario-label"[^>]*>\s*👇\s*', r'<div class="scenario-label" data-i18n="hero.scenario.label">' + span_icon("arrow-down", "md", "icon-primary") + ' ', "场景引导图标"),
        # 场景按钮图标（独立span匹配）
        (r'(<span class="scenario-icon">)\s*✍️\s*(</span>)', r'\1' + span_icon("write", "lg") + r'\2', "场景-写作"),
        (r'(<span class="scenario-icon">)\s*💻\s*(</span>)', r'\1' + span_icon("code", "lg") + r'\2', "场景-编程"),
        (r'(<span class="scenario-icon">)\s*🎨\s*(</span>)', r'\1' + span_icon("image", "lg") + r'\2', "场景-画图"),
        (r'(<span class="scenario-icon">)\s*🎬\s*(</span>)', r'\1' + span_icon("video", "lg") + r'\2', "场景-视频"),
        (r'(<span class="scenario-icon">)\s*🤖\s*(</span>)', r'\1' + span_icon("chat", "lg") + r'\2', "场景-通用"),
        
        # 热门区域标题
        (r'(<h2[^>]*>)\s*🔥\s*', r'\1' + span_icon("fire", "xl", "icon-warning"), "热门标题"),
        
        # 热门卡片图标
        (r'(<span class="hot-card-icon">)\s*🚀\s*(</span>)', r'\1' + span_icon("rocket", "lg", "icon-primary") + r'\2', "热门卡片-DeepSeek"),
        (r'(<span class="hot-card-icon">)\s*📝\s*(</span>)', r'\1' + span_icon("kimi", "lg", "icon-primary") + r'\2', "热门卡片-Kimi"),
        (r'(<span class="hot-card-icon">)\s*☁️\s*(</span>)', r'\1' + span_icon("tongyi", "lg", "icon-primary") + r'\2', "热门卡片-通义"),
        
        # 品类区标题
        (r'(<h2[^>]*>)\s*🔍\s*', r'\1' + span_icon("search", "xl", "icon-primary"), "品类标题"),
        
        # 品类卡片图标 (class="cat-icon")
        (r'(<span class="cat-icon">)\s*💬\s*(</span>)', r'\1' + span_icon("language", "xl", "icon-primary") + r'\2', "品类-语言模型"),
        (r'(<span class="cat-icon">)\s*🤖\s*(</span>)', r'\1' + span_icon("agent", "xl", "icon-primary") + r'\2', "品类-Agent"),
        (r'(<span class="cat-icon">)\s*🎨\s*(</span>)', r'\1' + span_icon("image", "xl", "icon-primary") + r'\2', "品类-图像"),
        (r'(<span class="cat-icon">)\s*🎬\s*(</span>)', r'\1' + span_icon("video", "xl", "icon-primary") + r'\2', "品类-视频"),
        (r'(<span class="cat-icon">)\s*💻\s*(</span>)', r'\1' + span_icon("code", "xl", "icon-primary") + r'\2', "品类-代码"),
        (r'(<span class="cat-icon">)\s*🛠\s*(</span>)', r'\1' + span_icon("tools", "xl", "icon-primary") + r'\2', "品类-工具"),
        
        # 推荐区标题emoji
        (r'<h3[^>]*>\s*✍️\s*写作推荐', r'<h3 style="display:flex;align-items:center;gap:6px;">' + span_icon("write", "lg", "icon-primary") + '写作推荐', "推荐-写作"),
        (r'<h3[^>]*>\s*💻\s*编程推荐', r'<h3 style="display:flex;align-items:center;gap:6px;">' + span_icon("code", "lg", "icon-primary") + '编程推荐', "推荐-编程"),
        (r'<h3[^>]*>\s*🎨\s*绘画推荐', r'<h3 style="display:flex;align-items:center;gap:6px;">' + span_icon("image", "lg", "icon-primary") + '绘画推荐', "推荐-绘画"),
        (r'<h3[^>]*>\s*🎬\s*视频推荐', r'<h3 style="display:flex;align-items:center;gap:6px;">' + span_icon("video", "lg", "icon-primary") + '视频推荐', "推荐-视频"),
        (r'<h3[^>]*>\s*🤖\s*通用推荐', r'<h3 style="display:flex;align-items:center;gap:6px;">' + span_icon("chat", "lg", "icon-primary") + '通用推荐', "推荐-通用"),
    ],
    "hero-demo.html": [
        (r'(<span class="scenario-icon">)\s*✍️\s*', r'\1' + span_icon("write", "lg"), "场景-写作"),
        (r'(<span class="scenario-icon">)\s*💻\s*', r'\1' + span_icon("code", "lg"), "场景-编程"),
        (r'(<span class="scenario-icon">)\s*🎨\s*', r'\1' + span_icon("image", "lg"), "场景-画图"),
        (r'(<span class="scenario-icon">)\s*🎬\s*', r'\1' + span_icon("video", "lg"), "场景-视频"),
        (r'(<span class="scenario-icon">)\s*🤖\s*', r'\1' + span_icon("chat", "lg"), "场景-通用"),
        (r'(<span class="cat-icon">)\s*💬\s*', r'\1' + span_icon("language", "xl", "icon-primary"), "品类-语言"),
        (r'(<span class="cat-icon">)\s*🤖\s*', r'\1' + span_icon("agent", "xl", "icon-primary"), "品类-Agent"),
        (r'(<span class="cat-icon">)\s*🎨\s*', r'\1' + span_icon("image", "xl", "icon-primary"), "品类-图像"),
        (r'(<span class="cat-icon">)\s*🎬\s*', r'\1' + span_icon("video", "xl", "icon-primary"), "品类-视频"),
        (r'(<span class="cat-icon">)\s*💻\s*', r'\1' + span_icon("code", "xl", "icon-primary"), "品类-代码"),
    ],
    "models.html": [
        # 页面标题
        (r'<h1[^>]*>\s*📦\s*模型库', r'<h1 style="display:flex;align-items:center;gap:6px;">' + span_icon("models", "xl", "icon-primary") + '模型库', "模型库标题"),
        # 搜索图标
        (r'(<span class="search-icon">)\s*🔍\s*', r'\1' + span_icon("search", "lg", "icon-muted"), "搜索框图标"),
        # 筛选按钮
        (r'(<button[^>]*class="[^"]*filter-btn[^"]*"[^>]*>)\s*🗣\s*(<span)', r'\1' + span_icon("language", "sm") + r' \2', "筛选-语言"),
        (r'(<button[^>]*class="[^"]*filter-btn[^"]*"[^>]*>)\s*🤖\s*(<span)', r'\1' + span_icon("agent", "sm") + r' \2', "筛选-Agent"),
        (r'(<button[^>]*class="[^"]*filter-btn[^"]*"[^>]*>)\s*🎨\s*(<span)', r'\1' + span_icon("image", "sm") + r' \2', "筛选-图像"),
        (r'(<button[^>]*class="[^"]*filter-btn[^"]*"[^>]*>)\s*🎬\s*(<span)', r'\1' + span_icon("video", "sm") + r' \2', "筛选-视频"),
        (r'(<button[^>]*class="[^"]*filter-btn[^"]*"[^>]*>)\s*💻\s*(<span)', r'\1' + span_icon("code", "sm") + r' \2', "筛选-代码"),
        (r'(<button[^>]*class="[^"]*filter-btn[^"]*"[^>]*>)\s*🛠\s*(<span)', r'\1' + span_icon("tools", "sm") + r' \2', "筛选-工具"),
        # 提示信息
        (r'<p[^>]*>\s*💡\s*', r'<p style="display:flex;align-items:flex-start;gap:6px;">' + span_icon("info", "md", "icon-primary"), "提示信息"),
    ],
    "compare.html": [
        # 页面标题
        (r'<h1[^>]*>\s*⚖️\s*横向对比', r'<h1 style="display:flex;align-items:center;gap:6px;">' + span_icon("compare", "xl", "icon-primary") + '横向对比', "对比标题"),
        # 表格区域标题
        (r'<h2[^>]*>\s*📊\s*基础信息对比', r'<h2 style="display:flex;align-items:center;gap:6px;">' + span_icon("data", "lg", "icon-primary") + '基础信息对比', "表格-基础信息"),
        (r'<h2[^>]*>\s*💰\s*付费方案速览', r'<h2 style="display:flex;align-items:center;gap:6px;">' + span_icon("price", "lg", "icon-primary") + '付费方案速览', "表格-付费"),
        (r'<h2[^>]*>\s*🎯\s*按使用场景选', r'<h2 style="display:flex;align-items:center;gap:6px;">' + span_icon("target", "lg", "icon-primary") + '按使用场景选', "表格-场景"),
        (r'<h2[^>]*>\s*🤖\s*Agent', r'<h2 style="display:flex;align-items:center;gap:6px;">' + span_icon("agent", "lg", "icon-primary") + 'Agent', "表格-Agent"),
        (r'<h2[^>]*>\s*🎨\s*图像', r'<h2 style="display:flex;align-items:center;gap:6px;">' + span_icon("image", "lg", "icon-primary") + '图像', "表格-图像"),
        (r'<h2[^>]*>\s*🎬\s*视频', r'<h2 style="display:flex;align-items:center;gap:6px;">' + span_icon("video", "lg", "icon-primary") + '视频', "表格-视频"),
        (r'<h2[^>]*>\s*💻\s*代码', r'<h2 style="display:flex;align-items:center;gap:6px;">' + span_icon("code", "lg", "icon-primary") + '代码', "表格-代码"),
        (r'<h2[^>]*>\s*🛠\s*AI辅助工具', r'<h2 style="display:flex;align-items:center;gap:6px;">' + span_icon("tools", "lg", "icon-primary") + 'AI辅助工具', "表格-工具"),
        # 勾选/叉号 (class="compare-check")
        (r'<span class="compare-check">\s*✅\s*', f'<span class="compare-check">{span_icon("check", "md", "icon-success")}', "勾选"),
        (r'<span class="compare-cross">\s*❌\s*', f'<span class="compare-cross">{span_icon("cross", "md", "icon-danger")}', "叉号"),
        # 文本中的✅❌ (不在span中)
        (r'>\s*✅\s*', f'>{span_icon("check", "sm", "icon-success")}', "内联勾选"),
        (r'>\s*❌\s*', f'>{span_icon("cross", "sm", "icon-danger")}', "内联叉号"),
        # 星评 (★ ☆)
        (r'★', span_icon("star", "sm", "icon-warning"), "实心星"),
        (r'☆', span_icon("star-empty", "sm", "icon-muted"), "空心星"),
        # 警告
        (r'<p[^>]*>\s*⚠️\s*', r'<p style="display:flex;align-items:flex-start;gap:6px;">' + span_icon("warning", "md", "icon-warning"), "警告"),
    ],
    "compare-custom.html": [
        (r'<h1[^>]*>\s*🔧\s*自定义对比', r'<h1 style="display:flex;align-items:center;gap:6px;">' + span_icon("custom-compare", "xl", "icon-primary") + '自定义对比', "自定义对比标题"),
        (r'(<button[^>]*class="[^"]*">)\s*🔗\s*复制对比链接', r'\1' + span_icon("link", "sm", "icon-white") + ' 复制对比链接', "复制链接按钮"),
        (r'<p[^>]*>\s*💡\s*', r'<p style="display:flex;align-items:flex-start;gap:6px;">' + span_icon("info", "md", "icon-primary"), "提示信息"),
    ],
    "skills.html": [
        (r'<h1[^>]*>\s*🧩\s*AI 技能包', r'<h1 style="display:flex;align-items:center;gap:6px;">' + span_icon("skills", "xl", "icon-primary") + 'AI 技能包', "技能包标题"),
        (r'(<span class="search-icon">)\s*🔍\s*', r'\1' + span_icon("search", "lg", "icon-muted"), "搜索框图标"),
        (r'<p[^>]*>\s*💡\s*', r'<p style="display:flex;align-items:flex-start;gap:6px;">' + span_icon("info", "md", "icon-primary"), "提示信息"),
        # 空状态
        (r'<p[^>]*>\s*🔍\s*没有找到', r'<p style="display:flex;align-items:center;gap:6px;">' + span_icon("search", "lg", "icon-muted") + '没有找到', "空状态"),
    ],
    "news.html": [
        (r'<h1[^>]*>\s*📰\s*AI行业动态', r'<h1 style="display:flex;align-items:center;gap:6px;">' + span_icon("news", "xl", "icon-primary") + 'AI行业动态', "新闻标题"),
    ],
    "about.html": [
        (r'<h1[^>]*>\s*🙋\s*关于 AI家AI户', r'<h1 style="display:flex;align-items:center;gap:6px;">' + span_icon("about", "xl", "icon-primary") + '关于 AI家AI户', "关于标题"),
    ],
    "picker.html": [
        (r'<h1[^>]*>\s*🤔\s*我该用哪个AI工具', r'<h1 style="display:flex;align-items:center;gap:6px;">' + span_icon("picker", "xl", "icon-primary") + '我该用哪个AI工具', "选型标题"),
    ],
    "privacy.html": [
        (r'<h2[^>]*>\s*📊\s*我们收集什么数据', r'<h2 style="display:flex;align-items:center;gap:6px;">' + span_icon("data", "lg", "icon-primary") + '我们收集什么数据', "隐私-数据"),
        (r'<h2[^>]*>\s*🔧\s*我们如何使用数据', r'<h2 style="display:flex;align-items:center;gap:6px;">' + span_icon("tools", "lg", "icon-primary") + '我们如何使用数据', "隐私-使用"),
        (r'<h2[^>]*>\s*🍪\s*关于 Cookie', r'<h2 style="display:flex;align-items:center;gap:6px;">' + span_icon("cookie", "lg", "icon-primary") + '关于 Cookie', "隐私-Cookie"),
        (r'<h2[^>]*>\s*📢\s*广告说明', r'<h2 style="display:flex;align-items:center;gap:6px;">' + span_icon("announce", "lg", "icon-primary") + '广告说明', "隐私-广告"),
        (r'<h2[^>]*>\s*🔗\s*第三方服务', r'<h2 style="display:flex;align-items:center;gap:6px;">' + span_icon("link", "lg", "icon-primary") + '第三方服务', "隐私-第三方"),
        (r'<h2[^>]*>\s*👤\s*你的权利', r'<h2 style="display:flex;align-items:center;gap:6px;">' + span_icon("user", "lg", "icon-primary") + '你的权利', "隐私-权利"),
        (r'<h2[^>]*>\s*📧\s*联系我们', r'<h2 style="display:flex;align-items:center;gap:6px;">' + span_icon("email", "lg", "icon-primary") + '联系我们', "隐私-联系"),
    ],
}

# ====== CSS和Sprite注入 ======

def inject_assets(html: str) -> str:
    """在</head>前注入icons.css，在<body>后注入SVG sprite"""
    
    # 注入CSS
    if 'icons.css' not in html:
        html = html.replace('</head>',
            '\n    <link rel="stylesheet" href="css/icons.css">\n</head>')
    
    # 注入SVG sprite（在<body>后）
    if 'img/icons.svg' not in html:
        sprite_markup = '\n<!-- SVG Icon Sprite -->\n<object data="img/icons.svg" type="image/svg+xml" style="display:none" aria-hidden="true"></object>\n'
        html = re.sub(r'(<body[^>]*>)', r'\1' + sprite_markup, html)
    
    return html

# ====== 主流程 ======

def process_file(filepath: Path):
    """处理单个HTML文件"""
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()
    
    original = html
    changes = 0
    
    # 1. 注入CSS和Sprite
    html = inject_assets(html)
    
    # 2. 应用全局规则
    for pattern, replacement, desc in GLOBAL_RULES:
        new_html = re.sub(pattern, replacement, html)
        if new_html != html:
            changes += 1
            html = new_html
    
    # 3. 应用页面专属规则
    filename = filepath.name
    if filename in PAGE_RULES:
        for pattern, replacement, desc in PAGE_RULES[filename]:
            new_html = re.sub(pattern, replacement, html)
            if new_html != html:
                changes += 1
                html = new_html
    
    if html != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(html)
        print(f"  ✅ {filename}: {changes} 处替换")
    else:
        print(f"  ⚠️  {filename}: 无变化")

def main():
    html_files = sorted(BASE.glob("*.html"))
    print(f"\n🔍 找到 {len(html_files)} 个HTML文件\n")
    
    for fp in html_files:
        process_file(fp)
    
    print(f"\n✨ 完成！请检查页面效果。")

if __name__ == "__main__":
    main()
