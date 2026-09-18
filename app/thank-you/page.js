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

    const fireEvents = (value) => {
      // Primary: fire via AnyTrack JS — maps correctly to Purchase in Meta
      if (typeof window !== "undefined" && window.AnyTrack) {
        window.AnyTrack("trigger", "Purchase", {
          revenue: parseFloat(value) || 0,
          transactionId: orderId,
          currency: "USD",
        });
        console.log("AnyTrack JS Purchase fired — orderId:", orderId, "value:", value);
      }

      // Backup: also fire postback URL (belt and suspenders)
      if (urlAtclid) {
        const postbackUrl =
          `https://t1.anytrack.io/OZ1EhR5T/collect/custom-oxlivpurchasewebhook` +
          `?click_id=${encodeURIComponent(urlAtclid)}` +
          `&commission=${encodeURIComponent(value)}` +
          `&transaction_id=${encodeURIComponent(orderId)}`;
        fetch(postbackUrl, { mode: "no-cors" }).catch(() => {});
        console.log("Postback also fired as backup");
      }
    };

    // Fetch real order value from Wix first
    fetch(`/api/wix-order?orderId=${orderId}`)
      .then((res) => res.json())
      .then(async (data) => {
        const value = data.total || "0";

        if (urlAtclid) {
          fireEvents(value);
        } else if (data.checkoutId) {
          // Fallback: look up atclid from Supabase
          console.log("atclid missing from URL — checking Supabase");
          const lookup = await fetch(`/api/lookup-atclid?checkoutId=${data.checkoutId}`)
            .then((r) => r.json())
            .catch(() => ({ atclid: null }));

          if (lookup.atclid) {
            fireEvents(value);
          } else {
            // Fire JS event anyway — AnyTrack may still have session
            fireEvents(value);
          }
        }
      })
      .catch(() => {
        // Wix API failed — still fire JS event
        fireEvents("0");
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
