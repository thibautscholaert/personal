
import React from 'react';
import { Globe } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useLanguage } from '@/context/LanguageContext';

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <div className="flex items-center space-x-2">
      <Globe size={18} />
      <span className="text-sm font-medium">EN</span>
      <Switch 
        checked={language === 'fr'}
        onCheckedChange={toggleLanguage}
        aria-label="Toggle language"
      />
      <span className="text-sm font-medium">FR</span>
    </div>
  );
};

export default LanguageSwitch;
