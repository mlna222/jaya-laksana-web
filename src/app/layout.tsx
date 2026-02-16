import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jasa Truk & Bongkar Muat Jabodetabek | Jaya Laksana - Solusi Logistik Terpercaya",
  description: "Jasa truk dan bongkar muat profesional di Jabodetabek. Armada lengkap, harga kompetitif, layanan 24/7. Minta penawaran gratis sekarang!",
  keywords: ["jasa truk jabodetabek", "bongkar muat", "sewa truk", "logistik jakarta", "trucking service", "pengiriman barang", "cargo jakarta", "truk engkel", "truk tronton"],
  authors: [{ name: "Jaya Laksana" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Jasa Truk & Bongkar Muat Jabodetabek | Jaya Laksana",
    description: "Jasa truk dan bongkar muat profesional di Jabodetabek. Armada lengkap, harga kompetitif, layanan 24/7.",
    url: "https://jayalaksana.co.id",
    siteName: "Jaya Laksana",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Jasa Truk dan Bongkar Muat Jaya Laksana",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Truk & Bongkar Muat Jabodetabek | Jaya Laksana",
    description: "Jasa truk dan bongkar muat profesional di Jabodetabek. Armada lengkap, harga kompetitif, layanan 24/7.",
    images: ["/og-image.svg"], 
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jaya Laksana",
  image: "https://jayalaksana.co.id/logo.png", // Replace with your actual logo URL
  description: "Jasa truk dan bongkar muat profesional di Jabodetabek",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Logistik Raya No. 123",
    addressLocality: "Jakarta Timur",
    addressRegion: "DKI Jakarta",
    postalCode: "13450",
    addressCountry: "ID",
  },
  telephone: "+6281234567890",
  email: "info@jayalaksana.co.id",
  url: "https://jayalaksana.co.id",
  priceRange: "Rp500.000 - Rp5.000.000",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  areaServed: ["Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi"],
  serviceType: ["Trucking", "Loading/Unloading", "Warehousing", "Logistics"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
