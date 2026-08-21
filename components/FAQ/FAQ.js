"use client";
import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "Why choose Oxliv?",
    a: "Our oxygen support is tank-free and portable, made to keep up with everyday life. Each order comes with a one-year warranty and a support team that genuinely has your back.",
  },
  {
    q: "Where do we ship?",
    a: "We deliver to homes all across the United States, and shipping is free on every single order.",
  },
  {
    q: "How long does delivery take?",
    a: "Orders usually land at your door within 8 to 11 business days of shipping. We send tracking straight to your email so you can keep an eye on it the entire way.",
  },
  {
    q: "What should I do if the device stops working or doesn't turn on?",
    a: "Ensure the battery is fully connected and charged. Remove it, wait 60 seconds, and try again. If the issue continues, switch power sources and test the wall adapter. Contact customer support at support@oxliv.store or +1 307-310-7781 for further troubleshooting. Do not attempt internal repairs yourself.",
  },
  {
    q: "Does it come with a warranty?",
    a: "Yes, every unit carries a one-year warranty. Hold on to your proof of purchase, and our team will take care of whatever comes up.",
  },
  {
    q: "How do I reach customer support?",
    a: "Have questions or need assistance? Our friendly customer support team is ready to help. Email us at support@oxliv.store or call +1 307-310-7781 for prompt, personalized service.",
  },
  {
    q: "Can I see the product specification?",
    a: "Yes, please check the details in our product specification page.",
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
            <div key={i} className={`${styles.item} ${open === i ? styles.active : ""}`}>
              <button className={styles.question} onClick={() => setOpen(open === i ? null : i)}>
                <span>{faq.q}</span>
                <span className={`${styles.icon} ${open === i ? styles.iconOpen : ""}`}>
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && <p className={styles.answer}>{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
