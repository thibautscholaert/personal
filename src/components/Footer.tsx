
import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, url: '#' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: '#' },
    { name: 'Twitter', icon: <Twitter size={20} />, url: '#' },
    { name: 'Instagram', icon: <Instagram size={20} />, url: '#' },
  ];
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              &copy; {currentYear} Your Name. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                aria-label={link.name}
                className="text-gray-400 hover:text-teal transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
