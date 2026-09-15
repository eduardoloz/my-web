import React from 'react';
import { useParams } from 'react-router-dom';
import DetailView, { DetailItem } from '../components/DetailView';
import projectsData from '../data/projects.json';

const projects = projectsData as (DetailItem & { id: number })[];

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return <div className="pt-24 container mx-auto px-4">Project not found</div>;
  }

  return <DetailView item={project} />;
};

export default ProjectDetails;
