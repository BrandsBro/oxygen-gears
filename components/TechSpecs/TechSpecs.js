"use client";
import { useState } from "react";
import styles from "./TechSpecs.module.css";

export default function TechSpecs({ config }) {
  const [active, setActive] = useState(0);
  if (!config) return null;

  const tab = config.tabs[active];

  return (
    <section className={styles.section}>
      {config.heading && <h2 className={styles.heading}>{config.heading}</h2>}
      <div className={styles.inner}>
        <div className={styles.tabs}>
          {config.tabs.map((t, i) => (
            <button
              key={i}
              className={`${styles.tab} ${active === i ? styles.tabActive : ""}`}
              onClick={() => setActive(i)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className={styles.table}>
          {tab.rows.map((row, i) => (
            <div key={i} className={styles.row}>
              <span className={styles.label}>{row.label}</span>
              <span className={styles.value}>
                {Array.isArray(row.value)
                  ? row.value.map((v, j) => <span key={j} className={styles.valueLine}>{v}</span>)
                  : row.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
