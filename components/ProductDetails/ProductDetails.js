import styles from "./ProductDetails.module.css";

export default function ProductDetails({ sections }) {
  if (!sections) return null;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {sections.map((item, i) => (
          <div key={i} className={`${styles.row} ${item.reverse ? styles.reverse : ""}`}>
            <div className={styles.imgWrap}>
              <img src={item.image} alt={item.heading} className={styles.img} />
            </div>
            <div className={styles.text}>
              <h2 className={styles.heading}>{item.heading}</h2>
              <p className={styles.content}>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
