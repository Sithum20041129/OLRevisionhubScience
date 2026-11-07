import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Layers, 
  ZoomIn, 
  Maximize2,
  X,
  Languages,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { getUnitRevisionData } from '../data/subtopicNotes';
import FormattedContent, { InlineText } from './FormattedContent';

export default function UnitRevisionNotes({ 
  revisionData, 
  isSinhala: initialIsSinhala, 
  onOpenSubtopicModal,
  activeSubtopicId,
  onSubtopicChange
}) {
  // Allow toggling medium directly within the revision guide
  const [overrideMedium, setOverrideMedium] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const currentMedium = overrideMedium ?? (initialIsSinhala ? 'si' : 'en');

  const unitId = revisionData?.unitId || 'g11-u15';
  const isSi = currentMedium === 'si';
  const data = getUnitRevisionData(unitId, isSi) || revisionData;

  const [internalTabId, setInternalTabId] = useState(null);
  const activeTabId = activeSubtopicId ?? internalTabId ?? data?.subtopics?.[0]?.id ?? '15.1';

  const handleTabChange = (tabId) => {
    setInternalTabId(tabId);
    if (onSubtopicChange) onSubtopicChange(tabId);
  };

  if (!data) return null;

  const activeSubtopic = data.subtopics.find((s) => s.id === activeTabId) || data.subtopics[0];
  const currentIndex = data.subtopics.findIndex((s) => s.id === activeSubtopic.id);
  const prevSubtopic = currentIndex > 0 ? data.subtopics[currentIndex - 1] : null;
  const nextSubtopic = currentIndex < data.subtopics.length - 1 ? data.subtopics[currentIndex + 1] : null;

  const handlePrevSubtopic = () => {
    if (prevSubtopic) handleTabChange(prevSubtopic.id);
  };

  const handleNextSubtopic = () => {
    if (nextSubtopic) handleTabChange(nextSubtopic.id);
  };

  return (
    <section id="revision-guide" className="scroll-mt-28 space-y-6">
      {/* SUBTOPIC TOPIC NAVIGATION BAR */}
      <div id="subtopic-nav-bar" className="scroll-mt-28 bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-slate-200 flex items-center justify-between gap-3 sm:gap-6">
        
        {/* PREVIOUS SUBTOPIC BUTTON (<) */}
        <button
          type="button"
          onClick={handlePrevSubtopic}
          disabled={currentIndex <= 0}
          className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl border transition-all duration-200 shrink-0 ${
            currentIndex > 0
              ? 'bg-slate-50 hover:bg-emerald-600 text-slate-700 hover:text-white border-slate-200 hover:border-emerald-600 shadow-2xs hover:shadow-md cursor-pointer group'
              : 'bg-slate-50 text-slate-300 border-slate-200/60 cursor-not-allowed opacity-40'
          }`}
          title={prevSubtopic ? (isSi ? `පෙර: ${prevSubtopic.id} ${prevSubtopic.titleSi}` : `Previous: ${prevSubtopic.id} ${prevSubtopic.titleEn}`) : undefined}
          aria-label="Previous subtopic"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* CURRENT TOPIC CONTENT (COMPLETELY HELD) */}
        <div className="flex-1 text-center min-w-0 px-1 sm:px-4">
          <div className="flex items-center justify-center gap-2 mb-1.5 flex-wrap">
            <span className="text-xs font-black px-2.5 py-0.5 rounded-md bg-emerald-600 text-white shadow-2xs">
              {activeSubtopic.id}
            </span>
            <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200/80">
              {isSi ? `${data.subtopics.length} න් ${currentIndex + 1} වන අනුමාතෘකාව` : `Subtopic ${currentIndex + 1} of ${data.subtopics.length}`}
            </span>
          </div>

          <h3 className="text-base sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-snug">
            {isSi ? activeSubtopic.titleSi : activeSubtopic.titleEn}
          </h3>

          <p className="text-xs sm:text-sm text-slate-500 italic mt-0.5 font-medium">
            {isSi ? activeSubtopic.titleEn : activeSubtopic.titleSi}
          </p>
        </div>

        {/* NEXT SUBTOPIC BUTTON (>) */}
        <button
          type="button"
          onClick={handleNextSubtopic}
          disabled={currentIndex >= data.subtopics.length - 1}
          className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl border transition-all duration-200 shrink-0 ${
            currentIndex < data.subtopics.length - 1
              ? 'bg-slate-50 hover:bg-emerald-600 text-slate-700 hover:text-white border-slate-200 hover:border-emerald-600 shadow-2xs hover:shadow-md cursor-pointer group'
              : 'bg-slate-50 text-slate-300 border-slate-200/60 cursor-not-allowed opacity-40'
          }`}
          title={nextSubtopic ? (isSi ? `ඊළඟ: ${nextSubtopic.id} ${nextSubtopic.titleSi}` : `Next: ${nextSubtopic.id} ${nextSubtopic.titleEn}`) : undefined}
          aria-label="Next subtopic"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

      </div>

      {/* ACTIVE SUBTOPIC REVISION CARD */}
      {activeSubtopic && (
        <div id="subtopic-revision-card" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
          
          {/* TOOLBAR */}
          <div className="px-6 py-4 bg-gradient-to-r from-slate-50 to-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 self-start sm:self-auto">
              {activeSubtopic.textbookSection}
            </span>

            <div className="flex items-center gap-2.5 ml-auto">
              {/* Language toggle pill */}
              <div className="inline-flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 shadow-2xs">
                <Languages className="w-3.5 h-3.5 text-emerald-600 ml-1" />
                <button
                  type="button"
                  onClick={() => setOverrideMedium('en')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    !isSi ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setOverrideMedium('si')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    isSi ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  සිංහල
                </button>
              </div>

              <button
                type="button"
                onClick={() => onOpenSubtopicModal && onOpenSubtopicModal(activeSubtopic)}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-purple-50 hover:bg-[#602d92] text-[#602d92] hover:text-white font-bold text-xs border border-purple-200 transition-all cursor-pointer shadow-xs"
              >
                <Maximize2 className="w-4 h-4" />
                <span>{isSi ? 'සම්පූර්ණ තිරයෙන් කියවන්න' : 'Open Reader Modal'}</span>
              </button>
            </div>
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
                    ? 'ප්‍රධාන අර්ථ දැක්වීම්'
                    : 'Key definitions'}
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
