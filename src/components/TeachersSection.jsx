import React from 'react';
import { useLanguage } from '../context/useLanguage';

const teachersList = [
  {
    name: "Hasaranga Amarasingha",
    subjectSi: "ගණිතය",
    subjectEn: "Mathematics",
    image: "https://static.edumix.lk/ol//teacher/683b5504eda98d1fbde54d1a.jpg"
  },
  {
    name: "Maduka N. Weerasighe",
    subjectSi: "විද්‍යාව",
    subjectEn: "Science",
    image: "https://static.edumix.lk/ol//teacher/683c02a3eda98d1fbdfbd97a.jpg"
  },
  {
    name: "Dileesha Obesekara",
    subjectSi: "ඉංග්‍රීසි (English)",
    subjectEn: "English",
    image: "https://static.edumix.lk/ol//teacher/683c0800eda98d1fbdfd4901.jpg"
  },
  {
    name: "Pradeepa Somasiri",
    subjectSi: "සිංහල",
    subjectEn: "Sinhala",
    image: "https://static.edumix.lk/ol//teacher/683c0562eda98d1fbdfcc736.jpg"
  },
  {
    name: "S. Kondarage",
    subjectSi: "ඉතිහාසය",
    subjectEn: "History",
    image: "https://static.edumix.lk/ol//teacher/683c0a04eda98d1fbdfe0d93.jpg"
  }
];

export default function TeachersSection() {
  const { language } = useLanguage();
  const isSinhala = language === 'si';

  return (
    <section id="teachers" className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4 tracking-tight">
            Meet Our <span className="text-[#602d92]">Expert Instructors</span>
          </h2>
          <div className="w-20 h-1 bg-[#602d92] mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            {isSinhala
              ? 'වසර ගණනාවක සා/පෙළ ඉගැන්වීම් පළපුරුද්දක් ඇති දිවයිනේ ප්‍රවීණතම ගුරු මඩුල්ල සමඟින් ඉගෙන ගන්න.'
              : 'Learn from industry professionals with years of dedicated G.C.E. O/L teaching experience.'}
          </p>
        </div>

        {/* Teachers Cards Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {teachersList.map((teacher, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 w-full sm:w-[48%] lg:w-[30%] max-w-sm border border-gray-100 group flex flex-col justify-between"
            >
              <div className="relative overflow-hidden h-64 bg-slate-100">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback avatar if external static URL is unreachable
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(teacher.name)}&background=602d92&color=fff&size=256`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-[#602d92] transition-colors">
                  {teacher.name}
                </h3>
                <p className="text-xl text-[#602d92] font-semibold mt-1 font-sinhala">
                  {isSinhala ? teacher.subjectSi : teacher.subjectEn}
                </p>
                <div className="mt-3 inline-flex items-center text-xs font-semibold text-gray-500 bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
                  OL.LK Verified Faculty
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
