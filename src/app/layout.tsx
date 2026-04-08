import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import ClickSpark from "@/components/ClickSpark";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ACM Student Chapter | JU",
  description: "Association for Computing Machinery - University of Jordan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#020617] text-slate-50 antialiased`}>
        {/* Navbar sits above all page content */}
        <Navbar />
        <ClickSpark />
        {children}
        <Footer />
      </body>
    </html>
  );
}