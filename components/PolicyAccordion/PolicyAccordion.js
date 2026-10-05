"use client";
import { useState } from "react";
import styles from "./PolicyAccordion.module.css";

export default function PolicyAccordion({ config }) {
  const [open, setOpen] = useState(null);
  if (!config) return null;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {config.items.map((item, i) => (
          <div key={i} className={`${styles.item} ${open === i ? styles.itemOpen : ""}`}>
            <button className={styles.question} onClick={() => setOpen(open === i ? null : i)}>
              <span>{item.label}</span>
              <span className={styles.icon}>{open === i ? "×" : "+"}</span>
            </button>
            {open === i && (
              <div className={styles.answer}>{item.text}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
