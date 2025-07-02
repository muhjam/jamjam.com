export interface WorkItem {
  id: string;
  title: string;
  description: {
    en: string;
    id: string;
  };
  image: string;
  tools: string[];
  startDate: string;
  endDate: string | 'Present';
  link?: string;
}

export const works: WorkItem[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: {
      en: 'A full-featured e-commerce platform with product management, cart, and payment integration.',
      id: 'Platform e-commerce lengkap dengan manajemen produk, keranjang, dan integrasi pembayaran.'
    },
    image: '/images/project1.jpg',
    tools: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    startDate: '2023-01',
    endDate: '2023-04',
    link: 'https://example.com/ecommerce'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: {
      en: 'A collaborative task management application with real-time updates and team features.',
      id: 'Aplikasi manajemen tugas kolaboratif dengan pembaruan waktu nyata dan fitur tim.'
    },
    image: '/images/project2.jpg',
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    startDate: '2023-05',
    endDate: '2023-08',
    link: 'https://example.com/taskapp'
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: {
      en: 'A personal portfolio website to showcase my projects and skills.',
      id: 'Website portofolio pribadi untuk menampilkan proyek dan keahlian saya.'
    },
    image: '/images/project3.jpg',
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    startDate: '2023-09',
    endDate: 'Present'
  }
];
