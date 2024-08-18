import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProjectProps {
  id: number;
  title: string;
  author: string;
  description: string;
  technologies: string[];
  image?: string;
}

const Project: React.FC<ProjectProps> = ({ id, title, author, description, technologies, image }) => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      navigate(`/project/${id}`);
    }, 300); // Adjust the duration to match your animation
  };

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6 mb-8 p-4 cursor-pointer transition-all duration-300 ease-in-out 
      ${clicked ? 'bg-blue-200 rounded-lg' : 'bg-white'} ${clicked ? 'border-radius' : ''}`}
      style={{ borderRadius: clicked ? '16px' : '4px' }}
    >
      {image && <img src={image} alt={`${title} Image`} className="w-32 h-32 lg:w-48 lg:h-48 mb-4 lg:mb-0" />}
      <div>
        <h2 className="text-2xl lg:text-3xl font-bold">{title}</h2>
        <h3 className="text-md lg:text-lg text-gray-700">by {author}</h3>
        <p className="text-md lg:text-lg mt-2">{description}</p>
        <p className="text-sm lg:text-md mt-2"><strong>Technologies Used:</strong> {technologies.join(', ')}</p>
      </div>
    </div>
  );
};

export default Project;
