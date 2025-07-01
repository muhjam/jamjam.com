import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '../utils/i18n';

export default getRequestConfig(async ({ locale: localeParam }) => {
  // Ensure locale is a valid Locale type
  const locale = localeParam as Locale;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  return {
    locale,
    messages: (await import(`../mock/locales/${locale}/common.json`)).default,
  };
});
