import styles from "./BoxContents.module.css";

export default function BoxContents({ config }) {
  if (!config) return null;

  return (
    <section className={styles.section}>
      {config.heading && <h2 className={styles.heading}>{config.heading}</h2>}
      <div className={styles.inner}>
        <div className={styles.imageWrap}>
          <img src={config.image} alt={config.heading || "What's in the box"} className={styles.img} loading="lazy" />
        </div>
        <ul className={styles.list}>
          {config.items.map((item, i) => (
            <li key={i} className={styles.item}>
              <span className={styles.check}>
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#58ACAF" />
                  <path d="M5.5 10.5L8.5 13.5L14.5 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className={styles.label}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
