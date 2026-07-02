#!/usr/bin/env python3
"""Final emoji audit across all myaishome.com HTML files."""
import re, os

# Comprehensive emoji range pattern
emoji_pattern = re.compile(
    '[\U0001F300-\U0001F9FF\u2600-\u27BF\u2700-\u27BF\u2B50\uFE0F\u200D\u20E3\u3297\u3299'
    '\U0001FA00-\U0001FAFF\U0001F000-\U0001F02F\U0001F0A0-\U0001F0FF'
    '\U0001F100-\U0001F64F\U0001F680-\U0001F6FF\U0001F780-\U0001F8FF'
    '\U0001F900-\U0001F9FF\u2753-\u2757\u2795-\u2797\u2764\u2728'
    '\u231A-\u231B\u23E9-\u23F3\u23F8-\u23FA\u25AA-\u25AB\u25B6\u25C0\u25FB-\u25FE'
    '\u2934-\u2935\u3030\u303D\u3297\u3299\u2122\u2139'
    '\u2693\u26A0-\u26A1\u26AA-\u26AB\u26BD-\u26BE\u26C4-\u26C5'
    '\u26D4\u26EA\u26F2-\u26F3\u26F5\u26FA\u26FD\u2702\u2705'
    '\u2708-\u270D\u270F-\u2712\u2714\u2716\u271D\u2721\u2728'
    '\u2733-\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757'
    '\u2763-\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2B05-\u2B07'
    '\u2B1B-\u2B1C\u2B50\u2B55]+'
)

files = ['index.html','compare.html','compare-custom.html','models.html',
         'skills.html','news.html','about.html','picker.html',
         'hero-demo.html','privacy.html','404.html']

total_e = 0
total_s = 0
for f in files:
    with open(f, 'r', encoding='utf-8') as fh:
        c = fh.read()
    e_count = len(list(emoji_pattern.finditer(c)))
    s_count = c.count('<svg ')
    total_e += e_count
    total_s += s_count
    status = "CLEAN" if e_count == 0 else f"{e_count} EMOJI LEFT!"
    print(f"{f}: {status}  ({s_count} SVGs)")

print(f"\nTOTAL: {total_e} remaining emoji / {total_s} SVG icons")
