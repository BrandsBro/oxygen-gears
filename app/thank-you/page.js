"use client";
import brand from "@/config/brand";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import styles from "./thankyou.module.css";

function ThankYouContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const orderId = searchParams.get("orderId");
    const urlAtclid = searchParams.get("atclid");

    if (!orderId) return;

    const firePurchase = (value) => {
      if (typeof window !== "undefined" && window.AnyTrack) {
        window.AnyTrack("trigger", "Purchase", {
          revenue: parseFloat(value) || 0,
          transactionId: orderId,
          currency: "USD",
        });
        console.log(
          "AnyTrack Purchase fired — orderId:",
          orderId,
          "value:",
          value,
        );
      }
    };

    fetch(`/api/wix-order?orderId=${orderId}`)
      .then((res) => res.json())
      .then(async (data) => {
        const value = data.total || "0";

        if (urlAtclid) {
          firePurchase(value);
        } else if (data.checkoutId) {
          const lookup = await fetch(
            `/api/lookup-atclid?checkoutId=${data.checkoutId}`,
          )
            .then((r) => r.json())
            .catch(() => ({ atclid: null }));
          firePurchase(value);
        } else {
          firePurchase("0");
        }
      })
      .catch(() => {
        firePurchase("0");
      });
  }, [searchParams]);

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.icon}>🎉</div>
        <h1 className={styles.heading}>Thank You for Your Order!</h1>
        <p className={styles.text}>
          Your order has been placed successfully. You will receive a
          confirmation email shortly with your order details and tracking
          information.
        </p>
        <div className={styles.details}>
          <div className={styles.detail}>
            <span>📦</span>
            <p>Processing within 24 hours</p>
          </div>
          <div className={styles.detail}>
            <span>🚚</span>
            <p>Delivered in 8–11 business days</p>
          </div>
          <div className={styles.detail}>
            <span>📧</span>
            <p>Tracking sent to your email</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link href="/" className={styles.primary}>
            Back to Home
          </Link>
          <Link href="/collection/all" className={styles.secondary}>
            Continue Shopping
          </Link>
        </div>
        <p className={styles.support}>
          Questions? Contact us at{" "}
          <a href={`mailto:${brand.email}`}>{brand.email}</a>
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
