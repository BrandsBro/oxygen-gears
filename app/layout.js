import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { CartProvider } from "@/lib/cartContext";
import brand from "@/config/brand";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Oxliv — Non-Medical Oxygen Concentrators",
  description: "Stay comfortable at home or on the move. Lightweight oxygen concentrators with adjustable flow and reliable battery power.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={brand.favicon} type="image/webp" />
        <link
          rel="preload"
          href="https://cdn.shopify.com/s/files/1/1014/5274/2935/files/GeologicaRoman-Regular.ttf?v=1788173963"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <CartProvider>
          <ScrollToTop />
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
