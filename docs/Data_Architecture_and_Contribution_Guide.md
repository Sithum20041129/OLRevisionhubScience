# Data Architecture & Development Contribution Guide

## 1. Architecture Overview

The OL Science Revision Hub is structured as a client-side Single Page Application (SPA) powered by:
- **Vite + React 19**
- **Tailwind CSS v4** (Utility-first styling with custom palette and animations)
- **React Router v7 (HashRouter)** (Ensuring reliable deep linking across static hosts and GitHub Pages)
- **Lucide React** (Consistent iconography)
- **Bilingual Context Engine (`LanguageContext`)** (Instant toggling between English and Sinhala)

```text
                               ┌───────────────────────────┐
                               │        App.jsx            │
                               │  (HashRouter & Routes)    │
                               └─────────────┬─────────────┘
                                             │
               ┌─────────────────────────────┴─────────────────────────────┐
               ▼                                                           ▼
     ┌──────────────────┐                                        ┌──────────────────┐
     │    HomePage      │                                        │    UnitPage      │
     │  - HeroCarousel  │                                        │  - Subtopic Grid │
     │  - UnitCard Grid │                                        │  - Quiz Player   │
     │  - UnitFilterBar │                                        │  - Past Papers   │
     └─────────┬────────┘                                        └─────────┬────────┘
               │                                                           │
               └─────────────────────────────┬─────────────────────────────┘
                                             ▼
                               ┌───────────────────────────┐
                               │  src/data/unitsData.js    │
                               │  (Central Source of Truth)│
                               └───────────────────────────┘
```

---

## 2. Platform Units & Syllabus Index

The platform currently models **25 units** from the official Sri Lankan National Institute of Education (NIE) syllabus:
- **Grade 10 (Part 1)**: Units 01 to 10 (`g10-u1` through `g10-u10`)
- **Grade 11 (Part 1)**: Units 01 to 08 (`g11-u1` through `g11-u8`)
- **Grade 11 (Part 2)**: Units 09 to 15 (`g11-u9` through `g11-u15`)

Each unit is keyed by a deterministic ID format: `g[grade]-u[unitNumber]`.

---

## 3. How to Add or Update Content

### 3.1 Adding Detailed Notes for a Subtopic
1. Create a content file under `src/data/subtopicNotes/[unitId].js` following the schema defined in [`Subtopic_Content_Specification.md`](file:///c:/Users/Yasiru%20Sithum/OneDrive/Documents/webprojects/OLRevisionhub/Science/docs/Subtopic_Content_Specification.md).
2. Include key definitions, formulas, and common exam traps.
3. Import the file in `src/data/subtopicNotes/index.js` or directly inside `UnitPage.jsx`.

### 3.2 Adding Questions to the Question Bank
1. Create or edit `src/data/quizzes/[unitId].js` following [`Quiz_System_Specification.md`](file:///c:/Users/Yasiru%20Sithum/OneDrive/Documents/webprojects/OLRevisionhub/Science/docs/Quiz_System_Specification.md).
2. Provide questions in both English and Sinhala.
3. Specify `correctIndex` (0 to 3), `paperSource` (e.g. `O/L 2023 Part I Q12`), and a detailed explanation for why the option is correct.
4. Verify questions with `npm run lint`.

### 3.3 Adding Past Papers
1. Add the PDF document to `public/papers/g[grade]/u[unitNumber]/[fileName].pdf`.
2. Update the `pastPapers` array of the unit in `src/data/unitsData.js` following [`Past_Papers_Specification.md`](file:///c:/Users/Yasiru%20Sithum/OneDrive/Documents/webprojects/OLRevisionhub/Science/docs/Past_Papers_Specification.md).
3. Specify `fileSize`, `coverage`, and `nameEn` / `nameSi`.

---

## 4. Development Workflow & Commands

### Running Locally
```powershell
npm run dev
```
Starts the Vite local development server (typically at `http://localhost:5173`).

### Linting & Code Quality
```powershell
npm run lint
```
Runs `oxlint` across all source files. All contributions must pass with 0 warnings and 0 errors.

### Production Build Verification
```powershell
npm run build
```
Builds the production bundle into `/dist`. Always run this command before committing changes to ensure no build or bundling errors exist.

---

## 5. Coding Standards & UI Design Guidelines

1. **Dual Language Integrity**: Never hardcode user-facing strings without supporting both English and Sinhala via `useLanguage` or dual-property data models (`titleEn`/`titleSi`, `textEn`/`textSi`).
2. **Accessibility**: All buttons and interactive controls must have accessible labels (`aria-label`, `title`).
3. **Responsive Design**: Ensure mobile layouts (320px - 480px), tablets (768px), and desktops (1024px+) display comfortably without horizontal overflows.
4. **Discipline Color Conventions**:
   - **Biology**: Emerald / Teal (`#10b981`, `#0d9488`) with 🌱 or 🔬
   - **Chemistry**: Amber / Orange / Purple (`#f59e0b`, `#602d92`) with 🧪 or ⚗️
   - **Physics**: Blue / Cyan / Indigo (`#3b82f6`, `#06b6d4`, `#602d92`) with ⚡ or 🚀

