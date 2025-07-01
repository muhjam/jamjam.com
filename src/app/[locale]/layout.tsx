'use client';

import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ReactNode, useEffect } from 'react';
import '../globals.css';
import { Locale, locales } from '@/utils/i18n';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = params;

  // Check if the requested locale is supported
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Set the document language
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <div className={`${inter.className} min-h-screen flex flex-col`}>
      {/* @ts-expect-error Server Component */}
      <Navbar locale={locale} />
      <main className="flex-grow">
        {children}
      </main>
      {/* @ts-expect-error Server Component */}
      <Footer locale={locale} />
    </div>
  );
}

// This ensures that this layout is not statically generated at build time
export const dynamic = 'force-dynamic';
