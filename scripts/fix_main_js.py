import json, re

with open(r'C:\Users\gyu\WorkBuddy\2026-06-11-09-27-51\ai-home\scripts\models.json', 'r', encoding='utf-8') as f:
    models = json.load(f)

with open(r'C:\Users\gyu\WorkBuddy\2026-06-11-09-27-51\ai-home\js\main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Build a map from model id to priceLabel, priceLabelEn, priceDetail, priceDetailEn, strengths, strengthsEn, weaknesses, weaknessesEn, chineseSupport, chineseSupportEn, bestFor, bestForEn
for m in models:
    mid = m['id']
    fields = ['priceLabel', 'priceLabelEn', 'priceDetail', 'priceDetailEn', 'strengths', 'strengthsEn', 'weaknesses', 'weaknessesEn', 'chineseSupport', 'chineseSupportEn', 'bestFor', 'bestForEn']
    for field in fields:
        val = m.get(field, '')
        if val == '':
            continue
        # Find the field in the JS content for this specific model
        # Use a regex that looks for the model id first, then the field within that model block
        # This is tricky because the models are in a single array.
        # We'll do a simple pattern: after "id": "{mid}" and before the next "id": or end of array
        pattern = re.compile(rf'("id"\s*:\s*"{re.escape(mid)}".*?)"{field}"\s*:\s*"([^"]*)"', re.DOTALL)
        match = pattern.search(content)
        if match:
            old_val = match.group(2)
            if old_val != val:
                # replace just this field
                start = match.start(2)
                end = match.end(2)
                new_content = content[:start] + val + content[end:]
                content = new_content
                print(f"  [{mid}] {field}: {old_val[:40]}... -> {val[:40]}...")
        else:
            # try for fields that might have escaped quotes or different structure
            pass

# Also handle fields with different values but same key (e.g. some models may not have bestForEn)
# Let's just do a more robust regex: find all model entries in the JS and replace them

# Actually, a simpler approach: replace all model entries in main.js with the generated JSON
# Find the start of the models array: const MODELS = [
# and the end: ];

models_start = content.find('const MODELS = [')
if models_start == -1:
    models_start = content.find('const MODELS =[')
models_end = content.find('];\n\n', models_start)
if models_end == -1:
    models_end = content.find('];', models_start)

if models_start == -1 or models_end == -1:
    print("Could not find MODELS array boundaries")
else:
    # Generate clean JS from models.json
    import json
    json_str = json.dumps(models, ensure_ascii=False, indent=2)
    # Replace Python's false/true/null with JS false/true/null (already correct)
    # indent=2 gives us 2 spaces, but we want 4 spaces to match the existing style if possible
    # Actually, let's just use json.dumps with 2 space indent and then indent by 2 more spaces
    lines = json_str.split('\n')
    indented = ["    " + line for line in lines]
    models_js = "\n".join(indented)
    
    # Replace the array content
    old_array = content[models_start + len('const MODELS = ['):models_end]
    new_content = content[:models_start + len('const MODELS = [')] + '\n' + models_js + '\n  ' + content[models_end:]
    
    # Wait, models_end is the position of the ] character, so we need to be careful
    # Let's just do a simpler replace
    pass

# Actually, let's just write the file back with the content we have
with open(r'C:\Users\gyu\WorkBuddy\2026-06-11-09-27-51\ai-home\js\main.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
