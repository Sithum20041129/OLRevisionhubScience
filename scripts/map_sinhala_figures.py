import pypdf
import re

reader = pypdf.PdfReader('Textbooks/science 11 p-II S.pdf')
# Start page in book is 179 (0-index 178)
start_page = 178

for i in range(50):
    page_idx = start_page + i
    if page_idx >= len(reader.pages): break
    t = reader.pages[page_idx].extract_text() or ''
    # find lines mentioning rEmh (Figure)
    figs = [line.strip() for line in t.split('\n') if 'rEmh' in line]
    print(f"Book Page {167+i} (SIN11U15 p.{i+1}): {figs[:3]}")

