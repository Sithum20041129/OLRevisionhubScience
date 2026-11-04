import React from 'react';
import { useLanguage } from '../context/useLanguage';
import { BookOpen } from 'lucide-react';

export default function Footer({ onOpenRoadmap }) {
  const { language } = useLanguage();
  const isSinhala = language === 'si';

  return (
    <footer className="w-full bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        
        {/* Brand Logo */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-[#602d92] text-white flex items-center justify-center font-bold text-sm">
            <BookOpen className="w-4 h-4" />
          </div>
          <span className="text-xl font-black text-[#602d92] tracking-tight">
            OL<span className="text-indigo-600">.LK</span>
          </span>
        </div>

        {/* Copyright notice */}
        <p className="text-[11px] md:text-[13px] font-semibold text-gray-600 flex items-center justify-center space-x-1.5 flex-wrap">
          <span>© Copyright 2025 All Rights Reserved by</span>
          <span className="font-bold text-[#602d92]">Edumix / OL.LK Science Revision Hub</span>
        </p>

        <p className="text-xs text-gray-400 mt-2 max-w-lg mx-auto">
          {isSinhala
            ? 'ශ්‍රී ලංකා ජාතික අධ්‍යාපන ආයතනයේ (NIE) සාමාන්‍ය පෙළ විද්‍යා විෂය නිර්දේශයට අනුකූලව සැකසූ පුනරීක්ෂණ වේදිකාවකි.'
            : 'Structured in alignment with the National Institute of Education (NIE) Sri Lanka G.C.E. O/L Science Syllabus.'}
        </p>

        {/* Links */}
        <div className="mt-6 flex items-center justify-center space-x-4 text-xs font-semibold text-slate-700">
          <a href="#" className="hover:text-[#602d92] transition">
            Privacy Policy
          </a>
          <div className="h-3.5 w-px bg-slate-300"></div>
          <a href="https://chat.whatsapp.com/JDI0NzjZf66JaH8YKhzPv8" target="_blank" rel="noopener noreferrer" className="hover:text-[#602d92] transition">
            Contact Support
          </a>
          <div className="h-3.5 w-px bg-slate-300"></div>
          <button onClick={onOpenRoadmap} className="hover:text-[#602d92] transition cursor-pointer">
            UI/UX Strategic Roadmap
          </button>
        </div>

      </div>
    </footer>
  );
}
