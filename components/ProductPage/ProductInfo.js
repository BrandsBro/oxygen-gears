"use client";
import { useState } from "react";
import styles from "./ProductInfo.module.css";
import UrgencyBar from "./UrgencyBar";
import { useCart } from "@/lib/cartContext";

const bullets = [
  "Adjustable 1–7L/min Oxygen Flow",
  "Up to 8 Hours Continuous Flow",
  "Portable & Lightweight Design",
  "90–94% High Oxygen Purity",
  "Multiple Power Options",
  "Designed for Freedom and Flexibility",
];

export default function ProductInfo({
  productName,
  originalPrice,
  discountedPrice,
  discountPercent,
  options,
  variants,
  productId,
}) {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [unitPrice, setUnitPrice] = useState(discountedPrice);
  const [unitOriginal, setUnitOriginal] = useState(originalPrice);
  const [checkingOut, setCheckingOut] = useState(false);
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

  const handleShopNow = async () => {
    setCheckingOut(true);
    try {
      await addToCart(productId, 1);
      await checkout();
    } catch (err) {
      console.error("Checkout error:", err);
    }
    setCheckingOut(false);
  };

  const totalPrice = unitPrice?.toFixed(2);
  const totalOriginal = unitOriginal?.toFixed(2);
  const currentDiscount = Math.round((1 - unitPrice / unitOriginal) * 100);

  return (
    <div className={styles.info}>

      <h1 className={styles.title}>{productName}</h1>

      <div className={styles.meta}>
        <div className={styles.stars}>
          {"★★★★★"}
          <span className={styles.rating}>4.9/5</span>
          <span className={styles.reviewCount}>(450+ reviews)</span>
        </div>
      </div>

      <div className={styles.priceRow}>
        <span className={styles.original}>${totalOriginal} USD</span>
        <span className={styles.discounted}>${totalPrice} USD</span>
        {currentDiscount > 0 && (
          <span className={styles.badge}>{currentDiscount}% OFF</span>
        )}
      </div>

      <ul className={styles.bullets}>
        {bullets.map((b, i) => (
          <li key={i} className={styles.bullet}>• {b}</li>
        ))}
      </ul>

      <UrgencyBar />

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

      {/* Single checkout button */}
      <button
        className={styles.shopNow}
        onClick={handleShopNow}
        disabled={checkingOut}
      >
        {checkingOut ? "Processing..." : "Shop Now"}
      </button>

      <p className={styles.shopPay}>Zero-Interest Installments with Shop Pay</p>

      <div className={styles.secureBox}>
        <p className={styles.secureTitle}>100% Secure Checkout</p>
        <img
          src="https://static.wixstatic.com/media/20cc08_07f97ca4fab44dff946baa18b969876e~mv2.webp"
          alt="Secure Payment Methods"
          className={styles.paymentImg}
        />
      </div>

    </div>
  );
}
