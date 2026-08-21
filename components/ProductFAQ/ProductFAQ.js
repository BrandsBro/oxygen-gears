"use client";
import { useState } from "react";
import styles from "./ProductFAQ.module.css";

const faqs = [
  {
    q: "Is this a continuous flow oxygen concentrator?",
    a: "No, our portable concentrators use a smart pulse flow system that detects your breath and delivers oxygen precisely when you inhale.",
  },
  {
    q: "Is the oxygen clean and pure?",
    a: "Yes, our portable oxygen concentrators deliver 85-90% pure oxygen, drawn directly from the surrounding air. The advanced filtration and purification process ensures you receive clean, high-quality oxygen with every breath.",
  },
  {
    q: "How long does the battery last?",
    a: "A single charge runs up to 5 hours, depending on your level. The battery is replaceable, so a spare keeps you going longer.",
  },
  {
    q: "How can I power the device?",
    a: "You can run it on home AC power, a car DC socket, or its battery. It also works while plugged in and charging.",
  },
  {
    q: "How heavy is it to carry?",
    a: "It weighs about 3 lbs, light enough for a shoulder strap. The compact build fits errands, travel, and time around the house.",
  },
  {
    q: "When can I expect delivery?",
    a: "Orders ship free across the USA and usually arrive within 8 to 11 business days. You will get a tracking link once it leaves our warehouse.",
  },
  {
    q: "Can I see the product specification?",
    a: "Yes, please check the details in our product specification page.",
  },
];

export default function ProductFAQ() {
  const [open, setOpen] = useState(null);

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
