import React from 'react';
import { useLanguage } from '../context/useLanguage';
import { HelpCircle, Layers, FileText } from 'lucide-react';

export default function UnitCard({ unit, onOpenQuiz, onOpenFlashcards }) {
  const { language, t } = useLanguage();

  const isSinhala = language === 'si';
  const title = isSinhala ? unit.titleSi : unit.titleEn;
  const secondaryTitle = isSinhala ? unit.titleEn : unit.titleSi;
  const description = isSinhala ? unit.descriptionSi : unit.descriptionEn;

  // Category styling
  const categoryConfig = {
    biology: {
      label: t.biology,
      icon: '🌱',
      badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      borderAccent: 'hover:border-emerald-400',
      glowAccent: 'hover:shadow-emerald-500/10'
    },
    chemistry: {
      label: t.chemistry,
      icon: '🧪',
      badgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
      borderAccent: 'hover:border-amber-400',
      glowAccent: 'hover:shadow-amber-500/10'
    },
    physics: {
      label: t.physics,
      icon: '⚡',
      badgeClass: 'bg-purple-50 text-[#602d92] border-purple-200',
      borderAccent: 'hover:border-purple-400',
      glowAccent: 'hover:shadow-purple-500/10'
    }
  }[unit.category] || {
    label: unit.category,
    icon: '📚',
    badgeClass: 'bg-slate-50 text-slate-800 border-slate-200',
    borderAccent: 'hover:border-slate-400',
    glowAccent: 'hover:shadow-slate-500/10'
  };

  return (
    <div 
      id={`lesson-${unit.id}`}
      className={`scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${categoryConfig.borderAccent} ${categoryConfig.glowAccent}`}
    >
      
      {/* Top Header Row */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-purple-50 text-[#602d92] border border-purple-200">
              {isSinhala ? `${unit.grade} ශ්‍රේණිය` : `Grade ${unit.grade}`}
            </span>
            <span className="text-xs font-semibold text-slate-500">
              {isSinhala ? `පාඩම ${unit.unitNumber.toString().padStart(2, '0')}` : `Unit ${unit.unitNumber.toString().padStart(2, '0')}`}
            </span>
          </div>

          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border flex items-center gap-1 ${categoryConfig.badgeClass}`}>
            <span>{categoryConfig.icon}</span>
            <span>{categoryConfig.label}</span>
          </span>
        </div>

        {/* Unit Title */}
        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#602d92] transition-colors leading-snug">
          {title}
        </h3>
        
        {/* Secondary Title in alternate language for cross-reference */}
        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1 italic">
          {secondaryTitle}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Paper Source Coverage Tags */}
        <div className="mt-4 pt-3 border-t border-slate-100">
          <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 mb-1.5">
            <FileText className="w-3 h-3 text-slate-400" />
            <span>{isSinhala ? 'ඉලක්කගත විභාග මූලාශ්‍ර:' : 'Target Exam Papers:'}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {unit.targetPapers.map((paper, idx) => (
              <span
                key={idx}
                className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/70"
              >
                {paper}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Action Area */}
      <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
        {/* Status indicator row */}
        <div className="flex items-center justify-between text-xs text-slate-500 bg-slate-50/80 px-3 py-1.5 rounded-xl border border-slate-100">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium text-slate-600">
              {unit.totalQuestions > 0 
                ? `${unit.totalQuestions} Questions` 
                : isSinhala ? 'ප්‍රශ්න පත්‍ර ඇතුළත් කිරීමට සූදානම්' : 'Ready for Paper Upload'}
            </span>
          </div>
          <span className="text-[10px] font-bold text-[#602d92] uppercase tracking-wider">
            {isSinhala ? 'AI සක්‍රියයි' : 'AI Ready'}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          {/* Quiz Runner Button */}
          <button
            onClick={() => onOpenQuiz(unit)}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#602d92] hover:bg-purple-800 text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
          >
            <HelpCircle className="w-4 h-4" />
            <span>{t.startQuiz}</span>
          </button>

          {/* Flashcard Button */}
          <button
            onClick={() => onOpenFlashcards(unit)}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-purple-50 hover:bg-purple-100 text-[#602d92] text-xs sm:text-sm font-semibold border border-purple-200/80 transition-all duration-200 cursor-pointer"
          >
            <Layers className="w-4 h-4" />
            <span>{t.flashcardsCount}</span>
          </button>
        </div>
      </div>

    </div>
  );
}
