import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Erzincan VİP Taksi | 7/24 Güvenli Taksi Hizmeti - Faruk Tutar",
  description: "Erzincan VİP Taksi - İnönü Mahallesi Merkez Postane Yanı, Valilik Karşısı. 7/24 şehir içi, havalimanı, otogar ve üniversite taksi hizmeti. Kredi kartı geçerlidir. 0551 859 35 81",
  keywords: [
    "Erzincan taksi",
    "Erzincan VİP taksi",
    "Erzincan merkez taksi",
    "Ergan dağı taksi",
    "Erzincan nöbetçi taksi",
    "Erzincan otogar taksi",
    "Erzincan havalimanı taksi",
    "Erzincan üniversite taksi",
    "Erzincan en yakın taksi",
    "Erzincan güvenilir taksi",
    "Erzincan valilik taksi",
    "Erzincan postane taksi",
    "Faruk Tutar taksi",
    "Erzincan kredi kartlı taksi"
  ],
  openGraph: {
    title: "Erzincan VİP Taksi | Sevgi Taşıyoruz",
    description: "Erzincan'ın her noktasına 7/24 güvenli, konforlu ve VİP kalitesinde taksi hizmeti. Kredi kartı geçerlidir.",
    url: "https://erzincanviptaksi.com",
    siteName: "Erzincan VİP Taksi",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=AW-18011858546`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18011858546');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased text-neutral-900 bg-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
