import React from 'react';
import { useLanguage } from '../context/useLanguage';

export default function TimetableSection() {
  const { language } = useLanguage();
  const isSinhala = language === 'si';

  const grade10Schedule = [
    { dayBadge: "සෙ", subject: "සිංහල", day: "සෙනසුරාදා", time: "සවස 3.30" },
    { dayBadge: "අග", subject: "විද්‍යාව", day: "අඟහරුවාදා", time: "රාත්‍රී 8.00" },
    { dayBadge: "බ්", subject: "English", day: "බ්‍රහස්පතින්දා", time: "රාත්‍රී 8.00" },
    { dayBadge: "බද", subject: "ඉතිහාසය", day: "බදාදා", time: "රාත්‍රී 7.00" },
    { dayBadge: "ඉර", subject: "ගණිතය", day: "ඉරිදා", time: "රාත්‍රී 7.30" },
  ];

  const grade11Schedule = [
    { dayBadge: "සද", subject: "සිංහල", day: "සඳුදා", time: "රාත්‍රී 8:00 - 9:30" },
    { dayBadge: "අග", subject: "English", day: "අඟහරුවාදා", time: "රාත්‍රී 8:00 - 9:30" },
    { dayBadge: "බද", subject: "ඉතිහාසය", day: "බදාදා", time: "රාත්‍රී 8:00 - 9:30" },
    { dayBadge: "බ්", subject: "විද්‍යාව", day: "බ්‍රහස්පතින්දා", time: "රාත්‍රී 8:00 - 9:30" },
    { dayBadge: "ඉර", subject: "ගණිතය", day: "ඉරිදා", time: "රාත්‍රී 9:30 - 10:30" },
  ];

  return (
    <section id="timetable" className="py-16 px-6 lg:px-8 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4 font-sinhala text-center mb-12">
          {isSinhala ? 'පන්ති කාලසටහන' : 'Class & Revision Timetable'}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Grade 10 Column */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 shadow-lg border border-blue-100">
            <h3 className="text-2xl font-bold text-blue-800 mb-6 font-sinhala text-center">
              10 ශ්‍රේණිය
            </h3>
            <ul className="space-y-4">
              {grade10Schedule.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start group hover:transform hover:scale-105 transition-all duration-200 bg-white/80 p-3 rounded-xl border border-blue-100/60 shadow-xs"
                >
                  <div className="flex-shrink-0 relative overflow-hidden rounded-lg shadow-md bg-gradient-to-br from-blue-500 to-cyan-600">
                    <div className="w-12 h-12 flex flex-col items-center justify-center text-white">
                      <div className="text-xs font-bold opacity-90">{item.dayBadge}</div>
                      <div className="w-6 h-0.5 bg-white opacity-60 mt-0.5"></div>
                    </div>
                    <div className="absolute top-0 right-0 w-2 h-2 bg-white opacity-20 rounded-bl-lg"></div>
                  </div>

                  <div className="ml-4 flex-1">
                    <h4 className="text-lg font-semibold mb-1 font-sinhala group-hover:scale-105 transition-transform duration-200 text-blue-800">
                      {item.subject}
                    </h4>
                    <div className="flex items-center text-sm text-gray-600 font-sinhala">
                      <span className="font-medium">{item.day}</span>
                      <div className="mx-2 w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      <span className="text-gray-700 font-medium">{item.time}</span>
                    </div>
                  </div>

                  <div className="w-1 h-full rounded-full ml-2 opacity-30 bg-gradient-to-b from-blue-400 to-cyan-400"></div>
                </li>
              ))}
            </ul>
          </div>

          {/* Grade 11 Column */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 sm:p-8 shadow-lg border border-indigo-100">
            <h3 className="text-2xl font-bold text-indigo-800 mb-6 font-sinhala text-center">
              11 ශ්‍රේණිය
            </h3>
            <ul className="space-y-4">
              {grade11Schedule.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start group hover:transform hover:scale-105 transition-all duration-200 bg-white/80 p-3 rounded-xl border border-indigo-100/60 shadow-xs"
                >
                  <div className="flex-shrink-0 relative overflow-hidden rounded-lg shadow-md bg-gradient-to-br from-indigo-500 to-purple-600">
                    <div className="w-12 h-12 flex flex-col items-center justify-center text-white">
                      <div className="text-xs font-bold opacity-90">{item.dayBadge}</div>
                      <div className="w-6 h-0.5 bg-white opacity-60 mt-0.5"></div>
                    </div>
                    <div className="absolute top-0 right-0 w-2 h-2 bg-white opacity-20 rounded-bl-lg"></div>
                  </div>

                  <div className="ml-4 flex-1">
                    <h4 className="text-lg font-semibold mb-1 font-sinhala group-hover:scale-105 transition-transform duration-200 text-indigo-800">
                      {item.subject}
                    </h4>
                    <div className="flex items-center text-sm text-gray-600 font-sinhala">
                      <span className="font-medium">{item.day}</span>
                      <div className="mx-2 w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                      <span className="text-gray-700 font-medium">{item.time}</span>
                    </div>
                  </div>

                  <div className="w-1 h-full rounded-full ml-2 opacity-30 bg-gradient-to-b from-indigo-400 to-purple-400"></div>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

