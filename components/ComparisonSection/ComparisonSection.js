import styles from "./ComparisonSection.module.css";
import Link from "next/link";

export default function ComparisonSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Left — text only */}
        <div className={styles.left}>
          <p className={styles.eyebrow}>COMPARE EVERY MODEL</p>
          <h2 className={styles.heading}>Compare Every Model Before You Choose</h2>
          <p className={styles.subtext}>
            Each Oxliv model offers a different combination of portability, adjustable
            settings, battery capacity, controls and operating features. Compare the
            specifications side by side to find the option that best fits your routine.
          </p>
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
