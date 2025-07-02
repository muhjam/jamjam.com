'use client';

import { useLocale } from '@/contexts/LocaleContext';
import { locales, languageNames, Locale } from '@/locales/config';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value as Locale);
  };

  return (
    <div className="flex items-center space-x-2">
      <select
        value={locale}
        onChange={handleLocaleChange}
        className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-md text-sm border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {languageNames[loc]}
          </option>
        ))}
      </select>
    </div>
  );
}
