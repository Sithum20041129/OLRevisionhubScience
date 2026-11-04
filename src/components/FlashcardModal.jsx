import React, { useState } from 'react';
import { useLanguage } from '../context/useLanguage';
import { X, Layers, Sparkles, RotateCw, RefreshCcw, ThumbsUp, ThumbsDown, Lightbulb } from 'lucide-react';

export default function FlashcardModal({ unit, isOpen, onClose }) {
  const { language, t } = useLanguage();
  const [showDemo, setShowDemo] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteryState, setMasteryState] = useState(null); // 'easy' | 'hard' | null

  if (!isOpen || !unit) return null;

  const isSinhala = language === 'si';
  const unitTitle = isSinhala ? unit.titleSi : unit.titleEn;
  const demoFC = unit.demoFlashcard;

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleRate = (status) => {
    setMasteryState(status);
  };

  const handleReset = () => {
    setIsFlipped(false);
    setMasteryState(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-purple-50/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-xs">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-100 text-purple-700">
                  {isSinhala ? `${unit.grade} ශ්‍රේණිය` : `Grade ${unit.grade}`} • {isSinhala ? `පාඩම ${unit.unitNumber}` : `Unit ${unit.unitNumber}`}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {t.flashcardModal.title}
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

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          {!showDemo ? (
            <div className="text-center py-8 px-4 max-w-lg mx-auto">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center mb-4 shadow-xs">
                <Sparkles className="w-8 h-8 animate-pulse" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {t.emptyStateFlashcardTitle}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {t.emptyStateFlashcardDesc}
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left mb-6 text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-800">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  <span>{isSinhala ? 'AI මඟින් ජනනය වන ක්‍රමවේදය:' : 'AI Generation Methodology:'}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 pl-1 text-slate-600">
                  <li>{isSinhala ? 'ජාතික විෂය නිර්දේශයේ සියලුම ප්‍රධාන නිපුණතා ආවරණය කිරීම' : 'Decomposes core syllabus competencies into bite-sized recall prompts'}</li>
                  <li>{isSinhala ? 'ද්විභාෂා සංකල්ප සහ විද්‍යාත්මක නියම සමගාමීව ඉදිරිපත් කිරීම' : 'Aligned in both English & Sinhala medium side-by-side'}</li>
                  <li>{isSinhala ? 'Leitner Spaced Repetition ක්‍රමය මඟින් දිගුකාලීන මතකය තහවුරු කිරීම' : 'Built for Spaced Repetition to guarantee O/L exam readiness'}</li>
                </ul>
              </div>

              <button
                onClick={() => setShowDemo(true)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm transition shadow-sm hover:shadow-purple-500/25 flex items-center justify-center gap-2 mx-auto cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.tryInteractiveDemo}</span>
              </button>
            </div>
          ) : (
            /* Interactive Flashcard 3D Viewer */
            <div className="space-y-6">
              
              {/* Card Meta Indicator */}
              <div className="flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md">
                    Card 1 of 1 (Demo)
                  </span>
                  <span className="bg-purple-50 text-purple-700 border border-purple-200 px-2 py-0.5 rounded text-[11px] font-medium">
                    {demoFC?.tag || "Science Concept"}
                  </span>
                </div>
                <span className="text-slate-400 italic hidden sm:inline">
                  {t.flashcardModal.flipInstruction}
                </span>
              </div>

              {/* 3D Flip Card Container */}
              <div
                onClick={handleFlip}
                className="w-full h-72 sm:h-80 cursor-pointer perspective-1000 select-none group"
              >
                <div
                  className={`w-full h-full relative transition-transform duration-500 transform-style-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  
                  {/* FRONT OF CARD */}
                  <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-white to-purple-50/40 rounded-3xl border-2 border-purple-200 shadow-md p-6 sm:p-8 flex flex-col justify-between hover:border-purple-400 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-2.5 py-1 rounded-md">
                        {t.flashcardModal.frontLabel}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-purple-600 font-medium">
                        <RotateCw className="w-3.5 h-3.5" />
                        <span>Flip</span>
                      </div>
                    </div>

                    <div className="text-center my-auto px-2">
                      <p className="text-xs font-semibold text-purple-600 uppercase tracking-widest mb-2">
                        {isSinhala ? demoFC?.topicSi : demoFC?.topicEn}
                      </p>
                      <h3 className="text-lg sm:text-2xl font-bold text-slate-900 leading-snug">
                        {isSinhala ? demoFC?.frontSi : demoFC?.frontEn}
                      </h3>
                      <p className="text-xs text-slate-500 mt-2 italic">
                        {isSinhala ? demoFC?.frontEn : demoFC?.frontSi}
                      </p>
                    </div>

                    <p className="text-center text-xs text-slate-400">
                      Tap anywhere to reveal answer 🔄
                    </p>
                  </div>

                  {/* BACK OF CARD */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/80 border border-cyan-800 px-2.5 py-1 rounded-md">
                        {t.flashcardModal.backLabel}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-cyan-300 font-medium">
                        <RotateCw className="w-3.5 h-3.5" />
                        <span>Flip back</span>
                      </div>
                    </div>

                    <div className="text-center my-auto px-2">
                      <p className="text-base sm:text-xl font-semibold text-white leading-relaxed">
                        {isSinhala ? demoFC?.backSi : demoFC?.backEn}
                      </p>
                      <p className="text-xs text-slate-300 mt-3 pt-3 border-t border-slate-700 italic">
                        {isSinhala ? demoFC?.backEn : demoFC?.backSi}
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-xs text-cyan-200">
                      <span>✓ Key O/L Examination Takeaway</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Spaced Repetition Mastery Rating Buttons */}
              <div className="pt-2">
                <p className="text-center text-xs text-slate-500 mb-3">
                  {isSinhala ? 'ඔබට මෙම සංකල්පය කෙතරම් මතකද?' : 'How well did you know this concept?'}
                </p>
                <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
                  <button
                    onClick={() => handleRate('hard')}
                    className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold border flex items-center justify-center gap-2 transition cursor-pointer ${
                      masteryState === 'hard'
                        ? 'bg-rose-50 border-rose-300 text-rose-700 ring-2 ring-rose-200'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <ThumbsDown className="w-4 h-4 text-rose-500" />
                    <span>{t.flashcardModal.needsReview}</span>
                  </button>

                  <button
                    onClick={() => handleRate('easy')}
                    className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold border flex items-center justify-center gap-2 transition cursor-pointer ${
                      masteryState === 'easy'
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-700 ring-2 ring-emerald-200'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <ThumbsUp className="w-4 h-4 text-emerald-500" />
                    <span>{t.flashcardModal.knewIt}</span>
                  </button>
                </div>
              </div>

              {/* Bottom controls */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <button
                  onClick={() => setShowDemo(false)}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  {t.hideDemo}
                </button>

                <button
                  onClick={handleReset}
                  className="px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
                >
                  <RefreshCcw className="w-3.5 h-3.5" />
                  <span>{t.flashcardModal.reset}</span>
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
