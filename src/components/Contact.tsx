import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, GitHub, Twitter } from 'react-feather';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const mailtoLink = `mailto:betitarekegn12@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-800/90 to-gray-900/90 text-white relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">Let's work together on your next project</p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-blue-300">Contact Information</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:betitarekegn12@gmail.com" 
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-600/30 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600/50 transition-colors">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium">betitarekegn12@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="tel:+251984625198" 
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-600/30 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600/50 transition-colors">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="font-medium">+251 984 625 198</p>
                  </div>
                </a>
                
                <div className="flex items-center text-gray-300">
                  <div className="w-12 h-12 bg-blue-600/30 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="font-medium">Shewareged Gedle St, Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 mb-4">Connect with me</p>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-blue-600/50 transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-blue-600/50 transition-colors group"
                  >
                    <GitHub className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-blue-600/50 transition-colors group"
                  >
                    <Twitter className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-1000 delay-300 hover:shadow-2xl hover:shadow-blue-500/20 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-semibold mb-6 text-blue-300">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
