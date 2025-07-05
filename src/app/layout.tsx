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
    "Typescript",
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
