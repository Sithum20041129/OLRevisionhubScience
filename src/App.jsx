import React, { useState, useMemo } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { useLanguage } from './context/useLanguage';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import TeachersSection from './components/TeachersSection';
import TimetableSection from './components/TimetableSection';
import WhatsAppSection from './components/WhatsAppSection';
import FeaturesSection from './components/FeaturesSection';
import FaqSection from './components/FaqSection';
import UnitCard from './components/UnitCard';
import UnitFilterBar from './components/UnitFilterBar';
import QuizPlayerModal from './components/QuizPlayerModal';
import FlashcardModal from './components/FlashcardModal';
import AIPaperExtractorModal from './components/AIPaperExtractorModal';
import UXImprovementPlanModal from './components/UXImprovementPlanModal';
import Footer from './components/Footer';
import { unitsData } from './data/unitsData';
import { Layers } from 'lucide-react';

function RevisionHubContent() {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Modals state
  const [activeQuizUnit, setActiveQuizUnit] = useState(null);
  const [activeFlashcardUnit, setActiveFlashcardUnit] = useState(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isRoadmapModalOpen, setIsRoadmapModalOpen] = useState(false);

  // Filtered Units list
  const filteredUnits = useMemo(() => {
    return unitsData.filter(unit => {
      // Grade filter
      if (selectedGrade !== 'all' && unit.grade !== selectedGrade) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'all' && unit.category !== selectedCategory) {
        return false;
      }
      // Search query filter (checks English & Sinhala text)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchEn = unit.titleEn.toLowerCase().includes(query) || unit.descriptionEn.toLowerCase().includes(query);
        const matchSi = unit.titleSi.toLowerCase().includes(query) || unit.descriptionSi.toLowerCase().includes(query);
        const matchUnitNum = `unit ${unit.unitNumber}`.includes(query) || `පාඩම ${unit.unitNumber}`.includes(query);
        return matchEn || matchSi || matchUnitNum;
      }
      return true;
    });
  }, [searchQuery, selectedGrade, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 selection:bg-[#602d92] selection:text-white font-sans text-gray-800">
      
      {/* 1. OL.LK Navigation */}
      <Navbar />

      {/* 2. Auto-Changing Horizontally Paging Tabs Hero Section (3-second cycle) */}
      <HeroCarousel
        onOpenQuiz={(u) => setActiveQuizUnit(u)}
        onOpenFlashcards={(u) => setActiveFlashcardUnit(u)}
        allUnits={unitsData}
      />

      {/* 3. Cards Showing All Lessons At Once (Directly after Hero Unit Tabs) */}
      <section id="units" className="py-16 sm:py-20 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-indigo-900 mb-3 tracking-tight">
              {language === 'en' ? 'All Lessons & Revision Units' : 'සියලුම විද්‍යාව පාඩම් මාලාව'}
            </h2>
            <div className="w-20 h-1.5 bg-[#602d92] mx-auto rounded-full mb-3"></div>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {language === 'en'
                ? 'Explore all Grade 10 & 11 Science lessons at once. Select any lesson card to practice unit quizzes or review active-recall flashcards.'
                : '10 සහ 11 ශ්‍රේණිවල සියලුම විද්‍යාව පාඩම් මෙතැනින් එකවර බලන්න. ප්‍රශ්නාවලි සහ Flashcards සඳහා අදාළ පාඩමේ කාඩ්පත තෝරන්න.'}
            </p>
          </div>

          {/* Search & Filter Bar */}
          <UnitFilterBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedGrade={selectedGrade}
            setSelectedGrade={setSelectedGrade}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            totalFound={filteredUnits.length}
          />

          {/* All Lessons Cards Grid */}
          {filteredUnits.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredUnits.map((unit) => (
                <UnitCard
                  key={unit.id}
                  unit={unit}
                  onOpenQuiz={(u) => setActiveQuizUnit(u)}
                  onOpenFlashcards={(u) => setActiveFlashcardUnit(u)}
                />
              ))}
            </div>
          ) : (
            /* Empty Search State */
            <div className="text-center py-16 px-4 bg-gray-50 rounded-3xl border border-dashed border-gray-300 max-w-md mx-auto">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-purple-100 text-[#602d92] flex items-center justify-center mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-1">
                {language === 'en' ? 'No lessons found matching your search' : 'සෙවුමට ගැළපෙන පාඩම් හමු නොවීය'}
              </h3>
              <p className="text-xs text-gray-500 mb-4">
                {language === 'en'
                  ? 'Try different keywords or clear active grade and subject filters.'
                  : 'වෙනත් වචන භාවිත කර බලන්න හෝ පෙරහන් ඉවත් කරන්න.'}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedGrade('all');
                  setSelectedCategory('all');
                }}
                className="px-4 py-2 rounded-xl bg-[#602d92] text-white text-xs font-semibold hover:bg-purple-800 transition cursor-pointer"
              >
                {language === 'en' ? 'Reset All Filters' : 'පෙරහන් ඉවත් කරන්න'}
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 4. Teachers / Faculty Section (matching ol.lk) */}
      <TeachersSection />

      {/* 5. Timetable Section (matching ol.lk) */}
      <TimetableSection />

      {/* 6. WhatsApp Community CTA Section (matching ol.lk) */}
      <WhatsAppSection />

      {/* 7. Learning Platform Features Section (matching ol.lk) */}
      <FeaturesSection onOpenUpload={() => setIsUploadModalOpen(true)} />

      {/* 8. FAQ Section (matching ol.lk) */}
      <FaqSection />

      {/* 9. Footer (matching ol.lk) */}
      <Footer onOpenRoadmap={() => setIsRoadmapModalOpen(true)} />

      {/* Quiz Runner Modal */}
      <QuizPlayerModal
        unit={activeQuizUnit}
        isOpen={!!activeQuizUnit}
        onClose={() => setActiveQuizUnit(null)}
        onOpenUpload={() => setIsUploadModalOpen(true)}
      />

      {/* Flashcard 3D Viewer Modal */}
      <FlashcardModal
        unit={activeFlashcardUnit}
        isOpen={!!activeFlashcardUnit}
        onClose={() => setActiveFlashcardUnit(null)}
      />

      {/* Paper Extractor AI Studio Modal */}
      <AIPaperExtractorModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
      />

      {/* UI/UX Strategic Improvement Plan Modal */}
      <UXImprovementPlanModal
        isOpen={isRoadmapModalOpen}
        onClose={() => setIsRoadmapModalOpen(false)}
      />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <RevisionHubContent />
    </LanguageProvider>
  );
}
