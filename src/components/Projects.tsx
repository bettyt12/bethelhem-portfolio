import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  projectLink: string;
}

const projects: Project[] = [
  {
    title: "Internal Tool",
    description: "Control API for project development",
    technologies: ["React.js", "Redux"],
    projectLink: "#"
  },
  {
    title: "Fly Tweets",
    description: "Platform for creating and sharing campaigns and tweets",
    technologies: ["React.js", "Node.js", "MongoDB"],
    projectLink: "#"
  },
  {
    title: "Archive",
    description: "Genocide recording project for archiving events in Ethiopia",
    technologies: ["React.js", "Next.js", "MongoDB"],
    projectLink: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <p className="text-sm mb-2 font-semibold">Technologies:</p>
                <ul className="list-disc ml-6">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="text-sm">{tech}</li>
                  ))}
                </ul>
              </div>
              <a href={project.projectLink} className="text-blue-500 hover:underline self-end">Project Link</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
