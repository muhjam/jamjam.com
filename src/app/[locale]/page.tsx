'use client';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Works from '@/components/sections/Works';
import Contact from '@/components/sections/Contact';

interface PageProps {
  params: {
    locale: string;
  };
}

export default function HomePage({ params: { locale } }: PageProps) {
  // Set the document language
  if (typeof document !== 'undefined') {
    document.documentElement.lang = locale;
  }

  return (
    <>
      <Hero locale={locale} />
      <About locale={locale} />
      <Works locale={locale} />
      <Contact locale={locale} />
    </>
  );
}
