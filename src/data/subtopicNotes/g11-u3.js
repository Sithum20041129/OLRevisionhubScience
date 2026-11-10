/**
 * Complete Grade 11 Science - Unit 3 (Mixtures) Revision Guide Notes
 * Strictly aligned with the National Institute of Education (NIE) Official Curriculum.
 */

export const unit3RevisionData = {
  unitId: "g11-u3",
  unitNumber: 3,
  grade: 11,
  medium: "English",
  titleEn: "Mixtures",
  titleSi: "මිශ්‍රණ",
  textbookCode: "ENG11U03",
  textbookPages: "Pages 30 - 71",
  overviewEn: "This unit covers the chemical principles of mixtures and solutions: classification into homogeneous and heterogeneous systems, quantitative expressions of composition (mass fraction, volume fraction, mole fraction, molar concentration), preparation of standard solutions, and industrial/laboratory separation techniques (filtration, crystallization, solvent extraction, simple/fractional/steam distillation, and paper chromatography).",

  // High-yield syllabus summary points
  summaryPoints: [
    "A mixture consists of two or more pure chemical substances physically blended in any proportion without forming chemical bonds.",
    "Homogeneous mixtures (true solutions) have a uniform composition and single phase throughout; heterogeneous mixtures (suspensions, colloids) have non-uniform composition and distinct phase boundaries.",
    "Rate of dissolution increases with higher temperature, smaller solute particle size (greater surface area), and mechanical agitation/stirring.",
    "Solubility is the maximum mass of solute (in grams) that dissolves in 100 g of solvent to form a saturated solution at a specified temperature.",
    "Mixture composition expressions: Mass fraction (m/m), Volume fraction (V/V), Mass/Volume concentration (g dm⁻³), and Molar concentration (mol dm⁻³ where n = C × V).",
    "A standard solution is a solution whose exact chemical concentration is accurately known, prepared using a volumetric flask.",
    "Immiscible liquid mixtures (e.g., kerosene and water) are separated by density differences using a separating funnel.",
    "Simple distillation separates a volatile solvent from non-volatile solutes or liquids with significantly different boiling points (> 50°C difference).",
    "Fractional distillation uses a fractionating column with glass beads to separate miscible liquids with close boiling points (e.g., ethanol at 78°C and water at 100°C; crude oil refining).",
    "Steam distillation extracts volatile, heat-sensitive, water-immiscible essential oils (cinnamon, clove, citronella) at temperatures below 100°C, preventing thermal decomposition.",
    "Paper chromatography separates minute solute mixtures based on differential partitioning between a stationary phase (chromatography paper) and a mobile phase (solvent). Retention factor Rf = distance moved by substance / distance moved by solvent front."
  ],

  subtopics: [
    {
      id: "3.1",
      order: 1,
      titleEn: "Types of Mixtures",
      titleSi: "මිශ්‍රණ වර්ග",
      textbookSection: "Section 3.1 (Pages 30 - 49)",
      readingTimeMinutes: 8,
      keyTakeaways: [
        "Homogeneous mixtures have uniform microscopic composition without visible boundaries between components (e.g., salt solution, air, brass alloy).",
        "Heterogeneous mixtures possess non-uniform distribution with visible phase boundaries (e.g., muddy water, emulsion of oil and water, smoke).",
        "A true solution is a homogeneous mixture comprising a dissolved solute and a dissolving solvent.",
        "Aqueous solutions use water as the solvent; non-aqueous solutions use organic solvents (alcohol, kerosene, hexane, acetone).",
        "Factors accelerating dissolution: heating (increases solvent molecular kinetic energy), pulverizing solute (multiplies contact surface area), and stirring (promotes solute dispersal).",
        "A saturated solution holds the maximum possible solute at that specific temperature in equilibrium with undissolved solute."
      ],
      keyDefinitions: [
        {
          term: "Mixture",
          definition: "A physical combination of two or more pure chemical substances present in variable proportions, retaining their individual chemical identities and separable by physical techniques."
        },
        {
          term: "Homogeneous Mixture",
          definition: "A mixture in which the constituent particles are uniformly distributed at the molecular level, displaying identical physical properties and a single phase throughout."
        },
        {
          term: "Heterogeneous Mixture",
          definition: "A mixture in which the components remain physically separate with distinct phase boundaries and variable composition throughout."
        },
        {
          term: "Solubility",
          definition: "The maximum mass of a solute (in grams) capable of dissolving completely in 100 grams of a given solvent at a specified temperature to establish a saturated solution."
        },
        {
          term: "Saturated Solution",
          definition: "A solution that contains the maximum possible concentration of dissolved solute at a given temperature, such that any additional solute remains undissolved."
        }
      ],
      sections: [
        {
          heading: "3.1.1 Homogeneous vs Heterogeneous Mixtures & Solutions",
          content: "### Nature of Mixtures\nA mixture is formed when two or more distinct substances blend physically without any chemical reaction or alteration of chemical bonds. Key distinctions:\n\n### 1. Homogeneous Mixtures (Solutions)\n- Uniform appearance and identical chemical composition throughout.\n- Solute particles are dispersed as individual molecules or ions (< 1 nm in diameter).\n- Does not scatter light (no Tyndall effect); does not settle upon standing.\n- **Examples**:\n  - Solid in liquid: Sodium chloride dissolved in water.\n  - Gas in gas: Atmospheric air (N₂, O₂, Ar, CO₂).\n  - Gas in liquid: Carbonated water (CO₂ in water).\n  - Liquid in liquid: Ethanol mixed in water.\n  - Solid in solid: Alloys such as Brass (Cu + Zn) and Bronze (Cu + Sn).\n\n### 2. Heterogeneous Mixtures\n- Non-uniform composition with distinct observable phase interfaces.\n- Particles can be seen with optical microscopes or the naked eye.\n- **Examples**: Sand in water, clay suspension, chalk powder in water, oil and vinegar emulsion, smoke (solid soot particles in gas).\n\n### Aqueous vs Non-Aqueous Solvents:\n- **Aqueous Solvents**: Water is known as the universal solvent due to its polar molecular structure and ability to dissolve polar salts, sugars, and acids.\n- **Non-Aqueous (Organic) Solvents**: Non-polar substances (grease, wax, rubber, iodine) do not dissolve in water but dissolve readily in non-polar organic solvents such as kerosene, turpentine, acetone, carbon tetrachloride, or alcohol.",
          diagram: {
            url: "/images/unit03/fig_3_1_standard_solution.png",
            caption: "Figure 3.1: Volumetric glassware used in preparing homogeneous solutions."
          }
        },
        {
          heading: "3.1.2 Dynamics of Dissolution & Solubility Curves",
          content: "### Factors Governing the Rate of Dissolution:\n1. **Temperature of the Solvent**: Elevated temperature imparts greater kinetic energy to solvent molecules, accelerating the frequency and force of solvent-solute collisions.\n2. **Particle Size of Solute**: Crushing a crystalline solid into fine powder greatly enlarges its total exposed surface area accessible to solvent molecules.\n3. **Mechanical Agitation (Stirring)**: Continuous stirring sweeps away concentrated solute layers surrounding solid particles, constantly replenishing fresh, unsaturated solvent at the solute interface.\n\n### Solubility & Saturated Solutions:\n- **Unsaturated Solution**: Contains less solute than the maximum holding capacity at that temperature; additional solute dissolves easily.\n- **Saturated Solution**: Contains the exact maximum threshold of dissolved solute at that temperature in dynamic equilibrium with solid solute.\n- **Supersaturated Solution**: An unstable state containing more dissolved solute than normal saturation capacity, achieved by cooling a hot saturated solution gently without agitation.\n- **Effect of Temperature on Solubility**: For most solid salts (KNO₃, NaCl, CuSO₄), solubility increases as temperature rises. However, the solubility of gases in liquids (O₂, CO₂) **decreases** as temperature rises."
        }
      ]
    },
    {
      id: "3.2",
      order: 2,
      titleEn: "Composition of Mixtures",
      titleSi: "මිශ්‍රණයක සංයුතිය",
      textbookSection: "Section 3.2 (Pages 50 - 61)",
      readingTimeMinutes: 9,
      keyTakeaways: [
        "Mass fraction (m/m) expresses solute mass as a fraction of total solution mass: Mass % = (Mass of Solute / Total Mass of Solution) × 100%.",
        "Volume fraction (V/V) is used for liquid-liquid solutions: Volume % = (Volume of Solute / Total Volume of Solution) × 100%.",
        "Mole fraction (X) is the ratio of moles of a specific component to the total moles of all components in the mixture: X_A = n_A / (n_A + n_B).",
        "Molar concentration (Molarity, C) is measured in mol dm⁻³ (or mol L⁻¹) and given by the relationship: C = n / V or n = C × V.",
        "To prepare a standard solution, accurately weigh the solute, dissolve completely in a beaker with distilled water, transfer quantitatively using a funnel, rinse with washings, and make up to the calibration mark with a volumetric flask."
      ],
      keyDefinitions: [
        {
          term: "Mass Fraction (m/m)",
          definition: "The quantitative ratio of the mass of a specific solute component to the total mass of the entire mixture or solution."
        },
        {
          term: "Volume Fraction (V/V)",
          definition: "The ratio of the volume of a liquid solute component to the total volume of the resulting liquid mixture or solution."
        },
        {
          term: "Mole Fraction",
          definition: "The dimensionless ratio of the number of moles of a particular component substance to the total sum of moles of all constituent substances present in the mixture."
        },
        {
          term: "Molar Concentration (Molarity)",
          definition: "The amount of substance of solute (measured in moles) dissolved per cubic decimetre (1 dm³ or 1 Litre) of solution, denoted by the unit mol dm⁻³."
        },
        {
          term: "Standard Solution",
          definition: "A chemical solution whose concentration is precisely established and accurately known, prepared by dissolving a known mass of primary standard solute in a specific volume."
        }
      ],
      sections: [
        {
          heading: "3.2.1 Mathematical Formulas for Mixture Compositions",
          content: "### Quantitative Expressions of Composition:\n\n1. **Mass Fraction & Mass Percentage (m/m)**:\n   - Mass Fraction = (Mass of solute) / (Total mass of solution)\n   - Mass Percentage = [(Mass of solute) / (Total mass of solution)] × 100%\n   - *Example: A solution containing 10 g NaCl in 90 g water has a total mass of 100 g, giving a 10% (m/m) solution.*\n\n2. **Volume Fraction & Volume Percentage (V/V)**:\n   - Volume Fraction = (Volume of solute) / (Total volume of solution)\n   - Volume Percentage = [(Volume of solute) / (Total volume of solution)] × 100%\n   - *Commonly used for liquid mixtures like ethanol in water or vinegar (acetic acid in water).*\n\n3. **Mass/Volume Concentration (g dm⁻³)**:\n   - Concentration (g dm⁻³) = (Mass of solute in grams) / (Volume of solution in dm³)\n   *(Note: 1 dm³ = 1000 cm³ = 1 Litre)*\n\n4. **Mole Fraction (X)**:\n   - If a mixture contains n_A moles of substance A and n_B moles of substance B:\n   - **X_A = n_A / (n_A + n_B)**\n   - The sum of mole fractions of all components always equals 1: **X_A + X_B = 1**.\n\n5. **Molar Concentration / Molarity (C)**:\n   - **C = n / V**  *(where n = number of moles, V = volume in dm³)*\n   - **n = m / M**  *(where m = mass in grams, M = molar mass in g mol⁻¹)*\n   - Combining both: **C = m / (M × V)**  or  **m = C × M × V**\n   - Unit: **mol dm⁻³** (or M).",
          diagram: {
            url: "/images/unit03/fig_3_1_standard_solution.png",
            caption: "Figure 3.2: Accurate preparation of a standard molar solution using a volumetric flask and wash bottle."
          }
        },
        {
          heading: "3.2.2 Step-by-Step Preparation of a Standard Solution",
          content: "### Laboratory Protocol for Preparing a Standard Solution (e.g., 250 cm³ of 0.1 mol dm⁻³ NaCl):\n1. **Calculate Required Mass**:\n   - Molar mass of NaCl (M) = 23 + 35.5 = 58.5 g mol⁻¹\n   - Volume (V) = 250 cm³ = 0.25 dm³\n   - Concentration (C) = 0.1 mol dm⁻³\n   - Required Mass (m) = C × M × V = 0.1 × 58.5 × 0.25 = **1.4625 g**.\n2. **Accurate Weighing**: Weigh precisely 1.46 g of dry NaCl on a watch glass using an electronic analytical balance.\n3. **Dissolving**: Transfer the solute completely into a clean glass beaker. Add approximately 50-80 cm³ of distilled water and stir with a clean glass rod until all crystals dissolve.\n4. **Quantitative Transfer**: Place a clean glass funnel into the neck of a 250 cm³ volumetric flask. Carefully pour the solution down the glass rod into the flask.\n5. **Rinsing (Washings)**: Rinse the beaker, watch glass, and glass rod with small portions of distilled water using a wash bottle and pour all rinsings into the volumetric flask.\n6. **Diluting to the Calibration Mark**: Add distilled water until the liquid level nears the graduation mark. Use a dropper/pipette to add the final drops until the bottom of the curved meniscus sits exactly on the engraved mark at eye level.\n7. **Homogenizing**: Stopper the flask firmly and invert it repeatedly 8-10 times to ensure uniform concentration throughout."
        }
      ]
    },
    {
      id: "3.3",
      order: 3,
      titleEn: "Separation of Compounds in Mixtures",
      titleSi: "මිශ්‍රණවල අඩංගු සංඝටක වෙන් කිරීම",
      textbookSection: "Section 3.3 (Pages 62 - 71)",
      readingTimeMinutes: 10,
      keyTakeaways: [
        "Separation methods exploit differences in physical properties: particle size, solubility, boiling point, density, volatility, and chromatographic affinity.",
        "Filtration separates insoluble solids from liquids; crystallization separates dissolved crystalline solutes by exploiting temperature-dependent solubility.",
        "A separating funnel is used for immiscible liquids (e.g., oil/water) based on differing densities.",
        "Simple distillation separates a volatile liquid from non-volatile salts or liquids with boiling point differences > 50°C.",
        "Fractional distillation employs a fractionating column to separate miscible liquids with close boiling points (e.g., ethanol at 78°C and water at 100°C; crude oil fractions).",
        "Steam distillation isolates volatile, heat-sensitive essential oils (cinnamon, clove, citronella) at temperatures below 100°C to prevent thermal decomposition.",
        "Paper chromatography separates solutes based on relative partition between stationary cellulose paper and the ascending mobile solvent."
      ],
      keyDefinitions: [
        {
          term: "Solvent Extraction",
          definition: "A separation technique based on the unequal distribution of a solute between two immiscible liquid solvents, commonly performed using a separating funnel."
        },
        {
          term: "Fractional Distillation",
          definition: "A distillation method used to separate miscible liquid mixtures having close boiling points by utilizing a fractionating column that provides repeated vaporization and condensation cycles."
        },
        {
          term: "Steam Distillation",
          definition: "A specialized distillation technique used to extract temperature-sensitive, volatile, water-immiscible organic liquids by passing steam through the plant material at a temperature below the normal boiling point of the organic compound."
        },
        {
          term: "Retention Factor (Rf)",
          definition: "The characteristic ratio in chromatography defined as the distance traveled by a specific solute component divided by the total distance traveled by the solvent front."
        }
      ],
      sections: [
        {
          heading: "3.3.1 Mechanical Separation, Filtration & Crystallization",
          content: "### 1. Filtration\n- **Principle**: Difference in particle size between an insoluble solid residue and a liquid filtrate.\n- **Apparatus**: Filter funnel and porous filter paper.\n- **Applications**: Purifying water by removing suspended clay and sand; separating chemical precipitates.\n\n### 2. Evaporation & Crystallization\n- **Principle**: Difference in volatility and temperature-dependent solubility.\n- **Procedure**: Gently heat an unsaturated solution to evaporate solvent until the **crystallization point** is reached (tested when a glass rod dipped in the solution forms crystals upon cooling in air). Allow the saturated hot solution to cool slowly. Pure crystals deposit while soluble impurities remain dissolved in the mother liquor.\n- **Recrystallization**: Dissolving crude crystals in a minimum volume of hot solvent, filtering while hot to remove insoluble impurities, and cooling to obtain high-purity crystals.\n- **Application**: Extraction of common salt (NaCl) in coastal salterns.",
          diagram: {
            url: "/images/unit03/fig_3_2_separating_funnel.png",
            caption: "Figure 3.3: Separating funnel apparatus for immiscible liquid separation (solvent extraction)."
          }
        },
        {
          heading: "3.3.2 Solvent Extraction & Separating Funnel",
          content: "### Solvent Extraction\n- **Principle**: Differences in density and immiscibility between two liquid phases, and unequal solubility of a solute between two immiscible solvents.\n- **Apparatus**: **Separating Funnel**.\n- **Procedure**:\n  - The mixture of two immiscible liquids (e.g., water and kerosene, or an aqueous iodine solution and non-polar organic solvent like carbon tetrachloride or hexane) is placed into the separating funnel.\n  - The funnel is stoppered, inverted, and shaken vigorously with intermittent opening of the stopcock to vent built-up vapour pressure.\n  - The funnel is placed in a clamp stand and allowed to rest until two sharp, distinct liquid layers form.\n  - The denser liquid settles to the bottom and is drained out through the stopcock into a beaker below. The less dense upper layer is poured out from the top neck to avoid cross-contamination.\n- **Applications**: Extraction of caffeine from tea; extraction of medicinal alkaloids from plant extracts.",
          diagram: {
            url: "/images/unit03/fig_3_3_simple_distillation.png",
            caption: "Figure 3.4: Simple distillation apparatus with Liebig condenser for separating volatile solvent."
          }
        },
        {
          heading: "3.3.3 Simple Distillation vs Fractional Distillation",
          content: "### 1. Simple Distillation\n- **Principle**: Exploits a large difference in boiling point (> 50°C) between components or separates a pure volatile liquid solvent from dissolved non-volatile solid solutes.\n- **Apparatus**: Distillation flask with side-arm, thermometer, **Liebig condenser** (cool water enters from the lower inlet and exits through the upper outlet for maximum counter-current heat exchange), receiver adapter, and collecting flask.\n- **Procedure**: The mixture boils; vapour rises, enters the water-cooled Liebig condenser, condenses back into pure liquid (**distillate**), and collects in the receiving flask.\n- **Application**: Desalination of seawater to yield pure distilled water.\n\n### 2. Fractional Distillation\n- **Principle**: Separates miscible liquids having **close boiling points** (differing by less than 25°C - 30°C).\n- **Key Component**: A **Fractionating Column** packed with glass beads or metal rings is inserted between the distillation flask and condenser.\n- **Mechanism**: The column provides a vast surface area for continuous, repeated cycles of vaporization and condensation. As hot rising vapours encounter descending liquid, the higher boiling point liquid condenses preferentially and flows back down, while the lower boiling point component emerges at the top as pure vapour.\n- **Applications**:\n  - Separation of ethanol (b.p. 78°C) from fermented wash / water (b.p. 100°C).\n  - Fractional distillation of **crude petroleum oil** into gasoline/petrol, kerosene, diesel, lubricating oils, and bitumen in industrial refinery towers.\n  - Fractional distillation of liquid air to isolate oxygen (-183°C) and nitrogen (-196°C).",
          diagram: {
            url: "/images/unit03/fig_3_4_fractional_distillation.png",
            caption: "Figure 3.5: Fractional distillation apparatus with fractionating column."
          }
        },
        {
          heading: "3.3.4 Steam Distillation & Paper Chromatography",
          content: "### 1. Steam Distillation\n- **Principle**: Used for extracting organic compounds that are **steam-volatile, water-immiscible**, and tend to **decompose or char** if heated directly to their normal high boiling points.\n- **Mechanism**: Steam generated in an external boiler is blown continuously through the plant material. The combined vapour pressure of the organic compound and water reaches atmospheric pressure at a temperature **below 100°C**. Thus, the compound distills over safely without thermal degradation.\n- **Applications in Sri Lanka**: Extraction of **cinnamon leaf/bark oil** (cinnamaldehyde/eugenol), **clove oil**, and **citronella oil**.\n\n### 2. Paper Chromatography\n- **Principle**: Differential partition of dissolved solutes between a **stationary phase** (cellulose fibres of chromatography paper) and a **mobile phase** (solvent moving upward by capillary action).\n- **Retention Factor Calculation**:\n  - **Rf = (Distance traveled by solute spot) / (Distance traveled by solvent front)**\n  - Rf is a constant for a given substance under specified solvent and temperature conditions, ranging between 0 and 1.\n- **Applications**: Separating plant leaf pigments (chlorophyll a, chlorophyll b, carotene, xanthophyll); forensic ink and dye analysis.",
          diagram: {
            url: "/images/unit03/fig_3_5_steam_distillation.png",
            caption: "Figure 3.6 & 3.7: Steam distillation setup for extracting essential oils and Paper Chromatography technique."
          }
        }
      ]
    }
  ]
};

