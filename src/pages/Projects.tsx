import React from 'react';
import Project from '../components/Project'; // Ensure the import path is correct
import projects from '../data/projects.json'; // Ensure the import path is correct

const Projects: React.FC = () => {
  return (
    <div className="pt-20">

  <div className="container mx-auto flex flex-col gap-12 mt-14 px-4">
          <p className="text-lg md:text-xl lg:text-2xl text-center lg:text-left mb-6">
      Here are some of the projects I have worked on:
      </p>
    {Object.entries(
      projects.reduce((acc, project) => {
      const year = project.date.split('-')[0];
      if (!acc[year]) acc[year] = [];
      acc[year].push(project);
      return acc;
      }, {} as Record<string, typeof projects>)
    )
      .sort(([yearA], [yearB]) => parseInt(yearB) - parseInt(yearA))
      .map(([year, projects]) => (
      <div key={year}>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center lg:text-left mb-4">
        {year}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((project) => (
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
      ))}

  </div>
</div>

  );
};

export default Projects;
