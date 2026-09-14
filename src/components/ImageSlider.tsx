import React, { useEffect, useState } from 'react';
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export interface MediaItem {
  src: string;
  type: 'image' | 'video' | 'pdf';
  caption?: string;
  /** Optional full-quality PDF opened in a zoomable fullscreen modal (for image previews of a PDF). */
  pdf?: string;
}

interface ImageSliderProps {
  media: MediaItem[];
  alt: string;
}

const PdfModal: React.FC<{ src: string; title: string; onClose: () => void }> = ({
  src,
  title,
  onClose,
}) => {
  // react-pdf-viewer plugins call hooks internally, so this must be called
  // directly in the component body (not inside useMemo/useEffect).
  const layout = defaultLayoutPlugin();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="flex flex-col w-full max-w-6xl h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between bg-gray-900 text-white px-4 py-2 shrink-0">
          <span className="text-sm font-medium truncate">{title}</span>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 rounded-full hover:bg-white/20 text-2xl leading-none flex items-center justify-center"
          >
            &times;
          </button>
        </div>
        <div className="flex-1 min-h-0">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer fileUrl={src} plugins={[layout]} defaultScale={SpecialZoomLevel.PageWidth} />
          </Worker>
        </div>
      </div>
    </div>
  );
};

const ImageSlider: React.FC<ImageSliderProps> = ({ media, alt }) => {
  const [current, setCurrent] = useState(0);
  const [pdfModal, setPdfModal] = useState<string | null>(null);

  if (media.length === 0) return null;

  const prev = () => setCurrent((current - 1 + media.length) % media.length);
  const next = () => setCurrent((current + 1) % media.length);

  const item = media[current];

  return (
    <div className="w-full lg:w-3/4 mb-6">
      <div className="relative rounded-lg border border-gray-200 bg-gray-50 overflow-hidden">
        {item.type === 'pdf' ? (
          <div className="w-full h-80 lg:h-96 overflow-auto bg-white">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer fileUrl={item.src} defaultScale={SpecialZoomLevel.PageFit} />
            </Worker>
          </div>
        ) : item.type === 'video' ? (
          <video
            key={item.src}
            src={item.src}
            controls
            className="w-full h-80 lg:h-96 object-contain bg-black"
          />
        ) : (
          <>
            <img
              src={item.src}
              alt={item.caption || `${alt} ${current + 1} of ${media.length}`}
              className={`w-full h-80 lg:h-96 object-contain ${item.pdf ? 'cursor-zoom-in' : ''}`}
              onClick={item.pdf ? () => setPdfModal(item.pdf!) : undefined}
            />
            {item.pdf && (
              <button
                onClick={() => setPdfModal(item.pdf!)}
                className="absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-md bg-gray-900/70 hover:bg-gray-900 text-white text-sm px-3 py-1.5 shadow-md"
              >
                <span aria-hidden="true">&#9974;</span> Zoom / Fullscreen
              </button>
            )}
          </>
        )}
        {media.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-md hover:bg-white text-2xl text-gray-700 flex items-center justify-center transition-colors z-10"
            >
              &#8249;
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-md hover:bg-white text-2xl text-gray-700 flex items-center justify-center transition-colors z-10"
            >
              &#8250;
            </button>
            <div className="absolute bottom-3 right-3 flex space-x-1.5 bg-white/70 backdrop-blur-sm rounded-md p-1.5 shadow-md z-10">
              {media.map((m, i) => {
                const active = i === current;
                const ring = active
                  ? 'border-blue-500'
                  : 'border-transparent opacity-60 hover:opacity-100';
                if (m.type === 'image') {
                  return (
                    <button key={m.src} onClick={() => setCurrent(i)} aria-label={`View ${i + 1}`}>
                      <img
                        src={m.src}
                        alt={`${alt} thumbnail ${i + 1}`}
                        className={`w-12 h-9 object-cover rounded border-2 transition-all ${ring}`}
                      />
                    </button>
                  );
                }
                return (
                  <button key={m.src} onClick={() => setCurrent(i)} aria-label={`View ${i + 1}`}>
                    <div
                      className={`relative w-12 h-9 rounded border-2 overflow-hidden transition-all bg-gray-800 ${ring}`}
                    >
                      {m.type === 'video' ? (
                        <>
                          <video
                            src={m.src}
                            muted
                            preload="metadata"
                            className="w-full h-full object-cover bg-black"
                          />
                          <span className="absolute inset-0 flex items-center justify-center text-white text-sm drop-shadow">
                            &#9658;
                          </span>
                        </>
                      ) : (
                        <span className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-semibold">
                          PDF
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
      {item.caption && (
        <p className="mt-2 text-center text-sm text-gray-600 italic">{item.caption}</p>
      )}
      {pdfModal && <PdfModal src={pdfModal} title={alt} onClose={() => setPdfModal(null)} />}
    </div>
  );
};

export default ImageSlider;
