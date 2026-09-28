import styles from "./OutputChart.module.css";

export default function OutputChart({ config }) {
  if (!config) return null;
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{config.heading}</h2>
        <p className={styles.subtext}>{config.subtext}</p>
        <div className={styles.imgWrap}>
          <img src={config.image} alt={config.heading} className={styles.img} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
