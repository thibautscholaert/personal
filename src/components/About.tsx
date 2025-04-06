import React from 'react';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-background to-muted">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('about', 'title')}
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-foreground/80 mb-6">
              {t('about', 'description1')}
            </p>
            <p className="text-foreground/80 mb-6">
              {t('about', 'description2')}
            </p>
            <p className="text-foreground/80 mb-8">
              {t('about', 'description3')}
            </p>
            
            <motion.a 
              href="#" 
              className="btn-primary"
              aria-label={t('about', 'downloadResume')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={18} />
              {t('about', 'downloadResume')}
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="font-bold text-foreground text-xl mb-2">{t('about', 'education')}</h3>
              <p className="text-foreground/70">{t('about', 'educationDegree')}</p>
              <p className="text-foreground/50 text-sm">{t('about', 'educationYear')}</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="font-bold text-foreground text-xl mb-2">{t('about', 'experience')}</h3>
              <p className="text-foreground/70">{t('about', 'experienceRole')}</p>
              <p className="text-foreground/50 text-sm">{t('about', 'experienceYear')}</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="font-bold text-foreground text-xl mb-2">{t('about', 'languages')}</h3>
              <p className="text-foreground/70">{t('about', 'language1')}</p>
              <p className="text-foreground/70">{t('about', 'language2')}</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="font-bold text-foreground text-xl mb-2">{t('about', 'interests')}</h3>
              <p className="text-foreground/70">{t('about', 'interest1')}</p>
              <p className="text-foreground/70">{t('about', 'interest2')}</p>
              <p className="text-foreground/70">{t('about', 'interest3')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
