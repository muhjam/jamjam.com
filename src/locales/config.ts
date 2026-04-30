export const defaultLocale = 'en' as const;
export const locales = ['en', 'id', 'jp', 'de', 'es', 'fr', 'zh', 'ko'] as const;
export type Locale = (typeof locales)[number];

export const languageNames: Record<Locale, string> = {
  en: 'English',
  id: 'Bahasa Indonesia',
  jp: '日本語',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  zh: '中文',
  ko: '한국어'
};

export const isLocale = (locale: string): locale is Locale => {
  return locales.includes(locale as Locale);
};
