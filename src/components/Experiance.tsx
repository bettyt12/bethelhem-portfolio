import React from 'react';
import { Briefcase, Calendar, ExternalLink } from 'react-feather';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  const experiences = [
    {
      company: "Convex Technology",
      role: "Senior Frontend Developer",
      period: "June 2024 - Present",
      technologies: ["React.js", "TypeScript", "Tailwindcss"],
      description: "Developed responsive web applications for sportsbook betting and casino gaming platforms.",
      achievements: [
        "Collaborated with cross-functional teams to create user-friendly interfaces focused on performance and scalability",
        "Utilized modern JavaScript frameworks and technologies to enhance front-end functionality",
        "Optimized web applications for SEO to improve search engine rankings and organic traffic",
        "Ensured timely delivery of tasks in a fast-paced, agile environment"
      ],
      projects: [
        { name: "HuluSport", link: "#" },
        { name: "Habtam Bet", link: "#" }
      ]
    },
    {
      company: "Toplink Technology",
      role: "Frontend Developer",
      period: "Mar 2023 - Present",
      technologies: ["TypeScript", "React.js", "Material UI"],
      description: "Worked as a Frontend Developer in a transformative Water Utility Management Information System project spanning 22 Ethiopian cities, each serving populations ranging from 40,000 to 86,000 customers per city.",
      achievements: [
        "Developed and optimized responsive, user-friendly modules for customer service, reading, and billing",
        "Ensured seamless functionality and enhanced user experience to meet diverse community needs",
        "Implemented user interfaces using React, Material UI, and Redux",
        "Fixed bugs in the previous codebase"
      ],
      projects: []
    },
    {
      company: "FetaTech LLC",
      role: "Software Engineer",
      period: "Jul 2022 - Jan 2024",
      technologies: ["JavaScript", "TypeScript", "React.js", "Next.js"],
      description: "Developed captivating user interfaces and served in multiple roles including UI/UX designer and Product Manager.",
      achievements: [
        "Developed captivating user interfaces using JavaScript libraries React and Next.js, alongside Material UI",
        "Concurrently served as a UI/UX designer to ensure seamless user experience across platforms",
        "Worked as a Product Manager on various projects, assuming full responsibility for their success",
        "Collaborated as a Quality Assurance team member to thoroughly test a social media app (dating platform)"
      ],
      projects: [
        { name: "AdminTool", link: "#" },
        { name: "Mobile App", link: "#" }
      ],
      additionalProjects: [
        "Internal tool used to control API of projects",
        "Fly tweets: a site for creating campaigns and sharing tweets",
        "Admin tool: a web app to control social media app activities",
        "Archive: a genocide recording project archiving events in Ethiopia"
      ]
    },
    {
      company: "BIT Makerspace",
      role: "Software Engineer",
      period: "Mar 2022 - Aug 2022",
      technologies: ["React.js", "Node.js", "Express", "MongoDB"],
      description: "Designed and developed the Market Linkage and Cold Room Management system project.",
      achievements: [
        "Designed and crafted user-friendly interfaces as a UI/UX designer, ensuring intuitive navigation",
        "Developed a robust and efficient database schema as a backend developer to organize and manage perishable products",
        "Implemented frontend features and functionalities using JavaScript, SQL, and VS Code",
        "Conducted thorough unit tests to validate functionality and reliability of both frontend and backend components"
      ],
      projects: []
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-800/90 to-gray-900/90 text-white relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">My journey in software development</p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`group relative bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 md:p-8 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-blue-300 group-hover:text-blue-400 transition-colors">
                    {exp.company}
                  </h3>
                  <p className="text-xl text-gray-300 mb-2">{exp.role}</p>
                  <div className="flex items-center text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm border border-blue-500/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.additionalProjects && (
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">Projects Worked On:</h4>
                  <ul className="space-y-1">
                    {exp.additionalProjects.map((project, projIndex) => (
                      <li key={projIndex} className="text-gray-400 text-sm">
                        • {project}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.projects.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">Project Links:</h4>
                  <div className="flex flex-wrap gap-3">
                    {exp.projects.map((project, projIndex) => (
                      <a 
                        key={projIndex}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-400 hover:text-cyan-400 transition-colors group"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        <span>{project.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
