import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Erzincan Uçar Taksi | 7/24 Kesintisiz ve Güvenli Taksi Hizmeti",
  description: "Erzincan merkez taksi, Ergan Dağı taksi, nöbetçi taksi. Erzincan Uçar Taksi ile güvenli ve hızlı ulaşım. Hemen arayın veya WhatsApp'tan yazın.",
  keywords: ["Erzincan taksi", "Erzincan merkez taksi", "Ergan dağı taksi", "Erzincan nöbetçi taksi", "Uçar taksi", "Erzincan taksi durakları", "Erzincan güvenilir taksi"],
  openGraph: {
    title: "Erzincan Uçar Taksi | 7/24 Taksi",
    description: "Erzincan Uçar Taksi ile güvenli ve hızlı ulaşım. Hemen arayın veya WhatsApp'tan yazın.",
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
