import React from 'react';
import { useLanguage } from '../context/useLanguage';
import { CheckCircle2, Award } from 'lucide-react';

export default function AboutSection() {
  const { language } = useLanguage();
  const isSinhala = language === 'si';

  return (
    <section id="about" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-indigo-900 mb-4 tracking-tight">
            About <span className="text-[#602d92]">OL.LK</span> Learning Platform
          </h2>
          <div className="w-20 h-1.5 bg-[#602d92] mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {isSinhala
              ? 'අපි නවීන තාක්ෂණය, ප්‍රවීණ ගුරු මණ්ඩලය සහ AI අධ්‍යයන මෙවලම් හරහා සාමාන්‍ය පෙළ සිසුන්ගේ අධ්‍යාපනය පෙරළිකාර වෙනසකට ලක් කරමින් සිටිමු.'
              : "We're revolutionizing education through innovative technology, top-tier educators, and personalized AI learning experiences."}
          </p>
        </div>

        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Visual Showcase Card */}
          <div className="md:w-1/2 w-full flex justify-center">
            <div className="relative w-full max-w-md bg-gradient-to-br from-indigo-50 via-purple-50 to-white rounded-3xl p-8 border border-purple-100 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-200/40 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-[#602d92] text-white flex items-center justify-center shadow-lg shadow-purple-900/30">
                  <Award className="w-8 h-8" />
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-gray-900">
                    OL.LK Science Hub
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {isSinhala ? 'ශ්‍රී ලංකාවේ ප්‍රමුඛතම සා/පෙළ විද්‍යා පුනරීක්ෂණ අඩවිය' : "Sri Lanka's Premier O/L Science Revision Destination"}
                  </p>
                </div>

                {/* Micro feature badges */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-gray-100 shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">
                      {isSinhala ? 'පාඩම් අනුව වර්ග කළ පසුගිය විභාග ප්‍රශ්න' : 'Unit-Categorized Past Exam Questions'}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-gray-100 shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">
                      {isSinhala ? 'විෂය නිර්දේශ නිපුණතා පාදක AI Flashcards' : 'AI Syllabus Competency Flashcards'}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-gray-100 shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">
                      {isSinhala ? 'සිංහල සහ ඉංග්‍රීසි ද්විභාෂා සහාය' : '100% Dual Medium (English & Sinhala)'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission and Approach Details */}
          <div className="md:w-1/2 w-full md:pl-6 text-left">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-3 flex items-center gap-2">
                <span>Our Mission</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-purple-100 text-[#602d92]">අපගේ දැක්ම</span>
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {isSinhala
                  ? 'අපගේ අතිනවීන ඉගෙනුම් වේදිකාව හරහා ශ්‍රී ලංකාවේ ඕනෑම තැනක සිටින සෑම සිසුවෙකුටම උසස් ගුණාත්මක අධ්‍යාපනය සහ සා/පෙළ විශිෂ්ට ප්‍රතිඵල ළඟා කර දීම.'
                  : 'To make quality education accessible to everyone, everywhere through our cutting-edge learning platform and targeted exam revision tools.'}
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-3 flex items-center gap-2">
                <span>Our Approach</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">අපගේ ක්‍රමවේදය</span>
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                {isSinhala
                  ? 'ප්‍රවීණ ගුරු උපදෙස් සහ අන්තර්ක්‍රියාකාරී ප්‍රශ්නාවලි, මතක කාඩ්පත් සමඟින් සිසුන් තුළ විද්‍යා විෂය කෙරෙහි ඉහළ උනන්දුවක් සහ ස්ථිර මතකයක් ගොඩනැගීම.'
                  : 'We combine expert instruction with interactive quizzes, spaced repetition flashcards, and paper-to-unit mapping to create engaging, result-oriented learning experiences.'}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 text-sm font-semibold">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#602d92]" />
                  <span>Live & Recorded Classes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#602d92]" />
                  <span>Unit-wise Quizzes & Mock Exams</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#602d92]" />
                  <span>AI Syllabus Flashcards</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#602d92]" />
                  <span>Past Paper Extraction & Analysis</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
