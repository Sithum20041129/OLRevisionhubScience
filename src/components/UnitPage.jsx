import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/useLanguage';
import { unitsData, getUnitById } from '../data/unitsData';
import { getUnitRevisionData, getSubtopicNote } from '../data/subtopicNotes';
import UnitRevisionNotes from './UnitRevisionNotes';
import FormattedContent, { InlineText } from './FormattedContent';
import {
  BookOpen,
  FileText,
  HelpCircle,
  Download,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Share2,
  Check,
  AlertCircle,
  Layers,
  ZoomIn,
  X
} from 'lucide-react';

export default function UnitPage({ onOpenQuiz, onOpenFlashcards }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const isSinhala = language === 'si';

  // Selected subtopic for note reading modal
  const [activeSubtopic, setActiveSubtopic] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [downloadSuccess, setDownloadSuccess] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeRevisionTabId, setActiveRevisionTabId] = useState('15.1');

  // Retrieve current unit
  const currentUnit = getUnitById(id) || unitsData[0];
  const unitRevisionData = getUnitRevisionData(currentUnit.id, isSinhala);
  const detailedNote = activeSubtopic ? getSubtopicNote(currentUnit.id, activeSubtopic.id, isSinhala) : null;

  // Handle clicking Revise Notes on a subtopic card: switches tab and smooth-scrolls to the revision notes
  const handleReviseSubtopic = (subtopic) => {
    if (unitRevisionData) {
      setActiveRevisionTabId(subtopic.id);
      setTimeout(() => {
        const targetEl = document.getElementById('subtopic-nav-bar') || document.getElementById('subtopic-revision-card') || document.getElementById('revision-guide');
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    } else {
      setActiveSubtopic(subtopic);
    }
  };

  // Syllabus part determination (Grade 11 Units 9-15 are Part 2)
  const isPart2 = (currentUnit.grade === 11 && currentUnit.unitNumber >= 9) || (currentUnit.grade === 10 && currentUnit.unitNumber > 10);
  const partLabel = isPart2
    ? (isSinhala ? `${currentUnit.grade} ශ්‍රේණිය විද්‍යාව - 2 වන කොටස` : `Grade ${currentUnit.grade} Science - Part 2`)
    : (isSinhala ? `${currentUnit.grade} ශ්‍රේණිය විද්‍යාව - 1 වන කොටස` : `Grade ${currentUnit.grade} Science - Part 1`);

  // Scroll to top when unit changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  // Determine previous and next units for sequential navigation
  const currentIndex = unitsData.findIndex((u) => u.id === currentUnit.id);
  const prevUnit = currentIndex > 0 ? unitsData[currentIndex - 1] : null;
  const nextUnit = currentIndex < unitsData.length - 1 ? unitsData[currentIndex + 1] : null;

  // Category visual themes
  const categoryThemes = {
    biology: {
      label: t.biology || 'Biology',
      icon: '🌱',
      badge: 'bg-emerald-50 text-emerald-800 border-emerald-300',
      bannerBg: 'from-emerald-900 via-teal-900 to-slate-950',
      borderAccent: 'border-emerald-500/30',
      pillBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30',
      btnAccent: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      cardHover: 'hover:border-emerald-300'
    },
    chemistry: {
      label: t.chemistry || 'Chemistry',
      icon: '🧪',
      badge: 'bg-amber-50 text-amber-800 border-amber-300',
      bannerBg: 'from-amber-950 via-purple-950 to-slate-950',
      borderAccent: 'border-amber-500/30',
      pillBg: 'bg-amber-500/20 text-amber-300 border-amber-400/30',
      btnAccent: 'bg-amber-600 hover:bg-amber-700 text-white',
      cardHover: 'hover:border-amber-300'
    },
    physics: {
      label: t.physics || 'Physics',
      icon: '⚡',
      badge: 'bg-purple-50 text-[#602d92] border-purple-300',
      bannerBg: 'from-slate-950 via-indigo-950 to-[#602d92]/80',
      borderAccent: 'border-purple-500/30',
      pillBg: 'bg-purple-500/20 text-purple-200 border-purple-400/30',
      btnAccent: 'bg-[#602d92] hover:bg-purple-900 text-white',
      cardHover: 'hover:border-purple-300'
    }
  };

  const theme = categoryThemes[currentUnit.category] || categoryThemes.physics;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleSimulateDownload = (paperName) => {
    setDownloadSuccess(paperName);
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  const handleNavigateUnit = (targetId) => {
    setActiveSubtopic(null);
    navigate(`/unit/${targetId}`);
  };

  // Smooth scroll to a target section on the page
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const heroBgImage = currentUnit.heroBannerImage || (currentUnit.id === 'g11-u15' ? '/images/hero-biosphere-banner.png' : null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">

      {/* UNIT HERO BANNER & UNIT DETAILS SECTION */}
      <section className="bg-slate-100 text-slate-900 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-200 shadow-xs">
        {/* Background Image - High Visibility */}
        {heroBgImage && (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
            style={{ backgroundImage: `url(${heroBgImage})` }}
          >
            {/* Minimal overlay: change opacity (e.g. bg-white/10 or delete this div) to adjust brightness */}
            <div className="absolute inset-0 bg-white/10" />
          </div>
        )}

        <div className="max-w-7xl mx-auto relative z-10">

          {/* TOP ROW: BADGES & NAVIGATION ACTION BUTTONS */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/30">

            {/* Left: Syllabus Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl bg-white/30 backdrop-blur-md border border-white/30 text-slate-800 shadow-2xs">
                {partLabel}
              </span>
              <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white/30 backdrop-blur-md border border-white/30 text-slate-800 shadow-2xs flex items-center gap-1.5">
                <span>{theme.icon}</span>
                <span>{theme.label}</span>
              </span>
              <span className="text-xs font-semibold px-2.5 py-1.5 rounded-xl bg-white/30 backdrop-blur-md border border-white/30 text-slate-700 shadow-2xs">
                {isSinhala ? `පාඩම ${String(currentUnit.unitNumber).padStart(2, '0')}` : `Unit ${String(currentUnit.unitNumber).padStart(2, '0')}`}
              </span>
            </div>

            {/* Right: Quick Action Buttons (All Topics, Previous Lesson, Next Lesson, Share) */}
            <div className="flex flex-wrap items-center gap-2">

              {/* All Topics / All Lessons Button */}
              <button
                type="button"
                onClick={() => navigate('/')}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/30 hover:bg-white/50 backdrop-blur-md border border-white/30 text-slate-800 text-xs font-bold transition-all duration-200 cursor-pointer shadow-2xs group"
                title={isSinhala ? 'සියලුම පාඩම් වෙත යන්න' : 'View All Topics / Lessons'}
              >
                <Layers className="w-4 h-4 text-slate-600 group-hover:scale-110 group-hover:text-slate-900 transition-transform" />
                <span>{isSinhala ? 'සියලු පාඩම්' : 'All Topics'}</span>
              </button>

              {/* Previous Lesson Button */}
              <button
                type="button"
                disabled={!prevUnit}
                onClick={() => prevUnit && handleNavigateUnit(prevUnit.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all duration-200 border ${prevUnit
                  ? 'bg-white/30 hover:bg-white/50 backdrop-blur-md text-slate-800 border-white/30 cursor-pointer shadow-2xs'
                  : 'bg-white/10 text-slate-400 border-white/20 cursor-not-allowed opacity-50'
                  }`}
                title={prevUnit ? (isSinhala ? `පෙර පාඩම: ${prevUnit.titleSi}` : `Previous: ${prevUnit.titleEn}`) : undefined}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{isSinhala ? 'පෙර පාඩම' : 'Prev Lesson'}</span>
              </button>

              {/* Next Lesson Button */}
              <button
                type="button"
                disabled={!nextUnit}
                onClick={() => nextUnit && handleNavigateUnit(nextUnit.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all duration-200 border ${nextUnit
                  ? 'bg-white/30 hover:bg-white/50 backdrop-blur-md text-slate-800 border-white/30 cursor-pointer shadow-2xs'
                  : 'bg-white/10 text-slate-400 border-white/20 cursor-not-allowed opacity-50'
                  }`}
                title={nextUnit ? (isSinhala ? `ඊළඟ පාඩම: ${nextUnit.titleSi}` : `Next: ${nextUnit.titleEn}`) : undefined}
              >
                <span>{isSinhala ? 'ඊළඟ පාඩම' : 'Next Lesson'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Share Button */}
              <button
                type="button"
                onClick={handleCopyLink}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/30 hover:bg-white/50 backdrop-blur-md border border-white/30 text-slate-800 text-xs font-bold transition-all duration-200 cursor-pointer shadow-2xs"
                title="Share lesson link"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">{isSinhala ? 'පිටපත් කළා!' : 'Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4 text-slate-600" />
                    <span>{isSinhala ? 'බෙදාගන්න' : 'Share'}</span>
                  </>
                )}
              </button>

            </div>

          </div>

          {/* UNIT TITLES & DESCRIPTION */}
          <div className="max-w-4xl bg-white/30 backdrop-blur-md p-6 sm:p-7 rounded-3xl border border-white/30 shadow-xs mt-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-900">
              {isSinhala ? currentUnit.titleSi : currentUnit.titleEn}
            </h1>

            <p className="text-sm sm:text-lg text-slate-600 italic mt-2 font-semibold">
              {isSinhala ? currentUnit.titleEn : currentUnit.titleSi}
            </p>

            <p className="text-sm sm:text-base text-slate-700 mt-4 leading-relaxed font-normal">
              {isSinhala ? currentUnit.descriptionSi : currentUnit.descriptionEn}
            </p>
          </div>

          {/* Quick Metrics Bar: Clickable Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8 pt-6 border-t border-white/30">

            {/* Practice MCQs Clickable Button */}
            <button
              type="button"
              onClick={() => onOpenQuiz && onOpenQuiz(currentUnit)}
              title={isSinhala ? 'ප්‍රශ්නාවලිය වහාම අරඹන්න' : 'Start Practice MCQs Quiz'}
              className="text-left bg-white/30 hover:bg-white/50 backdrop-blur-md border border-white/30 rounded-2xl px-6 py-4.5 transition-all duration-200 cursor-pointer group transform hover:-translate-y-0.5 active:translate-y-0 shadow-xs hover:shadow-md min-w-[210px] sm:min-w-[240px] flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-2.5 text-[#602d92] text-sm sm:text-base font-bold">
                <HelpCircle className="w-5 h-5 text-[#602d92]" />
                <span>{isSinhala ? 'ප්‍රශ්නාවලි ගැටලු' : 'Practice MCQs'}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-purple-700/70 group-hover:text-[#602d92] group-hover:translate-x-1 transition-all shrink-0" />
            </button>

            {/* Flashcards Clickable Button */}
            <button
              type="button"
              onClick={() => onOpenFlashcards && onOpenFlashcards(currentUnit)}
              title={isSinhala ? 'Flashcards පුහුණුව වහාම අරඹන්න' : 'Start Practice Flashcards'}
              className="text-left bg-white/30 hover:bg-white/50 backdrop-blur-md border border-white/30 rounded-2xl px-6 py-4.5 transition-all duration-200 cursor-pointer group transform hover:-translate-y-0.5 active:translate-y-0 shadow-xs hover:shadow-md min-w-[210px] sm:min-w-[240px] flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-2.5 text-blue-900 text-sm sm:text-base font-bold">
                <Layers className="w-5 h-5 text-blue-700" />
                <span>{isSinhala ? 'Flashcards පුහුණුව' : 'Practice Flashcards'}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-blue-700/70 group-hover:text-blue-900 group-hover:translate-x-1 transition-all shrink-0" />
            </button>

            {/* Past Papers Clickable Button */}
            <button
              type="button"
              onClick={() => scrollToSection('past-papers')}
              title={isSinhala ? 'පසුගිය ප්‍රශ්න පත්‍ර වෙත යන්න' : 'Jump to Past Papers'}
              className="text-left bg-white/30 hover:bg-white/50 backdrop-blur-md border border-white/30 rounded-2xl px-6 py-4.5 transition-all duration-200 cursor-pointer group transform hover:-translate-y-0.5 active:translate-y-0 shadow-xs hover:shadow-md min-w-[210px] sm:min-w-[240px] flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-2.5 text-emerald-800 text-sm sm:text-base font-bold">
                <FileText className="w-5 h-5 text-emerald-700" />
                <span>{isSinhala ? 'පසුගිය ප්‍රශ්න පත්‍ර' : 'Past Papers'}</span>
              </div>
              <ChevronDown className="w-4 h-4 text-emerald-700/70 group-hover:text-emerald-800 group-hover:translate-y-0.5 transition-all shrink-0" />
            </button>

          </div>

        </div>
      </section>

      {/* DOWNLOAD NOTIFICATION TOAST */}
      {downloadSuccess && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-700 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-emerald-500 flex items-center gap-3 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-emerald-200" />
          <div>
            <p className="text-xs font-bold">{isSinhala ? 'බාගත කිරීම සූදානම්!' : 'Download Initialized!'}</p>
            <p className="text-xs text-emerald-100">{downloadSuccess}</p>
          </div>
        </div>
      )}

      {/* MAIN BODY CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 flex-1 w-full">

        {/* ============================================================== */}
        {/* SECTION 1: SUBTOPICS REVISION AREA (පාඩම් අනුමාතෘකා) */}
        {/* ============================================================== */}
        <section id="subtopics" className="scroll-mt-28">
          {/* Subtopics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {currentUnit.subtopics && currentUnit.subtopics.map((subtopic) => (
              <div
                key={subtopic.id}
                className={`bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group ${theme.cardHover}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-extrabold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-[#602d92] group-hover:text-white transition-colors">
                      {subtopic.id}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{isSinhala ? 'විෂය නිර්දේශගතයි' : 'Syllabus Core'}</span>
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#602d92] transition-colors leading-snug">
                    {isSinhala ? subtopic.titleSi : subtopic.titleEn}
                  </h3>

                  <p className="text-xs text-slate-500 italic mt-0.5">
                    {isSinhala ? subtopic.titleEn : subtopic.titleSi}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {isSinhala ? subtopic.descriptionSi : subtopic.descriptionEn}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleReviseSubtopic(subtopic)}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-purple-50 hover:bg-[#602d92] text-[#602d92] hover:text-white font-bold text-xs flex items-center justify-center gap-2 border border-purple-200 hover:border-[#602d92] transition-all cursor-pointer group/btn"
                  >
                    <span>{isSinhala ? 'සටහන් කියවන්න' : 'Revise Notes'}</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION: TEXTBOOK REVISION GUIDE (පෙළපොත් පුනරීක්ෂණ සටහන්) */}
        {/* ============================================================== */}
        {unitRevisionData && (
          <UnitRevisionNotes
            revisionData={unitRevisionData}
            isSinhala={isSinhala}
            activeSubtopicId={activeRevisionTabId}
            onSubtopicChange={(tabId) => setActiveRevisionTabId(tabId)}
            onOpenSubtopicModal={(sub) => setActiveSubtopic(sub)}
          />
        )}

        {/* ============================================================== */}
        {/* SECTION 2: PAST PAPERS AREA (පසුගිය විභාග ප්‍රශ්න පත්‍ර) */}
        {/* ============================================================== */}
        <section id="past-papers" className="scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <FileText className="w-4 h-4" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {isSinhala ? 'පසුගිය විභාග සහ ඉලක්කගත ප්‍රශ්න පත්‍ර' : 'Target Past Papers & Model Papers'}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {isSinhala
                  ? 'මෙම පාඩමට අදාළ පසුගිය අ.පො.ස. සා/පෙළ විභාග ප්‍රශ්න සහ පළාත් ඉලක්කගත ප්‍රශ්න පත්‍ර මෙතැනින් බාගත කරන්න.'
                  : 'Download past G.C.E. O/L questions and provincial target exam sets categorized for this unit.'}
              </p>
            </div>

            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl self-start sm:self-auto">
              PDF Downloads
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {currentUnit.pastPapers && currentUnit.pastPapers.length > 0 ? (
              currentUnit.pastPapers.map((paper) => (
                <div
                  key={paper.id}
                  className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">
                        {paper.year} Exam
                      </span>
                      <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                        {paper.size}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {isSinhala ? paper.nameSi : paper.nameEn}
                    </h4>

                    <p className="text-xs text-slate-500 mt-2">
                      <span className="font-semibold text-slate-700">{isSinhala ? 'අඩංගු කොටස්: ' : 'Coverage: '}</span>
                      {paper.coverage}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold text-purple-700 bg-purple-50 px-2 py-1 rounded-md">
                      {paper.fileType} Format
                    </span>

                    <button
                      onClick={() => handleSimulateDownload(isSinhala ? paper.nameSi : paper.nameEn)}
                      className="flex items-center gap-1.5 py-2 px-3.5 rounded-xl bg-slate-900 hover:bg-[#602d92] text-white text-xs font-bold transition cursor-pointer shadow-2xs hover:shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{isSinhala ? 'බාගත කරන්න' : 'Download'}</span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full bg-white border border-dashed border-slate-300 rounded-2xl p-8 text-center text-slate-500">
                <FileText className="w-10 h-10 mx-auto text-slate-400 mb-2" />
                <p className="text-sm font-semibold">{isSinhala ? 'මෙම පාඩම සඳහා ප්‍රශ්න පත්‍ර කට්ටල සකස් වෙමින් පවතී.' : 'Target papers are being curated for this unit.'}</p>
                <p className="text-xs text-slate-400 mt-1">{isSinhala ? 'ඉක්මනින් බාගත කිරීමට හැකිවනු ඇත.' : 'Will be available for download shortly.'}</p>
              </div>
            )}
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 4: BOTTOM SEQUENTIAL NAVIGATION BAR (ඊළඟ / පෙර පාඩම) */}
        {/* ============================================================== */}
        <section className="pt-6 border-t border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Previous Unit Link */}
            {prevUnit ? (
              <button
                onClick={() => handleNavigateUnit(prevUnit.id)}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#602d92] hover:shadow-md transition text-left cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-50 group-hover:bg-[#602d92] text-[#602d92] group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0">
                  <ChevronLeft className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {isSinhala ? 'පෙර පාඩම' : 'Previous Lesson'}
                  </p>
                  <p className="text-sm font-bold text-slate-800 group-hover:text-[#602d92] transition-colors truncate">
                    {isSinhala ? prevUnit.titleSi : prevUnit.titleEn}
                  </p>
                </div>
              </button>
            ) : (
              <div className="hidden sm:block" />
            )}

            {/* Next Unit Link */}
            {nextUnit ? (
              <button
                onClick={() => handleNavigateUnit(nextUnit.id)}
                className="flex items-center justify-end gap-3 p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#602d92] hover:shadow-md transition text-right cursor-pointer group"
              >
                <div className="overflow-hidden">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {isSinhala ? 'ඊළඟ පාඩම' : 'Next Lesson'}
                  </p>
                  <p className="text-sm font-bold text-slate-800 group-hover:text-[#602d92] transition-colors truncate">
                    {isSinhala ? nextUnit.titleSi : nextUnit.titleEn}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 group-hover:bg-[#602d92] text-[#602d92] group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </button>
            ) : (
              <div className="hidden sm:block" />
            )}

          </div>
        </section>

      </main>

      {/* SUBTOPIC NOTE PREVIEW & REVISION MODAL */}
      {activeSubtopic && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className={`bg-white rounded-3xl w-full shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200 flex flex-col my-auto ${detailedNote ? 'max-w-4xl max-h-[90vh]' : 'max-w-lg p-6 sm:p-8'
            }`}>

            {/* MODAL HEADER */}
            <div className={`flex items-center justify-between border-b border-slate-100 ${detailedNote ? 'p-5 sm:p-6 bg-gradient-to-r from-slate-50 to-white' : 'mb-4 border-none p-0'
              }`}>
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-emerald-600 text-white">
                  {activeSubtopic.id}
                </span>
                {detailedNote && (
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                    {detailedNote.textbookSection}
                  </span>
                )}
              </div>

              {/* Top controls: Subtopic prev/next & close */}
              <div className="flex items-center gap-2">
                {currentUnit.subtopics && currentUnit.subtopics.length > 1 && (
                  <div className="flex items-center gap-1 border border-slate-200 rounded-xl p-0.5 bg-slate-50">
                    <button
                      onClick={() => {
                        const idx = currentUnit.subtopics.findIndex((s) => s.id === activeSubtopic.id);
                        if (idx > 0) setActiveSubtopic(currentUnit.subtopics[idx - 1]);
                      }}
                      disabled={currentUnit.subtopics.findIndex((s) => s.id === activeSubtopic.id) === 0}
                      className="p-1.5 rounded-lg hover:bg-white text-slate-600 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer disabled:cursor-not-allowed transition"
                      title="Previous Subtopic"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-[11px] font-bold text-slate-500 px-1">
                      {currentUnit.subtopics.findIndex((s) => s.id === activeSubtopic.id) + 1} / {currentUnit.subtopics.length}
                    </span>
                    <button
                      onClick={() => {
                        const idx = currentUnit.subtopics.findIndex((s) => s.id === activeSubtopic.id);
                        if (idx < currentUnit.subtopics.length - 1) setActiveSubtopic(currentUnit.subtopics[idx + 1]);
                      }}
                      disabled={currentUnit.subtopics.findIndex((s) => s.id === activeSubtopic.id) === currentUnit.subtopics.length - 1}
                      className="p-1.5 rounded-lg hover:bg-white text-slate-600 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer disabled:cursor-not-allowed transition"
                      title="Next Subtopic"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                <button
                  onClick={() => setActiveSubtopic(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer font-bold text-sm"
                  title="Close"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* DETAILED REVISION CONTENT (If available) */}
            {detailedNote ? (
              <div className="overflow-y-auto p-5 sm:p-7 space-y-6 flex-1">

                {/* Subtopic Title Banner */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                    {isSinhala ? detailedNote.titleSi : detailedNote.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 italic mt-0.5 font-medium">
                    {isSinhala ? detailedNote.titleEn : detailedNote.titleSi}
                  </p>
                </div>

                {/* Key Takeaways */}
                <div className="bg-emerald-50/60 rounded-2xl p-4 border border-emerald-100 space-y-2">
                  <p className="text-xs font-black uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isSinhala ? 'මූලික මතක සටහන් (NIE විෂය නිර්දේශය)' : 'Core Revision Points (NIE Syllabus)'}</span>
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    {detailedNote.keyTakeaways.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span><InlineText text={point} /></span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Definitions */}
                {detailedNote.keyDefinitions && detailedNote.keyDefinitions.length > 0 && (
                  <div className="space-y-3">
                    <p className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{isSinhala ? 'ප්‍රධාන අර්ථ දැක්වීම්' : 'Key definitions'}</span>
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {detailedNote.keyDefinitions.map((def, dIdx) => (
                        <div key={dIdx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                          <p className="font-bold text-slate-900 text-xs mb-1 text-indigo-950">{def.term}</p>
                          <div className="leading-relaxed"><InlineText text={def.definition} /></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Theory Sections & Diagrams */}
                <div className="space-y-6 pt-2">
                  <p className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isSinhala ? 'විෂය නිර්දේශ සිද්ධාන්ත සහ නිල රූප සටහන්' : 'Detailed Theory & Official Diagrams'}</span>
                  </p>

                  {detailedNote.sections.map((sec, sIdx) => (
                    <div key={sIdx} className="space-y-3">
                      <h4 className="text-base font-bold text-slate-900 border-l-3 border-emerald-500 pl-2.5">
                        {sec.heading}
                      </h4>
                      <FormattedContent text={sec.content} />
                      {sec.diagramUrl && (
                        <div className="bg-slate-900 rounded-xl p-2.5 border border-slate-800 mt-2 shadow-sm">
                          <div
                            className="relative group cursor-pointer"
                            onClick={() => setModalImage({ url: sec.diagramUrl, caption: sec.diagramCaption })}
                          >
                            <img
                              src={sec.diagramUrl}
                              alt={sec.diagramCaption || "Textbook diagram"}
                              className="w-full max-h-72 object-contain rounded-lg mx-auto bg-white/95 transition-transform group-hover:scale-[1.01]"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-1.5 text-white font-bold text-xs">
                              <ZoomIn className="w-4 h-4" />
                              <span>{isSinhala ? 'විශාල කර බැලීමට ක්ලික් කරන්න' : 'Click to Zoom'}</span>
                            </div>
                          </div>
                          {sec.diagramCaption && (
                            <p className="text-[11px] text-slate-300 text-center mt-2 italic px-2">
                              {sec.diagramCaption}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            ) : (
              /* Standard fallback summary for other units */
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-black text-slate-900 leading-snug">
                    {isSinhala ? activeSubtopic.titleSi : activeSubtopic.titleEn}
                  </h3>
                  <p className="text-xs text-slate-500 italic mt-0.5">
                    {isSinhala ? activeSubtopic.titleEn : activeSubtopic.titleSi}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100 text-slate-700 text-sm leading-relaxed">
                  <p className="font-semibold text-[#602d92] text-xs mb-1 uppercase tracking-wider">
                    {isSinhala ? 'විෂය කරුණු සාරාංශය' : 'Subtopic Summary'}
                  </p>
                  <p>{isSinhala ? activeSubtopic.descriptionSi : activeSubtopic.descriptionEn}</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isSinhala
                      ? 'සම්පූර්ණ විභාග සටහන් සහ අභ්‍යාස ඉක්මනින් එකතු කෙරේ.'
                      : 'Full detailed notes, diagrams, and textbook exercises are currently being compiled.'}
                  </p>
                </div>
              </div>
            )}

            {/* MODAL FOOTER */}
            <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50/80 rounded-b-3xl flex items-center justify-between gap-3">
              <span className="text-xs text-slate-500 font-medium">
                {isSinhala ? 'ජාතික අධ්‍යාපන ආයතන (NIE) විද්‍යාව විෂය නිර්දේශය ඇසුරෙන්' : 'Strictly bounded to NIE Science Syllabus'}
              </span>
              <button
                onClick={() => setActiveSubtopic(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-emerald-700 transition cursor-pointer"
              >
                {isSinhala ? 'වසන්න' : 'Done Reading'}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* LIGHTBOX FOR MODAL IMAGES */}
      {modalImage && (
        <div
          className="fixed inset-0 z-60 bg-black/90 flex flex-col items-center justify-center p-4"
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-4xl w-full flex flex-col items-center">
            <button
              onClick={() => setModalImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-slate-300 p-1 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={modalImage.url}
              alt={modalImage.caption}
              className="max-h-[80vh] w-auto max-w-full object-contain rounded-xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            {modalImage.caption && (
              <p className="text-xs text-slate-200 mt-3 text-center bg-black/70 px-4 py-1.5 rounded-lg border border-white/10">
                {modalImage.caption}
              </p>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
