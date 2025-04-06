
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

const Portfolio = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A fully responsive e-commerce website with product filtering, cart functionality, and user authentication.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application that helps users organize tasks with drag-and-drop functionality.',
      image: 'https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      tags: ['Vue.js', 'Firebase', 'Tailwind'],
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that displays current weather conditions and forecasts for multiple locations.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80',
      tags: ['React', 'OpenWeather API', 'Chart.js'],
      githubUrl: '#',
      liveUrl: '#',
    },
  ];

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">My Portfolio</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-teal/10 text-navy px-2 py-1 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.githubUrl} 
                    className="text-gray-700 hover:text-navy transition-colors duration-300"
                    aria-label={`View ${project.title} repository on GitHub`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </a>
                  
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      className="text-gray-700 hover:text-navy transition-colors duration-300"
                      aria-label={`View ${project.title} live demo`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="btn-secondary">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
