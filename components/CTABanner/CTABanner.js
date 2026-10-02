import Link from "next/link";
import styles from "./CTABanner.module.css";

const perks = [
  "Free USA Shipping",
  "Rechargeable Options",
  "Lightweight Designs",
  "Customer Support",
  "Purchase Protection",
];

export default function CTABanner({ config }) {
  const {
    text = "Portable Convenience for Your Everyday Routine",
    subtext = "Explore Oxliv portable devices and compare the size, weight, battery capacity, adjustable settings and features that best match your everyday preferences.",
    linkLabel = "Shop Portable Devices",
    href = "/collection/all",
  } = config || {};

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{text}</h2>
        <p className={styles.subtext}>{subtext}</p>
        <Link href={href} className={styles.btn}>{linkLabel}</Link>
        <div className={styles.perks}>
          {perks.map((p, i) => (
            <span key={i} className={styles.perk}>✔ {p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
