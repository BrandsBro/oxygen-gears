"use client";
import { useState } from "react";
import styles from "./ProductActions.module.css";
import Link from "next/link";
import brand from "@/config/brand";
import { useCart } from "@/lib/cartContext";

const bullets = [
  "90–94% Pure Oxygen",
  "Up to 4 hrs Battery Life",
  "1–7 Gear Adjustable Flow",
  "Lightweight, Travel-Ready",
  "No Tanks or Refills",
  "Free Carry Bag + Accessories",
];

export default function ProductActions({
  productName,
  originalPrice,
  discountedPrice,
  options,
  variants,
  productId,
}) {
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [unitPrice, setUnitPrice] = useState(discountedPrice);
  const [unitOriginal, setUnitOriginal] = useState(originalPrice);
  const [added, setAdded] = useState(false);
  const { addToCart, checkout, loading } = useCart();

  const handleOption = (optionName, choiceValue) => {
    const newOptions = { ...selectedOptions, [optionName]: choiceValue };
    setSelectedOptions(newOptions);
    const match = variants.find((v) =>
      Object.entries(newOptions).every(([k, val]) => v.choices?.[k] === val)
    );
    if (match?.variant?.priceData) {
      setUnitPrice(match.variant.priceData.discountedPrice ?? match.variant.priceData.price);
      setUnitOriginal(match.variant.priceData.price);
    }
  };

  const handleAddToCart = async () => {
    await addToCart(productId, selectedOptions, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const totalPrice = (unitPrice * quantity).toFixed(2);
  const totalOriginal = (unitOriginal * quantity).toFixed(2);
  const currentDiscount = Math.round((1 - unitPrice / unitOriginal) * 100);

  return (
    <div className={styles.info}>
      <h1 className={styles.title}>{productName}</h1>

      <div className={styles.stars}>
        {"★★★★★"}
        <span className={styles.reviewCount}>450 Reviews</span>
      </div>

      <div className={styles.priceRow}>
        <span className={styles.original}>${totalOriginal} USD</span>
        <span className={styles.discounted}>${totalPrice} USD</span>
        {currentDiscount > 0 && (
          <span className={styles.badge}>{currentDiscount}% OFF</span>
        )}
      </div>

      <div className={styles.bullets}>
        {bullets.map((b, i) => (
          <div key={i} className={styles.bullet}>
            <span className={styles.check}>✓</span>
            <span>{b}</span>
          </div>
        ))}
      </div>

      {options.map((option) => (
        <div key={option.name} className={styles.optionGroup}>
          <p className={styles.optionLabel}>{option.name}</p>
          <div className={styles.optionChoices}>
            {option.choices?.map((choice) => {
              const isSelected = selectedOptions[option.name] === choice.description;
              const variantMatch = variants.find(
                (v) => v.choices?.[option.name] === choice.description
              );
              const choicePrice =
                variantMatch?.variant?.priceData?.discountedPrice ??
                variantMatch?.variant?.priceData?.price ??
                discountedPrice;
              const choiceOriginal =
                variantMatch?.variant?.priceData?.price ?? originalPrice;
              const choiceSaving = (choiceOriginal - choicePrice).toFixed(2);

              return (
                <button
                  key={choice.description}
                  className={`${styles.choiceBtn} ${isSelected ? styles.selected : ""}`}
                  onClick={() => handleOption(option.name, choice.description)}
                >
                  {choiceSaving > 0 && (
                    <span className={styles.saveBadge}>Save ${choiceSaving}</span>
                  )}
                  <span className={styles.choiceTitle}>{choice.description}</span>
                  <span className={styles.choicePrice}>${choicePrice?.toFixed(2)}</span>
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <div className={styles.quantityGroup}>
        <p className={styles.optionLabel}>Quantity</p>
        <div className={styles.quantity}>
          <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className={styles.qtyBtn}>−</button>
          <span className={styles.qtyNum}>{quantity}</span>
          <button onClick={() => setQuantity((q) => q + 1)} className={styles.qtyBtn}>+</button>
        </div>
      </div>

      <button
        className={styles.addToCart}
        onClick={handleAddToCart}
        disabled={loading}
      >
        {loading ? "Adding..." : added ? "✓ Added to Cart!" : "Add to Cart"}
      </button>

      <button
        className={styles.buyNow}
        onClick={checkout}
        disabled={loading}
      >
        Buy Now
      </button>

      <p className={styles.morePayment}>More payment options</p>
      <Link href={`/products/${brand.featuredProductSlug}`} className={styles.viewDetails}>
        View full details →
      </Link>
    </div>
  );
}
