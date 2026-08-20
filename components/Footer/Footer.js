import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { wixClient } from "@/lib/wixClient";
import { getWixImageUrl } from "@/lib/wixUtils";
import brand from "@/config/brand";

export default async function Footer() {
  const { items } = await wixClient.products.queryProducts().find();
  const product = items.find((p) => p.slug === brand.featuredProductSlug) || items[0];
  const productImage = getWixImageUrl(product?.media?.items?.[0]?.image?.url);
  const productPrice = product?.price?.discountedPrice ?? product?.price?.price;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Col 1 — Logo + Featured Product */}
        <div className={styles.col}>
          <Image src={brand.logo} alt={brand.name} width={180} height={45} style={{ objectFit: "contain" }} />
          <p className={styles.latestLabel}>LATEST MODEL!</p>
          <Link href={`/products/${brand.featuredProductSlug}`} className={styles.productCard}>
            <img src={productImage} alt={product?.name} className={styles.productImg} />
            <div className={styles.productInfo}>
              <p className={styles.productName}>{product?.name}</p>
              <p className={styles.productPrice}>${productPrice?.toFixed(2)}</p>
            </div>
          </Link>
        </div>

        {/* Cols 2+3 wrapped in menusRow on mobile */}
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
