import type React from "react";
// src/app/layout.tsx

import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import { Inter } from "next/font/google";
import Header from "@/component/section1/Header";
// import HeaderCopy from "@/component/section1/HeaderCopy";
import "./globals.css";
import Services from "@/component/section1/Services";
// import Section2 from "@/component/section1/Section2";
// import Section3 from "@/component/section1/section3"
import Faq from "@/component/section1/Faq";
// import Section5 from "@/component/section1/Section5";
import ContactForm from "@/component/section1/ContactForm";
// import Contact from "@/component/section1/Contact"
import Footer from "@/component/section1/Footer";
// import Blog from "@/component/blog/Blog";
// import Post2 from "@/component/blog/post2/Post2";
// import Post from '@/component/blog/Post'

// ✅ Load Inter font
// const inter = Inter({
//   variable: "--font-inter", // important for Tailwind CSS
//   subsets: ["latin"],
//   display: "swap",
// });

// ✅ Load Geist fonts
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Socializo- AI-Powered Lead Generation for B2B Companies",
  description:
    "Transform your B2B lead generation with our AI-powered system. Get 50+ qualified leads per month with our proven automation that hunts, nurtures, and closes cold prospects in just 60 days.",
  keywords:
    "AI lead generation, B2B lead generation, sales automation, cold outreach, lead nurturing, B2B sales, AI sales tools",
  authors: [{ name: "Socializo" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Socailizo",
    description:
      "Transform your B2B lead generation with our AI-powered system. Get 50+ qualified leads per month.",
    type: "website",
    url: "https://socializo.com",
    siteName: "Socailizo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Socailizo",
    description:
      "Transform your B2B lead generation with our AI-powered system.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`} antialiased">
        <Header />
        <Services />
        <Faq />

        <ContactForm />

        {/* <Blog /> */}
        {/* <Post2 /> */}
        {/* <Post /> */}
        <Footer />
        {children}
      </body>
    </html>
  );
}
//  <Section2 />
//  <Section3 />
//    {/* <Section5 /> */}
//      {/* <Contact /> */}
