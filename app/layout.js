import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { CartProvider } from "@/lib/cartContext";

export const metadata = {
  title: "OxygenGears",
  description: "Portable Oxygen Concentrators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://static.wixstatic.com/media/20cc08_36a5efa395264583a64742a8c3f8ae06~mv2.png" type="image/png" />
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
