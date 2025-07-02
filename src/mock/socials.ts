import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi';

export type SocialLink = {
  id: string;
  name: string;
  href: string;
  icon: typeof FiGithub | typeof FiLinkedin | typeof FiMail | typeof FiInstagram;
  ariaLabel: string;
};

export const socials: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    href: 'https://github.com/muhjam',
    icon: FiGithub,
    ariaLabel: 'GitHub Profile'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/muhamad-jamaludin-padmawinata',
    icon: FiLinkedin,
    ariaLabel: 'LinkedIn Profile'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    href: 'https://instagram.com/muhamadjamaludinpad',
    icon: FiInstagram,
    ariaLabel: 'Instagram Profile'
  },
  {
    id: 'email',
    name: 'Email',
    href: 'mailto:muhhjam@gmail.com',
    icon: FiMail,
    ariaLabel: 'Send Email'
  }
]; 