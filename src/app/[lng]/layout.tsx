import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { dir } from 'i18next'
import "./globals.css";
import { languages } from "../i18n/settings";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export const metadata: Metadata = {
  title: "Altyn Döwür HJ",
  description: "Altyn Döwür Hojalyk Jemgyýeti",
};

export default function RootLayout({
  children,
  params: {
    lng
  }
}: Readonly<{
  children: React.ReactNode,
  params: {
    lng: string
  }
}>) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
