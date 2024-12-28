import React from 'react';
import Project from '../components/Project'; // Ensure the import path is correct
import projects from '../data/projects.json'; // Ensure the import path is correct

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
