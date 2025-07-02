'use client';

import { useTranslations, useLocale } from 'next-intl';
import { works } from '@/mock/works';
import { useState } from 'react';

export default function Works() {
  const t = useTranslations();
  const locale = useLocale() as 'en' | 'id';
  const [selectedTool, setSelectedTool] = useState<string>('all');

  // Get unique tools from all works
  const allTools = Array.from(
    new Set(works.flatMap(work => work.tools))
  ).sort();

  // Filter works by selected tool
  const filteredWorks = selectedTool === 'all'
    ? works
    : works.filter(work => work.tools.includes(selectedTool));

  return (
    <section id="works" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t('works.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t('works.subtitle')}
          </p>
        </div>

        {/* Tools Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            key="all"
            onClick={() => setSelectedTool('all')}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              selectedTool === 'all'
                ? 'text-white bg-blue-600 hover:bg-blue-700'
                : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          >
            All
          </button>
          {allTools.map((tool) => (
            <button
              key={tool}
              onClick={() => setSelectedTool(tool)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                selectedTool === tool
                  ? 'text-white bg-blue-600 hover:bg-blue-700'
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            >
              {tool}
            </button>
          ))}
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative pb-[56.25%]">
                <img
                  src={work.image}
                  alt={work.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {work.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {work.description[locale]}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {work.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                {work.link && (
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {t('works.viewProject')} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
