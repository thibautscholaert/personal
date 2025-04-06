
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="min-h-screen flex items-center relative bg-gradient-to-br from-white to-blue-50">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t('hero', 'title')} <span className="text-teal">Your Name</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
              {t('hero', 'subtitle')}
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              {t('hero', 'description')}
            </p>
            <div className="flex gap-4">
              <a href="#portfolio" className="btn-primary">
                {t('hero', 'viewWork')}
              </a>
              <a href="#contact" className="btn-secondary">
                {t('hero', 'contactMe')}
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-teal/10 flex justify-center items-center">
              <div className="absolute inset-2 rounded-full border-2 border-teal/30"></div>
              <div className="absolute inset-6 rounded-full border-2 border-teal/50"></div>
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-navy flex justify-center items-center text-white text-4xl font-bold">
                YN
              </div>
            </div>
          </div>
        </div>
      </div>
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="text-navy" />
      </a>
    </section>
  );
};

export default Hero;
