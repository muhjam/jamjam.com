'use client';

interface ContactProps {
  locale: string;
}

// Terjemahan
const messages = {
  en: {
    title: 'Get In Touch',
    description: 'Feel free to reach out to me for any questions or opportunities.',
    form: {
      title: 'Send Me a Message',
      name: 'Your Name',
      email: 'Your Email',
      subject: 'Subject',
      message: 'Your Message',
      submit: 'Send Message',
      success: 'Your message has been sent successfully!',
      error: 'There was an error sending your message. Please try again.'
    },
    contactInfo: 'Contact Information',
    location: 'Location',
    email: 'Email',
    phone: 'Phone',
    followMe: 'Follow Me',
    socialMedia: 'Social Media',
    officeHours: 'Office Hours',
    hours: 'Monday - Friday: 9:00 AM - 5:00 PM',
    quickLinks: 'Quick Links',
    home: 'Home',
    about: 'About',
    works: 'Works',
    contact: 'Contact'
  },
  id: {
    title: 'Hubungi Saya',
    description: 'Jangan ragu untuk menghubungi saya untuk pertanyaan atau peluang kerja sama.',
    form: {
      title: 'Kirim Pesan',
      name: 'Nama Anda',
      email: 'Email Anda',
      subject: 'Subjek',
      message: 'Pesan Anda',
      submit: 'Kirim Pesan',
      success: 'Pesan Anda berhasil dikirim!',
      error: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.'
    },
    contactInfo: 'Informasi Kontak',
    location: 'Lokasi',
    email: 'Email',
    phone: 'Telepon',
    followMe: 'Ikuti Saya',
    socialMedia: 'Media Sosial',
    officeHours: 'Jam Kerja',
    hours: 'Senin - Jumat: 09:00 - 17:00',
    quickLinks: 'Tautan Cepat',
    home: 'Beranda',
    about: 'Tentang',
    works: 'Karya',
    contact: 'Kontak'
  }
};

export default function Contact({ locale }: ContactProps) {
  const t = locale in messages ? messages[locale as keyof typeof messages] : messages.en;
  
  return (
    <section 
      id="contact" 
      className="py-20 bg-white dark:bg-gray-900 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              {t.contactInfo}
            </h3>
            <form 
              action="https://tally.so/r/your-tally-form-id" 
              method="post"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {t.form.submit}
                </button>
              </div>
              <div className="flex space-x-4 mt-8">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors text-2xl"
                  aria-label="GitHub"
                >
                  🐙
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors text-2xl"
                  aria-label="LinkedIn"
                >
                  💼
                </a>
                <a
                  href="https://instagram.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors text-2xl"
                  aria-label="Instagram"
                >
                  📷
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors text-2xl"
                  aria-label="Twitter"
                >
                  🐦
                </a>
              </div>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {t.contactInfo}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Feel free to get in touch with me. I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                    <span className="text-blue-600 dark:text-blue-400">✉️</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">{t.email}</h4>
                    <a href="mailto:your.email@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                      your.email@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                    <span className="text-blue-600 dark:text-blue-400">📞</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">{t.phone}</h4>
                    <a href="tel:+1234567890" className="text-blue-600 dark:text-blue-400 hover:underline">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                    <span className="text-blue-600 dark:text-blue-400">📍</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">{t.location}</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {t.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors text-xl"
                  aria-label="GitHub"
                >
                  🐙
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors text-xl"
                  aria-label="LinkedIn"
                >
                  💼
                </a>
                <a
                  href="https://instagram.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors text-xl"
                  aria-label="Instagram"
                >
                  📷
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors text-xl"
                  aria-label="Twitter"
                >
                  🐦
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
