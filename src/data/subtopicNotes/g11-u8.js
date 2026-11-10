/**
 * Complete Grade 11 Science - Unit 8 (Heat Changes Associated with Chemical Reactions) Revision Guide Notes
 * Strictly aligned with the National Institute of Education (NIE) Official Curriculum.
 */

export const unit8RevisionData = {
  unitId: "g11-u8",
  unitNumber: 8,
  grade: 11,
  medium: "English",
  titleEn: "Heat Changes Associated with Chemical Reactions",
  titleSi: "රසායනික ප්‍රතික්‍රියා ආශ්‍රිත තාප විපර්යාස",
  textbookCode: "ENG11U08",
  textbookPages: "Pages 209 - 220",
  overviewEn: "This unit covers thermochemistry and the thermodynamics of chemical reactions: exothermic and endothermic reactions, energetic foundations (bond breaking vs bond forming), construction and interpretation of energy level diagrams, negative and positive enthalpy changes (ΔH), experimental measurement of heat of reaction using a polystyrene cup calorimeter, and mathematical calculations using Q = mcΔθ.",

  // High-yield syllabus summary points
  summaryPoints: [
    "Every chemical reaction involves an energy exchange with the surroundings due to breaking of bonds in reactants (endothermic, requires energy) and formation of new bonds in products (exothermic, releases energy).",
    "Exothermic reactions release thermal energy to the surroundings; the temperature of the reaction mixture rises.",
    "In an exothermic reaction, the chemical potential energy of the reactants is greater than that of the products; the enthalpy change is negative (ΔH < 0).",
    "Common exothermic reactions: Combustion of fuels (gas, petrol, coal), acid-base neutralisation, cellular respiration, reaction of reactive metals with acids (Mg + 2HCl), and slaking of lime (CaO + H₂O ──> Ca(OH)₂).",
    "Endothermic reactions absorb thermal energy from the surroundings; the temperature of the reaction mixture falls.",
    "In an endothermic reaction, the chemical potential energy of the products is greater than that of the reactants; the enthalpy change is positive (ΔH > 0).",
    "Common endothermic reactions: Photosynthesis, thermal decomposition of metal carbonates (CaCO₃ ──> CaO + CO₂), and dissolution of ammonium chloride (NH₄Cl) or urea in water.",
    "The quantity of heat evolved or absorbed is measured using a simple polystyrene cup calorimeter and calculated using the formula: Q = m × c × Δθ.",
    "In calorimetry calculations, water density is assumed to be 1.0 g cm⁻³ (1 cm³ = 1 g) and specific heat capacity of water c = 4.2 J g⁻¹ °C⁻¹ (or 4200 J kg⁻¹ °C⁻¹).",
    "Assumptions in simple calorimetry: (1) Negligible heat loss to the surroundings, (2) Negligible heat absorbed by the polystyrene container, and (3) The solution has the same density and specific heat capacity as pure water."
  ],

  subtopics: [
    {
      id: "8.1",
      order: 1,
      titleEn: "Exothermic Reactions",
      titleSi: "තාපදායක ප්‍රතික්‍රියා",
      textbookSection: "Section 8.1 (Pages 209 - 212)",
      readingTimeMinutes: 8,
      keyTakeaways: [
        "Exothermic reactions transfer heat energy from the reacting chemical system into the surrounding environment.",
        "The reaction mixture feels warm/hot, and a thermometer placed inside registers an increase in temperature (Δθ > 0).",
        "Reactants possess higher chemical energy than products; the excess potential energy is liberated as heat.",
        "Enthalpy change ΔH is negative (ΔH < 0).",
        "Energy Level Diagram: Reactants level is drawn higher; products level is drawn lower; arrow points downwards indicating energy released.",
        "Examples: Combustion of methane (CH₄ + 2O₂ ──> CO₂ + 2H₂O + heat), neutralisation of HCl with NaOH, slaking of quicklime (CaO + H₂O ──> Ca(OH)₂)."
      ],
      keyDefinitions: [
        {
          term: "Exothermic Reaction",
          definition: "A chemical reaction that liberates thermal energy to the surrounding environment, resulting in a temperature increase of the reaction mixture (ΔH < 0)."
        },
        {
          term: "Enthalpy Change (ΔH)",
          definition: "The net difference between the chemical potential energy content of the products and the chemical potential energy content of the reactants at constant pressure (ΔH = H_products - H_reactants)."
        },
        {
          term: "Energy Level Diagram",
          definition: "A graphical representation showing the relative chemical potential energy levels of reactants and products during the progression of a chemical reaction."
        }
      ],
      sections: [
        {
          heading: "8.1.1 Energetics & Energy Level Diagram of Exothermic Reactions",
          content: "### Nature of Exothermic Reactions:\nIn all chemical transformations, old chemical bonds in reactant molecules are broken and new bonds are synthesized in product molecules:\n- **Bond Breaking**: Absorbs energy from surroundings (Endothermic step).\n- **Bond Formation**: Releases energy into surroundings (Exothermic step).\n- When the energy **released** during product bond formation is greater than the energy **absorbed** during reactant bond cleavage, the net process is **exothermic**.\n\n### Characteristics:\n- Heat is evolved into the surroundings.\n- Temperature of the reaction vessel rises.\n- **Energy of Reactants > Energy of Products**.\n- Enthalpy change: **ΔH = H(products) - H(reactants) < 0** (negative value).\n\n### General Equation:\n- **Reactants ──> Products + Heat Energy**\n- *Examples*:\n  - **Combustion of Methane**: CH₄(g) + 2O₂(g) ──> CO₂(g) + 2H₂O(l) + 890 kJ mol⁻¹\n  - **Neutralisation**: HCl(aq) + NaOH(aq) ──> NaCl(aq) + H₂O(l) + 57.3 kJ mol⁻¹\n  - **Slaking of Quicklime**: CaO(s) + H₂O(l) ──> Ca(OH)₂(s) + Heat",
          diagram: {
            url: "/images/unit08/fig_8_1_exothermic_diagram.png",
            caption: "Figure 8.1: Energy level diagram for an exothermic reaction showing higher reactant energy, lower product energy, and downward heat liberation arrow (ΔH < 0)."
          }
        }
      ]
    },
    {
      id: "8.2",
      order: 2,
      titleEn: "Endothermic Reactions",
      titleSi: "තාපාවශෝෂක ප්‍රතික්‍රියා",
      textbookSection: "Section 8.2 (Pages 213 - 214)",
      readingTimeMinutes: 8,
      keyTakeaways: [
        "Endothermic reactions absorb heat energy from the surrounding environment into the chemical system.",
        "The reaction mixture feels cold to the touch, and a thermometer registers a decrease in temperature (Δθ < 0).",
        "Reactants possess lower chemical energy than products; the absorbed thermal energy is converted and stored as chemical potential energy.",
        "Enthalpy change ΔH is positive (ΔH > 0).",
        "Energy Level Diagram: Reactants level is drawn lower; products level is drawn higher; arrow points upwards indicating energy absorbed.",
        "Examples: Photosynthesis (6CO₂ + 6H₂O + light ──> C₆H₁₂O₆ + 6O₂), thermal decomposition of limestone (CaCO₃ ──> CaO + CO₂), dissolving NH₄Cl or urea in water."
      ],
      keyDefinitions: [
        {
          term: "Endothermic Reaction",
          definition: "A chemical reaction that absorbs thermal energy from the surrounding environment, resulting in a temperature decrease of the reaction mixture (ΔH > 0)."
        },
        {
          term: "Thermal Decomposition",
          definition: "A chemical decomposition reaction driven by the continuous absorption of heat energy that breaks a single compound down into two or more simpler substances."
        }
      ],
      sections: [
        {
          heading: "8.2.1 Energetics & Energy Level Diagram of Endothermic Reactions",
          content: "### Nature of Endothermic Reactions:\nWhen the energy required to break bonds in reactant molecules exceeds the energy released during product bond formation, heat energy is taken in from the surroundings.\n\n### Characteristics:\n- Thermal energy is absorbed from the surroundings.\n- Temperature of the reaction vessel drops noticeably.\n- **Energy of Products > Energy of Reactants**.\n- Enthalpy change: **ΔH = H(products) - H(reactants) > 0** (positive value).\n\n### General Equation:\n- **Reactants + Heat Energy ──> Products**\n- *Examples*:\n  - **Photosynthesis**: 6CO₂(g) + 6H₂O(l) + Solar Energy ──> C₆H₁₂O₆(s) + 6O₂(g)\n  - **Thermal Decomposition of Calcium Carbonate**: CaCO₃(s) + Heat ──> CaO(s) + CO₂(g)\n  - **Dissolution of Ammonium Salts**: NH₄Cl(s) + H₂O(l) ──> NH₄⁺(aq) + Cl⁻(aq) [temperature drops by several degrees Celsius]\n  - **Citric Acid and Sodium Bicarbonate Reaction**: C₆H₈O₇(aq) + 3NaHCO₃(s) ──> Na₃C₆H₅O₇(aq) + 3H₂O(l) + 3CO₂(g) [endothermic fizzing reaction utilized in sherbet sweets]",
          diagram: {
            url: "/images/unit08/fig_8_2_endothermic_diagram.png",
            caption: "Figure 8.2: Energy level diagram for an endothermic reaction showing lower reactant energy, higher product energy, and upward heat absorption arrow (ΔH > 0)."
          }
        }
      ]
    },
    {
      id: "8.3",
      order: 3,
      titleEn: "Quantitative Measurement of Heat Changes",
      titleSi: "තාප විපර්යාස ප්‍රමාණාත්මකව මැනීම",
      textbookSection: "Section 8.3 (Pages 214 - 220)",
      readingTimeMinutes: 10,
      keyTakeaways: [
        "Heat exchanged in a chemical reaction in solution is measured using a simple polystyrene cup calorimeter.",
        "Calorimeter formula: Q = m × c × Δθ, where Q = heat in Joules (J), m = mass of solution in grams (g), c = specific heat capacity of water (4.2 J g⁻¹ °C⁻¹), and Δθ = temperature change (°C).",
        "Density of dilute aqueous solution is approximated as 1.0 g cm⁻³ (e.g., 50 cm³ HCl + 50 cm³ NaOH = 100 cm³ total = 100 g mass).",
        "Molar heat of reaction: ΔH = -Q / n (where n is the number of moles of water formed or reactant consumed).",
        "Calorimetric assumptions: (1) No heat lost to the surroundings or absorbed by the polystyrene cup, (2) Specific heat capacity and density of solution equal pure water."
      ],
      keyDefinitions: [
        {
          term: "Calorimetry",
          definition: "The experimental scientific technique of quantitatively measuring the amount of heat energy released or absorbed during a chemical reaction or physical phase transition."
        },
        {
          term: "Specific Heat Capacity (c)",
          definition: "The quantity of heat energy required to raise the temperature of exactly one unit mass (1 kg or 1 g) of a given substance by one degree Celsius (1 °C or 1 K). For water, c = 4.2 J g⁻¹ °C⁻¹."
        },
        {
          term: "Calorimeter",
          definition: "An insulated thermal apparatus (such as an expanded polystyrene cup with a lid and thermometer) used to contain chemical reactions and accurately measure associated temperature changes."
        }
      ],
      sections: [
        {
          heading: "8.3.1 Polystyrene Calorimeter & The Equation Q = mcΔθ",
          content: "### Experimental Setup of a Simple Calorimeter:\n- An **expanded polystyrene cup** is used because polystyrene is an excellent thermal insulator with very low heat capacity, minimizing heat conduction with the room.\n- Fitted with a cardboard/plastic lid containing two small holes: one for a sensitive **thermometer** (0.1°C divisions) and one for a glass or plastic **stirrer**.\n\n### The Fundamental Heat Equation:\n- **Q = m × c × Δθ**\n  - where:\n    - **Q** = Heat energy evolved or absorbed (in Joules, **J**)\n    - **m** = Total mass of the reacting liquid mixture (in grams, **g**; assuming density = 1.0 g cm⁻³)\n    - **c** = Specific heat capacity of water = **4.2 J g⁻¹ °C⁻¹** (or 4200 J kg⁻¹ °C⁻¹)\n    - **Δθ** = Temperature change = |θ_final - θ_initial| (in **°C**)",
          diagram: {
            url: "/images/unit08/fig_8_3_calorimeter.png",
            caption: "Figure 8.3: Simple polystyrene cup calorimeter apparatus with thermometer and stirrer for measuring heat of reaction."
          }
        },
        {
          heading: "8.3.2 Step-by-Step Calculation: Heat of Neutralisation",
          content: "### Worked Example Protocol:\n- **Data**:\n  - Volume of 1.0 mol dm⁻³ HCl = 50 cm³\n  - Volume of 1.0 mol dm⁻³ NaOH = 50 cm³\n  - Initial temperature of both solutions (θ₁) = 25.0 °C\n  - Highest temperature reached after mixing (θ₂) = 31.5 °C\n\n### Step 1: Calculate Total Mass (m)\n- Total volume = 50 + 50 = 100 cm³\n- Mass = Volume × Density = 100 cm³ × 1.0 g cm⁻³ = **100 g**.\n\n### Step 2: Calculate Temperature Rise (Δθ)\n- Δθ = 31.5 °C - 25.0 °C = **6.5 °C**.\n\n### Step 3: Calculate Heat Released (Q)\n- Q = m × c × Δθ = 100 g × 4.2 J g⁻¹ °C⁻¹ × 6.5 °C\n- **Q = 2730 Joules (2.73 kJ)**.\n\n### Step 4: Calculate Molar Enthalpy Change of Neutralisation (ΔH)\n- Moles of HCl reacted (n) = C × V = 1.0 mol dm⁻³ × (50 / 1000) dm³ = 0.05 mol\n- Moles of water formed = 0.05 mol\n- Heat released per 1 mole of water: ΔH = -(2.73 kJ / 0.05 mol) = **-54.6 kJ mol⁻¹**.\n\n### Key Experimental Assumptions:\n1. The polystyrene cup is an ideal insulator; no heat escapes to the air.\n2. The heat capacity of the cup and thermometer is negligible.\n3. The density and specific heat capacity of the resulting NaCl salt solution are identical to pure water."
        }
      ]
    }
  ]
};

