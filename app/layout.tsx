import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";

import Header from "@/components/Header/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "E-commerce test App",
  description: "Shopping test app which allows to order products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://pay.fondy.eu/latest/checkout-vue/checkout.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <body className={inter.className} id="body">
        <Header />
        {children}
        <Script
          strategy="afterInteractive"
          src="https://pay.fondy.eu/latest/checkout-vue/checkout.js"
        />
      </body>
    </html>
  );
}
