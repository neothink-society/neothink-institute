import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://neothinkinstitute.com"),
  title: {
    default: "Neothink Institute | Advancing Human Potential Since 1968",
    template: "%s | Neothink Institute",
  },
  description:
    "Neothink Institute has advanced human potential through integrated thinking and self-leadership for over 50 years. Discover transformative insights from three generations of pioneering research.",
  keywords: [
    "Neothink",
    "Neothink Institute",
    "Mark Hamilton",
    "integrated thinking",
    "self-leadership",
    "personal development",
    "human potential",
    "value creation",
    "integrated honesty",
    "Neo-Tech",
    "self-improvement",
    "philosophy",
  ],
  authors: [
    { name: "Neothink Institute" },
    { name: "Mark Hamilton" },
  ],
  creator: "Neothink Institute",
  publisher: "Neothink Institute",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://neothinkinstitute.com",
    siteName: "Neothink Institute",
    title: "Neothink Institute | Advancing Human Potential Since 1968",
    description:
      "Discover transformative insights from over 50 years of pioneering research in integrated thinking and self-leadership.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Neothink Institute - Advancing Human Potential Since 1968",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neothink Institute | Advancing Human Potential Since 1968",
    description:
      "Discover transformative insights from over 50 years of pioneering research.",
    images: ["/og-image.png"],
    creator: "@neothinkinst",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
  },
  alternates: {
    canonical: "https://neothinkinstitute.com",
  },
};

// Comprehensive Schema.org JSON-LD for SEO/AEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization Entity
    {
      "@type": ["ResearchOrganization", "EducationalOrganization"],
      "@id": "https://neothinkinstitute.com/#organization",
      name: "Neothink Institute",
      alternateName: ["Neothink", "Neo-Tech Society"],
      url: "https://neothinkinstitute.com",
      logo: {
        "@type": "ImageObject",
        url: "https://neothinkinstitute.com/logo.png",
        width: 512,
        height: 512,
      },
      foundingDate: "1968",
      description:
        "Neothink Institute advances human potential through integrated thinking, self-leadership, and value creation. With over 50 years of research spanning three generations, we provide transformative insights for personal and professional excellence.",
      slogan: "Advancing Human Potential Since 1968",
      areaServed: "Worldwide",
      founder: {
        "@type": "Person",
        "@id": "https://neothinkinstitute.com/#mark-hamilton",
        name: "Mark Hamilton",
      },
      knowsAbout: [
        "Integrated Thinking",
        "Self-Leadership",
        "Value Creation",
        "Personal Development",
        "Human Potential",
        "Neo-Tech Philosophy",
      ],
      sameAs: [
        "https://twitter.com/neothinkinst",
        "https://www.linkedin.com/company/neothink-institute",
        "https://www.youtube.com/@neothinkinstitute",
      ],
    },
    // Website Entity
    {
      "@type": "WebSite",
      "@id": "https://neothinkinstitute.com/#website",
      url: "https://neothinkinstitute.com",
      name: "Neothink Institute",
      description: "Official website of Neothink Institute",
      publisher: {
        "@id": "https://neothinkinstitute.com/#organization",
      },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://neothinkinstitute.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    // Mark Hamilton Person Entity
    {
      "@type": "Person",
      "@id": "https://neothinkinstitute.com/#mark-hamilton",
      name: "Mark Hamilton",
      jobTitle: "Founder & Principal Author",
      worksFor: {
        "@id": "https://neothinkinstitute.com/#organization",
      },
      description:
        "Mark Hamilton is the founder and principal author of Neothink Institute, continuing over 50 years of work in integrated thinking and human potential development.",
      knowsAbout: [
        "Integrated Thinking",
        "Self-Leadership",
        "Value Creation",
        "Neo-Tech Philosophy",
      ],
      sameAs: ["https://twitter.com/neothinkinst"],
    },
    // Dr. Frank R. Wallace Person Entity (Historical)
    {
      "@type": "Person",
      "@id": "https://neothinkinstitute.com/#frank-r-wallace",
      name: "Dr. Frank R. Wallace",
      birthDate: "1932",
      deathDate: "2006",
      jobTitle: "Founder of Neo-Tech",
      description:
        "Dr. Frank R. Wallace (1932-2006) was a former senior research chemist at DuPont who founded Neo-Tech in 1968. His groundbreaking work on integrated thinking laid the foundation for Neothink Institute.",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "DuPont Research",
      },
      knowsAbout: [
        "Neo-Tech",
        "Integrated Honesty",
        "Value Creation",
        "Scientific Research",
      ],
    },
    // Wallace Hamilton Person Entity
    {
      "@type": "Person",
      "@id": "https://neothinkinstitute.com/#wallace-hamilton",
      name: "Wallace Hamilton",
      jobTitle: "Director of Digital Strategy",
      worksFor: {
        "@id": "https://neothinkinstitute.com/#organization",
      },
      description:
        "Wallace Hamilton represents the third generation of Neothink leadership, focusing on digital innovation and reaching new audiences worldwide.",
      knowsAbout: [
        "Digital Strategy",
        "Technology",
        "Content Development",
        "Community Building",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${sourceSans.variable} antialiased min-h-screen flex flex-col font-body`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
