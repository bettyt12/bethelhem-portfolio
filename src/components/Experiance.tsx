import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 transition duration-300 ease-in-out transform hover:bg-blue-100 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Toplink Technology - Frontend Developer</h3>
            <p className="text-sm mb-2">Mar 2023 - Present</p>
            <p className="text-sm mb-4">Worked on a transformative Water Utility Management Information System project. Developed responsive, user-friendly modules using React, Material UI, and Redux.</p>
          </div>
          <div className="bg-white rounded-lg p-6 transition duration-300 ease-in-out transform hover:bg-blue-100 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">FetaTech LLC - Software Engineer</h3>
            <p className="text-sm mb-2">Jul 2022 - Jan 2024</p>
            <p className="text-sm mb-4">Developed captivating user interfaces using React and Next.js. Concurrently served as a Product Manager and ensured timely completion of projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
