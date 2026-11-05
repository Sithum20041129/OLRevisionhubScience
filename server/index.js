import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Path to persistent JSON database
const DB_PATH = path.join(__dirname, 'db', 'store.json');

// Valid 25 official units in curriculum
const OFFICIAL_UNIT_IDS = new Set([
  'g10-u1', 'g10-u2', 'g10-u3', 'g10-u4', 'g10-u5',
  'g10-u6', 'g10-u7', 'g10-u8', 'g10-u9', 'g10-u10',
  'g11-u1', 'g11-u2', 'g11-u3', 'g11-u4', 'g11-u5',
  'g11-u6', 'g11-u7', 'g11-u8', 'g11-u9', 'g11-u10',
  'g11-u11', 'g11-u12', 'g11-u13', 'g11-u14', 'g11-u15'
]);

// Middleware
app.use(cors());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

// Helper to read database
function readDb() {
  try {
    if (!fs.existsSync(DB_PATH)) {
      const initialStore = {
        version: '1.0.0',
        lastUpdated: new Date().toISOString(),
        questions: [],
        flashcards: [],
        imports: []
      };
      fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
      fs.writeFileSync(DB_PATH, JSON.stringify(initialStore, null, 2), 'utf8');
      return initialStore;
    }
    const raw = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading db:', err);
    return { version: '1.0.0', lastUpdated: new Date().toISOString(), questions: [], flashcards: [], imports: [] };
  }
}

// Helper to write database
function writeDb(data) {
  try {
    data.lastUpdated = new Date().toISOString();
    fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
    // Write atomically via temporary file
    const tempPath = DB_PATH + '.tmp';
    fs.writeFileSync(tempPath, JSON.stringify(data, null, 2), 'utf8');
    fs.renameSync(tempPath, DB_PATH);
    return true;
  } catch (err) {
    console.error('Error writing db:', err);
    return false;
  }
}

// ---------------------------------------------------------------------------
// 1. Health check
// ---------------------------------------------------------------------------
app.get('/api/health', (req, res) => {
  const db = readDb();
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    totalQuestions: (db.questions || []).length,
    totalFlashcards: (db.flashcards || []).length,
    officialUnits: OFFICIAL_UNIT_IDS.size
  });
});

// ---------------------------------------------------------------------------
// 2. GET /api/units/summary
// Returns question counts, flashcard counts, and sources per unitId
// ---------------------------------------------------------------------------
app.get('/api/units/summary', (req, res) => {
  const db = readDb();
  const summary = {};

  // Initialize summary for all official units
  for (const unitId of OFFICIAL_UNIT_IDS) {
    summary[unitId] = {
      unitId,
      questionsCount: 0,
      flashcardsCount: 0,
      sources: []
    };
  }

  // Count questions
  for (const q of (db.questions || [])) {
    if (q && q.unitId) {
      if (!summary[q.unitId]) {
        summary[q.unitId] = { unitId: q.unitId, questionsCount: 0, flashcardsCount: 0, sources: [] };
      }
      summary[q.unitId].questionsCount += 1;
      if (q.paperSource && !summary[q.unitId].sources.includes(q.paperSource)) {
        summary[q.unitId].sources.push(q.paperSource);
      }
    }
  }

  // Count flashcards
  for (const fc of (db.flashcards || [])) {
    if (fc && fc.unitId) {
      if (!summary[fc.unitId]) {
        summary[fc.unitId] = { unitId: fc.unitId, questionsCount: 0, flashcardsCount: 0, sources: [] };
      }
      summary[fc.unitId].flashcardsCount += 1;
    }
  }

  res.json({
    success: true,
    totalQuestions: (db.questions || []).length,
    totalFlashcards: (db.flashcards || []).length,
    units: summary
  });
});

// ---------------------------------------------------------------------------
// 3. GET /api/units/:unitId/content
// Returns { unitId, questions: [...], flashcards: [...] } with query filters
// ---------------------------------------------------------------------------
app.get('/api/units/:unitId/content', (req, res) => {
  const { unitId } = req.params;
  const { subtopicId, year, type, difficulty } = req.query;

  const db = readDb();

  let questions = (db.questions || []).filter(q => q.unitId === unitId);
  let flashcards = (db.flashcards || []).filter(fc => fc.unitId === unitId);

  // Apply filters if provided
  if (subtopicId) {
    questions = questions.filter(q => q.subtopicId === subtopicId);
    flashcards = flashcards.filter(fc => fc.subtopicId === subtopicId);
  }
  if (year) {
    questions = questions.filter(q => String(q.year) === String(year));
  }
  if (type) {
    questions = questions.filter(q => q.type === type);
  }
  if (difficulty) {
    questions = questions.filter(q => q.difficulty?.toLowerCase() === difficulty.toLowerCase());
  }

  res.json({
    success: true,
    unitId,
    totalQuestions: questions.length,
    totalFlashcards: flashcards.length,
    questions,
    flashcards
  });
});

// ---------------------------------------------------------------------------
// 4. POST /api/import
// Accepts JSON payload { paperInfo, questions: [...], flashcards: [...] }
// Validates unitId, upserts by id, returns affected units summary
// ---------------------------------------------------------------------------
app.post('/api/import', (req, res) => {
  try {
    const payload = req.body;
    if (!payload || typeof payload !== 'object') {
      return res.status(400).json({ success: false, message: 'Invalid payload: expected JSON object.' });
    }

    const { paperInfo = {}, questions = [], flashcards = [] } = payload;

    if (!Array.isArray(questions) && !Array.isArray(flashcards)) {
      return res.status(400).json({ success: false, message: 'Payload must contain a questions or flashcards array.' });
    }

    const db = readDb();
    const affectedUnits = {};
    const invalidItems = [];

    let questionsAdded = 0;
    let questionsUpdated = 0;
    let flashcardsAdded = 0;
    let flashcardsUpdated = 0;

    const existingQuestionsMap = new Map((db.questions || []).map(q => [q.id, q]));
    const existingFlashcardsMap = new Map((db.flashcards || []).map(fc => [fc.id, fc]));

    // Process questions
    if (Array.isArray(questions)) {
      questions.forEach((q, idx) => {
        if (!q || !q.unitId) {
          invalidItems.push({ type: 'question', index: idx, reason: 'Missing unitId' });
          return;
        }

        const normalizedUnitId = q.unitId.toLowerCase().trim();
        if (!OFFICIAL_UNIT_IDS.has(normalizedUnitId)) {
          invalidItems.push({ type: 'question', index: idx, unitId: q.unitId, reason: `Unknown unitId "${q.unitId}". Must be one of the 25 official units.` });
          return;
        }

        const qId = q.id || `q-${normalizedUnitId}-${Date.now()}-${idx}`;
        const cleanQuestion = {
          id: qId,
          unitId: normalizedUnitId,
          subtopicId: q.subtopicId || '1.1',
          type: q.type === 'structured' ? 'structured' : 'mcq',
          paperSource: q.paperSource || paperInfo.title || 'G.C.E. O/L Examination',
          year: Number(q.year) || paperInfo.year || 2023,
          difficulty: q.difficulty || 'Medium',
          textEn: q.textEn || '',
          textSi: q.textSi || '',
          diagramUrl: q.diagramUrl || '',
          optionsEn: Array.isArray(q.optionsEn) ? q.optionsEn : [],
          optionsSi: Array.isArray(q.optionsSi) ? q.optionsSi : [],
          correctIndex: typeof q.correctIndex === 'number' ? q.correctIndex : 0,
          explanationEn: q.explanationEn || '',
          explanationSi: q.explanationSi || '',
          competency: q.competency || '',
          structuredParts: Array.isArray(q.structuredParts) ? q.structuredParts : []
        };

        if (existingQuestionsMap.has(qId)) {
          existingQuestionsMap.set(qId, cleanQuestion);
          questionsUpdated += 1;
        } else {
          existingQuestionsMap.set(qId, cleanQuestion);
          questionsAdded += 1;
        }

        if (!affectedUnits[normalizedUnitId]) {
          affectedUnits[normalizedUnitId] = { questions: 0, flashcards: 0 };
        }
        affectedUnits[normalizedUnitId].questions += 1;
      });
    }

    // Process flashcards
    if (Array.isArray(flashcards)) {
      flashcards.forEach((fc, idx) => {
        if (!fc || !fc.unitId) {
          invalidItems.push({ type: 'flashcard', index: idx, reason: 'Missing unitId' });
          return;
        }

        const normalizedUnitId = fc.unitId.toLowerCase().trim();
        if (!OFFICIAL_UNIT_IDS.has(normalizedUnitId)) {
          invalidItems.push({ type: 'flashcard', index: idx, unitId: fc.unitId, reason: `Unknown unitId "${fc.unitId}". Must be one of the 25 official units.` });
          return;
        }

        const fcId = fc.id || `fc-${normalizedUnitId}-${Date.now()}-${idx}`;
        const cleanFlashcard = {
          id: fcId,
          unitId: normalizedUnitId,
          subtopicId: fc.subtopicId || '1.1',
          topicEn: fc.topicEn || '',
          topicSi: fc.topicSi || '',
          frontEn: fc.frontEn || '',
          frontSi: fc.frontSi || '',
          backEn: fc.backEn || '',
          backSi: fc.backSi || '',
          tag: fc.tag || 'Revision'
        };

        if (existingFlashcardsMap.has(fcId)) {
          existingFlashcardsMap.set(fcId, cleanFlashcard);
          flashcardsUpdated += 1;
        } else {
          existingFlashcardsMap.set(fcId, cleanFlashcard);
          flashcardsAdded += 1;
        }

        if (!affectedUnits[normalizedUnitId]) {
          affectedUnits[normalizedUnitId] = { questions: 0, flashcards: 0 };
        }
        affectedUnits[normalizedUnitId].flashcards += 1;
      });
    }

    // Reconstruct store arrays
    db.questions = Array.from(existingQuestionsMap.values());
    db.flashcards = Array.from(existingFlashcardsMap.values());

    // Record import history
    if (!Array.isArray(db.imports)) db.imports = [];
    const importRecord = {
      id: `imp-${Date.now()}`,
      importedAt: new Date().toISOString(),
      paperInfo,
      questionsCount: questionsAdded + questionsUpdated,
      flashcardsCount: flashcardsAdded + flashcardsUpdated,
      affectedUnits
    };
    db.imports.unshift(importRecord);
    if (db.imports.length > 50) db.imports.pop(); // keep last 50 imports

    // Save to file
    const saved = writeDb(db);
    if (!saved) {
      return res.status(500).json({ success: false, message: 'Failed to write data to store.json' });
    }

    res.json({
      success: true,
      message: `Successfully processed import: ${questionsAdded} questions added (${questionsUpdated} updated), ${flashcardsAdded} flashcards added (${flashcardsUpdated} updated).`,
      importedQuestions: questionsAdded + questionsUpdated,
      importedFlashcards: flashcardsAdded + flashcardsUpdated,
      affectedUnits,
      invalidItemsCount: invalidItems.length,
      invalidItems: invalidItems.slice(0, 10)
    });
  } catch (err) {
    console.error('Import error:', err);
    res.status(500).json({ success: false, message: 'Internal server error during import.', error: err.message });
  }
});

// ---------------------------------------------------------------------------
// 5. DELETE /api/questions/:id
// Deletes a specific question
// ---------------------------------------------------------------------------
app.delete('/api/questions/:id', (req, res) => {
  const { id } = req.params;
  const db = readDb();
  const initialLen = (db.questions || []).length;
  db.questions = (db.questions || []).filter(q => q.id !== id);

  if (db.questions.length === initialLen) {
    return res.status(404).json({ success: false, message: `Question with id "${id}" not found.` });
  }

  writeDb(db);
  res.json({ success: true, message: `Question "${id}" successfully deleted.` });
});

// ---------------------------------------------------------------------------
// 6. DELETE /api/flashcards/:id
// Deletes a specific flashcard
// ---------------------------------------------------------------------------
app.delete('/api/flashcards/:id', (req, res) => {
  const { id } = req.params;
  const db = readDb();
  const initialLen = (db.flashcards || []).length;
  db.flashcards = (db.flashcards || []).filter(fc => fc.id !== id);

  if (db.flashcards.length === initialLen) {
    return res.status(404).json({ success: false, message: `Flashcard with id "${id}" not found.` });
  }

  writeDb(db);
  res.json({ success: true, message: `Flashcard "${id}" successfully deleted.` });
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`[OL.LK Science Server] Backend running at http://localhost:${PORT}`);
  console.log(`[OL.LK Science Server] API endpoints available at http://localhost:${PORT}/api/`);
});

