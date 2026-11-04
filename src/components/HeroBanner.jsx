import React from 'react';
import { useLanguage } from '../context/useLanguage';
import { Search, Sparkles, BookCheck, Layers, FileSpreadsheet, BrainCircuit } from 'lucide-react';

export default function HeroBanner({
  searchQuery,
  setSearchQuery,
  selectedGrade,
  setSelectedGrade,
  selectedCategory,
  setSelectedCategory,
  onOpenUpload
}) {
  const { language, t } = useLanguage();

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50/70 via-slate-50 to-slate-50 pt-8 pb-10 border-b border-slate-200/60">
      {/* Decorative background glow circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Pill */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100/80 border border-indigo-200/80 text-indigo-950 text-xs font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-spin" style={{ animationDuration: '6s' }} />
            <span>{language === 'en' ? 'G.C.E. O/L Science Revision Platform' : 'සාමාන්‍ය පෙළ විද්‍යා පුනරීක්ෂණ පද්ධතිය'}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[11px] text-emerald-700 font-medium">{language === 'en' ? 'English & සිංහල' : 'ද්විභාෂා සහාය'}</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mt-5 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {language === 'en' ? (
              <>
                Targeted Revision with <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">Past-Paper Questions</span> & Smart Flashcards
              </>
            ) : (
              <>
                පසුගිය ප්‍රශ්න පත්‍ර සහ AI මතක කාඩ්පත් සමඟින් <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">විද්‍යාව විෂය නිර්දේශය</span> සරලව
              </>
            )}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Quick Highlights / Architecture Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">{t.stats.totalUnits}</p>
              <p className="text-sm font-bold text-slate-900">{language === 'en' ? 'Grade 10 & 11' : '10 සහ 11 ශ්‍රේණි'}</p>
            </div>
          </div>

          <div
            onClick={onOpenUpload}
            className="bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3 cursor-pointer hover:border-emerald-400 transition"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">{t.stats.pastPapersReady}</p>
              <p className="text-sm font-bold text-slate-900">{language === 'en' ? 'Paper-to-Unit Tagging' : 'ප්‍රශ්න පත්‍ර පාඩම් වලට'}</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">{t.stats.aiStatus}</p>
              <p className="text-sm font-bold text-slate-900">{language === 'en' ? 'Syllabus Flashcards' : 'ස්මාර්ට් Flashcards'}</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0">
              <BookCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">{t.stats.bilingualCoverage}</p>
              <p className="text-sm font-bold text-slate-900">EN & සිංහල මාධ්‍ය</p>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="mt-8 max-w-3xl mx-auto">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-100 px-2 py-1 rounded-md"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            {/* Grade Filter */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 rounded-xl">
              <button
                onClick={() => setSelectedGrade('all')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                  selectedGrade === 'all'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.allGrades}
              </button>
              <button
                onClick={() => setSelectedGrade(10)}
                className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                  selectedGrade === 10
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.grade10}
              </button>
              <button
                onClick={() => setSelectedGrade(11)}
                className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                  selectedGrade === 11
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.grade11}
              </button>
            </div>

            {/* Discipline/Branch Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                  selectedCategory === 'all'
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {t.allDisciplines}
              </button>
              <button
                onClick={() => setSelectedCategory('biology')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                  selectedCategory === 'biology'
                    ? 'bg-emerald-700 text-white border-emerald-700'
                    : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
                }`}
              >
                🌱 {t.biology}
              </button>
              <button
                onClick={() => setSelectedCategory('chemistry')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                  selectedCategory === 'chemistry'
                    ? 'bg-amber-700 text-white border-amber-700'
                    : 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100'
                }`}
              >
                🧪 {t.chemistry}
              </button>
              <button
                onClick={() => setSelectedCategory('physics')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                  selectedCategory === 'physics'
                    ? 'bg-indigo-700 text-white border-indigo-700'
                    : 'bg-indigo-50 text-indigo-800 border-indigo-200 hover:bg-indigo-100'
                }`}
              >
                ⚡ {t.physics}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
