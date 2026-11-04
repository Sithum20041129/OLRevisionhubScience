import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/useLanguage';
import { X, HelpCircle, CheckCircle2, AlertCircle, Clock, Sparkles, BookOpen, RotateCcw, ArrowRight, ExternalLink } from 'lucide-react';

export default function QuizPlayerModal({ unit, isOpen, onClose, onOpenUpload }) {
  const { language, t } = useLanguage();
  const [showDemo, setShowDemo] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(45);

  useEffect(() => {
    let interval = null;
    if (showDemo && !isSubmitted && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [showDemo, isSubmitted, timerSeconds]);

  if (!isOpen || !unit) return null;

  const isSinhala = language === 'si';
  const unitTitle = isSinhala ? unit.titleSi : unit.titleEn;
  const demoQ = unit.demoQuestion;

  const handleSelectOption = (idx) => {
    if (isSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    setTimerSeconds(45);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-indigo-50/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-100 text-indigo-700">
                  Grade {unit.grade} • Unit {unit.unitNumber}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {t.quizModal.title}
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

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* If not in demo mode or unit has 0 questions loaded */}
          {!showDemo ? (
            <div className="text-center py-8 px-4 max-w-lg mx-auto">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-4 shadow-xs">
                <Sparkles className="w-8 h-8 animate-pulse" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {t.emptyStateQuizTitle}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {t.emptyStateQuizDesc}
              </p>

              {/* Target Paper Sources info */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left mb-6">
                <p className="text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                  {isSinhala ? 'මෙම පාඩමට අදාළ ඉලක්කගත ප්‍රශ්න පත්‍ර:' : 'Target Exam Papers for this Unit:'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {unit.targetPapers.map((paper, idx) => (
                    <span key={idx} className="text-xs bg-white border border-slate-200 text-slate-700 px-2.5 py-1 rounded-lg font-medium">
                      📄 {paper}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => setShowDemo(true)}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition shadow-sm hover:shadow-indigo-500/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{t.tryInteractiveDemo}</span>
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOpenUpload();
                  }}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{isSinhala ? 'ප්‍රශ්න පත්‍රයක් උඩුගත කරන්න' : 'Upload Past Paper'}</span>
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Demo Runner */
            <div className="space-y-6">
              {/* Question Metadata & Timer Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-md">
                    {t.quizModal.questionLabel} 1 {t.quizModal.of} 1 (Demo)
                  </span>
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded text-[11px] font-medium">
                    {demoQ?.paperSource || "G.C.E. O/L Past Paper"}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>00:{timerSeconds.toString().padStart(2, '0')}</span>
                </div>
              </div>

              {/* Question Text */}
              <div className="bg-slate-50/80 p-4 sm:p-5 rounded-2xl border border-slate-200">
                <p className="text-base sm:text-lg font-semibold text-slate-900 leading-snug">
                  {isSinhala ? demoQ?.textSi : demoQ?.textEn}
                </p>
                <p className="text-xs text-slate-500 italic mt-1.5">
                  {isSinhala ? demoQ?.textEn : demoQ?.textSi}
                </p>
              </div>

              {/* MCQ Options */}
              <div className="space-y-2.5">
                {(isSinhala ? demoQ?.optionsSi : demoQ?.optionsEn)?.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = demoQ?.correctIndex === idx;
                  let optionStyle = "border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/30 text-slate-800";

                  if (isSelected && !isSubmitted) {
                    optionStyle = "border-indigo-600 bg-indigo-50/60 ring-2 ring-indigo-500/20 text-indigo-950 font-semibold";
                  } else if (isSubmitted) {
                    if (isCorrect) {
                      optionStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/20 font-semibold";
                    } else if (isSelected && !isCorrect) {
                      optionStyle = "border-rose-400 bg-rose-50 text-rose-950 ring-2 ring-rose-400/20";
                    } else {
                      optionStyle = "border-slate-200 bg-slate-50/60 text-slate-400 opacity-70";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isSubmitted}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between text-sm sm:text-base cursor-pointer ${optionStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                          isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{opt}</span>
                      </div>
                      {isSubmitted && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      {isSubmitted && isSelected && !isCorrect && (
                        <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Box (Revealed after submission) */}
              {isSubmitted && (
                <div className="bg-indigo-50/80 border border-indigo-200 rounded-2xl p-4 sm:p-5 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm">
                    <BookOpen className="w-4 h-4 text-indigo-600" />
                    <span>{t.quizModal.explanation}</span>
                  </div>
                  <p className="text-sm text-slate-800 leading-relaxed">
                    {isSinhala ? demoQ?.explanationSi : demoQ?.explanationEn}
                  </p>
                  {demoQ?.competency && (
                    <div className="pt-2 mt-2 border-t border-indigo-200/70 text-xs text-indigo-800 font-medium">
                      🎯 <span className="font-semibold">{t.quizModal.syllabusCompetency}:</span> {demoQ.competency}
                    </div>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <button
                  onClick={() => setShowDemo(false)}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  {t.hideDemo}
                </button>

                <div className="flex items-center gap-3">
                  {isSubmitted ? (
                    <button
                      onClick={handleReset}
                      className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 text-sm font-semibold flex items-center gap-2 transition cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>{t.quizModal.retry}</span>
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={selectedOption === null}
                      className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition flex items-center gap-2 ${
                        selectedOption !== null
                          ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm cursor-pointer'
                          : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      <span>{t.quizModal.submitAnswer}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
