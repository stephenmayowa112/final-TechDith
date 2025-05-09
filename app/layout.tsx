import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TECHDITH LIMITED | Technology Solutions",
  description:
    "TECHDITH LIMITED is a dynamic and innovative technology company based in Lagos, Nigeria, specializing in computer programming, consultancy, and technology solutions.",
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/images/techdithlogo.ico',
    shortcut: '/images/techdithlogo.ico',
    apple: '/images/techdithlogo.ico',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/images/techdithlogo.ico',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} pt-16`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
