# Subtopic Revision Content Specification

## 1. Purpose & Scope
This specification defines the content architecture, data schema, and presentation rules for the **Subtopic Revision Section** on each Unit Page. It provides a standardized guideline for content creators and software developers to author and render comprehensive revision notes for G.C.E. Ordinary Level Science.

---

## 2. Learning & Revision Objectives
Every subtopic revision resource must fulfill the following goals:
1. **Core Concept Mastery**: Clear, concise explanations of essential theories matching the National Institute of Education (NIE) syllabus.
2. **Dual-Medium Support**: Full text availability in both English and Sinhala with technical terms cross-referenced.
3. **Examination Focus**: Direct alignment with Sri Lankan O/L testing competencies, highlighting common exam questions, definitions, formulas, and common pitfalls.
4. **Visual & Active Learning**: Integration of scientific diagrams, summary tables, flowcharts, and quick memory checks.

---

## 3. Data Schema: `SubtopicNote`

Each subtopic in `src/data/unitsData.js` currently contains:
```javascript
{
  id: "1.1",
  titleEn: "Biomolecules & Carbohydrates",
  titleSi: "ජෛව අණු හා කාබෝහයිඩ්‍රේට",
  descriptionEn: "Monosaccharides, disaccharides, polysaccharides...",
  descriptionSi: "මොනොසැකරයිඩ, ඩයිසැකරයිඩ, පොලිසැකරයිඩ..."
}
```

When authoring full revision notes (stored in `src/data/subtopics/[unitId].js`), the extended schema is structured as follows:

```typescript
interface SubtopicContent {
  id: string;                      // Matches subtopic ID (e.g. "1.1", "9.2")
  unitId: string;                  // Parent unit ID (e.g. "g10-u1", "g11-u9")
  order: number;                   // Display sequence order
  titleEn: string;
  titleSi: string;
  readingTimeMinutes: number;      // Estimated reading time (e.g., 6)
  
  // High-yield summary cards
  keyTakeawaysEn: string[];
  keyTakeawaysSi: string[];

  // Definitions that frequently appear in O/L Paper II
  keyDefinitions: Array<{
    termEn: string;
    termSi: string;
    defEn: string;
    defSi: string;
    examTips?: string;
  }>;

  // Mathematical and Physical formulas (if applicable)
  formulas?: Array<{
    symbol: string;                // e.g. "Q = mc\Delta\theta" (KaTeX format)
    nameEn: string;
    nameSi: string;
    siUnits: string;               // e.g. "J, kg, J kg⁻¹ °C⁻¹, °C"
    explanationEn: string;
    explanationSi: string;
  }>;

  // Detailed theory sections
  sections: Array<{
    headingEn: string;
    headingSi: string;
    contentEn: string;             // Markdown formatted with GitHub styling
    contentSi: string;
    diagramUrl?: string;           // Asset path (e.g. "/images/diagrams/cell_structure.svg")
    diagramCaptionEn?: string;
    diagramCaptionSi?: string;
  }>;

  // Practical experiments & laboratory activities
  experiments?: Array<{
    titleEn: string;
    titleSi: string;
    aimEn: string;
    aimSi: string;
    materialsEn: string[];
    materialsSi: string[];
    observationsEn: string;
    observationsSi: string;
    conclusionsEn: string;
    conclusionsSi: string;
  }>;

  // Common exam pitfalls & traps
  examPitfalls: Array<{
    trapEn: string;
    trapSi: string;
    correctEn: string;
    correctSi: string;
  }>;
}
```

---

## 4. UI/UX Presentation Rules

### 4.1 Subtopic Grid on Unit Page
1. **Card Presentation**:
   - Subtopic numerical index badge (`01`, `02`, etc.) in the discipline's accent theme.
   - Dual-language title display (primary in current active UI language, secondary as subtitle).
   - Summary description (2-3 lines max, truncated cleanly with line-clamp).
   - "Revise Notes" / "පාඩම් සටහන්" trigger button.
2. **Modal / Slide-over Reader**:
   - Clean, reading-optimized typography (max width 75ch, generous line height `leading-relaxed`).
   - Sticky navigation header with:
     - Back / Close button (`Esc` shortcut enabled).
     - Language toggle (English / Sinhala quick switch).
     - Subtopic navigation (Previous Subtopic / Next Subtopic buttons).
   - Interactive sections:
     - **Takeaways Pill Bar**: Quick revision bullets at the top.
     - **Definition Callout Boxes**: Highlighted with colored borders for memorization.
     - **Interactive Formula Explorer**: Explaining each variable and unit.
     - **Zoomable SVG Diagrams**: High-resolution vector diagrams with labeled pointers.

---

## 5. File & Directory Organization

Content will be maintained in modular files to avoid bloated single files:
```text
src/
└── data/
    ├── unitsData.js              # Unit metadata & basic subtopic list
    └── subtopicNotes/            # Detailed revision notes per unit
        ├── g10-u1.js
        ├── g10-u2.js
        ...
        ├── g11-u8.js
        ├── g11-u9.js
        └── index.js              # Aggregator & lazy-loader
```

---

## 6. Content Contribution Checklist
Before submitting a new subtopic revision guide:
- [ ] English and Sinhala texts are thoroughly proofread against NIE textbooks.
- [ ] Technical terms conform to the Sri Lankan Educational Department Glossary.
- [ ] Math formulas use standard KaTeX syntax (`\(...\)` or `$$...$$`).
- [ ] At least 2 key definitions with exact textbook phrasing are included.
- [ ] At least 1 common exam pitfall/misconception is highlighted.
- [ ] All referenced diagrams are saved in SVG or optimized WebP format in `/public/diagrams/`.
