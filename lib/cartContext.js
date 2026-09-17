"use client";
import { createContext, useContext, useState } from "react";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { currentCart } from "@wix/ecom";
import { redirects } from "@wix/redirects";

const CartContext = createContext(null);

let clientInstance = null;

function getClient() {
  if (!clientInstance) {
    clientInstance = createClient({
      modules: { currentCart, redirects },
      auth: OAuthStrategy({
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
      }),
    });
  }
  return clientInstance;
}

export function CartProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const buyNow = async (productId, variantId, quantity = 1) => {
    setLoading(true);
    try {
      const client = getClient();

      // Step 1 — Add to cart
      console.log("Adding to cart:", { productId, variantId, quantity });
      const cartResult = await client.currentCart.addToCurrentCart({
        lineItems: [{
          quantity,
          catalogReference: {
            catalogItemId: productId,
            appId: "1380b703-ce81-ff05-f115-39571d94dfcd",
            options: {
              variantId,
            },
          },
        }],
      });
      console.log("Cart items:", cartResult?.cart?.lineItems?.length);

      // Step 2 — Create checkout from cart
      const { checkoutId } = await client.currentCart.createCheckoutFromCurrentCart({
        channelType: "WEB",
      });
      console.log("Checkout ID:", checkoutId);

      if (!checkoutId) throw new Error("No checkout ID");

      // Step 3 — Redirect to Wix checkout
      const { redirectSession } = await client.redirects.createRedirectSession({
        ecomCheckout: { checkoutId },
        callbacks: {
          postFlowUrl: window.location.origin,
          thankYouPageUrl: `${window.location.origin}/thank-you`,
        },
      });

      window.location.href = redirectSession.fullUrl;
    } catch (err) {
      console.error("Checkout error:", err.message);
      alert("Checkout error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CartContext.Provider value={{ loading, buyNow }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
