#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
社媒引流链接生成器（myaishome.com）

功能：
  把站点内页（tools/<id>、blog/<slug>、models/<slug>、根页面）转成
  「带 UTM 追踪的短链 + 可直接粘贴的评论文案」。

为什么需要它：
  - 小红书/B站/X 评论区的裸链会被 GA 算进 Direct，无法分辨哪个平台带来流量。
  - 给链接加 utm_source/medium/campaign 后，GA 的「广告系列 / 来源」报表能精确归因。
  - 短链（go.html?k=xxx）比一长串 UTM 参数更适合塞进评论区，且跳转时自动补 UTM。

用法：
  单条：
    python scripts/social_link_gen.py --page tools/cozel --platform xiaohongshu --campaign 0827
    python scripts/social_link_gen.py --page blog/ai-agent-guide-2026 --platform bilibili --campaign 0827 --note "视频里提到的工具都在这 👉 {link}"

  批量（JSON 文件）：
    python scripts/social_link_gen.py --batch links.json

  查看已生成：
    python scripts/social_link_gen.py --list

  只预览不写入：
    python scripts/social_link_gen.py --page tools/cursor --platform x --campaign 0827 --dry-run
"""

import argparse
import json
import os
import sys
import datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GO_JSON = os.path.join(ROOT, "go-links.json")
GO_HTML = os.path.join(ROOT, "go.html")
BASE = "https://myaishome.com"

# 平台 → utm_source / utm_medium / 短码前缀 / 中文名
PLATFORMS = {
    "xiaohongshu": {"src": "xiaohongshu", "medium": "social",      "prefix": "xhs",  "label": "小红书"},
    "bilibili":    {"src": "bilibili",    "medium": "social_video", "prefix": "bili", "label": "B站"},
    "twitter":     {"src": "twitter",     "medium": "social",      "prefix": "x",    "label": "X"},
    "zhihu":       {"src": "zhihu",       "medium": "social",      "prefix": "zh",   "label": "知乎"},
}

# 评论文案模板（反 AI 味：口语、有吐槽、自然带出链接、不硬广）
# {link} 会被替换成短链。每条平台给若干变体，按短码确定性选取避免每次不同。
COPY_TEMPLATES = {
    "xiaohongshu": [
        "自学AI这半年，把踩过的坑都整理成对比表了，直接抄作业 👉 {link}",
        "别再一个个试工具了，我按使用场景分好类了（300+工具）👉 {link}",
        "港漂打工人的AI工具备忘录，每周都在更新 👉 {link}",
        "纠结用哪个AI？我做了个对比库，按场景挑就行 👉 {link}",
    ],
    "bilibili": [
        "视频里提到的工具都整理在这了，含入口和优缺点 👉 {link}",
        "做这期查了一堆资料，顺手做成对比表 👉 {link}",
        "弹幕里问的工具链接我放这了，省得你们再搜 👉 {link}",
    ],
    "twitter": [
        "Been testing AI tools for months — made a comparison sheet so you don't have to 👉 {link}",
        "整理了份AI工具对比，按场景分类，省得每次重新搜 👉 {link}",
        "My running list of AI tools, sorted by use case 👉 {link}",
    ],
    "zhihu": [
        "完整对比表我放这儿了，含各工具价格和适用场景 👉 {link}",
        "这个问题我之前也纠结过，后来干脆自己做了一个对比库 👉 {link}",
        "与其看广告，不如看真实对比，我整理了一份 👉 {link}",
    ],
}


def sanitize(s):
    """把任意字符串变成安全的短码片段。"""
    s = s.strip().lower()
    s = s.replace(" ", "-").replace("/", "-").replace("_", "-")
    s = "".join(c for c in s if (c.isalnum() or c == "-"))
    while "--" in s:
        s = s.replace("--", "-")
    return s.strip("-")


def page_exists(page):
    """校验目标页在磁盘上存在（clean URL 对应 .html 或 /index.html）。"""
    candidates = [
        os.path.join(ROOT, page + ".html"),
        os.path.join(ROOT, page, "index.html"),
    ]
    return any(os.path.exists(c) for c in candidates)


def load_registry():
    if os.path.exists(GO_JSON):
        with open(GO_JSON, "r", encoding="utf-8") as f:
            return json.load(f)
    return {}


def save_registry(reg):
    with open(GO_JSON, "w", encoding="utf-8") as f:
        json.dump(reg, f, ensure_ascii=False, indent=2)
        f.write("\n")


def build_shortcode(prefix, page, campaign, reg):
    base = f"{prefix}-{sanitize(page)}-{sanitize(campaign)}"
    code = base
    i = 2
    while code in reg:
        code = f"{base}-{i}"
        i += 1
    return code


def find_existing(reg, page, plat_src, campaign):
    """幂等：已存在 (page, source, campaign) 三元组 → 复用其短码。"""
    for code, e in reg.items():
        if (e.get("page") == page
                and e.get("source") == plat_src
                and e.get("campaign") == campaign):
            return code
    return None


def pick_copy(platform, shortcode, link, note=None):
    if note:
        return note.replace("{link}", link)
    variants = COPY_TEMPLATES.get(platform, COPY_TEMPLATES["xiaohongshu"])
    # 确定性选取
    idx = sum(ord(c) for c in shortcode) % len(variants)
    return variants[idx].replace("{link}", link)


def gen_go_html(reg):
    """用注册表重生成 go.html（内联映射，纯静态，无需 fetch）。"""
    map_json = json.dumps(reg, ensure_ascii=False)
    html = GO_HTML_TEMPLATE.replace("__GO_MAP__", map_json)
    with open(GO_HTML, "w", encoding="utf-8") as f:
        f.write(html)


def add_link(page, platform, campaign, note=None, dry_run=False):
    plat = PLATFORMS.get(platform)
    if not plat:
        print(f"[错误] 未知平台 '{platform}'，可选：{', '.join(PLATFORMS)}")
        return None
    # 规范化 page：去首尾斜杠、去 .html
    page = page.strip().strip("/")
    if page.endswith(".html"):
        page = page[:-5]
    if not page_exists(page):
        print(f"[错误] 页面不存在：{page}（检查 tools/<id>、blog/<slug>、models/<slug> 或根页面）")
        return None

    reg = load_registry()
    # 幂等：同 page+source+campaign 已存在 → 复用其短码，不新增
    existing_code = find_existing(reg, page, plat["src"], campaign)
    code = existing_code if existing_code else build_shortcode(plat["prefix"], page, campaign, reg)
    short = f"{BASE}/go?k={code}"
    full = (f"{BASE}/{page}"
            f"?utm_source={plat['src']}&utm_medium={plat['medium']}"
            f"&utm_campaign={campaign}")
    copy = pick_copy(platform, code, short, note)

    if dry_run:
        print(f"[DRY-RUN] 不写入文件")
    else:
        reg[code] = {
            "page": page,
            "source": plat["src"],
            "medium": plat["medium"],
            "campaign": campaign,
            "platform_label": plat["label"],
            "created": datetime.date.today().isoformat(),
        }
        save_registry(reg)
        gen_go_html(reg)

    print("─" * 56)
    print(f"平台    ：{plat['label']}")
    print(f"目标页  ：{page}")
    print(f"短码    ：{code}")
    print(f"🔗 短链 ：{short}")
    print(f"📊 完整UTM：{full}")
    print(f"📋 评论文案：\n    {copy}")
    print("─" * 56)
    return {"code": code, "short": short, "full": full, "copy": copy}


def list_links():
    reg = load_registry()
    if not reg:
        print("（暂无已生成的短链）")
        return
    print(f"已生成 {len(reg)} 条短链：")
    print(f"{'短码':42} {'平台':8} {'目标页'}")
    print("─" * 70)
    for code, e in reg.items():
        print(f"{code:42} {e.get('platform_label','?'):8} {e['page']}")


GO_HTML_TEMPLATE = """<!doctype html>
<html lang="zh">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex">
<title>跳转中…</title>
<script>
const GO_MAP = __GO_MAP__;
const BASE = "https://myaishome.com";
(function () {
  var p = new URLSearchParams(location.search);
  var k = p.get('k');
  if (k && GO_MAP[k]) {
    var e = GO_MAP[k];
    var url = BASE + '/' + e.page + '?utm_source=' + encodeURIComponent(e.source)
            + '&utm_medium=' + encodeURIComponent(e.medium)
            + '&utm_campaign=' + encodeURIComponent(e.campaign);
    location.replace(url);
    return;
  }
  // 兜底：直接传 p/s/c/m
  var pg = p.get('p'), s = p.get('s'), c = p.get('c'), m = p.get('m');
  if (pg) {
    var u = BASE + '/' + pg;
    var q = [];
    if (s) q.push('utm_source=' + encodeURIComponent(s));
    if (m) q.push('utm_medium=' + encodeURIComponent(m));
    if (c) q.push('utm_campaign=' + encodeURIComponent(c));
    if (q.length) u += '?' + q.join('&');
    location.replace(u);
    return;
  }
  location.replace(BASE + '/');
})();
</script>
</head>
<body style="font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;padding:48px;text-align:center;color:#888">
  正在跳转到 myaishome.com …
</body>
</html>
"""


def main():
    ap = argparse.ArgumentParser(description="社媒引流链接生成器")
    ap.add_argument("--page", help="目标页，如 tools/cozel、blog/ai-agent-guide-2026、models/chatgpt、about")
    ap.add_argument("--platform", choices=list(PLATFORMS.keys()), help="社媒平台")
    ap.add_argument("--campaign", default="", help="广告系列标签，如 0827、ai_tool_launch")
    ap.add_argument("--note", help="自定义评论文案，用 {link} 占位短链")
    ap.add_argument("--batch", help="批量 JSON 文件：[{page,platform,campaign,note?}, ...]")
    ap.add_argument("--list", action="store_true", help="列出已生成短链")
    ap.add_argument("--dry-run", action="store_true", help="只预览，不写入")
    args = ap.parse_args()

    if args.list:
        list_links()
        return

    if args.batch:
        with open(args.batch, "r", encoding="utf-8") as f:
            items = json.load(f)
        print(f"批量生成 {len(items)} 条：\n")
        for it in items:
            add_link(it["page"], it["platform"], it.get("campaign", ""), it.get("note"), args.dry_run)
        return

    if not args.page or not args.platform:
        ap.error("需提供 --page 与 --platform（或用 --batch / --list）")

    add_link(args.page, args.platform, args.campaign, args.note, args.dry_run)


if __name__ == "__main__":
    main()
