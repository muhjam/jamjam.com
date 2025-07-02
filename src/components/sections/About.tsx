'use client';

import { useTranslations } from 'next-intl';

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
};

export default function About() {
  const t = useTranslations();
  
  // Get the experience data from translations
  const experience = t.raw('about.experience') as unknown as Experience[];

  return (
    <section 
      id="about" 
      className="py-20 bg-white dark:bg-gray-900 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            {t('about.subtitle')}
          </p>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed">
              {t('about.description2')}
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('about.skillsTitle')}
              </h3>
              <div className="space-y-3">
                {[
                  'RAGFlow', 'Dify', 'Next.js', 'Vue.js', 'Laravel', 'TypeScript', 'Python', 'Node.js', 
                  'Tailwind CSS', 'Docker'
                ].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('about.experienceTitle')}
              </h3>
              <div className="space-y-6">
                {Array.isArray(experience) && experience.map((exp, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {exp.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 text-sm mb-1">
                      {exp.company} • {exp.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
