'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

interface ClientLayoutProps {
  children: ReactNode;
  locale: string;
}

type Messages = Record<string, Record<string, unknown>>;

export default function ClientLayout({ children, locale }: ClientLayoutProps) {
  const [messages, setMessages] = useState<Messages | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        setIsLoading(true);
        // Import all translation files in parallel
        const translationModules = await Promise.all([
          import(`@/locales/${locale}/common.json`),
          import(`@/locales/${locale}/footer.json`),
          import(`@/locales/${locale}/hero.json`),
          import(`@/locales/${locale}/navbar.json`),
          import(`@/locales/${locale}/contact.json`),
          import(`@/locales/${locale}/about.json`),
          import(`@/locales/${locale}/works.json`)
        ]);

        // Define the namespaces in the same order as the imports
        const namespaces = ['common', 'footer', 'hero', 'navbar', 'contact', 'about', 'works'];
        
        // Process each module and assign to its namespace
        const mergedMessages = translationModules.reduce<Messages>((acc, module, index) => {
          const namespace = namespaces[index];
          if (!module) return acc;
          
          // Get the module data
          const moduleData = module.default || {};
          
          // The entire module is the namespace content
          // But we need to handle the case where the module is already namespaced
          const messages = moduleData[namespace] || moduleData;
          
          return {
            ...acc,
            [namespace]: messages
          };
        }, {});
        
        console.log('Loaded messages:', JSON.stringify(mergedMessages, null, 2));
        
        setMessages(mergedMessages);
      } catch (error) {
        console.error('Failed to load translations:', error);
        // Fallback to empty translations
        setMessages({
          common: {},
          footer: {},
          hero: {},
          navbar: {},
          contact: {},
          about: {},
          works: {}
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadMessages();
  }, [locale, router]);

  if (isLoading || !messages) {
    return (
      <div className="flex items-center justify-center min-h-screen">
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