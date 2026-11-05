import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/useLanguage';
import { unitsData, getUnitById } from '../data/unitsData';
import { 
  ArrowLeft, 
  BookOpen, 
  FileText, 
  HelpCircle, 
  Download, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft,
  GraduationCap, 
  Share2,
  Check,
  AlertCircle
} from 'lucide-react';

export default function UnitPage({ onOpenQuiz }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const isSinhala = language === 'si';

  // Selected subtopic for note reading modal
  const [activeSubtopic, setActiveSubtopic] = useState(null);
  const [downloadSuccess, setDownloadSuccess] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Retrieve current unit
  const currentUnit = getUnitById(id) || unitsData[0];

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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      
      {/* TOP NAVIGATION BREADCRUMB BAR */}
      <div className="bg-white border-b border-slate-200 sticky top-16 sm:top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          
          <div className="flex items-center gap-2 sm:gap-4 overflow-hidden">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#602d92] hover:text-indigo-800 transition py-1.5 px-3 rounded-lg hover:bg-purple-50 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{isSinhala ? 'සියලු පාඩම් වෙත' : 'All Lessons'}</span>
            </button>

            <span className="text-slate-300">/</span>

            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 truncate">
              <span className="font-semibold text-slate-700">
                {isSinhala ? `${currentUnit.grade} ශ්‍රේණිය` : `Grade ${currentUnit.grade}`}
              </span>
              <span>•</span>
              <span className="truncate font-medium text-slate-600">
                {isSinhala ? `පාඩම 0${currentUnit.unitNumber}` : `Unit 0${currentUnit.unitNumber}`}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              title="Share lesson link"
              className="p-2 rounded-lg text-slate-500 hover:text-[#602d92] hover:bg-purple-50 transition cursor-pointer text-xs flex items-center gap-1 font-semibold"
            >
              {copiedLink ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-600 hidden sm:inline">{isSinhala ? 'පිටපත් කළා' : 'Copied'}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span className="hidden sm:inline">{isSinhala ? 'බෙදාගන්න' : 'Share'}</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* UNIT HERO BANNER */}
      <section className={`bg-gradient-to-br ${theme.bannerBg} text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden shadow-lg`}>
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg bg-white/15 border border-white/25 backdrop-blur-md">
              {isSinhala ? `10 ශ්‍රේණිය විද්‍යාව - 1 වන කොටස` : `Grade 10 Science - Part 1`}
            </span>
            <span className={`text-xs font-bold px-3 py-1 rounded-lg border backdrop-blur-md flex items-center gap-1.5 ${theme.pillBg}`}>
              <span>{theme.icon}</span>
              <span>{theme.label}</span>
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-black/30 border border-white/10 text-slate-300">
              {isSinhala ? `පාඩම් අංකය: 0${currentUnit.unitNumber}` : `Unit: 0${currentUnit.unitNumber}`}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-4xl">
            {isSinhala ? currentUnit.titleSi : currentUnit.titleEn}
          </h1>

          <p className="text-sm sm:text-lg text-slate-300 italic mt-2 font-medium">
            {isSinhala ? currentUnit.titleEn : currentUnit.titleSi}
          </p>

          <p className="text-sm sm:text-base text-slate-200 mt-4 max-w-3xl leading-relaxed">
            {isSinhala ? currentUnit.descriptionSi : currentUnit.descriptionEn}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-white/15 max-w-3xl">
            <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-3.5">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold mb-1">
                <BookOpen className="w-4 h-4" />
                <span>{isSinhala ? 'අනුමාතෘකා' : 'Subtopics'}</span>
              </div>
              <p className="text-xl sm:text-2xl font-black text-white">
                {currentUnit.subtopics?.length || 0}
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-3.5">
              <div className="flex items-center gap-2 text-purple-300 text-xs font-bold mb-1">
                <HelpCircle className="w-4 h-4" />
                <span>{isSinhala ? 'ප්‍රශ්නාවලි ගැටලු' : 'Practice MCQs'}</span>
              </div>
              <p className="text-xl sm:text-2xl font-black text-white">
                {currentUnit.totalQuestions || 20}+
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-3.5">
              <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold mb-1">
                <FileText className="w-4 h-4" />
                <span>{isSinhala ? 'පසුගිය ප්‍රශ්න පත්‍ර' : 'Past Papers'}</span>
              </div>
              <p className="text-xl sm:text-2xl font-black text-white">
                {currentUnit.pastPapers?.length || 2}
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-3.5">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold mb-1">
                <GraduationCap className="w-4 h-4" />
                <span>{isSinhala ? 'විභාග මට්ටම' : 'Exam Level'}</span>
              </div>
              <p className="text-sm sm:text-base font-bold text-white mt-1">
                G.C.E. O/L Core
              </p>
            </div>
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-purple-100 text-[#602d92] flex items-center justify-center font-bold">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {isSinhala ? 'විෂය අනුමාතෘකා හා පුනරීක්ෂණ සටහන්' : 'Unit Subtopics & Revision Topics'}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {isSinhala 
                  ? 'පෙළපොතේ අන්තර්ගතය අනුව එක් එක් අනුමාතෘකාවට අදාළ විෂය කරුණු මෙතැනින් අධ්‍යයනය කරන්න.' 
                  : 'Master each syllabus subtopic step-by-step according to the Grade 10 Science curriculum.'}
              </p>
            </div>

            <span className="text-xs font-bold text-[#602d92] bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-xl self-start sm:self-auto">
              {currentUnit.subtopics?.length || 0} {isSinhala ? 'අනුමාතෘකා' : 'Subtopics'}
            </span>
          </div>

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
                    onClick={() => setActiveSubtopic(subtopic)}
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
        {/* SECTION 2: INTERACTIVE PRACTICE & QUIZ AREA (ඒකක ප්‍රශ්නාවලිය) */}
        {/* ============================================================== */}
        <section id="quiz-area" className="scroll-mt-28">
          <div className="bg-gradient-to-br from-indigo-950 via-[#602d92] to-purple-950 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg bg-white/20 text-cyan-300 border border-white/25">
                    {isSinhala ? 'ස්වයං ඇගයීම' : 'Self Assessment'}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-black/30 border border-white/15 text-slate-300">
                    {isSinhala ? 'සා/පෙළ බහුවරණ හා ව්‍යුහගත' : 'MCQ & Structured Questions'}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
                  {isSinhala ? `${currentUnit.titleSi} - ඒකක ප්‍රශ්නාවලිය` : `${currentUnit.titleEn} - Unit Practice Quiz`}
                </h2>

                <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
                  {isSinhala
                    ? 'මෙම පාඩමට අදාළ සියලුම පසුගිය විභාග සහ පළාත් ප්‍රශ්න පත්‍ර ඇසුරෙන් සකස් කළ ප්‍රශ්නාවලියට මුහුණ දී ඔබේ ලකුණු මට්ටම ක්ෂණිකව පරීක්ෂා කරගන්න.'
                    : 'Test your knowledge on this unit with exam-standard questions curated from past papers. Instant explanations and score analysis.'}
                </p>

                {/* Quiz parameters */}
                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-200 font-semibold">
                  <div className="flex items-center gap-1.5 bg-black/30 px-3 py-1.5 rounded-xl border border-white/10">
                    <HelpCircle className="w-4 h-4 text-cyan-400" />
                    <span>{currentUnit.totalQuestions || 20} {isSinhala ? 'ප්‍රශ්න' : 'Questions'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/30 px-3 py-1.5 rounded-xl border border-white/10">
                    <Clock className="w-4 h-4 text-purple-300" />
                    <span>{currentUnit.quizInfo?.durationMinutes || 25} {isSinhala ? 'මිනිත්තු' : 'Minutes'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/30 px-3 py-1.5 rounded-xl border border-white/10">
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>{isSinhala ? 'මට්ටම: මධ්‍යම' : 'Difficulty: Medium to Advanced'}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center lg:items-end">
                <button
                  onClick={() => onOpenQuiz(currentUnit)}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-slate-100 text-[#602d92] font-black text-sm sm:text-base shadow-xl flex items-center justify-center gap-3 transform hover:-translate-y-0.5 active:translate-y-0 transition cursor-pointer"
                >
                  <Sparkles className="w-5 h-5 text-[#602d92]" />
                  <span>{isSinhala ? 'ප්‍රශ්නාවලිය අරඹන්න' : 'Start Unit Quiz'}</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <p className="text-[11px] text-slate-300 mt-2.5 text-center lg:text-right">
                  {isSinhala ? '100% නොමිලේ • පිළිතුරු විවරණ සහිතයි' : '100% Free • With Full Step-by-Step Explanations'}
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 3: PAST PAPERS AREA (පසුගිය විභාග ප්‍රශ්න පත්‍ර) */}
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
        {/* SECTION 4: SEQUENTIAL NAVIGATION BAR (ඊළඟ / පෙර පාඩම) */}
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

      {/* SUBTOPIC NOTE PREVIEW MODAL */}
      {activeSubtopic && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
            
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-[#602d92] text-white">
                {activeSubtopic.id}
              </span>
              <button
                onClick={() => setActiveSubtopic(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <h3 className="text-xl font-black text-slate-900 leading-snug">
              {isSinhala ? activeSubtopic.titleSi : activeSubtopic.titleEn}
            </h3>

            <p className="text-xs text-slate-500 italic mt-0.5">
              {isSinhala ? activeSubtopic.titleEn : activeSubtopic.titleSi}
            </p>

            <div className="mt-4 p-4 rounded-2xl bg-purple-50/70 border border-purple-100 text-slate-700 text-sm leading-relaxed">
              <p className="font-semibold text-[#602d92] text-xs mb-1 uppercase tracking-wider">
                {isSinhala ? 'විෂය කරුණු සාරාංශය' : 'Subtopic Summary'}
              </p>
              <p>{isSinhala ? activeSubtopic.descriptionSi : activeSubtopic.descriptionEn}</p>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-slate-600 leading-relaxed">
                {isSinhala
                  ? 'සම්පූර්ණ විභාග සටහන් සහ අභ්‍යාස ඉක්මනින් එකතු කෙරේ.'
                  : 'Full detailed notes, diagrams, and textbook exercises are currently being compiled.'}
              </p>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => setActiveSubtopic(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-[#602d92] transition cursor-pointer"
              >
                {isSinhala ? 'වසන්න' : 'Close'}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
