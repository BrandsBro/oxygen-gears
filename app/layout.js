import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { CartProvider } from "@/lib/cartContext";
import brand from "@/config/brand";
import { Geologica } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";

const geologica = Geologica({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "Oxliv — Non-Medical Oxygen Concentrators",
  description: "Stay comfortable at home or on the move. Lightweight oxygen concentrators with adjustable flow and reliable battery power.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geologica.className}>
      <head>
        <link rel="icon" href={brand.favicon} type="image/webp" />
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
