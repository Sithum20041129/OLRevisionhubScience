import pypdfium2 as pdfium
import os
from PIL import Image

pdf_path = 'Textbooks/ENG11U15.pdf'
pdf = pdfium.PdfDocument(pdf_path)

out_dir = 'public/images/unit15'
os.makedirs(out_dir, exist_ok=True)

# Render full pages at 2x scale (approx 150 DPI) or 2.5x
# Page index is 0-based

figures_config = [
    {"id": "fig_15_1_organizational_levels", "page": 1, "box": (50, 80, 1150, 480), "title": "Organizational Levels in Biosphere"},
    {"id": "fig_15_2_pond_interactions", "page": 2, "box": (50, 80, 1150, 460), "title": "Interactions in a Pond Ecosystem"},
    {"id": "fig_15_3_population_factors", "page": 2, "box": (50, 950, 1150, 1480), "title": "Factors Affecting Population Density"},
    {"id": "fig_15_4_growth_curve", "page": 3, "box": (50, 600, 1150, 1150), "title": "Typical Population Growth Curve"},
    {"id": "fig_15_5_human_population_curve", "page": 4, "box": (50, 80, 1150, 700), "title": "Growth Curve of Human Population"},
    {"id": "fig_15_7_food_web", "page": 5, "box": (50, 150, 1150, 950), "title": "Food Web in an Ecosystem"},
    {"id": "fig_15_8_food_chain", "page": 6, "box": (50, 80, 1150, 650), "title": "Food Chain Trophic Levels"},
    {"id": "fig_15_10_11_12_pyramids", "page": 8, "box": (50, 80, 1150, 1500), "title": "Ecological Pyramids (Number & Biomass)"},
    {"id": "fig_15_13_energy_pyramid", "page": 9, "box": (50, 80, 1150, 700), "title": "Energy Pyramid and 10% Law"},
    {"id": "fig_15_14_energy_dissipation", "page": 10, "box": (50, 80, 1150, 700), "title": "Energy Dissipation in Consumers"},
    {"id": "fig_15_17_carbon_cycle", "page": 11, "box": (50, 150, 1150, 1050), "title": "The Carbon Cycle"},
    {"id": "fig_15_18_nitrogen_cycle", "page": 12, "box": (50, 150, 1150, 1250), "title": "The Nitrogen Cycle"},
    {"id": "fig_15_20_greenhouse_effect", "page": 15, "box": (50, 80, 1150, 750), "title": "Greenhouse Effect Mechanism"},
    {"id": "fig_15_23_acid_rain", "page": 18, "box": (50, 80, 1150, 750), "title": "Acid Rain Formation and Effects"},
    {"id": "fig_15_28_global_warming", "page": 25, "box": (50, 80, 1150, 650), "title": "Global Warming Key Indicators"},
    {"id": "fig_15_29_30_smog_biomagnification", "page": 26, "box": (50, 80, 1150, 1400), "title": "Photochemical Smog and Biomagnification"},
    {"id": "fig_15_31_eutrophication", "page": 27, "box": (50, 80, 1150, 700), "title": "Eutrophicated Water Body"},
    {"id": "fig_15_38_39_tank_system", "page": 37, "box": (50, 80, 1150, 1450), "title": "Ancient Sri Lankan Tank Bund and Major Parts"},
    {"id": "fig_15_40_sluice_gate", "page": 38, "box": (50, 80, 1150, 950), "title": "Ancient Sluice Gate (Bisokotuwa & Sorowwa)"},
    {"id": "fig_15_41_water_footprint", "page": 40, "box": (50, 750, 1150, 1450), "title": "Water Footprints of Several Foods"}
]

for cfg in figures_config:
    page_idx = cfg["page"]
    page = pdf[page_idx]
    # Render at 2x
    img = page.render(scale=2).to_pil()
    w, h = img.size
    
    # Crop if box is valid
    b = cfg["box"]
    # Clamp coordinates
    x0 = max(0, min(w, b[0]))
    y0 = max(0, min(h, b[1]))
    x1 = max(0, min(w, b[2]))
    y1 = max(0, min(h, b[3]))
    
    cropped = img.crop((x0, y0, x1, y1))
    out_filename = f"{cfg['id']}.png"
    out_path = os.path.join(out_dir, out_filename)
    cropped.save(out_path, "PNG", optimize=True)
    print(f"Saved: {out_filename} ({cropped.size})")

print("All figure crops rendered successfully!")

