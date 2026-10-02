"use client";
import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "What are Oxliv products designed for?",
    a: "Oxliv products are intended for general wellness, personal comfort and everyday non-medical use unless otherwise stated in the manufacturer's documentation.",
  },
  {
    q: "Are Oxliv devices portable?",
    a: "Yes. All Oxliv models are designed to be lightweight and portable, making them easy to carry at home or on the go.",
  },
  {
    q: "Are the devices rechargeable?",
    a: "Yes. Oxliv devices come with a rechargeable battery so you can use them away from a wall outlet throughout the day.",
  },
  {
    q: "Can I adjust the settings?",
    a: "Yes. Each model features adjustable flow settings controlled by straightforward buttons and dials — no app required.",
  },
  {
    q: "How long does USA delivery take?",
    a: "Orders typically arrive within 8 to 11 business days of shipping. You will receive tracking information by email.",
  },
  {
    q: "Do I pay for shipping?",
    a: "No. Shipping is free on every order delivered within the United States.",
  },
  {
    q: "How is my purchase protected?",
    a: "Every Oxliv purchase includes a one-year warranty and purchase protection. Keep your proof of purchase and contact our support team if anything comes up.",
  },
  {
    q: "How can I track my order?",
    a: "Once your order ships, we send tracking details to your email so you can follow it every step of the way.",
  },
  {
    q: "Can I take my device when traveling?",
    a: "Yes. The compact, lightweight design makes it easy to bring along when traveling. Check airline guidelines before flying with any battery-powered device.",
  },
  {
    q: "How can I contact Oxliv?",
    a: "Email us at support@oxliv.store or call +1 307-310-7781. Our team is ready to help with products, orders, shipping, returns and warranty questions.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Left */}
        <div className={styles.left}>
          <span className={styles.eyebrow}>COMMON QUESTIONS</span>
          <h2 className={styles.heading}>
            Frequently Asked <span className={styles.teal}>Questions</span>
          </h2>
          <p className={styles.subtext}>
            Still need help? Contact our team for assistance with products, orders,
            shipping, returns and warranty information.
          </p>
        </div>

        {/* Right */}
        <div className={styles.right}>
          {faqs.map((faq, i) => (
            <div key={i} className={`${styles.item} ${open === i ? styles.active : ""}`}>
              <button className={styles.question} onClick={() => setOpen(open === i ? null : i)}>
                <span>{faq.q}</span>
                <span className={styles.icon}>{open === i ? "✕" : "+"}</span>
              </button>
              {open === i && <p className={styles.answer}>{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
