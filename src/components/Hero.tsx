
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="min-h-screen flex items-center relative bg-gradient-to-br from-background to-muted">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t('hero', 'title')} <span className="text-blue">Your Name</span>
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl text-foreground/80 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {t('hero', 'subtitle')}
            </motion.h2>
            <motion.p 
              className="text-foreground/70 mb-8 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {t('hero', 'description')}
            </motion.p>
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a 
                href="#portfolio" 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero', 'viewWork')}
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero', 'contactMe')}
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue/10 flex justify-center items-center"
              animate={{ 
                boxShadow: [
                  "0 0 0 rgba(59, 130, 246, 0.4)",
                  "0 0 20px rgba(59, 130, 246, 0.4)",
                  "0 0 0 rgba(59, 130, 246, 0.4)"
                ]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <div className="absolute inset-2 rounded-full border-2 border-lime/30"></div>
              <div className="absolute inset-6 rounded-full border-2 border-rose/30"></div>
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-blue flex justify-center items-center text-white text-4xl font-bold">
                YN
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        aria-label="Scroll down"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          repeatType: "loop" 
        }}
      >
        <ArrowDown className="text-blue" />
      </motion.a>
    </section>
  );
};

export default Hero;
