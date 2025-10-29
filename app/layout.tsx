import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";


const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-poppins" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-roboto" });
export const metadata: Metadata = {
  title: "DeshTender",
  description: "Developed by Farhana Sharna",
  icons: {
      icon: "/logo.svg",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={`${roboto.variable}`}>
      <body
        className="antialiased"
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
