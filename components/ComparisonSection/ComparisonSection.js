import styles from "./ComparisonSection.module.css";
import Link from "next/link";

const rows = [
  { feature: "Oxygen Output", value: "1–7 L / min  (7 levels)" },
  { feature: "Purity", value: "90% + 3%" },
  { feature: "Battery Life", value: "10–12 hrs" },
  { feature: "Noise Level", value: "≤ 38 dB" },
  { feature: "Weight", value: "1.1–3.55 lbs" },
  { feature: "Charging", value: "Wall · Car · Battery" },
];

export default function ComparisonSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Left — text */}
        <div className={styles.left}>
          <p className={styles.eyebrow}>COMPARE EVERY MODEL</p>
          <h2 className={styles.heading}>Compare Every Model Before You Choose</h2>
          <p className={styles.subtext}>
            Each Oxliv model offers a different combination of portability, adjustable
            settings, battery capacity, controls and operating features. Compare the
            specifications side by side to find the option that best fits your routine.
          </p>
          <div className={styles.table}>
            {rows.map((r, i) => (
              <div key={i} className={`${styles.row} ${i % 2 === 0 ? styles.rowAlt : ""}`}>
                <span className={styles.feat}>{r.feature}</span>
                <span className={styles.val}>{r.value}</span>
              </div>
            ))}
          </div>
          <p className={styles.note}>Free USA shipping on eligible orders.</p>
          <Link href="/collection/all" className={styles.btn}>Shop All Models →</Link>
        </div>

        {/* Right — image */}
        <div className={styles.right}>
          <img
            src="https://static.wixstatic.com/media/8f1bc7_ee10fe2ebfc549a7864112961b39e286~mv2.webp"
            alt="Oxliv model comparison"
            className={styles.img}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
