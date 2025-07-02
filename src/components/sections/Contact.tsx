'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';
import { FiPhone, FiMapPin } from 'react-icons/fi';
import { socials } from '@/mock/socials';

interface TallyOptions {
  width?: number;
  alignLeft?: number;
  hideTitle?: number;
  transparentBackground?: number;
  dynamicHeight?: number;
  hiddenFields?: {
    name?: FormDataEntryValue | null;
    email?: FormDataEntryValue | null;
    message?: FormDataEntryValue | null;
    [key: string]: FormDataEntryValue | null | undefined;
  };
  onClose?: () => void;
}

declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string, options?: TallyOptions) => void;
    };
  }
}

export default function Contact() {
  const t = useTranslations();
  const tallyIframeRef = useRef<HTMLIFrameElement>(null);
  
  // Debug: Log available translation keys
  useEffect(() => {
    console.log('Contact translations:', t.raw(''));
    console.log('Form title:', t('form.title'));
  }, [t]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
            {/* Tally.so iframe */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              <iframe
                ref={tallyIframeRef}
                src="https://tally.so/embed/3qqqj9?alignLeft=1&hideTitle=1&transparentBackground=0&dynamicHeight=1&backgroundColor=%23F3F4F6&buttonFullWidth=1"
                width="100%"
                height="400"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Contact Form"
                className="rounded-lg"
              ></iframe>
            </div>
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
                {socials.map((social) => {
                  if (social.id === 'email') {
                    const Icon = social.icon;
                    return (
                      <div key={social.id} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                          <Icon className="text-blue-600 dark:text-blue-400" size={20} />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                            {t('contact.email')}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">{social.href.replace('mailto:', '')}</p>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                    <FiPhone className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      {t('contact.phone')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">+62 812-5757-8571</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                    <FiMapPin className="text-blue-600 dark:text-blue-400" size={20} />
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
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      aria-label={social.ariaLabel}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
