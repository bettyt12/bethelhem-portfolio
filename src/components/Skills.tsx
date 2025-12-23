import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frontend Frameworks",
      skills: ["React.js", "Next.js", "React Native"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "State Management & Styling",
      skills: ["Redux", "Material UI", "Tailwind CSS"],
      color: "from-cyan-500 to-teal-500"
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "MongoDB", "Express"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900/90 to-gray-800/90 text-white relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">Technologies I work with</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`group relative bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              <h3 className="text-xl font-semibold mb-4 text-blue-300 relative z-10">
                {category.title}
              </h3>
              <ul className="space-y-2 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="flex items-center text-gray-300 group-hover:text-white transition-colors"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-cyan-500 transition-colors"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-semibold mb-4 text-center text-blue-300">Additional Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["UI/UX Design", "Product Management", "Quality Assurance", "Machine Learning", "Flutter", "Firebase", "TensorFlow", "Keras"].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gray-700/50 rounded-full text-sm text-gray-300 hover:bg-blue-600/50 hover:text-white transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
