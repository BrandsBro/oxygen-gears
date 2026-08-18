import styles from "./InsideBox.module.css";

const items = [
  "1 Portable Oxygen Concentrator",
  "1 Charger",
  "1 Battery",
  "1 Instruction manual + warranty card",
  "1 Car charging cable",
  "2 Nasal oxygen tubes",
  "1 Certificate of conformity",
  "1 Backpack",
  "1 Case",
];

export default function InsideBox() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Left — Image */}
        <div className={styles.imgWrap}>
          <img
            src="https://static.wixstatic.com/media/20cc08_cfe1bee4bba04c99a23aa8b58e2d5ea8~mv2.webp"
            alt="What's inside the box"
            className={styles.img}
          />
        </div>

        {/* Right — Content */}
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
