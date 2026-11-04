import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/useLanguage';
import { HelpCircle, ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const featuredHeroUnits = [
  {
    id: "g10-u1",
    grade: 10,
    unitNumber: 1,
    category: "biology",
    disciplineEn: "Biology",
    disciplineSi: "ජීව විද්‍යාව",
    titleEn: "Biological Processes & Cell Physiology",
    titleSi: "ජීව ක්‍රියාවලි හා සෛලීය ලාක්ෂණික",
    descEn: "Explore cellular foundation, mitochondria, organelles, respiration, nutrition, and vital living processes required for O/L Science.",
    descSi: "සෛලීය ව්‍යුහය, ඉන්ද්‍රියිකා, ශ්වසනය, පෝෂණය සහ සා/පෙළ විභාගයට අත්‍යවශ්‍ය මූලික ජීව ක්‍රියාවලි.",
    accentColor: "from-emerald-600 via-teal-700 to-slate-900",
    badgeBg: "bg-emerald-50 text-emerald-800 border-emerald-300",
    glowColor: "rgba(16, 185, 129, 0.35)",
    fgEmoji: "🔬",
    bgPattern: "radial-gradient(circle at 30% 40%, rgba(16, 185, 129, 0.4) 0%, rgba(13, 148, 136, 0.2) 50%, rgba(15, 23, 42, 0.95) 100%)",
    statQuestions: "45+ Questions Ready",
    statCards: "28 Smart Flashcards"
  },
  {
    id: "g10-u2",
    grade: 10,
    unitNumber: 2,
    category: "chemistry",
    disciplineEn: "Chemistry",
    disciplineSi: "රසායන විද්‍යාව",
    titleEn: "Structure of Matter & Periodic Table",
    titleSi: "පදාර්ථයේ ව්‍යුහය සහ ආවර්තිතා වගුව",
    descEn: "Master electron configurations, atomic structures, periodic trends, electronegativity, and subatomic particle principles.",
    descSi: "ඉලෙක්ට්‍රෝන වින්‍යාසය, පරමාණුක ව්‍යුහය, ආවර්ත හා කාණ්ඩ ප්‍රවණතා සහ උපපරමාණුක අංශු ආශ්‍රිත ප්‍රශ්න.",
    accentColor: "from-amber-600 via-purple-800 to-slate-950",
    badgeBg: "bg-amber-50 text-amber-800 border-amber-300",
    glowColor: "rgba(245, 158, 11, 0.35)",
    fgEmoji: "🧪",
    bgPattern: "radial-gradient(circle at 30% 40%, rgba(245, 158, 11, 0.4) 0%, rgba(96, 45, 146, 0.3) 50%, rgba(15, 23, 42, 0.95) 100%)",
    statQuestions: "50+ Questions Ready",
    statCards: "32 Smart Flashcards"
  },
  {
    id: "g10-u4",
    grade: 10,
    unitNumber: 4,
    category: "physics",
    disciplineEn: "Physics",
    disciplineSi: "භෞතික විද්‍යාව",
    titleEn: "Motion in a Straight Line & Graph Analysis",
    titleSi: "සරල රේඛීය චලිතය හා ප්‍රස්ථාර විග්‍රහය",
    descEn: "Calculate displacement, velocity, acceleration, and master velocity-time graphs for past exam structured questions.",
    descSi: "විස්ථාපනය, ප්‍රවේගය, ත්වරණය ගණනය කිරීම් සහ ප්‍රවේග-කාල ප්‍රස්ථාර ආශ්‍රිත විභාග ගැටලු පරිපූර්ණව විසඳීම.",
    accentColor: "from-blue-600 via-indigo-800 to-slate-950",
    badgeBg: "bg-blue-50 text-blue-800 border-blue-300",
    glowColor: "rgba(59, 130, 246, 0.35)",
    fgEmoji: "⚡",
    bgPattern: "radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.4) 0%, rgba(67, 56, 202, 0.3) 50%, rgba(15, 23, 42, 0.95) 100%)",
    statQuestions: "40+ Questions Ready",
    statCards: "24 Smart Flashcards"
  },
  {
    id: "g11-u4",
    grade: 11,
    unitNumber: 4,
    category: "physics",
    disciplineEn: "Physics",
    disciplineSi: "භෞතික විද්‍යාව",
    titleEn: "Current Electricity & Circuits",
    titleSi: "ධාරා විද්‍යුතය හා පරිපථ ගණනය කිරීම්",
    descEn: "Ohm's Law, equivalent resistance in series and parallel circuits, and calculating electrical power usage.",
    descSi: "ඕම්ගේ නියමය, ශ්‍රේණිගත හා සමාන්තරගත සමක ප්‍රතිරෝධය සෙවීම සහ විද්‍යුත් ක්ෂමතා ගණනය කිරීම්.",
    accentColor: "from-violet-600 via-purple-900 to-slate-950",
    badgeBg: "bg-purple-50 text-purple-800 border-purple-300",
    glowColor: "rgba(139, 92, 246, 0.35)",
    fgEmoji: "💡",
    bgPattern: "radial-gradient(circle at 30% 40%, rgba(139, 92, 246, 0.4) 0%, rgba(96, 45, 146, 0.3) 50%, rgba(15, 23, 42, 0.95) 100%)",
    statQuestions: "42+ Questions Ready",
    statCards: "26 Smart Flashcards"
  },
  {
    id: "g11-u3",
    grade: 11,
    unitNumber: 3,
    category: "biology",
    disciplineEn: "Biology",
    disciplineSi: "ජීව විද්‍යාව",
    titleEn: "Genetics, DNA & Hereditary Crosses",
    titleSi: "ප්‍රවේණිය, DNA හා ඒකමුහුම් අභිජනනය",
    descEn: "Mendelian genetics, Punnett squares, chromosome structures, monohybrid crosses, and sex determination.",
    descSi: "මෙන්ඩලීය ප්‍රවේණිය, පනට් කොටුව, වර්ණදේහ ව්‍යුහය, ඒකමුහුම් අභිජනන ගැටලු සහ ලිංග නිර්ණය.",
    accentColor: "from-teal-600 via-emerald-800 to-slate-950",
    badgeBg: "bg-teal-50 text-teal-800 border-teal-300",
    glowColor: "rgba(20, 184, 166, 0.35)",
    fgEmoji: "🧬",
    bgPattern: "radial-gradient(circle at 30% 40%, rgba(20, 184, 166, 0.4) 0%, rgba(5, 150, 105, 0.3) 50%, rgba(15, 23, 42, 0.95) 100%)",
    statQuestions: "38+ Questions Ready",
    statCards: "22 Smart Flashcards"
  }
];

export default function HeroCarousel({ onOpenQuiz, allUnits }) {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const isSinhala = language === 'si';
  const totalTabs = featuredHeroUnits.length;
  const currentUnit = featuredHeroUnits[currentIndex];

  // Match current unit with allUnits to pass the full object to Quiz modal
  const fullUnitObject = allUnits.find(u => u.id === currentUnit.id) || allUnits[0];

  // Auto-advance tabs every 3 seconds (3000ms)
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalTabs);
    }, 3000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, totalTabs, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalTabs - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalTabs);
  };

  // Scroll directly to the lesson card below and highlight it
  const handleGoToLesson = () => {
    const el = document.getElementById(`lesson-${currentUnit.id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('ring-4', 'ring-[#602d92]', 'shadow-2xl');
      setTimeout(() => {
        el.classList.remove('ring-4', 'ring-[#602d92]', 'shadow-2xl');
      }, 2200);
    } else {
      const sec = document.getElementById('units');
      if (sec) sec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="relative overflow-hidden bg-slate-950 text-white select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Dynamic Canvas */}
      <div 
        className="absolute inset-0 transition-all duration-700 ease-out opacity-90"
        style={{ background: currentUnit.bgPattern }}
      />

      {/* Decorative Grid Mesh & Ambient Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div 
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-all duration-700"
        style={{ background: currentUnit.glowColor }}
      />
      <div 
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-all duration-700"
        style={{ background: currentUnit.glowColor }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 sm:pt-10 sm:pb-14 z-10">
        
        {/* Top Header Badge & Navigation Arrows */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[#602d92] font-black bg-white px-2 py-0.5 rounded-md text-[11px]">OL.LK</span>
            <span>{isSinhala ? 'විද්‍යාව පාඩම් මාලා පුනරීක්ෂණය' : 'Interactive Science Revision Hub'}</span>
          </div>

          {/* Minimal Slide Controls */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-1 px-2">
              {featuredHeroUnits.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'w-5 bg-white' : 'w-1.5 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Unit Card Slide Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[400px]">
          
          {/* LEFT HAND SIDE: FOREGROUND & BACKGROUND VISUAL COMPOSITION TO ELIMINATE LONELINESS */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Outer Ambient Aura */}
            <div 
              className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-3xl blur-2xl transition-all duration-700 opacity-60"
              style={{ background: currentUnit.glowColor }}
            />

            {/* Background 3D Science Card Container */}
            <div className="relative w-full max-w-md bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/25 rounded-3xl p-6 sm:p-7 shadow-2xl overflow-hidden group hover:border-white/40 transition-all duration-300">
              
              {/* Background Geometric Accent Circle */}
              <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-white/10 blur-md pointer-events-none" />
              
              {/* Top Row: Unit Tag & Discipline */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-xl bg-white/20 text-white border border-white/30 backdrop-blur-md">
                  {isSinhala ? `${currentUnit.grade} ශ්‍රේණිය` : `Grade ${currentUnit.grade}`} • {isSinhala ? `පාඩම 0${currentUnit.unitNumber}` : `Unit 0${currentUnit.unitNumber}`}
                </span>
                <span className="text-xs font-bold text-cyan-300 px-2.5 py-0.5 rounded-lg bg-cyan-950/60 border border-cyan-700/60 flex items-center gap-1">
                  <span>{currentUnit.fgEmoji}</span>
                  <span>{isSinhala ? currentUnit.disciplineSi : currentUnit.disciplineEn}</span>
                </span>
              </div>

              {/* Central Foreground Hero Emblem / Illustration */}
              <div className="relative my-4 py-6 flex flex-col items-center justify-center">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-tr from-white/20 via-white/10 to-transparent border border-white/30 shadow-inner flex items-center justify-center transform group-hover:scale-105 group-hover:rotate-3 transition-transform duration-500">
                  <span className="text-6xl sm:text-7xl filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]">
                    {currentUnit.fgEmoji}
                  </span>
                </div>
                
                {/* Floating Science Hologram Badge */}
                <div className="mt-4 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-400/40 text-[11px] font-semibold text-cyan-300 tracking-wide shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
                  <span>{isSinhala ? 'ප්‍රශ්න පත්‍ර සහ විෂය නිර්දේශ නිපුණතා' : 'O/L Exam Focus Unit'}</span>
                </div>
              </div>

              {/* Bottom Quick Metric Pills */}
              <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/15 text-center">
                <div className="bg-black/30 rounded-xl p-2.5 border border-white/10">
                  <p className="text-[11px] text-slate-300 font-medium">{isSinhala ? 'ප්‍රශ්නාවලි' : 'Practice MCQs'}</p>
                  <p className="text-xs font-bold text-white">{currentUnit.statQuestions}</p>
                </div>
                <div className="bg-black/30 rounded-xl p-2.5 border border-white/10">
                  <p className="text-[11px] text-slate-300 font-medium">{isSinhala ? 'මතක කාඩ්පත්' : 'Flashcards'}</p>
                  <p className="text-xs font-bold text-cyan-300">{currentUnit.statCards}</p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT HAND SIDE: UNIT DETAILS & DIRECT ACTION BUTTONS */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 lg:pl-6 text-left">
            
            {/* Title & Subtitle */}
            <div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight transition-all duration-300">
                {isSinhala ? currentUnit.titleSi : currentUnit.titleEn}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 italic mt-1 font-medium">
                {isSinhala ? currentUnit.titleEn : currentUnit.titleSi}
              </p>

              <p className="text-sm sm:text-base text-slate-200 mt-4 leading-relaxed max-w-2xl">
                {isSinhala ? currentUnit.descSi : currentUnit.descEn}
              </p>
            </div>

            {/* DIRECT ACTION BUTTONS: GO TO LESSON & LAUNCH QUIZ */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              
              {/* Button 1: Go to Lesson */}
              <button
                onClick={handleGoToLesson}
                className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-[#602d92] font-bold text-sm sm:text-base shadow-lg shadow-black/20 flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 transition cursor-pointer"
              >
                <span>{isSinhala ? 'පාඩමට යන්න' : 'Go to Lesson'}</span>
                <ArrowRight className="w-5 h-5 text-[#602d92]" />
              </button>

              {/* Button 2: Launch Unit Quiz */}
              <button
                onClick={() => onOpenQuiz(fullUnitObject)}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#602d92] via-purple-700 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-purple-900/40 hover:shadow-purple-700/60 flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 transition cursor-pointer"
              >
                <HelpCircle className="w-5 h-5 text-cyan-300" />
                <span>{isSinhala ? 'ප්‍රශ්නාවලිය ආරම්භ කරන්න' : 'Launch Unit Quiz'}</span>
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
