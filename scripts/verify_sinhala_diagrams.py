import os
import re

with open('src/data/subtopicNotes/g11-u15-si.js', 'r', encoding='utf-8') as f:
    txt = f.read()

urls = re.findall(r'diagramUrl:\s*"([^"]+)"', txt)
print(f"Total Sinhala diagram URLs: {len(urls)}")
for u in urls:
    full_path = os.path.normpath(os.path.join('public', u.lstrip('/')))
    exists = os.path.exists(full_path)
    size = os.path.getsize(full_path) if exists else 0
    print(f"[{'PASS' if exists else 'FAIL'}] {u} -> {full_path} ({size} bytes)")

