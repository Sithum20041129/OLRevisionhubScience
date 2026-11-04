import React from 'react';
import { useLanguage } from '../context/useLanguage';
import { HelpCircle, ArrowRight } from 'lucide-react';

export default function UnitCard({ unit, onOpenQuiz }) {
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
      </div>

      {/* Bottom Action Area: Go to Lesson & Launch Quiz */}
      <div className="mt-5 pt-4 border-t border-slate-100">
        <div className="grid grid-cols-2 gap-2">
          {/* Go to Lesson Button */}
          <button
            onClick={() => onOpenQuiz(unit)}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-purple-50 hover:bg-purple-100 text-[#602d92] text-xs sm:text-sm font-bold border border-purple-200/80 transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-xs"
          >
            <span>{isSinhala ? 'පාඩමට යන්න' : 'Go to Lesson'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Quiz Runner Button */}
          <button
            onClick={() => onOpenQuiz(unit)}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#602d92] hover:bg-purple-800 text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
          >
            <HelpCircle className="w-4 h-4" />
            <span>{t.startQuiz}</span>
          </button>
        </div>
      </div>

    </div>
  );
}
