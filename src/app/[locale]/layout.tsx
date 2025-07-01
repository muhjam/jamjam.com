'use client';

import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeInitializer from '@/components/ThemeInitializer';
import { useParams } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import '../globals.css';
import { Locale } from '@/utils/i18n';

const inter = Inter({ subsets: ['latin'] });

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: Locale };
}

export default function LocaleLayout({ children }: LocaleLayoutProps) {
  const [messages, setMessages] = useState<Record<string, unknown> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { locale } = useParams();

  useEffect(() => {
    const isMounted = { current: true };
    
    async function loadMessages() {
      try {
        // Add a small delay to show loading state (for demo purposes)
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Dynamically import the messages for the current locale
        const loadedMessages = (await import(`@/mock/locales/${locale}/common.json`)).default;
        
        // Only update state if component is still mounted
        if (isMounted.current) {
          setMessages(loadedMessages);
        }
      } catch (error) {
        console.error(`Failed to load messages for locale ${locale}:`, error);
        if (isMounted.current) {
          setMessages({}); // Set empty messages to prevent infinite loading
        }
        console.error(`Failed to load messages for locale ${locale}:`, error);
      } finally {
        setIsLoading(false);
      }
    }
    
    loadMessages();
    
    return () => {
      isMounted.current = false;
    };
  }, [locale]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!messages) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Failed to load translations.</p>
      </div>
    );
  }

  return (
    <NextIntlClientProvider locale={locale as string} messages={messages}>
      <ThemeProvider 
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        disableTransitionOnChange
        storageKey="theme"
      >
        <ThemeInitializer />
        <div className={`${inter.className} min-h-screen flex flex-col`}>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
