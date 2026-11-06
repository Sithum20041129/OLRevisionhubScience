import pypdf
import os

pdf_path = 'Textbooks/science G-11  P-II E.pdf'
reader = pypdf.PdfReader(pdf_path)

# Pages 177 to 221 (0-indexed: 176 to 220)
start_page = 177 - 1
end_page = 221 - 1

out_file = 'docs/unit15_full_text.txt'
with open(out_file, 'w', encoding='utf-8') as f:
    for page_idx in range(start_page, end_page + 1):
        txt = reader.pages[page_idx].extract_text() or ''
        f.write(f"\n\n==================== UNIT 15 PAGE {page_idx - start_page + 1} (Book Page {page_idx + 1}) ====================\n\n")
        f.write(txt)

print(f"Extracted {end_page - start_page + 1} pages to {out_file}")

