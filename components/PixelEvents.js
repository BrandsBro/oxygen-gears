"use client";
import { useEffect } from "react";

export function ViewContentEvent({ productName, price, productId }) {
  useEffect(() => {
    // Meta Pixel — ViewContent
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "ViewContent", {
        content_name: productName,
        content_ids: [productId],
        content_type: "product",
        value: price,
        currency: "USD",
      });
    }

    // GA4 — view_item
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "view_item", {
        currency: "USD",
        value: price,
        items: [{
          item_id: productId,
          item_name: productName,
          price: price,
        }],
      });
    }
  }, [productName, price, productId]);

  return null;
}
