import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "New Clients For Your B2B SaaS on AutoPilot",
  description: "Every morning, warm up to warm leads.",
  openGraph: {
    title: "New clients for your B2B SaaS on AutoPilot",
    description: "Every morning, warm up to warm leads.",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Yuzu Landing Page Thumbnail"
      }
    ]
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: 'Inter, Arial, Helvetica, sans-serif' }}>
        <Script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token="a1af78f4-e22c-412d-9149-42af8e3897e4"
          strategy="afterInteractive"
          async
        />
        {children}
      </body>
    </html>
  );
}
