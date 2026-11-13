import Image from "next/image";
import Link from "next/link";
import brand from "@/config/brand";
import { models, shop } from "./links";
import styles from "./StoreChrome.module.css";

const groups = [
  ["Shop", [["All Products", shop]]],
  ["By Capacity", models],
  ["Company", [["About Us", "/about"], ["FAQs", "/faq"], ["User Manual", "/user-manual"], ["Contact", "/contact"]]],
  ["Policies", [["Privacy Policy", "/privacy-policy"], ["Payment Policy", "/payment-policy"], ["Return Policy", "/return-policy"], ["Refund Policy", "/refund-policy"], ["Shipping Policy", "/shipping-policy"], ["Terms and Conditions", "/terms"]]],
];

export default function StoreFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.support}>
          <div><h2>Talk to the Oxliv team</h2><p>Need help choosing a concentrator? We can help.</p></div>
          <div className={styles.contacts}>
            <a href={`tel:${brand.phone.replace(/[^+\d]/g, "")}`}>{brand.phone}</a>
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
          </div>
        </div>
        <div className={styles.footerGrid}>
          <div className={styles.identity}>
            <Link href="/" aria-label="Oxliv home"><Image className={styles.logo} src={brand.logo} alt="Oxliv" width={120} height={40} /></Link>
            <p>Portable oxygen concentrators for everyday comfort at home and on the go.</p>
            <address>1900 W Mockingbird Ln #101<br />Dallas, TX 75235</address>
          </div>
          {groups.map(([title, links]) => (
            <nav key={title} aria-label={title}>
              <h2>{title}</h2>
              <ul>{links.map(([label, href]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul>
            </nav>
          ))}
        </div>
        <p className={styles.disclaimer}>
          Oxliv products are intended for general wellness, personal comfort and everyday non-medical use unless otherwise specified by the manufacturer. They are not intended to diagnose, treat, cure, prevent or manage any disease or medical condition, or to replace prescribed medical equipment or professional healthcare advice. Review the product information, instructions and warnings before use. If you require medical oxygen, consult a qualified healthcare professional.
        </p>
        <div className={styles.bottom}>© {new Date().getFullYear()} Oxliv. All rights reserved.</div>
      </div>
    </footer>
  );
}
