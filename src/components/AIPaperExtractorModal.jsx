import React, { useState } from 'react';
import { useLanguage } from '../context/useLanguage';
import { X, UploadCloud, FileText, CheckCircle2, Cpu, Sparkles, BookCheck } from 'lucide-react';
import { targetPapersData } from '../data/papersData';

export default function AIPaperExtractorModal({ isOpen, onClose }) {
  const { language, t } = useLanguage();
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(0);

  if (!isOpen) return null;

  const isSinhala = language === 'si';

  const handleSimulateExtraction = () => {
    setIsSimulating(true);
    setSimStep(1);

    setTimeout(() => setSimStep(2), 1200);
    setTimeout(() => setSimStep(3), 2400);
    setTimeout(() => {
      setSimStep(4);
      setIsSimulating(false);
    }, 3800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-slate-50 via-indigo-50/50 to-cyan-50/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white flex items-center justify-center shadow-xs">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-100 text-indigo-700">
                  AI Pipeline Engine
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {isSinhala ? 'ප්‍රශ්න පත්‍ර ස්වයංක්‍රීයව සැකසීම' : 'Document Ingestion & Auto-Tagging'}
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                {t.aiExtractorTitle}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Subtitle / Intro */}
          <p className="text-sm text-slate-600 leading-relaxed">
            {t.aiExtractorSubtitle}
          </p>

          {/* 4-Step Pipeline Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left">
            <div className={`p-3 rounded-xl border transition ${simStep >= 1 ? 'bg-indigo-50 border-indigo-300' : 'bg-white border-slate-200'}`}>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 mb-1">
                <UploadCloud className="w-3.5 h-3.5 text-indigo-600" />
                <span>Step 1</span>
              </div>
              <p className="text-[11px] text-slate-600">{t.uploaderModal.step1}</p>
            </div>

            <div className={`p-3 rounded-xl border transition ${simStep >= 2 ? 'bg-indigo-50 border-indigo-300' : 'bg-white border-slate-200'}`}>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 mb-1">
                <FileText className="w-3.5 h-3.5 text-indigo-600" />
                <span>Step 2</span>
              </div>
              <p className="text-[11px] text-slate-600">{t.uploaderModal.step2}</p>
            </div>

            <div className={`p-3 rounded-xl border transition ${simStep >= 3 ? 'bg-indigo-50 border-indigo-300' : 'bg-white border-slate-200'}`}>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 mb-1">
                <BookCheck className="w-3.5 h-3.5 text-indigo-600" />
                <span>Step 3</span>
              </div>
              <p className="text-[11px] text-slate-600">{t.uploaderModal.step3}</p>
            </div>

            <div className={`p-3 rounded-xl border transition ${simStep >= 4 ? 'bg-emerald-50 border-emerald-300' : 'bg-white border-slate-200'}`}>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Step 4</span>
              </div>
              <p className="text-[11px] text-slate-600">{t.uploaderModal.step4}</p>
            </div>
          </div>

          {/* Interactive Drag & Drop Zone */}
          <div className="border-2 border-dashed border-indigo-200 hover:border-indigo-400 bg-indigo-50/20 rounded-3xl p-8 text-center transition group">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <UploadCloud className="w-8 h-8" />
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-1">
              {t.uploaderModal.dropzoneTitle}
            </h4>
            <p className="text-xs text-slate-500 mb-4">
              {t.uploaderModal.dropzoneSubtitle}
            </p>

            <button
              onClick={handleSimulateExtraction}
              disabled={isSimulating}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition shadow-sm hover:shadow-indigo-500/25 inline-flex items-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              {isSimulating ? (
                <>
                  <Cpu className="w-4 h-4 animate-spin" />
                  <span>{isSinhala ? 'ප්‍රශ්න සහ Flashcards සකසමින්...' : 'Extracting & Tagging Units...'}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>{isSinhala ? 'නිරූපණ ප්‍රශ්න පත්‍රයක් එක් කරන්න (Simulate)' : 'Simulate Paper Upload & Processing'}</span>
                </>
              )}
            </button>
          </div>

          {/* Simulated Extraction Success Notification */}
          {simStep === 4 && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">
                  {isSinhala ? 'සාර්ථකයි! ප්‍රශ්න 40ක් හඳුනාගෙන අදාළ පාඩම් 12ට වර්ගීකරණය කරන ලදී.' : 'Success! 40 MCQs extracted and mapped across 12 syllabus units.'}
                </p>
                <p className="text-emerald-700 mt-1">
                  {isSinhala ? 'සමගාමීව විෂය නිර්දේශ නිපුණතා 20ක් සඳහා නව Flashcards ජනනය විය.' : '20 High-yield syllabus flashcards automatically generated for dual-medium study.'}
                </p>
              </div>
            </div>
          )}

          {/* Target Papers Repository Queue */}
          <div>
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center justify-between">
              <span>{t.uploaderModal.recentUploads}</span>
              <span className="text-[11px] text-indigo-600 normal-case font-semibold">
                {targetPapersData.length} {isSinhala ? 'ප්‍රශ්න පත්‍ර ලැයිස්තුගත කර ඇත' : 'Exam Papers In Queue'}
              </span>
            </h4>

            <div className="space-y-2">
              {targetPapersData.map((paper) => (
                <div
                  key={paper.id}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-white shadow-2xs text-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-[11px]">
                      {paper.year}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">
                        {isSinhala ? paper.nameSi : paper.nameEn}
                      </p>
                      <div className="flex items-center gap-2 mt-0.5 text-slate-500">
                        <span>{paper.term}</span>
                        <span>•</span>
                        <span>{paper.mediums.join(' / ')}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 font-semibold border border-indigo-200 text-[10px]">
                      {paper.totalQuestionsEstimated} Questions Est.
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition cursor-pointer"
          >
            Close Studio
          </button>
        </div>

      </div>
    </div>
  );
}
