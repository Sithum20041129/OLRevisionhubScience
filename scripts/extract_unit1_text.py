import pypdf
import os

os.makedirs('docs', exist_ok=True)

# 1. English PDF
eng_path = 'Textbooks/ENG11U01.pdf'
eng_out = 'docs/unit01_textbook_extracted_en.txt'
if os.path.exists(eng_path):
    reader = pypdf.PdfReader(eng_path)
    with open(eng_out, 'w', encoding='utf-8') as f:
        for i, p in enumerate(reader.pages):
            text = p.extract_text() or ''
            f.write(f"\n\n==================== PAGE {i+1} ====================\n\n")
            f.write(text)
    print(f"Extracted {len(reader.pages)} pages from {eng_path} to {eng_out}")
else:
    print(f"File not found: {eng_path}")

# 2. Sinhala PDF
sin_path = 'Textbooks/SIN11U01.pdf'
sin_out = 'docs/unit01_textbook_extracted_si.txt'
if os.path.exists(sin_path):
    reader = pypdf.PdfReader(sin_path)
    with open(sin_out, 'w', encoding='utf-8') as f:
        for i, p in enumerate(reader.pages):
            text = p.extract_text() or ''
            f.write(f"\n\n==================== PAGE {i+1} ====================\n\n")
            f.write(text)
    print(f"Extracted {len(reader.pages)} pages from {sin_path} to {sin_out}")
else:
    print(f"File not found: {sin_path}")

