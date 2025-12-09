'use client';

import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useTranslations, useLocale } from 'next-intl';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { useActiveSection } from '@/hooks/useActiveSection';
import { getNavbarHeight, getSectionFirstContainerPosition } from '@/utils/sectionUtils';

const Navbar = () => {
  const locale = useLocale();
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.split('#')[1];
    const wasMenuOpen = isOpen;
    
    // Close mobile menu if open
    setIsOpen(false);
    
    if (!targetId) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    // Fungsi untuk melakukan scroll
    const performScroll = () => {
      // Dapatkan tinggi navbar yang benar (setelah menu tertutup)
      const navbarHeight = getNavbarHeight();
      const containerPosition = getSectionFirstContainerPosition(targetId);
      
      if (containerPosition !== null) {
        const offsetPosition = containerPosition + window.scrollY - navbarHeight;
        
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      } else {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - navbarHeight;
          
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
          });
        }
      }
    };
    
    // Jika menu mobile terbuka, tunggu menu tertutup dulu
    if (wasMenuOpen) {
      // RequestAnimationFrame untuk memastikan DOM sudah update
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          performScroll();
        });
      });
    } else {
      performScroll();
    }
  };

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
          <a
            href={`/${locale}`}
            onClick={(e) => handleNavClick(e, `/${locale}`)}
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            {t('common.portfolio')}
          </a>

          {/* Desktop */}
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive(link.section)
                    ? 'text-blue-600 dark:text-blue-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400'
                    : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                }`}
              >
                {link.name}
              </a>
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
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block relative px-3 py-2 text-base font-medium transition-all duration-200 ${
                isActive(link.section)
                  ? 'text-blue-600 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-400 pl-2'
                  : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
              }`}
            >
              {link.name}
            </a>
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
