import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "./about/components/header";
import Footer from "./about/pages/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Everything Talent AI",
  description: "AI for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiase`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
      </ThemeProvider>
    </html>
  );
}
