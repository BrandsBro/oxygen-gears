"use client";
import { useState, useRef } from "react";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ mediaItems = [], productName }) {
  const [selected, setSelected] = useState(0);
  const mobileSliderRef = useRef(null);
  const videoRef = useRef(null);

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

  const current = mediaItems[selected];

  return (
    <div className={styles.gallery}>

      {/* ── DESKTOP ── Main Media */}
      <div className={styles.desktopMain}>
        {current?.type === "video" ? (
          <video
            key={current.url}
            ref={videoRef}
            src={current.url}
            autoPlay
            muted
            loop
            playsInline
            controls
            className={styles.mainImg}
          />
        ) : (
          <img src={current?.url} alt={productName} className={styles.mainImg} />
        )}
      </div>

      {/* ── DESKTOP ── Thumbnails */}
      <div className={styles.desktopThumbs}>
        {mediaItems.map((media, i) => (
          <button
            key={i}
            className={`${styles.thumb} ${selected === i ? styles.active : ""}`}
            onClick={() => setSelected(i)}
          >
            {media.type === "video" ? (
              <div className={styles.videoThumb}>
                {media.thumbnail
                  ? <img src={media.thumbnail} alt="Video" />
                  : <div className={styles.videoPlaceholder} />
                }
                <span className={styles.playIcon}>▶</span>
              </div>
            ) : (
              <img src={media.url} alt={`${productName} ${i + 1}`} />
            )}
          </button>
        ))}
      </div>

      {/* ── MOBILE ── Swipe slider */}
      <div
        className={styles.mobileSlider}
        ref={mobileSliderRef}
        onScroll={handleMobileScroll}
      >
        {mediaItems.map((media, i) => (
          <div key={i} className={styles.mobileSlide}>
            {media.type === "video" ? (
              <video
                src={media.url}
                autoPlay
                muted
                loop
                playsInline
                controls
                className={styles.mobileImg}
              />
            ) : (
              <img src={media.url} alt={`${productName} ${i + 1}`} className={styles.mobileImg} />
            )}
          </div>
        ))}
      </div>

      {/* ── MOBILE ── Dots */}
      <div className={styles.mobileDots}>
        {mediaItems.map((_, i) => (
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
