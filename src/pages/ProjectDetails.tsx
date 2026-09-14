import React from 'react';
import { useParams } from 'react-router-dom';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import ImageSlider, { MediaItem } from '../components/ImageSlider';
import projectsData from '../data/projects.json';

type MediaEntry =
  | string
  | { src: string; caption?: string; type?: 'image' | 'video' | 'pdf'; pdf?: string };

interface ProjectData {
  id: number;
  date: string;
  title: string;
  author: string;
  description: string;
  'long-description'?: string;
  technologies: string[];
  image?: string;
  images?: MediaEntry[];
  document?: string;
  'document-label'?: string;
  demo?: string;
  'source-code'?: string;
}

const projects = projectsData as ProjectData[];

const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov', '.ogg'];

const toMediaItem = (entry: MediaEntry): MediaItem => {
  const src = typeof entry === 'string' ? entry : entry.src;
  const caption = typeof entry === 'string' ? undefined : entry.caption;
  const explicitType = typeof entry === 'string' ? undefined : entry.type;
  const pdf = typeof entry === 'string' ? undefined : entry.pdf;
  const lower = src.toLowerCase();
  const type =
    explicitType ??
    (lower.includes('.pdf')
      ? 'pdf'
      : VIDEO_EXTENSIONS.some((ext) => lower.includes(ext))
        ? 'video'
        : 'image');
  return { src, type, caption, pdf };
};

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  const isPDF = project.image?.endsWith('.pdf');
  const mediaEntries: MediaEntry[] = project.images ?? (project.image ? [project.image] : []);
  const media = mediaEntries.map(toMediaItem);
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
        {isPDF && project.image ? (
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
          <ImageSlider media={media} alt={project.title} />
        )}
        {project.document && (
          <a
            href={project.document}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mb-6 block"
          >
            [{project['document-label'] || 'Open Document (PDF)'}]
          </a>
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
