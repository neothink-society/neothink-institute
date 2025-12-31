import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header, Footer } from "@/components/layout";
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
  title: {
    default: "Neothink Institute",
    template: "%s | Neothink Institute",
  },
  description:
    "Advancing human potential through integrated thinking and self-leadership. Discover transformative insights at Neothink Institute.",
  keywords: [
    "Neothink",
    "self-leadership",
    "personal development",
    "integrated thinking",
    "human potential",
  ],
  authors: [{ name: "Neothink Institute" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://neothinkinstitute.com",
    siteName: "Neothink Institute",
    title: "Neothink Institute",
    description:
      "Advancing human potential through integrated thinking and self-leadership.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neothink Institute",
    description:
      "Advancing human potential through integrated thinking and self-leadership.",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
