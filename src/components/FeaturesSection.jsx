import React from 'react';
import { useLanguage } from '../context/useLanguage';
import { Tv, Video, BookOpen, Headphones, Sparkles, Layers } from 'lucide-react';

export default function FeaturesSection({ onOpenUpload }) {
  const { language } = useLanguage();
  const isSinhala = language === 'si';

  const features = [
    {
      titleEn: "Online Classes & Unit Quizzes",
      titleSi: "Online පන්ති සහ පාඩම් ප්‍රශ්නාවලි",
      descEn: "Live interactive sessions paired with unit-categorized past paper MCQ drills for rapid mastery.",
      descSi: "සජීවී Zoom පන්ති සමඟින් පාඩම් අනුව වර්ගීකරණය කළ පසුගිය විභාග බහුවරණ ප්‍රශ්න පුහුණුව.",
      icon: Tv,
      color: "bg-purple-100 text-[#602d92]"
    },
    {
      titleEn: "Class Recording & Paper Dissection",
      titleSi: "පන්ති පටිගත කිරීම් සහ ප්‍රශ්න පත්‍ර විවරණ",
      descEn: "Recorded classes offering flexible 24/7 learning anytime, anywhere, with Dialog Data-Free access options.",
      descSi: "ඕනෑම වේලාවක ඕනෑම තැනක සිට නැවත නැරඹිය හැකි පටිගත කිරීම් සහ විද්‍යා ප්‍රශ්න පත්‍ර පූර්ණ සාකච්ඡා.",
      icon: Video,
      color: "bg-indigo-100 text-indigo-700"
    },
    {
      titleEn: "Study Packs & AI Flashcards",
      titleSi: "Study Packs සහ AI මතක කාඩ්පත්",
      descEn: "Comprehensive revision packs with AI-synthesized syllabus flashcards for high-yield active recall.",
      descSi: "විෂය නිර්දේශ නිපුණතා ආවරණය වන සම්පූර්ණ නිබන්ධන සහ AI මඟින් නිර්මාණය වන Flashcards.",
      icon: BookOpen,
      color: "bg-amber-100 text-amber-700"
    },
    {
      titleEn: "Technical Support & AI Assistance",
      titleSi: "තාක්ෂණික සහය සහ AI උපකාරක පද්ධතිය",
      descEn: "Dedicated student support helpline and AI question extraction tools ensuring a frictionless revision journey.",
      descSi: "පන්ති හා වෙබ් අඩවිය භාවිතා කිරීමේදී සිසුන්ට ඇතිවන ඕනෑම ගැටලුවකට ක්ෂණික තාක්ෂණික සහය.",
      icon: Headphones,
      color: "bg-emerald-100 text-emerald-700"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Visual Banner Card */}
          <div className="lg:w-1/3 w-full">
            <div className="bg-gradient-to-br from-[#602d92] via-purple-900 to-indigo-950 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-bold mb-4 border border-white/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Smart Revision</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
                {isSinhala ? 'විද්‍යාව විශිෂ්ට සාමාර්ථයක් සඳහා' : 'Everything You Need for an O/L Distinction'}
              </h3>

              <p className="text-xs sm:text-sm text-purple-200 leading-relaxed mb-6">
                {isSinhala
                  ? 'සා/පෙළ විද්‍යාව විෂය නිර්දේශයේ සියලුම පාඩම් 24, පසුගිය විභාග ප්‍රශ්න සහ AI සක්‍රිය මතක සටහන් එකම තැනකින්.'
                  : 'All 24 syllabus units, verified past paper MCQs, and AI-powered active recall flashcards in one unified hub.'}
              </p>

              <button
                onClick={onOpenUpload}
                className="w-full py-3 px-4 rounded-xl bg-white text-[#602d92] hover:bg-purple-50 font-bold text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-[#602d92]" />
                <span>{isSinhala ? 'ප්‍රශ්න පත්‍ර AI පද්ධතියට එක් කරන්න' : 'Upload Paper to AI Extractor'}</span>
              </button>
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="lg:w-2/3 w-full text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-900 mb-4 tracking-tight">
              Our <span className="text-[#602d92]">Learning Platform</span> Features
            </h2>
            <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed max-w-2xl">
              {isSinhala
                ? 'අපගේ අධ්‍යයන කළමනාකරණ පද්ධතිය සිසුන්ගේ විද්‍යා විෂය දැනුම සහ විභාග ජයග්‍රහණය ඉහළ නැංවීම සඳහාම විශේෂයෙන් සකසා ඇත.'
                : 'Our Learning Management System is packed with powerful features designed to enhance your revision experience.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-xs hover:shadow-md transition">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-2xl shrink-0 ${feat.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1">
                        {isSinhala ? feat.titleSi : feat.titleEn}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {isSinhala ? feat.descSi : feat.descEn}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

