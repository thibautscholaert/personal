import React, { createContext, useState, useContext, ReactNode } from 'react';

// Translation content
const translations = {
  en: {
    navbar: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      technologies: 'Tech Stack',
      contact: 'Contact',
    },
    hero: {
      title: "Hi, I'm",
      subtitle: '🚀 Fullstack Developer',
      description: 'Freelance in addition to my main activity, I am available in the evening and on weekends for development missions, architecture optimization or technical support.',
      viewWork: 'View My Work',
      contactMe: 'Contact Me',
      technologies: 'Tech Stack',
    },
    // about: {
    //   title: 'About Me',
    //   description1: 'Hello! I\'m a passionate software developer with a strong background in creating responsive and user-friendly web applications. With over X years of experience in the industry, I\'ve worked on a wide range of projects from small business websites to complex enterprise applications.',
    //   description2: 'My approach to development focuses on creating clean, maintainable code that delivers exceptional user experiences. I believe in continuous learning and staying up-to-date with the latest technologies and best practices in the industry.',
    //   description3: 'When I\'m not coding, you can find me hiking in the mountains, reading tech blogs, or experimenting with new programming languages and frameworks.',
    //   downloadResume: 'Download Resume',
    //   education: 'Education',
    //   educationDegree: 'Bachelor\'s Degree in Computer Science',
    //   educationYear: 'University Name, 2015-2019',
    //   experience: 'Experience',
    //   experienceRole: 'Senior Developer',
    //   experienceYear: 'Company Name, 2019-Present',
    //   languages: 'Languages',
    //   language1: 'English (Native)',
    //   language2: 'Spanish (Conversational)',
    //   interests: 'Interests',
    //   interest1: 'Web Development',
    //   interest2: 'UI/UX Design',
    //   interest3: 'Open Source',
    // },
    portfolio: {
      title: 'My Portfolio',
      project1Title: 'Movies/Series Platform',
      project1Description: 'Explore movies/series with advanced filters, aggregated ratings, personalized suggestions and more.',
      project1DescriptionMore: 'Site interfaced with TMDB/Trakt/OMDB API. Web scraping AlloCiné/Kinépolis to retrieve ratings for movies in theaters.',
      project2Title: 'Youtube playlist explorer',
      project2Description: 'An application that allows you to connect to your Youtube account and browse your playlists and download in audio format.',
      project3Title: 'Personal website',
      project3Description: 'Showcase website to present my projects and skills. Initialized with AI: lovable.dev',
      viewGithub: 'View repository on GitHub',
      viewDemo: 'View live demo',
      viewAllProjects: 'View All Projects',
    },
    techStack: {
      title: 'My Technical Stack',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      languages: 'Languages',
      devops: 'DevOps',
      quality: 'Quality',
      security: 'Security',
    },
    contact: {
      title: 'Get In Touch',
      description: 'I\'m interested in freelance opportunities – especially ambitious or large projects. If you have a request or question, don\'t hesitate to use the form or contact me via email.',
      location: 'Loos, France',
      nameLabel: 'Name',
      namePlaceholder: 'John Doe',
      emailLabel: 'Email Address',
      emailPlaceholder: 'john@example.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Your message here...',
      sending: 'Sending...',
      sendButton: 'Send Message',
      successMessage: 'Message sent successfully! I\'ll get back to you soon.',
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
      technologies: 'Stack tech',
      contact: 'Contact',
    },
    hero: {
      title: "Bonjour, je suis",
      subtitle: '🚀 Développeur Fullstack',
      description: 'Freelance en complément de mon activité principale, je suis disponible en soirée et le week-end pour des missions de développement, d\'optimisation d\'architectures ou d\'accompagnement technique.',
      viewWork: 'Voir Mes Projets',
      contactMe: 'Me Contacter',
      technologies: 'Compétences',
    },
    // about: {
    //   title: 'À Propos de Moi',
    //   description1: 'Bonjour ! Je suis un développeur passionné avec une solide expérience dans la création d\'applications web réactives et conviviales. Avec plus de X ans d\'expérience dans l\'industrie, j\'ai travaillé sur une large gamme de projets, des sites web pour petites entreprises aux applications d\'entreprise complexes.',
    //   description2: 'Mon approche du développement se concentre sur la création de code propre et maintenable qui offre des expériences utilisateur exceptionnelles. Je crois en l\'apprentissage continu et au maintien à jour avec les dernières technologies et meilleures pratiques de l\'industrie.',
    //   description3: 'Quand je ne code pas, vous pouvez me trouver en randonnée dans les montagnes, en train de lire des blogs tech, ou d\'expérimenter avec de nouveaux langages de programmation et frameworks.',
    //   downloadResume: 'Télécharger le CV',
    //   education: 'Éducation',
    //   educationDegree: 'Licence en Informatique',
    //   educationYear: 'Nom de l\'Université, 2015-2019',
    //   experience: 'Expérience',
    //   experienceRole: 'Développeur Senior',
    //   experienceYear: 'Nom de l\'Entreprise, 2019-Présent',
    //   languages: 'Langues',
    //   language1: 'Anglais (Natif)',
    //   language2: 'Espagnol (Conversationnel)',
    //   interests: 'Centres d\'Intérêt',
    //   interest1: 'Développement Web',
    //   interest2: 'Design UI/UX',
    //   interest3: 'Open Source',
    // },
    portfolio: {
      title: 'Mon Portfolio',
      subtitle1: 'Projets personnels',
      project1Title: 'Plateforme de films/séries',
      project1Description: 'Exploration de films/séries avec filtres avancés, notes aggrégées, suggestions personnalisées et plus encore.',
      project1DescriptionMore: 'Site interfacé avec TMDB/Trakt/OMDB API. Web scrapping AlloCiné/Kinépolis pour récupérer les notes pour les films en salle.',
      project2Title: 'Audio manager & streaming',
      project2Description: 'Site de gestion de fichiers audio. Intégration Google drive pour stockage des fichiers. Utilisation de Supabase pour le streaming',
      project3Title: 'Youtube playlist explorer',
      project3Description: 'Une application qui permet de se connecter à son compte Youtube et de parcourir ses playlists et télécharger au format audio.',
      project4Title: 'Youtube download API',
      project4Description: 'Une API qui permet de télécharger des vidéos Youtube au format m4a.',
      project5Title: 'Site web personnel',
      project5Description: 'Site vitrine pour présenter mes projets et mes compétences. Itinialisé avec IA : lovable.dev',
      viewGithub: 'Voir le dépôt sur GitHub',
      viewDemo: 'Voir la démo en direct',
      viewAllProjects: 'Voir Tous les Projets',
    },
    techStack: {
      title: 'Ma Stack Technologique',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Base de Données',
      languages: 'Langages',
      devops: 'DevOps',
      quality: 'Qualité',
      security: 'Sécurité',
    },
    contact: {
      title: 'Contactez-moi',
      description: 'Je suis intéressé par les opportunités de freelance – particulièrement les projets ambitieux ou de grande envergure. Si vous avez une demande ou une question, n\'hésitez pas à utiliser le formulaire ou à me contacter par email.',
      location: 'Loos, Nord, France',
      nameLabel: 'Nom',
      namePlaceholder: 'Jean Dupont',
      emailLabel: 'Votre Adresse Email',
      emailPlaceholder: 'jean@exemple.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Votre message ici...',
      sending: 'Envoi en cours...',
      sendButton: 'Envoyer le Message',
      successMessage: 'Message envoyé avec succès ! Je vous répondrai bientôt.',
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
  const [language, setLanguage] = useState<Language>(() => {
    // Get browser language and extract the primary language code
    const browserLang = navigator.language.split('-')[0];
    // Check if the browser language is supported (en or fr)
    return (browserLang === 'en' || browserLang === 'fr') ? browserLang : 'en';
  });

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
