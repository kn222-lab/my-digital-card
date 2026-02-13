import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// フォントの定義
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reframe / Namiki",
  description: "Webエンジニア / 業務効率化",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💠</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      {/* className を定義したフォントの変数名に合わせて修正しました */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {/* Navbarの高さ分（h-16 = 64px）を確保し、背景色を指定 */}
        <main className="pt-16 min-h-screen bg-slate-900">
          {children}
        </main>
      </body>
    </html>
  );
}