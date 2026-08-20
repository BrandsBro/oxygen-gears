"use client";
import { useState } from "react";
import styles from "./faq.module.css";

const faqs = [
  { q: "What Types of Oxygen Concentrators Are Available?", a: "We offer portable oxygen concentrators to meet your needs. These are ideal for users who require mobility, allowing you to easily move around while receiving oxygen therapy." },
  { q: "How Long Will It Take to Receive My Order?", a: "Once your order is placed, we typically process it within 24hr. After processing, delivery usually takes between 8-11 business days, depending on your location." },
  { q: "How Can I Track My Order?", a: "Tracking your order is easy! Simply reach out to us at hi@supportoxygengears.com or call us and our customer service team will provide you with the most current status of your order." },
  { q: "How Can I Return an Item?", a: "To request a return, contact us before sending the item back. Products damaged through misuse, mishandling, or unauthorized modifications are not eligible for return. Please review our Refund Policy for complete eligibility requirements and instructions." },
  { q: "What Should I Do if I Receive a Damaged Product or Missing Items?", a: "If your order arrives with damage or missing items, please report the issue to us within 3 business days of receiving your package. Email us or call us and we'll assist you promptly. To help with the claims process, please retain the original packaging and box." },
  { q: "What Should I Do If My Order Is Late?", a: "In rare cases where your order hasn't arrived after 30 days, please get in touch with us. Our team will investigate the issue and take the necessary steps to resolve it." },
  { q: "What Forms of Payment Do You Accept?", a: "Currently, we accept cards (Visa, Mastercard, American Express, etc.), digital wallets (Apple Pay, Google Pay, etc.) as the sole payment method on our checkout page." },
  { q: "Do I Need a Doctor's Prescription?", a: "If a prescription is required for any items in your cart, our system will notify you during checkout. If there is no notification, you can proceed with the purchase without a prescription." },
  { q: "Can I Use Medicare to Pay for My Oxygen Concentrator?", a: "At this time, we do not work directly with insurance providers, including Medicare. However, you may choose to pay out-of-pocket and seek reimbursement from your insurance provider." },
  { q: "Do the Machines Come with a Warranty?", a: "Yes! All of our oxygen concentrators come with a one-year warranty to ensure peace of mind with your purchase." },
  { q: "How Can I Modify My Order After It Has Been Placed?", a: "If you need to make any changes to your order, please contact us via email before your order ships. We'll assist you in making the necessary modifications." },
  { q: "Can I see the user manual?", a: "Yes, please check the details in our User Manual page." },
  { q: "How soon do I need to change/Clean the filter?", a: "The filter doesn't require regular cleaning or replacement, thanks to the device's automatic cleaning system. If it gets clogged, feel free to purchase a replacement from us." },
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
