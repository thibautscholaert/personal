
import React from 'react';
import { Globe } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <motion.div 
      className="flex items-center space-x-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <Globe size={18} className="text-foreground" />
      <span className={`text-sm font-medium ${language === 'en' ? 'text-blue' : 'text-foreground/70'}`}>EN</span>
      <Switch 
        checked={language === 'fr'}
        onCheckedChange={toggleLanguage}
        aria-label="Toggle language"
      />
      <span className={`text-sm font-medium ${language === 'fr' ? 'text-blue' : 'text-foreground/70'}`}>FR</span>
    </motion.div>
  );
};

export default LanguageSwitch;
