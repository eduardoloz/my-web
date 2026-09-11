import React, { useState } from 'react';

interface ImageSliderProps {
  images: string[];
  alt: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, alt }) => {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) return null;

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  return (
    <div className="relative w-full lg:w-3/4 mb-6 rounded-lg border border-gray-200 bg-gray-50 overflow-hidden">
      <img
        src={images[current]}
        alt={`${alt} ${current + 1} of ${images.length}`}
        className="w-full h-80 lg:h-96 object-contain"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-md hover:bg-white text-2xl text-gray-700 flex items-center justify-center transition-colors"
          >
            &#8249;
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-md hover:bg-white text-2xl text-gray-700 flex items-center justify-center transition-colors"
          >
            &#8250;
          </button>
          <div className="absolute bottom-3 right-3 flex space-x-1.5 bg-white/70 backdrop-blur-sm rounded-md p-1.5 shadow-md">
            {images.map((img, i) => (
              <button key={img} onClick={() => setCurrent(i)} aria-label={`View ${i + 1}`}>
                <img
                  src={img}
                  alt={`${alt} thumbnail ${i + 1}`}
                  className={`w-12 h-9 object-cover rounded border-2 transition-all ${
                    i === current
                      ? 'border-blue-500'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
