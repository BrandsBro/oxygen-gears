"use client";
import { useState } from "react";
import styles from "./faq.module.css";

const faqs = [
  {
    q: "Can I control the oxygen flow rate based on my needs?",
    a: "Yes, our concentrator offers seven adjustable levels from 1 to 7 L/min. You can raise or lower the flow to match rest, errands, or more active moments.",
  },
  {
    q: "What types of oxygen concentrators are available?",
    a: "At Oxliv, we offer advanced portable oxygen concentrators featuring smart pulse flow technology. With no heavy tanks to manage or refill it provides discreet, reliable breathing support that moves with you. Discover the freedom and independence of hassle-free oxygen therapy.",
  },
  {
    q: "How long will it take to receive my order?",
    a: "Orders ship free across the USA and usually arrive within 8 to 11 business days. You will get a confirmation as soon as your package is on its way.",
  },
  {
    q: "How can I track my order?",
    a: "Once your order ships, we email you a tracking link to follow its progress. If you cannot find it, reach out to us at support@oxliv.store, and we will resend the details.",
  },
  {
    q: "How can I return an item?",
    a: "You can return an item within two weeks of delivery for a refund. Just email support@oxliv.store to start the process, and keep the device in its original packaging.",
  },
  {
    q: "What should I do if I receive a damaged product or a missing item?",
    a: "Contact us right away at support@oxliv.store or +1 307-310-7781 with your order number and a photo. We will arrange a replacement or sort out the issue as quickly as we can.",
  },
  {
    q: "What should I do if my order is late?",
    a: "If your order passes the 8 to 11-day window, reach out at support@oxliv.store. We will check the status with the carrier and keep you updated.",
  },
  {
    q: "What forms of payment do you accept?",
    a: "We accept Visa, Mastercard, American Express, PayPal, Apple Pay, Google Pay, and other major digital wallets. All payments are processed through secure systems to help protect your personal and payment information.",
  },
  {
    q: "Do I need a doctor's prescription?",
    a: "This is not a medical device. You do not need a prescription to order from us. If you have a medical condition, please consult a healthcare professional.",
  },
  {
    q: "Do the machines come with a warranty?",
    a: "Yes, every machine includes a one-year warranty. Keep your receipt and warranty card so we can help if anything comes up.",
  },
  {
    q: "Can I take this oxygen concentrator on an airplane?",
    a: "Airline rules vary, so confirm their oxygen and battery policies before you fly. Packing a spare battery and your documents ahead of time keeps boarding smooth.",
  },
  {
    q: "How can I modify my order after it has been placed?",
    a: "Email us at support@oxliv.store as soon as possible with your changes. We can usually update an order before it ships, but not once it has left our warehouse.",
  },
  {
    q: "Can I see the product specification?",
    a: "Yes, please check the details in our product specification page.",
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState(null);

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>Frequently Asked Questions</h1>

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

        <p className={styles.disclaimer}>
          <strong>Important Disclaimer:</strong> This product is intended for general wellness,
          comfort, and lifestyle use only. It is not a medical device and is not intended to
          diagnose, treat, cure, prevent, or monitor any disease or health condition. Please
          consult a licensed healthcare professional if you have questions.
        </p>
      </div>
    </div>
  );
}
