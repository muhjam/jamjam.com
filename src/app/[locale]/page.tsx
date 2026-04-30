'use client';

import dynamic from 'next/dynamic';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

// Define supported locales
type Locale = 'en' | 'id';
const locales: Locale[] = ['en', 'id'];


// Dynamically import components with loading fallback
const Navbar = dynamic(() => import('@/components/navbar'), { 
  loading: () => <div className="h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" />,
  ssr: false 
});

const WhatsAppButton = dynamic(() => import('@/components/whatsapp-button'), { 
  ssr: false 
});

const Hero = dynamic(() => import('@/components/sections/hero'), { 
  ssr: false 
});

const About = dynamic(() => import('@/components/sections/about'), { 
  ssr: false 
});

const Works = dynamic(() => import('@/components/sections/works'), { 
  ssr: false 
});

const Contact = dynamic(() => import('@/components/sections/contact'), { 
  ssr: false 
});

const Footer = dynamic(() => import('@/components/footer'), { 
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
        <Suspense fallback={""}>
          <Hero />
        </Suspense>
        <Suspense fallback={""}>
          <About />
        </Suspense>
        <Suspense fallback={""}>
          <Works />
        </Suspense>
        <Suspense fallback={""}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
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
