import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import brand from "@/config/brand";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Logo */}
        <div className={styles.logoWrap}>
          <Image
            src={brand.logo}
            alt={brand.name}
            width={160}
            height={44}
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Disclaimer */}
        <p className={styles.disclaimer}>
          Important Product Information: Oxliv products are intended for general wellness,
          personal comfort and everyday non-medical use unless otherwise specified in the
          manufacturer's documentation. They are not intended to diagnose, treat, cure,
          prevent or manage any disease or medical condition and are not intended as
          replacements for prescribed medical equipment or professional healthcare advice.
          Product specifications, operating requirements and intended use vary by model.
          Review the applicable product information, manufacturer instructions and warnings
          before use. If you require oxygen for medical purposes or currently use prescribed
          oxygen, consult a qualified healthcare professional regarding equipment appropriate
          for your needs.
        </p>

        {/* Contact row */}
        <div className={styles.contactRow}>
          <a href={`mailto:${brand.email}`} className={styles.contactItem}>{brand.email}</a>
          <span className={styles.divider}>|</span>
          <a href={`tel:${brand.phone}`} className={styles.contactItem}>{brand.phone.replace(/\D/g, '').replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, '$1$2$3$4')}</a>
          <span className={styles.divider}>|</span>
          <span className={styles.contactItem}>1900 W Mockingbird Ln #101, Dallas, TX 75235</span>
        </div>

        {/* Policy links */}
        <div className={styles.policyRow}>
          <Link href="/terms">Terms and Conditions</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/refund-policy">Refund and Returns Policy</Link>
          <Link href="/payment-policy">Payment Policy</Link>
          <Link href="/shipping-policy">Shipping Policy</Link>
        </div>

        {/* Copyright */}
        <p className={styles.copyright}>© {new Date().getFullYear()} Oxliv. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
