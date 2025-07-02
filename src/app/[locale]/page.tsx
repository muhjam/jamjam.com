'use client';

import dynamic from 'next/dynamic';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

// Define supported locales
type Locale = 'en' | 'id';
const locales: Locale[] = ['en', 'id'];

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

// Dynamically import components with loading fallback
const Navbar = dynamic(() => import('@/components/Navbar'), { 
  loading: () => <div className="h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" />,
  ssr: false 
});

const Hero = dynamic(() => import('@/components/sections/Hero'), { 
  loading: LoadingSpinner,
  ssr: false 
});

const About = dynamic(() => import('@/components/sections/About'), { 
  loading: LoadingSpinner,
  ssr: false 
});

const Works = dynamic(() => import('@/components/sections/Works'), { 
  loading: LoadingSpinner,
  ssr: false 
});

const Contact = dynamic(() => import('@/components/sections/Contact'), { 
  loading: LoadingSpinner,
  ssr: false 
});

const Footer = dynamic(() => import('@/components/Footer'), { 
  loading: () => <div className="h-12 bg-gray-900" />,
  ssr: false 
});

// This is a client component that renders the page content
function PageContent() {
  const locale = useLocale();
  
  // Verify the locale is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <About />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Works />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

// This is the page component that handles the initial locale validation
export default function HomePage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  // Check if the requested locale is supported
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return <PageContent />;
}
