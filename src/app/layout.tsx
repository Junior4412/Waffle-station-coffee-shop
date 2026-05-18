import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | Waffles Artesanais & Cafés Especiais em Mauá`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "waffle",
    "café especial",
    "coffee shop",
    "waffles artesanais",
    "Mauá",
    "São Paulo",
    "cafeteria",
    "brunch",
    "delivery",
    "Waffle Station",
  ],
  authors: [{ name: "Waffle Station Coffee Shop" }],
  creator: "Waffle Station Coffee Shop",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://wafflestation.com.br",
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Waffles & Cafés em Mauá`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: ["/og-image.jpg"],
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0e0906",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CafeOrCoffeeShop",
              name: SITE_CONFIG.name,
              description: SITE_CONFIG.description,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Guilherme Polydoro, 23",
                addressLocality: "Mauá",
                addressRegion: "SP",
                addressCountry: "BR",
              },
              telephone: SITE_CONFIG.phone,
              priceRange: SITE_CONFIG.priceRange,
              servesCuisine: ["Café", "Waffles", "Sobremesas"],
              openingHours: [
                "Mo-Fr 08:00-20:00",
                "Sa 08:00-21:00",
                "Su 09:00-18:00",
              ],
            }),
          }}
        />
      </head>
      <body style={{ fontFamily: "var(--font-body)" }}>{children}</body>
    </html>
  );
}
