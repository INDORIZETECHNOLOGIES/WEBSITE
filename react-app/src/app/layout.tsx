import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ui/ChatWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-heading" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Indorse Technologies — Production software for regulated Indian markets",
  description: "20fourr processes PSARA-verified private-security bookings with OTP-based check-in, itemized GST billing, and Razorpay payouts. Built by Indorse Technologies.",
  openGraph: {
    title: "Indorse Technologies",
    description: "Production software for regulated Indian markets. Flagship: 20fourr.",
    url: "https://tech.indorize.com",
    siteName: "Indorse Technologies",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indorse Technologies",
    description: "Production software for regulated Indian markets.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Indorse Technologies Pvt. Ltd.",
  "url": "https://tech.indorize.com",
  "description": "Engineering company building production software for regulated Indian markets. Flagship product: 20fourr, a PSARA-verified private-security marketplace.",
  "telephone": "+918669039635",
  "email": "arpitrautela01@indorsetech.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="animate-fade-in">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
