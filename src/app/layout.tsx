import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jamjam - AI Engineer & Full Stack Developer",
  description: "Experienced AI Engineer and Full Stack Developer specializing in Next.js, Vue.js, Laravel, and Python. Building innovative solutions with AI integration and modern web technologies.",
  keywords: [
    "AI Engineer",
    "Full Stack Developer",
    "Next.js",
    "Vue.js",
    "Laravel",
    "Python",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "Docker",
    "RAGFlow",
    "Dify",
    "Web Development",
    "AI Integration",
    "Software Engineer",
    "Portfolio"
  ],
  authors: [{ name: "Jamjam" }],
  creator: "Jamjam",
  publisher: "Jamjam",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "id_ID",
    url: "https://jamjam.my.id",
    siteName: "Jamjam Portfolio",
    title: "Jamjam - AI Engineer & Full Stack Developer",
    description: "Experienced AI Engineer and Full Stack Developer specializing in Next.js, Vue.js, Laravel, and Python. Building innovative solutions with AI integration and modern web technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jamjam Portfolio",
      },
    ],
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
