"use client";
import { createContext, useContext, useState } from "react";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { currentCart } from "@wix/ecom";
import { redirects } from "@wix/redirects";
import Cookies from "js-cookie";

const getClient = () => createClient({
  modules: { currentCart, redirects },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
    tokens: JSON.parse(Cookies.get("session") || "null"),
  }),
});

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const addToCart = async (productId, selectedOptions = {}, quantity = 1) => {
    setLoading(true);
    try {
      const client = getClient();
      console.log("Adding product:", productId);
      const result = await client.currentCart.addToCurrentCart({
        lineItems: [{
          catalogReference: {
            catalogItemId: productId,
            appId: "1380b703-ce81-ff05-f115-39571d94dfcd",
          },
          quantity,
        }],
      });
      // Save session tokens
      const tokens = await client.auth.getTokens();
      Cookies.set("session", JSON.stringify(tokens), { expires: 2 });
      console.log("Cart after add:", result?.cart?.lineItems?.length, "items");
      return result;
    } catch (err) {
      console.error("Add to cart error:", err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const checkout = async () => {
    setLoading(true);
    try {
      const client = getClient();
      const { checkoutId } = await client.currentCart.createCheckoutFromCurrentCart({
        channelType: "WEB",
      });
      console.log("Checkout ID:", checkoutId);
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
    <CartContext.Provider value={{ loading, addToCart, checkout }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
