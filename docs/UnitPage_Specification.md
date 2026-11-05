# Unit Page Specification & Architecture

## 1. Overview
The **Unit Page** is a dedicated learning portal for each science unit in the G.C.E. Ordinary Level Science Revision Hub. It provides students with a focused, distraction-free environment to:
1. **Revise Subtopics**: Explore syllabus subtopics with comprehensive notes.
2. **Practice Unit Quizzes**: Test knowledge through categorized MCQs and structured questions.
3. **Download Past Papers**: Access real G.C.E. O/L past examination papers and provincial target papers categorized by this specific unit.

---

## 2. Information Architecture & URL Routing

### 2.1 Route Mapping
- Route: `/#/unit/:id` (e.g. `/#/unit/g10-u1`, `/#/unit/g11-u1`, ...)
- Router: `HashRouter` from `react-router-dom` (ensures zero 404 errors on GitHub Pages, static hosts, and Vite dev server).

### 2.2 Grade 10 Part 1 Units (Sri Lanka National Syllabus - Edupub)

| Unit ID | Unit # | Discipline | Title (English) | Title (Sinhala) | Subtopics Count |
|---|---|---|---|---|---|
| `g10-u1` | 01 | Biology | Chemical Basis of Life | ජීවයේ රසායනික පදනම | 7 |
| `g10-u2` | 02 | Physics | Motion in a Straight Line | සරල රේඛීය චලිතය | 8 |
| `g10-u3` | 03 | Chemistry | Structure of Matter | පදාර්ථයේ ව්‍යුහය | 8 |
| `g10-u4` | 04 | Physics | Newton's Laws of Motion | චලිතය පිළිබඳ නිව්ටන් නියම | 6 |
| `g10-u5` | 05 | Physics | Friction | ඝර්ෂණය | 6 |
| `g10-u6` | 06 | Biology | Plant & Animal Cell Structure and Functions | ශාක හා සත්ත්ව සෛලවල ව්‍යුහය හා කෘත්‍ය | 7 |
| `g10-u7` | 07 | Chemistry | Quantification of Elements and Compounds | මූලද්‍රව්‍ය හා සංයෝග ප්‍රමාණනය | 6 |
| `g10-u8` | 08 | Biology | Characteristics of Organisms | ජීවීන්ගේ ලාක්ෂණික | 8 |
| `g10-u9` | 09 | Physics | Resultant Force | ප්‍රතිඵලී බලය | 6 |
| `g10-u10` | 10 | Chemistry | Chemical Bonds | රසායනික බන්ධන | 8 |

### 2.3 Grade 11 Part 1 Units (Sri Lanka National Syllabus - Edupub)

| Unit ID | Unit # | Discipline | Title (English) | Title (Sinhala) | Subtopics Count |
|---|---|---|---|---|---|
| `g11-u1` | 01 | Biology | Living Tissues | ජීවී පටක | 2 |
| `g11-u2` | 02 | Biology | Photosynthesis | ප්‍රභාසංස්ලේෂණය | 3 |
| `g11-u3` | 03 | Chemistry | Mixtures | මිශ්‍රණ | 3 |
| `g11-u4` | 04 | Physics | Waves and their Applications | තරංග හා ඒවායේ යෙදීම් | 3 |
| `g11-u5` | 05 | Physics | Geometrical Optics | ජ්‍යාමිතික ප්‍රකාශ විද්‍යාව | 4 |
| `g11-u6` | 06 | Biology | Biological Processes in Human Body | මිනිස් සිරුරේ ජීව ක්‍රියාවලි | 5 |
| `g11-u7` | 07 | Chemistry | Acids, Bases and Salts | අම්ල, භස්ම හා ලවණ | 4 |
| `g11-u8` | 08 | Chemistry | Heat Changes Associated with Chemical Reactions | රසායනික ප්‍රතික්‍රියා ආශ්‍රිත තාප විපර්යාස | 3 |

### 2.4 Grade 11 Part 2 Units (Sri Lanka National Syllabus - Edupub)

| Unit ID | Unit # | Discipline | Title (English) | Title (Sinhala) | Subtopics Count |
|---|---|---|---|---|---|
| `g11-u9` | 09 | Physics | Heat | තාපය | 5 |
| `g11-u10` | 10 | Physics | Power and Energy of Electric Appliances | විද්‍යුත් උපකරණවල ක්ෂමතාව සහ ශක්තිය | 5 |
| `g11-u11` | 11 | Physics | Electronics | ඉලෙක්ට්‍රොනික විද්‍යාව | 5 |
| `g11-u12` | 12 | Chemistry | Electrochemistry | විද්‍යුත් රසායනය | 3 |
| `g11-u13` | 13 | Physics | Electromagnetism and Electromagnetic Induction | විද්‍යුත් චුම්බකත්වය සහ විද්‍යුත් චුම්බක ප්‍රේරණය | 3 |
| `g11-u14` | 14 | Chemistry | Hydrocarbons and Their Derivatives | හයිඩ්‍රොකාබන සහ ඒවායේ ව්‍යුත්පන්න | 3 |
| `g11-u15` | 15 | Biology | Biosphere | ජීවගෝලය | 5 |

---

## 3. Component Specification (`UnitPage.jsx`)

### 3.1 Page Header & Navigation Controls
- **Top Action Bar inside Hero**:
  - `All Topics` (`සියලු පාඩම්`): Direct navigation back to the curriculum list.
  - `Prev Lesson` (`පෙර පාඩම`): Seamless navigation to the preceding syllabus chapter.
  - `Next Lesson` (`ඊළඟ පාඩම`): Seamless navigation to the subsequent syllabus chapter.
  - `Share` (`බෙදාගන්න`): Copy unit URL link with visual clipboard confirmation feedback.

### 3.2 Unit Hero Banner
- **Discipline Badge**: Color-coded (Emerald for Biology, Amber for Chemistry, Purple for Physics) with discipline icon.
- **Title (Dual Medium)**: Primary title based on selected language (EN/SI), secondary subtitle in alternate language.
- **Unit Description**: Concise syllabus summary.
- **Clickable Quick Jump Metrics**:
  - `Subtopics` &rarr; Jumps smoothly to `#subtopics`
  - `Practice MCQs` &rarr; Jumps smoothly to `#quiz-area`
  - `Past Papers` &rarr; Jumps smoothly to `#past-papers`
  - `Exam Level` &rarr; Displays "G.C.E. O/L Core"

### 3.3 Section 1: Subtopics Revision Area ("විෂය අනුමාතෘකා")
- Grid of interactive cards for each syllabus subtopic.
- Numbering badge (e.g. `1.1`, `1.2`).
- Subtopic title in Sinhala & English.
- Summary of learning outcomes.
- "Revise Notes" / "පාඩම් සටහන්" action button triggering note view / modal.

### 3.4 Section 2: Interactive Quiz & Practice Area ("ඒකක ප්‍රශ්නාවලිය")
- High-contrast practice card.
- Exam format breakdown (MCQ and structured).
- "Start Unit Quiz" / "ප්‍රශ්නාවලිය අරඹන්න" button with question counter and difficulty indicator.

### 3.5 Section 3: G.C.E. O/L Past Papers Area ("පසුගිය විභාග ප්‍රශ්න පත්‍ර")
- Cards for targeted past exam questions:
  - G.C.E. O/L 2023, 2022, 2021 Part I & II questions.
  - Provincial mock papers (Western, Central, Southern, North-Western, Uva).
- Paper badges: Year, Term, Medium (English / Sinhala).
- "Download PDF" / "බාගත කරන්න" action buttons with simulated feedback.
