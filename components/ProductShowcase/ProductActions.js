"use client";
import { useState } from "react";
import styles from "./ProductActions.module.css";
import Link from "next/link";
import brand from "@/config/brand";
import { useCart } from "@/lib/cartContext";
import UrgencyBar, { SoldCount } from "@/components/ProductPage/UrgencyBar";

const DEFAULT_VARIANT_ID = "c0bb889f-9bfb-47ea-ad3d-e5ff250cd2fb";

const bullets = [
  "Adjustable 1–7L/min Oxygen Flow",
  "AI-Powered Breath Detection",
  "Portable & Lightweight Design",
  "85–90% High Oxygen Purity",
  "Multiple Power Options",
  "Designed for Freedom and Flexibility",
];

export default function ProductActions({
  productName, originalPrice, discountedPrice,
  options, variants, productId,
}) {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [unitPrice, setUnitPrice] = useState(discountedPrice);
  const [unitOriginal, setUnitOriginal] = useState(originalPrice);
  const [selectedVariantId, setSelectedVariantId] = useState(DEFAULT_VARIANT_ID);
  const { buyNow, loading } = useCart();

  const handleOption = (optionName, choiceValue) => {
    const newOptions = { ...selectedOptions, [optionName]: choiceValue };
    setSelectedOptions(newOptions);
    const match = variants.find((v) =>
      Object.entries(newOptions).every(([k, val]) => v.choices?.[k] === val)
    );
    if (match) {
      setSelectedVariantId(match._id);
      if (match?.variant?.priceData) {
        setUnitPrice(match.variant.priceData.discountedPrice ?? match.variant.priceData.price);
        setUnitOriginal(match.variant.priceData.price);
      }
    }
  };

  const currentDiscount = Math.round((1 - unitPrice / unitOriginal) * 100);

  return (
    <div className={styles.info}>
      <h1 className={styles.title}>{productName}</h1>

      <div className={styles.stars}>
        {"★★★★★"}
        <span className={styles.reviewCount}>450 Reviews</span>
      </div>
      <SoldCount />

      <div className={styles.priceRow}>
        <span className={styles.original}>${unitOriginal?.toFixed(2)} USD</span>
        <span className={styles.discounted}>${unitPrice?.toFixed(2)} USD</span>
        {currentDiscount > 0 && <span className={styles.badge}>{currentDiscount}% OFF</span>}
      </div>

      <div className={styles.bullets}>
        {bullets.map((b, i) => (
          <div key={i} className={styles.bullet}>
            <span className={styles.check}>✓</span>
            <span>{b}</span>
          </div>
        ))}
      </div>

      <UrgencyBar />

      {options.map((option) => (
        <div key={option.name} className={styles.optionGroup}>
          <p className={styles.optionLabel}>{option.name}</p>
          <div className={styles.optionChoices}>
            {option.choices?.map((choice) => {
              const isSelected = selectedOptions[option.name] === choice.description;
              const variantMatch = variants.find((v) => v.choices?.[option.name] === choice.description);
              const choicePrice = variantMatch?.variant?.priceData?.discountedPrice ?? variantMatch?.variant?.priceData?.price ?? discountedPrice;
              const choiceOriginal = variantMatch?.variant?.priceData?.price ?? originalPrice;
              const choiceSaving = (choiceOriginal - choicePrice).toFixed(2);
              return (
                <button key={choice.description} className={`${styles.choiceBtn} ${isSelected ? styles.selected : ""}`} onClick={() => handleOption(option.name, choice.description)}>
                  {choiceSaving > 0 && <span className={styles.saveBadge}>Save ${choiceSaving}</span>}
                  <span className={styles.choiceTitle}>{choice.description}</span>
                  <span className={styles.choicePrice}>${choicePrice?.toFixed(2)}</span>
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <button className={styles.buyNow} onClick={() => buyNow(productId, selectedVariantId, 1)} disabled={loading}>
        {loading ? "Processing..." : "Shop Now"}
      </button>

      <div className={styles.secureBox}>
        <p className={styles.secureTitle}>100% Secure Checkout</p>
        <img src="https://static.wixstatic.com/media/20cc08_07f97ca4fab44dff946baa18b969876e~mv2.webp" alt="Secure Payment" className={styles.paymentImg} />
      </div>

      <Link href={`/products/${brand.featuredProductSlug}`} className={styles.viewDetails}>
        View full details →
      </Link>
    </div>
  );
}
