import type { Metadata } from "next";
import { Syne, Geist } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nagashima Shohei | Monolithic Portfolio",
  description: "A distinctive portfolio of an software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${geistSans.variable} scroll-smooth`}>
      <body className="antialiased">
        <div className="noise-bg" />
        {children}
      </body>
    </html>
  );
}
