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

  const buyNow = async (productId, variantId, quantity = 1) => {
    setLoading(true);
    try {
      const client = getClient();
      console.log("Creating checkout:", { productId, variantId, quantity });

      const response = await client.checkout.createCheckout({
        channelType: "WEB",
        lineItems: [{
          quantity,
          catalogReference: {
            catalogItemId: productId,
            appId: "1380b703-ce81-ff05-f115-39571d94dfcd",
            options: {
              variantId: variantId,
            },
          },
        }],
      });

      console.log("LineItems count:", response?.lineItems?.length);
      console.log("Total:", response?.priceSummary?.total?.amount);

      const checkoutId = response?._id;
      if (!checkoutId) throw new Error("No checkout ID");

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
