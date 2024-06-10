import React from 'react';

const Skills: React.FC = () => {
  return (
		<section id="skills" className="py-16 bg-gray-100">
		<div className="container mx-auto">
			<h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Technical Skills</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<div className="bg-white rounded shadow-lg p-6">
					<h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
					<ul className="list-disc ml-6">
						<li className="text-sm">Java</li>
						<li className="text-sm">Python</li>
						<li className="text-sm">JavaScript</li>
						<li className="text-sm">TypeScript</li>
					</ul>
				</div>
				<div className="bg-white rounded shadow-lg p-6">
					<h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
					<ul className="list-disc ml-6">
						<li className="text-sm">React.js</li>
						<li className="text-sm">Next.js</li>
						<li className="text-sm">React Native</li>
						<li className="text-sm">Redux</li>
					</ul>
				</div>
				<div className="bg-white rounded shadow-lg p-6">
					<h3 className="text-xl font-semibold mb-4">Other Skills</h3>
					<ul className="list-disc ml-6">
						<li className="text-sm">Node.js</li>
						<li className="text-sm">MongoDB</li>
						<li className="text-sm">Tailwind CSS</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
  );
};

export default Skills;
