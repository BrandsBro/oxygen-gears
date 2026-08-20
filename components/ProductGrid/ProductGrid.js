"use client";
import styles from "./ProductGrid.module.css";
import Link from "next/link";
import { useState } from "react";

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const discount = product.originalPrice && product.price < product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <Link href={`/products/${product.slug}`} className={styles.card}>
      <div
        className={styles.imgWrap}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {discount > 0 && (
          <span className={styles.discountBadge}>{discount}% OFF</span>
        )}
        <img
          src={hovered && product.image2 ? product.image2 : product.image1}
          alt={product.name}
          className={styles.img}
        />
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.name}>{product.name}</h3>
        <div className={styles.priceRow}>
          <span className={styles.price}>${product.price?.toFixed(2)}</span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className={styles.originalPrice}>${product.originalPrice?.toFixed(2)}</span>
          )}
        </div>
        <button className={styles.viewBtn}>View Product</button>
      </div>
    </Link>
  );
}

export default function ProductGrid({ products }) {
  return (
    <div className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
