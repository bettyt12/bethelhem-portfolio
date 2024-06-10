import React from 'react';
// import cartoonImage from '../assets/cartoon-woman-computer.png';

const About: React.FC = () => {
  return (
		<section id="about" className="py-16 bg-gradient-to-b from-purple-50 to-purple-100 text-gray-800">
		<div className="container mx-auto flex flex-col md:flex-row items-center">
			<div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
				<h2 className="text-4xl md:text-5xl font-bold mb-4">Bethelhem Tarekegn</h2>
				<p className="text-lg md:text-xl mb-4">Passionate Software Developer</p>
				<p className="text-sm md:text-base mb-8">3+ years of experience in building web applications with JavaScript, React, and Node.js. Dedicated to continuous learning and solving complex problems.</p>
			</div>
			{/* <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center">
				<img src={cartoonImage} alt="Cartoon woman sitting at a computer" className="w-3/4 md:w-full"/>
			</div> */}
		</div>
	</section>
  );
};

export default About;
