import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const primary = localFont({
  src: [{ path: "./fonts/space-grotesk.woff2", weight: "300 700", style: "normal" }],
  variable: "--font-sans",
  display: "swap",
});

const mono = localFont({
  src: [{ path: "./fonts/jetbrains-mono.woff2", weight: "400 700", style: "normal" }],
  variable: "--font-mono",
  display: "swap",
});

const title = "1337 IT Solutions | AI Agent Development & Technical Co-Founder Partnerships";
const description =
  "1337 IT Solutions builds production AI agents and cloud-native systems for startups and enterprises. Equity-for-engineering partnerships. Cloud Run, GCP, LangGraph, MCP. St. Louis, MO.";
const canonicalUrl = "https://1337itsolutions.com";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(canonicalUrl),
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title,
    description,
    url: canonicalUrl,
    siteName: "1337 IT Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "1337 IT Solutions",
              url: "https://1337itsolutions.com",
              description: "AI agent development and technical co-founder partnerships.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "St. Louis",
                addressRegion: "MO",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "cbford@1337itsolutions.com",
                contactType: "sales",
              },
              sameAs: ["https://linkedin.com/company/1337itsolutions"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services",
                itemListElement: [
                  { "@type": "Offer", name: "AI Agent Development & Deployment" },
                  { "@type": "Offer", name: "Technical Co-Founder Partnership" },
                  { "@type": "Offer", name: "Cloud Native Architecture" },
                  { "@type": "Offer", name: "DevOps & CI/CD Automation" },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${primary.variable} ${mono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
