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

const title = "1337 IT Solutions | Technical Co-Founder Partnerships & Venture Studio";
const description =
  "We invest in your success—literally. 1337 IT Solutions partners with startups through equity-for-engineering arrangements, delivering CTO-level cloud native architecture, DevOps, and AI operations leadership.";
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
      <body className={`${primary.variable} ${mono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
