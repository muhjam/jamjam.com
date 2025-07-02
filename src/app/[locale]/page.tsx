'use client';

import dynamic from 'next/dynamic';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

// Define supported locales
type Locale = 'en' | 'id';
const locales: Locale[] = ['en', 'id'];

// Dynamically import components with no SSR
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });
// Sementara nonaktifkan Footer karena ada masalah dengan terjemahan
// const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const Hero = dynamic(() => import('@/components/sections/Hero'), { ssr: false });
const About = dynamic(() => import('@/components/sections/About'), { ssr: false });
const Works = dynamic(() => import('@/components/sections/Works'), { ssr: false });
const Contact = dynamic(() => import('@/components/sections/Contact'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

// This is a client component that renders the page content
function PageContent() {
  const locale = useLocale() as Locale;
  
  // Verify the locale is valid
  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        }>
          <Hero />
          <About />
          <Works />
          <Contact />
        </Suspense>
      </main>
      {/* Sementara nonaktifkan Footer karena ada masalah dengan terjemahan */}
      <Footer />
    </>
  );
}

// This is a server component that handles the initial locale validation
export default function HomePage({
  params: { locale }
}: {
  params: { locale: Locale }
}) {
  // Check if the requested locale is supported
  if (!locales.includes(locale)) {
    notFound();
  }

  // The PageContent component is a client component that renders the actual page
  return <PageContent />;
}
