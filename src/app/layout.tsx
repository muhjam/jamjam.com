import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jamal's Portfolio",
  description: "Personal portfolio of Jamal, a Full Stack Developer",
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
