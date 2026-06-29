#!/usr/bin/env python3
"""
Reorder models in main.js:
- Language models: Chinese first (deepseek, kimi, qwen, ernie, doubao, glm, minimax-m3), then international
- Agent platforms: Chinese first (bailian, coze, workbuddy, windclaw), then international
- Image models: Chinese first (jimeng), then international
- Video models: Chinese first (kling, hailuo-video), then international
- Code models: Chinese first (tongyi-lingma, comate), then international
- AI tools: no change (all international)
"""

import re

MAIN_JS = '../js/main.js'

# Desired order per category (listed as model IDs)
CATEGORY_ORDER = {
    '语言模型': ['deepseek', 'kimi', 'qwen', 'ernie', 'doubao', 'glm', 'minimax-m3',
                 'chatgpt', 'claude', 'gemini', 'llama'],
    'Agent平台': ['bailian', 'coze', 'workbuddy', 'windclaw', 'dify', 'manus', 'n8n'],
    '图像模型': ['jimeng', 'midjourney', 'dalle', 'stable-diffusion', 'flux'],
    '视频模型': ['kling', 'hailuo-video', 'sora', 'runway', 'pika', 'veo'],
    '代码模型': ['tongyi-lingma', 'comate', 'codex', 'claude-code', 'github-copilot', 'cursor', 'windsurf'],
}

def main():
    with open(MAIN_JS, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find models array boundaries
    start_marker = 'const models = [\n'
    start_idx = content.index(start_marker)

    # Find the closing ]; that ends the models array
    # Look for the first ]; at the start of a line after the array starts
    end_pattern = re.compile(r'^\];', re.MULTILINE)
    end_match = end_pattern.search(content, start_idx)
    if not end_match:
        print("ERROR: Could not find end of models array")
        return
    end_idx = end_match.start()

    # Extract before and after
    before = content[:start_idx + len(start_marker)]
    array_text = content[start_idx + len(start_marker):end_idx]
    after = content[end_idx:]

    # Split array into individual model objects
    # Each model starts with a line containing only whitespace + '{'
    # and ends right before the next model starts
    model_blocks = []
    current_block = []
    depth = 0
    in_block = False
    for line in array_text.split('\n'):
        stripped = line.strip()
        if stripped == '{' and not in_block:
            in_block = True
            current_block = [line]
            depth = 1
        elif in_block:
            current_block.append(line)
            depth += stripped.count('{') - stripped.count('}')
            # Count braces properly, considering strings
            brace_count = 0
            in_string_single = False
            in_string_double = False
            in_template = False
            prev_char = ''
            for ch in stripped:
                if prev_char != '\\':
                    if ch == "'" and not in_string_double and not in_template:
                        in_string_single = not in_string_single
                    elif ch == '"' and not in_string_single and not in_template:
                        in_string_double = not in_string_double
                    elif ch == '`' and not in_string_single and not in_string_double:
                        in_template = not in_template
                if not in_string_single and not in_string_double and not in_template:
                    if ch == '{': brace_count += 1
                    elif ch == '}': brace_count -= 1
                prev_char = ch
            depth += brace_count
            if depth <= 0:
                model_blocks.append('\n'.join(current_block))
                current_block = []
                in_block = False

    print(f"Found {len(model_blocks)} model blocks")

    if len(model_blocks) != 44:
        print(f"WARNING: Expected 44 models, found {len(model_blocks)}")

    # Extract id from each block
    id_pattern = re.compile(r'id:\s*"([^"]+)"')
    blocks_with_ids = []
    for block in model_blocks:
        m = id_pattern.search(block)
        if m:
            blocks_with_ids.append((m.group(1), block))
        else:
            print(f"WARNING: Could not find id in block")

    # Extract category from each block
    cat_pattern = re.compile(r'category:\s*"([^"]+)"')
    id_to_block = {}
    id_to_category = {}
    for mid, block in blocks_with_ids:
        id_to_block[mid] = block
        m = cat_pattern.search(block)
        id_to_category[mid] = m.group(1) if m else 'unknown'

    print("Categories found:", set(id_to_category.values()))

    # Build new order
    new_order_ids = []

    for cat, order_ids in CATEGORY_ORDER.items():
        for mid in order_ids:
            if mid in id_to_block and id_to_category.get(mid) == cat:
                new_order_ids.append(mid)

    # Add any models not covered by CATEGORY_ORDER (preserve their relative order)
    remaining = [mid for mid, _ in blocks_with_ids if mid not in new_order_ids]
    new_order_ids.extend(remaining)

    # Verify
    print(f"\nNew order ({len(new_order_ids)} models):")
    for mid in new_order_ids:
        print(f"  {mid} ({id_to_category.get(mid, '?')})")

    # Build new array text
    new_blocks = [id_to_block[mid] for mid in new_order_ids if mid in id_to_block]
    new_array_text = '\n'.join(new_blocks)

    # Reconstruct file
    new_content = before + new_array_text + after

    with open(MAIN_JS, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"\n✅ Reordered {len(new_blocks)} models and wrote to {MAIN_JS}")

    # Verify categories are still grouped
    prev_cat = None
    for mid in new_order_ids:
        cat = id_to_category.get(mid, '?')
        if cat != prev_cat:
            print(f"\n--- {cat} ---")
            prev_cat = cat
        print(f"  {mid}")

if __name__ == '__main__':
    main()
