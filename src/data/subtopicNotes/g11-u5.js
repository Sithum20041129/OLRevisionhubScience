/**
 * Complete Grade 11 Science - Unit 5 (Geometrical Optics) Revision Guide Notes
 * Strictly aligned with the National Institute of Education (NIE) Official Curriculum.
 */

export const unit5RevisionData = {
  unitId: "g11-u5",
  unitNumber: 5,
  grade: 11,
  medium: "English",
  titleEn: "Geometrical Optics",
  titleSi: "ජ්‍යාමිතික ප්‍රකාශ විද්‍යාව",
  textbookCode: "ENG11U05",
  textbookPages: "Pages 105 - 142",
  overviewEn: "This unit covers the fundamental geometrical principles of light: reflection at plane and spherical curved surfaces (concave and convex mirrors), refraction of light through transparent media, refractive index and Snell's law, total internal reflection and optical fibers, image formation through convex and concave lenses, optical instruments (simple microscope, camera, human eye), and corrective lenses for vision defects.",

  // High-yield syllabus summary points
  summaryPoints: [
    "Laws of reflection: (1) Incident ray, reflected ray, and normal at the point of incidence lie in the same plane; (2) Angle of incidence (i) equals angle of reflection (r).",
    "Images formed by plane mirrors are always virtual, upright, identical in size to the object (magnification = 1), laterally inverted, and located at an image distance equal to the object distance behind the mirror.",
    "Concave mirrors (converging) possess a focal length f = R / 2. When an object is placed between the focal point (F) and the pole (P), it forms a virtual, upright, magnified image (used in shaving mirrors, dental mirrors, and solar concentrators).",
    "Convex mirrors (diverging) form virtual, erect, diminished images for all object distances, providing a wide panoramic field of view (used in vehicle rear-view side mirrors and safety intersection mirrors).",
    "Refraction is the bending of light caused by a change in wave speed when crossing the interface between two optical media of different densities. Snell's law: sin(i) / sin(r) = constant = refractive index (n).",
    "Light bending: From rarer to denser medium, light bends towards the normal (i > r); from denser to rarer medium, light bends away from the normal (i < r).",
    "Total internal reflection (TIR) occurs when light traveling in an optically denser medium strikes the boundary of a rarer medium at an angle of incidence greater than the critical angle (i > c).",
    "Applications of TIR include optical fiber broadband communications, medical endoscopy, totally reflecting glass prisms in binoculars, and the formation of atmospheric mirages.",
    "Convex lenses (converging) form real and inverted images for object distances u > f, but form a magnified, upright, virtual image when the object is placed within the focal length (u < f), acting as a simple microscope / hand lens.",
    "Concave lenses (diverging) always form virtual, upright, diminished images between the optical center and the focal point, irrespective of object distance.",
    "Defects of vision: Short-sightedness (myopia) is corrected using a concave (diverging) lens; Long-sightedness (hypermetropia) is corrected using a convex (converging) lens."
  ],

  subtopics: [
    {
      id: "5.1",
      order: 1,
      titleEn: "Reflection of Light & Plane Mirrors",
      titleSi: "ආලෝක පරාවර්තනය සහ තල දර්පණ",
      textbookSection: "Section 5.1 (Pages 105 - 107)",
      readingTimeMinutes: 7,
      keyTakeaways: [
        "Light travels in straight lines (rectilinear propagation) through homogeneous transparent media.",
        "Regular reflection occurs from smooth polished surfaces (mirrors) producing sharp images; diffuse reflection occurs from rough surfaces scattering light in all directions.",
        "First Law of Reflection: The incident ray, reflected ray, and normal at the point of incidence all lie in the same plane.",
        "Second Law of Reflection: Angle of incidence (i) = Angle of reflection (r).",
        "Plane mirror image characteristics: Virtual, upright (erect), same size as object, laterally inverted, and object distance = image distance (u = v).",
        "A periscope uses two plane mirrors oriented parallel at 45° to view over obstacles or around corners."
      ],
      keyDefinitions: [
        {
          term: "Reflection of Light",
          definition: "The bouncing back of a light ray into the same medium when it encounters the boundary surface between two different media."
        },
        {
          term: "Normal",
          definition: "An imaginary straight reference line drawn perpendicular (at 90°) to the reflecting surface at the exact point of incidence of a light ray."
        },
        {
          term: "Virtual Image",
          definition: "An image formed where reflected or refracted light rays only appear to diverge from behind the optical element, which cannot be captured or projected onto a physical screen."
        },
        {
          term: "Lateral Inversion",
          definition: "The reversal effect produced by plane mirrors where the left side of the object appears as the right side of the virtual image, and vice-versa."
        }
      ],
      sections: [
        {
          heading: "5.1.1 Laws of Reflection & Plane Mirror Characteristics",
          content: "### Nature of Light Reflection\nWhen light strikes an interface between two media, a portion or all of the incident light energy is redirected back into the original medium.\n\n### 1. Types of Reflection:\n- **Regular (Specular) Reflection**: Occurs on smooth, flat polished surfaces like plane glass mirrors or still water. Parallel incident rays reflect as parallel reflected rays, forming crisp, clear images.\n- **Irregular (Diffuse) Reflection**: Occurs on microscopically uneven or rough surfaces (paper, wood, unpolished walls). Incident parallel rays are reflected in random scattering angles, illuminating the surface without creating an image.\n\n### 2. Fundamental Laws of Reflection:\n1. **First Law**: The incident ray, the reflected ray, and the normal to the reflecting surface at the point of incidence all lie within the same geometric plane.\n2. **Second Law**: The angle of incidence (i) is strictly equal to the angle of reflection (r) (**i = r**).\n\n### 3. Properties of Images Formed by Plane Mirrors:\n- **Virtual**: Formed by the apparent intersection of backward-projected rays; cannot be focused onto a screen.\n- **Upright (Erect)**: Retains the same vertical orientation as the object.\n- **Same Size**: Linear magnification = 1 (Image height = Object height).\n- **Equal Distance**: Distance of object in front of mirror equals distance of virtual image behind mirror (**u = v**).\n- **Laterally Inverted**: Left and right orientations are reversed.",
          diagram: {
            url: "/images/unit05/fig_5_1_plane_mirror.png",
            caption: "Figure 5.1: Ray diagram of image formation in a plane mirror illustrating virtual image, lateral inversion, and equal object-image distance."
          }
        },
        {
          heading: "5.1.2 Applications of Plane Mirrors & Periscope",
          content: "### Real-World Applications:\n1. **Personal Grooming Mirrors**: Looking glasses utilized daily in homes, barber shops, and dressing rooms.\n2. **The Periscope**:\n   - Consists of a tubular casing containing two plane mirrors fixed parallel to one another at an angle of 45° to the axis.\n   - Light from an elevated object reflects 90° at the upper mirror, travels down the tube, and reflects another 90° at the lower mirror into the observer's eye.\n   - Used in submarines to view sea-surface vessels from submerged depths and in crowded gatherings to see over tall barriers.\n3. **Optical Measuring Instruments**: Used in sensitive galvanometers and pointers with mirror scales to eliminate parallax viewing errors.\n4. **Kaleidoscopes**: Symmetrical geometric reflection patterns created using three strips of plane mirrors inclined at 60° to one another."
        }
      ]
    },
    {
      id: "5.2",
      order: 2,
      titleEn: "Curved (Spherical) Mirrors",
      titleSi: "ගෝලීය දර්පණ",
      textbookSection: "Section 5.2 (Pages 108 - 118)",
      readingTimeMinutes: 10,
      keyTakeaways: [
        "A curved mirror is a reflecting surface formed as a slice of a hollow sphere.",
        "Concave mirror curves inward (converging); Convex mirror curves outward (diverging).",
        "Key terms: Pole (P), Center of Curvature (C), Radius of Curvature (R), Principal Axis, Principal Focus (F), Focal Length (f = R / 2).",
        "Rays parallel to the principal axis reflect through the principal focus F in a concave mirror.",
        "In a concave mirror, placing the object inside the focal length (between F and P) produces a virtual, upright, magnified image.",
        "A convex mirror ALWAYS forms an upright, diminished, virtual image behind the mirror, irrespective of object distance.",
        "Convex mirrors are used in vehicle rear-view mirrors due to their wide panoramic field of view."
      ],
      keyDefinitions: [
        {
          term: "Pole of Mirror (P)",
          definition: "The geometric center point of the curved reflecting surface of a spherical mirror."
        },
        {
          term: "Center of Curvature (C)",
          definition: "The center of the hollow sphere of glass of which the curved mirror forms an operational part."
        },
        {
          term: "Principal Focus (F)",
          definition: "The point on the principal axis where rays of light originally parallel and close to the axis either converge after reflection (concave mirror) or appear to diverge from (convex mirror)."
        },
        {
          term: "Focal Length (f)",
          definition: "The linear distance measured along the principal axis between the pole (P) and the principal focus (F) of a curved mirror (f = R / 2)."
        }
      ],
      sections: [
        {
          heading: "5.2.1 Anatomy of Spherical Mirrors & Ray Tracing Rules",
          content: "### Types of Spherical Mirrors:\n- **Concave Mirror (Converging)**: Silvered on the outer convex surface; the inner hollow curve serves as the reflecting surface.\n- **Convex Mirror (Diverging)**: Silvered on the inner concave surface; the outer bulging curve reflects incident light.\n\n### Essential Geometric Parameters:\n- **Principal Axis**: The straight line passing through both the pole (P) and the center of curvature (C).\n- **Radius of Curvature (R)**: Linear distance from pole (P) to center of curvature (C).\n- **Focal Length Relationship**: For spherical mirrors with small apertures, the focal length is exactly half the radius of curvature: **f = R / 2**.\n\n### Three Principal Diagnostic Rays for Ray Diagrams:\n1. **Ray 1**: A ray traveling parallel to the principal axis passes through (or appears to diverge from) the principal focus **F** after reflection.\n2. **Ray 2**: A ray passing through the principal focus **F** reflects parallel to the principal axis.\n3. **Ray 3**: A ray passing through (or directed towards) the center of curvature **C** hits the mirror along the normal (incidence angle = 0°) and reflects back along its identical original path.",
          diagram: {
            url: "/images/unit05/fig_5_2_concave_mirror.png",
            caption: "Figure 5.2: Ray diagram of a concave mirror illustrating focal point F, center of curvature C, and ray tracing rules."
          }
        },
        {
          heading: "5.2.2 Image Formation & Real-World Applications",
          content: "### Summary of Images Formed by Concave Mirrors:\n1. **Object at Infinity**: Real, inverted, highly diminished at F.\n2. **Object Beyond C**: Real, inverted, diminished between C and F.\n3. **Object at C**: Real, inverted, identical size at C (magnification m = 1).\n4. **Object Between C and F**: Real, inverted, magnified beyond C (used in film projectors).\n5. **Object at F**: Real, inverted, extremely magnified at infinity (used in vehicle headlights and searchlights where a bulb at F produces a parallel beam).\n6. **Object Between F and Pole (P)**: **Virtual, upright, magnified** behind the mirror.\n   - **Applications**: Shaving mirrors, makeup mirrors, dentist's mouth examination mirrors, and solar ovens.\n\n### Convex Mirror Images & Applications:\n- For **any position** in front of a convex mirror, the image is consistently **virtual, upright, and diminished**, situated behind the mirror between P and F.\n- **Wide Field of View**: Because the curved surface bends outward, it collects light from a wide angle, allowing the observer to see a broader area than a flat mirror of the same size.\n- **Applications**:\n  - Side rear-view mirrors of automobiles, motorcycles, and buses.\n  - Blind-corner safety mirrors installed at sharp road bends and supermarket surveillance mirrors."
        }
      ]
    },
    {
      id: "5.3",
      order: 3,
      titleEn: "Refraction of Light & Total Internal Reflection",
      titleSi: "ආලෝක වර්තනය සහ පූර්ණ අභ්‍යන්තර පරාවර්තනය",
      textbookSection: "Section 5.3 (Pages 119 - 125)",
      readingTimeMinutes: 10,
      keyTakeaways: [
        "Refraction is the deviation of light as it passes obliquely from one transparent optical medium into another of different optical density.",
        "Light bends TOWARDS the normal when traveling from a rarer to a denser medium (e.g., air to glass, speed decreases).",
        "Light bends AWAY from the normal when traveling from a denser to a rarer medium (e.g., glass to air, speed increases).",
        "Snell's Law: The ratio sin(i) / sin(r) is constant for a given pair of media, termed the Refractive Index (n).",
        "Apparent depth is shallower than real depth due to refraction (Real depth / Apparent depth = n).",
        "Total Internal Reflection (TIR) requires two conditions: (1) Light must travel from a denser into a rarer medium, and (2) Angle of incidence must exceed the critical angle (i > c).",
        "TIR is utilized in optical fibers, medical endoscopes, binocular reflecting prisms, and creates desert mirages."
      ],
      keyDefinitions: [
        {
          term: "Refraction of Light",
          definition: "The bending of a light ray at the interface between two transparent media caused by a change in the propagation velocity of light as it moves from one medium to another."
        },
        {
          term: "Refractive Index (n)",
          definition: "The constant ratio of the sine of the angle of incidence to the sine of the angle of refraction for light traveling between two specified media (n = sin i / sin r = speed in medium 1 / speed in medium 2)."
        },
        {
          term: "Critical Angle (c)",
          definition: "The unique angle of incidence in the optically denser medium for which the corresponding angle of refraction in the optically rarer medium is exactly 90 degrees."
        },
        {
          term: "Total Internal Reflection (TIR)",
          definition: "The optical phenomenon whereby an incident light ray traveling in a denser medium is completely reflected back into the same denser medium when incident at an angle exceeding the critical angle."
        }
      ],
      sections: [
        {
          heading: "5.3.1 Principles of Refraction & Snell's Law",
          content: "### Mechanics of Refraction\nLight travels at different speeds through media of differing optical densities (Speed in vacuum/air = 3.0 × 10⁸ m s⁻¹, in water = 2.25 × 10⁸ m s⁻¹, in crown glass = 2.0 × 10⁸ m s⁻¹).\n\n### Laws of Refraction:\n1. **First Law**: The incident ray, the refracted ray, and the normal at the point of incidence all lie in the same plane.\n2. **Second Law (Snell's Law)**: For a given pair of media and light of a given wavelength, the ratio of the sine of the angle of incidence to the sine of the angle of refraction is a constant value:\n   - **sin(i) / sin(r) = n** (where n is the refractive index).\n\n### Refraction Through a Rectangular Glass Block:\n- As light enters glass from air (rarer to denser), it bends toward the normal (i > r).\n- As light exits glass back into air (denser to rarer), it bends away from the normal.\n- The emergent ray is parallel to the original incident ray, displaced laterally by a distance termed **lateral shift / displacement**.\n\n### Apparent Depth & Bending Phenomena:\n- Submerged objects (fish in water, coins at the bottom of a beaker, pool floor) appear elevated and shallower than their true depth.\n- A straight pencil dipped obliquely into water appears bent or broken at the surface.",
          diagram: {
            url: "/images/unit05/fig_5_3_refraction_slab.png",
            caption: "Figure 5.3: Refraction of light through a rectangular glass block showing incident ray, refracted ray, emergent ray, and lateral displacement."
          }
        },
        {
          heading: "5.3.2 Critical Angle & Total Internal Reflection (TIR)",
          content: "### Two Absolute Conditions for Total Internal Reflection:\n1. Light must travel from an **optically denser medium** toward an **optically rarer medium** (e.g., from glass or water into air).\n2. The angle of incidence in the denser medium must be **strictly greater than the critical angle** (**i > c**).\n\n### Critical Angles for Common Media:\n- Water to Air: **c ≈ 48.6° (approx. 49°)**\n- Glass to Air: **c ≈ 41.8° (approx. 42°)**\n- Diamond to Air: **c ≈ 24.4°** (extremely small critical angle causes extensive internal reflections, creating brilliance/sparkle).\n\n### Major Practical Applications of TIR:\n1. **Optical Fibres & Telecommunications**:\n   - A flexible glass/plastic strand with an inner core of higher refractive index coated with an outer cladding of lower refractive index.\n   - Light enters at an angle greater than the critical angle, undergoing continuous total internal reflections along the wire with negligible energy loss.\n   - Used in ultra-high-speed broadband internet and telephone networks.\n2. **Medical Endoscopy**:\n   - Optical fibre bundles inserted into internal body cavities (stomach, lungs, joints) illuminate and transmit real-time video images to assist surgical diagnosis.\n3. **Totally Reflecting Prisms**:\n   - Right-angled isosceles prisms (45°-90°-45°) reflect light by 90° or 180° through TIR.\n   - Used in prismatic binoculars and high-grade periscopes in place of silvered mirrors, avoiding tarnishing and ghost reflections.\n4. **Atmospheric Mirages**:\n   - On hot sunny days, the layer of air directly above asphalt roads or desert sand becomes hot and less dense than upper air. Light rays from the sky curve upward via successive refractions and total internal reflection, appearing as a shimmering puddle of water.",
          diagram: {
            url: "/images/unit05/fig_5_4_total_internal_reflection.png",
            caption: "Figure 5.4: Progression of light refraction from critical angle (r = 90°) to Total Internal Reflection (i > c)."
          }
        }
      ]
    },
    {
      id: "5.4",
      order: 4,
      titleEn: "Lenses & Optical Devices",
      titleSi: "කාච සහ ප්‍රකාශ උපකරණ",
      textbookSection: "Section 5.4 (Pages 126 - 142)",
      readingTimeMinutes: 11,
      keyTakeaways: [
        "Convex lenses are converging (thicker in center); Concave lenses are diverging (thinner in center).",
        "Key terms: Optical Centre (O), Principal Axis, Principal Focus (F, F'), Focal Length (f).",
        "A ray passing through the optical center (O) travels straight through the lens without deviation.",
        "A convex lens forms real, inverted images for object distances u > f, and forms an upright, magnified, virtual image when u < f (acting as a simple microscope).",
        "A concave lens ALWAYS produces an upright, diminished, virtual image between the optical center and the focal point.",
        "Short-sightedness (myopia) is corrected by concave lenses; long-sightedness (hypermetropia) is corrected by convex lenses."
      ],
      keyDefinitions: [
        {
          term: "Convex Lens (Converging)",
          definition: "A transparent optical lens that is thicker in the central portion than at the periphery, causing parallel incident light rays to converge to a real focal point."
        },
        {
          term: "Concave Lens (Diverging)",
          definition: "A transparent optical lens that is thinner at the center than at its edges, causing parallel incident light rays to refract outward and diverge from a virtual focal point."
        },
        {
          term: "Optical Centre (O)",
          definition: "The central point within a lens through which incident light rays pass completely straight without experiencing any lateral refraction or angular deviation."
        },
        {
          term: "Simple Microscope (Hand Lens)",
          definition: "An optical magnifying device consisting of a single convex lens used with the object situated within its focal length (u < f) to produce an upright, magnified, virtual image."
        }
      ],
      sections: [
        {
          heading: "5.4.1 Mechanics of Convex & Concave Lenses",
          content: "### Types of Lenses:\n- **Convex Lens (Converging)**: Thicker in the middle, thin at the edges. Gathers incoming parallel rays together toward a real focus.\n- **Concave Lens (Diverging)**: Thinner in the middle, thick at the edges. Spreads incoming parallel rays outwards away from a virtual focus.\n\n### Geometric Features:\n- **Optical Centre (O)**: Center of the lens. Any ray passing through O continues undeviated in a straight path.\n- **Principal Focus (F and F')**: Symmetric focal points situated on both sides at a distance equal to the focal length (f) from O.\n- **Focal Length (f)**: Distance between optical center O and focal point F.\n\n### Standard Rays for Ray Diagrams:\n1. **Ray 1**: A ray traveling parallel to the principal axis refracts through the principal focus F' on the other side (convex lens) or appears to diverge from F on the incident side (concave lens).\n2. **Ray 2**: A ray passing through the optical center O passes straight through without deviation.\n3. **Ray 3**: A ray passing through the principal focus F refracts through the lens and emerges parallel to the principal axis.",
          diagram: {
            url: "/images/unit05/fig_5_5_convex_lens.png",
            caption: "Figure 5.5: Image formation by a convex lens illustrating ray tracing through focal point F and optical center O."
          }
        },
        {
          heading: "5.4.2 Image Formation by Convex & Concave Lenses",
          content: "### Images Formed by a Convex Lens:\n1. **Object Beyond 2F**: Real, inverted, diminished image between F and 2F (Application: Photographic Camera, Human Eye).\n2. **Object at 2F**: Real, inverted, same size as object at 2F (magnification m = 1; Application: Terrestrial telescope inverter).\n3. **Object Between 2F and F**: Real, inverted, magnified image beyond 2F (Application: Slide projector, cinema projector, compound microscope objective).\n4. **Object at F**: Real, inverted, infinitely magnified at infinity (Application: Spotlight, lighthouse illuminator).\n5. **Object Between F and Optical Centre (u < f)**: **Virtual, upright, magnified** image formed on the same side as the object.\n   - **Application**: Hand lens or **Simple Microscope** used by watch repairers, jewelers, and biology students.\n\n### Images Formed by a Concave Lens:\n- For **any object position**, the concave lens consistently creates a **virtual, upright, and diminished** image located between the optical center (O) and principal focus (F).\n- Never forms a real image that can be captured on a screen.",
          diagram: {
            url: "/images/unit05/fig_5_6_concave_lens.png",
            caption: "Figure 5.6: Ray diagram of image formation by a concave lens illustrating upright, diminished, virtual image."
          }
        },
        {
          heading: "5.4.3 Optical Devices & Correction of Vision Defects",
          content: "### Optical Devices:\n1. **Photographic Camera**: Uses a convex lens system to project a real, inverted, diminished image onto a digital sensor or photographic film.\n2. **The Human Eye**: The flexible crystalline lens focuses real, inverted, diminished images onto the photosensitive retina at the back of the eyeball.\n\n### Common Defects of Vision and Their Lens Corrections:\n\n1. **Short-Sightedness (Myopia)**:\n   - **Symptoms**: Can see nearby objects clearly, but distant objects appear blurred and indistinct.\n   - **Optical Cause**: The eyeball is too elongated from front to back, or the cornea/lens system is too converging. Parallel rays from distant objects converge to a focus **in front of the retina**.\n   - **Correction**: Fitted with a **concave (diverging) lens** of appropriate focal length, which diverges incident parallel rays slightly before entering the eye, ensuring the final focus falls sharply onto the retina.\n\n2. **Long-Sightedness (Hypermetropia)**:\n   - **Symptoms**: Can see distant objects clearly, but near objects (such as reading text at 25 cm) appear blurred.\n   - **Optical Cause**: The eyeball is too short, or the lens system is too weak (insufficient converging power). Rays from nearby objects converge to a virtual focus **behind the retina**.\n   - **Correction**: Fitted with a **convex (converging) lens**, which converges diverging rays from near objects before entering the eye, focusing the sharp image directly onto the retina."
        }
      ]
    }
  ]
};

