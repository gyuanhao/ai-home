"""Sync corrected models.json data into js/main.js.
Reads the fixed models from scripts/models.json, preserves the JS logic
after the models array (line 1777+), and writes a fresh js/main.js."""

import json
from pathlib import Path

PROJECT = Path(r"C:\Users\gyu\WorkBuddy\2026-06-11-09-27-51\ai-home")

# Load corrected data
with open(PROJECT / "scripts" / "models.json", "r", encoding="utf-8") as f:
    models = json.load(f)

# Read js/main.js and extract the function code (after the models array)
with open(PROJECT / "js" / "main.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

# Find the line that closes the models array  (];)
cut = None
for i, line in enumerate(lines):
    if line.strip() == "];":
        cut = i
        break

if cut is None:
    raise SystemExit("Could not find '];' closing models array in main.js")

# Lines after the array close are the JS functions
js_functions = "".join(lines[cut + 1:])

# Write new main.js
with open(PROJECT / "js" / "main.js", "w", encoding="utf-8") as f:
    f.write("// AI家AI户 - 模型数据\n")
    f.write("const models = ")
    json.dump(models, f, ensure_ascii=False, indent=8)
    f.write(";\n")
    f.write(js_functions)

print(f"✅ js/main.js regenerated — {len(models)} models synced, {len(js_functions)} chars of JS preserved")
