import pypdf
import os

pdf_path = 'Textbooks/ENG11U15.pdf'
reader = pypdf.PdfReader(pdf_path)

out_file = 'docs/unit15_textbook_extracted.txt'
with open(out_file, 'w', encoding='utf-8') as f:
    for i, p in enumerate(reader.pages):
        text = p.extract_text() or ''
        f.write(f"\n\n==================== PAGE {i+1} ====================\n\n")
        f.write(text)

print(f"Extracted {len(reader.pages)} pages to {out_file}")

