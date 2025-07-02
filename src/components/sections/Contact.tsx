'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

export default function Contact() {
  const t = useTranslations();
  
  // Debug: Log available translation keys
  useEffect(() => {
    console.log('Contact translations:', t.raw(''));
    console.log('Form title:', t('form.title'));
  }, [t]);
  
  return (
    <section 
      id="contact" 
      className="py-20 bg-white dark:bg-gray-900 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {t('contact.title')}
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              {t('contact.form.title')}
            </h3>
            <form 
              action="https://tally.so/r/your-tally-form-id" 
              method="post"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder={t('contact.form.name')}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder={t('contact.form.email')}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder={t('contact.form.message')}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {t('contact.form.submit')}
                </button>
              </div>
              <div className="flex space-x-4 mt-8">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" aria-label="GitHub">
                  <span className="text-2xl">🐙</span>
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" aria-label="LinkedIn">
                  <span className="text-2xl">💼</span>
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" aria-label="Instagram">
                  <span className="text-2xl">📷</span>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" aria-label="Twitter">
                  <span className="text-2xl">🐦</span>
                </a>
              </div>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {t('contact.contactInfo')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t('contact.description')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                    <span className="text-blue-600 dark:text-blue-400">✉️</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      {t('contact.email')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">your.email@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                    <span className="text-blue-600 dark:text-blue-400">📞</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      {t('contact.phone')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">+1 (234) 567-890</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                    <span className="text-blue-600 dark:text-blue-400">📍</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">{t('contact.location')}</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {t('contact.hours')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {t('contact.followMe')}
              </h4>
              <div className="flex space-x-4">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" aria-label="GitHub">
                  <span className="text-2xl">🐙</span>
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" aria-label="LinkedIn">
                  <span className="text-2xl">💼</span>
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" aria-label="Instagram">
                  <span className="text-2xl">📷</span>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" aria-label="Twitter">
                  <span className="text-2xl">🐦</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
