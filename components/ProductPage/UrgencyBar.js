"use client";
import { useState, useEffect } from "react";
import styles from "./UrgencyBar.module.css";

export default function UrgencyBar() {
  const [soldCount, setSoldCount] = useState(18);
  const [hours, setHours] = useState(12);
  const [stock, setStock] = useState(17);

  useEffect(() => {
    // Change numbers randomly every 30-60 seconds
    const interval = setInterval(() => {
      setSoldCount((prev) => {
        const change = Math.floor(Math.random() * 3) + 1;
        return prev + change;
      });
      setHours(Math.floor(Math.random() * 12) + 6);
      setStock((prev) => Math.max(5, prev - 1));
    }, 45000);

    return () => clearInterval(interval);
  }, []);

  // Fill percent based on stock (less stock = more filled)
  const fillPercent = Math.min(95, Math.max(40, 100 - stock * 3));

  return (
    <div className={styles.wrap}>
      {/* Sold badge */}
      <div className={styles.sold}>
        🔥 <strong>{soldCount}</strong> sold in last <strong>{hours} hours</strong>
      </div>

      {/* Urgency text */}
      <p className={styles.urgencyText}>
        HURRY! ONLY <strong className={styles.urgencyNum}>{stock}</strong> LEFT IN STOCK.
      </p>

      {/* Animated progress bar */}
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${fillPercent}%` }}
        />
      </div>
    </div>
  );
}
