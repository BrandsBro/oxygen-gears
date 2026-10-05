"use client";
import { useState } from "react";
import styles from "./FaqWithImage.module.css";

export default function FaqWithImage({ config }) {
  const [open, setOpen] = useState(0);
  if (!config) return null;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          {config.heading && <h2 className={styles.heading}>{config.heading}</h2>}
          {config.subtext && <p className={styles.subtext}>{config.subtext}</p>}
          <div className={styles.list}>
            {config.faqs.map((faq, i) => (
              <div key={i} className={`${styles.item} ${open === i ? styles.itemOpen : ""}`}>
                <button className={styles.question} onClick={() => setOpen(open === i ? null : i)}>
                  <span>{faq.question}</span>
                  <span className={styles.icon}>{open === i ? "×" : "+"}</span>
                </button>
                {open === i && (
                  <div className={styles.answer}>{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <img src={config.image} alt="" className={styles.img} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
