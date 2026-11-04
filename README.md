# ReviseHub Science | O/L Science Revision Platform 🔬

A modern, bilingual revision web platform designed for Sri Lankan G.C.E. Ordinary Level (O/L) Science students (both **English** and **Sinhala** medium).

---

## 🌟 Key Features

1. **Dual-Medium Language Switcher (EN / සිංහල)**
   - Instant toggle with typography optimized for English (`Inter`) and Sinhala (`Noto Sans Sinhala`).
   - Seamless switching across the entire UI, unit names, and study content.

2. **24 Syllabus Units Categorization**
   - Covers all Grade 10 and Grade 11 Science syllabus units mapped to the National Institute of Education (NIE) curriculum.
   - Discipline-coded tags: 🌱 Biology, 🧪 Chemistry, ⚡ Physics.
   - Search & filter by grade, subject branch, and keywords.

3. **Quiz-Type Question & Answer Module**
   - Architecture ready to receive questions extracted from uploaded past exam papers (e.g., G.C.E. O/L National papers, Western Province, Southern Province).
   - Interactive quiz runner preview featuring timer, MCQ selection, immediate feedback, and detailed scientific explanations with syllabus competency tags.

4. **AI-Generated Syllabus Flashcards Module**
   - 3D tactile flip card interface with active recall feedback (*Mastered* vs *Needs Review*).
   - Designed for spaced repetition (SM-2 / Leitner model).

5. **AI Paper & Syllabus Ingestion Studio**
   - Pipeline preview demonstrating document upload (PDF/images), OCR extraction, auto-tagging to units, and flashcard generation.

6. **Interactive UI/UX Strategic Improvement Plan**
   - Accessible right from within the app and via the project documentation.

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```

---

## 📁 Project Structure

```
Science/
├── index.html                      # Entry HTML with Google Fonts for English & Sinhala
├── vite.config.js                  # Vite configuration with Tailwind CSS plugin
├── package.json                    # Dependencies & scripts
└── src/
    ├── main.jsx                    # React root render
    ├── App.jsx                     # Main application layout and modal state
    ├── index.css                   # Global styles & 3D card-flip CSS utilities
    ├── context/
    │   ├── LanguageContextInstance.js # React Context definition
    │   ├── LanguageContext.jsx        # Language provider with persistent state
    │   └── useLanguage.js             # Custom hook for bilingual switching
    ├── data/
    │   ├── translations.js         # Complete English & Sinhala dictionaries
    │   ├── unitsData.js            # 24 Grade 10 & 11 Science units & demo schemas
    │   └── papersData.js           # Target past papers repository metadata
    └── components/
        ├── Navbar.jsx              # Header with logo, streak counter, and language toggle
        ├── HeroBanner.jsx          # Hero section with search & filter pills
        ├── UnitCard.jsx            # Syllabus unit cards with discipline styling
        ├── QuizPlayerModal.jsx     # Interactive quiz runner modal
        ├── FlashcardModal.jsx      # 3D active recall flashcard player modal
        ├── AIPaperExtractorModal.jsx # Paper upload & AI pipeline studio modal
        ├── UXImprovementPlanModal.jsx # Strategic UI/UX roadmap viewer
        └── Footer.jsx              # Footer with NIE curriculum notes
```
