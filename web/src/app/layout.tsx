/*
 * Wrapper that goes around every page in app
 *
 * FONTS: Next.js downloads them at build time, served by own backend instead of client making request to font provider
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans", // exposes css api
  subsets: ["latin"], // fetches only "latin" Geist font
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raleigh Maison",
  description: "Raleigh party collective. Site by github.com/barnes-haddix",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
