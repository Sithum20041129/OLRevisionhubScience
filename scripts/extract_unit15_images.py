import pypdf
import os

pdf_path = 'Textbooks/science G-11  P-II E.pdf'
reader = pypdf.PdfReader(pdf_path)

out_dir = 'public/images/unit15'
os.makedirs(out_dir, exist_ok=True)

start_page = 177 - 1
end_page = 221 - 1

saved_count = 0
for page_idx in range(start_page, end_page + 1):
    page = reader.pages[page_idx]
    rel_page = page_idx - start_page + 1
    for img_idx, img in enumerate(page.images):
        ext = img.name.split('.')[-1] if '.' in img.name else 'png'
        filename = f"p{rel_page}_{img_idx+1}_{img.name}"
        # save only reasonable size images
        if len(img.data) > 1000: # larger than 1KB
            out_path = os.path.join(out_dir, filename)
            with open(out_path, 'wb') as f:
                f.write(img.data)
            saved_count += 1
            print(f"Saved: {filename} ({len(img.data)} bytes) from page {rel_page}")

print(f"Total images saved: {saved_count}")

