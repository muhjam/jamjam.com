'use client';

import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setMounted(true);
    
    // Initialize intersection observer
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
          // Update URL without page reload
          window.history.pushState({}, '', `#${sectionId}`);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, options);
    
    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      observer.current?.observe(section);
    });

    // Cleanup
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  const toggleTheme = () => {
    // Just trigger the theme change and let ThemeInitializer handle the rest
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navItems = [
    { path: '#home', label: t('home'), section: 'home' },
    { path: '#about', label: t('about'), section: 'about' },
    { path: '#works', label: t('works'), section: 'works' },
    { path: '#contact', label: t('contact'), section: 'contact' },
  ];
  
  const isActive = (section: string) => {
    return activeSection === section;
  };

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              Portfolio
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.section}
                  href={item.path}
                  onClick={(e) => scrollToSection(e, item.section)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    isActive(item.section)
                      ? 'text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                  } transition-colors duration-200`}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label={mounted && theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {!mounted ? (
                  <div className="w-5 h-5"></div>
                ) : theme === 'dark' ? (
                  <FiSun size={20} className="text-yellow-300" />
                ) : (
                  <FiMoon size={20} className="text-gray-700" />
                )}
              </button>
              <div className="flex items-center space-x-2 ml-4">
                <Link 
                  href={pathname} 
                  locale="en" 
                  className={`px-3 py-1 text-sm rounded ${pathname.startsWith('/en') || pathname === '/' ? 'text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300'}`}
                >
                  EN
                </Link>
                <span className="text-gray-400">/</span>
                <Link 
                  href={pathname} 
                  locale="id" 
                  className={`px-3 py-1 text-sm rounded ${pathname.startsWith('/id') ? 'text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300'}`}
                >
                  ID
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 mr-2 transition-colors duration-200"
              aria-label={mounted && theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {!mounted ? (
                <div className="w-5 h-5"></div>
              ) : theme === 'dark' ? (
                <FiSun size={20} className="text-yellow-300" />
              ) : (
                <FiMoon size={20} className="text-gray-700" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.section}
                  href={item.path}
                  onClick={(e) => scrollToSection(e, item.section)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.section)
                      ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-900/30'
                      : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  } transition-colors duration-200`}
                >
                  {item.label}
                </a>
              ))}
            <div className="flex items-center justify-center space-x-4 p-4 border-t border-gray-200 dark:border-gray-700">
              <Link 
                href={pathname} 
                locale="en" 
                className={`px-3 py-1 text-sm rounded ${pathname.startsWith('/en') || pathname === '/' ? 'text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300'}`}
                onClick={() => setIsOpen(false)}
              >
                English
              </Link>
              <Link 
                href={pathname} 
                locale="id" 
                className={`px-3 py-1 text-sm rounded ${pathname.startsWith('/id') ? 'text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300'}`}
                onClick={() => setIsOpen(false)}
              >
                Bahasa Indonesia
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
