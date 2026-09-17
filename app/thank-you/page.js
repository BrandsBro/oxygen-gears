import styles from "./thankyou.module.css";
import Link from "next/link";
import brand from "@/config/brand";

export default function ThankYouPage() {
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
