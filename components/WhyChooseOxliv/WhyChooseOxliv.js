import styles from "./WhyChooseOxliv.module.css";

const others = [
  "Limited Portable Model Selection",
  "Carry Weight Varies Widely",
  "Controls Can Feel Complicated",
  "Battery Performance Often Varies",
  "Filtration Details Stay Unclear",
  "Unclear Purchase Protection",
];

const oxliv = [
  "3 Portable Models Available",
  "Weights From 1.1–3.55 lbs",
  "Straightforward Buttons And Dials",
  "Rechargeable Battery Power Included",
  "Built-In Filtration Every Time",
  "Purchase Protection Included",
];

export default function WhyChooseOxliv() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>SHOP WITH CONFIDENCE</p>
        <h2 className={styles.heading}>Why Choose Oxliv?</h2>
        <div className={styles.columns}>
          {/* Other brands */}
          <div className={`${styles.col} ${styles.colOther}`}>
            <p className={styles.colLabel}>✕ TYPICAL OTHER BRANDS</p>
            <ul className={styles.list}>
              {others.map((item, i) => (
                <li key={i} className={styles.listItem}>
                  <span className={styles.iconBad}>✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Oxliv */}
          <div className={`${styles.col} ${styles.colOxliv}`}>
            <p className={styles.colLabel}>✓ SHOPPING WITH OXLIV</p>
            <ul className={styles.list}>
              {oxliv.map((item, i) => (
                <li key={i} className={styles.listItem}>
                  <span className={styles.iconGood}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
