import styles from "./OxygenOnTheGo.module.css";

export default function OxygenOnTheGo({ config }) {
  if (!config) return null;
  const { heading, subtext, items } = config;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.subtext}>{subtext}</p>
        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.imgWrap}>
                <img src={item.image} alt={item.label} className={styles.img} />
              </div>
              <p className={styles.label}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
