import React from 'react';
import { Mail, MapPin } from 'react-feather';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900/90 via-blue-900/50 to-gray-900/90 text-white pt-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div ref={ref} className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Bethelhem Tarekegn Alemu
            </h1>
            <p className="text-2xl md:text-3xl font-semibold mb-4 text-blue-300">
              Software Engineer
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-gray-300">
              <a href="mailto:betitarekegn12@gmail.com" className="flex items-center hover:text-blue-400 transition-colors">
                <Mail className="mr-2 w-5 h-5" />
                <span>betitarekegn12@gmail.com</span>
              </a>
              <div className="flex items-center">
                <MapPin className="mr-2 w-5 h-5" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>
          
          <div className={`bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-blue-500/30 shadow-2xl transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 text-center">
              Passionate software engineer with <span className="text-blue-400 font-semibold">4+ years</span> of experience building scalable web applications. I specialize in <span className="text-blue-400 font-semibold">React.js, Next.js, TypeScript, Node.js</span>, and modern frontend technologies. I have contributed to projects serving over <span className="text-blue-400 font-semibold">1 million active users</span>, focusing on creating high-performance, user-centric solutions.
            </p>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              <Mail className="mr-2 w-5 h-5" />
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
