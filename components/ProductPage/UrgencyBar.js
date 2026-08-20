"use client";
import { useState, useEffect } from "react";
import styles from "./UrgencyBar.module.css";

export function SoldCount() {
  const [soldCount, setSoldCount] = useState(18);
  const [hours, setHours] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setSoldCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
      setHours(Math.floor(Math.random() * 12) + 6);
    }, 45000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.sold}>
      🔥 <strong>{soldCount}</strong> sold in last <strong>{hours} hours</strong>
    </div>
  );
}

export default function UrgencyBar() {
  const [stock, setStock] = useState(17);

  useEffect(() => {
    const interval = setInterval(() => {
      setStock((prev) => Math.max(5, prev - 1));
    }, 45000);
    return () => clearInterval(interval);
  }, []);

  const fillPercent = Math.min(95, Math.max(40, 100 - stock * 3));

  return (
    <div className={styles.wrap}>
      <p className={styles.urgencyText}>
        HURRY! ONLY <strong className={styles.urgencyNum}>{stock}</strong> LEFT IN STOCK.
      </p>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${fillPercent}%` }} />
      </div>
    </div>
  );
}
