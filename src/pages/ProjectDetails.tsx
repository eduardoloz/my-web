import React from 'react';
import { useParams } from 'react-router-dom';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import projects from '../data/projects.json';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  const isPDF = project.image?.endsWith('.pdf');
  const isYouTubeVideo = project.demo?.includes('youtube.com') || false;
  let videoSrc = project.demo || '';
  if (isYouTubeVideo && videoSrc.includes('watch?v=')) {
    videoSrc = videoSrc.replace('watch?v=', 'embed/');
  }

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl lg:text-5xl font-bold mb-6">{project.title}</h1>
        <h2 className="text-xl lg:text-2xl text-gray-700 mb-4">
          by {project.author} ({project.date})
        </h2>
        <a href={project['source-code']} className="text-blue-500 underline mb-4 block">
          [Source Code]
        </a>
        {isPDF ? (
          <div className="pdf-viewer mb-6">
            <h3 className="text-xl lg:text-2xl font-bold mb-4">Document</h3>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer fileUrl={project.image} />
            </Worker>
            <a
              href={project.image}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Open Full PDF
            </a>
          </div>
        ) : (
          <img
            src={project.image}
            alt={`${project.title} Image`}
            className="w-full lg:w-5/8 h-80 object-contain mb-6"
          />
        )}
        <p className="text-lg lg:text-xl mb-6">{project.description}</p>
        {project['long-description'] && (
          <p className="text-lg lg:text-xl mb-6">{project['long-description']}</p>
        )}
        <p className="text-md lg:text-lg mb-6">
          <strong>Technologies Used:</strong> {project.technologies.join(', ')}
        </p>
        {project.demo && (
          <div className="mb-6">
            <h3 className="text-xl lg:text-2xl font-bold mb-4">Demo</h3>
            {isYouTubeVideo ? (
              <iframe
                width="560"
                height="315"
                src={videoSrc}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <a href={project.demo} className="text-blue-500 underline">
                {project.demo}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
