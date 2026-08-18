"use client";
import { useState } from "react";
import styles from "./ProductFAQ.module.css";

const faqs = [
  { q: "How pure is the oxygen this device produces?", a: "The concentrator delivers oxygen at 90-94% purity, depending on the gear level and your breathing pattern. Its molecular sieve system keeps the purity stable throughout use." },
  { q: "How long does the battery last on a full charge?", a: "You can expect up to 4 hours of use, depending on which oxygen gear you select. Higher gear levels use more power, while lower settings extend the runtime." },
  { q: "Can I adjust the oxygen level?", a: "Yes, the device has 1-7 gear levels that let you choose the oxygen strength that feels most comfortable. Adjusting the level takes only one button press." },
  { q: "Does it work while I'm breathing normally?", a: "The concentrator uses breath-responsive pulse delivery that activates when you inhale. If you pause for a moment, it switches automatically to fixed-frequency mode to maintain support." },
  { q: "Is it loud during use?", a: "The device runs at under 60dB, which sounds similar to a quiet room or gentle conversation. It's comfortable for home use, travel, or resting." },
  { q: "Can I use it in the car?", a: "Yes, a car charging cable is included in the kit. You can use it during long drives or while charging the battery on the road." },
  { q: "What comes in the box?", a: "Your kit includes the main device, battery box, AC charger, car charger, nasal tubes, carry bag, and the user manual. Everything you need is included, so setup is immediate." },
  { q: "How do I maintain the device?", a: "Wipe the surface gently, keep the air vents clear, and replace the nasal tubes regularly. The filter cotton should be replaced when it appears blocked or dirty." },
  { q: "Can seniors operate it easily?", a: "Yes, the device is designed with simple controls and a clear display that make it easy for anyone to use. No complicated menus or technical steps are required." },
  { q: "How heavy is the machine?", a: "The unit weighs 1.4 kg. That makes it lightweight and easy to carry. With the included strap and bag, it's comfortable for daily movement and travel." },
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
