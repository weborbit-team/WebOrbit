import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/components/client-components/Theme/ThemeProvider";
import Navbar from "@/src/components/main-components/navbar/page";
// import Footer from "@/src/components/main-components/footer/page";


// Error Boundary Component (optional)
// import ErrorBoundary from "@/src/components/ErrorBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Awesome App", // More specific title
  description: "A modern web application built with Next.js",
  icons: {
    icon: "/favicon.ico", // Add favicon
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
