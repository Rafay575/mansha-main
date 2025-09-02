import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mansha & Brothers",
  description:
    "Mansha & Brothers provides top-quality solutions and services tailored to your business needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Mansha & Brothers</title>
        <meta
          name="description"
          content="Mansha & Brothers provides top-quality solutions and services tailored to your business needs."
        />
        <link rel="icon" href="/images/logo.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mt-[60px] w-[100vw]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
