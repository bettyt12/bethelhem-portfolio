import React from 'react';
import { BookOpen, Award, Calendar, MapPin } from 'react-feather';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Education: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-900/90 to-gray-800/90 text-white relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">My academic background</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className={`relative bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 md:p-10 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="ml-6 flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-300 mb-2 md:mb-0">
                    Bachelor of Science in Software Engineering
                  </h3>
                  <div className="flex items-center text-blue-400">
                    <Award className="w-5 h-5 mr-2" />
                    <span className="text-xl font-semibold">GPA: 3.76</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <div className="w-12 h-12 bg-blue-600/30 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Bahir Dar University</p>
                      <p className="text-gray-400">Bahir Dar, Ethiopia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <div className="w-12 h-12 bg-blue-600/30 rounded-lg flex items-center justify-center mr-4">
                      <Calendar className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-400">Completed</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p className="text-gray-300 leading-relaxed">
                    Comprehensive education in software engineering principles, covering software development lifecycle, 
                    algorithms, data structures, database systems, web development, and software project management. 
                    Strong foundation in both theoretical knowledge and practical application.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

