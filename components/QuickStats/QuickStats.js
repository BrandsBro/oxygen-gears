import styles from "./QuickStats.module.css";

export default function QuickStats({ config }) {
  if (!config?.items?.length) return null;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {config.items.map((item, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.iconCircle}>
              <img src={item.icon} alt={item.title} className={styles.icon} loading="lazy" />
            </div>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.sub}>{item.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
