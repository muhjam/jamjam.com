'use client';

import { ReactNode, useEffect, useState } from 'react';
import { NextIntlClientProvider } from 'next-intl';

interface ClientLayoutProps {
  children: ReactNode;
  locale: string;
}

type Messages = Record<string, Record<string, string | object>>;

export default function ClientLayout({ children, locale }: ClientLayoutProps) {
  const [messages, setMessages] = useState<Messages | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        setIsLoading(true);
        
        // Load all translation files and merge them properly
        const [
          commonModule,
          footerModule,
          heroModule,
          navbarModule,
          contactModule,
          aboutModule,
          worksModule
        ] = await Promise.all([
          import(`@/locales/${locale}/common.json`),
          import(`@/locales/${locale}/footer.json`),
          import(`@/locales/${locale}/hero.json`),
          import(`@/locales/${locale}/navbar.json`),
          import(`@/locales/${locale}/contact.json`),
          import(`@/locales/${locale}/about.json`),
          import(`@/locales/${locale}/works.json`)
        ]);

        // Merge all the translation namespaces into a flat structure
        const mergedMessages = {
          ...commonModule.default,
          ...footerModule.default,
          ...heroModule.default,
          ...navbarModule.default,
          ...contactModule.default,
          ...aboutModule.default,
          ...worksModule.default
        };
        
        setMessages(mergedMessages);
      } catch (error) {
        console.error('Failed to load translations:', error);
        // Provide minimal fallback to prevent crashes
        setMessages({
          common: { home: 'Home', about: 'About', works: 'Works', contact: 'Contact', portfolio: 'Portfolio' },
          hero: { greeting: 'Hi, I\'m', name: 'Developer', title: 'Full Stack Developer' },
          navbar: { home: 'Home', about: 'About', works: 'Works', contact: 'Contact' }
        });
      } finally {
        setIsLoading(false);
      }
    };

    if (locale) {
      loadMessages();
    }
  }, [locale]);

  if (isLoading || !messages) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}