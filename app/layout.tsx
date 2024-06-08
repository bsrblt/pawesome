// "use client";
import React, { ReactNode } from "react";
import { Archivo, Lobster, Acme } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import { CartContextProvider } from "./store/CartContext";
import Footer from "./components/layout/Footer";
import SessionWrapper from "./lib/SessionWrapper";
import { SessionProvider } from "next-auth/react";
import AuthProvider from "./store/AuthContext";
import Head from "next/head";

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
    <>
      <Head>
        <title>Your Page Title</title>
        <meta name="Pawesome" content="Love at First Bite" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <SessionWrapper>
        <html lang="en" className="!scroll-smooth min-w-screen">
          <body
            className={`${archivo.variable} ${lobster.variable} ${acme.variable}`}
          >
            {/* <SessionProvider> */}
            {/* <AuthProvider> */}
            <CartContextProvider>
              <Header />
              {children}
              <Footer />
            </CartContextProvider>
            {/* </AuthProvider> */}
            {/* </SessionProvider> */}
          </body>
        </html>
      </SessionWrapper>
    </>
  );
}
