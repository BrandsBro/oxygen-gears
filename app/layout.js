import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { CartProvider } from "@/lib/cartContext";
import brand from "@/config/brand";
import ScrollToTop from "@/components/ScrollToTop";
import RouteTracker from "@/components/RouteTracker";
import Script from "next/script";

export const metadata = {
  title: "Oxliv — Non-Medical Oxygen Concentrators",
  description: "Stay comfortable at home or on the move.",
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
        {/* AnyTrack Tag — must be beforeInteractive */}
        <Script id="anytrack" strategy="beforeInteractive">
          {`<!-- AnyTrack Tracking Code -->
<script>!function(e,t,n,s,a){(a=t.createElement(n)).async=!0,a.src="https://assets.anytrack.io/Ca2dbm0EcXO8.js",(t=t.getElementsByTagName(n)[0]).parentNode.insertBefore(a,t),e[s]=e[s]||function(){(e[s].q=e[s].q||[]).push(arguments)}}(window,document,"script","AnyTrack");</script>
<!-- End AnyTrack Tracking Code -->`}
        </Script>
      </head>
      <body>
        <CartProvider>
          <ScrollToTop />
          <RouteTracker />
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
