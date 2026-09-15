import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "El-Ikhlas Academy | Online Quran Classes in USA & Canada",
    template: "%s | El-Ikhlas Academy"
  },
  description: "Learn Quran online with certified scholars at El-Ikhlas Academy. Personal 1-on-1 Tajweed, Memorization & Ijazah programs. Free trial class available. Serving students across USA, Canada & worldwide.",
  keywords: [
    "learn quran online",
    "quran classes online USA",
    "online quran academy",
    "tajweed lessons online",
    "memorize quran online",
    "quran teachers USA",
    "quran classes Canada",
    "online quran for adults",
    "quran for kids online",
    "ijazah online",
    "quran recitation classes",
    "best online quran academy",
    "quran lessons near me",
    "learn tajweed online",
    "quran memorization program",
    "quran school online",
    "islamic education online USA",
    "quran tutor online",
    "one on one quran classes",
    "online quran classes for beginners"
  ],
  authors: [{ name: "El-Ikhlas Academy" }],
  creator: "El-Ikhlas Academy",
  publisher: "El-Ikhlas Academy",
  metadataBase: new URL("https://elikhlas-academy.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_EG",
    siteName: "El-Ikhlas Academy",
    title: "El-Ikhlas Academy | Online Quran Classes in USA & Canada",
    description: "Learn Quran online with certified scholars. Personal 1-on-1 Tajweed, Memorization & Ijazah programs. Free trial class available.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "El-Ikhlas Academy - Online Quran Classes"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "El-Ikhlas Academy | Online Quran Classes",
    description: "Learn Quran online with certified scholars. Free trial class available.",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://elikhlas-academy.com",
    languages: {
      "en": "https://elikhlas-academy.com",
      "ar": "https://elikhlas-academy.com"
    }
  },
  verification: {
    google: "your-google-verification-code"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "El-Ikhlas Academy",
              alternateName: "أكاديمية الإخلاص",
              url: "https://elikhlas-academy.com",
              logo: "https://elikhlas-academy.com/logo.png",
              description: "Online Quran Academy offering Tajweed, Memorization, and Ijazah programs with certified scholars for students in USA, Canada, and worldwide.",
              sameAs: [],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-XXX-XXX-XXXX",
                contactType: "customer service",
                availableLanguage: ["English", "Arabic"]
              },
              areaServed: [
                {
                  "@type": "Country",
                  name: "United States"
                },
                {
                  "@type": "Country",
                  name: "Canada"
                }
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Quran Programs",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Course",
                      name: "Kids Quran Program"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Course",
                      name: "Adults Tajweed & Memorization"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Course",
                      name: "Ijazah with Connected Sanad"
                    }
                  }
                ]
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Free Trial Session"
              }
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
