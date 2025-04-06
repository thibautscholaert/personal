
import React from 'react';
import { Code, Database, Layout, Server, Shield, Terminal } from 'lucide-react';

interface Technology {
  id: number;
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

const TechStack = () => {
  const technologies: Technology[] = [
    {
      id: 1,
      name: 'Frontend',
      icon: <Layout size={32} />,
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Vue.js', 'Angular', 'Tailwind CSS', 'SASS'],
    },
    {
      id: 2,
      name: 'Backend',
      icon: <Server size={32} />,
      skills: ['Node.js', 'Express', 'Python', 'Django', 'PHP', 'Laravel', 'ASP.NET'],
    },
    {
      id: 3,
      name: 'Database',
      icon: <Database size={32} />,
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Redis', 'GraphQL'],
    },
    {
      id: 4,
      name: 'DevOps',
      icon: <Terminal size={32} />,
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Linux', 'Nginx'],
    },
    {
      id: 5,
      name: 'Security',
      icon: <Shield size={32} />,
      skills: ['OAuth', 'JWT', 'HTTPS', 'CSP', 'Penetration Testing'],
    },
    {
      id: 6,
      name: 'Languages',
      icon: <Code size={32} />,
      skills: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'C#', 'Java', 'Go'],
    },
  ];

  return (
    <section id="technologies" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">My Tech Stack</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech) => (
            <div 
              key={tech.id} 
              className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4 text-navy">
                {tech.icon}
                <h3 className="text-xl font-bold ml-3">{tech.name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {tech.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-white text-gray-700 px-3 py-1 text-sm rounded-full border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
