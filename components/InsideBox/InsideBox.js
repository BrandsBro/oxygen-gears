import styles from "./InsideBox.module.css";

export default function InsideBox({ config }) {
  if (!config) return null;
  const { image, items } = config;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.imgWrap}>
          <img src={image} alt="What's inside the box" className={styles.img} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.heading}>What's inside the box</h2>
          <ul className={styles.list}>
            {items.map((item, i) => (
              <li key={i} className={styles.item}>
                <span className={styles.dot}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
