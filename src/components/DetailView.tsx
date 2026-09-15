import React from 'react';
import ImageSlider, { MediaItem } from './ImageSlider';

export type MediaEntry =
  | string
  | { src: string; caption?: string; type?: 'image' | 'video' | 'pdf'; pdf?: string };

export interface DetailItem {
  title: string;
  author?: string;
  date?: string;
  role?: string;
  organization?: string;
  location?: string;
  start?: string;
  end?: string;
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

const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov', '.ogg'];

export const toMediaItem = (entry: MediaEntry): MediaItem => {
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

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** Format a "YYYY-MM" or "YYYY" string as "Mon YYYY" / "YYYY". */
export const formatMonth = (value?: string): string => {
  if (!value) return '';
  const [year, month] = value.split('-');
  if (month) {
    const idx = parseInt(month, 10) - 1;
    if (idx >= 0 && idx < 12) return `${MONTHS[idx]} ${year}`;
  }
  return year;
};

export const formatRange = (start?: string, end?: string): string => {
  const s = formatMonth(start);
  const e = end ? formatMonth(end) : 'Present';
  return s && e ? `${s} – ${e}` : s || e;
};

const DetailView: React.FC<{ item: DetailItem }> = ({ item }) => {
  const isPDF = item.image?.endsWith('.pdf');
  const mediaEntries: MediaEntry[] = item.images ?? (item.image ? [item.image] : []);
  const media = mediaEntries.map(toMediaItem);
  const isExperience = Boolean(item.role || item.start);

  const isYouTubeVideo = item.demo?.includes('youtube.com') || false;
  let videoSrc = item.demo || '';
  if (isYouTubeVideo && videoSrc.includes('watch?v=')) {
    videoSrc = videoSrc.replace('watch?v=', 'embed/');
  }

  const subtitleParts = [item.role, item.organization, item.location].filter(Boolean);

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl lg:text-5xl font-bold mb-3">{item.title}</h1>
        {isExperience ? (
          <div className="mb-4">
            {subtitleParts.length > 0 && (
              <h2 className="text-xl lg:text-2xl text-gray-700">{subtitleParts.join(' · ')}</h2>
            )}
            <p className="text-md lg:text-lg text-gray-500 mt-1">
              {formatRange(item.start, item.end)}
            </p>
          </div>
        ) : (
          <h2 className="text-xl lg:text-2xl text-gray-700 mb-4">
            by {item.author} ({item.date})
          </h2>
        )}
        {item['source-code'] && (
          <a href={item['source-code']} className="text-blue-500 underline mb-4 block">
            [Source Code]
          </a>
        )}
        {isPDF && item.image ? (
          <div className="pdf-viewer mb-6">
            <h3 className="text-xl lg:text-2xl font-bold mb-4">Document</h3>
            <ImageSlider media={media} alt={item.title} />
          </div>
        ) : (
          <ImageSlider media={media} alt={item.title} />
        )}
        {item.document && (
          <a
            href={item.document}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mb-6 block"
          >
            [{item['document-label'] || 'Open Document (PDF)'}]
          </a>
        )}
        <p className="text-lg lg:text-xl mb-6">{item.description}</p>
        {item['long-description'] && (
          <p className="text-lg lg:text-xl mb-6">{item['long-description']}</p>
        )}
        <p className="text-md lg:text-lg mb-6">
          <strong>Technologies Used:</strong> {item.technologies.join(', ')}
        </p>
        {item.demo && (
          <div className="mb-6">
            <h3 className="text-xl lg:text-2xl font-bold mb-4">Demo</h3>
            {isYouTubeVideo ? (
              <iframe
                width="560"
                height="315"
                src={videoSrc}
                title="Demo video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <a href={item.demo} className="text-blue-500 underline">
                {item.demo}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailView;
