import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/components/client-components/Theme/ThemeProvider";
import Navbar from "@/src/components/main-components/navbar/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WebOrbit - Fast, Affordable Web, Apps, Games & AI",
  description:
    "WebOrbit offers fast, affordable websites (MERN/Next.js), apps, Unity games, and AI solutions by an experienced team of four.",
  openGraph: {
    title: "WebOrbit - Digital Solutions",
    description:
      "Fast, affordable websites, apps, games, and AI by WebOrbit’s expert team.",
    // images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          {/* <Footer/> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
