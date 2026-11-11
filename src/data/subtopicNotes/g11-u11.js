/**
 * Complete Grade 11 Science - Unit 11 (Electronics) Revision Guide Notes
 * Strictly aligned with the National Institute of Education (NIE) Official Curriculum.
 */

export const unit11RevisionData = {
  unitId: "g11-u11",
  unitNumber: 11,
  grade: 11,
  medium: "English",
  titleEn: "Electronics",
  titleSi: "ඉලෙක්ට්‍රොනික විද්‍යාව",
  textbookCode: "ENG11U11",
  textbookPages: "Pages 50 - 87",
  overviewEn: "This unit covers the foundational principles of solid-state semiconductor electronics: intrinsic vs extrinsic semiconductors (doping to produce n-type and p-type crystals), physics of the p-n junction and depletion layer under forward and reverse bias, p-n junction diodes and I-V characteristics, half-wave and full-wave bridge rectification with capacitor smoothing, and bipolar junction transistors (npn, pnp) operating as current amplifiers and automatic electronic switches using LDR and thermistor sensor circuits.",

  // High-yield syllabus summary points
  summaryPoints: [
    "Semiconductors (Silicon, Germanium) have electrical conductivity intermediate between conductors and insulators; their conductivity increases with rising temperature and intentional doping.",
    "Intrinsic semiconductors have 4 valence electrons forming tetrahedral covalent bonds. Doping with Group 15 pentavalent atoms (P, As) creates n-type semiconductor with majority electrons; doping with Group 13 trivalent atoms (B, In) creates p-type semiconductor with majority holes.",
    "A p-n junction forms a depletion layer devoid of mobile charge carriers, establishing a barrier potential (~0.7 V for Silicon, ~0.3 V for Germanium).",
    "Forward bias (p to +, n to -) narrows the depletion layer, allowing current to flow once applied voltage exceeds threshold voltage (0.7 V for Si). Reverse bias (p to -, n to +) widens the depletion layer, blocking current flow.",
    "A diode conducts current in one direction only. Light Emitting Diodes (LEDs) emit light when forward-biased due to electron-hole recombination.",
    "Half-wave rectification uses 1 diode, transmitting only positive half-cycles. Full-wave bridge rectification uses 4 diodes, converting both half-cycles into unidirectional pulsating DC.",
    "A smoothing capacitor connected in parallel across the load resistor charges during voltage peaks and discharges between peaks, smoothing pulsating DC into continuous steady DC.",
    "A Bipolar Junction Transistor (BJT) has 3 terminals: Emitter (E), Base (B), and Collector (C). Current relation: I_E = I_B + I_C.",
    "In an npn transistor, the emitter arrow points outwards; in a pnp transistor, it points inward toward the base.",
    "A minute base current (I_B) controls and amplifies a substantially larger collector current (I_C) (Current gain β = I_C / I_B).",
    "Operating as an electronic switch, an npn transistor turns ON when base-emitter voltage V_BE ≥ 0.7 V, functioning in automatic street light circuits (with an LDR) and automatic fire/cooling circuits (with a Thermistor)."
  ],

  subtopics: [
    {
      id: "11.1",
      order: 1,
      titleEn: "Introduction to Semiconductors",
      titleSi: "අර්ධ සන්නායක පිළිබඳ හැඳින්වීම",
      textbookSection: "Section 11.1 (Pages 50 - 54)",
      readingTimeMinutes: 9,
      keyTakeaways: [
        "Conductors have very low resistance; Insulators have extremely high resistance; Semiconductors have intermediate conductivity.",
        "Pure Silicon (Si) and Germanium (Ge) belong to Group 14, possessing 4 valence electrons in covalent lattice bonds.",
        "At absolute zero (0 K), intrinsic semiconductors behave as perfect insulators. At room temperature, thermal vibration breaks a few covalent bonds, creating mobile electron-hole pairs.",
        "Doping is the deliberate addition of minute trace quantities of impurity atoms (1 part per million) to dramatically multiply conductivity.",
        "n-type semiconductor: Doped with Group 15 pentavalent atoms (Phosphorus P, Arsenic As). Free donor electrons are the majority carriers; holes are minority carriers.",
        "p-type semiconductor: Doped with Group 13 trivalent atoms (Boron B, Indium In). Electron vacancies ('holes') are majority carriers; electrons are minority carriers.",
        "Both n-type and p-type semiconductors are electrically neutral overall because positive nuclear charges balance negative orbital electron charges."
      ],
      keyDefinitions: [
        {
          term: "Semiconductor",
          definition: "A crystalline material whose electrical conductivity lies between that of a conductor and an insulator, exhibiting a negative temperature coefficient of resistance (conductivity rises with temperature)."
        },
        {
          term: "Doping",
          definition: "The technological process of deliberately introducing controlled amounts of specific pentavalent or trivalent impurity atoms into an intrinsic semiconductor crystal lattice to alter its electrical conduction properties."
        },
        {
          term: "n-type Semiconductor",
          definition: "An extrinsic semiconductor formed by doping tetravalent silicon with pentavalent donor impurities, in which negatively charged conduction electrons serve as majority charge carriers."
        },
        {
          term: "p-type Semiconductor",
          definition: "An extrinsic semiconductor formed by doping tetravalent silicon with trivalent acceptor impurities, in which positively charged electron vacancies (holes) serve as majority charge carriers."
        }
      ],
      sections: [
        {
          heading: "11.1.1 Intrinsic vs Extrinsic Semiconductors & Doping",
          content: "### Classification of Materials by Electrical Conductivity:\n- **Conductors**: Vast density of free electrons (copper, aluminium, silver); resistance increases with temperature.\n- **Insulators**: Valence electrons tightly bound in covalent/ionic bonds; extremely high bandgap (glass, plastic, rubber, mica).\n- **Semiconductors**: Tetravalent elements (Silicon Si, Germanium Ge) with intermediate energy bandgap.\n\n### Intrinsic (Pure) Semiconductors:\n- Each Silicon atom shares its 4 valence electrons with 4 neighboring Si atoms in a stable tetrahedral diamond lattice.\n- At 0\ \K, all valence electrons are locked; conductivity is zero.\n- At room temperature (300\ \K), thermal agitation ruptures a small fraction of covalent bonds, liberating free electrons and leaving behind positive empty states termed **holes**.\n\n### Doping & Extrinsic Semiconductors:\n1. **n-type Semiconductor (Negative Carrier Type)**:\n   - Pure Silicon is doped with a pentavalent atom (Group 15: **Phosphorus P, Arsenic As, Antimony Sb**).\n   - 4 valence electrons bond with neighboring Si atoms; the **5th electron remains unbound** and easily detaches into the conduction band at room temperature.\n   - **Majority Carriers = Free Electrons**; **Minority Carriers = Holes**.\n2. **p-type Semiconductor (Positive Carrier Type)**:\n   - Pure Silicon is doped with a trivalent atom (Group 13: **Boron B, Aluminium Al, Indium In, Gallium Ga**).\n   - The 3 valence electrons form bonds with 3 adjacent Si atoms, leaving a missing bond or **hole (electron vacancy)**.\n   - A neighboring valence electron easily hops into this vacancy, causing the positive hole to migrate freely through the lattice.\n   - **Majority Carriers = Holes**; **Minority Carriers = Free Electrons**."
        }
      ]
    },
    {
      id: "11.2",
      order: 2,
      titleEn: "The p-n Junction",
      titleSi: "p-n සන්ධිය",
      textbookSection: "Section 11.2 (Pages 55 - 57)",
      readingTimeMinutes: 8,
      keyTakeaways: [
        "A p-n junction is formed at the microscopic boundary where p-type and n-type semiconductor regions merge within a single crystal.",
        "Free electrons from the n-side diffuse across into the p-side, recombining with holes near the junction.",
        "This diffusion leaves exposed immobile positive donor ions on the n-side and immobile negative acceptor ions on the p-side, creating the Depletion Layer.",
        "The depletion layer sets up an internal electric field called the Barrier Potential (~0.7 V for Silicon, ~0.3 V for Germanium) that halts further carrier diffusion.",
        "Forward Bias: p-side to battery (+), n-side to battery (-). External voltage counteracts the barrier potential; depletion layer thins; large forward current flows.",
        "Reverse Bias: p-side to battery (-), n-side to battery (+). External voltage reinforces the barrier potential; depletion layer widens; no current flows (except tiny minority leakage)."
      ],
      keyDefinitions: [
        {
          term: "p-n Junction",
          definition: "The intimate metallurgical interface formed within a continuous semiconductor crystal between a p-type region and an adjacent n-type region."
        },
        {
          term: "Depletion Layer",
          definition: "The narrow insulating region formed immediately adjacent to a p-n junction that has been stripped of mobile charge carriers, containing only fixed uncompensated donor and acceptor ions."
        },
        {
          term: "Barrier Potential",
          definition: "The internal electric potential difference developed across a p-n junction depletion layer that opposes and ultimately arrests further net diffusion of majority carriers (approx. 0.7 V for Si, 0.3 V for Ge)."
        },
        {
          term: "Forward Bias",
          definition: "The operating condition wherein an external DC voltage is applied with positive terminal connected to the p-type region and negative terminal to the n-type region, reducing barrier potential and permitting forward current flow."
        },
        {
          term: "Reverse Bias",
          definition: "The operating condition wherein the external DC voltage is applied with positive terminal connected to the n-type region and negative terminal to the p-type region, widening the depletion layer and blocking current flow."
        }
      ],
      sections: [
        {
          heading: "11.2.1 Formation of Depletion Layer & Biasing Physics",
          content: "### Formation of the Depletion Region:\n- When a p-type crystal and n-type crystal meet, a steep concentration gradient exists across the boundary.\n- High-concentration electrons on the n-side diffuse across the junction into the p-side, falling into holes and neutralizing them.\n- **Immobile Ion Formation**:\n  - The n-region loses electrons, exposing positively charged fixed donor ions (P^+).\n  - The p-region captures electrons, exposing negatively charged fixed acceptor ions (B^-).\n- This creates a thin layer devoid of free mobile carriers called the **Depletion Layer**.\n- An electrostatic potential difference develops: **Barrier Potential (V_B \≈ 0.7\ \V for Silicon, 0.3\ \V for Germanium)**.\n\n### Forward vs Reverse Biasing:\n\n1. **Forward Bias**:\n   - **p-region connected to Positive (+)**; **n-region connected to Negative (-)**.\n   - The negative terminal repels n-side electrons toward the junction; the positive terminal repels p-side holes toward the junction.\n   - When applied voltage exceeds V_B (> 0.7\ \V for Si), the barrier collapses, the **depletion layer becomes extremely narrow**, and massive forward current flows easily.\n\n2. **Reverse Bias**:\n   - **p-region connected to Negative (-)**; **n-region connected to Positive (+)**.\n   - Positive terminal pulls n-side electrons away from the junction; negative terminal pulls p-side holes away.\n   - The **depletion layer widens significantly**, barrier potential increases, and forward current drops to **zero**. (Only a minute micro-ampere leakage current flows due to thermally generated minority carriers).",
          diagram: {
            url: "/images/unit11/fig_11_1_pn_junction.png",
            caption: "Figure 11.1: The p-n junction under forward bias (depletion layer narrows, current conducts) and reverse bias (depletion layer widens, current blocked)."
          }
        }
      ]
    },
    {
      id: "11.3",
      order: 3,
      titleEn: "p-n Junction Diode",
      titleSi: "p-n සන්ධි ඩයෝඩය",
      textbookSection: "Section 11.3 (Pages 58 - 65)",
      readingTimeMinutes: 9,
      keyTakeaways: [
        "A p-n junction diode is a two-terminal electronic component that permits electric current to flow in one forward direction only.",
        "Circuit symbol: Triangle represents anode (p-type, pointing in direction of conventional current); vertical line represents cathode (n-type).",
        "I-V Characteristic curve: In forward bias, current remains negligible until knee/threshold voltage (0.7 V for Si, 0.3 V for Ge), then rises sharply.",
        "In reverse bias, current remains negligible (nano-amperes) until reverse breakdown voltage, where the diode breaks down.",
        "Light Emitting Diode (LED): Emits colored light when forward-biased via electron-hole recombination; operates on low DC voltage (1.8 V - 3.2 V) and low current (10 - 20 mA).",
        "Zener Diode: Specially fabricated to operate safely in the reverse breakdown region at a precise constant voltage (Zener voltage V_Z), functioning as a voltage regulator."
      ],
      keyDefinitions: [
        {
          term: "Diode",
          definition: "A two-terminal semiconductor electronic device that conducts current with very low resistance in the forward direction and blocks current with very high resistance in the reverse direction."
        },
        {
          term: "Threshold (Knee) Voltage",
          definition: "The minimum forward bias voltage required to completely overcome the internal p-n junction barrier potential, beyond which forward current increases exponentially (approx. 0.7 V for Si, 0.3 V for Ge)."
        },
        {
          term: "Light Emitting Diode (LED)",
          definition: "A heavily doped p-n junction diode that emits visible or infrared photons of light through electroluminescence when forward-biased electrons recombine with holes."
        },
        {
          term: "Zener Diode",
          definition: "A heavily doped silicon p-n junction diode designed to operate in reverse breakdown at a predetermined breakdown voltage (Zener voltage) to maintain a stable, constant output voltage."
        }
      ],
      sections: [
        {
          heading: "11.3.1 Diode Symbol & I-V Characteristic Curve",
          content: "### Circuit Symbol & Lead Identification:\n- **Anode (A)**: p-side (positive in forward bias). On practical physical diodes, identified by the black body.\n- **Cathode (K)**: n-side (negative in forward bias). Identified on practical diodes by a **painted silver or white circumferential ring/band**.\n\n### The I-V Characteristic Curve:\n- **Forward Bias Region**:\n  - For applied voltage V < 0.7\ \V (Silicon), forward current I_F \≈ 0.\n  - At V = 0.7\ \V (**Knee / Threshold Voltage**), barrier potential is neutralized.\n  - For V > 0.7\ \V, current rises exponentially with very low internal resistance. A current-limiting resistor must always be connected in series to protect the diode from thermal destruction.\n- **Reverse Bias Region**:\n  - Between 0\ \V and reverse breakdown, only a minute reverse saturation leakage current (I_S \~ 1\ \μ\A) flows.\n  - At **Reverse Breakdown Voltage (V_Z)**, high electric field strength causes avalanche multiplication, current surges destructively (unless constructed as a Zener diode).",
          diagram: {
            url: "/images/unit11/fig_11_2_diode_iv_curve.png",
            caption: "Figure 11.2: I-V characteristic curve of a silicon p-n junction diode showing threshold voltage (0.7 V) and reverse breakdown."
          }
        },
        {
          heading: "11.3.2 Light Emitting Diodes (LED) & Zener Diodes",
          content: "### Light Emitting Diode (LED):\n- Fabricated from compound semiconductors like **Gallium Arsenide Phosphide (GaAsP)** or **Indium Gallium Nitride (InGaN)**.\n- When forward-biased, electrons cross from n-region and drop into holes in p-region. The lost potential energy is converted directly into electromagnetic radiation (**light**).\n- Emits monochromatic light (Red, Green, Yellow, Blue, White, or Infrared for TV remotes).\n- **Identifying Terminals**:\n  - **Anode (+)**: Longer metal leg; rounded plastic casing.\n  - **Cathode (-)**: Shorter metal leg; flat notch on plastic collar.\n- **Protective Resistor**: LEDs operate typically at 2.0\ \V and 15\ \mA. When powered by a 9\ \V battery, a series resistor (R = (9 - 2) / 0.015 = 470\ \Ω) is mandatory to limit current.\n\n### Zener Diode as a Voltage Regulator:\n- Connected in **reverse bias** in parallel with the load.\n- Maintains an unvarying, rock-steady DC voltage (V_Z) across load terminals even when supply voltage or load resistance fluctuates."
        }
      ]
    },
    {
      id: "11.4",
      order: 4,
      titleEn: "Rectification of Alternating Currents",
      titleSi: "ප්‍රත්‍යාවර්ත ධාරා සෘජුකරණය",
      textbookSection: "Section 11.4 (Pages 66 - 72)",
      readingTimeMinutes: 10,
      keyTakeaways: [
        "Rectification is the electronic process of converting alternating current (AC) into unidirectional direct current (DC).",
        "Half-Wave Rectification uses 1 diode; conducts only during the positive half-cycle, blocking the negative half-cycle (pulsating DC with 50% idle time).",
        "Full-Wave Bridge Rectification uses 4 diodes arranged in a diamond bridge network (D1, D2, D3, D4); conducts during both half-cycles, producing continuous unidirectional pulsating DC.",
        "A capacitor filter connected in parallel across the output load smooths pulsating DC into steady, ripple-free direct voltage.",
        "DC power packs in chargers and adapters utilize a step-down transformer ──> bridge rectifier ──> capacitor filter ──> voltage regulator."
      ],
      keyDefinitions: [
        {
          term: "Rectification",
          definition: "The process of converting alternating current (AC), which reverses direction cyclically, into unidirectional direct current (DC) that flows in one direction only."
        },
        {
          term: "Half-Wave Rectification",
          definition: "A rectification circuit utilizing a single diode that allows only one half-cycle (usually positive) of the alternating input voltage waveform to pass to the load, suppressing the alternate half-cycle."
        },
        {
          term: "Full-Wave Bridge Rectifier",
          definition: "A rectification circuit utilizing four diodes connected in a closed bridge configuration that routes both positive and negative alternating input half-cycles through the load in the same identical direction."
        },
        {
          term: "Smoothing (Filtering)",
          definition: "The reduction of voltage pulsations (ripple) in rectified direct current using a high-capacitance filter capacitor to provide steady, continuous DC voltage."
        }
      ],
      sections: [
        {
          heading: "11.4.1 Half-Wave Rectification",
          content: "### Circuit Operation:\n- An AC voltage source is connected in series with a single diode and load resistor R_L.\n- **During Positive Half-Cycle**: Point A is positive relative to point B. The diode is **forward-biased**, conducts current, and a positive voltage wave appears across R_L.\n- **During Negative Half-Cycle**: Point A becomes negative relative to point B. The diode is **reverse-biased**, has infinite resistance, blocks current, and output voltage across R_L is zero.\n- **Output Waveform**: Intermittent, pulsating unidirectional pulses with 50\\% duty cycle.",
          diagram: {
            url: "/images/unit11/fig_11_3_half_wave_rectifier.png",
            caption: "Figure 11.3: Half-wave rectification circuit diagram showing single diode and input/output AC to DC waveforms."
          }
        },
        {
          heading: "11.4.2 Full-Wave Bridge Rectification & Capacitor Smoothing",
          content: "### Bridge Rectifier Operation (4 Diodes):\n- Four diodes are connected in a bridge loop (**D1, D2, D3, D4**):\n  - **During Positive Half-Cycle**: Point X is positive, Y is negative. Diodes **D1 and D3** are forward-biased and conduct; **D2 and D4** are reverse-biased. Current flows through load R_L from top to bottom.\n  - **During Negative Half-Cycle**: Point Y is positive, X is negative. Diodes **D2 and D4** become forward-biased and conduct; **D1 and D3** are reverse-biased. Current again flows through load R_L in the **exact same direction** (top to bottom).\n  - **Result**: Both halves of the AC cycle are utilized, producing continuous pulsating DC at twice the AC frequency (100\ \Hz from 50\ \Hz input).\n\n### Smoothing with a Capacitor Filter:\n- A high-capacitance **electrolytic capacitor (C)** is connected in parallel with the load resistor R_L.\n- **Charging**: When rectified voltage rises to its peak, the capacitor charges up rapidly.\n- **Discharging**: When rectified voltage drops toward zero, the diode turns off and the capacitor discharges its stored charge slowly through R_L, bridging the gap between pulses and delivering a **smooth, continuous DC voltage**.",
          diagram: {
            url: "/images/unit11/fig_11_4_bridge_rectifier.png",
            caption: "Figure 11.4: Full-wave bridge rectifier circuit with 4 diodes, smoothing capacitor filter, and output DC waveforms."
          }
        }
      ]
    },
    {
      id: "11.5",
      order: 5,
      titleEn: "Transistors",
      titleSi: "ට්‍රාන්සිස්ටර",
      textbookSection: "Section 11.5 (Pages 73 - 87)",
      readingTimeMinutes: 12,
      keyTakeaways: [
        "A Bipolar Junction Transistor (BJT) is a 3-terminal active semiconductor component made of two back-to-back p-n junctions.",
        "Two types: npn transistor (emitter arrow points outwards) and pnp transistor (emitter arrow points inwards).",
        "Three terminals: Emitter (E) heavily doped; Base (B) very thin and lightly doped; Collector (C) moderately doped with large area.",
        "Current equation: I_E = I_B + I_C (Collector current I_C is approximately equal to Emitter current I_E because base current I_B is tiny, ~1-5%).",
        "Transistor action: A tiny base current I_B controls a much larger collector current I_C (Current gain β = I_C / I_B, typically 100 - 300).",
        "A transistor operates as an automatic electronic switch: OFF when V_BE < 0.7 V; ON when V_BE ≥ 0.7 V.",
        "Light-activated switch: Uses an LDR in a voltage divider to automatically illuminate street lights at dusk.",
        "Temperature-activated switch: Uses a negative temperature coefficient (NTC) Thermistor to automatically turn on cooling fans or fire alarms."
      ],
      keyDefinitions: [
        {
          term: "Bipolar Junction Transistor (BJT)",
          definition: "A three-terminal semiconductor device consisting of two p-n junctions formed by sandwiching an extremely thin base layer between two outer regions of opposite doping, used for signal amplification and electronic switching."
        },
        {
          term: "Emitter (E)",
          definition: "The heavily doped outer terminal of a transistor whose primary function is to inject majority charge carriers into the base region."
        },
        {
          term: "Base (B)",
          definition: "The extremely thin, lightly doped central region of a transistor that controls the transit of charge carriers from emitter to collector via minute base current."
        },
        {
          term: "Collector (C)",
          definition: "The moderately doped outer terminal with the largest surface area designed to collect charge carriers sweeping across from the base and dissipate thermal heat."
        },
        {
          term: "Current Gain (β)",
          definition: "The amplification factor of a common-emitter transistor, defined as the ratio of collector current to base current: β = I_C / I_B."
        }
      ],
      sections: [
        {
          heading: "11.5.1 Transistor Structure, Types & Current Equations",
          content: "### Anatomy of BJT Transistors:\n- **npn Transistor**: A thin p-type base sandwiched between two n-type regions. Majority carriers in Emitter and Collector are electrons.\n- **pnp Transistor**: A thin n-type base sandwiched between two p-type regions. Majority carriers are holes.\n\n### Identifying Symbols:\n- In schematic diagrams, the **arrow is always on the Emitter terminal** indicating the direction of conventional current:\n  - **npn**: Arrow points **outwards** (Not Pointing iN).\n  - **pnp**: Arrow points **inwards** (Pointing iN Proudly).\n\n### Operating Biasing Conditions for Amplification / Switching:\n1. **Base-Emitter Junction** is strictly **Forward Biased** (V_{BE \≥ 0.7\ \V for Silicon).\n2. **Base-Collector Junction** is **Reverse Biased** (V_{CE > V_{BE).\n\n### Fundamental Current Relationships:\n- **I_E = I_B + I_C**\n- Since the base is ultra-thin (< 1\ \μ\m) and lightly doped, over 98\\% of carriers entering from the emitter sweep directly into the collector:\n  - I_B \≈ 1 - 2\\% of I_E\n  - I_C \≈ 98 - 99\\% of I_E\n  - **Current Gain (h_{FE or \\beta)**: \\beta = I_C / I_B (Values range between 50 and 500).",
          diagram: {
            url: "/images/unit11/fig_11_5_transistor_switching.png",
            caption: "Figure 11.5: npn transistor circuit symbol, internal current flow (I_E = I_B + I_C), and automatic sensor switching circuit."
          }
        },
        {
          heading: "11.5.2 Transistor as an Automatic Electronic Switch (LDR & Thermistor)",
          content: "### Principle of the Transistor Switch:\n- **Cutoff State (Switch OFF)**: When V_{BE < 0.7\ \V, base current I_B = 0. Consequently, collector current I_C = 0. The collector-emitter path acts as an open circuit (lamp or relay is OFF).\n- **Saturation State (Switch ON)**: When V_{BE \≥ 0.7\ \V, a base current flows (I_B > 0). The transistor switches fully ON, allowing full collector current I_C to flow through the load (lamp or relay is ON).\n\n### 1. Light-Activated Automatic Street Light (using LDR):\n- A **Light Dependent Resistor (LDR)** and fixed resistor R_1 form a potential divider connected to the base of an npn transistor.\n- **In Daytime (Bright Light)**:\n  - Light falling on LDR drops its resistance to a very low value (R_\LDR \~ 100\ \Ω).\n  - Voltage across LDR (V_{BE) drops below 0.7\ \V.\n  - Transistor is in **cutoff (OFF)**; street lamp is OFF.\n- **At Night (Darkness)**:\n  - Resistance of LDR rises dramatically (R_\LDR > 100\ \k\Ω).\n  - Potential divider voltage across LDR rises above 0.7\ \V (V_{BE \≥ 0.7\ \V).\n  - Base current I_B flows, switching the transistor **ON**; collector current I_C energizes the street lamp or relay.\n\n### 2. Temperature-Activated Fire Alarm / Fan (using Thermistor):\n- Uses a **Negative Temperature Coefficient (NTC) Thermistor** (resistance drops as temperature rises).\n- When temperature rises (fire outbreak), thermistor resistance falls, raising base voltage V_{BE \≥ 0.7\ \V, switching the transistor ON to sound an alarm bell or start a cooling fan."
        }
      ]
    }
  ]
};

