import { Metadata } from 'next';
import { Locale } from '@/utils/i18n';

type Props = {
  params: { locale: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  
  return {
    title: 'My Portfolio',
    description: 'Welcome to my portfolio website',
    metadataBase: new URL('http://localhost:3000'),
    openGraph: {
      title: 'My Portfolio',
      description: 'Welcome to my portfolio website',
      locale: locale,
      siteName: 'My Portfolio',
    },
  };
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};
