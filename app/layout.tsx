import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amista",
  description: "Premier cosmetology clinic in Hyderabad & Vijayawada offering advanced skin, hair & cosmetic treatments. Expert care for acne, laser hair removal, anti-aging, permanent makeup, and body slimming. Book your free consultation today!",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
