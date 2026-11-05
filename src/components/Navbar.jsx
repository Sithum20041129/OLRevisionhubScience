import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../context/useLanguage';
import { Menu, X, Globe2, BookOpen, ChevronDown, Search, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { unitsData } from '../data/unitsData';

export default function Navbar({ onOpenUpload }) {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lessonsBarOpen, setLessonsBarOpen] = useState(false);
  const [barSearch, setBarSearch] = useState('');
  const [barGradeFilter, setBarGradeFilter] = useState('all'); // 'all' | 10 | 11
  const [barCategoryFilter, setBarCategoryFilter] = useState('all'); // 'all' | 'biology' | 'chemistry' | 'physics'

  const lessonsBarRef = useRef(null);
  const isSinhala = language === 'si';

  // Close lessons bar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (lessonsBarRef.current && !lessonsBarRef.current.contains(event.target)) {
        setLessonsBarOpen(false);
      }
    }
    if (lessonsBarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [lessonsBarOpen]);

  // Filter lessons inside the lessons bar
  const displayedLessons = unitsData.filter((u) => {
    if (barGradeFilter !== 'all' && u.grade !== barGradeFilter) return false;
    if (barCategoryFilter !== 'all' && u.category !== barCategoryFilter) return false;
    if (barSearch.trim()) {
      const q = barSearch.toLowerCase();
      const matchEn = u.titleEn.toLowerCase().includes(q);
      const matchSi = u.titleSi.toLowerCase().includes(q);
      const matchNum = `unit ${u.unitNumber}`.includes(q) || `පාඩම ${u.unitNumber}`.includes(q);
      return matchEn || matchSi || matchNum;
    }
    return true;
  });

  // Navigate directly to the lesson's dedicated unit page
  const navigateToLesson = (unitId) => {
    setLessonsBarOpen(false);
    setMobileMenuOpen(false);
    navigate(`/unit/${unitId}`);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Left: Brand Logo */}
          <Link className="flex-shrink-0 flex items-center gap-2.5" to="/">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#602d92] to-indigo-600 flex items-center justify-center text-white shadow-md shadow-purple-900/20">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-[#602d92]">
                  OL<span className="text-indigo-600">.LK</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-50 text-[#602d92] border border-purple-200">
                  Science
                </span>
              </div>
              <span className="text-[10px] text-gray-500 font-semibold tracking-wide -mt-1">
                {isSinhala ? 'සා/පෙළ විද්‍යා පුනරීක්ෂණය' : 'Online Revision Platform'}
              </span>
            </div>
          </Link>

          {/* Center: Centered Navigation Links with "Lessons" Dropdown Bar Trigger */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-6 lg:space-x-8 text-sm">
            <Link className="text-gray-600 hover:text-[#602d92] transition font-semibold" to="/">
              {isSinhala ? 'මුල් පිටුව' : 'Home'}
            </Link>

            {/* "Lessons" Interactive Dropdown Button */}
            <div className="relative">
              <button
                onClick={() => setLessonsBarOpen(!lessonsBarOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer ${
                  lessonsBarOpen
                    ? 'bg-[#602d92] text-white shadow-sm'
                    : 'text-[#602d92] hover:bg-purple-50 font-bold'
                }`}
                aria-expanded={lessonsBarOpen}
              >
                <Layers className="w-4 h-4" />
                <span>{isSinhala ? 'පාඩම් (Lessons)' : 'Lessons'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${lessonsBarOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <a className="text-gray-600 hover:text-[#602d92] transition font-semibold" href="#teachers">
              {isSinhala ? 'ගුරු මඩුල්ල' : 'Teachers'}
            </a>
            <a className="text-gray-600 hover:text-[#602d92] transition font-semibold" href="#timetable">
              {isSinhala ? 'කාලසටහන' : 'Timetable'}
            </a>
            <a className="text-gray-600 hover:text-[#602d92] transition font-semibold" href="#features">
              {isSinhala ? 'විශේෂාංග' : 'Features'}
            </a>
            <a className="text-gray-600 hover:text-[#602d92] transition font-semibold" href="#faq">
              FAQ
            </a>
          </div>

          {/* Right: Actions (Bilingual Toggle, AI Import & Login Button) */}
          <div className="hidden md:flex items-center space-x-2.5 flex-shrink-0">
            {/* AI Import Studio Trigger */}
            {onOpenUpload && (
              <button
                onClick={onOpenUpload}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 hover:bg-[#602d92] text-[#602d92] hover:text-white border border-purple-200 text-xs font-bold transition shadow-2xs cursor-pointer group"
                title={isSinhala ? 'Gemini AI ප්‍රශ්න පත්‍ර ඇතුළත් කිරීම' : 'Import Questions & Flashcards via AI'}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#602d92] group-hover:text-amber-300 transition-colors" />
                <span>{isSinhala ? 'AI ඇතුළත් කිරීම' : 'AI Import'}</span>
              </button>
            )}

            {/* Bilingual Switcher Toggle */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle Language"
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold shadow-xs hover:bg-[#602d92] transition cursor-pointer"
            >
              <Globe2 className="w-3.5 h-3.5 text-cyan-300" />
              <span>{language === 'en' ? 'සිංහල' : 'English'}</span>
            </button>

            {/* Login button */}
            <a
              href="https://ol.lk/learn"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#602d92] hover:bg-purple-800 text-white font-bold text-xs shadow-md transition"
            >
              {isSinhala ? 'ඇතුල් වන්න (Login)' : 'Login'}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-slate-100 text-slate-800 text-xs font-bold"
            >
              {language === 'en' ? 'සිංහල' : 'EN'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 focus:outline-none p-2"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#602d92]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* EXPANDABLE LESSONS BAR / MEGA PANEL (APPEARS ON CLICKING "LESSONS") */}
      {lessonsBarOpen && (
        <div 
          ref={lessonsBarRef}
          className="absolute top-full left-0 w-full bg-white border-b-2 border-purple-200 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            
            {/* Top Toolbar inside Lessons Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-[#602d92] flex items-center justify-center font-bold">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                    {isSinhala ? 'ලබාගත හැකි සියලුම විද්‍යාව පාඩම්' : 'Available Science Lessons'}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {isSinhala ? 'අදාළ පාඩමට ඍජුවම පිවිසීමට ඒ මත ක්ලික් කරන්න' : 'Click on any lesson below to jump directly to it'}
                  </p>
                </div>
              </div>

              {/* Search inside lessons bar */}
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder={isSinhala ? 'පාඩම් නම හෝ අංකයෙන් සොයන්න...' : 'Search lessons by title or #...'}
                  value={barSearch}
                  onChange={(e) => setBarSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#602d92] focus:bg-white transition"
                />
              </div>

              {/* Grade Filter Pill Tabs */}
              <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl self-start md:self-auto">
                <button
                  onClick={() => setBarGradeFilter('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                    barGradeFilter === 'all'
                      ? 'bg-[#602d92] text-white shadow-xs'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {isSinhala ? 'සියල්ල' : 'All'}
                </button>
                <button
                  onClick={() => setBarGradeFilter(10)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                    barGradeFilter === 10
                      ? 'bg-[#602d92] text-white shadow-xs'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {isSinhala ? '10 ශ්‍රේණිය' : 'Grade 10'}
                </button>
                <button
                  onClick={() => setBarGradeFilter(11)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                    barGradeFilter === 11
                      ? 'bg-[#602d92] text-white shadow-xs'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {isSinhala ? '11 ශ්‍රේණිය' : 'Grade 11'}
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setLessonsBarOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition cursor-pointer shrink-0"
                aria-label="Close lessons bar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Discipline Filter Chips */}
            <div className="flex items-center gap-2 pt-3 pb-4 overflow-x-auto text-xs">
              <span className="font-semibold text-gray-400 uppercase tracking-wider text-[11px] shrink-0">
                {isSinhala ? 'විෂය ක්ෂේත්‍රය:' : 'Discipline:'}
              </span>
              <button
                onClick={() => setBarCategoryFilter('all')}
                className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer shrink-0 ${
                  barCategoryFilter === 'all' ? 'bg-slate-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {isSinhala ? 'සියලු විෂයයන්' : 'All Branches'}
              </button>
              <button
                onClick={() => setBarCategoryFilter('biology')}
                className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer shrink-0 ${
                  barCategoryFilter === 'biology' ? 'bg-emerald-700 text-white' : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                }`}
              >
                🌱 {isSinhala ? 'ජීව විද්‍යාව' : 'Biology'}
              </button>
              <button
                onClick={() => setBarCategoryFilter('chemistry')}
                className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer shrink-0 ${
                  barCategoryFilter === 'chemistry' ? 'bg-amber-700 text-white' : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
                }`}
              >
                🧪 {isSinhala ? 'රසායන විද්‍යාව' : 'Chemistry'}
              </button>
              <button
                onClick={() => setBarCategoryFilter('physics')}
                className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer shrink-0 ${
                  barCategoryFilter === 'physics' ? 'bg-[#602d92] text-white' : 'bg-purple-50 text-[#602d92] hover:bg-purple-100'
                }`}
              >
                ⚡ {isSinhala ? 'භෞතික විද්‍යාව' : 'Physics'}
              </button>
            </div>

            {/* List of Available Lessons (Clickable Cards to Navigate) */}
            <div className="max-h-[55vh] overflow-y-auto pr-1">
              {displayedLessons.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {displayedLessons.map((unit) => {
                    const title = isSinhala ? unit.titleSi : unit.titleEn;
                    const secondary = isSinhala ? unit.titleEn : unit.titleSi;
                    const catBadge = {
                      biology: { emoji: '🌱', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
                      chemistry: { emoji: '🧪', bg: 'bg-amber-50 text-amber-700 border-amber-200' },
                      physics: { emoji: '⚡', bg: 'bg-purple-50 text-[#602d92] border-purple-200' },
                    }[unit.category];

                    return (
                      <button
                        key={unit.id}
                        onClick={() => navigateToLesson(unit.id)}
                        className="text-left p-3 rounded-xl border border-gray-100 hover:border-[#602d92] bg-gray-50/60 hover:bg-purple-50/40 transition-all duration-150 flex items-center justify-between group cursor-pointer shadow-2xs hover:shadow-xs"
                      >
                        <div className="flex items-center gap-3 min-w-0 pr-2">
                          <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 text-[#602d92] font-black text-xs flex items-center justify-center shrink-0 group-hover:bg-[#602d92] group-hover:text-white transition-colors">
                            {unit.unitNumber.toString().padStart(2, '0')}
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5 mb-0.5">
                              <span className="text-[10px] font-bold text-gray-500 uppercase">
                                Gr.{unit.grade}
                              </span>
                              <span className={`text-[10px] font-semibold px-1.5 py-0.2 rounded border ${catBadge.bg}`}>
                                {catBadge.emoji} {unit.category}
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#602d92] transition-colors truncate">
                              {title}
                            </p>
                            <p className="text-[10px] text-gray-400 truncate italic">
                              {secondary}
                            </p>
                          </div>
                        </div>

                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#602d92] group-hover:translate-x-1 transition-all shrink-0" />
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-400 text-xs">
                  {isSinhala ? 'සෙවුමට ගැළපෙන පාඩම් හමු නොවීය.' : 'No lessons matched your search.'}
                </div>
              )}
            </div>

            {/* Bottom quick action link */}
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span>
                {isSinhala ? `පාඩම් ${displayedLessons.length} ක් සූදානම්` : `${displayedLessons.length} lessons available`}
              </span>
              <a
                href="#units"
                onClick={() => setLessonsBarOpen(false)}
                className="font-bold text-[#602d92] hover:underline flex items-center gap-1"
              >
                <span>{isSinhala ? 'සියලු පාඩම් පිටුවේ පහළින් බලන්න' : 'View full cards below'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pt-4 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2">
          <Link 
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#602d92] font-bold py-2 hover:bg-purple-50 rounded-xl text-center" 
          >
            Home
          </Link>

          {/* Lessons Expandable Button on Mobile */}
          <button
            onClick={() => {
              setLessonsBarOpen(!lessonsBarOpen);
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-center gap-2 text-white bg-[#602d92] font-bold py-2.5 rounded-xl shadow-xs text-xs"
          >
            <Layers className="w-4 h-4" />
            <span>{isSinhala ? 'සියලුම පාඩම් ලැයිස්තුව (Lessons)' : 'Open Lessons Bar'}</span>
          </button>

          <a 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 font-semibold py-2 hover:bg-purple-50 hover:text-[#602d92] rounded-xl text-center" 
            href="#teachers"
          >
            Teachers
          </a>
          <a 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 font-semibold py-2 hover:bg-purple-50 hover:text-[#602d92] rounded-xl text-center" 
            href="#timetable"
          >
            Timetable
          </a>
          <a 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 font-semibold py-2 hover:bg-purple-50 hover:text-[#602d92] rounded-xl text-center" 
            href="#features"
          >
            Features
          </a>
          <a 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 font-semibold py-2 hover:bg-purple-50 hover:text-[#602d92] rounded-xl text-center" 
            href="#faq"
          >
            FAQ
          </a>
          
          {onOpenUpload && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenUpload();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-purple-50 text-[#602d92] font-bold text-xs border border-purple-200"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isSinhala ? 'AI ප්‍රශ්න පත්‍ර ඇතුළත් කිරීම' : 'AI Question Ingestion'}</span>
            </button>
          )}

          <div className="pt-2">
            <a
              href="https://ol.lk/learn"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2.5 rounded-xl bg-[#602d92] text-white font-bold text-xs shadow-md text-center"
            >
              Login to OL.LK
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
