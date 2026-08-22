import styles from "./ProductFeatures.module.css";

export default function ProductFeatures({ config }) {
  if (!config) return null;
  const { heading, description, cards } = config;

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{heading}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.grid}>
          {cards.map((card, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.inner}>
                <div className={`${styles.face} ${styles.front}`}>
                  <img src={card.front} loading="lazy" alt={card.label} />
                  <p className={styles.label}>{card.label}</p>
                </div>
                <div className={`${styles.face} ${styles.back}`}>
                  <img src={card.back} loading="lazy" alt={card.label} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
