"use client";
import { useState } from "react";
import styles from "./ProductFAQ.module.css";

export default function ProductFAQ({ faqs }) {
  const [open, setOpen] = useState(null);
  if (!faqs) return null;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Frequently Asked Questions (FAQs)</h2>
        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <div key={i} className={`${styles.item} ${open === i ? styles.active : ""}`}>
              <button className={styles.question} onClick={() => setOpen(open === i ? null : i)}>
                <span>{faq.q}</span>
                <span className={`${styles.icon} ${open === i ? styles.iconOpen : ""}`}>
                  {open === i ? "−" : "+"}
                </span>
              </button>
              <div className={`${styles.body} ${open === i ? styles.bodyOpen : ""}`}>
                <div className={styles.bodyInner}>
                  <p className={styles.answer}>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
