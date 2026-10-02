"use client";
import { useState, useRef } from "react";
import styles from "./ImageGallery.module.css";
import Image from "next/image";

export default function ImageGallery({ mediaItems = [], productName }) {
  const [selected, setSelected] = useState(0);
  const mobileSliderRef = useRef(null);

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

      {/* DESKTOP Main */}
      <div className={styles.desktopMain}>
        {current?.type === "video" ? (
          <video key={current.url} src={current.url} autoPlay muted loop playsInline controls className={styles.mainImg} />
        ) : (
          <div className={styles.mainImgWrap}>
            <Image
              src={current?.url || ""}
              alt={productName}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        )}
      </div>

      {/* DESKTOP Thumbnails */}
      <div className={styles.desktopThumbs}>
        {mediaItems.map((media, i) => (
          <button key={i} className={`${styles.thumb} ${selected === i ? styles.active : ""}`} onClick={() => setSelected(i)}>
            {media.type === "video" ? (
              <div className={styles.videoThumb}>
                {media.thumbnail && <Image src={media.thumbnail} alt="Video" fill style={{ objectFit: "cover", opacity: 0.8 }} />}
                <span className={styles.playIcon}>▶</span>
              </div>
            ) : (
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <Image src={media.url} alt={`${productName} ${i + 1}`} fill style={{ objectFit: "cover" }} />
              </div>
            )}
          </button>
        ))}
      </div>

      {/* MOBILE Slider */}
      <div className={styles.mobileSlider} ref={mobileSliderRef} onScroll={handleMobileScroll}>
        {mediaItems.map((media, i) => (
          <div key={i} className={styles.mobileSlide}>
            {media.type === "video" ? (
              <video src={media.url} autoPlay muted loop playsInline controls className={styles.mobileImg} />
            ) : (
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <Image src={media.url} alt={`${productName} ${i + 1}`} fill style={{ objectFit: "cover" }} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* MOBILE Dots */}
      <div className={styles.mobileDots}>
        {mediaItems.map((_, i) => (
          <button key={i} className={`${styles.dot} ${selected === i ? styles.dotActive : ""}`} onClick={() => scrollToIndex(i)} />
        ))}
      </div>

    </div>
  );
}
