"use client";
import { createContext, useContext, useState } from "react";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { checkout } from "@wix/ecom";
import { redirects } from "@wix/redirects";

const CartContext = createContext(null);

let clientInstance = null;

function getClient() {
  if (!clientInstance) {
    clientInstance = createClient({
      modules: { checkout, redirects },
      auth: OAuthStrategy({
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
      }),
    });
  }
  return clientInstance;
}

export function CartProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const buyNow = async (productId, quantity = 1) => {
    setLoading(true);
    try {
      const client = getClient();
      console.log("Creating checkout for:", productId);

      // Create checkout directly with line items — no cart needed
      const { checkout: createdCheckout } = await client.checkout.createCheckout({
        lineItems: [{
          catalogReference: {
            catalogItemId: productId,
            appId: "1380b703-ce81-ff05-f115-39571d94dfcd",
          },
          quantity,
        }],
        channelType: "WEB",
      });

      console.log("Checkout created:", createdCheckout._id);

      const { redirectSession } = await client.redirects.createRedirectSession({
        ecomCheckout: { checkoutId: createdCheckout._id },
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
