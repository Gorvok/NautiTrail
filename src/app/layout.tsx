import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientSessionProvider from "@/app/components/ClientSessionProvider";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NautiTrail - Your Adventure Starts Here",
  description: "Discover, Book, & Experience Life's Best Moments",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClientSessionProvider>
      <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      {children}
      <Analytics />
      <Footer/>
      </body>
      </html>
      </ClientSessionProvider>
  );
}
