"use client";
import styles from "./thankyou.module.css";
import Link from "next/link";
import brand from "@/config/brand";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ThankYouContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const orderId = searchParams.get("orderId");
    const urlAtclid = searchParams.get("atclid");

    if (!orderId) return;

    const firePostback = (clickId, value) => {
      const postbackUrl =
        `https://t1.anytrack.io/OZ1EhR5T/collect/custom-oxlivpurchasewebhook` +
        `?click_id=${encodeURIComponent(clickId)}` +
        `&commission=${encodeURIComponent(value)}` +
        `&transaction_id=${encodeURIComponent(orderId)}`;

      fetch(postbackUrl, { mode: "no-cors" }).catch(() => {});
      console.log("AnyTrack Purchase fired — orderId:", orderId, "value:", value, "clickId:", clickId);
    };

    // Fetch order total from Wix (also returns checkoutId for fallback)
    fetch(`/api/wix-order?orderId=${orderId}`)
      .then((res) => res.json())
      .then(async (data) => {
        const value = data.total || "0";

        if (urlAtclid) {
          // Primary: atclid came through in URL
          firePostback(urlAtclid, value);
        } else if (data.checkoutId) {
          // Fallback: look up atclid from Supabase using checkoutId
          console.log("atclid missing from URL — looking up from Supabase, checkoutId:", data.checkoutId);
          const lookup = await fetch(`/api/lookup-atclid?checkoutId=${data.checkoutId}`)
            .then((r) => r.json())
            .catch(() => ({ atclid: null }));

          if (lookup.atclid) {
            firePostback(lookup.atclid, value);
          } else {
            console.warn("atclid not found in Supabase either — postback skipped");
          }
        }
      })
      .catch(() => {
        // If Wix API fails but we have atclid in URL, still fire with value 0
        if (urlAtclid) {
          firePostback(urlAtclid, "0");
        }
      });
  }, [searchParams]);

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.icon}>🎉</div>
        <h1 className={styles.heading}>Thank You for Your Order!</h1>
        <p className={styles.text}>
          Your order has been placed successfully. You will receive a confirmation email shortly with your order details and tracking information.
        </p>
        <div className={styles.details}>
          <div className={styles.detail}>
            <span>📦</span>
            <p>Processing within 24 hours</p>
          </div>
          <div className={styles.detail}>
            <span>🚚</span>
            <p>Delivered in 6–12 business days</p>
          </div>
          <div className={styles.detail}>
            <span>📧</span>
            <p>Tracking sent to your email</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link href="/" className={styles.primary}>Back to Home</Link>
          <Link href="/collection/all" className={styles.secondary}>Continue Shopping</Link>
        </div>
        <p className={styles.support}>
          Questions? Contact us at <a href={`mailto:${brand.email}`}>{brand.email}</a>
        </p>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense>
      <ThankYouContent />
    </Suspense>
  );
}
