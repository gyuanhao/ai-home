#!/usr/bin/env python3
"""Deploy the 2026-11-12 news draft into js/news-data.js.

- Prepends the day object from scripts/_draft_news.md to window.AIHomeNews.
- Applies the 45-day cutoff (drop date < 2026-09-28 for run day 2026-11-12).
- Preserves the existing flush-left per-object formatting (serialize each object
  individually with indent=4 and join with ',\\n').
- Writes a timestamped backup before overwriting.
"""
import json, os, re, shutil

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NEWS = os.path.join(BASE, 'js', 'news-data.js')
DRAFT = os.path.join(BASE, 'scripts', '_draft_news.md')
BAK = os.path.join(BASE, 'js', 'news-data.js.bak.deploy1112')

RUN_DATE = "2026-11-12"
CUTOFF = "2026-09-28"  # RUN_DATE - 45 days; drop date < CUTOFF

# 1) load new day object from draft
with open(DRAFT, encoding='utf-8') as f:
    draft = f.read()
m = re.search(r"```js\s*(.*?)\s*```", draft, re.DOTALL)
obj_text = m.group(1).strip()
new_obj = json.loads(obj_text)
assert new_obj['date'] == RUN_DATE, new_obj['date']
print("Draft day object:", new_obj['date'], "| items:", len(new_obj['items']))

# 2) load existing array
with open(NEWS, encoding='utf-8') as f:
    raw = f.read()
idx = raw.index('window.AIHomeNews')
header = raw[:idx]
arr_start = raw.index('[', idx)
arr_end = raw.rindex(']')  # last ']' closes the main array
arr_text = raw[arr_start:arr_end + 1]
data = json.loads(arr_text)
print("Existing days:", len(data), "| first:", data[0]['date'], "| last:", data[-1]['date'])

# 3) dedupe: skip if date already present
existing_dates = {d['date'] for d in data}
if new_obj['date'] in existing_dates:
    print("SKIP: date already present", new_obj['date'])
else:
    data.insert(0, new_obj)

# 4) 45-day cutoff filter
kept = [d for d in data if d['date'] >= CUTOFF]
dropped = [d['date'] for d in data if d['date'] < CUTOFF]
data = kept
print("Dropped (date <", CUTOFF, "):", dropped)

# 5) serialize preserving flush-left per-object format
def ser(o):
    return json.dumps(o, ensure_ascii=False, indent=4)

body = ",\n".join(ser(d) for d in data)
out = header + "window.AIHomeNews = [\n" + body + "\n];\n"

# 6) backup + write
shutil.copyfile(NEWS, BAK)
with open(NEWS, 'w', encoding='utf-8') as f:
    f.write(out)

# 7) verify by re-reading
with open(NEWS, encoding='utf-8') as f:
    v = f.read()
vi = v.index('window.AIHomeNews')
va = v[v.index('[', vi):v.rindex(']') + 1]
vdata = json.loads(va)
total_items = sum(len(d['items']) for d in vdata)
print("VERIFY days:", len(vdata), "| first:", vdata[0]['date'],
      "| last:", vdata[-1]['date'], "| total items:", total_items)
print("BACKUP:", BAK)
