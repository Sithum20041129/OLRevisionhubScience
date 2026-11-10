/**
 * Complete Grade 11 Science - Unit 9 (Heat) Revision Guide Notes
 * Strictly aligned with the National Institute of Education (NIE) Official Curriculum.
 */

export const unit9RevisionData = {
  unitId: "g11-u9",
  unitNumber: 9,
  grade: 11,
  medium: "English",
  titleEn: "Heat",
  titleSi: "තාපය",
  textbookCode: "ENG11U09",
  textbookPages: "Pages 1 - 31",
  overviewEn: "This unit covers the foundational principles of thermal physics: temperature, thermometry and temperature scales (Celsius, Kelvin), heat as energy in transit, specific heat capacity (Q = mcΔθ), the principle of heat exchange, change of state and specific latent heat (Q = ml), heating and cooling curves, thermal expansion of solids, liquids, and gases, anomalous expansion of water, bimetallic strip applications, and the three modes of heat transfer (conduction, convection, radiation) including vacuum flask operation.",

  // High-yield syllabus summary points
  summaryPoints: [
    "Temperature is the measure of the degree of hotness or coldness of a body, directly proportional to the average kinetic energy of its constituent particles.",
    "Heat is the form of thermal energy that transfers spontaneously from a region of higher temperature to a region of lower temperature.",
    "Temperature scales: Celsius (°C) and Kelvin (SI unit, K). Conversion: T(K) = θ(°C) + 273.15. The lower fixed point is 0°C (melting point of pure ice); the upper fixed point is 100°C (boiling point of pure water at standard pressure).",
    "Specific heat capacity (c) is the heat energy required to raise the temperature of 1 kg of a substance by 1 °C (or 1 K). Formula: Q = m × c × Δθ.",
    "Water has an exceptionally high specific heat capacity (4200 J kg⁻¹ °C⁻¹), which moderates coastal climates and makes water an ideal automotive engine coolant.",
    "During a change of physical state (melting, boiling, freezing, condensation), temperature remains strictly constant despite continuous heat exchange.",
    "Specific latent heat (l) is the heat absorbed or released when 1 kg of a substance changes state at constant temperature (Q = m × l). Fusion of ice: l_f = 3.36 × 10⁵ J kg⁻¹; Vaporisation of water: l_v = 2.26 × 10⁶ J kg⁻¹.",
    "A bimetallic strip consists of two bonded metals with different expansion coefficients (e.g., brass and iron); when heated, brass expands more, causing the strip to bend, operating electrical thermostats and fire alarms.",
    "Anomalous expansion of water: Between 0°C and 4°C, water contracts upon heating, reaching maximum density (1000 kg m⁻³) at 4°C. Ice is less dense and floats, insulating aquatic life in frozen lakes.",
    "Three modes of heat transfer: Conduction (requires particle vibration and free electrons in solids), Convection (requires fluid circulation currents due to density differences), and Radiation (electromagnetic infrared waves traveling through vacuum).",
    "A vacuum flask (Thermos) eliminates conduction and convection via a double-walled evacuated glass chamber, minimizes radiation via silvered mirrored surfaces, and prevents evaporation via an insulated stopper."
  ],

  subtopics: [
    {
      id: "9.1",
      order: 1,
      titleEn: "Temperature",
      titleSi: "උෂ්ණත්වය",
      textbookSection: "Section 9.1 (Pages 1 - 5)",
      readingTimeMinutes: 8,
      keyTakeaways: [
        "Temperature measures the average kinetic energy of molecular motion inside a substance.",
        "Human touch cannot provide quantitative or accurate temperature measurements.",
        "Thermometers exploit physical thermometric properties that change linearly with temperature (e.g., volume of liquid, gas pressure, electrical resistance).",
        "Fixed points on the Celsius scale: Lower fixed point = 0°C (ice point); Upper fixed point = 100°C (steam point at standard atmospheric pressure 101.3 kPa).",
        "Kelvin scale is the absolute thermodynamic SI scale: T(K) = θ(°C) + 273.15; Absolute zero (0 K = -273.15°C) is the lowest possible temperature where particle motion ceases.",
        "Mercury-in-glass thermometer advantages: High boiling point (357°C), uniform expansion, opaque silvery visibility, does not wet glass; Alcohol thermometer advantages: Very low freezing point (-115°C) suitable for polar climates.",
        "Clinical thermometer features a narrow capillary constriction above the bulb to prevent mercury from retracting when removed from the patient's body."
      ],
      keyDefinitions: [
        {
          term: "Temperature",
          definition: "A physical quantity that expresses the degree of hotness or coldness of a body, representing the average kinetic energy of the particles within the system."
        },
        {
          term: "Thermometric Property",
          definition: "A measurable physical property of a substance (such as volume, pressure, or electrical resistance) that varies continuously, monotonically, and predictably with temperature changes."
        },
        {
          term: "Fixed Points",
          definition: "Standard, easily reproducible physical temperatures (specifically the melting point of ice at 0°C and boiling point of water at 100°C at standard pressure) used to calibrate a temperature scale."
        },
        {
          term: "Absolute Zero",
          definition: "The theoretical lower temperature limit (0 Kelvin or -273.15 °C) at which all classical thermal motion of atoms and molecules completely ceases."
        }
      ],
      sections: [
        {
          heading: "9.1.1 Temperature Scales & Calibration",
          content: "### Nature of Temperature:\nAll matter is composed of continuously vibrating atoms or molecules. As thermal energy is supplied, particle vibration speeds up. Temperature is the macroscopic measure of this **average kinetic energy**.\n\n### Temperature Scales:\n1. **Celsius Scale (°C)**:\n   - **Lower Fixed Point (0°C)**: The temperature of pure melting ice at standard atmospheric pressure (1 atm = 101.3 kPa).\n   - **Upper Fixed Point (100°C)**: The temperature of steam above boiling pure water at standard atmospheric pressure.\n   - The interval between fixed points is divided into 100 equal degree divisions.\n2. **Kelvin Scale (SI Unit, K)**:\n   - Fundamental scientific scale without negative values.\n   - Absolute Zero: **0 K = -273.15 °C**.\n   - Conversion Formula: **T (K) = θ (°C) + 273**\n   - A temperature change of 1 K is identically equal to a change of 1 °C (**ΔT = Δθ**).",
          diagram: {
            url: "/images/unit09/fig_9_1_thermometer.png",
            caption: "Figure 9.1: Construction of a liquid-in-glass thermometer showing thin-walled glass bulb, narrow capillary bore, and stem calibration."
          }
        },
        {
          heading: "9.1.2 Liquid-in-Glass Thermometers & Construction",
          content: "### Structural Features of Laboratory Thermometers:\n- **Thin Glass Bulb**: Allows rapid heat conduction from the environment to the thermometric liquid.\n- **Narrow Capillary Bore**: A small volume expansion produces a large, easily readable rise in liquid column height, increasing sensitivity.\n- **Thick Glass Stem**: Acts as a magnifying lens to view the thin thread of liquid clearly.\n\n### Comparison: Mercury vs Alcohol as Thermometric Liquids:\n\n| Property | Mercury | Alcohol |\n| :--- | :--- | :--- |\n| **Freezing Point** | -39 °C | -115 °C (ideal for extremely cold polar environments) |\n| **Boiling Point** | 357 °C (can measure high temperatures) | 78 °C (cannot measure boiling water) |\n| **Visibility** | Opaque silvery; easily visible | Clear liquid; must be dyed red or blue |\n| **Adhesion to Glass** | Does not wet glass; forms clean convex meniscus | Wets glass; clings to walls forming concave meniscus |\n| **Expansion Uniformity** | Highly uniform expansion | Slightly non-linear expansion |\n\n### Clinical Thermometer:\n- Designed specifically to measure human body temperature (calibrated from **35°C to 42°C**).\n- Features a **narrow constriction (kink)** just above the bulb. When removed from the mouth or armpit, the cooling mercury thread breaks at the constriction, preserving the maximum reading until shaken vigorously down."
        }
      ]
    },
    {
      id: "9.2",
      order: 2,
      titleEn: "Heat",
      titleSi: "තාපය",
      textbookSection: "Section 9.2 (Pages 6 - 11)",
      readingTimeMinutes: 10,
      keyTakeaways: [
        "Heat is the total thermal energy transferred between bodies due to a temperature gradient (measured in Joules, J).",
        "Heat Capacity (C = Q / Δθ): Heat required to raise the temperature of an entire object by 1 °C (J °C⁻¹).",
        "Specific Heat Capacity (c = Q / (m × Δθ)): Heat required to raise the temperature of 1 kg mass of a substance by 1 °C (J kg⁻¹ °C⁻¹).",
        "Heat calculation formula: Q = m × c × Δθ.",
        "Principle of Conservation of Heat: In an isolated thermal system with no external heat loss, Heat Lost by Hot Bodies = Heat Gained by Cold Bodies.",
        "Water has a very high specific heat capacity (4200 J kg⁻¹ °C⁻¹), absorbing massive heat with only minor temperature changes (ideal engine coolant and climatic thermal buffer)."
      ],
      keyDefinitions: [
        {
          term: "Heat",
          definition: "Thermal energy in transit between two systems or bodies as a consequence of a temperature difference existing between them, measured in Joules (J)."
        },
        {
          term: "Heat Capacity (C)",
          definition: "The amount of heat energy required to raise the temperature of a given body or object by one degree Celsius (1 °C or 1 K), denoted by C = Q / Δθ."
        },
        {
          term: "Specific Heat Capacity (c)",
          definition: "The quantity of heat energy required to raise the temperature of exactly one kilogram (1 kg) of a substance by one degree Celsius (1 °C or 1 K), denoted by c = Q / (m × Δθ)."
        },
        {
          term: "Principle of Heat Exchange",
          definition: "The thermodynamic principle stating that when hot and cold objects interact in a thermally insulated system, the total quantity of heat lost by the hotter bodies equals the total quantity of heat gained by the cooler bodies until thermal equilibrium is attained."
        }
      ],
      sections: [
        {
          heading: "9.2.1 Heat, Heat Capacity & The Equation Q = mcΔθ",
          content: "### Fundamental Heat Equation:\nWhen an object of mass $m$ and specific heat capacity $c$ undergoes a temperature change $\\Delta\\theta$:\n- **Q = m × c × Δθ**\n  - **Q** = Heat energy transferred in Joules (J)\n  - **m** = Mass of substance in kilograms (kg)\n  - **c** = Specific heat capacity in $\\text{J kg}^{-1}\\ ^\\circ\\text{C}^{-1}$\n  - **Δθ** = Temperature change $(\\theta_2 - \\theta_1)$ in $^\\circ\\text{C}$ or $\\text{K}$\n\n### Typical Specific Heat Capacity Values:\n- **Water**: $4200\\ \\text{J kg}^{-1}\\ ^\\circ\\text{C}^{-1}$ (Very High)\n- **Aluminium**: $900\\ \\text{J kg}^{-1}\\ ^\\circ\\text{C}^{-1}$\n- **Iron / Steel**: $450\\ \\text{J kg}^{-1}\\ ^\\circ\\text{C}^{-1}$\n- **Copper**: $390\\ \\text{J kg}^{-1}\\ ^\\circ\\text{C}^{-1}$\n- **Lead**: $130\\ \\text{J kg}^{-1}\\ ^\\circ\\text{C}^{-1}$\n\n### Significance of Water's High Specific Heat Capacity:\n1. **Climatic Moderator**: Oceans and large lakes heat up and cool down far slower than adjacent landmasses, buffering island and coastal regions from extreme seasonal temperature fluctuations.\n2. **Industrial & Automotive Coolant**: Water absorbs large quantities of combustion heat from vehicle engines with only a small temperature rise.\n3. **Therapeutic Hot Water Bottles**: Retains warmth for many hours due to high heat storage capacity."
        },
        {
          heading: "9.2.2 The Principle of Heat Exchange & Calculations",
          content: "### Principle of Heat Exchange:\n- **Heat Lost by Hot Bodies = Heat Gained by Cold Bodies**\n- **m₁ × c₁ × (θ_hot - θ_final) = m₂ × c₂ × (θ_final - θ_cold)**\n\n### Worked Example:\n- A piece of copper of mass $0.2\\ \\text{kg}$ at $100^\\circ\\text{C}$ is placed into $0.1\\ \\text{kg}$ of water at $25^\\circ\\text{C}$. Find the final equilibrium temperature $\\theta$ (assume $c_\\text{copper} = 400\\ \\text{J kg}^{-1}\\ ^\\circ\\text{C}^{-1}$, $c_\\text{water} = 4200\\ \\text{J kg}^{-1}\\ ^\\circ\\text{C}^{-1}$, and negligible heat loss):\n  - Heat lost by copper = $0.2 \\times 400 \\times (100 - \\theta) = 80(100 - \\theta) = 8000 - 80\\theta$\n  - Heat gained by water = $0.1 \\times 4200 \\times (\\theta - 25) = 420(\\theta - 25) = 420\\theta - 10500$\n  - Equating both: $8000 - 80\\theta = 420\\theta - 10500$\n  - $500\\theta = 18500 \\implies \\theta = \\mathbf{37.0^\\circ\\text{C}}$."
        }
      ]
    },
    {
      id: "9.3",
      order: 3,
      titleEn: "Change of State of Matter",
      titleSi: "පදාර්ථයේ අවස්ථා විපර්යාස",
      textbookSection: "Section 9.3 (Pages 12 - 16)",
      readingTimeMinutes: 10,
      keyTakeaways: [
        "A change of physical state (solid ⇌ liquid ⇌ gas) occurs at a fixed characteristic temperature.",
        "During a phase change, the temperature remains CONSTANT because absorbed thermal energy is used exclusively to overcome intermolecular attractive forces, not to increase particle kinetic energy.",
        "Specific Latent Heat of Fusion (l_f): Heat required to melt 1 kg of solid to liquid at melting point without temperature change (Ice: l_f = 3.36 × 10⁵ J kg⁻¹).",
        "Specific Latent Heat of Vaporisation (l_v): Heat required to vaporise 1 kg of liquid to gas at boiling point without temperature change (Water: l_v = 2.26 × 10⁶ J kg⁻¹).",
        "Latent heat formula: Q = m × l.",
        "Heating curve of water shows horizontal plateaus at 0°C (melting) and 100°C (boiling).",
        "Boiling steam at 100°C produces much more severe burns than boiling water at 100°C because steam releases an extra 2.26 × 10⁶ J kg⁻¹ of latent heat upon condensing on skin."
      ],
      keyDefinitions: [
        {
          term: "Latent Heat",
          definition: "Thermal energy absorbed or released by a substance during a transition between physical states of matter occurring at constant temperature."
        },
        {
          term: "Specific Latent Heat of Fusion (l_f)",
          definition: "The amount of heat energy required to change exactly 1 kg of a solid substance completely into liquid at its constant melting point."
        },
        {
          term: "Specific Latent Heat of Vaporisation (l_v)",
          definition: "The amount of heat energy required to change exactly 1 kg of a liquid substance completely into vapour at its constant boiling point."
        },
        {
          term: "Heating Curve",
          definition: "A graphical plot of temperature versus elapsed time (or heat supplied) illustrating the thermal progression through solid, liquid, and gas phases with distinct horizontal plateaus at phase transitions."
        }
      ],
      sections: [
        {
          heading: "9.3.1 Latent Heat of Fusion & Vaporisation",
          content: "### Why Temperature Remains Constant During Phase Change:\n- Temperature reflects the average kinetic energy of moving particles.\n- When heat is supplied to melting ice at 0°C, the added energy does not accelerate molecular motion; instead, it performs work breaking the rigid hydrogen-bonded crystal lattice of ice into mobile liquid water.\n- Similarly, at 100°C, latent heat of vaporisation completely overcomes intermolecular cohesion forces, separating liquid water molecules into free gas particles.\n\n### Formula for Latent Heat:\n- **Q = m × l**\n  - where:\n    - **Q** = Latent heat absorbed or released in Joules (J)\n    - **m** = Mass of substance in kilograms (kg)\n    - **l** = Specific latent heat in $\\text{J kg}^{-1}$\n\n### Values for Water:\n- **Specific Latent Heat of Fusion of Ice ($l_f$)** = **$3.36 \\times 10^5\\ \\text{J kg}^{-1}$** (or $336\\ \\text{kJ kg}^{-1}$)\n- **Specific Latent Heat of Vaporisation of Water ($l_v$)** = **$2.26 \\times 10^6\\ \\text{J kg}^{-1}$** (or $2260\\ \\text{kJ kg}^{-1}$)\n- Notice $l_v \\gg l_f$ because completely separating liquid molecules against atmospheric pressure requires vastly more energy than merely breaking a solid crystal lattice.",
          diagram: {
            url: "/images/unit09/fig_9_2_heating_curve.png",
            caption: "Figure 9.2: Heating curve of water showing temperature rise of ice, horizontal melting plateau at 0°C, liquid heating, and boiling plateau at 100°C."
          }
        }
      ]
    },
    {
      id: "9.4",
      order: 4,
      titleEn: "Thermal Expansion",
      titleSi: "තාප ප්‍රසාරණය",
      textbookSection: "Section 9.4 (Pages 17 - 20)",
      readingTimeMinutes: 9,
      keyTakeaways: [
        "Solids, liquids, and gases expand when heated and contract when cooled (Gases expand most, liquids moderately, solids least).",
        "Different solids expand at different rates; for example, brass expands more than iron for the same temperature rise.",
        "A bimetallic strip consists of two bonded strips of metals with different expansion rates; heating causes it to bend toward the metal with lower expansion (iron).",
        "Applications of bimetallic strips: Electric thermostats in irons/water heaters, fire alarms, and circuit flashers.",
        "Anomalous Expansion of Water: Water contracts on heating from 0°C to 4°C, reaching maximum density at 4°C (1000 kg m⁻³); water expands on cooling from 4°C to 0°C.",
        "Because ice at 0°C has lower density (~917 kg m⁻³) than water, ice floats on water surfaces, insulating the 4°C water beneath and allowing fish and aquatic life to survive frozen winters."
      ],
      keyDefinitions: [
        {
          term: "Thermal Expansion",
          definition: "The physical tendency of matter to increase in volume, area, or linear dimensions in response to an increase in temperature as particle kinetic vibrations push atoms further apart."
        },
        {
          term: "Bimetallic Strip",
          definition: "A composite mechanical strip composed of two distinct metals having different coefficients of thermal expansion riveted or welded firmly together along their length."
        },
        {
          term: "Anomalous Expansion of Water",
          definition: "The abnormal thermal behavior of liquid water wherein it contracts instead of expanding when heated from 0 °C to 4 °C, attaining its maximum physical density at exactly 4 °C."
        }
      ],
      sections: [
        {
          heading: "9.4.1 Bimetallic Strips & Applications",
          content: "### Mechanics of Bimetallic Strips:\n- Constructed by riveting two dissimilar metal strips of identical initial length (typically **brass** and **iron / invar**).\n- When heated, brass expands at a significantly faster rate than iron. Because they are firmly anchored together, the composite strip is forced to curve into an arc with **brass on the outside (longer curve)** and **iron on the inside (shorter curve)**.\n- When cooled below room temperature, brass contracts more than iron, curving in the reverse direction.\n\n### Practical Applications:\n1. **Thermostat in Electric Iron & Water Heater**: As the heating element warms, the bimetallic strip bends away from an electrical contact screw, breaking the circuit. When temperature drops, the strip straightens, re-establishing contact and reigniting heating.\n2. **Bimetallic Fire Alarm**: Heat from an outbreak of fire causes the strip to bend toward an adjustable contact screw, completing an electric bell alarm circuit.",
          diagram: {
            url: "/images/unit09/fig_9_3_bimetallic_strip.png",
            caption: "Figure 9.3: Bimetallic strip composed of brass and iron bending upon heating and its application in an automatic electric circuit breaker."
          }
        },
        {
          heading: "9.4.2 Anomalous Expansion of Water & Survival of Aquatic Life",
          content: "### Abnormal Behavior of Water (0°C to 4°C):\n- For almost all substances, heating causes continuous expansion and cooling causes continuous contraction.\n- **Water is unique**:\n  - When water at **0°C** is heated, its volume **decreases** and its density **increases** until it reaches **4°C**.\n  - At **4°C**, water reaches its **maximum density** of **$1.000\\ \\text{g cm}^{-3}$ ($1000\\ \\text{kg m}^{-3}$)**.\n  - Heating water above 4°C causes it to expand normally.\n\n### Ecological Significance in Freezing Climates:\n1. As winter sets in, surface water cools toward 4°C, becomes denser, and sinks to the bottom, pushing warmer water to the top (convection).\n2. Once the entire body of water reaches 4°C, further cooling of surface water below 4°C makes it **less dense**, so it remains at the surface.\n3. At 0°C, surface water freezes into an ice crust that floats because ice density ($0.917\\ \\text{g cm}^{-3}$) is less than water.\n4. Ice and water are poor conductors of heat. The floating ice blanket insulates the deep water below, which remains liquid at **4°C**, allowing fish, aquatic plants, and marine organisms to survive beneath frozen lakes.",
          diagram: {
            url: "/images/unit09/fig_9_4_anomalous_expansion.png",
            caption: "Figure 9.4: Anomalous expansion of water: Density curve peaking at 4°C and ice layer insulating living aquatic organisms in a frozen pond."
          }
        }
      ]
    },
    {
      id: "9.5",
      order: 5,
      titleEn: "Heat Transfer",
      titleSi: "තාප සම්ප්‍රේෂණය",
      textbookSection: "Section 9.5 (Pages 21 - 31)",
      readingTimeMinutes: 10,
      keyTakeaways: [
        "Heat transfers by three distinct mechanisms: Conduction (solids), Convection (fluids), and Radiation (electromagnetic waves).",
        "Conduction occurs through inter-atomic lattice collisions and free valence electron movement; metals are excellent conductors, while air, glass, and wood are insulators.",
        "Convection involves the macroscopic buoyant circulation of fluid particles driven by temperature-dependent density gradients.",
        "Natural convection drives daytime Sea Breezes (sea to land) and nighttime Land Breezes (land to sea).",
        "Radiation does not require any material medium; travels through a vacuum at the speed of light ($3 \\times 10^8\\ \\text{m s}^{-1}$) via infrared waves.",
        "Dull black surfaces are the best absorbers and best emitters of radiation; shiny polished white surfaces are the best reflectors and poorest emitters.",
        "A Vacuum Flask (Thermos) minimizes conduction and convection via a vacuum gap, minimizes radiation via double silvered glass walls, and prevents evaporation via a tight insulated stopper."
      ],
      keyDefinitions: [
        {
          term: "Conduction",
          definition: "The transfer of thermal energy through a substance from a region of higher temperature to lower temperature via molecular vibrations and free electron motion without bulk movement of the medium."
        },
        {
          term: "Convection",
          definition: "The transfer of heat energy within a fluid (liquid or gas) through the physical circulation and bulk movement of heated, less dense fluid portions rising while cooler, denser portions sink."
        },
        {
          term: "Radiation",
          definition: "The mode of heat transfer that emits thermal energy in the form of electromagnetic infrared radiation that can propagate across a vacuum without requiring any physical material medium."
        },
        {
          term: "Vacuum Flask",
          definition: "A thermally insulated double-walled glass container designed to maintain liquids hot or cold by systematically minimizing heat transfer by conduction, convection, and radiation."
        }
      ],
      sections: [
        {
          heading: "9.5.1 Conduction, Convection & Sea/Land Breezes",
          content: "### 1. Thermal Conduction:\n- Dominant in solids. Heat energy propagates by vibrating atoms colliding with neighbors and, in metals, by rapid diffusion of mobile **free electrons**.\n- **Conductors**: Silver, copper, aluminium, iron.\n- **Insulators**: Air, wool, fiberglass, cork, plastic, wood.\n\n### 2. Thermal Convection & Coastal Breezes:\n- **Sea Breeze (Daytime)**:\n  - Solar radiation heats land faster than water (since land has a lower specific heat capacity than sea water).\n  - Warm air over the land expands, decreases in density, and rises upwards.\n  - Cooler, denser air from above the sea moves inland to replace the rising warm air, establishing a refreshing **sea breeze**.\n- **Land Breeze (Nighttime)**:\n  - At night, land loses heat rapidly by radiation, cooling faster than sea water.\n  - Warmer air above the sea rises, and cooler, denser air from the land blows seaward, creating a **land breeze**.",
          diagram: {
            url: "/images/unit09/fig_9_5_sea_land_breeze.png",
            caption: "Figure 9.5: Convection currents responsible for daytime Sea Breeze and nighttime Land Breeze along coastal shorelines."
          }
        },
        {
          heading: "9.5.2 Radiation & Construction of a Vacuum Flask",
          content: "### 3. Thermal Radiation:\n- Heat transfers as infrared electromagnetic waves without material contact.\n- **Surface Properties**:\n  - **Dull, Matte Black Surfaces**: Excellent absorbers and excellent emitters of thermal radiation.\n  - **Shiny, Polished, Silver Surfaces**: Poor absorbers, poor emitters, and excellent reflectors of thermal radiation (solar water heaters use matte black collector plates; tea pots are silvered).\n\n### How a Vacuum Flask (Thermos) Eliminates Heat Transfer:\n1. **Evacuated Space (Vacuum) Between Double Glass Walls**: Eliminates heat transfer by **conduction and convection**, because both mechanisms strictly require material particles.\n2. **Silvered Glass Surfaces Facing the Gap**: The mirror-like silver coatings reflect radiated heat back into the flask (if hot) or away from the flask (if cold), reducing heat loss by **radiation** to a minimum.\n3. **Insulating Cork / Plastic Stopper**: Low thermal conductivity prevents heat transfer by **conduction**, and tightly seals the opening to stop heat loss via **evaporation and convection currents**.\n4. **Protective Outer Casing & Shock-Absorbing Rubber Mounts**: Protects the delicate glass vessel from mechanical breakage.",
          diagram: {
            url: "/images/unit09/fig_9_6_vacuum_flask.png",
            caption: "Figure 9.6: Cross-section of a vacuum flask showing double-walled evacuated glass chamber, silvered reflecting walls, and insulated stopper."
          }
        }
      ]
    }
  ]
};

