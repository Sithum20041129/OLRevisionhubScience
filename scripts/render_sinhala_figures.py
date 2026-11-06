import pypdfium2 as pdfium
import os

pdf_path = 'Textbooks/SIN11U15.pdf'
pdf = pdfium.PdfDocument(pdf_path)

out_dir = 'public/images/unit15/si'
os.makedirs(out_dir, exist_ok=True)

# Page indices are 0-based: Book Page 168 = SIN11U15 page 2 -> index 1
figures_config = [
    {"id": "fig_15_1_si_organizational_levels", "page": 1, "box": (50, 80, 1150, 480), "title": "ජීවගෝලයේ සංවිධාන මට්ටම්"},
    {"id": "fig_15_2_si_pond_interactions", "page": 2, "box": (50, 80, 1150, 460), "title": "පොකුණු පරිසර පද්ධතියක අන්තර්ක්‍රියා"},
    {"id": "fig_15_3_si_population_factors", "page": 2, "box": (50, 950, 1150, 1480), "title": "ගහන ඝනත්වයට බලපාන ප්‍රධාන සාධක"},
    {"id": "fig_15_4_si_growth_curve", "page": 3, "box": (50, 600, 1150, 1150), "title": "දර්ශීය ගහන වර්ධන වක්‍රය"},
    {"id": "fig_15_5_si_human_population_curve", "page": 4, "box": (50, 80, 1150, 700), "title": "මානව ගහන වර්ධන වක්‍රය"},
    {"id": "fig_15_7_si_food_web", "page": 5, "box": (50, 150, 1150, 950), "title": "ආහාර ජාලයකට නිදසුනක්"},
    {"id": "fig_15_8_si_food_chain", "page": 6, "box": (50, 80, 1150, 650), "title": "ආහාර දාමයකට නිදසුනක්"},
    {"id": "fig_15_10_11_12_si_pyramids", "page": 8, "box": (50, 80, 1150, 1500), "title": "පාරිසරික පිරමිඩ (සංඛ්‍යා හා ජෛව ස්කන්ධ)"},
    {"id": "fig_15_13_si_energy_pyramid", "page": 9, "box": (50, 80, 1150, 700), "title": "ශක්ති පිරමිඩය හා 10% නියමය"},
    {"id": "fig_15_14_si_energy_dissipation", "page": 10, "box": (50, 80, 1150, 700), "title": "ගවයකුගේ ශක්ති උත්සර්ජනය"},
    {"id": "fig_15_17_si_carbon_cycle", "page": 11, "box": (50, 150, 1150, 1050), "title": "කාබන් චක්‍රය"},
    {"id": "fig_15_18_si_nitrogen_cycle", "page": 12, "box": (50, 150, 1150, 1250), "title": "නයිට්‍රජන් චක්‍රය"},
    {"id": "fig_15_20_si_greenhouse_effect", "page": 16, "box": (50, 80, 1150, 750), "title": "හරිතාගාර ආචරණය"},
    {"id": "fig_15_23_si_acid_rain", "page": 19, "box": (50, 80, 1150, 750), "title": "අම්ල වැසි ඇතිවීම හා හානි"},
    {"id": "fig_15_28_si_global_warming", "page": 27, "box": (50, 80, 1150, 650), "title": "ගෝලීය උණුසුම් වීම නිසා සිදුවන පාරිසරික වෙනස්වීම්"},
    {"id": "fig_15_29_30_si_smog_biomagnification", "page": 28, "box": (50, 80, 1150, 1400), "title": "ප්‍රභා රසායනික ධූමිකාව සහ ජෛව එක්රැස් වීම"},
    {"id": "fig_15_31_si_eutrophication", "page": 29, "box": (50, 80, 1150, 700), "title": "සුපෝෂණයට ලක් වූ ජලාශයක්"},
    {"id": "fig_15_38_39_si_tank_system", "page": 40, "box": (50, 80, 1150, 1450), "title": "වාරි තාක්ෂණ යෙදූ වැව් ඉවුර සහ ප්‍රධාන අංග"},
    {"id": "fig_15_40_si_sluice_gate", "page": 41, "box": (50, 80, 1150, 950), "title": "පැරණි බිසෝ කොටුව සහ සොරොව්ව"},
    {"id": "fig_15_41_si_water_footprint", "page": 43, "box": (50, 750, 1150, 1450), "title": "ආහාර ද්‍රව්‍ය කිහිපයක ජල පා සටහන"}
]

for cfg in figures_config:
    page_idx = cfg["page"]
    page = pdf[page_idx]
    img = page.render(scale=2).to_pil()
    w, h = img.size
    
    b = cfg["box"]
    x0 = max(0, min(w, b[0]))
    y0 = max(0, min(h, b[1]))
    x1 = max(0, min(w, b[2]))
    y1 = max(0, min(h, b[3]))
    
    cropped = img.crop((x0, y0, x1, y1))
    out_filename = f"{cfg['id']}.png"
    out_path = os.path.join(out_dir, out_filename)
    cropped.save(out_path, "PNG", optimize=True)
    print(f"Saved Sinhala Figure: {out_filename} ({cropped.size})")

print("All Sinhala figure crops rendered successfully!")

