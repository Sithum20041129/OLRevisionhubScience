import React from 'react';
import { useLanguage } from '../context/useLanguage';
import { Search } from 'lucide-react';

export default function UnitFilterBar({
  searchQuery,
  setSearchQuery,
  selectedGrade,
  setSelectedGrade,
  selectedCategory,
  setSelectedCategory,
  totalFound
}) {
  const { language, t } = useLanguage();
  const isSinhala = language === 'si';

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-sm sm:text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#602d92] focus:border-[#602d92] transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 bg-gray-200 px-2 py-1 rounded-md"
            >
              Clear
            </button>
          )}
        </div>

        {/* Grade Filters */}
        <div className="flex items-center gap-1.5 p-1 bg-gray-100 rounded-2xl shrink-0">
          <button
            onClick={() => setSelectedGrade('all')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
              selectedGrade === 'all'
                ? 'bg-white text-gray-900 shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {t.allGrades}
          </button>
          <button
            onClick={() => setSelectedGrade(10)}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
              selectedGrade === 10
                ? 'bg-[#602d92] text-white shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {t.grade10}
          </button>
          <button
            onClick={() => setSelectedGrade(11)}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
              selectedGrade === 11
                ? 'bg-[#602d92] text-white shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {t.grade11}
          </button>
        </div>

        {/* Discipline Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 shrink-0">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
            }`}
          >
            {t.allDisciplines}
          </button>
          <button
            onClick={() => setSelectedCategory('biology')}
            className={`px-3 py-2 rounded-xl text-xs font-semibold border transition cursor-pointer ${
              selectedCategory === 'biology'
                ? 'bg-emerald-700 text-white border-emerald-700'
                : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
            }`}
          >
            🌱 {t.biology}
          </button>
          <button
            onClick={() => setSelectedCategory('chemistry')}
            className={`px-3 py-2 rounded-xl text-xs font-semibold border transition cursor-pointer ${
              selectedCategory === 'chemistry'
                ? 'bg-amber-700 text-white border-amber-700'
                : 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100'
            }`}
          >
            🧪 {t.chemistry}
          </button>
          <button
            onClick={() => setSelectedCategory('physics')}
            className={`px-3 py-2 rounded-xl text-xs font-semibold border transition cursor-pointer ${
              selectedCategory === 'physics'
                ? 'bg-[#602d92] text-white border-[#602d92]'
                : 'bg-purple-50 text-[#602d92] border-purple-200 hover:bg-purple-100'
            }`}
          >
            ⚡ {t.physics}
          </button>
        </div>

      </div>

      <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
        <span>
          {isSinhala ? `පාඩම් ${totalFound} ක් හමුවිය` : `Showing ${totalFound} syllabus units`}
        </span>
        <span className="text-gray-400">
          {isSinhala ? 'ප්‍රශ්නාවලි සහ Flashcards සඳහා පාඩමක් තෝරන්න' : 'Click Launch Quiz or Flashcards on any card'}
        </span>
      </div>
    </div>
  );
}

