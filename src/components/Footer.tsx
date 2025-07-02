'use client';

import { useTranslations } from 'next-intl';
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter, FiMail } from 'react-icons/fi';
import Link from 'next/link';

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
                <Link href={`/#home`} className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.home')}
                </Link>
              </li>
              <li>
                <Link href={`/#about`} className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link href={`/#works`} className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.works')}
                </Link>
              </li>
              <li>
                <Link href={`/#contact`} className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.connect')}</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a 
                href="https://instagram.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram size={20} />
              </a>
              <a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter size={20} />
              </a>
              <a 
                href="mailto:your.email@example.com" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
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
