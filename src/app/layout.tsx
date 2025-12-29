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
  title: "Nagashima Shohei | Portfolio",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${syne.variable} ${geistSans.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

