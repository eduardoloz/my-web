import React from 'react';
import { useNavigate } from 'react-router-dom';
import experiencesData from '../data/experiences.json';
import { DetailItem, formatRange } from '../components/DetailView';

type Experience = DetailItem & { id: number };

const experiences = (experiencesData as Experience[])
  .slice()
  .sort((a, b) => (b.start || '').localeCompare(a.start || ''));

const ExperiencePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      <div className="container mx-auto flex flex-col gap-8 mt-14 px-4">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-center lg:text-left">
            Experiences
          </h1>
          <p className="text-lg md:text-xl text-gray-600 text-center lg:text-left">
            Research and industry roles I&apos;ve held. Click any entry for details.
          </p>
        </div>

        <div className="relative mt-4 pb-8">
          {/* vertical timeline rail */}
          <div className="absolute top-0 bottom-0 left-4 lg:left-1/2 w-0.5 bg-sky-200 lg:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={exp.id} className="relative pl-12 lg:pl-0">
                  {/* node dot */}
                  <span className="absolute left-4 lg:left-1/2 top-7 w-5 h-5 -translate-x-1/2 rounded-full bg-sky-500 ring-4 ring-white shadow z-10" />

                  <div className={`lg:w-1/2 ${isLeft ? 'lg:pr-12' : 'lg:ml-auto lg:pl-12'}`}>
                    <button
                      onClick={() => navigate(`/experience/${exp.id}`)}
                      className="w-full text-left bg-white border border-gray-200 rounded-lg shadow-md p-5 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-sky-300 hover:bg-sky-50"
                    >
                      <p className="text-sm font-semibold text-sky-600 mb-1">
                        {formatRange(exp.start, exp.end)}
                      </p>
                      <h2 className="text-xl lg:text-2xl font-bold">{exp.title}</h2>
                      <h3 className="text-md lg:text-lg text-gray-700">
                        {[exp.role, exp.organization].filter(Boolean).join(' · ')}
                      </h3>
                      {exp.location && (
                        <p className="text-sm text-gray-500">{exp.location}</p>
                      )}
                      <p className="text-md mt-2 text-gray-800">{exp.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-sky-100 text-sky-800 rounded-full px-2.5 py-0.5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span className="inline-block mt-3 text-sm text-blue-500 font-medium">
                        View details &rarr;
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
