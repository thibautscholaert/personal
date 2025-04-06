
import React from 'react';
import { FileText } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-gray-700 mb-6">
              Hello! I'm a passionate software developer with a strong background in creating responsive 
              and user-friendly web applications. With over X years of experience in the industry, 
              I've worked on a wide range of projects from small business websites to complex 
              enterprise applications.
            </p>
            <p className="text-gray-700 mb-6">
              My approach to development focuses on creating clean, maintainable code that delivers 
              exceptional user experiences. I believe in continuous learning and staying up-to-date 
              with the latest technologies and best practices in the industry.
            </p>
            <p className="text-gray-700 mb-8">
              When I'm not coding, you can find me hiking in the mountains, reading tech blogs, 
              or experimenting with new programming languages and frameworks.
            </p>
            
            <a 
              href="#" 
              className="btn-primary"
              aria-label="Download resume"
            >
              <FileText size={18} />
              Download Resume
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-navy text-xl mb-2">Education</h3>
              <p className="text-gray-600">Bachelor's Degree in Computer Science</p>
              <p className="text-gray-500 text-sm">University Name, 2015-2019</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-navy text-xl mb-2">Experience</h3>
              <p className="text-gray-600">Senior Developer</p>
              <p className="text-gray-500 text-sm">Company Name, 2019-Present</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-navy text-xl mb-2">Languages</h3>
              <p className="text-gray-600">English (Native)</p>
              <p className="text-gray-600">Spanish (Conversational)</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-navy text-xl mb-2">Interests</h3>
              <p className="text-gray-600">Web Development</p>
              <p className="text-gray-600">UI/UX Design</p>
              <p className="text-gray-600">Open Source</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
