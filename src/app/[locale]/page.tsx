'use client';

import { notFound } from 'next/navigation';
import { useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Works from '@/components/sections/Works';
import Contact from '@/components/sections/Contact';

// List of supported locales
const locales = ['en', 'id'];

interface PageProps {
  params: {
    locale: string;
  };
}

export default function HomePage({ params: { locale } }: PageProps) {
  // Check if the requested locale is supported
  if (!locales.includes(locale)) {
    notFound();
  }

  // Set the document language
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <>
      <Hero locale={locale} />
      <About locale={locale} />
      <Works locale={locale} />
      <Contact locale={locale} />
    </>
  );
}

export const dynamic = 'force-dynamic'; // Ensure this page is always dynamic
