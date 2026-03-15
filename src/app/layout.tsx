import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Erzincan Uçar Taksi | Güvenli ve Hızlı Hizmet - Otogar, Havalimanı, Üniversite",
  description: "Erzincan merkez taksi, EBYÜ üniversite taksi, Mengücek Gazi hastanesi taksi, Erzincan otogar taksi, Ergan Dağı taksi ve havaalanı taksi. 7/24 Kesintisiz hizmet.",
  keywords: [
    "Erzincan taksi", 
    "Erzincan merkez taksi", 
    "Ergan dağı taksi", 
    "Erzincan nöbetçi taksi", 
    "Erzincan otogar taksi",
    "Erzincan havalimanı taksi",
    "Erzincan üniversite taksi",
    "Erzincan araştırma hastanesi taksi",
    "Mengücek Gazi Eğitim ve Araştırma Hastanesi taksi",
    "Uçar taksi", 
    "Erzincan en yakın taksi",
    "Erzincan güvenilir taksi"
  ],
  openGraph: {
    title: "Erzincan Uçar Taksi | Havalimanı, Otogar, Üniversite",
    description: "Erzincan'ın her noktasına; üniversiteye, hastaneye, havalimanına ve otogara en hızlı ulaşım.",
    url: "https://erzincanucartaksi.com",
    siteName: "Erzincan Uçar Taksi",
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
      <body className={`${inter.variable} font-sans antialiased text-neutral-900 bg-neutral-50`}>
        {children}
      </body>
    </html>
  );
}
