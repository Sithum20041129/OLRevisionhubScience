/**
 * Complete Grade 11 Science - Unit 10 (Power and Energy of Electric Appliances) Revision Guide Notes
 * Strictly aligned with the National Institute of Education (NIE) Official Curriculum.
 */

export const unit10RevisionData = {
  unitId: "g11-u10",
  unitNumber: 10,
  grade: 11,
  medium: "English",
  titleEn: "Power and Energy of Electric Appliances",
  titleSi: "විද්‍යුත් උපකරණවල ක්ෂමතාව සහ ශක්තිය",
  textbookCode: "ENG11U10",
  textbookPages: "Pages 32 - 49",
  overviewEn: "This unit covers the electrical power and energy of domestic appliances: power equations (P = VI = I²R = V²/R), electrical energy calculations (E = Pt), kilowatt-hours (kWh), energy efficiency and power conservation (LED vs incandescent), sequential anatomy of household electrical supply (service fuse, kWh meter, isolator, RCCB trip switch, MCBs), domestic wiring safety (parallel circuits, switches on live wire, three-pin plug color coding, earthing), and electricity billing calculations.",

  // High-yield syllabus summary points
  summaryPoints: [
    "Electrical power (P) is the rate at which electrical energy is transformed into other energy forms; measured in Watts (W) or Kilowatts (kW, 1 kW = 1000 W).",
    "Fundamental power formulas: P = V × I, and by applying Ohm's law (V = IR), P = I²R and P = V² / R.",
    "Electrical energy consumed: E = P × t = V × I × t (measured in Joules, J).",
    "The commercial unit for electricity billing is the Kilowatt-hour (kWh): 1 kWh = 1 kW × 1 h = 1000 W × 3600 s = 3.6 × 10⁶ J (3.6 MJ).",
    "Energy efficiency: Efficiency = (Useful energy output / Total energy input) × 100%. LEDs convert up to 80-90% of electricity into light, far superior to wasteful incandescent filament bulbs (~5% efficiency).",
    "In Sri Lanka, domestic electricity is supplied as 230 V single-phase alternating current (AC) at a frequency of 50 Hz.",
    "Sequential components of a domestic circuit: Service Fuse / Overload Breaker ──> Electricity Meter ──> Isolator (Main Switch) ──> RCCB (Residual Current Circuit Breaker / Trip Switch) ──> Distribution Board with MCBs.",
    "The RCCB (Trip Switch) detects minute earth leakage currents (≥ 30 mA) caused when current leaks through a person's body to ground, cutting off power in milliseconds to prevent fatal electrocution.",
    "Miniature Circuit Breakers (MCBs) protect individual branch circuits from overcurrent and short circuits: 6 A MCBs for lighting circuits; 13 A or 16 A MCBs for plug socket circuits.",
    "All domestic appliances are wired in parallel so each receives the full 230 V supply and can be operated independently.",
    "All switches and fuses MUST be connected to the Live wire so that opening the switch isolates the appliance from high potential.",
    "Three-pin plug color code: Live (L) = Brown (older: red); Neutral (N) = Blue (older: black); Earth (E) = Green/Yellow stripes (older: green). The Earth pin is longer and thicker to earth the metal chassis first and open safety shutters."
  ],

  subtopics: [
    {
      id: "10.1",
      order: 1,
      titleEn: "Power Output of an Electric Appliance",
      titleSi: "විද්‍යුත් උපකරණයක ක්ෂමතා ප්‍රතිදානය",
      textbookSection: "Section 10.1 (Pages 32 - 34)",
      readingTimeMinutes: 8,
      keyTakeaways: [
        "Power is the rate of doing electrical work or transforming electrical energy: P = E / t.",
        "SI unit of power is the Watt (W = 1 J s⁻¹); 1 kilowatt (kW) = 1000 W; 1 megawatt (MW) = 1,000,000 W.",
        "Core power formulas: P = V × I, P = I²R, and P = V² / R.",
        "An appliance rating plate '230 V, 1000 W' means when operated at 230 V, it consumes 1000 Joules of electrical energy per second.",
        "Normal operating current is calculated by I = P / V; internal resistance is calculated by R = V² / P.",
        "Operating an appliance at a lower voltage than its rated voltage causes it to output significantly less power (since P ∝ V² for constant resistance)."
      ],
      keyDefinitions: [
        {
          term: "Electric Power",
          definition: "The rate at which electrical energy is consumed, dissipated, or converted into other forms of energy (such as heat, light, or mechanical motion) by an electrical appliance, denoted by P = E / t."
        },
        {
          term: "Watt (W)",
          definition: "The SI unit of electrical and mechanical power, defined as the energy dissipation rate of exactly one Joule per second (1 W = 1 J s⁻¹)."
        },
        {
          term: "Appliance Rating Plate",
          definition: "A manufacturer's specification plate affixed to an electrical device stating its design operational voltage (V), frequency (Hz), and maximum power consumption (W)."
        }
      ],
      sections: [
        {
          heading: "10.1.1 Electrical Power Equations (P = VI, I²R, V²/R)",
          content: "### Derivation of Power Relationships:\n- **Electrical Potential Difference**: $V = E / Q \\implies E = V \\times Q$\n- **Electric Current**: $I = Q / t \\implies Q = I \\times t$\n- Substituting for $Q$: $E = V \\times I \\times t$\n- **Power ($P = E / t$)**:\n  - **P = V × I**  *(where V = Voltage in Volts, I = Current in Amperes)*\n\n### Incorporating Ohm's Law ($V = IR$ or $I = V / R$):\n1. Substitute $V = IR$ into $P = VI$:\n   - **P = (IR) × I = I²R**  *(ideal for calculating heat dissipation in a resistor of known resistance)*\n2. Substitute $I = V / R$ into $P = VI$:\n   - **P = V × (V / R) = V² / R**  *(ideal for calculating power across appliances connected to a constant parallel voltage)*",
          diagram: {
            url: "/images/unit10/fig_10_1_power_rating.png",
            caption: "Figure 10.1: Electric appliance rating plate showing operating voltage (230 V), power consumption (1000 W), and operational parameters."
          }
        },
        {
          heading: "10.1.2 Interpreting Appliance Rating Plates",
          content: "### Practical Calculations from Rating Plates:\n- **Example**: An electric iron marked **'230 V, 1150 W'**:\n  1. **Meaning**: When supplied with $230\\ \\text{V}$, the iron consumes $1150\\ \\text{J}$ of electrical energy each second and converts it into heat.\n  2. **Normal Operating Current ($I$)**:\n     - $I = P / V = 1150\\ \\text{W} / 230\\ \\text{V} = \\mathbf{5.0\\ \\text{A}}$.\n     - *Practical consequence*: Requires a fuse rated higher than $5\\ \\text{A}$ (e.g., $13\\ \\text{A}$ plug socket).\n  3. **Heating Element Resistance ($R$)**:\n     - $R = V² / P = (230)^2 / 1150 = 52900 / 1150 = \\mathbf{46\\ \\Omega}$."
        }
      ]
    },
    {
      id: "10.2",
      order: 2,
      titleEn: "Electric Energy Consumed by Electric Appliances",
      titleSi: "විද්‍යුත් උපකරණ මඟින් වැයවන විද්‍යුත් ශක්තිය",
      textbookSection: "Section 10.2 (Pages 34 - 35)",
      readingTimeMinutes: 8,
      keyTakeaways: [
        "Electrical energy consumed depends on power rating and duration of operation: E = P × t.",
        "Formulae: E = P × t = V × I × t = I² × R × t = (V² / R) × t.",
        "SI unit of energy is the Joule (J = W · s); commercial unit is the Kilowatt-hour (kWh).",
        "1 kilowatt-hour (1 kWh) is the energy consumed by a 1000 W appliance operating for 1 hour: 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J (3.6 MJ).",
        "Electricity meters measure energy in kilowatt-hours (kWh), referred to as 'units' of electricity."
      ],
      keyDefinitions: [
        {
          term: "Electrical Energy",
          definition: "The total capacity for doing work provided by the flow of electric charge through an electric circuit, equal to power multiplied by operating time (E = P × t)."
        },
        {
          term: "Kilowatt-Hour (kWh)",
          definition: "The commercial unit of electrical energy consumed when an electrical device with a power rating of one kilowatt (1 kW = 1000 W) operates continuously for one hour (1 h = 3600 s), equal to 3.6 megajoules (3.6 × 10⁶ J)."
        }
      ],
      sections: [
        {
          heading: "10.2.1 Energy Formulas & Joules vs Kilowatt-Hours",
          content: "### Quantitative Expressions of Electrical Energy:\n- **E = P × t**\n  - If $P$ is in Watts and $t$ is in seconds, **E is in Joules (J)**.\n  - If $P$ is in Kilowatts (kW) and $t$ is in hours (h), **E is in Kilowatt-hours (kWh)**.\n\n### Conversion Relationship:\n- $1\\ \\text{kWh} = 1\\ \\text{kW} \\times 1\\ \\text{hour}$\n- $1\\ \\text{kWh} = 1000\\ \\text{W} \\times 3600\\ \\text{seconds} = \\mathbf{3,600,000\\ \\text{Joules} = 3.6 \\times 10^6\\ \\text{J} = 3.6\\ \\text{MJ}}$.\n\n### Comparison Table:\n\n| Appliance | Power Rating | Usage Time | Energy in kWh | Energy in Joules |\n| :--- | :--- | :--- | :--- | :--- |\n| **LED Bulb** | $10\\ \\text{W} = 0.01\\ \\text{kW}$ | 5 hours | $0.01 \\times 5 = 0.05\\ \\text{kWh}$ | $180,000\\ \\text{J}$ ($180\\ \\text{kJ}$) |\n| **Ceiling Fan** | $75\\ \\text{W} = 0.075\\ \\text{kW}$ | 8 hours | $0.075 \\times 8 = 0.60\\ \\text{kWh}$ | $2,160,000\\ \\text{J}$ ($2.16\\ \\text{MJ}$) |\n| **Electric Iron** | $1000\\ \\text{W} = 1.0\\ \\text{kW}$ | 2 hours | $1.0 \\times 2 = 2.0\\ \\text{kWh}$ | $7,200,000\\ \\text{J}$ ($7.2\\ \\text{MJ}$) |\n| **Water Geyser** | $2000\\ \\text{W} = 2.0\\ \\text{kW}$ | 1.5 hours | $2.0 \\times 1.5 = 3.0\\ \\text{kWh}$ | $10,800,000\\ \\text{J}$ ($10.8\\ \\text{MJ}$) |"
        }
      ]
    },
    {
      id: "10.3",
      order: 3,
      titleEn: "Efficiency of Electric Appliances and Conserving Power",
      titleSi: "විද්‍යුත් උපකරණවල කාර්යක්ෂමතාව සහ බලය සංරක්ෂණය",
      textbookSection: "Section 10.3 (Pages 35 - 36)",
      readingTimeMinutes: 8,
      keyTakeaways: [
        "Energy efficiency = (Useful energy output / Total energy input) × 100%.",
        "In electrical appliances, wasted energy is mostly dissipated into the surroundings as unwanted thermal heat.",
        "Incandescent filament bulbs are extremely inefficient (~5% efficiency; 95% lost as heat).",
        "Compact Fluorescent Lamps (CFL) are ~20-25% efficient.",
        "Light Emitting Diodes (LED) achieve 80-90% efficiency, consume minimal power, generate negligible waste heat, and last over 25,000 hours.",
        "Energy Star labels guide consumers toward high-efficiency appliances (more stars = higher energy efficiency).",
        "Conservation measures: Switching off idle appliances, utilizing inverter technology (refrigerators, ACs), avoiding peak hours (6:30 PM - 10:30 PM), and regular maintenance."
      ],
      keyDefinitions: [
        {
          term: "Energy Efficiency",
          definition: "The percentage ratio of the useful energy or power delivered by an appliance to the total electrical energy or power supplied to it."
        },
        {
          term: "Energy Star Rating",
          definition: "An internationally recognized certification system displaying stars on electrical appliances to indicate their relative energy efficiency compared to standard baseline models."
        }
      ],
      sections: [
        {
          heading: "10.3.1 Efficiency Calculations & Lighting Technology Comparison",
          content: "### Formula for Efficiency:\n- **Efficiency (%) = (Useful Energy Output / Total Energy Input) × 100%**\n- **Efficiency (%) = (Useful Power Output / Total Power Input) × 100%**\n\n### Evolution of Household Lighting:\n\n1. **Incandescent Filament Bulb (Tungsten Bulb)**:\n   - Operates by heating a tungsten filament to over 2500°C until it glows white hot.\n   - **Efficiency: ~5%** (For every 100 J of electricity consumed, only 5 J becomes light; 95 J is wasted as heat).\n2. **Compact Fluorescent Lamp (CFL)**:\n   - Uses mercury vapour discharge to excite phosphor coating.\n   - **Efficiency: ~20 - 25%**; lasts 6-8 times longer than tungsten bulbs.\n3. **Light Emitting Diode (LED)**:\n   - Solid-state semiconductor electroluminescence.\n   - **Efficiency: 80 - 90%**.\n   - *Example*: A **10 W LED bulb** emits the same luminous brightness as a **60 W incandescent bulb**, saving **over 83% of electrical power**."
        }
      ]
    },
    {
      id: "10.4",
      order: 4,
      titleEn: "Home Electric Circuits",
      titleSi: "ගෘහ විදුලි පරිපථ",
      textbookSection: "Section 10.4 (Pages 36 - 45)",
      readingTimeMinutes: 12,
      keyTakeaways: [
        "National grid in Sri Lanka supplies 230 V, 50 Hz AC electricity.",
        "Sequential supply entry: Overhead service lines ──> Service Fuse (overload breaker) ──> Electricity Meter ──> Isolator (Main Switch) ──> RCCB (Trip Switch) ──> MCBs in Distribution Box.",
        "RCCB (Trip Switch) detects earth leakage current (> 30 mA) caused by human electric shock or insulation breakdown, cutting off power to the whole house within 30 ms.",
        "Miniature Circuit Breakers (MCB) protect branch circuits against overcurrent and short circuits: 6 A for lighting circuits, 13 A for socket circuits.",
        "Domestic appliances are connected in parallel so that all receive 230 V and failure of one branch does not affect others.",
        "Switches must ALWAYS be connected in the Live wire.",
        "Three-pin plug wiring: Live = Brown, Neutral = Blue, Earth = Green/Yellow.",
        "The Earth pin is longer and thicker: it grounds the metal chassis first before live contact is made, and pushes aside protective shutter gates."
      ],
      keyDefinitions: [
        {
          term: "Residual Current Circuit Breaker (RCCB / Trip Switch)",
          definition: "A high-sensitivity safety circuit breaker that constantly monitors the current balance between live and neutral conductors, immediately tripping to disconnect power if a leakage current exceeding 30 mA is detected."
        },
        {
          term: "Miniature Circuit Breaker (MCB)",
          definition: "An electromagnetic reusable protective device installed on individual branch circuits that automatically trips to open the circuit during excessive overcurrent or short-circuit conditions."
        },
        {
          term: "Earthing (Grounding)",
          definition: "The safety practice of connecting the exposed metal chassis of an electrical appliance directly to the Earth via a low-resistance conductor to safely drain fault currents and prevent electrocution."
        },
        {
          term: "Isolator (Main Switch)",
          definition: "A double-pole electrical switch capable of simultaneously disconnecting both the live and neutral supply cables to isolate the entire household circuit safely during maintenance."
        }
      ],
      sections: [
        {
          heading: "10.4.1 Sequential Setup of Household Electricity Supply",
          content: "### Step-by-Step Electrical Entry Sequence:\n1. **Service Drop Cables**: Two cables (Live and Neutral) enter from the utility pole. The Neutral wire is grounded at the transformer substation and maintains zero potential ($0\\ \\text{V}$); the Live wire fluctuates at $230\\ \\text{V}$.\n2. **Service Fuse / Overload Circuit Breaker**: Sealed unit owned by the electricity board (CEB/LECO) that protects mains cables from excessive grid currents.\n3. **Electricity Meter (kWh Meter)**: Measures cumulative electrical energy consumption.\n4. **Isolator (Main Switch)**: Double-pole switch that can be manually operated to disconnect both Live and Neutral simultaneously.\n5. **Residual Current Circuit Breaker (RCCB / Trip Switch)**: Monitors current balance ($I_\\text{live} - I_\\text{neutral}$). If current leaks to ground through a person's body or faulty insulation ($\ge 30\\ \\text{mA}$), the RCCB trips within $0.03\\ \\text{seconds}$ ($30\\ \\text{ms}$), averting fatal shocks. Also provides backup protection against circuit overload ($30\\ \\text{A}$).\n6. **Distribution Box with MCBs**:\n   - **Lighting Circuits**: Protected by **6 A MCBs**.\n   - **Socket Circuits**: Protected by **13 A or 16 A MCBs**.",
          diagram: {
            url: "/images/unit10/fig_10_2_domestic_entry.png",
            caption: "Figure 10.2: Sequential domestic connection from power grid showing service fuse, kWh meter, isolator, RCCB, and MCB distribution board."
          }
        },
        {
          heading: "10.4.2 Distribution Board, Branch Circuits & Ring Circuits",
          content: "### Organization of Domestic Branch Circuits:\n- **Lighting Circuits**:\n  - Fitted with thinner copper wires ($1.0\\ \\text{mm}^2$ or $1.5\\ \\text{mm}^2$).\n  - Supplies ceiling lamps, wall sconces, fans, and up to two 6 A convenience sockets.\n  - Protected by a **6 A MCB**.\n- **Socket Circuits (Power Circuits)**:\n  - Fitted with thicker copper wires ($2.5\\ \\text{mm}^2$ or $4.0\\ \\text{mm}^2$).\n  - Feeds high-power appliances: refrigerators, washing machines, microwaves, ovens.\n  - Protected by a **13 A or 16 A MCB**.\n- **Ring Socket Circuit (Loop Circuit)**:\n  - Socket circuits are frequently wired in a closed continuous loop starting from the distribution box, looping through multiple sockets, and returning to the same MCB terminal.\n  - *Advantages*: Each socket receives current from two directions in parallel, doubling the effective current-carrying capacity, halving resistance, and reducing voltage drop.",
          diagram: {
            url: "/images/unit10/fig_10_3_distribution_board.png",
            caption: "Figure 10.3: Circuit diagram of a domestic distribution box with individual Miniature Circuit Breakers (MCBs)."
          }
        },
        {
          heading: "10.4.3 Three-Pin Plug Wiring & Earthing Safety",
          content: "### Wiring of a Three-Pin Plug:\n- **Live Terminal (L)**: Connected to **Brown wire** (older standard: red). Contains a internal cartridge fuse.\n- **Neutral Terminal (N)**: Connected to **Blue wire** (older standard: black).\n- **Earth Terminal (E)**: Connected to **Green/Yellow striped wire** (older standard: green).\n\n### Why the Earth Pin is Longer and Thicker:\n1. **Priority Grounding**: Being longer, the Earth pin engages the socket earth contact **first** before the Live pin connects, ensuring the metal chassis is safely grounded before power arrives. When unplugging, it disconnects **last**.\n2. **Opening Protective Safety Shutters**: The longer earth pin pushes open internal mechanical shutter gates covering the Live and Neutral socket holes, preventing children from inserting bare wires or metal objects into live terminals.\n3. **Polarization (Incorrect Insertion Prevention)**: Being thicker, it physically prevents inserting the plug upside down or into the wrong holes.\n\n### Importance of Connecting Switches in the Live Wire:\n- If a switch is placed on the Live wire: Turning off the switch breaks the high potential ($230\\ \\text{V}$) before it enters the appliance. The entire appliance is de-energized and completely safe to touch (e.g., when replacing a burnt bulb).\n- If placed on the Neutral wire: The appliance turns off (circuit is broken), but the entire internal circuitry remains at full $230\\ \\text{V}$ live potential! Anyone touching the internal socket or filament can receive a fatal electric shock.",
          diagram: {
            url: "/images/unit10/fig_10_4_three_pin_plug.png",
            caption: "Figure 10.4: Anatomy of a three-pin plug showing Live (Brown), Neutral (Blue), Earth (Green/Yellow), fuse, and cord grip."
          }
        }
      ]
    },
    {
      id: "10.5",
      order: 5,
      titleEn: "Measuring Electric Energy in Kilowatt Hours",
      titleSi: "කිලෝවොට් පැයවලින් විද්‍යුත් ශක්තිය මැනීම",
      textbookSection: "Section 10.5 (Pages 46 - 49)",
      readingTimeMinutes: 9,
      keyTakeaways: [
        "Electricity meters measure total energy consumed in kilowatt-hours (kWh), where 1 kWh = 1 unit.",
        "Monthly consumption units = Current meter reading - Previous month meter reading.",
        "Formula for units consumed: Units (kWh) = [Power rating in Watts (W) × Usage hours (h)] / 1000.",
        "Electricity tariffs in Sri Lanka are tiered in progressive blocks (slabs), with higher rates for higher consumption.",
        "Monthly electricity bill comprises energy charges for blocks consumed plus a fixed charge, applicable fuel adjustments, and taxes."
      ],
      keyDefinitions: [
        {
          term: "Electricity Meter",
          definition: "An integrating electro-mechanical or digital instrumentation device that continuously records the cumulative electrical energy consumed by a premises in kilowatt-hours (kWh)."
        },
        {
          term: "Unit of Electricity",
          definition: "The standard commercial billing unit representing one kilowatt-hour (1 kWh) of electrical energy consumption."
        },
        {
          term: "Fixed Charge",
          definition: "A mandatory baseline monthly service charge levied by the electricity authority irrespective of the number of electricity units consumed."
        }
      ],
      sections: [
        {
          heading: "10.5.1 Reading Meters & Calculating Electrical Units",
          content: "### Calculating Electrical Units:\n- **Number of Units (kWh) = [Power (W) × Time (hours)] / 1000**\n\n### Sample Household Consumption Calculation:\n- A household uses:\n  - 4 LED bulbs of $10\\ \\text{W}$ each for 5 hours daily: $4 \\times 10 \\times 5 = 200\\ \\text{Wh/day}$\n  - 2 Ceiling fans of $75\\ \\text{W}$ each for 8 hours daily: $2 \\times 75 \\times 8 = 1200\\ \\text{Wh/day}$\n  - 1 Refrigerator of average power $150\\ \\text{W}$ running for 10 hours daily: $150 \\times 10 = 1500\\ \\text{Wh/day}$\n  - 1 TV of $100\\ \\text{W}$ for 4 hours daily: $100 \\times 4 = 400\\ \\text{Wh/day}$\n  - **Total daily energy** = $200 + 1200 + 1500 + 400 = 3300\\ \\text{Wh/day} = \\mathbf{3.3\\ \\text{kWh/day}}$\n  - **Monthly consumption (30 days)** = $3.3\\ \\text{kWh} \\times 30 = \\mathbf{99\\ \\text{units (kWh)}}$."
        },
        {
          heading: "10.5.2 Progressive Billing & Tariff Calculation",
          content: "### Structure of Electricity Bills in Sri Lanka:\n- **Block Tariffs (Slabs)**: Lower unit prices are charged for the first baseline units (e.g., 0 - 30 units, 31 - 60 units), and substantially higher unit rates apply for consumption exceeding 60, 90, or 120 units to encourage conservation.\n- **Monthly Bill Formula**:\n  - **Total Bill = Energy Charges (Sum of all block rates) + Fixed Charge + VAT / Taxes**\n- *Conservation Tip*: Keeping total monthly consumption below 60 units avoids the significantly higher tariff bracket, cutting the monthly electricity expenditure by more than half."
        }
      ]
    }
  ]
};

