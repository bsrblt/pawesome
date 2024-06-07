import React, { ReactNode } from "react";
import { Archivo, Lobster, Acme } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import { CartContextProvider } from "./store/CartContext";
import Footer from "./components/layout/Footer";
import SessionWrapper from "./lib/SessionWrapper";

const acme = Acme({
  weight: "400",
  subsets: ["latin"],

  variable: "--font-acme",
});

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lobster",
});

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

interface LayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <SessionWrapper>
      <html lang="en" className="!scroll-smooth min-w-screen">
        <body
          className={`${archivo.variable} ${lobster.variable} ${acme.variable}`}
        >
          <CartContextProvider>
            <Header />
            {children}
            <Footer />
          </CartContextProvider>
        </body>
      </html>
    </SessionWrapper>
  );
}
