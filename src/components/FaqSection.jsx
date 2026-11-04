import React, { useState } from 'react';
import { useLanguage } from '../context/useLanguage';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    qSi: "මොකක්ද මේ ol.lk හරහා සිදු කරන්නේ?",
    qEn: "What is OL.LK and how does it help students?",
    aSi: "ප්‍රවීන ගුරුමඩුල්ලක් සමගින් අ.පො.ස සාමාන්‍ය පෙළ විභාගයට පෙනී සිටින සිසුන් වෙනුවෙන් පවත්වන පාඨමාලාවක් වන අතර මෙමගින් සියලුම විෂය නිර්දේශය ආවරණය කිරීම සිදු කරනු ලබනවා. විශේෂයෙන්ම විද්‍යාව විෂය සඳහා පාඩම් අනුව වර්ගීකරණය කළ ප්‍රශ්න පත්‍ර සහ AI මතක කාඩ්පත් මෙහි ඇතුළත් වේ.",
    aEn: "OL.LK is a premier revision platform providing comprehensive syllabus coverage for G.C.E. O/L candidates. For Science, it provides unit-categorized past paper MCQs, expert rationales, and AI-generated syllabus flashcards."
  },
  {
    qSi: "පන්ති හා විද්‍යා පුනරීක්ෂණ ගැන තොරතුරු?",
    qEn: "How do the classes and science revision modules work?",
    aSi: "සජීවී Zoom තාක්ෂණය ඔස්සේ පන්ති පැවැත්වෙන අතර, ඒ සමඟම වෙබ් අඩවිය හරහා ඕනෑම වේලාවක පාඩම් අනුව ප්‍රශ්න පත්‍ර අභ්‍යාස කිරීමට සහ Flashcards මඟින් සක්‍රිය මතකය තහවුරු කරගැනීමට අවස්ථාව ලැබේ.",
    aEn: "Classes are conducted live via Zoom with 24/7 access to high-quality recordings, coupled with unit-by-unit revision quizzes on the web platform."
  },
  {
    qSi: "නිබන්ධන හා ප්‍රශ්න පත්‍ර ලබාගන්නේ කෙසේද?",
    qEn: "How do students access study packs and past papers?",
    aSi: "මුද්‍රිත නිබන්ධන ඔබේ නිවසටම කුරියර් මගින් ලැබෙන අතර, පසුගිය විභාග ප්‍රශ්න පත්‍ර (PDF) සහ AI මඟින් උකහාගත් බහුවරණ ප්‍රශ්නාවලි මෙම වෙබ් අඩවියෙන් ඍජුවම භාවිතා කළ හැක.",
    aEn: "Printed revision packs are delivered to your doorstep, while past exam papers and AI-dissected questions are accessible immediately on the web platform."
  },
  {
    qSi: "තාක්ෂණික ගැටළු සඳහා සහය ලබාගන්නේ කෙසේද?",
    qEn: "How can students get technical support?",
    aSi: "වෙබ් අඩවියට පිවිසීමේදී හෝ ප්‍රශ්නාවලි ක්‍රියාත්මක කිරීමේදී කිසියම් ගැටළුවක් ඇත්නම් අපගේ WhatsApp Community සහ Technical Support කණ්ඩායම හරහා ක්ෂණික සහය ලබාගත හැක.",
    aEn: "Our technical support team is available via our official WhatsApp community and helpline to assist with account access, quiz runner issues, or mobile queries."
  }
];

export default function FaqSection() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const isSinhala = language === 'si';

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-16 md:py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-4xl">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-900 mb-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-[#602d92] mx-auto rounded-full mb-3"></div>
          <p className="text-xs sm:text-sm text-gray-500 font-semibold uppercase tracking-wider font-sinhala">
            {isSinhala ? 'නිතර අසන ප්‍රශ්න සහ පිළිතුරු' : 'Common Inquiries & Student Support'}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-indigo-100 bg-white rounded-2xl shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex justify-between items-center focus:outline-none cursor-pointer hover:bg-purple-50/30 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-gray-800 font-sinhala leading-snug">
                    {isSinhala ? faq.qSi : faq.qEn}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-3 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-purple-100 text-[#602d92]' : 'bg-gray-100 text-gray-500'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm sm:text-base text-gray-700 font-sinhala leading-relaxed border-t border-gray-100 pt-3 animate-in fade-in duration-200">
                    <p>{isSinhala ? faq.aSi : faq.aEn}</p>
                    <p className="text-xs text-gray-400 italic mt-2">
                      {isSinhala ? faq.aEn : faq.aSi}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
