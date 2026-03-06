import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FET Semiconductors Pvt Ltd | Advanced Engineering Solutions",
  description: "Leading provider of semiconductor design, manufacturing, and engineering services. Delivering cutting-edge solutions for the electronics industry.",
  keywords: ["semiconductor", "engineering services", "chip design", "manufacturing", "electronics", "technology"],
  authors: [{ name: "FET Semiconductors Pvt Ltd" }],
  openGraph: {
    title: "FET Semiconductors Pvt Ltd | Advanced Engineering Solutions",
    description: "Leading provider of semiconductor design, manufacturing, and engineering services.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
