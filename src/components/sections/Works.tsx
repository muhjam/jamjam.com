'use client';

import { works } from '@/mock/works';
import Image from 'next/image';

interface WorksProps {
  locale: string;
}

// Terjemahan
const messages = {
  en: {
    title: 'My Works',
    subtitle: 'Some of my recent projects',
    viewProject: 'View Project',
    viewCode: 'View Code',
    present: 'Present',
    technologies: 'Technologies',
    role: 'Role',
    duration: 'Duration',
  },
  id: {
    title: 'Portofolio Saya',
    subtitle: 'Beberapa proyek terbaru saya',
    viewProject: 'Lihat Proyek',
    viewCode: 'Lihat Kode',
    present: 'Sekarang',
    technologies: 'Teknologi',
    role: 'Peran',
    duration: 'Durasi',
  }
};

export default function Works({ locale }: WorksProps) {
  const t = locale in messages ? messages[locale as keyof typeof messages] : messages.en;
  
  const getWorkDescription = (work: typeof works[0]) => {
    return work.description[locale as keyof typeof work.description] || work.description.en;
  };

  const formatDate = (dateString: string) => {
    if (dateString === 'Present') {
      return t.present;
    }
    const date = new Date(dateString);
    return date.toLocaleDateString(locale, { month: 'short', year: 'numeric' });
  };

  return (
    <section 
      id="works" 
      className="py-20 bg-gray-50 dark:bg-gray-800 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            {t.subtitle}
          </p>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-48 relative">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  {work.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
                  {getWorkDescription(work)}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {work.tools.map((tool) => (
                    <span 
                      key={tool} 
                      className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>
                    {`${formatDate(work.startDate)} - ${formatDate(work.endDate)}`}
                  </span>
                </div>
                <div className="flex space-x-4 mt-6">
                  {work.link && (
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <span className="mr-2">🔗</span>
                      {t.viewProject}
                    </a>
                  )}
                  <a
                    href={`https://github.com/username/${work.title.toLowerCase().replace(/\s+/g, '-')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <span className="mr-2">💻</span>
                    {t.viewCode}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
