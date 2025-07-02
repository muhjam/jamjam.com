import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import ClientLayout from './client-layout';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

// Define supported locales
type Locale = 'en' | 'id';
const locales: Locale[] = ['en', 'id'];

export const metadata: Metadata = {
  title: 'Jamjam',
  description: 'Personal portfolio website',
};

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  // Validate the locale
  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <ClientLayout locale={locale}>
          <div className="flex flex-col min-h-screen">
            {children}
          </div>
        </ClientLayout>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
