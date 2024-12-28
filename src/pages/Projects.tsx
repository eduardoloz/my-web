import React from 'react';
import Project from '../components/Project'; // Ensure the import path is correct
import projects from '../data/projects.json'; // Ensure the import path is correct

const Projects: React.FC = () => {
  return (
    <div className="pt-20">
  <div className="container mx-auto flex flex-col gap-12 mt-14 px-4">
    <h1 className="text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
      My Projects
    </h1>
    <p className="text-lg md:text-xl lg:text-2xl text-center lg:text-left mb-6">
      Here are some of the projects I have worked on:
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Project
          key={project.id}
          id={project.id}
          title={project.title}
          author={project.author}
          description={project.description}
          technologies={project.technologies}
        />
      ))}
    </div>
  </div>
</div>

  );
};

export default Projects;
