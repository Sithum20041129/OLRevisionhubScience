/**
 * Complete Grade 11 Science - Unit 12 (Electrochemistry) Revision Guide Notes
 * Strictly aligned with the National Institute of Education (NIE) Official Curriculum.
 */

export const unit12RevisionData = {
  unitId: "g11-u12",
  unitNumber: 12,
  grade: 11,
  medium: "English",
  titleEn: "Electrochemistry",
  titleSi: "විද්‍යුත් රසායනය",
  textbookCode: "ENG11U12",
  textbookPages: "Pages 79 - 114",
  overviewEn: "This unit explores electrochemistry across three foundational domains: electrochemical cells (conversion of chemical energy into electrical energy in primary cells like the simple cell, Daniell cell, and dry cell, as well as secondary rechargeable lead-acid accumulators), electrolysis (conversion of electrical energy into chemical energy during the decomposition of molten salts, acidified water, and aqueous copper sulfate, with industrial applications in electroplating, metal refining, and extraction), and the electrochemical mechanism of metal corrosion (rusting of iron) along with practical prevention methods.",

  summaryPoints: [
    "An electrochemical cell produces electricity via spontaneous redox reactions between two dissimilar metal electrodes immersed in an electrolyte.",
    "Activity series of metals: K > Na > Ca > Mg > Al > Zn > Fe > Pb > (H) > Cu > Ag > Au. A greater gap between two metals in the activity series produces a higher electromotive force (EMF).",
    "In a Simple Voltaic Cell, Zinc acts as the negative terminal (anode, oxidation: Zn ──> Zn²⁺ + 2e⁻) and Copper acts as the positive terminal (cathode, reduction: 2H⁺ + 2e⁻ ──> H₂). Major drawbacks: polarization (H₂ gas accumulation on Cu) and local action (carbon impurities in Zn).",
    "The Daniell Cell eliminates polarization by separating the two half-cells (Zn in ZnSO₄ and Cu in CuSO₄) with a porous pot or salt bridge (containing KCl or KNO₃ in agar). Cell potential is approximately 1.1 V.",
    "A Leclanché Dry Cell produces 1.5 V, using a Zinc casing as anode, a Carbon rod as cathode, and a moist paste of NH₄Cl, ZnCl₂, and MnO₂ (depolarizer). It is a non-rechargeable primary cell.",
    "A Lead-Acid Accumulator is a rechargeable secondary cell (2.0 V per cell, 12 V for 6 cells in series) using Pb as anode, PbO₂ as cathode, and dilute H₂SO₄ (~30%, density 1.28 g cm⁻³) as electrolyte.",
    "Electrolysis is the chemical decomposition of an electrolyte caused by the passage of direct electric current. Cations migrate to the cathode (negative electrode) and gain electrons (reduction); Anions migrate to the anode (positive electrode) and lose electrons (oxidation).",
    "Electrolysis of acidified water using inert platinum/carbon electrodes produces Hydrogen gas at the cathode and Oxygen gas at the anode in a 2:1 volume ratio (2H₂O ──> 2H₂ + O₂).",
    "In electroplating, the article to be plated is always made the Cathode, the pure plating metal is made the Anode, and the electrolyte is an aqueous salt solution of the plating metal (e.g., CuSO₄ for copper plating).",
    "Corrosion of iron (rusting) requires both Oxygen and Water. Rust is hydrated iron(III) oxide (Fe₂O₃·xH₂O). Prevention methods include barrier coatings (painting, greasing), galvanization (sacrificial zinc coating), tin plating, and cathodic sacrificial protection (attaching Mg or Zn blocks to ship hulls and underground pipelines)."
  ],

  subtopics: [
    {
      id: "12.1",
      order: 1,
      titleEn: "Electrochemical Cells",
      titleSi: "විද්‍යුත් රසායනික කෝෂ",
      textbookSection: "Section 12.1 (Pages 79 - 85)",
      readingTimeMinutes: 10,
      keyTakeaways: [
        "Electrochemical cells convert chemical energy into electrical energy through spontaneous redox reactions.",
        "Primary cells (simple cell, Daniell cell, dry cell) cannot be recharged once chemical reactants are exhausted.",
        "Secondary cells (lead-acid accumulator, lithium-ion, Ni-Cd) can be recharged repeatedly by passing reverse electric current.",
        "Simple Voltaic cell: Zn plate is negative terminal (anode), Cu plate is positive terminal (cathode), dilute H₂SO₄ is electrolyte. Suffers from polarization (hydrogen gas insulation) and local action.",
        "Daniell cell: Zn plate in ZnSO₄ solution and Cu plate in CuSO₄ solution separated by a porous pot or salt bridge; maintains continuous steady 1.1 V without polarization.",
        "Dry cell: Zn container is anode, carbon rod is cathode, MnO₂ acts as chemical depolarizer to oxidize H₂ gas into water, delivering 1.5 V.",
        "Lead-acid accumulator: Lead (Pb) sponge anode, lead dioxide (PbO₂) cathode, dilute H₂SO₄ electrolyte (specific gravity 1.28 when fully charged, drops to 1.15 when discharged)."
      ],
      keyDefinitions: [
        {
          term: "Electrochemical Cell",
          definition: "A device that converts chemical energy directly into electrical energy through spontaneous reduction-oxidation (redox) reactions occurring at two dissimilar electrode surfaces in contact with an electrolyte."
        },
        {
          term: "Electromotive Force (EMF)",
          definition: "The maximum potential difference between the two electrodes of an electrochemical cell when no current is being drawn from the cell, measured in Volts (V)."
        },
        {
          term: "Primary Cell",
          definition: "An electrochemical cell in which the internal chemical reaction is non-reversible, meaning the cell cannot be electrically recharged and must be discarded after its reactants are exhausted."
        },
        {
          term: "Secondary Cell (Storage Battery)",
          definition: "An electrochemical cell in which the electrochemical reactions are fully reversible by passing a direct electric current through it in the reverse direction, enabling repeated recharging and reuse."
        },
        {
          term: "Salt Bridge",
          definition: "A U-tube containing an inert electrolyte (such as KCl or KNO₃ in agar gel) connecting two half-cells to complete the electrical circuit and maintain electrical neutrality by allowing ionic migration."
        }
      ],
      sections: [
        {
          heading: "12.1.1 The Activity Series & Simple Voltaic Cell",
          content: "### The Activity Series of Metals & Cell Potential:\n- When two different metals are immersed in an electrolyte and connected by a wire, electrons flow from the more reactive metal to the less reactive metal.\n- **Activity Series Order**: **K > Na > Ca > Mg > Al > Zn > Fe > Pb > (H) > Cu > Ag > Au**\n- The **further apart** the two metals are in the activity series, the **greater the electromotive force (EMF)** generated.\n\n### The Simple Voltaic Cell:\n- **Electrodes**: Zinc (Zn) strip and Copper (Cu) strip.\n- **Electrolyte**: Dilute Sulfuric acid (H₂SO₄).\n- **Reactions**:\n  - **Anode (Negative terminal - Zinc)**: Oxidation occurs; zinc dissolves into solution:\n    Zn(s) ──> Zn²⁺(aq) + 2e⁻\n  - **Cathode (Positive terminal - Copper)**: Reduction occurs; hydrogen ions gain electrons at the copper surface:\n    2H⁺(aq) + 2e⁻ ──> H₂(g)\n- **Major Defects of Simple Cell**:\n  1. **Polarization**: Hydrogen gas bubbles cling to the copper cathode, creating an insulating blanket of high internal resistance and back-EMF, causing current to drop rapidly.\n  2. **Local Action**: Impurities in zinc (such as Carbon or Iron) form micro-galvanic cells with zinc, dissolving the zinc plate continuously even when the external switch is open."
        },
        {
          heading: "12.1.2 Daniell Cell, Dry Cell & Lead-Acid Accumulator",
          content: "### The Daniell Cell:\n- Eliminates polarization by separating the oxidizing and reducing environments into two separate half-cells.\n- **Zinc Half-Cell**: Zinc plate immersed in aqueous Zinc Sulfate (ZnSO₄).\n- **Copper Half-Cell**: Copper plate immersed in aqueous Copper(II) Sulfate (CuSO₄).\n- **Separation**: A **porous ceramic pot** or an inverted **U-tube salt bridge** containing KCl/KNO₃ in agar gel.\n- **Half-Cell Reactions**:\n  - Anode: Zn(s) ──> Zn²⁺(aq) + 2e⁻\n  - Cathode: Cu²⁺(aq) + 2e⁻ ──> Cu(s)\n- **Overall Cell Reaction**: Zn(s) + Cu²⁺(aq) ──> Zn²⁺(aq) + Cu(s)\n- **EMF**: Produces a constant, steady potential of approximately **1.1 V**.\n\n### The Dry Cell (Leclanché Cell):\n- **Anode (-)**: Outer Zinc cylindrical can (Zn ──> Zn²⁺ + 2e⁻).\n- **Cathode (+)**: Central Carbon (graphite) rod with a brass cap.\n- **Electrolyte Paste**: Ammonium chloride (NH₄Cl), Zinc chloride (ZnCl₂), and starch paste.\n- **Depolarizer**: Manganese dioxide (MnO₂) mixed with powdered carbon surrounds the carbon rod. It oxidizes hydrogen gas into water (2MnO₂ + 2H⁺ + 2e⁻ ──> Mn₂O₃ + H₂O), preventing polarization.\n- **Output**: 1.5 V DC.\n\n### The Lead-Acid Accumulator (Secondary Storage Battery):\n- **Anode (-)**: Spongy metallic Lead (Pb).\n- **Cathode (+)**: Lead dioxide (PbO₂).\n- **Electrolyte**: Dilute Sulfuric acid (H₂SO₄, density ~1.28 g cm⁻³ when fully charged).\n- **Discharge Reaction**: Both plates convert into insoluble lead sulfate (PbSO₄) and water is formed, causing the density of sulfuric acid to drop toward 1.15 g cm⁻³:\n  Pb + PbO₂ + 2H₂SO₄ <──[Discharge / Charge]──> 2PbSO₄ + 2H₂O\n- Recharging reverses this reaction using a DC generator or adapter.",
          diagram: {
            url: "/images/unit12/fig_12_1_daniell_cell.png",
            caption: "Figure 12.1: The Daniell cell with zinc and copper electrodes separated by a porous pot, generating steady 1.1 V."
          }
        }
      ]
    },
    {
      id: "12.2",
      order: 2,
      titleEn: "Electrolysis",
      titleSi: "විද්‍යුත් විච්ඡේදනය",
      textbookSection: "Section 12.2 (Pages 86 - 99)",
      readingTimeMinutes: 12,
      keyTakeaways: [
        "Electrolysis is the decomposition of an electrolyte by passing direct electric current (DC) through it.",
        "Electrolytes contain mobile positive ions (cations) and negative ions (anions) in molten state or aqueous solution.",
        "Cathode is the negative electrode connected to battery (-); attracts cations which undergo reduction (gain electrons).",
        "Anode is the positive electrode connected to battery (+); attracts anions which undergo oxidation (lose electrons).",
        "Electrolysis of acidified water produces Hydrogen gas at the cathode and Oxygen gas at the anode in a 2:1 volume ratio.",
        "Electrolysis of aqueous CuSO₄ with carbon electrodes yields Oxygen at anode and Copper coating at cathode; with copper electrodes, anode dissolves and cathode gains copper while solution concentration remains constant.",
        "Industrial applications: Electroplating for corrosion prevention and decorative finish, purification of blister copper, and commercial extraction of reactive metals (Downs cell for Sodium, Hall-Héroult process for Aluminium)."
      ],
      keyDefinitions: [
        {
          term: "Electrolysis",
          definition: "The chemical process in which electrical energy from an external DC source drives non-spontaneous oxidation-reduction reactions, decomposing an electrolyte into simpler chemical substances."
        },
        {
          term: "Electrolyte",
          definition: "A chemical compound that conducts electricity in molten state or when dissolved in water due to the presence of mobile, freely migrating ions."
        },
        {
          term: "Cathode",
          definition: "The negative electrode in an electrolytic cell connected to the negative terminal of the DC power supply, at which cations gain electrons (reduction occurs)."
        },
        {
          term: "Anode",
          definition: "The positive electrode in an electrolytic cell connected to the positive terminal of the DC power supply, at which anions lose electrons (oxidation occurs)."
        },
        {
          term: "Electroplating",
          definition: "An industrial electrolytic process of depositing a thin, adherent, uniform layer of a superior metal (e.g., gold, silver, nickel, chromium, copper) onto the surface of a base conductive object."
        }
      ],
      sections: [
        {
          heading: "12.2.1 Principles of Electrolysis & Electrolysis of Water",
          content: "### Electrolytes vs Non-Electrolytes:\n- **Electrolytes**: Ionic or polar covalent substances that dissociate into free ions in liquid state (e.g., molten NaCl, dilute acids, aqueous salts).\n- **Non-Electrolytes**: Molecular covalent substances that do not form ions (e.g., pure distilled water, glucose solution, kerosene, ethanol).\n\n### General Mechanism of an Electrolytic Cell:\n- **Cathode (-)**: Connected to battery negative terminal. Cations migrate here and undergo **Reduction** (gain electrons):\n  Mⁿ⁺ + ne⁻ ──> M\n- **Anode (+)**: Connected to battery positive terminal. Anions migrate here and undergo **Oxidation** (lose electrons):\n  Xᵐ⁻ ──> X + me⁻\n\n### Electrolysis of Acidified Water:\n- Pure water is a very weak electrolyte ([H⁺] = [OH⁻] = 10⁻⁷ mol dm⁻³). Adding a few drops of dilute H₂SO₄ drastically increases conductivity.\n- **Ions present**: H⁺, OH⁻, SO₄²⁻.\n- **Cathode (-) Reaction**: Hydrogen ions are discharged preferentially:\n  2H⁺(aq) + 2e⁻ ──> H₂(g)\n- **Anode (+) Reaction**: Hydroxide ions are discharged preferentially over sulfate ions:\n  4OH⁻(aq) ──> 2H₂O(l) + O₂(g) + 4e⁻\n- **Gas Volume Ratio**: Hydrogen gas volume at cathode is exactly **twice (2:1)** the volume of Oxygen gas at anode:\n  2H₂O(l) ──> 2H₂(g) + O₂(g)",
          diagram: {
            url: "/images/unit12/fig_12_3_electrolysis_water.png",
            caption: "Figure 12.3: Electrolysis of acidified water showing 2:1 volume ratio of Hydrogen gas at cathode to Oxygen gas at anode."
          }
        },
        {
          heading: "12.2.2 Industrial Applications: Electroplating & Copper Refining",
          content: "### Golden Rules of Electroplating:\n1. **Object to be plated** is always connected as the **Cathode (-)**.\n2. **Plating metal** (pure copper, silver, nickel) is connected as the **Anode (+)**.\n3. **Electrolyte** must be a soluble aqueous salt solution of the plating metal (e.g., CuSO₄ for copper plating, AgNO₃ for silver plating).\n4. Current must be low-voltage steady DC (not AC) to ensure a smooth, durable, adherent coating.\n\n### Example: Copper Electroplating on an Iron Spoon:\n- **Cathode (-)**: Cleaned iron spoon. Cu²⁺(aq) + 2e⁻ ──> Cu(s) (reddish-brown copper deposits on the spoon).\n- **Anode (+)**: Pure copper strip. Cu(s) ──> Cu²⁺(aq) + 2e⁻ (anode gradually dissolves).\n- **Electrolyte**: Aqueous CuSO₄ solution. The concentration and blue color of CuSO₄ solution remain **completely unchanged** because the rate of copper ion discharge at cathode equals the rate of copper dissolution at anode.\n\n### Industrial Refining of Impure Copper:\n- **Anode (+)**: Thick slab of impure 'blister' copper.\n- **Cathode (-)**: Thin sheet of pure copper.\n- **Electrolyte**: Acidified CuSO₄ solution.\n- Pure copper dissolves from the anode and plates onto the cathode, achieving 99.99% electrical purity. Valuable impurities (silver, gold) settle below the anode as 'anode slime'.",
          diagram: {
            url: "/images/unit12/fig_12_4_electroplating.png",
            caption: "Figure 12.4: Electroplating an iron spoon with copper using an aqueous copper sulfate electrolyte."
          }
        }
      ]
    },
    {
      id: "12.3",
      order: 3,
      titleEn: "Corrosion of Metals",
      titleSi: "ලෝහ විඛාදනය",
      textbookSection: "Section 12.3 (Pages 100 - 114)",
      readingTimeMinutes: 9,
      keyTakeaways: [
        "Corrosion is the spontaneous chemical or electrochemical degradation of a metal through reaction with environmental moisture and oxygen.",
        "Rusting refers specifically to the corrosion of Iron and Steel.",
        "Both Oxygen (air) and Water (moisture) are simultaneously essential for rusting; dry air alone or boiled oxygen-free water alone causes zero rusting.",
        "Dissolved salts (like NaCl in seawater) and acids act as electrolytes and drastically accelerate the rate of rusting.",
        "Chemical formula of rust is Hydrated Iron(III) Oxide: Fe₂O₃·xH₂O.",
        "Corrosion prevention methods: Barrier protection (painting, grease/oil, plastic coating, tin plating), Sacrificial protection (Galvanizing with Zinc, attaching Magnesium blocks), and Alloying (Stainless steel containing Fe, Cr, Ni)."
      ],
      keyDefinitions: [
        {
          term: "Corrosion",
          definition: "The gradual destruction and deterioration of refined metals into thermodynamically stable oxides, hydroxides, or sulfides caused by electrochemical reactions with environmental oxygen and moisture."
        },
        {
          term: "Rusting",
          definition: "The specific electrochemical corrosion process of iron and steel in the combined presence of oxygen and water, forming a reddish-brown porous coating of hydrated iron(III) oxide."
        },
        {
          term: "Galvanization",
          definition: "The industrial process of coating iron or steel with a protective thin layer of metallic zinc to provide dual barrier and sacrificial cathodic protection against rusting."
        },
        {
          term: "Sacrificial Protection",
          definition: "A cathodic corrosion prevention method where a more electrochemically active metal (such as Zinc or Magnesium) is electrically connected to iron, corroding preferentially to preserve the iron structure."
        }
      ],
      sections: [
        {
          heading: "12.3.1 Electrochemical Mechanism of Rusting",
          content: "### Laboratory Verification of Essential Factors:\nIn a standard 3-test-tube experiment with cleaned iron nails:\n1. **Tube 1 (Water + Air)**: Iron nails rust extensively within days.\n2. **Tube 2 (Boiled water + layer of oil)**: Water is boiled to expel dissolved air; oil layer prevents air entry. **No rusting occurs** (proves Oxygen is essential).\n3. **Tube 3 (Dry air + Anhydrous Calcium Chloride)**: Anhydrous CaCl₂ absorbs all atmospheric moisture. **No rusting occurs** (proves Water is essential).\n- **Conclusion**: Both **Oxygen and Water are strictly essential** for iron to rust.\n\n### The Electrochemical Mechanism:\n- A tiny droplet of water on an iron surface acts as a miniature electrochemical cell:\n  1. **Anodic Site (Iron surface under low oxygen)**:\n     Fe(s) ──> Fe²⁺(aq) + 2e⁻\n  2. **Cathodic Site (Edge of droplet where oxygen is rich)**:\n     O₂(g) + 2H₂O(l) + 4e⁻ ──> 4OH⁻(aq)\n  3. **Precipitation of Rust**:\n     Fe²⁺ + 2OH⁻ ──> Fe(OH)₂(s)\n     Further oxidation by atmospheric oxygen yields hydrated iron(III) oxide:\n     4Fe(OH)₂ + O₂ + 2xH₂O ──> 2Fe₂O₃·xH₂O (Rust)",
          diagram: {
            url: "/images/unit12/fig_12_5_iron_rusting.png",
            caption: "Figure 12.5: Laboratory experiment demonstrating that both oxygen and water are essential for the rusting of iron."
          }
        },
        {
          heading: "12.3.2 Methods of Preventing Corrosion",
          content: "### 1. Barrier Protection:\n- Physically prevents oxygen and moisture from contacting the iron surface.\n  - **Painting**: Bridges, automobiles, ship superstructures, window frames.\n  - **Oiling and Greasing**: Moving machine parts, bicycle chains, tools.\n  - **Plastic Coating**: Dish racks, chain-link fences, wire hangers.\n  - **Electroplating with less active metals (Tin Plating)**: Food cans ('tin cans'). *Caution: If the tin layer is scratched, iron corrodes even faster than normal because iron is more active than tin.*\n\n### 2. Sacrificial Protection (Galvanizing & Sacrificial Anodes):\n- Involves connecting iron to a **more reactive metal** (higher in activity series):\n  - **Galvanization (Zinc Coating)**: Roofing corrugated sheets, buckets, nails. Zinc acts as a physical barrier. If scratched, Zinc corrodes preferentially (sacrificially) because Zinc is more reactive than Iron:\n    Zn ──> Zn²⁺ + 2e⁻\n    The liberated electrons flow to the iron, preventing Fe from oxidizing.\n  - **Sacrificial Anode Blocks**: Heavy blocks of Magnesium (Mg) or Zinc (Zn) are bolted to ocean ship hulls, underground petroleum pipelines, and offshore oil rigs.\n\n### 3. Alloying:\n- Mixing iron with Chromium (18%) and Nickel (8%) produces **Stainless Steel**. Chromium forms a micro-thin, self-healing impervious oxide film (Cr₂O₃) that halts corrosion permanently."
        }
      ]
    }
  ]
};
