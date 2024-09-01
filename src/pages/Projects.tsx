import React from 'react';
import Project from '../components/Project'; // Ensure the import path is correct

const projects = [
  {
    id: 1,
    title: "Pulley Simulator",
    author: "Tedd Lee and Eduardo Lozano",
    description: "A simulation of massive pulleys. Done for Physics C final project.",
    technologies: ["Python", "WebPython"],
    image: "/path/to/project-image1.png" // Adjust the path as necessary
  },
  {
    id: 2,
    title: "BrainFudge",
    author: "Tedd Lee and Eduardo Lozano",
    description: "A BrainFudge interpreter made with Processing, a java library.",
    technologies: ["Java", "p5", "Processing", "BrainFudge"],
    image: "/path/to/project-image2.png" // Adjust the path as necessary
  },
  // Add more projects as needed
  {
    id: 3,
    title: "HopperDreams",
    author: "Eduardo Lozano, Samuel Buena, Jerry Lin, and Lee Einsenburg",
    description: "Hackathon project configured with React and uses MongoDB for storing user information",
    technologies: ["Node.js", "React", "MongoDB"],
    image: "/path/to/project-image2.png" // Adjust the path as necessary
  },
  {
    id: 4,
    title: "HopperDreams",
    author: "Eduardo Lozano, Samuel Buena, Jerry Lin, and Lee Einsenburg",
    description: "Hackathon project configured with React and uses MongoDB for storing user information",
    technologies: ["Node.js", "React", "MongoDB"],
    image: "/path/to/project-image2.png" // Adjust the path as necessary
  },
];

const Projects: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="container flex flex-col items-center lg:items-start gap-12 mt-14">
        <h1 className="text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6 lg:pl-10">
          My Projects
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-center lg:text-left mb-6 lg:pl-10">
          Here are some of the projects I have worked on:
        </p>
        <div className="flex flex-col space-y-4 lg:space-y-6">
          {projects.map((project) => (
            <Project
              key={project.id}
              id={project.id}
              title={project.title}
              author={project.author}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
