import React, { useState, useEffect } from 'react';
import { LanguageContext } from './LanguageContextInstance';
import { translations } from '../data/translations';

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem('revisehub_lang');
      return saved === 'si' ? 'si' : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('revisehub_lang', language);
      document.documentElement.lang = language;
    } catch (e) {
      console.warn("Storage not available:", e);
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'si' : 'en'));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
