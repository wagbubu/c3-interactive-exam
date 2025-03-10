"use client";

import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/components/Cart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${geistMono.variable} antialiased bg-moss-primary`}
      >
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            <Banner />
            <Navbar />
            {children}
          </CartProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
