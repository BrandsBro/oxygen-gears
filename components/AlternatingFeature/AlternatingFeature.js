import styles from "./AlternatingFeature.module.css";

export default function AlternatingFeature({ config }) {
  if (!config) return null;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {config.heading && <h2 className={styles.sectionHeading}>{config.heading}</h2>}
        <div className={styles.rows}>
          {config.items?.map((item, i) => (
            <div key={i} className={`${styles.row} ${item.reverse ? styles.reverse : ""}`}>
              <div className={styles.imgCol}>
                <img src={item.image} alt={item.heading} className={styles.img} loading="lazy" />
              </div>
              <div className={styles.textCol}>
                <h3 className={styles.itemHeading}>{item.heading}</h3>
                <p className={styles.itemText}>{item.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
