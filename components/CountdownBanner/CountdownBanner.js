"use client";
import { useState, useEffect } from "react";
import styles from "./CountdownBanner.module.css";

function getSecondsUntilMidnight() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  return Math.floor((midnight - now) / 1000);
}

export default function CountdownBanner({ image, imageAlt = "Limited Time Sale" }) {
  const [secs, setSecs] = useState(null);

  useEffect(() => {
    setSecs(getSecondsUntilMidnight());
    const id = setInterval(() => {
      setSecs((prev) => {
        if (prev === null || prev <= 1) return getSecondsUntilMidnight();
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n) => String(n ?? 0).padStart(2, "0");
  const h = secs !== null ? Math.floor(secs / 3600) : 0;
  const m = secs !== null ? Math.floor((secs % 3600) / 60) : 0;
  const s = secs !== null ? secs % 60 : 0;

  return (
    <div className={styles.wrap}>
      <div className={styles.bar}>
        <span className={styles.barTitle}>⏰ Final Countdown to Sale</span>
        <div className={styles.timer}>
          <span className={styles.digit}>{pad(h)}</span>
          <span className={styles.unit}>H</span>
          <span className={styles.digit}>{pad(m)}</span>
          <span className={styles.unit}>M</span>
          <span className={styles.digit}>{pad(s)}</span>
          <span className={styles.unit}>S</span>
        </div>
      </div>
      <div className={styles.imgWrap}>
        <img src={image} alt={imageAlt} className={styles.img} loading="lazy" />
      </div>
    </div>
  );
}
