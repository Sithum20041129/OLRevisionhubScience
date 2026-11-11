/**
 * Complete Grade 11 Science - Unit 13 (Electromagnetism and Electromagnetic Induction) Revision Guide Notes
 * Strictly aligned with the National Institute of Education (NIE) Official Curriculum.
 */

export const unit13RevisionData = {
  unitId: "g11-u13",
  unitNumber: 13,
  grade: 11,
  medium: "English",
  titleEn: "Electromagnetism and Electromagnetic Induction",
  titleSi: "විද්‍යුත් චුම්බකත්වය සහ විද්‍යුත් චුම්බක ප්‍රේරණය",
  textbookCode: "ENG11U13",
  textbookPages: "Pages 115 - 150",
  overviewEn: "This unit covers the foundational principles of electromagnetism and electromagnetic induction: magnetic fields, magnetic poles, and magnetic materials; magnetic effects produced by electric currents in straight wires, circular coils, and solenoids (Right-Hand Grip Rule); force exerted on a current-carrying conductor in an external magnetic field (Fleming's Left-Hand Rule) and the operation of the direct current (DC) electric motor; electromagnetic induction discovered by Michael Faraday (Faraday's Law, Lenz's Law, Fleming's Right-Hand Rule); operation of AC dynamos and DC generators; and step-up and step-down electrical transformers with efficient national high-voltage power transmission.",

  summaryPoints: [
    "A magnet has two poles: North (N) and South (S). Like poles repel; unlike poles attract. Magnetic field lines emerge from the North pole and enter into the South pole outside the magnet, forming continuous closed loops.",
    "Hans Christian Oersted discovered that an electric current flowing through a conductor creates an encircling magnetic field.",
    "The Right-Hand Grip Rule determines magnetic field direction: grasp the straight wire with the right hand so the thumb points in the direction of conventional current; the curled fingers indicate the direction of the circular magnetic field lines.",
    "A solenoid carrying current behaves exactly like a bar magnet. Polarity can be found using the Right-Hand Grip Rule (fingers curl along current, thumb points to North pole) or the End Rule (Clockwise = South, Anti-clockwise = North).",
    "An electromagnet is a temporary magnet formed by winding an insulated wire around a soft iron core. Its magnetic strength increases with: increasing electric current, increasing number of turns of the coil, and using a laminated soft iron core.",
    "A current-carrying conductor placed perpendicular to a magnetic field experiences a mechanical force. Direction of force is given by Fleming's Left-Hand Rule: First finger = Magnetic Field (N ──> S), seCond finger = Current (+ ──> -), thuMb = Motion / Force (F = B·I·L).",
    "A DC Electric Motor converts electrical energy into rotational kinetic mechanical energy. Key components: permanent field magnets, armature coil, split-ring commutator (reverses current direction every half rotation to sustain unidirectional torque), and carbon brushes.",
    "Electromagnetic Induction: When the magnetic flux linked with a closed conducting loop changes, an electromotive force (EMF) and induced electric current are generated (Faraday's Law).",
    "Direction of induced current is determined by Fleming's Right-Hand Rule: First finger = Field, thuMb = Motion of conductor, seCond finger = Induced Current. Lenz's Law states that the induced current always flows in such a direction that its magnetic effect opposes the change causing it.",
    "An AC Dynamo (Alternating Current Generator) uses two continuous slip rings and carbon brushes to generate sinusoidal alternating current (reversing direction periodically, 50 Hz in Sri Lanka). A DC Dynamo uses a split-ring commutator to produce pulsating unidirectional direct current.",
    "A Transformer uses mutual electromagnetic induction between two coils on a laminated soft iron core to change AC voltage levels: V_p / V_s = N_p / N_s. In a step-up transformer (N_s > N_p, V_s > V_p); in a step-down transformer (N_s < N_p, V_s < V_p). Ideal power equation: V_p · I_p = V_s · I_s.",
    "Electrical power is transmitted over long national grid distances at extremely high voltages (e.g., 132 kV, 220 kV) to minimize current (I = P / V), dramatically reducing power transmission heat loss (P_loss = I²·R) in transmission cables."
  ],

  subtopics: [
    {
      id: "13.1",
      order: 1,
      titleEn: "Magnetism",
      titleSi: "චුම්බකත්වය",
      textbookSection: "Section 13.1 (Pages 115 - 117)",
      readingTimeMinutes: 8,
      keyTakeaways: [
        "Magnets attract ferromagnetic materials such as Iron, Steel, Nickel, and Cobalt.",
        "Every magnet possesses two magnetic poles (North pole and South pole); isolated magnetic monopoles do not exist.",
        "A freely suspended bar magnet always aligns itself along the geographic North-South direction of Earth.",
        "Magnetic field lines are continuous imaginary directed curves representing the path a free North pole would travel; they never intersect.",
        "Outside a magnet, field lines run from North pole to South pole; inside the magnet, they run from South to North.",
        "Earth acts as a giant bar magnet with its magnetic South pole located near the geographic North pole, and its magnetic North pole located near the geographic South pole."
      ],
      keyDefinitions: [
        {
          term: "Magnetic Field",
          definition: "The spatial region surrounding a permanent magnet or moving electric charge within which another magnetic pole or ferromagnetic material experiences a measurable magnetic force."
        },
        {
          term: "Magnetic Field Lines",
          definition: "Imaginary directed continuous lines of force drawn such that the tangent at any point gives the direction of the magnetic field vector at that point, running externally from North pole to South pole."
        },
        {
          term: "Ferromagnetic Material",
          definition: "A substance (such as iron, steel, nickel, cobalt) that possesses strong permanent magnetic susceptibility and is strongly attracted by external magnetic fields."
        }
      ],
      sections: [
        {
          heading: "13.1.1 Properties of Magnets & Magnetic Field Patterns",
          content: "### Fundamental Properties of Magnets:\n1. **Attractive Property**: Magnets exert strong forces of attraction on ferromagnetic substances (Iron, Nickel, Cobalt, Steel).\n2. **Directive Property**: When freely suspended horizontally by a thread, a bar magnet settles along the Earth's geographic North-South axis. The pole pointing towards the geographic North is the **North-Seeking Pole (N)**; the opposite pole is the **South-Seeking Pole (S)**.\n3. **Law of Magnetic Poles**: **Like poles repel** (N repels N, S repels S); **unlike poles attract** (N attracts S). *Note: Repulsion is the only foolproof test for magnetism.*\n4. **Monopoles Do Not Exist**: Breaking a magnet in half results in two complete smaller magnets, each possessing both a North and a South pole.\n\n### Characteristics of Magnetic Field Lines:\n- Field lines emanate from the **North pole and terminate at the South pole** externally.\n- The **density (closeness)** of field lines indicates the relative field strength: lines are most crowded at the poles where magnetic field is strongest.\n- Field lines **never cross or intersect** each other because the magnetic field can only have one unique resultant direction at any given point in space.\n- The Earth behaves as if an enormous bar magnet were embedded at its center with its **magnetic South pole located in the Arctic (geographic North)** and its **magnetic North pole in the Antarctic (geographic South)**."
        }
      ]
    },
    {
      id: "13.2",
      order: 2,
      titleEn: "Magnetic Effect of a Current",
      titleSi: "ධාරාවක චුම්බක ඵලය",
      textbookSection: "Section 13.2 (Pages 117 - 130)",
      readingTimeMinutes: 12,
      keyTakeaways: [
        "An electric current passing through a conductor produces a surrounding magnetic field (Oersted's discovery).",
        "Magnetic field lines around a straight current-carrying wire are concentric circles centered on the wire.",
        "Right-Hand Grip Rule: Thumb points along current; curled fingers show direction of concentric magnetic field lines.",
        "A current-carrying Solenoid behaves like a cylindrical bar magnet; internal magnetic field lines are uniform, parallel, and dense.",
        "Electromagnet strength can be increased by: increasing current, increasing number of turns, and inserting a soft iron core.",
        "Fleming's Left-Hand Rule: When a current-carrying wire is placed in a magnetic field, it experiences a force (First finger = Field, seCond finger = Current, thuMb = Motion/Force).",
        "A DC Motor converts electrical energy into mechanical kinetic energy using permanent magnets, armature coil, split-ring commutator, and carbon brushes."
      ],
      keyDefinitions: [
        {
          term: "Solenoid",
          definition: "A helical coil of insulated copper wire wound into a tightly packed cylinder whose length is substantially greater than its diameter, producing a uniform magnetic field when carrying current."
        },
        {
          term: "Electromagnet",
          definition: "A temporary magnet created by winding an insulated wire coil around a high-permeability soft iron core, remaining magnetized only while electric current flows through the coil."
        },
        {
          term: "Fleming's Left-Hand Rule (Motor Rule)",
          definition: "A rule stating that if the thumb, forefinger, and second finger of the left hand are held mutually perpendicular, the Forefinger represents magnetic Field (N to S), the seCond finger represents Current (+ to -), and the thuMb indicates the resulting Motion or mechanical Force."
        },
        {
          term: "Split-Ring Commutator",
          definition: "A copper cylindrical ring split into two isolated semicircular halves in a DC motor that mechanically reverses the direction of current in the armature coil every half rotation (180°) to maintain continuous unidirectional torque."
        }
      ],
      sections: [
        {
          heading: "13.2.1 Magnetic Field around Straight Conductors & Solenoids",
          content: "### Field Pattern around a Straight Conductor:\n- Iron filings sprinkled on a horizontal cardboard pierced by a vertical wire arrange themselves in **concentric circles** centered on the wire.\n- **Right-Hand Grip Rule for Straight Conductors**:\n  - Imagine gripping the conductor with your **Right Hand** so that your outstretched **Thumb points in the direction of conventional electric current**.\n  - The **curled fingers point in the direction of the circular magnetic field lines**.\n- Field strength increases as electric current increases and decreases with radial distance from the wire.\n\n### The Magnetic Field of a Solenoid:\n- When a current passes through a solenoid, the magnetic fields of individual circular turns reinforce each other.\n- The external field pattern is identical to that of a **permanent bar magnet**.\n- Inside the solenoid, field lines are **parallel, straight, equidistant, and dense**, creating a strong **uniform magnetic field**.\n- **Determining Solenoid Polarity**:\n  - **Right-Hand Grip Rule for Solenoids**: Grip the solenoid with fingers curling along the direction of current in the windings; the outstretched **Thumb points to the North Pole (N)**.\n  - **End View Rule**: Looking at one end of the solenoid, if current circulates **Anti-clockwise**, that end is a **North pole (N)**; if current circulates **Clockwise**, that end is a **South pole (S)**.",
          diagram: {
            url: "/images/unit13/fig_13_1_magnetic_field_current.png",
            caption: "Figure 13.1: Concentric magnetic field lines around a current-carrying straight conductor and application of the Right-Hand Grip Rule."
          }
        },
        {
          heading: "13.2.2 Force on a Current-Carrying Conductor & the DC Motor",
          content: "### Force on a Current-Carrying Conductor in a Magnetic Field:\n- When a conductor carrying current is placed inside an external magnetic field, the magnetic field of the wire interacts with the external field, producing a net mechanical force.\n- **Maximum Force** occurs when conductor is **perpendicular (90°)** to the magnetic field; **Zero Force** occurs when conductor is **parallel (0°)** to the field.\n- **Fleming's Left-Hand Rule (The Motor Rule)**:\n  - Hold the thumb, first finger, and second finger of your **Left Hand** mutually at right angles (90°):\n    - **First Finger** = **Field** (direction of magnetic field from North to South).\n    - **seCond Finger** = **Current** (direction of conventional current from Positive to Negative).\n    - **thuMb** = **Motion / Force** (direction of mechanical force and motion).\n\n### Structure and Operation of the Direct Current (DC) Electric Motor:\n- **Armature**: A rectangular copper coil (ABCD) wound on a soft iron core, pivoted on an axle between magnetic poles (N and S).\n- **Field Magnets**: Strong curved permanent magnets or electromagnets producing a radial magnetic field.\n- **Split-Ring Commutator**: Two semicircular copper segments (half-rings) connected to the ends of coil ABCD that rotate with the coil.\n- **Carbon Brushes**: Spring-loaded graphite contacts that press against the split rings, supplying DC power without tangling wires.\n- **Working Cycle**:\n  - In arm AB, current flows from A to B; by Fleming's Left-Hand Rule, force is **Downwards**.\n  - In arm CD, current flows from C to D; by Fleming's Left-Hand Rule, force is **Upwards**.\n  - These two equal and opposite forces create a **turning couple (torque)** that rotates the coil anti-clockwise.\n  - At the vertical position (dead center), brushes bridge the gap; inertia carries the coil past.\n  - The split-ring commutator automatically reverses current connections in arms AB and CD, ensuring continuous unidirectional rotation.",
          diagram: {
            url: "/images/unit13/fig_13_2_dc_motor.png",
            caption: "Figure 13.2: Structure and operating principle of a DC electric motor showing armature coil, split-ring commutator, and Fleming's Left-Hand Rule."
          }
        }
      ]
    },
    {
      id: "13.3",
      order: 3,
      titleEn: "Electromagnetic Induction",
      titleSi: "විද්‍යුත් චුම්බක ප්‍රේරණය",
      textbookSection: "Section 13.3 (Pages 131 - 150)",
      readingTimeMinutes: 14,
      keyTakeaways: [
        "Electromagnetic Induction is the generation of an induced EMF and electric current in a circuit when magnetic flux linking the circuit changes.",
        "Faraday's Law: Magnitude of induced EMF is directly proportional to the rate of change of magnetic flux linkage.",
        "Lenz's Law: Direction of induced current opposes the original change in magnetic flux that produced it (consequence of conservation of energy).",
        "Fleming's Right-Hand Rule (Generator Rule): First finger = Field, thuMb = Motion of wire, seCond finger = Induced Current.",
        "AC Dynamo (Generator): Uses two continuous slip rings; converts mechanical energy into sinusoidal alternating current (reverses direction cyclically).",
        "DC Dynamo (Generator): Uses a split-ring commutator instead of slip rings; converts mechanical energy into pulsating direct current.",
        "Transformers: Change AC voltage levels by mutual electromagnetic induction between primary and secondary coils (V_p / V_s = N_p / N_s).",
        "Step-up transformer (N_s > N_p): Increases voltage, decreases current. Step-down transformer (N_s < N_p): Decreases voltage, increases current.",
        "National electrical power transmission uses high voltages (e.g. 132 kV) to minimize current, drastically cutting thermal transmission loss (P_loss = I²·R)."
      ],
      keyDefinitions: [
        {
          term: "Electromagnetic Induction",
          definition: "The phenomenon whereby an electromotive force (EMF) and electric current are induced across an electric conductor situated in a changing magnetic field or moving relative to a stationary magnetic field."
        },
        {
          term: "Faraday's Law of Induction",
          definition: "A fundamental law stating that the magnitude of the induced electromotive force in any closed circuit is directly proportional to the time rate of change of magnetic flux through the circuit."
        },
        {
          term: "Lenz's Law",
          definition: "A principle of electromagnetic induction stating that the direction of any induced electric current is always such that its own magnetic field opposes the specific change in magnetic flux that induced it."
        },
        {
          term: "Fleming's Right-Hand Rule (Generator Rule)",
          definition: "A mnemonic rule for generators: when the thumb, forefinger, and second finger of the right hand are held mutually perpendicular, the Forefinger represents magnetic Field, the thuMb represents Motion of the conductor, and the seCond finger indicates the direction of Induced Current."
        },
        {
          term: "Transformer",
          definition: "A static electrical machine that transfers electrical energy between two or more AC circuits through mutual electromagnetic induction, stepping AC voltage up or down at constant frequency."
        }
      ],
      sections: [
        {
          heading: "13.3.1 Faraday's Experiments & Induced Current Rules",
          content: "### Faraday's Observations with a Coil and Bar Magnet:\n1. When the North pole of a magnet is pushed rapidly into a coil connected to a center-zero galvanometer, the needle **deflects momentarily to the right**.\n2. When the magnet is held stationary inside the coil, deflection drops to **zero** (relative motion is mandatory).\n3. When the North pole is withdrawn rapidly, the needle **deflects momentarily to the left**.\n4. Moving the magnet faster, using a stronger magnet, or using a coil with more turns produces a **larger deflection**.\n\n### Fleming's Right-Hand Rule (The Dynamo / Generator Rule):\n- Stretch the thumb, forefinger, and middle finger of your **Right Hand** mutually perpendicular to each other:\n  - **First Finger** = Direction of **Magnetic Field** (North to South).\n  - **thuMb** = Direction of **Motion of the Conductor**.\n  - **seCond Finger** = Direction of **Induced Current** (+ to -).\n\n### Lenz's Law and Conservation of Energy:\n- When a North pole approaches a coil, an induced current circulates anti-clockwise to produce a **North pole** at that end, repelling the approaching magnet.\n- Work must be done against this magnetic repulsion, and that mechanical work is converted directly into electrical energy.",
          diagram: {
            url: "/images/unit13/fig_13_3_electromagnetic_induction.png",
            caption: "Figure 13.3: Demonstrating electromagnetic induction with coil, magnet, and galvanometer, illustrating Fleming's Right-Hand Rule."
          }
        },
        {
          heading: "13.3.2 AC and DC Dynamos (Electric Generators)",
          content: "### The Alternating Current (AC) Dynamo:\n- **Key Components**:\n  - **Armature**: Rectangular coil ABCD rotated mechanically in a permanent magnetic field.\n  - **Slip Rings**: Two continuous unbroken brass/copper rings, each connected permanently to one end of the coil, rotating with it.\n  - **Carbon Brushes**: Fixed stationary carbon blocks maintaining continuous sliding contact with each slip ring.\n- **Output Waveform**:\n  - In the first half turn (0° to 180°), arm AB moves downwards and CD moves upwards, inducing current in one direction.\n  - In the second half turn (180° to 360°), arm AB moves upwards and CD moves downwards, reversing current direction through the external circuit.\n  - Produces a **sinusoidal alternating voltage/current (AC)** whose polarity reverses every half rotation (standard Sri Lankan mains frequency is 50 Hz, reversing 100 times per second).\n\n### Direct Current (DC) Dynamo:\n- Replaces the two continuous slip rings with a single **split-ring commutator**.\n- The commutator mechanically reverses connections to the external circuit every half turn, converting the alternating output into **pulsating direct current (DC)** that flows in one continuous direction.",
          diagram: {
            url: "/images/unit13/fig_13_4_ac_generator.png",
            caption: "Figure 13.4: Alternating current (AC) dynamo generator with slip rings and sinusoidal induced voltage waveform."
          }
        },
        {
          heading: "13.3.3 Transformers & National Power Transmission",
          content: "### Transformer Structure & Mutual Induction:\n- Consists of two separate insulated coils wound on a common **laminated soft iron core** (laminations prevent energy loss from circular eddy currents):\n  - **Primary Coil (p)**: Connected to alternating voltage input (V_p, N_p turns).\n  - **Secondary Coil (s)**: Connected to load output (V_s, N_s turns).\n- **Working Principle**: Alternating current in the primary coil generates a continuously alternating magnetic flux through the iron core, which links with and induces an alternating EMF in the secondary coil.\n- *Note: A transformer operates strictly on AC; direct current (DC) cannot induce voltage because its magnetic flux is constant (zero rate of change).*\n\n### Transformer Equations:\n- **Turns Ratio Equation**: **V_p / V_s = N_p / N_s**\n- **For an ideal (100% efficient) transformer**:\n  - Power Input = Power Output\n  - **V_p · I_p = V_s · I_s**  ──>  **I_p / I_s = V_s / V_p = N_s / N_p**\n\n### Types of Transformers:\n1. **Step-Up Transformer**: N_s > N_p  ──>  V_s > V_p and I_s < I_p (increases voltage, reduces current).\n2. **Step-Down Transformer**: N_s < N_p  ──>  V_s < V_p and I_s > I_p (decreases voltage, increases current).\n\n### High-Voltage National Electricity Transmission:\n- Power stations generate electricity at 11 kV. A **step-up transformer** boosts voltage to 132 kV or 220 kV for long-distance grid transmission.\n- **Why High Voltage is Essential**:\n  - Since transmitted electrical power P = V · I, stepping up voltage V reduces transmission current I to a very low value (I = P / V).\n  - Heat loss in long transmission cables is given by Joule's Law: **P_loss = I²·R**.\n  - Because power loss depends on the **square of current (I²)**, reducing current by a factor of 10 decreases heat loss by a factor of 100!\n- Substation **step-down transformers** reduce voltage progressively down to 33 kV, 11 kV, and finally to **230 V single-phase AC** for domestic household supply.",
          diagram: {
            url: "/images/unit13/fig_13_5_transformer.png",
            caption: "Figure 13.5: Step-up and step-down transformer construction showing primary and secondary coils on a laminated soft iron core."
          }
        }
      ]
    }
  ]
};
