# Quiz & Question Bank System Specification

## 1. Overview & Purpose
The **Quiz & Question Bank System** enables G.C.E. Ordinary Level students to test their syllabus mastery through interactive, timed practice tests directly from the Unit Page. It simulates real exam conditions, tracks competency gaps, and provides step-by-step explanations in both English and Sinhala.

---

## 2. Core Functional Requirements
1. **Targeted Practice**: Students can launch quizzes per unit or per specific subtopic.
2. **Real Exam Question Alignment**: Every question is tagged with its official source (e.g. `O/L 2023 Paper I Q14`, `Western Province 2022 Q3`).
3. **Dual Language (EN / SI)**: Complete questions, options, and explanations provided in both languages with instant language toggling.
4. **Adaptive Time Tracker**: Optional countdown timer reflecting actual O/L timing (approx. 1.2 to 1.5 minutes per MCQ).
5. **Comprehensive Review & Explanations**:
   - Correct answers highlighted in emerald/green.
   - User selections shown in neutral or red if incorrect.
   - In-depth theoretical rationales explaining why the answer is correct and why other options are distractors.
   - Specific NIE syllabus competency code reference (e.g., `Competency 9.4`).

---

## 3. Data Schema: `QuizQuestion`

Questions are saved in modular question banks under `src/data/quizzes/[unitId].js`.

```typescript
export interface QuizQuestion {
  id: string;                      // Unique ID (e.g. "q-g11-u9-01")
  unitId: string;                  // Unit ID (e.g. "g11-u9")
  subtopicId: string;              // Subtopic ID (e.g. "9.2")
  type: "mcq" | "structured";      // Question format
  paperSource: string;             // e.g. "G.C.E. O/L 2023 (Part I)" or "Southern Prov. 2022"
  year?: number;                   // e.g. 2023
  difficulty: "Easy" | "Medium" | "Hard";

  // Question Prompt
  textEn: string;
  textSi: string;
  diagramUrl?: string;             // Optional question illustration / graph

  // Options (for MCQ format)
  optionsEn: string[];             // 4 answer choices
  optionsSi: string[];             // 4 answer choices in Sinhala
  correctIndex: number;            // 0, 1, 2, or 3

  // Explanations & Feedback
  explanationEn: string;
  explanationSi: string;
  competency: string;              // Official syllabus competency description

  // Structured Question Subparts (for Part II practice)
  structuredParts?: Array<{
    partLabel: string;             // e.g. "(a) (i)"
    questionEn: string;
    questionSi: string;
    marks: number;
    modelAnswerEn: string;
    modelAnswerSi: string;
  }>;
}
```

### Example Question Data
```javascript
{
  id: "q-g11-u9-01",
  unitId: "g11-u9",
  subtopicId: "9.4",
  type: "mcq",
  paperSource: "G.C.E. O/L 2023 (Part I Q18)",
  year: 2023,
  difficulty: "Medium",
  textEn: "Which of the following explains why gaps are left between railway tracks?",
  textSi: "දුම්රිය පීලි අතර කුඩා හිඩැසක් තැබීමට හේතුව පහත සඳහන් ඒවායින් කුමක්ද?",
  optionsEn: [
    "To allow for thermal expansion during hot weather without buckling",
    "To reduce friction between the train wheels and rails",
    "To allow rain water to drain away quickly",
    "To reduce sound vibrations caused by trains"
  ],
  optionsSi: [
    "උණුසුම් කාලගුණයේදී සිදුවන තාප ප්‍රසාරණය නිසා පීලි නැමීම වැළැක්වීමට",
    "දුම්රිය රෝද සහ පීලි අතර ඝර්ෂණය අවම කිරීමට",
    "වැසි ජලය ඉක්මනින් බැසයාමට ඉඩ සැලසීමට",
    "දුම්රිය ධාවනයෙන් ඇතිවන ශබ්ද කම්පන අවම කිරීමට"
  ],
  correctIndex: 0,
  explanationEn: "Solids expand when heated. Steel rails expand in direct sunlight; the expansion gap allows room for elongation without generating mechanical stress that causes tracks to warp or derail trains.",
  explanationSi: "ඝන ද්‍රව්‍ය රත් වූ විට ප්‍රසාරණය වේ. දිවා කාලයේ දැඩි හිරු එළිය නිසා දුම්රිය පීලි දිගින් වැඩි වන අතර, හිඩැසක් නොතැබුවහොත් පීලි ඇදවී අනතුරු සිදුවිය හැක.",
  competency: "9.4 Explains practical applications and consequences of thermal expansion of solids."
}
```

---

## 4. Quiz Session State Machine

The Quiz Player state machine operates with the following state lifecycle:

```text
[IDLE / LAUNCH] 
      │  User clicks "Start Unit Quiz"
      ▼
[IN_PROGRESS] ──(Next / Prev / Jump)──► [ANSWER_RECORDED]
      │                                       │
      │ ◄──────────(Timer expires / Submit)───┘
      ▼
[RESULTS_SUMMARY]
      ├── Score (% and Raw / Total)
      ├── Time Elapsed vs Total Allowed
      ├── Competency Breakdown (Strengths & Areas for Improvement)
      ├── Retake Option
      └── [REVIEW_MODE] (Step-by-step review with detailed explanations)
```

### Session State Interface:
```typescript
interface QuizSessionState {
  unitId: string;
  questions: QuizQuestion[];
  currentIndex: number;
  userAnswers: Record<string, number>; // questionId -> selectedIndex
  timeRemaining: number;              // in seconds
  isSubmitted: boolean;
  score: number;
  scorePercentage: number;
  flaggedQuestionIds: string[];        // bookmarks for later review
}
```

---

## 5. Directory & Module Structure

```text
src/
├── components/
│   ├── QuizPlayerModal.jsx       # Modal overlay running the quiz
│   ├── QuizQuestionCard.jsx      # Individual question view with options
│   ├── QuizTimer.jsx             # Visual countdown timer with alerts
│   ├── QuizScoreCard.jsx         # Post-quiz analytics & competency report
│   └── QuizReviewModal.jsx       # Question-by-question review & explanations
└── data/
    └── quizzes/                  # Question banks by unit
        ├── g10-u1.js
        ├── g10-u2.js
        ...
        ├── g11-u9.js
        ├── g11-u15.js
        └── quizIndex.js          # Registry providing getQuizByUnitId(unitId)
```

---

## 6. Development Checklist for Question Banks
- [ ] Minimum 20 verified MCQs per unit for full coverage.
- [ ] Questions categorized evenly across all subtopics in the unit.
- [ ] Every question includes verified past paper reference or target year.
- [ ] Full bilingual text (EN + SI) verified against official marking schemes.
- [ ] No ambiguous distractors; incorrect options represent documented student misconceptions.
- [ ] All scientific notation and formulas formatted using proper sub/superscripts or KaTeX.
