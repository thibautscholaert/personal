import React from 'react';
import { ArrowDown, Code, Database, Layout, Server, Shield, ShieldCheckIcon, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

interface Technology {
  id: number;
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

const TechStack = () => {
  const { t } = useLanguage();

  const technologies: Technology[] = [
    {
      id: 1,
      name: t('techStack', 'frontend'),
      icon: <Layout size={32} />,
      skills: ['HTML/CSS', 'JavaScript/TypeScript', 'React', 'Next.js', 'Angular', 'Tailwind CSS'],
    },
    {
      id: 2,
      name: t('techStack', 'backend'),
      icon: <Server size={32} />,
      skills: ['Node.js', 'NestJS', 'Spring Boot'],
    },
    {
      id: 3,
      name: t('techStack', 'database'),
      icon: <Database size={32} />,
      skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'Redis'],
    },
    {
      id: 4,
      name: t('techStack', 'languages'),
      icon: <Code size={32} />,
      skills: ['JavaScript', 'TypeScript', 'Java'],
    },
    {
      id: 5,
      name: t('techStack', 'devops'),
      icon: <Terminal size={32} />,
      skills: ['Git', 'Docker', 'Gitlab CI/CD', 'Kubernetes', 'GCP'],
    },
    {
      id: 6,
      name: t('techStack', 'quality'),
      icon: <ShieldCheckIcon size={32} />,
      skills: ['Postman/Newman', 'Gatling', 'SonarQube', 'Trivy', 'Swagger', 'Jest', 'JUnit'],
    },
    {
      id: 7,
      name: t('techStack', 'security'),
      icon: <Shield size={32} />,
      skills: ['OAuth', 'JWT'],
    },
  ];

  return (
    <section id="technologies" className="min-h-[calc(100vh-72px)] flex items-center relative bg-gradient-to-br from-background to-muted">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('techStack', 'title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4 text-foreground">
                {tech.icon}
                <h3 className="text-xl font-bold ml-3">{tech.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {tech.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-accent/10 text-accent px-3 py-1 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.a
        href="#contact"
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

export default TechStack;
