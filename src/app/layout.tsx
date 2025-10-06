import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MemePulse — a fun memecoin with clear buy steps and tokenomics",
  description: "MemePulse makes memecoin simple and fun with clear buy steps, transparent tokenomics, and a community-first vibe.",
  keywords: ["memecoin", "buy memecoin", "tokenomics", "crypto meme", "community", "wallet", "DEX", "crypto"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "MemePulse",
    title: "MemePulse — a fun memecoin with clear buy steps and tokenomics",
    description: "MemePulse makes memecoin simple and fun with clear buy steps, transparent tokenomics, and a community-first vibe.",
    image: {
      url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/draw-a-cartoon-desert-landscape-in-16-9--1759758974328-3bee185f.jpg",
      width: 1200,
      height: 630,
      alt: "MemePulse logo with colorful meme-inspired artwork",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "MemePulse — a fun memecoin with clear buy steps and tokenomics",
    description: "MemePulse makes memecoin simple and fun with clear buy steps, transparent tokenomics, and a community-first vibe.",
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/draw-a-cartoon-desert-landscape-in-16-9--1759758974328-3bee185f.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
