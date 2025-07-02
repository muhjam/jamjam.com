/** @type {import('next-intl').NextIntlConfig} */
const config = {
  defaultLocale: 'en',
  locales: ['en', 'id'],
  localePrefix: 'as-needed',
  localeDetection: true,
  // Load messages from JSON files
  loadMessagesFromJSON: true,
  // Path to your translation files
  messages: {
    en: () => import('./src/locales/en/common.json').then(m => m.default),
    id: () => import('./src/locales/id/common.json').then(m => m.default)
  },
  // Optional: Add pathnames for static generation
  pathnames: {
    '/': '/',
    '/about': {
      en: '/about',
      id: '/tentang'
    },
    '/works': {
      en: '/works',
      id: '/karya'
    },
    '/contact': {
      en: '/contact',
      id: '/kontak'
    }
  },
  getMessageFallback: ({ namespace, key }) => {
    console.warn(`Missing translation: ${namespace}.${key}`);
    return key;
  },
};

// Add request headers for server components
createRequestHeaders();

export default config;
