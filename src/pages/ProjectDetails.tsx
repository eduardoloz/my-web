import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projects.json'; // Ensure the import path is correct

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((project) => project.id.toString() === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl lg:text-5xl font-bold mb-6">{project.title}</h1>
        <h2 className="text-xl lg:text-2xl text-gray-700 mb-4">by {project.author}</h2>
        <img src={project.image} alt={`${project.title} Image`} className="w-full lg:w-1/2 mb-6" />
        <p className="text-lg lg:text-xl mb-6">{project.description}</p>
        <p className="text-md lg:text-lg"><strong>Technologies Used:</strong> {project.technologies.join(', ')}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;