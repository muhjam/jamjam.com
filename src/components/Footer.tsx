'use client';

import { FiGithub, FiLinkedin, FiInstagram, FiTwitter, FiMail } from 'react-icons/fi';
import Link from 'next/link';

interface FooterProps {
  locale: 'en' | 'id';
}

const Footer: React.FC<FooterProps> = ({ locale }) => {
  const currentYear = new Date().getFullYear();
  
  const footerTexts = {
    en: {
      builtWith: `Built with Next.js and Tailwind CSS • © ${currentYear}`,
      quickLinks: 'Quick Links',
      home: 'Home',
      about: 'About',
      works: 'Works',
      contact: 'Contact',
      connect: 'Connect',
      copyright: `© ${currentYear} My Portfolio. All rights reserved.`,
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    },
    id: {
      builtWith: `Dibuat dengan Next.js dan Tailwind CSS • © ${currentYear}`,
      quickLinks: 'Tautan Cepat',
      home: 'Beranda',
      about: 'Tentang',
      works: 'Karya',
      contact: 'Kontak',
      connect: 'Terhubung',
      copyright: `© ${currentYear} Portofolio Saya. Semua hak dilindungi.`,
      privacy: 'Kebijakan Privasi',
      terms: 'Syarat Layanan'
    }
  };
  
  const t = footerTexts[locale];
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-400">
              {t.builtWith}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}#home`} className="text-gray-400 hover:text-white transition-colors">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#about`} className="text-gray-400 hover:text-white transition-colors">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#works`} className="text-gray-400 hover:text-white transition-colors">
                  {t.works}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#contact`} className="text-gray-400 hover:text-white transition-colors">
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.connect}</h4>
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
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            {t.copyright}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href={`/${locale}/privacy`} className="text-gray-400 hover:text-white text-sm transition-colors">
              {t.privacy}
            </Link>
            <Link href={`/${locale}/terms`} className="text-gray-400 hover:text-white text-sm transition-colors">
              {t.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
