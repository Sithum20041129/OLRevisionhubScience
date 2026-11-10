/**
 * Complete Grade 11 Science - Unit 7 (Acids, Bases and Salts) Revision Guide Notes
 * Strictly aligned with the National Institute of Education (NIE) Official Curriculum.
 */

export const unit7RevisionData = {
  unitId: "g11-u7",
  unitNumber: 7,
  grade: 11,
  medium: "English",
  titleEn: "Acids, Bases and Salts",
  titleSi: "අම්ල, භස්ම හා ලවණ",
  textbookCode: "ENG11U07",
  textbookPages: "Pages 190 - 208",
  overviewEn: "This unit covers the chemistry of acids, bases, and salts: definitions and ionization, chemical reactions of acids with metals, metal oxides, and carbonates, classification of strong/weak acids and alkalis, solubility rules of salts and preparation methods, acid-base indicators, the pH scale, neutralisation mechanisms (H⁺ + OH⁻ ──> H₂O), and real-world industrial and biological applications.",

  // High-yield syllabus summary points
  summaryPoints: [
    "An acid produces hydrogen ions (H⁺ or hydronium ions H₃O⁺) when dissolved in water; a base produces hydroxide ions (OH⁻) in aqueous solution (alkali).",
    "Strong acids (HCl, HNO₃, H₂SO₄) ionize completely in aqueous solution; weak acids (CH₃COOH, H₂CO₃) ionize only partially.",
    "Acid reactions: (1) Acid + Reactive Metal ──> Salt + Hydrogen gas (H₂, burns with 'pop' sound); (2) Acid + Metal Oxide / Hydroxide ──> Salt + Water; (3) Acid + Carbonate / Bicarbonate ──> Salt + Water + Carbon Dioxide (CO₂, turns lime water milky).",
    "Safety rule: Always add concentrated acid slowly to water down the side of the container with continuous stirring; NEVER pour water directly into concentrated acid (causes violent boiling and acid splattering).",
    "Alkalis are water-soluble bases (e.g., NaOH, KOH, Ca(OH)₂, NH₄OH); all alkalis are bases, but not all bases are alkalis (e.g., Cu(OH)₂ and Fe(OH)₃ are insoluble bases).",
    "A salt is an ionic compound formed when the replaceable hydrogen ions of an acid are partially or completely substituted by a metal or ammonium ion (NH₄⁺).",
    "Water solubility rules: All nitrates, sodium, potassium, and ammonium salts are soluble; all chlorides are soluble except AgCl and PbCl₂; all sulfates are soluble except BaSO₄, PbSO₄, and CaSO₄ (sparingly).",
    "Neutralisation ionic equation: H⁺(aq) + OH⁻(aq) ──> H₂O(l) (an exothermic process).",
    "Indicator colours: Litmus is red in acid, blue in base; Methyl orange is red/pink in acid, yellow in base; Phenolphthalein is colourless in acid, bright pink in base.",
    "The pH scale runs from 0 to 14: pH < 7 is acidic, pH = 7 is neutral (pure water at 25°C), and pH > 7 is alkaline/basic.",
    "Applications of neutralisation: Relieving gastric hyperacidity using antacids (Mg(OH)₂ / Al(OH)₃), neutralizing acidic agricultural soils with slaked lime (Ca(OH)₂) or crushed limestone (CaCO₃), neutralizing bee stings (acidic) with baking soda, and neutralizing wasp stings (alkaline) with vinegar."
  ],

  subtopics: [
    {
      id: "7.1",
      order: 1,
      titleEn: "Acids & Chemical Reactions",
      titleSi: "අම්ල සහ රසායනික ප්‍රතික්‍රියා",
      textbookSection: "Section 7.1 (Pages 190 - 193)",
      readingTimeMinutes: 9,
      keyTakeaways: [
        "Acids taste sour, have pH < 7, conduct electricity in aqueous solution, and turn blue litmus red.",
        "Mineral acids: Hydrochloric acid (HCl), Sulfuric acid (H₂SO₄), Nitric acid (HNO₃).",
        "Organic acids: Acetic acid (ethanoic acid in vinegar), Citric acid (citrus fruits), Tartaric acid (tamarind), Lactic acid (curd).",
        "Strong acids ionize 100% in water: HCl ──> H⁺ + Cl⁻; Weak acids ionize reversibly and incompletely: CH₃COOH ⇌ CH₃COO⁻ + H⁺.",
        "Reaction with metals: Mg + 2HCl ──> MgCl₂ + H₂↑ (Gas tested by a lighted wooden splint extinguished with a 'pop' sound).",
        "Reaction with carbonates: CaCO₃ + 2HCl ──> CaCl₂ + H₂O + CO₂↑ (Gas turns clear lime water Ca(OH)₂ milky due to CaCO₃ precipitate).",
        "Concentrated H₂SO₄ is a powerful dehydrating agent, removing elements of water (H and O) from sugar, paper, and skin, leaving black carbon."
      ],
      keyDefinitions: [
        {
          term: "Acid",
          definition: "A chemical substance that dissolves in water to release hydrogen ions (H⁺) or hydronium ions (H₃O⁺) as the only positive ions in solution."
        },
        {
          term: "Strong Acid",
          definition: "An acid that undergoes complete (100%) dissociation into ions when dissolved in aqueous solution (e.g., HCl, HNO₃, H₂SO₄)."
        },
        {
          term: "Weak Acid",
          definition: "An acid that undergoes only partial or incomplete dissociation into ions in aqueous solution, existing in dynamic equilibrium with undissociated molecules (e.g., CH₃COOH, H₂CO₃)."
        },
        {
          term: "Basicity of an Acid",
          definition: "The number of replaceable hydrogen ions (H⁺) that one molecule of the acid can produce upon ionization in water (Monobasic: HCl; Dibasic: H₂SO₄; Tribasic: H₃PO₄)."
        }
      ],
      sections: [
        {
          heading: "7.1.1 Classification of Acids & Ionization",
          content: "### Nature of Acids:\nAcids are molecular compounds containing ionizable hydrogen atoms. In aqueous media, the polar water molecules attract H⁺ ions to form hydronium ions:\n- **HCl + H₂O ──> H₃O⁺ + Cl⁻**\n\n### Classification of Acids:\n1. **By Origin**:\n   - **Mineral (Inorganic) Acids**: Synthesized from minerals (HCl, H₂SO₄, HNO₃, H₃PO₄). Mostly strong, highly corrosive.\n   - **Organic Acids**: Naturally present in plant and animal materials containing carboxyl groups (-COOH). Weak acids (Ethanoic acid, Citric acid, Tartaric acid, Malic acid in apples, Formic/methanoic acid in ant stings).\n2. **By Extent of Ionization**:\n   - **Strong Acids**: Dissociate completely into ions (HCl ──> H⁺ + Cl⁻).\n   - **Weak Acids**: Ionize partially, establishing an equilibrium (CH₃COOH ⇌ CH₃COO⁻ + H⁺).\n3. **By Basicity**:\n   - **Monobasic**: Yields 1 H⁺ per molecule (HCl, HNO₃, CH₃COOH).\n   - **Dibasic**: Yields 2 H⁺ per molecule (H₂SO₄, H₂CO₃).\n   - **Tribasic**: Yields 3 H⁺ per molecule (H₃PO₄).",
          diagram: {
            url: "/images/unit07/fig_7_1_common_acids.png",
            caption: "Figure 7.1: Common laboratory acids (hydrochloric, sulfuric, nitric) and safety handling requirements."
          }
        },
        {
          heading: "7.1.2 Characteristic Chemical Reactions of Acids",
          content: "### 1. Reaction with Reactive Metals:\n- Acids react with metals above hydrogen in the reactivity series (Mg, Zn, Fe, Al) to evolve **hydrogen gas**.\n- **Mg(s) + 2HCl(aq) ──> MgCl₂(aq) + H₂(g)**\n- **Zn(s) + H₂SO₄(aq) ──> ZnSO₄(aq) + H₂(g)**\n- *Identification of H₂*: A burning wooden splint placed at the mouth of the test tube burns with a characteristic **'pop' sound**.\n- *Note*: Unreactive metals below hydrogen (Cu, Ag, Au) do not react with dilute non-oxidizing acids.\n\n### 2. Reaction with Metal Oxides and Hydroxides (Bases):\n- **CuO(s) + 2HCl(aq) ──> CuCl₂(aq) [blue-green solution] + H₂O(l)**\n- **NaOH(aq) + HCl(aq) ──> NaCl(aq) + H₂O(l)**\n\n### 3. Reaction with Carbonates and Bicarbonates:\n- Rapid effervescence producing carbon dioxide gas:\n- **CaCO₃(s) + 2HCl(aq) ──> CaCl₂(aq) + H₂O(l) + CO₂(g)**\n- **NaHCO₃(s) + HCl(aq) ──> NaCl(aq) + H₂O(l) + CO₂(g)**\n- *Identification of CO₂*: Bubbling CO₂ gas through clear **lime water (Ca(OH)₂)** turns it milky/cloudy due to the formation of insoluble calcium carbonate: **Ca(OH)₂ + CO₂ ──> CaCO₃(s) + H₂O**."
        }
      ]
    },
    {
      id: "7.2",
      order: 2,
      titleEn: "Bases & Alkalis",
      titleSi: "භස්ම සහ ක්ෂාර",
      textbookSection: "Section 7.2 (Pages 193 - 196)",
      readingTimeMinutes: 8,
      keyTakeaways: [
        "A base is a metal oxide or hydroxide that neutralizes an acid to form salt and water.",
        "An alkali is a base that is soluble in water, releasing hydroxide ions (OH⁻) as the only negative ions.",
        "Strong alkalis (NaOH, KOH) dissociate completely; weak alkalis (NH₄OH, Ca(OH)₂ sparingly) dissociate partially.",
        "All alkalis are bases, but not all bases are alkalis (e.g., CuO, Fe₂O₃, Cu(OH)₂ are insoluble bases).",
        "Alkalis have a bitter taste, slippery soapy feel, pH > 7, and turn red litmus blue.",
        "Reaction with ammonium salts: Warming an alkali with an ammonium salt releases ammonia gas (NH₃), recognizable by its sharp choking smell, which turns moist red litmus blue."
      ],
      keyDefinitions: [
        {
          term: "Base",
          definition: "Any metal oxide or metal hydroxide that chemically reacts with an acid to produce a salt and water as the sole products."
        },
        {
          term: "Alkali",
          definition: "A water-soluble base that dissolves in aqueous solution to liberate hydroxide ions (OH⁻) as the only negative ions."
        },
        {
          term: "Strong Alkali",
          definition: "An alkali that undergoes complete (100%) dissociation into metal cations and hydroxide ions in aqueous solution (e.g., Sodium hydroxide NaOH, Potassium hydroxide KOH)."
        },
        {
          term: "Weak Alkali",
          definition: "An alkali that undergoes only partial dissociation in aqueous solution, yielding a low concentration of hydroxide ions (e.g., Ammonium hydroxide NH₄OH)."
        }
      ],
      sections: [
        {
          heading: "7.2.1 Nature of Bases, Alkalis & Chemical Properties",
          content: "### Distinguishing Bases from Alkalis:\n- **Base**: Broad chemical class including all metal oxides (Na₂O, CaO, MgO, CuO, Fe₂O₃) and metal hydroxides (NaOH, KOH, Ca(OH)₂, Cu(OH)₂, Fe(OH)₃).\n- **Alkali**: Subset of bases that dissolve readily in water to yield hydroxide ions:\n  - **NaOH(s) ──> Na⁺(aq) + OH⁻(aq)**\n  - **KOH(s) ──> K⁺(aq) + OH⁻(aq)**\n- *Important Rule*: **All alkalis are bases, but not all bases are alkalis.**\n\n### Chemical Properties of Alkalis:\n1. **Reaction with Acids**: Alkalis neutralize acids to form salt and water (**NaOH + HCl ──> NaCl + H₂O**).\n2. **Reaction with Ammonium Salts**:\n   - When an alkali is heated with a solid ammonium salt, **ammonia gas (NH₃)** is released:\n   - **NH₄Cl(s) + NaOH(aq) ──> NaCl(aq) + H₂O(l) + NH₃(g)**\n   - **Ammonia Identification**: Pungent, choking odor; turns moist red litmus paper blue; forms dense white fumes of NH₄Cl when a glass rod dipped in concentrated HCl is brought near.\n3. **Caustic Effect**: Concentrated alkalis (caustic soda NaOH, caustic potash KOH) attack and dissolve animal protein tissues, requiring protective rubber gloves and goggles."
        }
      ]
    },
    {
      id: "7.3",
      order: 3,
      titleEn: "Salts & Solubility Rules",
      titleSi: "ලවණ සහ ද්‍රාව්‍යතා නීති",
      textbookSection: "Section 7.3 (Pages 197 - 201)",
      readingTimeMinutes: 9,
      keyTakeaways: [
        "A salt is formed when the replaceable H⁺ ions of an acid are replaced by metal ions or ammonium ions.",
        "Normal salts: all replaceable H⁺ ions are replaced (e.g., NaCl, K₂SO₄, NaNO₃).",
        "Acid salts: only part of replaceable H⁺ ions are replaced (e.g., NaHCO₃, NaHSO₄).",
        "Basic salts: contain unreacted OH⁻ or O²⁻ ions (e.g., Mg(OH)Cl, BiOCl).",
        "Solubility rules: All nitrates (NO₃⁻) and ammonium/sodium/potassium salts are 100% soluble in water.",
        "Insoluble salts include AgCl, PbCl₂ (soluble in hot water), BaSO₄, PbSO₄, and most carbonates (except Na⁺, K⁺, NH₄⁺).",
        "Soluble salts are prepared by acid + metal, acid + carbonate, or acid + alkali titration; insoluble salts are prepared by precipitation (double decomposition)."
      ],
      keyDefinitions: [
        {
          term: "Salt",
          definition: "An ionic chemical compound formed when one or more of the ionizable hydrogen ions of an acid are replaced by a metal cation or ammonium ion (NH₄⁺)."
        },
        {
          term: "Normal Salt",
          definition: "A salt that contains neither replaceable hydrogen ions nor hydroxide ions, formed by the complete neutralisation of an acid by a base (e.g., NaCl, Na₂SO₄)."
        },
        {
          term: "Acid Salt",
          definition: "A salt that still retains replaceable hydrogen ions in its chemical formula, formed by the incomplete neutralisation of a polybasic acid (e.g., NaHCO₃, NaHSO₄)."
        },
        {
          term: "Precipitation Reaction",
          definition: "A chemical reaction between two clear soluble salt solutions that combine to form an insoluble solid product called a precipitate."
        }
      ],
      sections: [
        {
          heading: "7.3.1 Types of Salts & General Solubility Rules",
          content: "### Classification of Salts:\n1. **Normal Salts**: Formed by complete replacement of all acidic protons (NaCl, KNO₃, MgSO₄, (NH₄)₂SO₄). Solutions may be neutral, acidic, or basic depending on parent acid/base strength.\n2. **Acid Salts**: Formed when a polybasic acid is only partially neutralized (Sodium bicarbonate NaHCO₃ from H₂CO₃; Sodium bisulfate NaHSO₄ from H₂SO₄).\n3. **Basic Salts**: Formed by partial neutralization of polyhydroxy bases (Basic copper carbonate CuCO₃·Cu(OH)₂, Basic magnesium chloride Mg(OH)Cl).\n\n### Essential Water Solubility Rules for O/L Science:\n- **Nitrates (NO₃⁻)**: All nitrates are soluble without exception.\n- **Sodium, Potassium, and Ammonium Salts (Na⁺, K⁺, NH₄⁺)**: All are completely soluble.\n- **Chlorides (Cl⁻)**: All soluble, **EXCEPT AgCl (white precipitate)** and **PbCl₂** (insoluble in cold water, dissolves in boiling water).\n- **Sulfates (SO₄²⁻)**: All soluble, **EXCEPT BaSO₄ (dense white precipitate)**, **PbSO₄**, and **CaSO₄** (sparingly soluble).\n- **Carbonates (CO₃²⁻)**: All insoluble, **EXCEPT Na₂CO₃, K₂CO₃, and (NH₄)₂CO₃**."
        },
        {
          heading: "7.3.2 Laboratory Preparation Methods for Salts",
          content: "### 1. Preparation of Soluble Salts:\n- **Method A (Acid + Excess Insoluble Base)**: Preparing Copper(II) sulfate (CuSO₄):\n  - Add excess black CuO powder to warm dilute H₂SO₄ until no more dissolves.\n  - Filter out excess unreacted CuO powder.\n  - Heat filtrate to crystallization point and cool slowly to obtain blue CuSO₄·5H₂O crystals.\n- **Method B (Acid + Excess Reactive Metal)**: Preparing Zinc sulfate (ZnSO₄):\n  - Zn(s) + H₂SO₄(aq) ──> ZnSO₄(aq) + H₂(g). Filter and crystallize.\n- **Method C (Acid + Excess Insoluble Carbonate)**: Preparing Calcium chloride (CaCl₂):\n  - CaCO₃(s) + 2HCl(aq) ──> CaCl₂(aq) + H₂O + CO₂↑.\n- **Method D (Titration: Acid + Soluble Alkali)**: Preparing Sodium chloride (NaCl):\n  - Titrate dilute HCl against NaOH using phenolphthalein indicator. Repeat without indicator using exact volumes and evaporate to dryness.\n\n### 2. Preparation of Insoluble Salts (Precipitation / Double Decomposition):\n- Mix two aqueous solutions containing the target cation and anion:\n- **BaCl₂(aq) + Na₂SO₄(aq) ──> BaSO₄(s) [white precipitate] + 2NaCl(aq)**\n- **AgNO₃(aq) + NaCl(aq) ──> AgCl(s) [curdy white precipitate] + NaNO₃(aq)**\n- Filter precipitate, wash thoroughly with distilled water, and dry in an oven."
        }
      ]
    },
    {
      id: "7.4",
      order: 4,
      titleEn: "Neutralisation, Indicators & pH",
      titleSi: "උදාසීනීකරණය, දර්ශක සහ pH අගය",
      textbookSection: "Section 7.4 (Pages 202 - 208)",
      readingTimeMinutes: 10,
      keyTakeaways: [
        "Neutralisation is the reaction between an acid and a base forming a salt and water: H⁺(aq) + OH⁻(aq) ──> H₂O(l).",
        "Neutralisation reactions are always exothermic (release heat, causing temperature rise).",
        "Indicators are weak organic dyes that change colour depending on hydrogen ion concentration.",
        "Litmus: Red in acid (pH < 7), Blue in base (pH > 7); Methyl Orange: Red in acid, Yellow in base; Phenolphthalein: Colourless in acid, Pink in base.",
        "The pH scale indicates acidity/alkalinity: pH 0-6 (acidic, lower pH = stronger acid), pH 7 (neutral), pH 8-14 (alkaline, higher pH = stronger base).",
        "Universal indicator exhibits a continuous colour spectrum corresponding to exact pH values from 1 to 14.",
        "Applications: Soil liming with slaked lime/limestone, antacid medication for heartburn, neutralizing acidic industrial factory waste, and treating insect stings."
      ],
      keyDefinitions: [
        {
          term: "Neutralisation",
          definition: "The chemical reaction between an acid and a base wherein hydrogen ions (H⁺) from the acid combine with hydroxide ions (OH⁻) from the base to form unionized water molecules and a salt."
        },
        {
          term: "Indicator",
          definition: "A chemical substance (usually a weak organic acid or base) that exhibits distinct characteristic colours in acidic and alkaline solutions."
        },
        {
          term: "pH Scale",
          definition: "A numerical logarithmic scale ranging from 0 to 14 used to measure the relative acidity, neutrality, or alkalinity of an aqueous solution based on its hydrogen ion concentration."
        },
        {
          term: "Universal Indicator",
          definition: "A blended mixture of several individual chemical indicators that displays a continuous spectrum of distinct colour changes across the entire pH range from 1 to 14."
        }
      ],
      sections: [
        {
          heading: "7.4.1 Mechanics of Neutralisation & Indicator Colours",
          content: "### Ionic Basis of Neutralisation:\nWhen an acid reacts with an alkali, the essential ionic reaction is the combination of hydrogen ions and hydroxide ions to form neutral water molecules:\n- **H⁺(aq) + OH⁻(aq) ──> H₂O(l)**\n- **Thermochemistry**: Every neutralisation between a strong acid and a strong base releases approximately **57.3 kJ mol⁻¹** of heat energy (exothermic).\n\n### Summary of Acid-Base Indicators:\n\n| Indicator | Colour in Strongly Acidic Solution | Colour in Neutral Solution | Colour in Strongly Alkaline Solution |\n| :--- | :--- | :--- | :--- |\n| **Litmus** | Red | Purple | Blue |\n| **Methyl Orange** | Red / Pink | Orange | Yellow |\n| **Phenolphthalein** | Colourless | Colourless | Vivid Magenta Pink |\n| **Universal Indicator** | Red (pH 1-2) / Orange (pH 3-4) | Green (pH 7) | Blue (pH 8-10) / Purple (pH 11-14) |",
          diagram: {
            url: "/images/unit07/fig_7_2_ph_scale.png",
            caption: "Figure 7.2: The pH scale from 0 to 14 showing universal indicator colour changes from strong acid (red) to neutral (green) to strong base (purple)."
          }
        },
        {
          heading: "7.4.2 Practical Applications of Neutralisation",
          content: "### Real-World Applications in Agriculture, Medicine, and Industry:\n1. **Treatment of Acidic Agricultural Soil**:\n   - Heavy rainfall and prolonged use of chemical nitrogenous fertilizers (ammonium sulfate) cause soil acidification, suppressing crop growth.\n   - Farmers apply **slaked lime (calcium hydroxide, Ca(OH)₂)** or powdered **limestone (calcium carbonate, CaCO₃)** to neutralise soil acidity.\n2. **Medical Treatment of Gastric Hyperacidity (Heartburn)**:\n   - Excess gastric secretion of hydrochloric acid irritates the stomach lining.\n   - **Antacid tablets/suspensions** contain mild, insoluble bases like **magnesium hydroxide (Milk of Magnesia, Mg(OH)₂)** or **aluminum hydroxide (Al(OH)₃)** that neutralise excess acid safely without harming tissues:\n   - **Mg(OH)₂ + 2HCl ──> MgCl₂ + 2H₂O**\n3. **Treatment of Insect Stings**:\n   - **Bee Stings and Ant Bites**: Contain acidic venom (formic/methanoic acid); treated by applying mild basic substances like **baking soda (sodium bicarbonate, NaHCO₃)** or calamine lotion (zinc carbonate).\n   - **Wasp Stings**: Contain alkaline venom; treated by applying a mild acid like **vinegar (ethanoic acid)** or lime juice.\n4. **Industrial Effluent Treatment**:\n   - Acidic wastewater from electroplating, fertilizer, and textile factories is treated with calcium hydroxide slurry (lime) before being discharged into public waterways, preventing destruction of aquatic ecosystems.",
          diagram: {
            url: "/images/unit07/fig_7_3_neutralisation.png",
            caption: "Figure 7.3: Acid-base neutralisation reaction apparatus and temperature monitoring."
          }
        }
      ]
    }
  ]
};

