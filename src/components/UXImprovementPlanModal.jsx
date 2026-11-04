import React from 'react';
import { useLanguage } from '../context/useLanguage';
import { X, Sparkles, Smartphone, Trophy, CheckCircle, Compass, Layers } from 'lucide-react';

export default function UXImprovementPlanModal({ isOpen, onClose }) {
  const { language, t } = useLanguage();

  if (!isOpen) return null;

  const isSinhala = language === 'si';

  const roadmapPillars = [
    {
      icon: Sparkles,
      color: "from-indigo-500 to-cyan-500",
      titleEn: "1. AI Paper OCR & Automated Unit Dissection",
      titleSi: "1. AI ප්‍රශ්න පත්‍ර හඳුනාගැනීම සහ පාඩම් වෙන් කිරීම",
      badge: "Core Architecture",
      itemsEn: [
        "Direct integration with Gemini 1.5 Pro / Flash for PDF parsing and multimodal OCR of past exam scans.",
        "Automatic detection of MCQ questions, structured essay sub-parts, and scientific diagrams.",
        "Zero-shot classification aligning each question with the 24 Grade 10 & 11 Science syllabus units.",
        "Automated bilingual generation: produce equivalent Sinhala or English translations when only one medium paper is available."
      ],
      itemsSi: [
        "Gemini API භාවිතයෙන් පසුගිය විභාග ප්‍රශ්න පත්‍ර (PDF/ඡායාරූප) ක්ෂණිකව කියවා තේරුම් ගැනීම.",
        "බහුවරණ, ව්‍යුහගත ප්‍රශ්න සහ විද්‍යාත්මක රූප සටහන් ස්වයංක්‍රීයව වෙන් කර හඳුනාගැනීම.",
        "සෑම ප්‍රශ්නයක්ම 10 සහ 11 ශ්‍රේණිවල අදාළ පාඩම වෙත ස්වයංක්‍රීයව වර්ගීකරණය කිරීම.",
        "එක් භාෂාවකින් පමණක් ඇති ප්‍රශ්න පත්‍ර අනෙක් මාධ්‍යයටද (සිංහල/ඉංග්‍රීසි) උසස් ගුණාත්මක බවින් පරිවර්තනය කිරීම."
      ]
    },
    {
      icon: Layers,
      color: "from-purple-500 to-pink-500",
      titleEn: "2. Intelligent Spaced-Repetition Flashcards (SM-2)",
      titleSi: "2. ස්මාර්ට් මතක කාඩ්පත් (Spaced Repetition)",
      badge: "Cognitive Science",
      itemsEn: [
        "Implement the Leitner / SuperMemo (SM-2) spaced repetition algorithm to schedule reviews just before forgetting occurs.",
        "Syllabus-derived atomic concepts: key definitions, equations, SI units, and chemical formulas.",
        "Confidence rating (Easy, Medium, Hard) dynamically adjusting next review intervals.",
        "Audio pronunciation of complex biological and chemical terms in both English and Sinhala."
      ],
      itemsSi: [
        "Leitner / SM-2 ඇල්ගොරිතමය මඟින් අමතක වීමට පෙර නැවත මතක් කර දෙන විද්‍යාත්මක කාලසටහන.",
        "විෂය නිර්දේශයේ සියලුම අර්ථ දැක්වීම්, සමීකරණ, SI ඒකක සහ රසායනික සූත්‍ර ඇතුළත් කිරීම.",
        "සිසුවාගේ පිළිතුරු මත පදනම්ව අපහසු සංකල්ප නිතර නිතර පුහුණු කරවීම.",
        "සිංහල සහ ඉංග්‍රීසි විද්‍යාත්මක වචන නිවැරදිව උච්චාරණය කරන ශ්‍රව්‍ය (Audio) පහසුකම."
      ]
    },
    {
      icon: Trophy,
      color: "from-amber-500 to-orange-500",
      titleEn: "3. Gamification, Streaks & O/L Grade Predictor",
      titleSi: "3. අධ්‍යයන උනන්දුව හා O/L සාමාර්ථ පුරෝකථනය",
      badge: "Student Motivation",
      itemsEn: [
        "Daily study streak counter and milestone badges (e.g., 'Genetics Master', 'Optics Ace').",
        "O/L Predicted Grade Calculator (A, B, C, S) based on performance across units and past paper questions.",
        "Timed Exam Simulation Mode mimicking the exact 60-minute, 40-question G.C.E. O/L Science Paper I conditions.",
        "Personalized 'Weak Area Diagnostic' dashboard highlighting units needing immediate revision."
      ],
      itemsSi: [
        "දිනපතා පුනරීක්ෂණ දින ගණන (Daily Streaks) සහ කුසලතා ලාංඡන (Badges).",
        "පාඩම් ආවරණය අනුව O/L විභාගයේදී අපේක්ෂිත සාමාර්ථය (A, B, C, S) පුරෝකථනය කරන පද්ධතිය.",
        "නියම සා/පෙළ විභාගයේ පරිසරය අනුකරණය කරමින් විනාඩි 60ක කාල රාමුවක් තුළ ප්‍රශ්න 40ක් විසඳීමේ පුහුණුව.",
        "ලකුණු අඩු දුර්වල පාඩම් හඳුනාගෙන ඒවාට වැඩි අවධානයක් යොමු කිරීමට මඟපෙන්වන උපකරණ පුවරුව."
      ]
    },
    {
      icon: Smartphone,
      color: "from-emerald-500 to-teal-500",
      titleEn: "4. Mobile-First PWA & Low-Bandwidth Offline Mode",
      titleSi: "4. ජංගම දුරකථන සහ Offline පහසුකම (PWA)",
      badge: "Accessibility",
      itemsEn: [
        "Progressive Web App (PWA) with 'Add to Home Screen' support for zero-friction mobile use.",
        "IndexedDB offline caching allowing full quiz and flashcard revision without internet connectivity.",
        "Data-saver compressed assets optimized for Sri Lankan mobile data connections (Dialog, Mobitel, SLT).",
        "Full dark mode / OLED battery-saver mode for late-night exam prep."
      ],
      itemsSi: [
        "ජංගම දුරකථන සඳහා ඇප් එකක් ලෙස (PWA) ස්ථාපනය කර භාවිත කිරීමේ හැකියාව.",
        "අන්තර්ජාලය නොමැති අවස්ථාවලදීද (Offline) ප්‍රශ්නාවලි සහ Flashcards ක්‍රියාත්මක වීම.",
        "අඩු ඩේටා ප්‍රමාණයක් වැයවන පරිදි සැකසූ වේගවත් පද්ධතිය.",
        "රාත්‍රී කාලයේ අධ්‍යයනය සඳහා ඇස්වලට වෙහෙස නොවන Dark Mode පහසුකම."
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-indigo-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-xs">
              <Compass className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  Strategic Plan
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {t.roadmapSubtitle}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                {t.roadmapTitle}
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

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          <div className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white p-6 rounded-3xl shadow-md">
            <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Vision & Experience Philosophy</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              {isSinhala 
                ? 'ශ්‍රී ලාංකික සා/පෙළ සිසුන් වෙනුවෙන් විශිෂ්ටතම ඩිජිටල් පුනරීක්ෂණ අත්දැකීම'
                : 'Empowering Every Sri Lankan Student to Excel in O/L Science'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isSinhala
                ? 'මෙම සැලැස්ම මඟින් ප්‍රශ්න පත්‍ර සහ විෂය නිර්දේශය ස්වයංක්‍රීයව උකහා ගන්නා AI තාක්ෂණය සහ සිසුන්ට පහසු, ප්‍රබෝධමත් අතුරුමුහුණතක් (Intuitive UI/UX) එක්තැන් කරයි.'
                : 'A comprehensive roadmap uniting automated past-paper extraction, cognitive science spaced repetition, and frictionless bilingual UI/UX designed specifically for Sri Lankan students.'}
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {roadmapPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-5 hover:border-indigo-300 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${pillar.color} text-white flex items-center justify-center shadow-xs`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700">
                        {pillar.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mb-3">
                      {isSinhala ? pillar.titleSi : pillar.titleEn}
                    </h4>

                    <ul className="space-y-2">
                      {(isSinhala ? pillar.itemsSi : pillar.itemsEn).map((item, itemIdx) => (
                        <li key={itemIdx} className="text-xs text-slate-600 flex items-start gap-2 leading-relaxed">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
          <span>ReviseHub Science Architecture v1.0</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition cursor-pointer"
          >
            Done Reading
          </button>
        </div>

      </div>
    </div>
  );
}
