import React from 'react';
import { useParams } from 'react-router-dom';

interface ProjectDetailsParams {
  id: string;
}

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // Fetch the project details using the ID or use static data for now
  const project = {
    title: `Project ${id}`,
    author: "Eduardo Lozano",
    description: `Description of Project ${id}. This project involves...`,
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    image: `/path/to/project-image${id}.png` // Adjust the path as necessary
  };

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