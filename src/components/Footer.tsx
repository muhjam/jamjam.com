'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { socials } from '@/mock/socials';

const Footer = () => {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-400">
              {t('footer.builtWith', { year: currentYear })}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.home')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.about')}
                </a>
              </li>
              <li>
                <a href="#works" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.works')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.contact')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.connect')}</h4>
            <div className="flex space-x-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.id}
                    href={social.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.ariaLabel}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 md:col-span-4">
          <p className="text-center text-gray-400">
            {t('footer.copyright', { year: currentYear })}
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="/privacy" className="text-gray-400 hover:text-white">
              {t('footer.privacy')}
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
