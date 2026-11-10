/**
 * Complete Grade 11 Science - Unit 4 (Waves and their Applications) Revision Guide Notes
 * Strictly aligned with the National Institute of Education (NIE) Official Curriculum.
 */

export const unit4RevisionData = {
  unitId: "g11-u4",
  unitNumber: 4,
  grade: 11,
  medium: "English",
  titleEn: "Waves and their Applications",
  titleSi: "තරංග හා ඒවායේ යෙදීම්",
  textbookCode: "ENG11U04",
  textbookPages: "Pages 72 - 104",
  overviewEn: "This unit covers wave mechanics, transverse and longitudinal mechanical waves, displacement-time and displacement-distance wave graphs, the wave equation (v = fλ), the complete electromagnetic spectrum and practical communications technologies, longitudinal sound wave propagation, acoustics (reflection, echo, reverberation), and ultrasound technology.",

  // High-yield syllabus summary points
  summaryPoints: [
    "A wave is a periodic disturbance that transfers energy from one location to another through a medium or vacuum without causing permanent net displacement of matter.",
    "Mechanical waves require a physical material medium (solid, liquid, or gas) to propagate, whereas electromagnetic waves propagate through both media and vacuum at 3 × 10⁸ m s⁻¹.",
    "In transverse waves, particles vibrate perpendicularly (at 90°) to the direction of wave travel, creating crests and troughs (e.g., water ripples, waves on strings, all electromagnetic waves).",
    "In longitudinal waves, particles oscillate parallel to the direction of wave travel, creating alternating compressions and rarefactions (e.g., sound waves, vibrating slinky spring).",
    "Displacement-distance graph provides wavelength (λ) and amplitude (A); displacement-time graph provides period (T) and amplitude (A).",
    "The fundamental wave relationship is v = f × λ (where speed v in m s⁻¹, frequency f in Hz, and wavelength λ in m; f = 1 / T).",
    "The electromagnetic spectrum in order of increasing frequency (decreasing wavelength): Radio waves < Microwaves < Infrared < Visible Light < Ultraviolet < X-rays < Gamma rays.",
    "Sound is a mechanical longitudinal wave requiring a medium; speed of sound is fastest in solids, intermediate in liquids, and slowest in gases (v_air ≈ 340 m s⁻¹ at room temperature).",
    "An echo is the distinct reflection of sound from a rigid surface heard separately from the original sound (minimum distance d ≥ 17 m because human auditory persistence is 0.1 s).",
    "Human audible frequency range spans 20 Hz to 20,000 Hz (20 kHz). Infrasound is below 20 Hz; ultrasound is above 20 kHz.",
    "Ultrasound is used for non-invasive prenatal medical imaging (sonography), echocardiography, industrial crack detection, lithotripsy (kidney stone disintegration), and SONAR depth calculation (2d = v × t)."
  ],

  subtopics: [
    {
      id: "4.1",
      order: 1,
      titleEn: "Mechanical Waves",
      titleSi: "යාන්ත්‍රික තරංග",
      textbookSection: "Section 4.1 (Pages 72 - 79)",
      readingTimeMinutes: 9,
      keyTakeaways: [
        "Waves transfer energy and momentum without transporting matter across distances.",
        "Mechanical waves require an elastic material medium; particles merely oscillate about their central equilibrium positions.",
        "Transverse waves form crests (maximum upward displacement) and troughs (maximum downward displacement).",
        "Longitudinal waves form compressions (high particle density and pressure) and rarefactions (low particle density and pressure).",
        "Amplitude (A) is the maximum displacement from equilibrium, governing wave energy; Wavelength (λ) is the distance between consecutive in-phase points.",
        "Period (T) is time taken for one full wave cycle; Frequency (f = 1 / T) is cycles completed per second (Hz).",
        "Wave speed equation: v = f × λ (or v = λ / T)."
      ],
      keyDefinitions: [
        {
          term: "Wave",
          definition: "A periodic disturbance that propagates through a medium or space, transporting energy from one point to another without causing permanent net displacement of the medium particles."
        },
        {
          term: "Transverse Wave",
          definition: "A wave in which the particles of the medium vibrate in a direction perpendicular to the direction of wave propagation, forming alternating crests and troughs."
        },
        {
          term: "Longitudinal Wave",
          definition: "A wave in which the particles of the medium oscillate parallel to the direction of wave propagation, forming alternating regions of compression and rarefaction."
        },
        {
          term: "Wavelength (λ)",
          definition: "The minimum linear distance between two consecutive particles vibrating in the exact same phase of motion (e.g., crest to adjacent crest, or compression to adjacent compression), measured in metres (m)."
        },
        {
          term: "Frequency (f)",
          definition: "The number of complete wave cycles or oscillations passing a given reference point per second, measured in Hertz (Hz or s⁻¹)."
        }
      ],
      sections: [
        {
          heading: "4.1.1 Transverse vs Longitudinal Wave Mechanics",
          content: "### Nature of Waves\nA wave is initiated when energy is applied to generate a disturbance in an equilibrium medium. As particles interact with adjacent particles, the disturbance travels onward while individual particles remain localized around their fixed rest positions.\n\n### 1. Transverse Waves\n- **Particle Motion**: Perpendicular (at 90°) to the direction of wave travel.\n- **Structural Features**:\n  - **Crest**: The point of maximum positive displacement above the central equilibrium line.\n  - **Trough**: The point of maximum negative displacement below the equilibrium line.\n- **Examples**: Surface water waves, waves traveling along a stretched rope or string, and all electromagnetic waves.\n\n### 2. Longitudinal Waves\n- **Particle Motion**: Parallel (back-and-forth) to the direction in which the wave travels.\n- **Structural Features**:\n  - **Compression**: Region where particles are forced closely together, resulting in high medium density and elevated pressure.\n  - **Rarefaction**: Region where particles spread apart, resulting in lower medium density and reduced pressure.\n- **Examples**: Sound waves traveling through air, liquids, or solids; compressional waves in a horizontal slinky spring.",
          diagram: {
            url: "/images/unit04/fig_4_1_longitudinal_slinky.png",
            caption: "Figure 4.1: Demonstration of longitudinal waves with compressions and rarefactions using a slinky spring."
          }
        },
        {
          heading: "4.1.2 Wave Parameters & Graphical Analysis (v = fλ)",
          content: "### Graphical Representation of Waves\n\n1. **Displacement-Distance Graph**:\n   - Plots the instantaneous displacement of various particles along the medium at one frozen instant in time.\n   - **Information Obtained**:\n     - **Wavelength (λ)**: Distance between two adjacent crests or troughs.\n     - **Amplitude (A)**: Height from the baseline equilibrium axis to a crest.\n\n2. **Displacement-Time Graph**:\n   - Tracks the displacement of a single, specified particle as time elapses.\n   - **Information Obtained**:\n     - **Periodic Time (Period, T)**: Time taken to complete one full oscillation (seconds).\n     - **Amplitude (A)**: Peak displacement from equilibrium.\n\n### Core Wave Formulae:\n- **Frequency (f)**: f = 1 / T  (Unit: Hertz, Hz = 1 s⁻¹)\n- **Wave Speed (v)**: Distance / Time = λ / T = f × λ\n- **v = f × λ**\n  - where:\n    - **v** = wave speed in metres per second (m s⁻¹)\n    - **f** = frequency in Hertz (Hz)\n    - **λ** = wavelength in metres (m)",
          diagram: {
            url: "/images/unit04/fig_4_3_displacement_distance.png",
            caption: "Figure 4.2: Displacement-distance graph illustrating wavelength (λ), amplitude (A), crest, and trough."
          }
        }
      ]
    },
    {
      id: "4.2",
      order: 2,
      titleEn: "Electromagnetic Waves",
      titleSi: "විද්‍යුත් චුම්බක තරංග",
      textbookSection: "Section 4.2 (Pages 80 - 86)",
      readingTimeMinutes: 10,
      keyTakeaways: [
        "Electromagnetic (EM) waves consist of mutually perpendicular oscillating electric (E) and magnetic (B) fields.",
        "EM waves are transverse in nature and do NOT require a material medium; they propagate through a vacuum at the speed of light: c = 3.0 × 10⁸ m s⁻¹.",
        "The wave relationship for EM waves is c = f × λ.",
        "Higher frequency means shorter wavelength and higher photon energy (E = hf).",
        "The complete spectrum spans Radio waves, Microwaves, Infrared, Visible light, Ultraviolet, X-rays, and Gamma rays.",
        "Visible light spans wavelengths approximately from 400 nm (violet) to 700 nm (red)."
      ],
      keyDefinitions: [
        {
          term: "Electromagnetic Wave",
          definition: "A transverse wave propagated by periodic, mutually perpendicular oscillations of electric and magnetic fields, capable of traveling through both transparent matter and a vacuum at 3 × 10⁸ m s⁻¹."
        },
        {
          term: "Electromagnetic Spectrum",
          definition: "The continuous arrangement of all types of electromagnetic radiation ordered systematically according to increasing frequency or decreasing wavelength."
        },
        {
          term: "Speed of Light (c)",
          definition: "The fundamental physical constant representing the invariant speed of electromagnetic waves in a vacuum, equal to approximately 3.0 × 10⁸ m s⁻¹."
        }
      ],
      sections: [
        {
          heading: "4.2.1 Characteristics & The Electromagnetic Spectrum",
          content: "### Properties of Electromagnetic Waves:\n1. Consist of fluctuating electric and magnetic fields perpendicular to each other and to the propagation vector.\n2. Transverse in nature; can be polarized.\n3. Do not require a material medium; travel through a vacuum at **c = 3 × 10⁸ m s⁻¹**.\n4. Obey the wave equation **c = f × λ**.\n5. Undergo reflection, refraction, diffraction, and interference.\n\n### The Complete Electromagnetic Spectrum (Lowest to Highest Frequency):\n\n1. **Radio Waves** (Lowest f, Longest λ):\n   - Produced by accelerating electric charges in transmitting aerials.\n   - Used in radio broadcasting (AM, FM) and terrestrial TV transmissions.\n\n2. **Microwaves**:\n   - Used in satellite communications, cellular mobile phone networks, Wi-Fi, radar speed guns, and microwave ovens (molecular heating of water dipoles).\n\n3. **Infrared Radiation (IR)**:\n   - Emitted by all warm/hot bodies as thermal radiation.\n   - Used in television remote controls, thermal imaging cameras, night vision equipment, and physical therapy heat lamps.\n\n4. **Visible Light**:\n   - Detected by human retinal photoreceptors.\n   - Consists of colors: **Red, Orange, Yellow, Green, Blue, Indigo, Violet**.\n   - Red has the longest wavelength (~700 nm) and lowest frequency; Violet has the shortest wavelength (~400 nm) and highest frequency.\n   - Essential for photosynthesis and fiber-optic broadband communications.\n\n5. **Ultraviolet Radiation (UV)**:\n   - Emitted by the Sun and mercury discharge lamps.\n   - Stimulates Vitamin D synthesis in human skin; used for sterilizing surgical instruments and verifying fluorescent security markers on currency banknotes.\n   - Excessive exposure causes skin burns, premature aging, cataracts, and skin cancer.\n\n6. **X-rays**:\n   - High penetrating power; absorbed by dense bone and metal but transmitted through soft tissue.\n   - Used in medical diagnostic radiography (bone fracture detection, dental imaging), CT scans, and airport luggage security scanners.\n\n7. **Gamma Rays (γ)** (Highest f, Shortest λ, Highest Energy):\n   - Emitted from decaying radioactive atomic nuclei.\n   - Extremely penetrating and ionizing radiation.\n   - Used in cancer radiotherapy to destroy malignant tumor cells (Cobalt-60 teletherapy), industrial radiography to detect hairline cracks in steel pipes, and gamma sterilization of pre-packaged medical syringes.",
          diagram: {
            url: "/images/unit04/fig_4_4_em_spectrum.png",
            caption: "Figure 4.3: The complete Electromagnetic Spectrum showing frequency ranges, wavelengths, and typical applications."
          }
        }
      ]
    },
    {
      id: "4.3",
      order: 3,
      titleEn: "Sound & Acoustics",
      titleSi: "ධ්වනිය",
      textbookSection: "Section 4.3 (Pages 87 - 104)",
      readingTimeMinutes: 11,
      keyTakeaways: [
        "Sound is a mechanical longitudinal wave produced by vibrating objects.",
        "Sound strictly requires a material medium to propagate; it CANNOT travel through a vacuum (demonstrated by the bell-jar vacuum experiment).",
        "Speed of sound is greatest in solids (v_steel ≈ 5000 m s⁻¹), intermediate in liquids (v_water ≈ 1500 m s⁻¹), and lowest in gases (v_air ≈ 340 m s⁻¹ at 25°C).",
        "An echo is heard separately if the reflected sound returns after at least 0.1 seconds (minimum barrier distance is 17 metres in air).",
        "Reverberation is the prolonged persistence of sound in an enclosure caused by multiple successive reflections, managed by sound-absorbing materials.",
        "Human audible range is 20 Hz to 20,000 Hz. Infrasound (< 20 Hz) is used by elephants and whales; Ultrasound (> 20,000 Hz) is used in medical scans, SONAR, and bat echolocation."
      ],
      keyDefinitions: [
        {
          term: "Sound Wave",
          definition: "A mechanical longitudinal wave produced by mechanical vibrations of a source, propagating through elastic media as alternate series of compressions and rarefactions."
        },
        {
          term: "Echo",
          definition: "The distinct repetition of an original sound heard after reflection from a distant, rigid acoustic barrier with a time delay of at least 0.1 seconds."
        },
        {
          term: "Reverberation",
          definition: "The continuous persistence of sound within an enclosed space resulting from repeated multiple reflections from walls, ceiling, and floor before decaying."
        },
        {
          term: "Audible Range",
          definition: "The specific band of sound frequencies capable of stimulating the normal human auditory perception, ranging from 20 Hz to 20,000 Hz (20 kHz)."
        },
        {
          term: "Ultrasound",
          definition: "Sound waves possessing frequencies exceeding the upper limit of human hearing (greater than 20,000 Hz or 20 kHz)."
        }
      ],
      sections: [
        {
          heading: "4.3.1 Propagation of Sound & Bell Jar Experiment",
          content: "### Generation & Transmission of Sound\n- Sound originates from vibrating bodies (vocal cords, tuning forks, guitar strings, drum skins).\n- The vibrating surface pushes adjacent air molecules together creating **compressions**, then pulls back creating **rarefactions**.\n\n### Requirement of a Material Medium (Bell Jar Experiment):\n- An electric bell is suspended inside an airtight glass bell jar placed on a vacuum pump plate.\n- When the circuit is closed, the hammer strikes the gong and sound is clearly audible.\n- As the vacuum pump operates to evacuate air from the jar, the sound intensity becomes progressively fainter, even though the hammer is still seen striking the gong.\n- When air is completely evacuated, **no sound can be heard**.\n- **Conclusion**: Sound waves are mechanical and strictly require a material medium for transmission.\n\n### Speed of Sound in Different Media:\n- **Solids (Steel ~ 5000 m s⁻¹)**: Closely packed particles and strong intermolecular elastic forces permit rapid transmission.\n- **Liquids (Water ~ 1500 m s⁻¹)**: Intermediate transmission speed.\n- **Gases (Air ~ 340 m s⁻¹ at 20°C)**: Loosely arranged molecules transmit vibrations via random collisions.\n- *Note*: Sound travels faster in warm air than in cold air because higher temperature increases molecular speeds.",
          diagram: {
            url: "/images/unit04/fig_4_5_sound_medium.png",
            caption: "Figure 4.4: Bell jar experiment demonstrating that sound waves cannot propagate through a vacuum."
          }
        },
        {
          heading: "4.3.2 Reflection of Sound, Echo & Reverberation",
          content: "### Reflection of Sound\nLike light, sound reflects from hard, flat barriers obeying the laws of reflection: angle of incidence = angle of reflection.\n\n### Echo Formation & Calculation:\n- The human brain retains auditory sensation for **0.1 seconds** (persistence of hearing).\n- To perceive an echo distinctly, the reflected sound wave must return at least **0.1 s** after the direct sound.\n- **Minimum Distance Calculation in Air (at 340 m s⁻¹)**:\n  - Total round-trip distance = Speed × Time = 340 m s⁻¹ × 0.1 s = 34 m\n  - Minimum one-way distance to reflecting surface: **d = 34 / 2 = 17 metres**.\n\n### Reverberation & Acoustic Control in Auditoriums:\n- In large enclosed halls, sound reflects repeatedly from walls, ceiling, and floor, causing sound to persist muddying speech clarity.\n- **Acoustic Design**: Controlled by lining surfaces with sound-absorbing materials (perforated acoustic fiber boards, thick draperies/curtains, upholstered seats, and wall carpeting).",
          diagram: {
            url: "/images/unit04/fig_4_6_sound_reflection.png",
            caption: "Figure 4.5: Laboratory experiment demonstrating the reflection of sound waves using hollow tubes and a ticking clock."
          }
        },
        {
          heading: "4.3.3 Ultrasound & Real-World Applications",
          content: "### Frequency Bands:\n- **Infrasound**: < 20 Hz (seismic earthquake P/S waves, volcanic eruptions, low-frequency communication by elephants and blue whales).\n- **Audible Range**: 20 Hz to 20,000 Hz.\n- **Ultrasound**: > 20,000 Hz (20 kHz).\n\n### Major Practical Applications of Ultrasound:\n1. **Natural Echolocation**:\n   - **Bats** emit ultrasonic pulses (up to 100 kHz) and listen to returning echoes to navigate in pitch darkness and catch flying insects.\n   - **Dolphins and Whales** use ultrasonic clicks for underwater spatial orientation.\n\n2. **SONAR (Sound Navigation and Ranging)**:\n   - Used on ships to measure ocean depth and locate shipwrecks, submarines, or fish schools.\n   - Formula: **2d = v × t**  or  **d = (v × t) / 2**\n     *(where d = depth, v = speed of ultrasound in seawater ~ 1500 m s⁻¹, t = time for signal to return)*.\n\n3. **Medical Ultrasound Scanning (Ultrasonography)**:\n   - Safe, non-invasive imaging that does not use ionizing radiation (unlike X-rays), making it ideal for monitoring fetal development during pregnancy.\n   - **Echocardiography**: Visualizes moving cardiac heart valves and chambers.\n\n4. **Industrial & Therapeutic Uses**:\n   - **Non-Destructive Flaw Detection**: Discovers internal hairline cracks, cavities, and flaws in metal forgings and railway tracks.\n   - **Lithotripsy**: High-energy focused ultrasound pulses shatter kidney stones and gallstones into tiny sand-like particles that pass out naturally without surgery.\n   - **Ultrasonic Cleaning**: Emits high-frequency vibrations in detergent baths to clean intricate watch components, optical lenses, and surgical instruments."
        }
      ]
    }
  ]
};

