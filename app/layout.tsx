import type { Metadata } from "next";
import { Nunito, Titillium_Web } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-nunito", // Store in CSS variable
});

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-titillium", // Store in CSS variable
});

export const metadata: Metadata = {
  title: "LGT",
  description: "Export Fruits and Veggies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${titillium.variable} min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1 pt-10 pb-8">
          {children}
          <Analytics />
        </main>
        <Toaster richColors />
        <Footer />
      </body>
    </html>
  );
}
