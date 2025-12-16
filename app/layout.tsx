import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-website-ogve2u5jv-abhishai-vardhans-projects.vercel.app'),
  title: {
    default: "Abhishai Vardhan | AI Builder + Market Intelligence Specialist",
    template: "%s | Abhishai Vardhan"
  },
  description: "Building AI-fuelled systems that upgrade humans. Market Intelligence at Cognizant by day, AI product builder by night. Creator of Tailr AI, Recall, F1 Pitwall, and Kathy.",
  keywords: ["AI Builder", "Market Intelligence", "AI Products", "Tailr AI", "Recall", "F1 Pitwall", "Kathy", "Cognizant", "Portfolio", "AI Development", "Machine Learning"],
  authors: [{ name: "Abhishai Vardhan" }],
  creator: "Abhishai Vardhan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhishaivardhan.com",
    siteName: "Abhishai Vardhan Portfolio",
    title: "Abhishai Vardhan | AI Builder + Market Intelligence Specialist",
    description: "Building AI-fuelled systems that upgrade humans. Market Intelligence at Cognizant by day, AI product builder by night.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abhishai Vardhan - AI Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishai Vardhan | AI Builder + Market Intelligence Specialist",
    description: "Building AI-fuelled systems that upgrade humans. Creator of Tailr AI, Recall, F1 Pitwall, and Kathy.",
    creator: "@abhishaiv",
    images: ["/og-image.jpg"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
