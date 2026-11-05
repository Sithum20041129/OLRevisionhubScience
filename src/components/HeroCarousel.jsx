import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/useLanguage';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

// Featured actual Grade 10 Part 1 syllabus units for Hero section
const featuredHeroUnits = [
  {
    id: "g10-u1",
    grade: 10,
    unitNumber: 1,
    category: "biology",
    disciplineEn: "Biology",
    disciplineSi: "ජීව විද්‍යාව",
    titleEn: "Chemical Basis of Life",
    titleSi: "ජීවයේ රසායනික පදනම",
    descEn: "Explore carbohydrates, proteins, lipids, nucleic acids, water, mineral salts, and vitamins essential for living organisms.",
    descSi: "කාබෝහයිඩ්‍රේට, ප්‍රෝටීන, ලිපිඩ, න්‍යෂ්ටික අම්ල, ජලය, ඛනිජ ලවණ සහ සා/පෙළ විභාගයට අත්‍යවශ්‍ය විටමින් වර්ග.",
    accentColor: "from-emerald-600 via-teal-700 to-slate-900",
    badgeBg: "bg-emerald-50 text-emerald-800 border-emerald-300",
    glowColor: "rgba(16, 185, 129, 0.35)",
    fgEmoji: "🔬",
    bgPattern: "radial-gradient(circle at 30% 40%, rgba(16, 185, 129, 0.4) 0%, rgba(13, 148, 136, 0.2) 50%, rgba(15, 23, 42, 0.95) 100%)",
    statQuestions: "25 Questions Ready",
    statCards: "7 Subtopics"
  },
  {
    id: "g10-u2",
    grade: 10,
    unitNumber: 2,
    category: "physics",
    disciplineEn: "Physics",
    disciplineSi: "භෞතික විද්‍යාව",
    titleEn: "Motion in a Straight Line",
    titleSi: "සරල රේඛීය චලිතය",
    descEn: "Distance, displacement, speed, velocity, acceleration, and interpreting displacement-time and velocity-time graphs.",
    descSi: "දුර, විස්ථාපනය, කථිනතාව, ප්‍රවේගය, ත්වරණය සහ ප්‍රවේග-කාල ප්‍රස්ථාර ආශ්‍රිත විභාග ගැටලු පරිපූර්ණව විසඳීම.",
    accentColor: "from-blue-600 via-indigo-800 to-slate-950",
    badgeBg: "bg-blue-50 text-blue-800 border-blue-300",
    glowColor: "rgba(59, 130, 246, 0.35)",
    fgEmoji: "⚡",
    bgPattern: "radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.4) 0%, rgba(67, 56, 202, 0.3) 50%, rgba(15, 23, 42, 0.95) 100%)",
    statQuestions: "20 Questions Ready",
    statCards: "8 Subtopics"
  },
  {
    id: "g10-u3",
    grade: 10,
    unitNumber: 3,
    category: "chemistry",
    disciplineEn: "Chemistry",
    disciplineSi: "රසායන විද්‍යාව",
    titleEn: "Structure of Matter",
    titleSi: "පදාර්ථයේ ව්‍යුහය",
    descEn: "Atomic structure, subatomic particles, isotopes, electron configuration, and periodic table trends across groups and periods.",
    descSi: "පරමාණුක ව්‍යුහය, උපපරමාණුක අංශු, ඉලෙක්ට්‍රෝන වින්‍යාසය, සමස්ථානික සහ ආවර්තිතා වගුවේ ප්‍රවණතා.",
    accentColor: "from-amber-600 via-purple-800 to-slate-950",
    badgeBg: "bg-amber-50 text-amber-800 border-amber-300",
    glowColor: "rgba(245, 158, 11, 0.35)",
    fgEmoji: "🧪",
    bgPattern: "radial-gradient(circle at 30% 40%, rgba(245, 158, 11, 0.4) 0%, rgba(96, 45, 146, 0.3) 50%, rgba(15, 23, 42, 0.95) 100%)",
    statQuestions: "22 Questions Ready",
    statCards: "8 Subtopics"
  },
  {
    id: "g10-u4",
    grade: 10,
    unitNumber: 4,
    category: "physics",
    disciplineEn: "Physics",
    disciplineSi: "භෞතික විද්‍යාව",
    titleEn: "Newton's Laws of Motion",
    titleSi: "චලිතය පිළිබඳ නිව්ටන් නියම",
    descEn: "Inertia, momentum, Newton's three laws of motion, F = ma, action-reaction pairs, and the difference between mass and weight.",
    descSi: "අවස්ථිතිය, රේඛීය ගම්‍යතාව, F = ma, ක්‍රියා-ප්‍රතික්‍රියා යුගල සහ ස්කන්ධය හා භාරය අතර වෙනස.",
    accentColor: "from-cyan-600 via-blue-900 to-slate-950",
    badgeBg: "bg-cyan-50 text-cyan-800 border-cyan-300",
    glowColor: "rgba(6, 182, 212, 0.35)",
    fgEmoji: "🚀",
    bgPattern: "radial-gradient(circle at 30% 40%, rgba(6, 182, 212, 0.4) 0%, rgba(30, 58, 138, 0.3) 50%, rgba(15, 23, 42, 0.95) 100%)",
    statQuestions: "18 Questions Ready",
    statCards: "6 Subtopics"
  },
  {
    id: "g10-u6",
    grade: 10,
    unitNumber: 6,
    category: "biology",
    disciplineEn: "Biology",
    disciplineSi: "ජීව විද්‍යාව",
    titleEn: "Plant & Animal Cell Structure and Functions",
    titleSi: "ශාක හා සත්ත්ව සෛලවල ව්‍යුහය හා කෘත්‍ය",
    descEn: "Cell theory, light microscope observations, organelles, nucleus, mitochondria, differences between plant and animal cells.",
    descSi: "සෛල වාදය, ආලෝක අන්වීක්ෂ නිරීක්ෂණ, සෛල ඉන්ද්‍රියිකා, ශාක හා සත්ත්ව සෛල අතර වෙනස්කම් සහ සෛල විභාජනය.",
    accentColor: "from-teal-600 via-emerald-800 to-slate-950",
    badgeBg: "bg-teal-50 text-teal-800 border-teal-300",
    glowColor: "rgba(20, 184, 166, 0.35)",
    fgEmoji: "🧬",
    bgPattern: "radial-gradient(circle at 30% 40%, rgba(20, 184, 166, 0.4) 0%, rgba(5, 150, 105, 0.3) 50%, rgba(15, 23, 42, 0.95) 100%)",
    statQuestions: "24 Questions Ready",
    statCards: "7 Subtopics"
  }
];

export default function HeroCarousel() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const isSinhala = language === 'si';
  const totalTabs = featuredHeroUnits.length;
  const currentUnit = featuredHeroUnits[currentIndex];

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

  // Navigate directly to the lesson's unit page
  const handleGoToLesson = () => {
    navigate(`/unit/${currentUnit.id}`);
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
      
      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* TOP CONTROLS: HORIZONTALLY PAGING UNIT TABS & NAVIGATION */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/15">
          
          {/* Horizontal Paging Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {featuredHeroUnits.map((unit, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={unit.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-lg shadow-black/30 scale-105'
                      : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                  }`}
                  aria-selected={isActive}
                >
                  <span className="text-base">{unit.fgEmoji}</span>
                  <span>{isSinhala ? `පාඩම 0${unit.unitNumber}: ${unit.disciplineSi}` : `Unit 0${unit.unitNumber}: ${unit.disciplineEn}`}</span>
                </button>
              );
            })}
          </div>

          {/* Carousel Next/Prev Controls & Auto-cycle indicator */}
          <div className="flex items-center justify-between md:justify-end gap-3 flex-shrink-0">
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-1.5 px-2">
              {featuredHeroUnits.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === currentIndex ? 'w-6 bg-cyan-400' : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
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
          
          {/* LEFT HAND SIDE: FOREGROUND & BACKGROUND VISUAL COMPOSITION */}
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
                  <span>{isSinhala ? '10 ශ්‍රේණිය - 1 වන කොටස' : 'Grade 10 - Part 1 Textbook'}</span>
                </div>
              </div>

              {/* Bottom Quick Metric Pills */}
              <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/15 text-center">
                <div className="bg-black/30 rounded-xl p-2.5 border border-white/10">
                  <p className="text-[11px] text-slate-300 font-medium">{isSinhala ? 'ප්‍රශ්නාවලි' : 'Practice MCQs'}</p>
                  <p className="text-xs font-bold text-white">{currentUnit.statQuestions}</p>
                </div>
                <div className="bg-black/30 rounded-xl p-2.5 border border-white/10">
                  <p className="text-[11px] text-slate-300 font-medium">{isSinhala ? 'විෂය අනුමාතෘකා' : 'Subtopics'}</p>
                  <p className="text-xs font-bold text-cyan-300">{currentUnit.statCards}</p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT HAND SIDE: UNIT DETAILS & DIRECT ACTION BUTTON */}
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

            {/* DIRECT ACTION BUTTON: GO TO LESSON */}
            <div className="pt-2 flex items-center">
              <button
                onClick={handleGoToLesson}
                className="px-7 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-[#602d92] font-bold text-sm sm:text-base shadow-lg shadow-black/20 flex items-center gap-2.5 transform hover:-translate-y-0.5 active:translate-y-0 transition cursor-pointer"
              >
                <span>{isSinhala ? 'පාඩමට යන්න' : 'Go to Lesson'}</span>
                <ArrowRight className="w-5 h-5 text-[#602d92]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
