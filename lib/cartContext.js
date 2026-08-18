"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { wixClient } from "./wixClient";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const refreshCart = async () => {
    try {
      const currentCart = await wixClient.currentCart.getCurrentCart();
      setCart(currentCart);
      const count = currentCart?.lineItems?.reduce((sum, item) => sum + item.quantity, 0) || 0;
      setCartCount(count);
    } catch {
      setCart(null);
      setCartCount(0);
    }
  };

  useEffect(() => { refreshCart(); }, []);

  const addToCart = async (productId, selectedOptions = {}, quantity = 1) => {
    setLoading(true);
    try {
      await wixClient.currentCart.addToCurrentCart({
        lineItems: [{
          catalogReference: {
            catalogItemId: productId,
            appId: "1380b703-ce81-ff05-f115-39571d94dfcd",
            options: { options: selectedOptions },
          },
          quantity,
        }],
      });
      await refreshCart();
    } catch (err) {
      console.error("Add to cart error:", err);
    }
    setLoading(false);
  };

  const checkout = async () => {
    try {
      const { checkoutId } = await wixClient.currentCart.createCheckoutFromCurrentCart({
        channelType: "WEB",
      });
      const { redirectSession } = await wixClient.redirects.createRedirectSession({
        ecomCheckout: { checkoutId },
        callbacks: {
          postFlowUrl: window.location.origin,
          thankYouPageUrl: `${window.location.origin}/thank-you`,
        },
      });
      window.location.href = redirectSession.fullUrl;
    } catch (err) {
      console.error("Checkout error:", err);
    }
  };

  return (
    <CartContext.Provider value={{ cart, cartCount, loading, addToCart, checkout, refreshCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
