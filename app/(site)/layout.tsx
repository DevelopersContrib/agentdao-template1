"use client";

import Header from "@/components/Header";
import Script from "next/script";
import Footer from "@/components/Footer";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
const inter = Inter({ subsets: ["latin"] });
import "../globals.css";
import ToasterContext from "../context/ToastContext";
import { Metadata } from 'next';
import { getDomain, getData } from "@/lib/data";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="eng">
      <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TLSB362XCS"
        />
        <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TLSB362XCS');
          `}
        </Script>
      <body>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >

            <Lines />
            <Header/>
            <ToasterContext />
            {children}
            <Footer />
            <ScrollToTop />
        </ThemeProvider>

          <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/42816889.js"></script>
          <script type="text/javascript" async defer src="./node_modules/preline/dist/preline.js"></script>
      </body>
    </html>
  );
}
