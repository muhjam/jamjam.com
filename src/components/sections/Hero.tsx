'use client';

import { useTranslations } from 'next-intl';
import { socials } from '@/mock/socials';

export default function Hero() {
  const t = useTranslations();
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t('hero.greeting')}{' '}
            <span className="text-blue-600 dark:text-blue-400">
              {t('hero.name')}
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-8">
            {t('hero.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('hero.contactMe')}
            </a>
            <a
              href="/cv.pdf"
              download
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              {t('hero.downloadCV')}
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={social.ariaLabel}
                >
                  <span className="sr-only">{social.name}</span>
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
