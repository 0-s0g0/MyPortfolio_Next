import type { Metadata } from "next";
import {Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";
import ContactModal from "./components/contactModal/contactModal";
import Head from "next/head";  // Importing Head here


const ZenMaru = Zen_Maru_Gothic({
  weight: "400",
  variable: "--font-zen-maru-gothic",
  subsets: ["latin"],
});




export const metadata: Metadata = {
  title: "SogoRei's Portfolio",
  description: "MyPortfolio-あしあと",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="SogoRei's Coding Products" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>


      <body
        className={ZenMaru.className}
      >
        {children}
        <ContactModal/>
      </body>
    </html>
  );
}
