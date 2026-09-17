"use client";
import { useEffect } from "react";

export function ViewContentEvent({ productName, price, productId }) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.AnyTrack) {
      window.AnyTrack("trigger", "ViewContent", {
        value: price,
        currency: "USD",
        items: [{
          id: productId,
          name: productName,
          price: price,
          quantity: 1,
        }],
      });
    }
  }, [productName, price, productId]);

  return null;
}
