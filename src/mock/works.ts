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
    title: 'Anarise Japan',
    description: {
      en: 'Building a coding challenge and job search platform using React.js, Next.js, Vue.js, and Node.js. Training AI models to automatically generate coding problems and evaluate solutions. Accelerating candidate evaluation with real-time code execution and ranking systems.',
      id: 'Membangun platform tantangan coding dan pencarian kerja dengan React.js, Next.js, Vue.js, dan Node.js. Melatih model AI untuk menghasilkan masalah coding secara otomatis dan menilai solusi. Mempercepat evaluasi kandidat dengan eksekusi kode waktu nyata dan sistem peringkat.'
    },
    image: '/images/project1.jpg',
    tools: ['React.js', 'Next.js', 'Vue.js', 'Node.js', 'Open AI'],
    startDate: '2025-06',
    endDate: 'Present'
  },
  {
    id: '2',
    title: 'Journal International',
    description: {
      en: 'Researcher at Universitas Pasundan and Changwon University. Published research articles on AI in education, focusing on automated test creation aligned with the national curriculum. Lead author of: Automation of Indonesian High School Mathematics Assessment Generation Using OpenAI GPT-4o. Contributed to prompt engineering, model evaluation, and data-driven exam design.',
      id: 'Peneliti di Universitas Pasundan dan Universitas Changwon. Menerbitkan artikel penelitian tentang AI dalam pendidikan, berfokus pada pembuatan tes otomatis yang selaras dengan kurikulum nasional. Penulis utama dari: Automation of Indonesian High School Mathematics Assessment Generation Using OpenAI GPT-4o. Berkontribusi pada rekayasa prompt, evaluasi model, dan desain ujian berbasis data.'
    },
    image: '/images/journal.png',
    tools: ['Next.js', 'Javascript', 'Tailwind CSS', 'Open AI'],
    startDate: '2025-05',
    endDate: '2025-08'
  },
  {
    id: '3',
    title: 'Conference International - KIICE 2025',
    description: {
      en: 'Presented at the KIICE Conference (Korea Institute of Intelligent Computing and Engineering) on AI in education. Co-authored paper: Empowering Education with AI: Generating Indonesian High School Mathematics Exams Using ChatGPT 4.0. Collaborated across institutions in applying NLP and prompt engineering for educational assessment.',
      id: 'Dipresentasikan di Konferensi KIICE (Korea Institute of Intelligent Computing and Engineering) tentang AI dalam pendidikan. Menulis bersama makalah: Memberdayakan Pendidikan dengan AI: Menghasilkan Ujian Matematika SMA Indonesia Menggunakan ChatGPT 4.0. Berkolaborasi lintas institusi dalam penerapan NLP dan rekayasa prompt untuk penilaian pendidikan.'
    },
    image: '/images/conference.png',
    tools: ['Next.js', 'Javascript', 'Tailwind CSS', 'Open AI'],
    startDate: '2025-05',
    endDate: '2025-08'
  },
  {
    id: '4',
    title: 'AI Reservation Japan',
    description: {
      en: 'Built a dashboard and user pages for restaurant call reservations. Integrated an AI-powered voice assistant to handle customer calls. Developed using Next.js, TypeScript, and Tailwind CSS.',
      id: 'Membangun dasbor dan halaman pengguna untuk reservasi panggilan restoran. Mengintegrasikan asisten suara bertenaga AI untuk menangani panggilan pelanggan. Dikembangkan menggunakan Next.js, TypeScript, dan Tailwind CSS.'
    },
    image: '/images/project1.jpg',
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    startDate: '2025-04',
    endDate: '2025-06'
  },
  {
    id: '5',
    title: 'SHIGYOcloud Japan',
    description: {
      en: 'Developed a document-aware AI chatbot using Next.js, NestJS, RAGFlow, and TypeScript. Enabled multi-format file uploads (PDF, DOCX, TXT) as dynamic knowledge sources. Integrated real-time web search to enrich chatbot responses with external data.',
      id: 'Membangun chatbot AI yang sadar dokumen menggunakan Next.js, NestJS, RAGFlow, dan TypeScript. Memungkinkan unggahan file multi-format (PDF, DOCX, TXT) sebagai sumber pengetahuan dinamis. Mengintegrasikan pencarian web waktu nyata untuk memperkaya respons chatbot dengan data eksternal.'
    },
    image: '/images/shigyocloud.png',
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'NestJS', 'RAGFlow'],
    startDate: '2025-01',
    endDate: '2025-06'
  },
  {
    id: '6',
    title: 'Anarag Japan',
    description: {
      en: 'Built a document-aware AI chatbot using Next.js, RAGFlow, and TypeScript. Enabled multi-format file uploads (PDF, DOCX, TXT) as dynamic knowledge sources. Integrated real-time web search to enrich chatbot responses with external data.',
      id: 'Membangun chatbot AI yang sadar dokumen menggunakan Next.js, RAGFlow, dan TypeScript. Memungkinkan unggahan file multi-format (PDF, DOCX, TXT) sebagai sumber pengetahuan dinamis. Mengintegrasikan pencarian web waktu nyata untuk memperkaya respons chatbot dengan data eksternal.'
    },
    image: '/images/anarag.png',
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'RAGFlow'],
    startDate: '2024-09',
    endDate: '2025-01'
  },
  {
    id: '7',
    title: 'Alola Singapore',
    description: {
      en: 'Developed a travel booking platform with chatbot-based customer service. Built a responsive interface using Next.js and Tailwind CSS. Enhanced user experience with real-time interactions and seamless navigation.',
      id: 'Mengembangkan platform pemesanan perjalanan dengan layanan pelanggan berbasis chatbot. Membangun antarmuka responsif menggunakan Next.js dan Tailwind CSS. Meningkatkan pengalaman pengguna dengan interaksi waktu nyata dan navigasi yang mulus.'
    },
    image: '/images/alola.png',
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    startDate: '2024-07',
    endDate: '2025-01',
    link: 'https://alola.com'
  },
  {
    id: '8',
    title: 'Organization IOM ITB',
    description: {
      en: 'Built a donation platform for ITB alumni using Vue.js, Express.js, and Tailwind CSS. Designed a responsive user interface and streamlined the donation workflow. Enabled secure transactions and an admin dashboard for contribution tracking.',
      id: 'Membangun platform donasi untuk alumni ITB menggunakan Vue.js, Express.js, dan Tailwind CSS. Merancang antarmuka pengguna yang responsif dan menyederhanakan alur kerja donasi. Memungkinkan transaksi yang aman dan dasbor admin untuk pelacakan kontribusi.'
    },
    image: '/images/iom.png',
    tools: ['Vue.js', 'TypeScript', 'Express.js', 'Tailwind CSS'],
    startDate: '2024-06',
    endDate: '2025-05'
  },
  {
    id: '9',
    title: 'Devcode',
    description: {
      en: 'Built a coding challenge and job search platform using React.js, Next.js, Vue.js, and Node.js. Trained AI models to automatically generate coding problems and evaluate solutions. Accelerated candidate evaluation with real-time code execution and ranking systems.',
      id: 'Membangun platform tantangan coding dan pencarian kerja dengan React.js, Next.js, Vue.js, dan Node.js. Melatih model AI untuk menghasilkan masalah coding secara otomatis dan menilai solusi. Mempercepat evaluasi kandidat dengan eksekusi kode waktu nyata dan sistem peringkat.'
    },
    image: '/images/devcode.png',
    tools: ['React.js', 'Next.js', 'Vue.js', 'Node.js', 'Open AI'],
    startDate: '2023-08',
    endDate: '2025-01'
  },
  {
    id: '10',
    title: 'Lecturer Assistant',
    description: {
      en: 'Taught computer science students about algorithms and programming using Java. Instructed students in machine learning using Google Colab with Python.',
      id: 'Mengajar mahasiswa teknik informatika tentang algoritma dan pemrograman menggunakan bahasa Java. Mengajar mahasiswa teknik informatika tentang Mechine Learning menggunakan Google colabs bahasa Python.'
    },
    image: '/images/lecturer-assistant.png',
    tools: ['Java', 'Python', 'Google Colab'],
    startDate: '2023-05',
    endDate: '2025-06'
  }
];
