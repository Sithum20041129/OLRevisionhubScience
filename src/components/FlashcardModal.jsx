import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/useLanguage';
import {
  X,
  Layers,
  Sparkles,
  RotateCw,
  RefreshCcw,
  ThumbsUp,
  ThumbsDown,
  ChevronLeft,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

export default function FlashcardModal({ unit, isOpen, onClose }) {
  const { language, t } = useLanguage();

  const [flashcards, setFlashcards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteryRecord, setMasteryRecord] = useState({}); // { [idx]: 'easy' | 'hard' }
  const [prevUnitId, setPrevUnitId] = useState(null);

  // Reset state during render when unit changes (official React pattern)
  if (unit && unit.id !== prevUnitId) {
    setPrevUnitId(unit.id);
    setIsLoading(true);
    setCurrentIndex(0);
    setIsFlipped(false);
    setMasteryRecord({});
  }

  // Fetch flashcards for the unit from backend
  useEffect(() => {
    if (!isOpen || !unit) return;

    let isMounted = true;

    const fetchFlashcards = async () => {
      try {
        const res = await fetch(`/api/units/${unit.id}/content`);
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.flashcards && data.flashcards.length > 0) {
            setFlashcards(data.flashcards);
            setIsLoading(false);
            return;
          }
        }
      } catch (err) {
        console.warn('API fetch flashcards failed, using local demo flashcard:', err);
      }

      // Fallback to unit.demoFlashcard
      if (isMounted) {
        const fallback = unit.demoFlashcard ? [{
          ...unit.demoFlashcard,
          id: unit.demoFlashcard.id || 'demo-fc',
          unitId: unit.id
        }] : [];
        setFlashcards(fallback);
        setIsLoading(false);
      }
    };

    fetchFlashcards();

    return () => {
      isMounted = false;
    };
  }, [isOpen, unit]);

  if (!isOpen || !unit) return null;

  const isSinhala = language === 'si';
  const unitTitle = isSinhala ? unit.titleSi : unit.titleEn;
  const currentFC = flashcards[currentIndex] || flashcards[0];
  const totalCards = flashcards.length;

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleRate = (status) => {
    setMasteryRecord((prev) => ({
      ...prev,
      [currentIndex]: status
    }));
    // Auto advance if next card exists after a brief pause
    if (currentIndex < totalCards - 1) {
      setTimeout(() => {
        setIsFlipped(false);
        setCurrentIndex((prev) => prev + 1);
      }, 400);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalCards - 1) {
      setIsFlipped(false);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleResetCard = () => {
    setIsFlipped(false);
    setMasteryRecord((prev) => {
      const copy = { ...prev };
      delete copy[currentIndex];
      return copy;
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-purple-50/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#602d92] text-white flex items-center justify-center shadow-md">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-100 text-[#602d92]">
                  {isSinhala ? `${unit.grade} ශ්‍රේණිය` : `Grade ${unit.grade}`} • {isSinhala ? `පාඩම ${unit.unitNumber}` : `Unit ${unit.unitNumber}`}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {isSinhala ? 'Flashcards පුහුණුව' : 'Active Recall Flashcards'}
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
          {isLoading ? (
            <div className="text-center py-12">
              <div className="w-10 h-10 border-4 border-[#602d92] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-xs text-slate-500 font-semibold">
                {isSinhala ? 'Flashcards පූරණය වෙමින් පවතී...' : 'Loading flashcards from database...'}
              </p>
            </div>
          ) : totalCards === 0 ? (
            <div className="text-center py-10 px-4 max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-50 border border-purple-200 text-[#602d92] flex items-center justify-center mb-4 shadow-xs">
                <Sparkles className="w-8 h-8 animate-pulse" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                {isSinhala ? 'මෙම පාඩම සඳහා Flashcards තවමත් සූදානම් කර නැත' : 'No flashcards available yet'}
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                {isSinhala
                  ? 'Gemini Gem මඟින් සකස් කළ Flashcards ඇතුළත් කිරීමට AI Import Studio භාවිතා කරන්න.'
                  : 'Import flashcards extracted via Gemini Gem using the AI Import Studio.'}
              </p>
            </div>
          ) : (
            /* Interactive Flashcard 3D Viewer */
            <div className="space-y-6">
              
              {/* Card Meta Indicator */}
              <div className="flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md">
                    Card {currentIndex + 1} of {totalCards}
                  </span>
                  <span className="bg-purple-50 text-[#602d92] border border-purple-200 px-2 py-0.5 rounded text-[11px] font-bold">
                    {currentFC?.tag || "Science Concept"}
                  </span>
                  {currentFC?.subtopicId && (
                    <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[11px]">
                      Subtopic {currentFC.subtopicId}
                    </span>
                  )}
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
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#602d92] bg-purple-100 px-2.5 py-1 rounded-md">
                        {t.flashcardModal.frontLabel}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-[#602d92] font-semibold">
                        <RotateCw className="w-3.5 h-3.5" />
                        <span>Flip</span>
                      </div>
                    </div>

                    <div className="text-center my-auto px-2">
                      <p className="text-xs font-semibold text-[#602d92] uppercase tracking-widest mb-2">
                        {isSinhala ? currentFC?.topicSi : currentFC?.topicEn}
                      </p>
                      <h3 className="text-lg sm:text-2xl font-bold text-slate-900 leading-snug">
                        {isSinhala ? currentFC?.frontSi : currentFC?.frontEn}
                      </h3>
                      <p className="text-xs text-slate-500 mt-2 italic">
                        {isSinhala ? currentFC?.frontEn : currentFC?.frontSi}
                      </p>
                    </div>

                    <p className="text-center text-xs text-slate-400">
                      Tap anywhere to flip card 🔄
                    </p>
                  </div>

                  {/* BACK OF CARD */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-indigo-950 via-[#602d92] to-slate-950 text-white rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/80 border border-cyan-800 px-2.5 py-1 rounded-md">
                        {t.flashcardModal.backLabel}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-cyan-300 font-semibold">
                        <RotateCw className="w-3.5 h-3.5" />
                        <span>Flip back</span>
                      </div>
                    </div>

                    <div className="text-center my-auto px-2">
                      <p className="text-base sm:text-xl font-semibold text-white leading-relaxed">
                        {isSinhala ? currentFC?.backSi : currentFC?.backEn}
                      </p>
                      <p className="text-xs text-slate-300 mt-3 pt-3 border-t border-white/15 italic">
                        {isSinhala ? currentFC?.backEn : currentFC?.backSi}
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-xs text-cyan-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      <span>Key O/L Examination Takeaway</span>
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
                      masteryRecord[currentIndex] === 'hard'
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
                      masteryRecord[currentIndex] === 'easy'
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-700 ring-2 ring-emerald-200'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <ThumbsUp className="w-4 h-4 text-emerald-500" />
                    <span>{t.flashcardModal.knewIt}</span>
                  </button>
                </div>
              </div>

              {/* Multi-Card Navigation Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>{isSinhala ? 'පෙර කාඩ්පත' : 'Previous Card'}</span>
                </button>

                <button
                  onClick={handleResetCard}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-600 text-xs font-medium flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>

                <button
                  onClick={handleNext}
                  disabled={currentIndex === totalCards - 1}
                  className="px-3.5 py-2 rounded-xl bg-[#602d92] hover:bg-purple-800 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shadow-xs"
                >
                  <span>{isSinhala ? 'ඊළඟ කාඩ්පත' : 'Next Card'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
