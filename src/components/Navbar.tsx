'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

interface NavbarProps {
  locale: 'en' | 'id';
}

const Navbar: React.FC<NavbarProps> = ({ locale }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const navItems = {
    en: { home: 'Home', about: 'About', works: 'Works', contact: 'Contact', menu: 'Menu', close: 'Close' },
    id: { home: 'Beranda', about: 'Tentang', works: 'Karya', contact: 'Kontak', menu: 'Menu', close: 'Tutup' }
  };

  const t = navItems[locale];
  const navLinks = [
    { name: t.home, href: `/${locale}` },
    { name: t.about, href: `/${locale}/#about` },
    { name: t.works, href: `/${locale}/#works` },
    { name: t.contact, href: `/${locale}/#contact` }
  ];

  const isActive = (href: string) => pathname === href || pathname.startsWith(href);

  return (
    <header className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href={`/${locale}`} className="text-xl font-bold text-gray-900 dark:text-white">
            {locale === 'id' ? 'Portofolio' : 'Portfolio'}
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(link.href)
                    ? 'text-white bg-gray-900 dark:bg-gray-800'
                    : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href={pathname ? pathname.replace(/^\/(en|id)/, locale === 'en' ? '/id' : '/en') : '#'}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              locale={false}
            >
              {locale === 'en' ? 'ID' : 'EN'}
            </Link>
          </nav>

          {/* Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300"
              aria-label={isOpen ? t.close : t.menu}
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
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive(link.href)
                  ? 'text-white bg-gray-900 dark:bg-gray-800'
                  : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href={pathname ? pathname.replace(/^\/(en|id)/, locale === 'en' ? '/id' : '/en') : '#'}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            onClick={() => setIsOpen(false)}
            locale={false}
          >
            {locale === 'en' ? '🇮🇩 ID' : '🇬🇧 EN'}
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
