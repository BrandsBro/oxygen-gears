"use client";
import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "Why choose Oxygen Gears?",
    a: "We design tank-free, portable oxygen support that fits daily life and travels anywhere you go. Every order is backed by a one-year warranty and a support team that actually helps.",
  },
  {
    q: "Where do we ship?",
    a: "We ship nationwide to homes across the USA, with free shipping on every order.",
  },
  {
    q: "How long does delivery take?",
    a: "Most orders arrive within 4-7 business days after they ship. You will receive tracking by email so you can follow it the whole way.",
  },
  {
    q: "What is our return policy?",
    a: "If the unit is not the right fit, you can return it within 2 weeks of delivery.",
  },
  {
    q: "Does it come with a warranty?",
    a: "Yes, every unit includes a one-year warranty covering manufacturing defects and performance issues. Keep your proof of purchase, and our team will sort out anything that comes up.",
  },
  {
    q: "How do I reach customer support?",
    a: "Our team is glad to help before and after your purchase. Reach us by email or phone, and we will respond promptly.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Frequently Asked Questions</h2>
        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`${styles.item} ${open === i ? styles.active : ""}`}
            >
              <button
                className={styles.question}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{faq.q}</span>
                <span className={styles.icon}>{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <p className={styles.answer}>{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
