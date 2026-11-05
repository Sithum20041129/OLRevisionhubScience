# Past Papers & Examination Resource Specification

## 1. Overview & Objectives
The **Past Papers System** provides students with direct access to official examination resources categorized by syllabus units. It allows learners to practice authentic G.C.E. O/L questions, evaluate their answers using official Department of Examinations marking schemes, and master unit-specific question trends.

---

## 2. Resource Classification

The system catalogs three distinct types of examination papers:
1. **Topical Past Paper Collections (ඒකක ප්‍රශ්න සංග්‍රහය)**:
   - Curated compilation of all past O/L exam questions related specifically to this unit from 2016 to the most recent year.
   - Ideal for students revising immediately after completing a lesson.
2. **Official National G.C.E. O/L Exam Papers (අ.පො.ස. සා/පෙළ ජාතික විභාග ප්‍රශ්න පත්‍ර)**:
   - Full past examination papers (Part I & Part II) issued by the Department of Examinations, Sri Lanka.
3. **Provincial Education Department Target Papers (පළාත් අධ්‍යාපන දෙපාර්තමේන්තු ප්‍රශ්න පත්‍ර)**:
   - Term evaluations and provincial pilot tests (Western, Southern, Central, Sabaragamuwa, North-Western, Uva, North-Central, Eastern, Northern).

---

## 3. Data Schema: `PastPaperRecord`

Each unit maintains a list of past papers in `src/data/unitsData.js` and full catalog records in `src/data/pastPapersData.js`:

```typescript
export interface PastPaperRecord {
  id: string;                      // Unique ID (e.g. "p-g11-u9-01")
  unitId: string;                  // Associated Unit (e.g. "g11-u9")
  subtopicIds?: string[];          // Targeted subtopics (e.g. ["9.2", "9.4"])
  year: number;                    // Examination year (e.g. 2023)
  sourceType: "national" | "provincial" | "topical";
  sourceNameEn: string;            // e.g. "G.C.E. O/L Official Exam" or "Western Province"
  sourceNameSi: string;
  nameEn: string;
  nameSi: string;
  part: "Part I" | "Part II" | "Full Paper" | "Marking Scheme";
  fileType: "PDF";
  fileSize: string;                // e.g. "2.4 MB"
  downloadUrl: string;             // Asset path (e.g. "/papers/g11/u9/ol_2023_heat.pdf")
  hasMarkingScheme: boolean;
  markingSchemeUrl?: string;       // Direct link to official marking guide
  coverageSummaryEn: string;       // Key questions & topics tested in this paper
  coverageSummarySi: string;
}
```

### Example Entry:
```javascript
{
  id: "p-g11-u9-01",
  unitId: "g11-u9",
  subtopicIds: ["9.2", "9.3"],
  year: 2023,
  sourceType: "national",
  sourceNameEn: "Department of Examinations, Sri Lanka",
  sourceNameSi: "ශ්‍රී ලංකා විභාග දෙපාර්තමේන්තුව",
  nameEn: "G.C.E. O/L 2023 - Heat & Latent Heat Calculations",
  nameSi: "අ.පො.ස. සා/පෙළ 2023 - තාපය සහ ගුප්ත තාප ගණනය",
  part: "Part II",
  fileType: "PDF",
  fileSize: "2.1 MB",
  downloadUrl: "/papers/g11/u9/ol_2023_part2_heat.pdf",
  hasMarkingScheme: true,
  markingSchemeUrl: "/papers/g11/u9/ol_2023_part2_heat_marking.pdf",
  coverageSummaryEn: "Q = mcθ calculations, ice-to-water phase changes, cooling curve analysis",
  coverageSummarySi: "Q = mcθ ගණනය, අයිස්-ජල අවස්ථා විපර්යාස සහ සිසිලන ප්‍රස්ථාර ආශ්‍රිත ප්‍රශ්න"
}
```

---

## 4. Storage & Asset Directory Convention

All downloadable PDF documents are stored under `/public/papers/` to ensure direct browser accessibility and efficient caching:

```text
public/
└── papers/
    ├── g10/
    │   ├── u1/
    │   │   ├── ol_2023_chemical_basis.pdf
    │   │   └── ol_2023_chemical_basis_marking.pdf
    │   └── ...
    └── g11/
        ├── u9/
        │   ├── ol_2023_heat_p2.pdf
        │   └── western_2022_heat.pdf
        ├── u10/
        │   └── ol_2023_power_energy.pdf
        └── ...
```

### File Naming Convention
- Format: `[source]_[year]_[unitSlug]_[part].[ext]`
- Examples:
  - `ol_2023_g11_u9_heat_part2.pdf`
  - `western_2022_g11_u9_heat.pdf`
  - `ol_2023_g11_u9_marking.pdf`

---

## 5. UI Component Behavior on Unit Page

1. **Past Papers Card Presentation**:
   - Distinctive border and PDF document icon.
   - Year badge and provincial/national authority tag.
   - Dual-language paper title and coverage summary.
   - File format and file size indicator (e.g. `PDF • 2.1 MB`).
2. **Download Button & Simulated Feedback**:
   - "Download PDF" (`PDF බාගත කරන්න`) button.
   - If the actual PDF asset is currently being indexed, the system displays a helpful notification:
     - `Preparing download... Past paper indexing in progress` (`බාගත කිරීමට සූදානම් කරමින්... ප්‍රශ්න පත්‍ර ඇතුළත් කිරීම සිදුවෙමින් පවතී`).
   - If the PDF is available in `/public/papers/`, the browser triggers an instant native download.
3. **Marking Scheme Access**:
   - Secondary button for "Marking Scheme" (`ලකුණු දීමේ පටිපාටිය`) when available.

---

## 6. Verification & Quality Checklist
- [ ] PDF files are compressed (maximum recommended size: < 5 MB per paper).
- [ ] Text in PDF is clear and readable at 100% zoom.
- [ ] Sinhala Unicode fonts render without missing glyphs.
- [ ] Questions match the current 2016-to-present NIE syllabus format.

