import React from 'react';
import { Globe } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <motion.div 
      className="flex items-center gap-2 rounded-md px-2 py-1.5 transition-colors"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <Globe className="h-4 w-4 text-muted-foreground" />
      <span 
        className={cn(
          "text-sm font-medium transition-colors",
          language === 'en' ? 'text-foreground' : 'text-muted-foreground'
        )}
      >
        EN
      </span>
      <Switch 
        checked={language === 'fr'}
        onCheckedChange={toggleLanguage}
        aria-label="Toggle language"
        className="data-[state=checked]:bg-accent"
      />
      <span 
        className={cn(
          "text-sm font-medium transition-colors",
          language === 'fr' ? 'text-foreground' : 'text-muted-foreground'
        )}
      >
        FR
      </span>
    </motion.div>
  );
};

export default LanguageSwitch;
