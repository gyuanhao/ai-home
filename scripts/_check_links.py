#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AI家AI户 工具库死链检查（每周维护自动化复用）
- 读取 scripts/tools.json，对每条 website URL 做 HEAD->GET 并发探测
- 死链口径（严格遵循自动化 prompt）：
    死链 = 无法解析域名 / 连接超时 / 5xx(500,502,503,504) / 真实 404
    略过 = 403 / 402 / 429 / 大站明显 bot-block（站点疑似存活，不计死链）
- 对死链候选追加阿里 DoH 二次复核，给出"域名解析"备注，便于人工判断误报
结果落 scripts/_linkcheck_result.json
"""
import json, subprocess, concurrent.futures, csv, sys, time, urllib.parse

TOOLS = "scripts/tools.json"
OUT = "scripts/_linkcheck_result.json"
WORKERS = 32

# 大站 / 已知 bot-block 域名（命中这些且返回 403/402/429 时直接略过，不计入死链）
BOTBLOCK_DOMAINS = [
    "openai.com", "chat.openai.com", "chatgpt.com", "midjourney.com",
    "perplexity.ai", "adobe.com", "meta.ai", "meta.com", "runwayml.com",
    "character.ai", "anthropic.com", "claude.ai", "google.com", "gemini.google.com",
    "stability.ai", "huggingface.co", "x.com", "twitter.com", "linkedin.com",
    "facebook.com", "instagram.com", "youtube.com", "notion.so", "figma.com",
    "github.com", "discord.com", "reddit.com", "pinterest.com", "tiktok.com",
    "salesforce.com", "microsoft.com", "bing.com", "baidu.com", "canva.com",
    "spotify.com", "netflix.com", "apple.com", "slack.com", "zoom.us",
]

def host_of(url):
    try:
        return urllib.parse.urlparse(url).netloc.lower().lstrip("www.")
    except Exception:
        return ""

def is_botblock(url):
    h = host_of(url)
    return any(h == d or h.endswith("." + d) for d in BOTBLOCK_DOMAINS)

def curl_status(url):
    """返回 (code, method, err, rc)。code: int 或 0(无响应/异常)。"""
    # 1) HEAD
    try:
        r = subprocess.run(
            ["curl", "-I", "-L", "-m", "10", "-s", "-o", "/dev/null",
             "-w", "%{http_code}", "-A",
             "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
             url],
            capture_output=True, text=True, timeout=14)
        code = int(r.stdout.strip() or 0)
        if code and code not in (400, 403, 405, 501):
            return code, "HEAD", "", r.returncode
    except subprocess.TimeoutExpired:
        return 0, "HEAD", "timeout", 28
    except Exception as e:
        return 0, "HEAD", str(e)[:60], -1
    # 2) GET 回退（HEAD 不被支持时）
    try:
        r = subprocess.run(
            ["curl", "-L", "-m", "10", "-s", "-o", "/dev/null",
             "-w", "%{http_code}", "-A",
             "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
             url],
            capture_output=True, text=True, timeout=14)
        code = int(r.stdout.strip() or 0)
        return code, "GET", "", r.returncode
    except subprocess.TimeoutExpired:
        return 0, "GET", "timeout", 28
    except Exception as e:
        return 0, "GET", str(e)[:60], -1

def doh_has_a_record(host):
    """阿里 DoH 查询 A 记录。返回 'NXDOMAIN' / 'NORECORD' / 'OK' / 'ERR'。"""
    try:
        r = subprocess.run(
            ["curl", "-m", "8", "-s",
             "https://dns.alidns.com/resolve?name=%s&type=A" % host],
            capture_output=True, text=True, timeout=11)
        txt = r.stdout.strip()
        if not txt:
            return "ERR"
        j = json.loads(txt)
        status = j.get("Status")
        if status == 3:
            return "NXDOMAIN"
        if j.get("Answer"):
            return "OK"
        return "NORECORD"
    except Exception:
        return "ERR"

def classify(code, err, rc, url):
    """返回 (is_dead, is_skip, bucket)。"""
    if code in (403, 402, 429) or (code == 0 and rc in (35, 52, 56)):
        # 403/402/429 或 TLS 握手失败：bot-block / 拦截
        return False, True, "botblock"
    if code in (500, 502, 503, 504):
        return True, False, "5xx"
    if code == 404:
        return True, False, "404"
    if code == 0:
        # rc: 6=无法解析, 7=连接失败, 28=超时, 其他异常
        return True, False, "conn_fail"
    if code == 410 or (400 <= code < 500):
        # 其他 4xx：非 404，需复核（不计入死链）
        return False, False, "4xx_review"
    if 200 <= code < 400:
        return False, False, "ok"
    return False, False, "other"

def main():
    tools = json.load(open(TOOLS, encoding="utf-8"))
    urls = []
    for t in tools:
        u = (t.get("website") or "").strip()
        if u:
            urls.append((t.get("id"), t.get("name"), t.get("category"), u))
    print("待检查 URL 数: %d" % len(urls), flush=True)

    results = {}
    def work(item):
        tid, name, cat, url = item
        code, method, err, rc = curl_status(url)
        return tid, name, cat, url, code, method, err, rc

    with concurrent.futures.ThreadPoolExecutor(max_workers=WORKERS) as ex:
        futs = [ex.submit(work, it) for it in urls]
        done = 0
        for f in concurrent.futures.as_completed(futs):
            tid, name, cat, url, code, method, err, rc = f.result()
            done += 1
            is_dead, is_skip, bucket = classify(code, err, rc, url)
            host = host_of(url)
            doh = ""
            if is_dead:
                doh = doh_has_a_record(host)
            results[tid] = {
                "id": tid, "name": name, "category": cat, "url": url,
                "code": code, "method": method, "err": err, "rc": rc,
                "dead": is_dead, "skip": is_skip, "bucket": bucket,
                "host": host, "doh": doh,
            }
            if done % 50 == 0:
                print("  进度 %d/%d" % (done, len(urls)), flush=True)

    json.dump(results, open(OUT, "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)
    dead = [r for r in results.values() if r["dead"]]
    skip = [r for r in results.values() if r["skip"]]
    review = [r for r in results.values() if r["bucket"] == "4xx_review"]
    ok = [r for r in results.values() if r["bucket"] == "ok"]
    print("=== 汇总 ===")
    print("OK(2xx/3xx):", len(ok))
    print("死链:", len(dead))
    print("略过(反爬/拦截):", len(skip))
    print("待复核(其他4xx):", len(review))
    print("--- 死链清单 ---")
    for r in sorted(dead, key=lambda x: x["id"]):
        print("  [%s] %s | %s | %s | code=%s rc=%s doh=%s" % (
            r["bucket"], r["id"], r["category"], r["url"], r["code"], r["rc"], r["doh"]))

if __name__ == "__main__":
    main()
