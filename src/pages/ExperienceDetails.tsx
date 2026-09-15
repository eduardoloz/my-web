import React from 'react';
import { useParams } from 'react-router-dom';
import DetailView, { DetailItem } from '../components/DetailView';
import experiencesData from '../data/experiences.json';

const experiences = experiencesData as (DetailItem & { id: number })[];

const ExperienceDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const experience = experiences.find((e) => e.id.toString() === id);

  if (!experience) {
    return <div className="pt-24 container mx-auto px-4">Experience not found</div>;
  }

  return <DetailView item={experience} />;
};

export default ExperienceDetails;
