import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import brand from "@/config/brand";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Col 1 — Logo + Disclaimer */}
        <div className={styles.col}>
          <Image src={brand.logo} alt={brand.name} width={180} height={45} style={{ objectFit: "contain" }} />
          <p className={styles.disclaimer}>
            <strong>Important Disclaimer:</strong> This product is intended for general wellness, comfort, and lifestyle use only. It is not a medical device and is not intended to diagnose, treat, cure, prevent, or monitor any disease or health condition. It should not be used as a substitute for professional medical care or any device recommended by a healthcare provider. Please consult a licensed healthcare professional if you have questions about whether this type of product is appropriate for you.
          </p>
        </div>

        {/* Cols 2+3 */}
        <div className={styles.menusRow}>
          <div className={styles.col}>
            <p className={styles.colHeading}>PAGES</p>
            <Link href="/">Home</Link>
            <Link href="/collection/all">Oxygen Concentrator</Link>
            <Link href="/about">About Us</Link>
            <Link href="/faq">FAQ's</Link>
            <Link href="/contact">Contact Us</Link>
          </div>

          <div className={styles.col}>
            <p className={styles.colHeading}>POLICY PAGES</p>
            <Link href="/refund-policy">Refund Policy</Link>
            <Link href="/return-policy">Return Policy</Link>
            <Link href="/payment-policy">Payment Policy</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/shipping-policy">Shipping Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>

        {/* Col 4 — Contact */}
        <div className={styles.col}>
          <p className={styles.colHeading}>CONTACT INFO</p>
          <a href={`tel:${brand.phone}`} className={styles.contact}>
            <span>📞</span> {brand.phone}
          </a>
          <a href={`mailto:${brand.email}`} className={styles.contact}>
            <span>✉️</span> {brand.email}
          </a>
        </div>

      </div>

      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
