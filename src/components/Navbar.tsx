'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useTranslations, useLocale } from 'next-intl';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { useActiveSection } from '@/hooks/useActiveSection';

const Navbar = () => {
  const locale = useLocale();
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { name: t('common.home'), href: `/${locale}`, section: 'hero' },
    { name: t('common.about'), href: `/${locale}/#about`, section: 'about' },
    { name: t('common.works'), href: `/${locale}/#works`, section: 'works' },
    { name: t('common.contact'), href: `/${locale}/#contact`, section: 'contact' }
  ];

  const isActive = (section: string) => {
    if (section === 'hero' && activeSection === 'home') return true;
    return activeSection === section;
  };

  return (
    <header className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href={`/${locale}`} className="text-xl font-bold text-gray-900 dark:text-white">
            {t('common.portfolio')}
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive(link.section)
                    ? 'text-blue-600 dark:text-blue-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400'
                    : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <LanguageSwitcher />
            <ThemeToggle />
          </nav>

          {/* Mobile */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300"
              aria-label={isOpen ? t('common.close') : t('common.menu')}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-2 pb-3 space-y-1 bg-white dark:bg-gray-800">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block relative px-3 py-2 text-base font-medium transition-all duration-200 ${
                isActive(link.section)
                  ? 'text-blue-600 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-400 pl-2'
                  : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="px-3 py-2">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
