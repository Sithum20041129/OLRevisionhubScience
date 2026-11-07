import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  CheckCircle, 
  AlertTriangle, 
  Layers, 
  ZoomIn, 
  Info,
  Maximize2,
  X,
  Languages
} from 'lucide-react';
import { getUnitRevisionData } from '../data/subtopicNotes';
import FormattedContent, { InlineText } from './FormattedContent';

export default function UnitRevisionNotes({ revisionData, isSinhala: initialIsSinhala, onOpenSubtopicModal }) {
  // Allow toggling medium directly within the revision guide
  const [overrideMedium, setOverrideMedium] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const currentMedium = overrideMedium ?? (initialIsSinhala ? 'si' : 'en');

  const unitId = revisionData?.unitId || 'g11-u15';
  const isSi = currentMedium === 'si';
  const data = getUnitRevisionData(unitId, isSi) || revisionData;

  const [activeTabId, setActiveTabId] = useState(data?.subtopics?.[0]?.id || '15.1');

  if (!data) return null;

  const activeSubtopic = data.subtopics.find((s) => s.id === activeTabId) || data.subtopics[0];

  return (
    <section id="revision-guide" className="scroll-mt-28 space-y-8">
      {/* SECTION HEADER */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-sm relative overflow-hidden border border-slate-200">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 flex items-center gap-3">
              <span>
                {isSi
                  ? '15 වන ඒකකය - සම්පූර්ණ විෂය නිර්දේශ පුනරීක්ෂණ සටහන්'
                  : 'Complete Unit 15 Textbook Revision Guide'}
              </span>
              <span className="text-emerald-600 text-lg">🌱</span>
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {isSi ? data.overviewSi : data.overviewEn}
            </p>
          </div>

          {/* Medium Toggle Pill in Upper Right Corner */}
          <div className="inline-flex items-center gap-1 bg-slate-100 p-1.5 rounded-xl border border-slate-200 self-start sm:self-auto shrink-0 shadow-2xs">
            <Languages className="w-4 h-4 text-emerald-600 ml-1" />
            <button
              onClick={() => setOverrideMedium('en')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                !isSi ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setOverrideMedium('si')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                isSi ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              සිංහල
            </button>
          </div>
        </div>

        {/* HIGH YIELD SUMMARY ACCORDION / HIGHLIGHTS */}
        <div className="mt-6 pt-6 border-t border-slate-100">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>
              {isSi
                ? 'විභාග ඉලක්කගත මූලික විෂය කරුණු (පෙළපොත ඇසුරෙන්)'
                : 'Core Curriculum Pillars (Strictly Bounded to Textbook)'}
            </span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {data.summaryPoints.slice(0, 6).map((point, idx) => (
              <div key={idx} className="bg-slate-50 hover:bg-emerald-50/40 transition-colors rounded-xl p-3.5 border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-700 shadow-2xs">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-snug"><InlineText text={point} /></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SUBTOPICS NAVIGATION TABS */}
      <div className="bg-white rounded-2xl p-2 shadow-xs border border-slate-200">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
          {data.subtopics.map((subtopic) => {
            const isActive = subtopic.id === activeTabId;
            return (
              <button
                key={subtopic.id}
                onClick={() => setActiveTabId(subtopic.id)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl font-bold text-xs whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/60'
                }`}
              >
                <span className={`px-2 py-0.5 rounded-md text-[11px] font-extrabold ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  {subtopic.id}
                </span>
                <span>{isSi ? subtopic.titleSi : subtopic.titleEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ACTIVE SUBTOPIC REVISION CARD */}
      {activeSubtopic && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
          
          {/* HEADER BAR */}
          <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-50 to-white flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                {isSi ? activeSubtopic.titleSi : activeSubtopic.titleEn}
              </h3>
              <p className="text-sm text-slate-500 italic mt-0.5 font-medium">
                {isSi ? activeSubtopic.titleEn : activeSubtopic.titleSi}
              </p>
            </div>

            <button
              onClick={() => onOpenSubtopicModal && onOpenSubtopicModal(activeSubtopic)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-50 hover:bg-[#602d92] text-[#602d92] hover:text-white font-bold text-xs border border-purple-200 transition-all cursor-pointer shadow-xs self-start md:self-auto"
            >
              <Maximize2 className="w-4 h-4" />
              <span>{isSi ? 'සම්පූර්ණ තිරයෙන් කියවන්න' : 'Open Reader Modal'}</span>
            </button>
          </div>

          {/* KEY TAKEAWAYS */}
          <div className="p-6 sm:p-8 bg-emerald-50/40">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>
                {isSi
                  ? 'මූලික මතක සටහන් සහ විභාග කරුණු'
                  : 'Subtopic Key Takeaways & Essential Concepts'}
              </span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activeSubtopic.keyTakeaways.map((takeaway, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-emerald-100 shadow-xs text-xs sm:text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 text-[11px] font-bold mt-0.5">
                    {idx + 1}
                  </div>
                  <span className="leading-relaxed"><InlineText text={takeaway} /></span>
                </div>
              ))}
            </div>
          </div>

          {/* DEFINITIONS GLOSSARY */}
          {activeSubtopic.keyDefinitions && activeSubtopic.keyDefinitions.length > 0 && (
            <div className="p-6 sm:p-8">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-indigo-900 flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-indigo-600" />
                <span>
                  {isSi
                    ? 'විභාගයට වැදගත් නිල පෙළපොත් අර්ථ දැක්වීම්'
                    : 'Textbook Definitions for O/L Exam'}
                </span>
              </h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {activeSubtopic.keyDefinitions.map((def, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 hover:border-indigo-300 transition-colors">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-sm text-indigo-950">{def.term}</span>
                      <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">
                        {isSi ? 'අර්ථ දැක්වීම' : 'Definition'}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      <InlineText text={def.definition} />
                    </div>
                    {def.examTips && (
                      <p className="text-[11px] text-amber-800 bg-amber-50 rounded-lg p-2 mt-2 border border-amber-200/60 flex items-start gap-1.5">
                        <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600" />
                        <span><strong>{isSi ? 'විභාග උපදෙස:' : 'Exam Tip:'}</strong> <InlineText text={def.examTips} /></span>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* THEORY SECTIONS & EMBEDDED DIAGRAMS */}
          <div className="p-6 sm:p-8 space-y-8">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-600" />
              <span>
                {isSi
                  ? 'විෂය නිර්දේශ සිද්ධාන්ත සහ පෙළපොත් රූප සටහන්'
                  : 'Detailed Syllabus Theory & Textbook Diagrams'}
              </span>
            </h4>

            {activeSubtopic.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h5 className="text-lg font-bold text-slate-900 border-l-4 border-emerald-500 pl-3 leading-tight">
                  {section.heading}
                </h5>

                <FormattedContent text={section.content} />

                {/* DIAGRAM EMBED */}
                {section.diagramUrl && (
                  <div className="mt-4 bg-slate-900 rounded-2xl p-3 border border-slate-800 overflow-hidden shadow-md">
                    <div className="relative group cursor-pointer" onClick={() => setSelectedImage({ url: section.diagramUrl, caption: section.diagramCaption })}>
                      <img
                        src={section.diagramUrl}
                        alt={section.diagramCaption || "Textbook diagram"}
                        className="w-full max-h-96 object-contain rounded-xl mx-auto bg-white/95 transition-transform duration-200 group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center gap-2 text-white font-bold text-xs">
                        <ZoomIn className="w-5 h-5" />
                        <span>{isSi ? 'විශාල කර බැලීමට ක්ලික් කරන්න' : 'Click to Enlarge Full-Screen'}</span>
                      </div>
                    </div>
                    {section.diagramCaption && (
                      <p className="text-xs text-slate-300 text-center mt-2.5 font-medium px-2 italic">
                        {section.diagramCaption}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* EXAM PITFALLS */}
          {activeSubtopic.examPitfalls && activeSubtopic.examPitfalls.length > 0 && (
            <div className="p-6 sm:p-8 bg-amber-50/50">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-900 flex items-center gap-2 mb-4">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>
                  {isSi
                    ? 'විභාගයේදී සිදුවන පොදු වැරදි සහ නොමඟ යවන ප්‍රශ්න'
                    : 'Common O/L Exam Pitfalls & Misconceptions'}
                </span>
              </h4>
              <div className="space-y-3">
                {activeSubtopic.examPitfalls.map((pitfall, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-4 border border-amber-200 shadow-xs space-y-2">
                    <div className="flex items-start gap-2 text-rose-700 text-xs sm:text-sm">
                      <span className="font-black text-rose-600 uppercase text-[11px] shrink-0 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                        {isSi ? 'පොදු වැරැද්ද ❌' : 'Common Mistake ❌'}
                      </span>
                      <span><InlineText text={pitfall.trap} /></span>
                    </div>
                    <div className="flex items-start gap-2 text-emerald-800 text-xs sm:text-sm font-medium">
                      <span className="font-black text-emerald-600 uppercase text-[11px] shrink-0 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {isSi ? 'පෙළපොතේ නිවැරදි කරුණ ✔' : 'Textbook Correct ✔'}
                      </span>
                      <span><InlineText text={pitfall.correct} /></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}

      {/* FULL-SCREEN IMAGE MODAL LIGHTBOX */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full cursor-pointer transition"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.caption}
              className="max-h-[80vh] w-auto max-w-full object-contain rounded-2xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            {selectedImage.caption && (
              <p className="text-sm text-slate-200 mt-4 text-center max-w-2xl font-medium bg-black/60 px-4 py-2 rounded-xl border border-white/10">
                {selectedImage.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
