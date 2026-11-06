import pypdf
import re

reader = pypdf.PdfReader('Textbooks/science G-11  P-II E.pdf')
# Start page in book is 177 (0-index 176)
start_page = 176

for i in range(45):
    page_text = reader.pages[start_page + i].extract_text() or ''
    figs = re.findall(r'(Figure 15\.\d+[^-\n]*-[^\n]+)', page_text)
    headings = re.findall(r'(15\.\d+(?:\.\d+)?\s+[^\n]+)', page_text)
    activities = re.findall(r'(Activity 15\.\d+)', page_text)
    print(f"PDF Page {i+1} (Book p.{177+i}):")
    if headings:
        print(f"   Headings: {headings}")
    if figs:
        print(f"   Figures: {figs}")
    if activities:
        print(f"   Activities: {activities}")

