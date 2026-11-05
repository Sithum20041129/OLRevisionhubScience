import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/useLanguage';
import {
  X,
  UploadCloud,
  FileText,
  CheckCircle2,
  Cpu,
  Sparkles,
  AlertCircle,
  ArrowRight,
  ExternalLink,
  Trash2,
  RefreshCw
} from 'lucide-react';
import { getUnitById } from '../data/unitsData';

// Sample verified JSON payload from Gemini Gem for easy one-click testing
const SAMPLE_GEMINI_PAYLOAD = {
  paperInfo: {
    title: "G.C.E. O/L 2023 Science Examination (Part I & II)",
    year: 2023,
    medium: "Bilingual (English & Sinhala)",
    subject: "Science"
  },
  questions: [
    {
      id: "q-g10-u1-2023-sample1",
      unitId: "g10-u1",
      subtopicId: "1.2",
      type: "mcq",
      paperSource: "G.C.E. O/L 2023 (Part I Q05)",
      year: 2023,
      difficulty: "Medium",
      textEn: "Which reagent gives a brick-red precipitate when boiled with a reducing sugar solution like glucose?",
      textSi: "ග්ලූකෝස් වැනි ඔක්සිහාරක සීනි ද්‍රාවණයක් සමඟ රත් කළ විට ගඩොල් රතු පැහැති අවක්ෂේපයක් ලබා දෙන ප්‍රතිකාරකය කුමක්ද?",
      diagramUrl: "",
      optionsEn: ["Iodine solution", "Benedict's solution", "Biuret reagent", "Sudan III"],
      optionsSi: ["අයඩින් ද්‍රාවණය", "බෙනඩික්ට් ද්‍රාවණය", "බයියුරෙට් ප්‍රතිකාරකය", "සුඩාන් III"],
      correctIndex: 1,
      explanationEn: "Benedict's reagent reacts with reducing sugars upon heating to form insoluble copper(I) oxide brick-red precipitate.",
      explanationSi: "ග්ලූකෝස් වැනි ඔක්සිහාරක සීනි බෙනඩික්ට් ද්‍රාවණය සමඟ රත් කළ විට ගඩොල් රතු පැහැ අවක්ෂේපයක් සාදයි.",
      competency: "1.2 Tests for organic biomolecules using chemical reagents.",
      structuredParts: []
    },
    {
      id: "q-g11-u9-2023-sample1",
      unitId: "g11-u9",
      subtopicId: "9.4",
      type: "mcq",
      paperSource: "G.C.E. O/L 2023 (Part I Q18)",
      year: 2023,
      difficulty: "Medium",
      textEn: "Why are small expansion gaps provided between consecutive rail tracks on railway tracks?",
      textSi: "දුම්රිය පීලි අතර කුඩා හිඩැසක් තැබීමට හේතුව පහත සඳහන් ඒවායින් කුමක්ද?",
      diagramUrl: "",
      optionsEn: [
        "To allow for thermal expansion during hot daytime weather without buckling",
        "To reduce friction between the train wheels and rails",
        "To allow rain water to drain away quickly",
        "To absorb sound vibrations produced during train motion"
      ],
      optionsSi: [
        "උණුසුම් කාලගුණයේදී සිදුවන තාප ප්‍රසාරණය නිසා පීලි නැමීම වැළැක්වීමට",
        "දුම්රිය රෝද සහ පීලි අතර ඝර්ෂණය අවම කිරීමට",
        "වැසි ජලය ඉක්මනින් බැසයාමට ඉඩ සැලසීමට",
        "දුම්රිය ධාවනයෙන් ඇතිවන ශබ්ද කම්පන අවම කිරීමට"
      ],
      correctIndex: 0,
      explanationEn: "Metals expand when heated. Without expansion gaps, the thermal expansion would cause tracks to buckle and derail trains.",
      explanationSi: "ඝන ලෝහ රත් වූ විට ප්‍රසාරණය වේ. හිඩැසක් නොතැබුවහොත් පීලි ඇදවී අනතුරු සිදුවිය හැක.",
      competency: "9.4 Explains practical applications and consequences of thermal expansion of solids.",
      structuredParts: []
    },
    {
      id: "q-g11-u11-2023-sample1",
      unitId: "g11-u11",
      subtopicId: "11.4",
      type: "mcq",
      paperSource: "G.C.E. O/L 2023 (Part I Q24)",
      year: 2023,
      difficulty: "Hard",
      textEn: "How many p-n junction diodes are connected together to construct a full-wave bridge rectifier?",
      textSi: "පූර්ණ තරංග පාලම් සෘජුකාරකයක් නිර්මාණය කිරීම සඳහා p-n සන්ධි ඩයෝඩ කීයක් එකිනෙක සම්බන්ධ කළ යුතුද?",
      diagramUrl: "",
      optionsEn: ["1", "2", "4", "6"],
      optionsSi: ["1", "2", "4", "6"],
      correctIndex: 2,
      explanationEn: "A full-wave bridge rectifier requires 4 diodes configured in a bridge to rectify both alternating current half-cycles.",
      explanationSi: "පූර්ණ තරංග පාලම් සෘජුකාරකයක් සඳහා ඩයෝඩ 4 ක් යොදාගනී.",
      competency: "11.4 Analyzes AC rectification circuits using semiconductor diodes.",
      structuredParts: []
    }
  ],
  flashcards: [
    {
      id: "fc-g10-u1-2023-sample1",
      unitId: "g10-u1",
      subtopicId: "1.3",
      topicEn: "Biomolecules Classification",
      topicSi: "ජෛව අණු වර්ගීකරණය",
      frontEn: "What are the basic building blocks of proteins?",
      frontSi: "ප්‍රෝටීනවල තැනුම් ඒකකය වන්නේ කුමක්ද?",
      backEn: "Amino acids, linked together by peptide bonds.",
      backSi: "පෙප්ටයිඩ බන්ධන මඟින් එකිනෙක බැඳුණු ඇමයිනෝ අම්ල වේ.",
      tag: "Biomolecules"
    },
    {
      id: "fc-g11-u9-2023-sample1",
      unitId: "g11-u9",
      subtopicId: "9.3",
      topicEn: "Specific Latent Heat",
      topicSi: "විශිෂ්ට ගුප්ත තාපය",
      frontEn: "What is the SI unit of specific latent heat?",
      frontSi: "විශිෂ්ට ගුප්ත තාපයේ ජාත්‍යන්තර (SI) ඒකකය කුමක්ද?",
      backEn: "J kg⁻¹ (Joules per kilogram).",
      backSi: "J kg⁻¹ (කිලෝග්‍රෑමයට ජූල්).",
      tag: "Thermal Physics"
    }
  ]
};

export default function AIPaperExtractorModal({ isOpen, onClose, onImportSuccess }) {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [activeTab, setActiveTab] = useState('paste'); // 'paste' | 'file'
  const [jsonText, setJsonText] = useState('');
  const [parseError, setParseError] = useState(null);
  const [parsedData, setParsedData] = useState(null);
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishResult, setPublishResult] = useState(null);

  if (!isOpen) return null;

  const isSinhala = language === 'si';

  // Live validator for JSON string
  const handleJsonChange = (text) => {
    setJsonText(text);
    setPublishResult(null);
    if (!text.trim()) {
      setParsedData(null);
      setParseError(null);
      return;
    }

    try {
      const parsed = JSON.parse(text);
      if (typeof parsed !== 'object' || parsed === null) {
        throw new Error('JSON root must be an object.');
      }
      const questions = Array.isArray(parsed.questions) ? parsed.questions : [];
      const flashcards = Array.isArray(parsed.flashcards) ? parsed.flashcards : [];

      if (questions.length === 0 && flashcards.length === 0) {
        throw new Error('Payload must contain at least one question or flashcard.');
      }

      // Group by unitId
      const unitsMap = {};
      questions.forEach((q) => {
        const uId = q.unitId || 'unknown';
        if (!unitsMap[uId]) unitsMap[uId] = { questions: 0, flashcards: 0 };
        unitsMap[uId].questions += 1;
      });
      flashcards.forEach((fc) => {
        const uId = fc.unitId || 'unknown';
        if (!unitsMap[uId]) unitsMap[uId] = { questions: 0, flashcards: 0 };
        unitsMap[uId].flashcards += 1;
      });

      setParsedData({
        raw: parsed,
        paperInfo: parsed.paperInfo || {},
        questionsCount: questions.length,
        flashcardsCount: flashcards.length,
        unitsBreakdown: unitsMap
      });
      setParseError(null);
    } catch (err) {
      setParseError(err.message);
      setParsedData(null);
    }
  };

  // Handle file drop / upload
  const handleFileUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content === 'string') {
        handleJsonChange(content);
        setActiveTab('paste');
      }
    };
    reader.readAsText(file);
  };

  // Load sample JSON into textarea
  const handleLoadSample = () => {
    const formatted = JSON.stringify(SAMPLE_GEMINI_PAYLOAD, null, 2);
    handleJsonChange(formatted);
  };

  // Publish to backend
  const handlePublish = async () => {
    if (!parsedData || !parsedData.raw) return;
    setIsPublishing(true);
    setPublishResult(null);

    try {
      const res = await fetch('/api/import', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(parsedData.raw)
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to import questions to backend.');
      }

      setPublishResult(data);
      if (onImportSuccess) {
        onImportSuccess(data);
      }
    } catch (err) {
      console.error('Import error:', err);
      alert(isSinhala ? `ඇතුළත් කිරීම අසාර්ථකයි: ${err.message}` : `Import failed: ${err.message}`);
    } finally {
      setIsPublishing(false);
    }
  };

  const handleNavigateToUnit = (unitId) => {
    onClose();
    navigate(`/unit/${unitId}`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-slate-50 via-indigo-50/50 to-cyan-50/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#602d92] via-indigo-600 to-cyan-500 text-white flex items-center justify-center shadow-md">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-100 text-[#602d92]">
                  Gemini AI Ingestion Studio
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {isSinhala ? 'ප්‍රශ්න පත්‍ර ස්වයංක්‍රීයව එක් කිරීම' : 'Auto-Route Past Paper Questions to Units'}
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                {isSinhala ? 'Gemini Gem ප්‍රශ්න පත්‍ර ඇතුළත් කිරීමේ මැදිරිය' : 'Past Paper Question & Flashcard Ingestion'}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Subheader & Tabs */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('paste')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'paste'
                  ? 'bg-[#602d92] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{isSinhala ? 'Gemini JSON අලවන්න (Paste)' : 'Paste Gemini JSON'}</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('file');
                if (fileInputRef.current) fileInputRef.current.click();
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'file'
                  ? 'bg-[#602d92] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200'
              }`}
            >
              <UploadCloud className="w-3.5 h-3.5" />
              <span>{isSinhala ? '.json ගොනුවක් තෝරන්න' : 'Upload .json File'}</span>
            </button>
          </div>

          <button
            onClick={handleLoadSample}
            className="text-xs font-semibold text-[#602d92] hover:text-purple-800 flex items-center gap-1 hover:underline cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>{isSinhala ? 'නිරූපණ Sample JSON පූරණය කරන්න' : 'Load Sample O/L 2023 JSON'}</span>
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept=".json,application/json"
            className="hidden"
          />
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Instructions banner */}
          <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200/80 text-xs text-slate-700 leading-relaxed flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#602d92] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-slate-900">
                {isSinhala ? 'Gemini Gem මඟින් ලබාගත් JSON ප්‍රතිදානය මෙහි අලවන්න:' : 'How to import past papers from Gemini Gem:'}
              </p>
              <p className="mt-1 text-slate-600">
                {isSinhala
                  ? 'ඔබේ Gemini Gem එකට පසුගිය ප්‍රශ්න පත්‍රය ලබා දී ලබාගන්නා ලද ප්‍රශ්න සහ Flashcards JSON පිටපත මෙහි අලවන්න. පද්ධතිය ස්වයංක්‍රීයව අදාළ විෂය ඒකක 25 වෙත ප්‍රශ්න වෙන්කර ගබඩා කරනු ඇත.'
                  : 'Feed any G.C.E. O/L past paper to your Gemini Gem. Paste the extracted bilingual JSON here. Our backend validates each unitId and automatically routes questions and flashcards directly into the matching unit pages.'}
              </p>
            </div>
          </div>

          {/* Main JSON Editor Textarea */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <label htmlFor="gemini-json-input">
                {isSinhala ? 'Gemini JSON දත්ත (Payload):' : 'Gemini JSON Payload:'}
              </label>
              {jsonText && (
                <button
                  onClick={() => handleJsonChange('')}
                  className="text-red-500 hover:text-red-700 text-[11px] flex items-center gap-1 cursor-pointer font-medium"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>{isSinhala ? 'ඉවත් කරන්න' : 'Clear'}</span>
                </button>
              )}
            </div>

            <textarea
              id="gemini-json-input"
              value={jsonText}
              onChange={(e) => handleJsonChange(e.target.value)}
              placeholder={`{\n  "paperInfo": { "title": "G.C.E. O/L 2023 Science", "year": 2023 },\n  "questions": [\n    {\n      "id": "q-g10-u1-2023-01",\n      "unitId": "g10-u1",\n      "subtopicId": "1.2",\n      "type": "mcq",\n      ...\n    }\n  ],\n  "flashcards": [...]\n}`}
              rows={9}
              className="w-full font-mono text-xs sm:text-sm p-4 bg-slate-900 text-emerald-400 rounded-2xl border border-slate-700 focus:outline-hidden focus:ring-2 focus:ring-[#602d92] leading-relaxed shadow-inner"
              spellCheck={false}
            />

            {/* Parse Error Alert */}
            {parseError && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                <span><strong>JSON Syntax Error:</strong> {parseError}</span>
              </div>
            )}
          </div>

          {/* Parsed Live Preview & Units Breakdown */}
          {parsedData && (
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 animate-in fade-in slide-in-from-top-2">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-bold text-slate-900">
                    {isSinhala ? 'වලංගු දත්ත හඳුනාගන්නා ලදී (Valid JSON Detected)' : 'Valid Payload Ready for Ingestion'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold">
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-100 text-indigo-700 border border-indigo-200">
                    {parsedData.questionsCount} {isSinhala ? 'ප්‍රශ්න' : 'Questions'}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-purple-100 text-purple-700 border border-purple-200">
                    {parsedData.flashcardsCount} Flashcards
                  </span>
                </div>
              </div>

              {/* Units Routing Target Preview */}
              <div>
                <p className="text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                  {isSinhala ? 'ප්‍රශ්න බැරවන පාඩම් ඒකක (Target Units Auto-Routing):' : 'Target Units Auto-Routing:'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {Object.entries(parsedData.unitsBreakdown).map(([uId, counts]) => {
                    const unitMeta = getUnitById(uId);
                    return (
                      <div
                        key={uId}
                        className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between gap-2"
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-purple-50 text-[#602d92] border border-purple-200">
                              {uId}
                            </span>
                            <span className="text-xs font-bold text-slate-800 truncate">
                              {unitMeta ? (isSinhala ? unitMeta.titleSi : unitMeta.titleEn) : 'Unknown Unit'}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            Grade {unitMeta?.grade || '?'} • Unit {unitMeta?.unitNumber || '?'}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-xs font-bold text-[#602d92] block">
                            +{counts.questions} Q
                          </span>
                          <span className="text-[10px] text-purple-600 block">
                            +{counts.flashcards} FC
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Publish Action Button */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={handlePublish}
                  disabled={isPublishing}
                  className="px-6 py-3 rounded-xl bg-[#602d92] hover:bg-purple-800 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isPublishing ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>{isSinhala ? 'දත්ත ගබඩාවට ඇතුළත් කරමින්...' : 'Publishing to Database...'}</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>{isSinhala ? 'අදාළ පාඩම් වෙත ඇතුළත් කරන්න (Publish to Units)' : 'Publish to Relevant Units'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Success Toast / Notification */}
          {publishResult && (
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 space-y-3 animate-in fade-in zoom-in-95">
              <div className="flex items-center gap-2 text-sm font-bold text-emerald-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>{publishResult.message}</span>
              </div>
              <p className="text-xs text-emerald-700">
                {isSinhala
                  ? 'සියලුම ප්‍රශ්න සහ Flashcards නිරවද්‍ය ලෙස ඒකක පිටු සහ Quizzes වෙත සම්බන්ධ කර ඇත. පහත පාඩමක් තෝරා ක්ෂණිකව පරීක්ෂා කරන්න:'
                  : 'All questions and flashcards have been persistently stored and assigned. Click any unit below to view it live:'}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-1">
                {Object.keys(publishResult.affectedUnits || {}).map((uId) => {
                  const u = getUnitById(uId);
                  return (
                    <button
                      key={uId}
                      onClick={() => handleNavigateToUnit(uId)}
                      className="px-3 py-1.5 rounded-xl bg-white hover:bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold transition flex items-center gap-1.5 shadow-2xs cursor-pointer"
                    >
                      <span>{uId}: {u ? (isSinhala ? u.titleSi : u.titleEn) : uId}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
          <span>Backend: Node.js Express • Persistent JSON DB</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold transition cursor-pointer"
          >
            {isSinhala ? 'වසන්න (Close)' : 'Close Studio'}
          </button>
        </div>

      </div>
    </div>
  );
}
