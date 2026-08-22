import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { CartProvider } from "@/lib/cartContext";
import brand from "@/config/brand";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "Oxliv — Non-Medical Oxygen Concentrators",
  description: "Stay comfortable at home or on the move. Lightweight oxygen concentrators with adjustable flow and reliable battery power.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href={brand.favicon} type="image/webp" />
      </head>
      <body>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
