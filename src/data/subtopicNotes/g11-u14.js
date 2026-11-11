/**
 * Complete Grade 11 Science - Unit 14 (Hydrocarbons and Their Derivatives) Revision Guide Notes
 * Strictly aligned with the National Institute of Education (NIE) Official Curriculum.
 */

export const unit14RevisionData = {
  unitId: "g11-u14",
  unitNumber: 14,
  grade: 11,
  medium: "English",
  titleEn: "Hydrocarbons and Their Derivatives",
  titleSi: "හයිඩ්‍රොකාබන සහ ඒවායේ ව්‍යුත්පන්න",
  textbookCode: "ENG11U14",
  textbookPages: "Pages 151 - 166",
  overviewEn: "This unit covers organic chemistry fundamentals focused on hydrocarbons and their synthetic derivatives: saturated hydrocarbons (Alkanes: methane, ethane, propane, butane) and unsaturated hydrocarbons (Alkenes: ethene; Alkynes: ethyne); IUPAC nomenclature and structural formulas; combustion reactions and the bromine water addition test for unsaturation; commercial derivatives of ethene including chloroethene (vinyl chloride), tetrafluoroethene, and 1,2-dichloroethane; addition polymerisation forming modern plastics (polythene, PVC, Teflon, polystyrene); natural polymers vs synthetic polymers; thermoplastic vs thermosetting plastics; and international resin identification recycling codes (1 to 7) for sustainable environmental management.",

  summaryPoints: [
    "Organic compounds contain carbon covalently bonded to hydrogen and other elements. Hydrocarbons are organic compounds composed strictly of Carbon (C) and Hydrogen (H) atoms only.",
    "Saturated Hydrocarbons (Alkanes, general formula C_n H_{2n+2}): Contain only carbon-carbon single covalent bonds (C─C). First 4 members: Methane (CH₄), Ethane (C₂H₆), Propane (C₃H₈), Butane (C₄H₁₀). They are unreactive at room temperature and undergo complete combustion to produce CO₂ and H₂O.",
    "Unsaturated Hydrocarbons contain multiple bonds: Alkenes (general formula C_n H_{2n}) contain at least one C═C double bond (Ethene: C₂H₄); Alkynes (general formula C_n H_{2n-2}) contain at least one C≡C triple bond (Ethyne / Acetylene: C₂H₂).",
    "Distinguishing Saturated from Unsaturated Hydrocarbons: When reddish-brown Bromine water is added to an alkene (ethene), it rapidly decolourises (turns colorless) without light via an addition reaction (C₂H₄ + Br₂ ──> CH₂Br─CH₂Br). Alkanes do not decolourise bromine water in the dark.",
    "Derivatives of Ethene are produced by substituting one or more hydrogen atoms on the ethene molecule: Chloroethene (Vinyl chloride, CH₂═CHCl) and Tetrafluoroethene (CF₂═CF₂).",
    "Polymerisation is the chemical linking of thousands of small simple repeating molecules (Monomers) to form giant macromolecular chains (Polymers).",
    "Addition Polymers form when unsaturated monomer double bonds open up and link together without eliminating any small byproduct molecules: Ethene ──> Polythene; Vinyl chloride ──> Polyvinyl chloride (PVC); Tetrafluoroethene ──> Polytetrafluoroethylene (PTFE / Teflon).",
    "Natural Polymers: Natural rubber (polyisoprene from Hevea brasiliensis latex), Cellulose and Starch (glucose monomers), Proteins (amino acid monomers), and DNA (nucleotide monomers).",
    "Thermoplastics (Polythene, PVC, Polystyrene) soften when heated and can be melted, reshaped, and recycled repeatedly because their linear polymer chains are held by weak intermolecular forces.",
    "Thermosetting Plastics (Bakelite, Melamine, Vulcanized rubber) cannot be remelted or reshaped upon heating; high heat causes permanent chemical degradation and charring because polymer chains are permanently interconnected by strong covalent cross-links.",
    "Plastic Recycling Codes: 1 = PETE (beverage bottles), 2 = HDPE (milk jugs, detergent bottles), 3 = PVC (pipes, conduit), 4 = LDPE (grocery shopping bags), 5 = PP (bottle caps, meal boxes), 6 = PS (yoghurt cups, styrofoam), 7 = OTHER."
  ],

  subtopics: [
    {
      id: "14.1",
      order: 1,
      titleEn: "Hydrocarbons",
      titleSi: "හයිඩ්‍රොකාබන",
      textbookSection: "Section 14.1 (Pages 151 - 156)",
      readingTimeMinutes: 10,
      keyTakeaways: [
        "Hydrocarbons are organic compounds composed solely of carbon and hydrogen atoms.",
        "Saturated hydrocarbons (Alkanes, C_n H_{2n+2}): Have only C─C single bonds; stable and unreactive; burn with a clear blue non-luminous flame.",
        "Unsaturated hydrocarbons: Alkenes (C═C, C_n H_{2n}) and Alkynes (C≡C, C_n H_{2n-2}); reactive; undergo addition reactions.",
        "Complete combustion of any hydrocarbon produces Carbon Dioxide (CO₂) and Water (H₂O), releasing substantial thermal energy.",
        "Incomplete combustion (insufficient oxygen) produces toxic Carbon Monoxide (CO) gas, black carbon soot (C), and unburnt hydrocarbons with a smoky yellow flame.",
        "Chemical test for unsaturation: Ethene rapidly decolourises reddish-brown bromine water (C₂H₄ + Br₂ ──> 1,2-dibromoethane); ethane does not react under normal room lighting."
      ],
      keyDefinitions: [
        {
          term: "Hydrocarbon",
          definition: "An organic chemical compound whose molecular structure consists entirely and exclusively of hydrogen and carbon atoms."
        },
        {
          term: "Saturated Hydrocarbon (Alkane)",
          definition: "A hydrocarbon in which all carbon atoms are joined exclusively by single covalent bonds (C─C), holding the maximum possible number of hydrogen atoms per carbon atom (general formula: C_n H_{2n+2})."
        },
        {
          term: "Unsaturated Hydrocarbon (Alkene / Alkyne)",
          definition: "A hydrocarbon possessing one or more carbon-carbon double bonds (C═C, Alkenes) or triple bonds (C≡C, Alkynes) in its carbon skeleton, capable of undergoing addition reactions."
        },
        {
          term: "Addition Reaction",
          definition: "An organic reaction characteristic of unsaturated compounds wherein the carbon-carbon double or triple bond breaks open to bind additional reactant atoms without eliminating any atoms from the original molecule."
        }
      ],
      sections: [
        {
          heading: "14.1.1 Classification of Hydrocarbons & Nomenclature",
          content: "### 1. Alkanes (Saturated Hydrocarbons - General Formula C_n H_{2n+2}):\n- All carbon atoms exhibit tetrahedral geometry with single covalent bonds.\n- **First Four Alkanes**:\n  1. **Methane (CH₄)**: Primary constituent of natural gas (> 90%) and biogas.\n  2. **Ethane (C₂H₆)**: Structural formula CH₃─CH₃.\n  3. **Propane (C₃H₈)**: Main component of liquefied petroleum gas (LPG) used in domestic cooking cylinders.\n  4. **Butane (C₄H₁₀)**: Major fuel in LPG gas cylinders and cigarette lighters.\n\n### 2. Alkenes (Unsaturated Hydrocarbons - General Formula C_n H_{2n}):\n- Contain at least one **carbon-carbon double bond (C═C)**.\n- **Ethene (C₂H₄)** (commonly called **Ethylene**):\n  - Molecular formula: C₂H₄; Structural formula: CH₂═CH₂.\n  - Plant hormone responsible for fruit ripening; crucial industrial feedstock.\n\n### 3. Alkynes (Unsaturated Hydrocarbons - General Formula C_n H_{2n-2}):\n- Contain at least one **carbon-carbon triple bond (C≡C)**.\n- **Ethyne (C₂H₂)** (commonly called **Acetylene**):\n  - Molecular formula: C₂H₂; Structural formula: CH≡CH.\n  - Burns with oxygen at > 3000 °C in oxy-acetylene welding torches.",
          diagram: {
            url: "/images/unit14/fig_14_1_hydrocarbons_structures.png",
            caption: "Figure 14.1: Experimental demonstration of the complete combustion of a hydrocarbon candle producing carbon dioxide and water vapor."
          }
        },
        {
          heading: "14.1.2 Combustion Reactions & the Bromine Water Test",
          content: "### Combustion Reactions:\n1. **Complete Combustion** (Abundant Oxygen):\n   - Burns cleanly with high heat release and non-smoky flame:\n     CH₄(g) + 2O₂(g) ──> CO₂(g) + 2H₂O(l) + Heat\n     C₃H₈(g) + 5O₂(g) ──> 3CO₂(g) + 4H₂O(l) + Heat\n   - In the laboratory candle experiment, water droplets condense inside an inverted funnel (tested with blue cobalt chloride paper turning pink or anhydrous copper sulfate turning blue), and suctioned gas turns clear lime water milky (confirming CO₂).\n\n2. **Incomplete Combustion** (Limited Oxygen):\n   - Insufficient oxygen produces lethal odorless carbon monoxide gas and unburnt carbon particles (soot):\n     2CH₄ + 3O₂ ──> 2CO + 4H₂O\n     CH₄ + O₂ ──> C(s) + 2H₂O\n\n### Distinguishing Test: Bromine Water Addition Reaction:\n- When reddish-brown Bromine water (Br₂(aq)) is shaken with an **alkane (ethane)**, the red-brown color **persists unchanged** in the dark.\n- When shaken with an **alkene (ethene)**, the reddish-brown color **decolourises immediately**, forming colorless 1,2-dibromoethane:\n  CH₂═CH₂ + Br₂ ──> CH₂Br─CH₂Br (1,2-dibromoethane)",
          diagram: {
            url: "/images/unit14/fig_14_2_unsaturation_test.png",
            caption: "Figure 14.2: Unsaturation addition test: Ethene rapidly decolourises reddish-brown bromine water into colorless 1,2-dibromoethane."
          }
        }
      ]
    },
    {
      id: "14.2",
      order: 2,
      titleEn: "Derivatives of Ethene",
      titleSi: "එතීන්හි ව්‍යුත්පන්න",
      textbookSection: "Section 14.2 (Pages 157 - 158)",
      readingTimeMinutes: 7,
      keyTakeaways: [
        "A derivative is a compound formed by replacing one or more hydrogen atoms of a parent hydrocarbon with other functional atoms or groups.",
        "Chloroethene (Vinyl Chloride, CH₂═CHCl): Synthesized by reacting ethene with chlorine gas via 1,2-dichloroethane; monomer for Polyvinyl Chloride (PVC).",
        "Tetrafluoroethene (CF₂═CF₂): All four hydrogen atoms of ethene are replaced by fluorine; monomer for Polytetrafluoroethylene (PTFE / Teflon).",
        "Ethene derivatives serve as essential commercial chemical building blocks for manufacturing non-stick cookware, synthetic pipes, insulation, and artificial leather."
      ],
      keyDefinitions: [
        {
          term: "Hydrocarbon Derivative",
          definition: "A chemical compound structurally derived from a fundamental hydrocarbon parent molecule by replacing one or more hydrogen atoms with halogen atoms or functional groups."
        },
        {
          term: "Chloroethene (Vinyl Chloride)",
          definition: "An organochlorine derivative of ethene with chemical formula CH₂═CHCl, manufactured as the industrial monomer for polyvinyl chloride (PVC)."
        },
        {
          term: "Tetrafluoroethene",
          definition: "A fluorocarbon derivative of ethene with formula CF₂═CF₂, in which all four hydrogen atoms are substituted with fluorine atoms, used to produce Teflon."
        }
      ],
      sections: [
        {
          heading: "14.2.1 Synthesis & Uses of Ethene Derivatives",
          content: "### 1. Chloroethene (Vinyl Chloride):\n- **Formula**: CH₂═CH─Cl\n- **Synthesis**:\n  1. Ethene reacts with chlorine gas in an addition reaction to produce 1,2-dichloroethane:\n     CH₂═CH₂ + Cl₂ ──> CH₂Cl─CH₂Cl\n  2. Thermal cracking of 1,2-dichloroethane eliminates one molecule of hydrogen chloride (HCl) to yield chloroethene:\n     CH₂Cl─CH₂Cl ──> CH₂═CH─Cl + HCl\n- **Commercial Significance**: Monomer precursor for manufacturing **Polyvinyl Chloride (PVC)**.\n\n### 2. Tetrafluoroethene (TFE):\n- **Formula**: CF₂═CF₂\n- All 4 hydrogen atoms of ethene are substituted by highly electronegative Fluorine (F) atoms.\n- **Commercial Significance**: Monomer precursor for **Polytetrafluoroethylene (PTFE)**, widely marketed under the brand name **Teflon** for non-stick frying pans, chemical gaskets, and waterproof Gore-Tex fabrics."
        }
      ]
    },
    {
      id: "14.3",
      order: 3,
      titleEn: "Polymers",
      titleSi: "බහුඅවයවික",
      textbookSection: "Section 14.3 (Pages 158 - 166)",
      readingTimeMinutes: 12,
      keyTakeaways: [
        "A Polymer is a giant macromolecule formed by linking thousands of small simple repeating units called Monomers.",
        "Addition polymerisation occurs across unsaturated monomer double bonds without eliminating any small byproduct molecules.",
        "Key synthetic addition polymers: Polythene (packaging bags, bottles), PVC (water pipes, cable insulation, floor tiles), Teflon (non-stick coatings), Polystyrene (styrofoam boxes, yoghurt cups).",
        "Natural polymers: Natural rubber (monomer is isoprene), Cellulose, Starch, Glycogen, and Proteins.",
        "Thermoplastics soften on heating and can be recycled repeatedly (held by weak intermolecular forces).",
        "Thermosetting plastics decompose and char upon heating; cannot be melted or reshaped due to permanent cross-links.",
        "Plastic Resin Identification Codes (1 to 7) standardize sorting and mechanical recycling of consumer plastic waste."
      ],
      keyDefinitions: [
        {
          term: "Polymer",
          definition: "A high-molecular-weight macromolecular substance consisting of long chain-like molecules built up by the repeated chemical combination of thousands of smaller constituent units called monomers."
        },
        {
          term: "Monomer",
          definition: "A small, simple reactive molecule capable of chemically bonding with other similar molecules to form a polymer macromolecule."
        },
        {
          term: "Addition Polymerisation",
          definition: "A polymerisation process in which unsaturated monomer molecules containing carbon-carbon double bonds join end-to-end to form a polymer chain without generating any byproduct molecules."
        },
        {
          term: "Thermoplastic",
          definition: "A linear or branched polymer material that softens and liquefies upon heating and solidifies upon cooling, enabling it to be repeatedly melted, reshaped, and recycled."
        },
        {
          term: "Thermosetting Plastic",
          definition: "A heavily cross-linked polymer material that permanently sets into an infusible rigid network upon initial heating and cannot be softened, remelted, or reshaped thereafter."
        }
      ],
      sections: [
        {
          heading: "14.3.1 Addition Polymerisation & Common Synthetic Plastics",
          content: "### Mechanism of Addition Polymerisation:\n- Monomers must possess an active **carbon-carbon double bond (C═C)**.\n- Under heat, high pressure, and a catalyst, the double bond opens, providing two free valencies to link neighboring monomers together into an endless chain:\n  n CH₂═CH₂ ──> ─[CH₂─CH₂─]_n\n\n### Primary Synthetic Addition Polymers:\n1. **Polythene (Polyethylene, PE)**:\n   - Monomer: **Ethene (CH₂═CH₂)**.\n   - **Low-Density Polythene (LDPE)**: Highly flexible; shopping bags, squeeze bottles, packaging films.\n   - **High-Density Polythene (HDPE)**: Rigid, high tensile strength; water containers, milk crates, household chemical bottles.\n\n2. **Polyvinyl Chloride (PVC)**:\n   - Monomer: **Chloroethene (Vinyl chloride, CH₂═CH─Cl)**.\n   - Resistant to water and chemicals; electrical insulator.\n   - Uses: Domestic water supply pipes, electrical conduit, electrical cable insulating sheaths, raincoat fabric, floor tiles.\n\n3. **Polytetrafluoroethylene (PTFE / Teflon)**:\n   - Monomer: **Tetrafluoroethene (CF₂═CF₂)**.\n   - Exceptionally unreactive, extremely low coefficient of friction, high thermal resistance (up to 260 °C).\n   - Uses: Non-stick cookware coating, chemical vessel linings, plumber's thread tape.\n\n4. **Polystyrene (PS)**:\n   - Monomer: **Phenylethene (Styrene, C₆H₅─CH═CH₂)**.\n   - Rigid and transparent (or foamed with gas into styrofoam).\n   - Uses: Yoghurt cups, disposable foam food containers, shock-absorbing electronics packaging.",
          diagram: {
            url: "/images/unit14/fig_14_3_polymers_synthesis.png",
            caption: "Figure 14.3: Addition polymerisation: Linking of chloroethene monomers to synthesize polyvinyl chloride (PVC)."
          }
        },
        {
          heading: "14.3.2 Thermoplastics vs Thermosetting Plastics & Recycling Codes",
          content: "### Comparison: Thermoplastics vs Thermosetting Plastics:\n\n| Characteristic | Thermoplastics (තාපස්ථාප්‍ය ප්ලාස්ටික්) | Thermosetting Plastics (තාපසවි ප්ලාස්ටික්) |\n| :--- | :--- | :--- |\n| **Molecular Structure** | Linear or lightly branched polymer chains | Highly cross-linked 3-dimensional network |\n| **Intermolecular Forces** | Weak van der Waals forces between chains | Strong covalent bonds linking chains together |\n| **Effect of Heat** | Softens when heated, melts, and flows | Does not melt; decomposes, chars, and burns |\n| **Recyclability** | Easily melted, reshaped, and recycled | Cannot be melted or reshaped; not recyclable |\n| **Mechanical Property** | Soft, flexible, and ductile | Extremely hard, rigid, brittle, heat resistant |\n| **Examples** | Polythene, PVC, Polystyrene, Nylon | Bakelite (switches), Melamine (tableware), Formica |\n\n### International Resin Identification Codes for Plastic Recycling:\n- Standardized triangle arrow symbols with numbers from **1 to 7** molded on plastic containers:\n  1. **Code 1 (PETE - Polyethylene Terephthalate)**: Transparent soft drink and drinking water bottles.\n  2. **Code 2 (HDPE - High-Density Polyethylene)**: Opaque milk jugs, shampoo and detergent bottles.\n  3. **Code 3 (PVC - Polyvinyl Chloride)**: Plumbing pipes, vinyl siding, garden hoses.\n  4. **Code 4 (LDPE - Low-Density Polyethylene)**: Grocery shopping bags, cling wraps, bread bags.\n  5. **Code 5 (PP - Polypropylene)**: Medicine bottles, bottle caps, reusable lunch containers.\n  6. **Code 6 (PS - Polystyrene)**: Styrofoam lunch boxes, disposable cups, yoghurt tubs.\n  7. **Code 7 (OTHER)**: Multilayer composites, polycarbonate baby bottles, acrylics.",
          diagram: {
            url: "/images/unit14/fig_14_4_plastic_recycling.png",
            caption: "Figure 14.4: International resin identification coding symbols (1 to 7) used for sorting and recycling plastic polymers."
          }
        }
      ]
    }
  ]
};
