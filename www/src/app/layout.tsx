import type { Metadata } from 'next'
import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../style/global.css";

export const metadata: Metadata = {
  title: '掘土',
  description: 'axtlive zhanglizhi'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-[1200px] mx-auto my-0">
        <Header />
        <div className="relative">{children}</div>
        {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
