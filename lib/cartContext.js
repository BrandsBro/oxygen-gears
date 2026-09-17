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
      // Fresh client every time to avoid session issues
      const client = createWixClient();

      // Step 1 — Add to cart
      console.log("Step 1 - Adding to cart:", productId, variantId);
      const cartResult = await client.currentCart.addToCurrentCart({
        lineItems: [{
          quantity,
          catalogReference: {
            catalogItemId: productId,
            appId: "1380b703-ce81-ff05-f115-39571d94dfcd",
            options: { variantId },
          },
        }],
      });

      const lineItems = cartResult?.cart?.lineItems || [];
      console.log("Step 1 done - Cart items:", lineItems.length);

      if (lineItems.length === 0) {
        throw new Error("Item not added to cart");
      }

      // Step 2 — Create checkout from cart
      console.log("Step 2 - Creating checkout from cart");
      const { checkoutId } = await client.currentCart.createCheckoutFromCurrentCart({
        channelType: "WEB",
      });
      console.log("Step 2 done - Checkout ID:", checkoutId);

      if (!checkoutId) throw new Error("No checkout ID returned");

      // Step 3 — Create redirect session
      console.log("Step 3 - Creating redirect session");
      const { redirectSession } = await client.redirects.createRedirectSession({
        ecomCheckout: { checkoutId },
        callbacks: {
          postFlowUrl: "https://us.oxliv.store",
          thankYouPageUrl: "https://us.oxliv.store/thank-you",
        },
      });

      console.log("Step 3 done - Redirecting to:", redirectSession.fullUrl);
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
