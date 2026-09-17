"use client";
import { createContext, useContext, useState } from "react";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { currentCart } from "@wix/ecom";
import { redirects } from "@wix/redirects";

const CartContext = createContext(null);

function createWixClient() {
  return createClient({
    modules: { currentCart, redirects },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
    }),
  });
}

export function CartProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const buyNow = async (productId, variantId, quantity = 1) => {
    setLoading(true);
    try {
      const client = createWixClient();

      // Build catalog reference
      const catalogReference = {
        catalogItemId: productId,
        appId: "1380b703-ce81-ff05-f115-39571d94dfcd",
      };

      // Only add variantId if it's a real one
      if (variantId && variantId !== "00000000-0000-0000-0000-000000000000") {
        catalogReference.options = { variantId };
      }

      console.log("Step 1 - Adding to cart:", productId, variantId);
      const cartResult = await client.currentCart.addToCurrentCart({
        lineItems: [{ quantity, catalogReference }],
      });

      console.log("Step 1 done - Cart items:", cartResult?.cart?.lineItems?.length);

      // Step 2 — Create checkout from cart
      console.log("Step 2 - Creating checkout from cart");
      const { checkoutId } = await client.currentCart.createCheckoutFromCurrentCart({
        channelType: "WEB",
      });
      console.log("Step 2 done - Checkout ID:", checkoutId);

      if (!checkoutId) throw new Error("No checkout ID returned");

      // Step 3 — Redirect
      const { redirectSession } = await client.redirects.createRedirectSession({
        ecomCheckout: { checkoutId },
        callbacks: {
          postFlowUrl: "https://us.oxliv.store",
          thankYouPageUrl: "https://us.oxliv.store/thank-you",
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
