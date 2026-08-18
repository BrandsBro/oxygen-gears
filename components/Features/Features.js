import styles from "./Features.module.css";

const features = [
  {
    icon: "https://static.wixstatic.com/media/20cc08_0ace68eb91fe4161898dbe7ebf324b1c~mv2.png",
    label: "Advanced Filtration",
  },
  {
    icon: "https://static.wixstatic.com/shapes/20cc08_99955092d8b94add82a40c0b9b7cacba.svg",
    label: "Portable Design",
  },
  {
    icon: "https://static.wixstatic.com/shapes/20cc08_91d22989c4124fc0a2dd8f142892c153.svg",
    label: "Adjustable Oxygen Flow",
  },
  {
    icon: "https://static.wixstatic.com/shapes/20cc08_84726d50a1f04419ba315fdba6a8f87a.svg",
    label: "Lightweight Build",
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>What Makes It Worth Buying</h2>
        <div className={styles.grid}>
          {features.map((f, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.iconWrap}>
                <img src={f.icon} alt={f.label} className={styles.icon} />
              </div>
              <p className={styles.label}>{f.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
