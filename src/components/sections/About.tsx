'use client';

interface AboutProps {
  locale: string;
}

// Terjemahan
const messages = {
  en: {
    title: 'About Me',
    subtitle: 'Get to know me better',
    description1: 'I am a passionate Full Stack Developer with experience in building modern web applications using the latest technologies. My goal is to create efficient, scalable, and user-friendly solutions that solve real-world problems.',
    description2: 'With a strong foundation in both frontend and backend development, I enjoy working on all aspects of the development process, from concept to deployment.',
    experience: 'Years of Experience',
    projects: 'Projects Completed',
    clients: 'Happy Clients',
    skills: 'Skills & Expertise',
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    database: 'Database Management',
    devops: 'DevOps & Cloud',
    education: 'Education',
    degree: 'Bachelor of Computer Science',
    university: 'University of Technology',
    year: '2015 - 2019',
    certification: 'Certifications',
    cert1: 'AWS Certified Developer',
    cert2: 'Google Cloud Professional',
    cert3: 'Microsoft Certified: Azure Developer',
  },
  id: {
    title: 'Tentang Saya',
    subtitle: 'Kenali saya lebih dekat',
    description1: 'Saya seorang Full Stack Developer yang bersemangat dengan pengalaman dalam membangun aplikasi web modern menggunakan teknologi terbaru. Tujuan saya adalah menciptakan solusi yang efisien, skalabel, dan ramah pengguna yang memecahkan masalah dunia nyata.',
    description2: 'Dengan dasar yang kuat dalam pengembangan frontend dan backend, saya menikmati bekerja di semua aspek proses pengembangan, dari konsep hingga peluncuran.',
    experience: 'Tahun Pengalaman',
    projects: 'Proyek Selesai',
    clients: 'Klien Puas',
    skills: 'Keahlian',
    frontend: 'Pengembangan Frontend',
    backend: 'Pengembangan Backend',
    database: 'Manajemen Database',
    devops: 'DevOps & Cloud',
    education: 'Pendidikan',
    degree: 'Sarjana Ilmu Komputer',
    university: 'Universitas Teknologi',
    year: '2015 - 2019',
    certification: 'Sertifikasi',
    cert1: 'AWS Certified Developer',
    cert2: 'Google Cloud Professional',
    cert3: 'Microsoft Certified: Azure Developer',
  }
};

export default function About({ locale }: AboutProps) {
  const t = locale in messages ? messages[locale as keyof typeof messages] : messages.en;
  
  return (
    <section 
      id="about" 
      className="py-20 bg-white dark:bg-gray-900 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            {t.subtitle}
          </p>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed">
              {t.description1}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed">
              {t.description2}
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Skills
              </h3>
              <div className="space-y-3">
                {[
                  'React.js', 'Next.js', 'TypeScript', 'Node.js', 
                  'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'Docker'
                ].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Experience
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Senior Full Stack Developer
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 text-sm mb-1">
                    Tech Company Inc. • 2021 - Present
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Building scalable web applications and leading a team of developers.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Frontend Developer
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 text-sm mb-1">
                    Digital Agency • 2019 - 2021
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Developed responsive websites and web applications for various clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
