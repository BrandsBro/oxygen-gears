import styles from "./DetailGrid.module.css";

export default function DetailGrid({ config }) {
  if (!config) return null;

  const [r1Left, r1Right, r2Left, r2Mid, r2Right] = config.images;

  return (
    <section className={styles.section}>
      {config.heading && <h2 className={styles.heading}>{config.heading}</h2>}
      <div className={styles.inner}>
        <div className={styles.row2}>
          <img src={r1Left} alt="" className={styles.img} loading="lazy" />
          <img src={r1Right} alt="" className={styles.img} loading="lazy" />
        </div>
        <div className={styles.row3}>
          <img src={r2Left} alt="" className={styles.img} loading="lazy" />
          <img src={r2Mid} alt="" className={styles.img} loading="lazy" />
          <img src={r2Right} alt="" className={styles.img} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
