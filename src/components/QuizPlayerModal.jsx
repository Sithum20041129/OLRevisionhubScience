import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/useLanguage';
import {
  X,
  HelpCircle,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  BookOpen,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  Eye,
  EyeOff,
  Trophy,
  Filter
} from 'lucide-react';

export default function QuizPlayerModal({ unit, isOpen, onClose, onOpenUpload }) {
  const { language, t } = useLanguage();

  // Multi-question state
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { [questionIndex]: selectedOptionIdx }
  const [submittedQuestions, setSubmittedQuestions] = useState({}); // { [questionIndex]: true }
  const [revealedMarkingParts, setRevealedMarkingParts] = useState({}); // { [`${qIdx}-${partIdx}`]: true }
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [selectedTypeFilter, setSelectedTypeFilter] = useState('all'); // 'all' | 'mcq' | 'structured'
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const [prevUnitId, setPrevUnitId] = useState(null);

  // Reset state during render when unit changes (official React pattern)
  if (unit && unit.id !== prevUnitId) {
    setPrevUnitId(unit.id);
    setIsLoading(true);
    setCurrentIndex(0);
    setUserAnswers({});
    setSubmittedQuestions({});
    setRevealedMarkingParts({});
    setIsQuizCompleted(false);
    setTimerSeconds(0);
    setIsTimerActive(true);
  }

  // Fetch unit questions from backend whenever modal opens or unit changes
  useEffect(() => {
    if (!isOpen || !unit) return;

    let isMounted = true;

    const fetchQuestions = async () => {
      try {
        const res = await fetch(`/api/units/${unit.id}/content`);
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.questions && data.questions.length > 0) {
            setQuestions(data.questions);
            setIsLoading(false);
            return;
          }
        }
      } catch (err) {
        console.warn('API fetch failed, falling back to local demo question:', err);
      }

      // Fallback to unit.demoQuestion if backend has 0 questions
      if (isMounted) {
        const fallback = unit.demoQuestion ? [{
          ...unit.demoQuestion,
          id: unit.demoQuestion.id || 'demo-q',
          unitId: unit.id,
          type: 'mcq'
        }] : [];
        setQuestions(fallback);
        setIsLoading(false);
      }
    };

    fetchQuestions();

    return () => {
      isMounted = false;
      setIsTimerActive(false);
    };
  }, [isOpen, unit]);

  // Timer counter
  useEffect(() => {
    let interval = null;
    if (isOpen && isTimerActive && !isQuizCompleted) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isOpen, isTimerActive, isQuizCompleted]);

  if (!isOpen || !unit) return null;

  const isSinhala = language === 'si';
  const unitTitle = isSinhala ? unit.titleSi : unit.titleEn;

  // Filtered questions based on MCQ vs Structured
  const filteredQuestions = questions.filter((q) => {
    if (selectedTypeFilter === 'all') return true;
    return q.type === selectedTypeFilter;
  });

  const activeQuestion = filteredQuestions[currentIndex] || filteredQuestions[0];
  const totalInFilter = filteredQuestions.length;

  const selectedOption = userAnswers[currentIndex] !== undefined ? userAnswers[currentIndex] : null;
  const isCurrentSubmitted = !!submittedQuestions[currentIndex];

  const handleSelectOption = (idx) => {
    if (isCurrentSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [currentIndex]: idx }));
  };

  const handleSubmitCurrent = () => {
    if (selectedOption === null) return;
    setSubmittedQuestions((prev) => ({ ...prev, [currentIndex]: true }));
  };

  const handleToggleMarkingScheme = (partKey) => {
    setRevealedMarkingParts((prev) => ({
      ...prev,
      [partKey]: !prev[partKey]
    }));
  };

  const handleNext = () => {
    if (currentIndex < totalInFilter - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setSubmittedQuestions({});
    setRevealedMarkingParts({});
    setCurrentIndex(0);
    setIsQuizCompleted(false);
    setTimerSeconds(0);
    setIsTimerActive(true);
  };

  // Score calculation
  const calculatedScore = filteredQuestions.reduce((acc, q, idx) => {
    if (q.type === 'mcq' && submittedQuestions[idx]) {
      if (userAnswers[idx] === q.correctIndex) {
        return acc + 1;
      }
    }
    return acc;
  }, 0);

  const totalSubmittedMCQs = filteredQuestions.filter(
    (q, idx) => q.type === 'mcq' && submittedQuestions[idx]
  ).length;

  const formatTimer = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-slate-50 via-purple-50/50 to-indigo-50/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#602d92] text-white flex items-center justify-center shadow-md">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-100 text-[#602d92]">
                  Grade {unit.grade} • Unit {unit.unitNumber}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {isSinhala ? 'ඒකක ප්‍රශ්නාවලිය' : 'Interactive Unit Quiz'}
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 line-clamp-1">
                {unitTitle}
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

        {/* Question Filter & Progress Bar */}
        <div className="px-6 py-2.5 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Filter Pills */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400 font-semibold flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              <span>{isSinhala ? 'වර්ගය:' : 'Type:'}</span>
            </span>
            <button
              onClick={() => { setSelectedTypeFilter('all'); setCurrentIndex(0); }}
              className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                selectedTypeFilter === 'all'
                  ? 'bg-[#602d92] text-white shadow-2xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              All ({questions.length})
            </button>
            <button
              onClick={() => { setSelectedTypeFilter('mcq'); setCurrentIndex(0); }}
              className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                selectedTypeFilter === 'mcq'
                  ? 'bg-[#602d92] text-white shadow-2xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              MCQ ({questions.filter((q) => q.type === 'mcq').length})
            </button>
            <button
              onClick={() => { setSelectedTypeFilter('structured'); setCurrentIndex(0); }}
              className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                selectedTypeFilter === 'structured'
                  ? 'bg-[#602d92] text-white shadow-2xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Structured ({questions.filter((q) => q.type === 'structured').length})
            </button>
          </div>

          {/* Timer & Score Display */}
          <div className="flex items-center gap-3 font-semibold text-slate-700">
            <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-2.5 py-1 rounded-lg">
              <Clock className="w-3.5 h-3.5 text-purple-600" />
              <span>{formatTimer(timerSeconds)}</span>
            </div>
            {totalSubmittedMCQs > 0 && (
              <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-lg font-bold">
                <Trophy className="w-3.5 h-3.5 text-emerald-600" />
                <span>{calculatedScore} / {totalSubmittedMCQs}</span>
              </div>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="w-10 h-10 border-4 border-[#602d92] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-xs text-slate-500 font-semibold">
                {isSinhala ? 'ප්‍රශ්න පූරණය වෙමින් පවතී...' : 'Loading unit questions from database...'}
              </p>
            </div>
          ) : totalInFilter === 0 ? (
            <div className="text-center py-10 px-4 max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-4 shadow-xs">
                <Sparkles className="w-8 h-8 animate-pulse" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                {isSinhala ? 'මෙම පෙරහනට අදාළ ප්‍රශ්න හමු නොවීය' : 'No questions found for this filter'}
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                {isSinhala
                  ? 'වෙනත් ප්‍රශ්න වර්ගයක් තෝරන්න හෝ Gemini Gem හරහා නව ප්‍රශ්න පත්‍රයක් එක් කරන්න.'
                  : 'Try selecting a different filter or import questions using the AI Ingestion Studio.'}
              </p>
              <button
                onClick={() => {
                  onClose();
                  if (onOpenUpload) onOpenUpload();
                }}
                className="px-4 py-2 rounded-xl bg-[#602d92] hover:bg-purple-800 text-white text-xs font-bold transition flex items-center gap-1.5 mx-auto cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>{isSinhala ? 'AI හරහා ප්‍රශ්න පත්‍රයක් එක් කරන්න' : 'Import Past Paper with AI'}</span>
              </button>
            </div>
          ) : isQuizCompleted ? (
            /* Final Score Summary Screen */
            <div className="text-center py-8 px-4 max-w-lg mx-auto space-y-6 animate-in zoom-in-95">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-[#602d92] to-indigo-600 text-white flex items-center justify-center shadow-xl">
                <Trophy className="w-10 h-10 text-amber-300" />
              </div>

              <div>
                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-purple-100 text-[#602d92]">
                  {isSinhala ? 'ප්‍රශ්නාවලිය සම්පූර්ණයි!' : 'Quiz Completed!'}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">
                  {isSinhala ? 'ඔබගේ ප්‍රගති වාර්තාව' : 'Performance Analysis'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Grade {unit.grade} • {unitTitle}
                </p>
              </div>

              {/* Score Badges */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-center p-2">
                  <p className="text-2xl font-black text-[#602d92]">{calculatedScore}</p>
                  <p className="text-[11px] font-semibold text-slate-500">{isSinhala ? 'නිවැරදි' : 'Correct'}</p>
                </div>
                <div className="text-center p-2 border-x border-slate-200">
                  <p className="text-2xl font-black text-slate-800">{totalSubmittedMCQs}</p>
                  <p className="text-[11px] font-semibold text-slate-500">{isSinhala ? 'මුළු පිළිතුරු' : 'Answered'}</p>
                </div>
                <div className="text-center p-2">
                  <p className="text-2xl font-black text-emerald-600">
                    {totalSubmittedMCQs > 0 ? Math.round((calculatedScore / totalSubmittedMCQs) * 100) : 0}%
                  </p>
                  <p className="text-[11px] font-semibold text-slate-500">{isSinhala ? 'නිරවද්‍යතාව' : 'Accuracy'}</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={handleResetQuiz}
                  className="px-5 py-3 rounded-xl bg-[#602d92] hover:bg-purple-800 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{isSinhala ? 'නැවත පුහුණු වන්න (Retake)' : 'Retake Quiz'}</span>
                </button>
                <button
                  onClick={() => setIsQuizCompleted(false)}
                  className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>{isSinhala ? 'ප්‍රශ්න සමාලෝචනය (Review)' : 'Review Questions'}</span>
                </button>
              </div>
            </div>
          ) : (
            /* Active Question Runner */
            <div className="space-y-6">
              
              {/* Question Number Pills Navigation */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {filteredQuestions.map((q, idx) => {
                  const isCurrent = idx === currentIndex;
                  const isAnswered = submittedQuestions[idx];
                  const isCorrect = isAnswered && userAnswers[idx] === q.correctIndex;

                  let pillStyle = 'bg-slate-100 text-slate-600 hover:bg-slate-200 border-slate-200';
                  if (isCurrent) {
                    pillStyle = 'bg-[#602d92] text-white font-bold ring-2 ring-[#602d92]/40';
                  } else if (isAnswered) {
                    pillStyle = isCorrect
                      ? 'bg-emerald-100 text-emerald-800 border-emerald-300 font-semibold'
                      : 'bg-rose-100 text-rose-800 border-rose-300 font-semibold';
                  }

                  return (
                    <button
                      key={q.id || idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-7 h-7 rounded-lg text-xs flex items-center justify-center transition shrink-0 cursor-pointer border ${pillStyle}`}
                      title={`Question ${idx + 1}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              {/* Question Metadata Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-md">
                    Question {currentIndex + 1} of {totalInFilter}
                  </span>
                  <span className="bg-purple-50 text-[#602d92] border border-purple-200 px-2 py-0.5 rounded text-[11px] font-bold">
                    {activeQuestion?.paperSource || "G.C.E. O/L Examination"}
                  </span>
                  {activeQuestion?.subtopicId && (
                    <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[11px]">
                      Subtopic {activeQuestion.subtopicId}
                    </span>
                  )}
                </div>

                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  {activeQuestion?.type?.toUpperCase()}
                </span>
              </div>

              {/* Question Prompt */}
              <div className="bg-slate-50/80 p-4 sm:p-5 rounded-2xl border border-slate-200 space-y-1.5">
                <p className="text-base sm:text-lg font-semibold text-slate-900 leading-snug">
                  {isSinhala ? activeQuestion?.textSi : activeQuestion?.textEn}
                </p>
                <p className="text-xs text-slate-500 italic">
                  {isSinhala ? activeQuestion?.textEn : activeQuestion?.textSi}
                </p>
                {activeQuestion?.diagramUrl && (
                  <div className="mt-3 pt-2 border-t border-slate-200">
                    <img
                      src={activeQuestion.diagramUrl}
                      alt="Question diagram"
                      className="max-h-56 mx-auto rounded-xl object-contain"
                    />
                  </div>
                )}
              </div>

              {/* MCQ Mode Options */}
              {activeQuestion?.type === 'mcq' && (
                <div className="space-y-2.5">
                  {(isSinhala ? activeQuestion?.optionsSi : activeQuestion?.optionsEn)?.map((opt, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrect = activeQuestion?.correctIndex === idx;
                    let optionStyle = 'border-slate-200 bg-white hover:border-purple-300 hover:bg-purple-50/30 text-slate-800';

                    if (isSelected && !isCurrentSubmitted) {
                      optionStyle = 'border-[#602d92] bg-purple-50/60 ring-2 ring-[#602d92]/20 text-[#602d92] font-semibold';
                    } else if (isCurrentSubmitted) {
                      if (isCorrect) {
                        optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/20 font-semibold';
                      } else if (isSelected && !isCorrect) {
                        optionStyle = 'border-rose-400 bg-rose-50 text-rose-950 ring-2 ring-rose-400/20';
                      } else {
                        optionStyle = 'border-slate-200 bg-slate-50/60 text-slate-400 opacity-70';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        disabled={isCurrentSubmitted}
                        className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between text-sm sm:text-base cursor-pointer ${optionStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                              isSelected ? 'bg-[#602d92] text-white' : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span>{opt}</span>
                        </div>
                        {isCurrentSubmitted && isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        )}
                        {isCurrentSubmitted && isSelected && !isCorrect && (
                          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Structured Question Parts */}
              {activeQuestion?.type === 'structured' && (
                <div className="space-y-4">
                  {(activeQuestion?.structuredParts || []).map((part, pIdx) => {
                    const partKey = `${currentIndex}-${pIdx}`;
                    const isRevealed = !!revealedMarkingParts[partKey];

                    return (
                      <div key={pIdx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="font-extrabold text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-800">
                              {part.partLabel || `(${pIdx + 1})`}
                            </span>
                            <span className="text-sm font-semibold text-slate-900">
                              {isSinhala ? part.questionSi : part.questionEn}
                            </span>
                          </div>
                          {part.marks && (
                            <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full shrink-0">
                              {part.marks} {isSinhala ? 'ලකුණු' : 'Marks'}
                            </span>
                          )}
                        </div>

                        {/* Toggle Marking Scheme */}
                        <div className="pt-1">
                          <button
                            onClick={() => handleToggleMarkingScheme(partKey)}
                            className="text-xs font-bold text-[#602d92] hover:text-purple-800 flex items-center gap-1.5 transition cursor-pointer"
                          >
                            {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                            <span>
                              {isRevealed
                                ? (isSinhala ? 'ලකුණු දීමේ පිළිතුර සඟවන්න' : 'Hide Official Marking Scheme Answer')
                                : (isSinhala ? 'නිල ලකුණු දීමේ පිළිතුර බලන්න' : 'Reveal Official Marking Scheme Answer')}
                            </span>
                          </button>

                          {isRevealed && (
                            <div className="mt-2.5 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 animate-in fade-in duration-200">
                              <p className="font-bold text-emerald-900 mb-1 flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                <span>{isSinhala ? 'නිල පිළිතුරු නිර්ණායකය:' : 'Official Model Answer & Marking Criteria:'}</span>
                              </p>
                              <p className="leading-relaxed whitespace-pre-line">
                                {isSinhala ? part.modelAnswerSi : part.modelAnswerEn}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Explanation Box (for MCQ after submission) */}
              {isCurrentSubmitted && activeQuestion?.type === 'mcq' && (
                <div className="bg-purple-50/80 border border-purple-200 rounded-2xl p-4 sm:p-5 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="flex items-center gap-2 text-[#602d92] font-bold text-sm">
                    <BookOpen className="w-4 h-4 text-[#602d92]" />
                    <span>{t.quizModal.explanation}</span>
                  </div>
                  <p className="text-sm text-slate-800 leading-relaxed">
                    {isSinhala ? activeQuestion?.explanationSi : activeQuestion?.explanationEn}
                  </p>
                  {activeQuestion?.competency && (
                    <div className="pt-2 mt-2 border-t border-purple-200/70 text-xs text-purple-900 font-medium">
                      🎯 <span className="font-semibold">{t.quizModal.syllabusCompetency}:</span> {activeQuestion.competency}
                    </div>
                  )}
                </div>
              )}

              {/* Navigation and Submission Action Area */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>{isSinhala ? 'පෙර ප්‍රශ්නය' : 'Previous'}</span>
                </button>

                <div className="flex items-center gap-2">
                  {activeQuestion?.type === 'mcq' && !isCurrentSubmitted && (
                    <button
                      onClick={handleSubmitCurrent}
                      disabled={selectedOption === null}
                      className={`px-4 py-2 rounded-xl font-bold text-xs transition cursor-pointer ${
                        selectedOption !== null
                          ? 'bg-[#602d92] hover:bg-purple-800 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      {t.quizModal.submitAnswer}
                    </button>
                  )}

                  <button
                    onClick={handleNext}
                    className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>{currentIndex === totalInFilter - 1 ? (isSinhala ? 'අවසන් කරන්න' : 'Finish Quiz') : (isSinhala ? 'ඊළඟ ප්‍රශ්නය' : 'Next Question')}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>{unit.id.toUpperCase()} • {unit.totalQuestions || questions.length} questions in question bank</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold transition cursor-pointer"
          >
            {isSinhala ? 'වසන්න (Close)' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
}
