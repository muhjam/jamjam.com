'use client';

import { works, type WorkItem } from '@/mock/works';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

type ProjectData = {
  id: string;
  title: string;
  description: string;
  image: string;
  tools: string[];
  startDate: string;
  endDate: string | 'Present';
  link?: string;
};


export default function Works() {
  const t = useTranslations();
  
  // Get project data from the mock file and combine with translations
  const getProjectData = (workItem: WorkItem): ProjectData | null => {
    try {
      // Fallback to mock data if translations are not available
      const title = workItem.title;
      const description = workItem.description.en;
      const tags = workItem.tools;
      
      return {
        id: workItem.id,
        title,
        description,
        image: workItem.image,
        tools: tags,
        startDate: workItem.startDate,
        endDate: workItem.endDate,
        link: workItem.link
      };
    } catch (err) {
      console.error(`Error getting project data for id: ${workItem.id}`, err);
      return null;
    }
  };

  return (
    <section id="works" className="py-20 bg-gray-50 dark:bg-gray-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {t('works.title')}
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            {t('works.subtitle')}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.entries(t.raw('filters') as Record<string, string>).map(([key, label]) => (
            <button
              key={key}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                key === 'all'
                  ? 'text-white bg-blue-600 hover:bg-blue-700'
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => {
            const projectData = getProjectData(work);
            if (!projectData) {
              console.warn(`No data found for project: ${work.id}`);
              return null;
            }
            
            return (
              <div
                key={projectData.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={projectData.image}
                    alt={projectData.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {projectData.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {projectData.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projectData.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-100"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  {projectData.link && (
                    <a
                      href={projectData.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium mt-auto"
                    >
                      {t('works.viewProject')}
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
