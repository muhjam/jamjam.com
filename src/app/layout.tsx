import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jamjam Portfolio",
  description: "Personal portfolio of Jamjam, a AI Engineer & Full Stack Developer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
