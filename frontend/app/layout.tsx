import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Link from "next/link";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });
import { AuthProvider } from "../context/authContext";


export const metadata: Metadata = {
  title: "VacaVerse",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Providers>
            <main> {children}</main>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
