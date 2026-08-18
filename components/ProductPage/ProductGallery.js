"use client";
import { useState, useRef } from "react";
import styles from "./ProductGallery.module.css";

export default function ProductGallery({ images, productName }) {
  const [selected, setSelected] = useState(0);
  const mobileSliderRef = useRef(null);

  const handleMobileScroll = () => {
    if (!mobileSliderRef.current) return;
    const index = Math.round(
      mobileSliderRef.current.scrollLeft /
      mobileSliderRef.current.offsetWidth
    );
    setSelected(index);
  };

  const scrollToIndex = (index) => {
    if (!mobileSliderRef.current) return;
    mobileSliderRef.current.scrollTo({
      left: index * mobileSliderRef.current.offsetWidth,
      behavior: "smooth",
    });
    setSelected(index);
  };

  return (
    <div className={styles.gallery}>

      {/* ── DESKTOP ── Thumbnails left + Main right */}
      <div className={styles.desktopWrap}>
        {/* Thumbnails — vertical left column */}
        <div className={styles.thumbCol}>
          {images.map((img, i) => (
            <button
              key={i}
              className={`${styles.thumb} ${selected === i ? styles.active : ""}`}
              onClick={() => setSelected(i)}
            >
              <img src={img} alt={`${productName} ${i + 1}`} />
            </button>
          ))}
        </div>

        {/* Main Image */}
        <div className={styles.mainWrap}>
          <img
            src={images[selected]}
            alt={productName}
            className={styles.mainImg}
          />
        </div>
      </div>

      {/* ── MOBILE ── Full swipe slider */}
      <div
        className={styles.mobileSlider}
        ref={mobileSliderRef}
        onScroll={handleMobileScroll}
      >
        {images.map((img, i) => (
          <div key={i} className={styles.mobileSlide}>
            <img
              src={img}
              alt={`${productName} ${i + 1}`}
              className={styles.mobileImg}
            />
          </div>
        ))}
      </div>

      {/* Mobile Dots */}
      <div className={styles.mobileDots}>
        {images.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${selected === i ? styles.dotActive : ""}`}
            onClick={() => scrollToIndex(i)}
          />
        ))}
      </div>

    </div>
  );
}
