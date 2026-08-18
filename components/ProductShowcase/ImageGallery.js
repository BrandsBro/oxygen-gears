"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ images, productName }) {
  const [selected, setSelected] = useState(0);
  const mobileSliderRef = useRef(null);

  // Mobile — sync scroll to selected
  const handleMobileScroll = () => {
    if (!mobileSliderRef.current) return;
    const index = Math.round(
      mobileSliderRef.current.scrollLeft / mobileSliderRef.current.offsetWidth
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

      {/* ── DESKTOP ── Main Image */}
      <div className={styles.desktopMain}>
        <img
          src={images[selected]}
          alt={`${productName} ${selected + 1}`}
          className={styles.mainImg}
        />
      </div>

      {/* ── DESKTOP ── Thumbnails */}
      <div className={styles.desktopThumbs}>
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

      {/* ── MOBILE ── Full width swipeable slider */}
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

      {/* ── MOBILE ── Dots */}
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
