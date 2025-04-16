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
      tags: ['Next.js', 'MongoDB', 'Firebase', 'TMDB API', 'Web scraping', 'Vercel', 'Upstash'],
      // githubUrl: '#',
      liveUrl: 'https://tibeechaw.com/',
    },
    {
      id: 2,
      title: t('portfolio', 'project2Title'),
      description: t('portfolio', 'project2Description'),
      image: '/img/music.tibeechaw.png',
      tags: ['Next.js', 'Supabase', 'Google Drive API', 'Vercel'],
      githubUrl: 'https://github.com/thibautscholaert/tibeemusic',
      liveUrl: 'https://music.tibeechaw.com/',
    },
    {
      id: 3,
      title: t('portfolio', 'project3Title'),
      description: t('portfolio', 'project3Description'),
      image: '/img/youtube.tibeechaw.png',
      tags: ['Next.js', 'Youtube API', 'NextAuth.js', 'Vercel'],
      githubUrl: 'https://github.com/thibautscholaert/youtibee-app',
      liveUrl: 'https://youtube.tibeechaw.com',
    },
    {
      id: 4,
      title: t('portfolio', 'project4Title'),
      description: t('portfolio', 'project4Description'),
      image: '/img/youtibee-api.png',
      tags: ['Python', 'Docker', 'Flask', 'Render'],
      githubUrl: 'https://github.com/thibautscholaert/youtibee-api',
    },
    {
      id: 5,
      title: t('portfolio', 'project5Title'),
      description: t('portfolio', 'project5Description'),
      image: '/img/me.tibeechaw.png',
      tags: ['React', 'Vite', 'Vercel', 'lovable.dev', 'EmailJS'],
      githubUrl: 'https://github.com/thibautscholaert/personal',
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
        <br />

        <motion.h3
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('portfolio', 'subtitle1')}
        </motion.h3>

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
                {project.githubUrl ? <motion.a
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
                  :
                  <motion.button
                    disabled={true}
                    className="text-foreground/70 hover:text-accent transition-colors duration-300"
                    aria-label={`${t('portfolio', 'viewGithub')} ${project.title}`}
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                  </motion.button>
                }

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

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/thibautscholaert"
            target='_blank'
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('portfolio', 'viewAllProjects')}
            <ExternalLink size={20} />

          </motion.a>
        </motion.div>
      </div>
      <motion.a
        href="#technologies"
        className="absolute bottom-10 left-[calc(50%-12px)] transform -translate-x-[calc(50%-12px)]"
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
