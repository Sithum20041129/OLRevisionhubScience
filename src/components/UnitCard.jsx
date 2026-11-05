import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/useLanguage';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function UnitCard({ unit }) {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

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

  const handleGoToLesson = () => {
    navigate(`/unit/${unit.id}`);
  };

  return (
    <div 
      id={`lesson-${unit.id}`}
      className={`scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${categoryConfig.borderAccent} ${categoryConfig.glowAccent}`}
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

        {/* Subtopic Count Metric */}
        {unit.subtopics && unit.subtopics.length > 0 && (
          <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <BookOpen className="w-3.5 h-3.5 text-[#602d92]" />
            <span>
              {unit.subtopics.length} {isSinhala ? 'අනුමාතෘකා අඩංගුයි' : 'Subtopics Included'}
            </span>
          </div>
        )}
      </div>

      {/* Bottom Action Area: Go to Lesson */}
      <div className="mt-5 pt-4 border-t border-slate-100">
        <button
          onClick={handleGoToLesson}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-purple-50 hover:bg-[#602d92] text-[#602d92] hover:text-white text-xs sm:text-sm font-bold border border-purple-200/80 hover:border-[#602d92] transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-md group/btn"
        >
          <span>{isSinhala ? 'පාඩමට යන්න' : 'Go to Lesson'}</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>

    </div>
  );
}
