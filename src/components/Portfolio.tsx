import React from 'react';
import { ArrowDown, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const Portfolio = () => {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      id: 1,
      title: t('portfolio', 'project1Title'),
      description: t('portfolio', 'project1Description'),
      image: '/img/tibeechaw.png',
      tags: ['Next.js', 'MongoDB', 'Firebase', 'TMDB API', 'Web scraping', 'Vercel'],
      // githubUrl: '#',
      liveUrl: 'https://tibeechaw.com/',
    },
    {
      id: 2,
      title: t('portfolio', 'project2Title'),
      description: t('portfolio', 'project2Description'),
      image: '/img/youtube.tibeechaw.png',
      tags: ['Next.js', 'Python', 'Docker', 'Vercel', 'Render'],
      // githubUrl: '#',
      liveUrl: 'https://youtibee-app.vercel.app/',
    },
    {
      id: 3,
      title: t('portfolio', 'project3Title'),
      description: t('portfolio', 'project3Description'),
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80',
      tags: ['React', 'Vite', 'Vercel', 'lovable.dev'],
      githubUrl: '#',
      liveUrl: 'https://me.tibeechaw.com/',
    },
  ];

  return (
    <section id="portfolio" className="min-h-[calc(100vh-72px)] flex items-center relative bg-gradient-to-br from-background to-muted">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('portfolio', 'title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="flex flex-col justify-between bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                {project.liveUrl ?
                  <a href={project.liveUrl} target='_blank' rel='noopener noreferrer'><img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  /></a> : <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />}

              </div>

              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-foreground/70">{project.description}</p>
              </div>
              <div className="px-6 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-accent/10 text-accent px-2 py-1 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="p-6 flex gap-3">
                <motion.a
                  href={project.githubUrl}
                  className="text-foreground/70 hover:text-accent transition-colors duration-300"
                  aria-label={`${t('portfolio', 'viewGithub')} ${project.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                </motion.a>

                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    className="text-foreground/70 hover:text-accent transition-colors duration-300"
                    aria-label={`${t('portfolio', 'viewDemo')} ${project.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/thibautscholaert"
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('portfolio', 'viewAllProjects')}
          </motion.a>
        </motion.div> */}
      </div>
      <motion.a
        href="#technologies"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        aria-label="Scroll down"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <ArrowDown className="text-lime" />
      </motion.a>
    </section>
  );
};

export default Portfolio;
