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
    const clickId = searchParams.get("atclid");
    const value = searchParams.get("value") || searchParams.get("total") || "";
    const productName = searchParams.get("productName") || "";

    // Fire AnyTrack Purchase postback
    if (orderId && clickId) {
      const postbackUrl =
        `https://t1.anytrack.io/OZ1EhR5T/collect/custom-oxlivpurchasewebhook` +
        `?click_id=${encodeURIComponent(clickId)}` +
        `&commission=${encodeURIComponent(value)}` +
        `&transaction_id=${encodeURIComponent(orderId)}` +
        `&brand_name=${encodeURIComponent(productName)}`;

      fetch(postbackUrl, { mode: "no-cors" }).catch(() => {});
    }
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
