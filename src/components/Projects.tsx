import React from 'react';
import { ExternalLink, Calendar } from 'react-feather';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  projectLink?: string;
  period?: string;
  type: "personal" | "professional";
}

const Projects: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  const projects: Project[] = [
    {
      title: "Piassa Dating",
      description: "A comprehensive dating application developed using Flutter and Firebase. Designed and implemented various features to enhance user experience, with integrated Firebase services for real-time data management and authentication.",
      technologies: ["Flutter", "Firebase"],
      projectLink: "#",
      period: "Apr 2022 - Sep 2022",
      type: "personal"
    },
    {
      title: "Heart Disease Prediction using Machine Learning",
      description: "Developed and trained machine learning models using Python, Keras, TensorFlow, and MXNet to predict heart disease. Utilized advanced algorithms for robust analysis and accurate prognostication. Performed data visualization and processing using NumPy and Jupyter Notebook.",
      technologies: ["Python", "Keras", "TensorFlow", "MXNet", "NumPy", "Jupyter Notebook"],
      period: "May 2022 - Aug 2022",
      type: "personal"
    },
    {
      title: "Water Utility Management Information System",
      description: "Transformative system spanning 22 Ethiopian cities, serving 40,000 to 86,000 customers per city. Developed responsive modules for customer service, reading, and billing.",
      technologies: ["React.js", "TypeScript", "Material UI", "Redux"],
      type: "professional"
    },
    {
      title: "Sportsbook & Casino Gaming Platforms",
      description: "Responsive web applications for sportsbook betting and casino gaming. Optimized for SEO and performance, serving large user bases.",
      technologies: ["React.js", "TypeScript", "Tailwindcss"],
      projectLink: "#",
      type: "professional"
    },
    {
      title: "Market Linkage and Cold Room Management System",
      description: "Complete system for managing perishable products with user-friendly interfaces and robust database schema.",
      technologies: ["React.js", "Node.js", "Express", "MongoDB"],
      type: "professional"
    },
    {
      title: "Archive - Genocide Recording Project",
      description: "Project archiving events in Ethiopia, built with modern web technologies for historical documentation.",
      technologies: ["React.js", "Next.js", "MongoDB"],
      type: "professional"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900/90 to-gray-800/90 text-white relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">A showcase of my work and personal projects</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  project.type === "personal" 
                    ? "bg-cyan-600/30 text-cyan-300 border border-cyan-500/50" 
                    : "bg-blue-600/30 text-blue-300 border border-blue-500/50"
                }`}>
                  {project.type === "personal" ? "Personal" : "Professional"}
                </span>
                {project.period && (
                  <div className="flex items-center text-gray-400 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{project.period}</span>
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-blue-300 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-300 text-sm mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-300 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs border border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {project.projectLink && (
                <a 
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-400 hover:text-cyan-400 transition-colors mt-auto group/link"
                >
                  <ExternalLink className="w-4 h-4 mr-2 group-hover/link:scale-110 transition-transform" />
                  <span className="text-sm">View Project</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
