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

    if (!orderId || !clickId) return;

    // Fetch real order total from Wix then fire postback
    fetch(`/api/wix-order?orderId=${orderId}`)
      .then((res) => res.json())
      .then((data) => {
        const value = data.total || "0";

        const postbackUrl =
          `https://t1.anytrack.io/OZ1EhR5T/collect/custom-oxlivpurchasewebhook` +
          `?click_id=${encodeURIComponent(clickId)}` +
          `&commission=${encodeURIComponent(value)}` +
          `&transaction_id=${encodeURIComponent(orderId)}`;

        fetch(postbackUrl, { mode: "no-cors" }).catch(() => {});
        console.log("AnyTrack Purchase fired — orderId:", orderId, "value:", value, "clickId:", clickId);
      })
      .catch(() => {
        // Fallback: fire postback without value if API fails
        const postbackUrl =
          `https://t1.anytrack.io/OZ1EhR5T/collect/custom-oxlivpurchasewebhook` +
          `?click_id=${encodeURIComponent(clickId)}` +
          `&commission=0` +
          `&transaction_id=${encodeURIComponent(orderId)}`;

        fetch(postbackUrl, { mode: "no-cors" }).catch(() => {});
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
