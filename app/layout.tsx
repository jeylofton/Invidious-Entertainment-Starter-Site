import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

/* ============================================================
   FONTS  — cinematic display serif + clean sans body.
   Exposed as CSS variables consumed by globals.css / Tailwind.
   ============================================================ */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

/* ============================================================
   SEO METADATA  — update the domain in metadataBase if it changes.
   ============================================================ */
const SITE_URL = "https://invidiousentertainment.com";
const TITLE =
  "Invidious Entertainment — Stories Built From Truth, Tension, and Transformation";
const DESCRIPTION =
  "An independent creative production company founded by Jey Lofton. Grounded, cinematic, emotionally honest storytelling. Projects coming soon.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Jey Lofton" }],
  keywords: [
    "Invidious Entertainment",
    "Jey Lofton",
    "independent film studio",
    "creative production company",
    "cinematic storytelling",
    "psychological drama",
    "original films",
    "independent filmmaker",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Invidious Entertainment",
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: "Invidious Entertainment" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
