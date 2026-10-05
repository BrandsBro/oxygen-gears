import styles from "./FeatureSection.module.css";

export default function FeatureSection({ config }) {
  if (!config) return null;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>{config.heading}</h2>
        {config.subtext && <p className={styles.subtext}>{config.subtext}</p>}
      </div>
      <div className={styles.imageWrap}>
        <img src={config.image} alt={config.heading} className={styles.img} loading="lazy" />
      </div>
    </section>
  );
}
