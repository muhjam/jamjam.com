import { Metadata } from 'next';
import { Locale } from '@/utils/i18n';

type Props = {
  params: { locale: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  
  return {
    title: 'Jamjam - AI Engineer & Full Stack Developer',
    description: 'Experienced AI Engineer and Full Stack Developer specializing in Next.js, Vue.js, Laravel, and Python. Building innovative solutions with AI integration and modern web technologies.',
    metadataBase: new URL('https://jamjam.my.id'),
    keywords: [
      'AI Engineer',
      'Full Stack Developer',
      'Next.js',
      'Vue.js',
      'Laravel',
      'Python',
      'Typescript',
      'Web Development',
      'AI Integration',
      'Portfolio'
    ],
    authors: [{ name: 'Jamjam' }],
    creator: 'Jamjam',
    publisher: 'Jamjam',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
    },
    manifest: '/site.webmanifest',
    openGraph: {
      type: 'website',
      locale: locale,
      alternateLocale: locale === 'en' ? 'id_ID' : 'en_US',
      url: 'https://jamjam.my.id',
      siteName: 'Jamjam Portfolio',
      title: 'Jamjam - AI Engineer & Full Stack Developer',
      description: 'Experienced AI Engineer and Full Stack Developer specializing in Next.js, Vue.js, Laravel, and Python. Building innovative solutions with AI integration and modern web technologies.',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Jamjam Portfolio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Jamjam - AI Engineer & Full Stack Developer',
      description: 'Experienced AI Engineer and Full Stack Developer specializing in Next.js, Vue.js, Laravel, and Python.',
      images: ['/og-image.png'],
    },
    category: 'Technology',
  };
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};
