
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import LanguageSwitch from './LanguageSwitch';
import ThemeToggle from './ThemeToggle';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navbar', 'home'), href: '#home' },
    { name: t('navbar', 'about'), href: '#about' },
    { name: t('navbar', 'portfolio'), href: '#portfolio' },
    { name: t('navbar', 'technologies'), href: '#technologies' },
    { name: t('navbar', 'contact'), href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.a 
            href="#home" 
            className="text-xl font-bold text-blue"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-lime">Your</span>Name
          </motion.a>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-blue transition-colors duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
              </motion.a>
            ))}
            <div className="flex items-center space-x-4">
              <LanguageSwitch />
              <ThemeToggle />
            </div>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-background absolute top-full left-0 right-0 shadow-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-2 space-y-2">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="block py-2 text-foreground hover:text-blue transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ x: 5 }}
              >
                {link.name}
              </motion.a>
            ))}
            <div className="py-2 flex items-center space-x-4">
              <LanguageSwitch />
              <ThemeToggle />
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
