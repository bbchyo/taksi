import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Erzincan Eşot Taksi | Güvenli ve Hızlı Havalimanı & Otogar Hizmeti",
  description: "Erzincan merkez taksi, Havalimanı ve Otogar resmi durağı. EBYÜ üniversite taksi, Mengücek Gazi hastanesi taksi. 7/24 Kesintisiz hizmet.",
  keywords: [
    "Erzincan taksi", 
    "Erzincan merkez taksi", 
    "Ergan dağı taksi", 
    "Erzincan nöbetçi taksi", 
    "Erzincan otogar taksi",
    "Erzincan havalimanı taksi",
    "Erzincan üniversite taksi",
    "Eşot taksi", 
    "Erzincan en yakın taksi",
    "Erzincan güvenilir taksi"
  ],
  openGraph: {
    title: "Erzincan Eşot Taksi | Havalimanı & Otogar Resmi Durağı",
    description: "Erzincan'ın her noktasına; üniversiteye, hastaneye, havalimanına ve otogara en hızlı ulaşım.",
    url: "https://erzincanesottaksi.com",
    siteName: "Erzincan Eşot Taksi",
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
      <body className={`${inter.variable} font-sans antialiased text-neutral-900 bg-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

