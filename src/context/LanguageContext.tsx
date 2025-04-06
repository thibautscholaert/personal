
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Translation content
const translations = {
  en: {
    navbar: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      technologies: 'Technologies',
      contact: 'Contact',
    },
    hero: {
      title: "Hi, I'm",
      subtitle: 'Software Developer & Designer',
      description: 'I build exceptional and accessible digital experiences for the web.',
      viewWork: 'View My Work',
      contactMe: 'Contact Me',
    },
    about: {
      title: 'About Me',
    },
    portfolio: {
      title: 'My Portfolio',
    },
    techStack: {
      title: 'My Tech Stack',
    },
    contact: {
      title: 'Contact Me',
    },
    footer: {
      rights: 'All rights reserved.',
    }
  },
  fr: {
    navbar: {
      home: 'Accueil',
      about: 'À Propos',
      portfolio: 'Portfolio',
      technologies: 'Technologies',
      contact: 'Contact',
    },
    hero: {
      title: "Bonjour, je suis",
      subtitle: 'Développeur & Designer',
      description: 'Je crée des expériences numériques exceptionnelles et accessibles pour le web.',
      viewWork: 'Voir Mes Projets',
      contactMe: 'Me Contacter',
    },
    about: {
      title: 'À Propos de Moi',
    },
    portfolio: {
      title: 'Mon Portfolio',
    },
    techStack: {
      title: 'Mes Technologies',
    },
    contact: {
      title: 'Me Contacter',
    },
    footer: {
      rights: 'Tous droits réservés.',
    }
  }
};

type Language = 'en' | 'fr';
type TranslationsType = typeof translations;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (section: keyof TranslationsType['en'], key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (section: keyof TranslationsType['en'], key: string): string => {
    return translations[language][section]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
