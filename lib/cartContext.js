"use client";
import { createContext, useContext, useState } from "react";
import { wixClient } from "./wixClient";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const addToCart = async (productId, selectedOptions = {}, quantity = 1) => {
    setLoading(true);
    try {
      console.log("Adding to cart:", { productId, selectedOptions, quantity });
      const result = await wixClient.currentCart.addToCurrentCart({
        lineItems: [{
          catalogReference: {
            catalogItemId: productId,
            appId: "1380b703-ce81-ff05-f115-39571d94dfcd",
            options: selectedOptions,
          },
          quantity,
        }],
      });
      console.log("Cart result:", result);
      return result;
    } catch (err) {
      console.error("Add to cart error:", err.message, err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const checkout = async () => {
    setLoading(true);
    try {
      const { checkoutId } = await wixClient.currentCart.createCheckoutFromCurrentCart({
        channelType: "WEB",
      });
      console.log("Checkout ID:", checkoutId);
      const { redirectSession } = await wixClient.redirects.createRedirectSession({
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
