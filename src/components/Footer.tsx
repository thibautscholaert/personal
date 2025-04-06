
import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, url: '#' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: '#' },
    { name: 'Twitter', icon: <Twitter size={20} />, url: '#' },
    { name: 'Instagram', icon: <Instagram size={20} />, url: '#' },
  ];
  
  return (
    <footer className="bg-blue dark:bg-blue-dark text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-white/90">
              &copy; {currentYear} Your Name. {t('footer', 'rights')}
            </p>
          </motion.div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                aria-label={link.name}
                className="text-white/80 hover:text-lime transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.2 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
