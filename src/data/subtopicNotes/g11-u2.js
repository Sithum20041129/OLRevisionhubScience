/**
 * Complete Grade 11 Science - Unit 2 (Photosynthesis) Revision Guide Notes
 * Strictly aligned with the National Institute of Education (NIE) Official Curriculum.
 */

export const unit2RevisionData = {
  unitId: "g11-u2",
  unitNumber: 2,
  grade: 11,
  medium: "English",
  titleEn: "Photosynthesis",
  titleSi: "ප්‍රභාසංස්ලේෂණය",
  textbookCode: "ENG11U02",
  textbookPages: "Pages 20 - 29",
  overviewEn: "This unit covers the biochemical process of photosynthesis whereby green plants synthesize glucose using light energy, carbon dioxide, water, and chlorophyll. It details the light and dark reaction phases, essential external and internal factors, standard experimental proofs (starch test, light, CO₂, chlorophyll, and O₂ evolution), primary and secondary products, and ecological significance in sustaining biosphere equilibrium.",

  // High-yield syllabus summary points
  summaryPoints: [
    "Photosynthesis is the photochemical process by which autotrophic green plants synthesize organic food (glucose) from carbon dioxide and water using radiant solar energy absorbed by chlorophyll, releasing oxygen as a by-product.",
    "The overall balanced chemical equation: 6CO₂ + 6H₂O ──> C₆H₁₂O₆ + 6O₂ (under sunlight & chlorophyll).",
    "Photosynthesis occurs in chloroplasts and consists of two main stages: Light Reaction (occurs in grana/thylakoids; photolysis of water produces ATP, NADPH, and O₂) and Dark Reaction / Calvin Cycle (occurs in stroma; CO₂ is reduced to glucose without needing direct light).",
    "Essential external factors include light intensity and wavelength, carbon dioxide concentration, water availability, and temperature; internal factors include chlorophyll content and leaf anatomical adaptations.",
    "Destarched plants (kept in darkness for 48 hours to deplete stored starch via cellular respiration) are essential prior to conducting photosynthesis factor verification experiments.",
    "Starch is identified using the iodine test: leaf is boiled in water (kills cells, permeabilizes membranes), boiled in ethanol in a boiling water bath (dissolves chlorophyll without ignition risk), softened in warm water, and treated with iodine solution (blue-black color confirms starch; reddish-brown indicates absence).",
    "Experiments prove: Light is required (black paper shield), CO₂ is required (KOH absorbs CO₂), Chlorophyll is required (variegated leaf), and Oxygen gas is produced (Hydrilla funnel test, gas relights a glowing splint).",
    "Primary product is glucose, temporarily converted into insoluble osmotic-neutral starch during daytime, translocated through phloem as disaccharide sucrose, and stored long-term as starch, lipids, or proteins.",
    "Photosynthesis forms the fundamental energy gateway for all ecosystems, replenishes atmospheric O₂, removes excess greenhouse gas CO₂, and forms fossil energy reserves."
  ],

  subtopics: [
    {
      id: "2.1",
      order: 1,
      titleEn: "Factors Affecting Photosynthesis",
      titleSi: "ප්‍රභාසංස්ලේෂණයට බලපාන සාධක",
      textbookSection: "Section 2.1 (Pages 20 - 27)",
      readingTimeMinutes: 8,
      keyTakeaways: [
        "Photosynthesis requires two raw chemical materials (CO₂ and H₂O) and two physical agents (light energy and chlorophyll).",
        "Destarched plants must be used in physiological tests to ensure starch detected was synthesized strictly during the test exposure.",
        "Potassium hydroxide (KOH) pellets or solution are used as a chemical absorbent to remove carbon dioxide from sealed experimental chambers.",
        "Alcohol (ethanol) must always be heated in a water bath because it is highly inflammable.",
        "Variegated leaves (e.g., Croton, Acalypha) allow direct intra-leaf comparison of chlorophyll-containing green areas versus non-chlorophyll white/yellow zones.",
        "Oxygen gas produced by aquatic plants (Hydrilla) accumulates by downward displacement of water and is verified when it relights a glowing splint.",
        "Temperature affects the rate because the dark reaction is catalyzed by thermosensitive enzymes (optimum 25°C - 35°C)."
      ],
      keyDefinitions: [
        {
          term: "Photosynthesis",
          definition: "The photochemical process in green plants, algae, and cyanobacteria by which radiant light energy is captured by chlorophyll to synthesize glucose from inorganic carbon dioxide and water, releasing oxygen as a by-product."
        },
        {
          term: "Destarching",
          definition: "The experimental procedure of keeping a potted green plant in complete darkness for 24 to 48 hours so that all pre-existing starch stored in leaves is converted into soluble sugars and consumed by cellular respiration or translocated."
        },
        {
          term: "Photolysis of Water",
          definition: "The photochemical splitting of water molecules into hydrogen ions, electrons, and oxygen gas occurring in the thylakoid membranes of chloroplasts during the light-dependent phase of photosynthesis."
        },
        {
          term: "Variegated Leaf",
          definition: "A leaf possessing green patches (containing chlorophyll) and non-green white or cream patches (lacking chlorophyll), used experimentally to verify that chlorophyll is essential for photosynthesis."
        }
      ],
      sections: [
        {
          heading: "2.1.1 Overview & Biochemical Reactions of Photosynthesis",
          content: "### Photosynthetic Process & Biochemical Phases\nPhotosynthesis takes place within the **chloroplasts** of plant cells, predominantly located in the palisade and spongy mesophyll of leaves.\n\n### Overall Balanced Equation:\n**6CO₂ + 6H₂O ──> C₆H₁₂O₆ + 6O₂** *(in presence of solar light & chlorophyll)*\n\n### Two Successive Biochemical Stages:\n1. **Light Reaction (Light-Dependent Phase)**:\n   - **Site**: Thylakoid membranes / Grana of chloroplasts.\n   - Chlorophyll absorbs photons of radiant light, elevating electrons to higher energy states.\n   - **Photolysis of Water**: Absorbed energy splits water molecules: **2H₂O ──> 4H⁺ + 4e⁻ + O₂**.\n   - Oxygen gas (O₂) is discharged into the atmosphere as a by-product.\n   - High-energy intermediate carriers (**ATP** and **NADPH**) are synthesized.\n2. **Dark Reaction (Light-Independent Phase / Calvin Cycle)**:\n   - **Site**: Stroma (fluid matrix) of chloroplasts.\n   - Does not require light directly, but is driven by ATP and NADPH produced in the light phase.\n   - Atmospheric carbon dioxide (CO₂) is enzymatically fixed and reduced to **glucose (C₆H₁₂O₆)**.\n\n### Essential Factors Governing Photosynthesis:\n- **External Factors**: Light intensity, light wavelength (red and blue light absorbed most efficiently), CO₂ concentration (ambient ~0.04%), Water availability, Temperature (optimum 25°C - 35°C).\n- **Internal Factors**: Chlorophyll concentration, leaf age, stomatal density and aperture, internal leaf mesophyll structure.",
          diagram: {
            url: "/images/unit02/fig_2_1_starch_test.png",
            caption: "Figure 2.1: Experimental procedure for testing starch in a green leaf using iodine solution."
          }
        },
        {
          heading: "2.1.2 Standard Laboratory Experiments on Photosynthesis Factors",
          content: "### 1. Protocol for Testing Starch in a Leaf:\n- **Step 1: Boil leaf in water for 2-3 minutes**: Kills the living protoplasm, arrests all enzymatic activity, and breaks cell membranes to allow chemical penetration.\n- **Step 2: Boil leaf in ethanol using a water bath**: Dissolves and extracts green chlorophyll pigment, turning the leaf pale white. *(Precaution: Ethanol is highly inflammable; never heat over a naked flame directly—always use a water bath)*.\n- **Step 3: Wash leaf in warm water**: Softens the brittle leaf and rinses away residual ethanol.\n- **Step 4: Treat with Iodine solution**: Spread leaf flat on a white tile and add drops of potassium iodide/iodine solution.\n  - **Positive Result**: Dark blue-black coloration confirms the presence of starch.\n  - **Negative Result**: Pale reddish-brown / yellow tint indicates absence of starch.\n\n### 2. Experiment: Light is Essential for Photosynthesis\n- Destarch a potted plant for 48 hours.\n- Cover a portion of a selected leaf on both upper and lower surfaces using a strip of opaque black paper secured with paper clips.\n- Expose the plant to bright sunlight for 4-5 hours.\n- Pluck the leaf, remove the black paper, and test for starch.\n- **Observation**: Exposed regions turn blue-black; the covered strip remains brown.\n- **Conclusion**: Light energy is indispensable for synthesizing starch.\n\n### 3. Experiment: Carbon Dioxide is Essential for Photosynthesis\n- Destarch two potted plants (A and B).\n- Enclose Plant A under a glass bell jar containing a dish of **Potassium Hydroxide (KOH)** pellets to absorb all CO₂.\n- Enclose Plant B under a second bell jar containing a dish of plain water (Control with ambient CO₂).\n- Seal bases with petroleum jelly to guarantee airtight conditions.\n- Expose both setups to sunlight for 4-5 hours and perform the starch test.\n- **Observation**: Leaves of Plant A remain brown; leaves of Plant B turn blue-black.\n- **Conclusion**: Carbon dioxide is an essential raw reactant for photosynthesis.\n\n### 4. Experiment: Chlorophyll is Essential for Photosynthesis\n- Obtain a potted plant with **variegated leaves** (e.g., Croton, Coleus, or Acalypha).\n- Destarch the plant for 48 hours, then expose to bright sunlight for 4 hours.\n- Trace the exact boundary between green (chlorophyll-rich) and white/yellow (chlorophyll-deficient) areas.\n- Test the leaf for starch.\n- **Observation**: Only areas that were originally green turn blue-black; non-green areas remain brown.\n- **Conclusion**: Chlorophyll pigment is required to capture light energy for starch production.",
          diagram: {
            url: "/images/unit02/fig_2_2_light_requirement.png",
            caption: "Figure 2.2 & 2.3: Verification of light requirement and carbon dioxide requirement (using KOH) for photosynthesis."
          }
        },
        {
          heading: "2.1.3 Proving Oxygen Evolution in Photosynthesis",
          content: "### Experiment: Oxygen is Released as a By-Product\n- Submerge waterweed twigs (such as **Hydrilla** or *Elodea*) inside a glass beaker containing water (a trace of sodium bicarbonate may be added to enrich dissolved CO₂).\n- Invert a short-stemmed glass funnel over the Hydrilla twigs.\n- Fill a test tube completely with water and invert it over the stem of the funnel without letting air bubbles enter.\n- Place the experimental assembly in bright direct sunlight.\n\n### Observations & Confirmatory Gas Test:\n- Continuous streams of gas bubbles evolve from the cut stems of Hydrilla, rise upward, and displace water downward in the inverted test tube.\n- Once an adequate gas volume collects, lift the test tube carefully and introduce a **glowing wooden splint** into the mouth of the tube.\n- **Observation**: The glowing splint **bursts into flame / relights** vigorously.\n- **Conclusion**: The evolved gas supports combustion, confirming that **Oxygen (O₂)** is liberated as a gaseous by-product of photosynthesis.",
          diagram: {
            url: "/images/unit02/fig_2_5_o2_evolution.png",
            caption: "Figure 2.5: Experimental setup with Hydrilla verifying oxygen gas evolution during photosynthesis."
          }
        }
      ]
    },
    {
      id: "2.2",
      order: 2,
      titleEn: "Products of Photosynthesis",
      titleSi: "ප්‍රභාසංස්ලේෂණයේ ඵල",
      textbookSection: "Section 2.2 (Pages 22 - 25)",
      readingTimeMinutes: 7,
      keyTakeaways: [
        "Glucose (C₆H₁₂O₆) is the primary organic monomer synthesized during the dark reaction.",
        "Glucose is soluble and chemically reactive; it is rapidly condensed into insoluble starch for daytime osmotic-neutral storage.",
        "Starch is broken down into sucrose (disaccharide) for phloem translocation across the plant body.",
        "Oxygen is the primary by-product, generated from the photolysis of water molecules.",
        "Surplus photosynthates are converted into secondary reserves: starch (tubers, grains), fats/oils (seeds), and proteins (legumes)."
      ],
      keyDefinitions: [
        {
          term: "Primary Product",
          definition: "The fundamental organic compound directly synthesized during the photosynthetic Calvin cycle, specifically simple hexose monosaccharide glucose (C₆H₁₂O₆)."
        },
        {
          term: "By-Product",
          definition: "A substance unavoidably produced alongside the primary product during a biochemical pathway, specifically molecular oxygen (O₂) released during the photolysis of water."
        },
        {
          term: "Translocation",
          definition: "The bidirectional physiological transport of dissolved organic nutrients (principally sucrose) through the sieve tube elements of phloem vascular tissue from photosynthetic source leaves to metabolic or storage sinks."
        }
      ],
      sections: [
        {
          heading: "2.2.1 Synthesis, Condensation & Translocation of Photosynthates",
          content: "### Fate of Photosynthetic Products\nPhotosynthesis yields two primary chemical outputs:\n1. **Glucose (C₆H₁₂O₆)**: Main organic product.\n2. **Oxygen Gas (O₂)**: Gaseous by-product.\n\n### Chemical Transformations of Glucose:\n- **Immediate Cellular Respiration**: A fraction of synthesized glucose is immediately metabolized in plant mitochondria via cellular respiration to generate ATP for cellular growth, active transport, and ion absorption.\n- **Temporary Storage as Starch**: Because glucose is highly soluble and osmotically active, accumulating free glucose would dangerously increase osmotic pressure, drawing excessive water into mesophyll cells. Green plants rapidly polymerize glucose into **insoluble starch** grains during daylight.\n- **Phloem Translocation as Sucrose**: During nighttime or reduced illumination, stored starch is hydrolysed enzymatically into the disaccharide **sucrose**. Sucrose is soluble, non-reducing, and stable for systemic transport through phloem sieve tubes to roots, shoot apices, buds, and storage organs.\n- **Long-Term Storage Forms**:\n  - **Starch**: In amyloplasts of potato tubers, cassava, yam, and cereal seeds (rice, wheat, maize).\n  - **Lipids / Oils**: Triglycerides stored in cotyledons and endosperms of oilseeds (coconut, peanut, sesame, sunflower).\n  - **Proteins**: Synthesized by combining glucose breakdown intermediates with nitrate and ammonium ions from soil (stored in soybean, pulses, peas).\n  - **Structural Cellulose**: Polymerized into structural cellulose microfibrils to build new plant cell walls.",
          diagram: {
            url: "/images/unit02/fig_2_4_chlorophyll_requirement.png",
            caption: "Figure 2.4: Variegated leaf experiment demonstrating that chlorophyll is essential for synthesizing starch."
          }
        }
      ]
    },
    {
      id: "2.3",
      order: 3,
      titleEn: "Importance of Photosynthesis",
      titleSi: "ප්‍රභාසංස්ලේෂණයේ වැදගත්කම",
      textbookSection: "Section 2.3 (Pages 28 - 29)",
      readingTimeMinutes: 6,
      keyTakeaways: [
        "Photosynthesis is the fundamental gateway converting extraterrestrial radiant solar energy into biologically usable chemical energy.",
        "Green plants (primary producers) form the base trophic level supporting all terrestrial and aquatic food chains and food webs.",
        "Photosynthesis maintains the global atmospheric oxygen-carbon dioxide balance, counteracting the CO₂ emissions from respiration, combustion, and industrial activity.",
        "Fossil fuels (coal, petroleum, natural gas) represent millions of years of ancient photosynthetic biomass preserved underground.",
        "Agricultural crop productivity, timber, natural fibres (cotton, linen), and botanical medicinal compounds are direct products of photosynthesis."
      ],
      keyDefinitions: [
        {
          term: "Primary Producer (Autotroph)",
          definition: "An organism capable of synthesizing high-energy organic compounds from inorganic raw substances using radiant energy via photosynthesis, forming the foundational energetic tier of ecosystems."
        },
        {
          term: "Global Carbon Balance",
          definition: "The dynamic equilibrium maintained between atmospheric carbon dioxide uptake via terrestrial and aquatic photosynthesis and carbon dioxide liberation via respiration, decay, and combustion."
        }
      ],
      sections: [
        {
          heading: "2.3.1 Ecological & Global Significance of Photosynthesis",
          content: "### 1. Fundamental Energy Gateway for the Biosphere\nSolar radiation is the primary energy source for life on Earth, but heterotrophic organisms (animals, fungi, most bacteria) cannot directly capture radiant energy. Photosynthetic autotrophs (green plants, phytoplankton, algae) harness sunlight to form energy-rich **chemical bonds in glucose**. This energy cascades through primary consumers (herbivores), secondary consumers (carnivores), and decomposers across ecological **food webs**.\n\n### 2. Maintenance of Atmospheric Gas Equilibrium\n- **Oxygen Replenishment**: Nearly all free molecular oxygen (O₂) in the Earth's atmosphere (~21%) originates from photosynthetic water photolysis. All aerobic organisms, including plants themselves, depend on this O₂ for cellular respiration.\n- **Ozone Layer Formation**: Atmospheric oxygen molecules (O₂) interact with solar ultraviolet radiation in the stratosphere to generate the **ozone layer (O₃)**, shielding all terrestrial life from lethal UV-B radiation.\n- **Carbon Dioxide Sequestration**: Massive amounts of carbon dioxide (CO₂) produced by animal respiration, biological decay, volcanic emissions, and industrial fossil fuel combustion are continually scrubbed from the atmosphere by global forests and marine phytoplankton, moderating the **greenhouse effect** and stabilizing global climate.\n\n### 3. Source of Biomass, Food & Fossil Energy Reserves\n- **Human Nutrition**: All human staple foods (cereals, legumes, vegetables, fruits) and animal feed derive directly from photosynthetic plant production.\n- **Fossil Fuels**: Coal, crude oil, and natural gas are non-renewable fossilized energy reservoirs originating from prehistoric photosynthetic forests and marine algal deposits compressed under immense geological pressure over hundreds of millions of years.\n- **Industrial Raw Materials**: Timber for construction, wood pulp for paper, natural textile fibres (cotton, linen), rubber, and plant phytochemical pharmaceuticals are all direct biosynthetic products of plant photosynthesis."
        }
      ]
    }
  ]
};

