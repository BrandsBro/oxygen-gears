import styles from "./Features.module.css";

const features = [
  {
    icon: "https://static.wixstatic.com/shapes/8f1bc7_9fa627c5e9e94fd39debdc7746aebbe2.svg",
    label: "Adjustable Settings",
  },
  {
    icon: "https://static.wixstatic.com/shapes/8f1bc7_be5062c4a4034a99a86abb7ce15b001c.svg",
    label: "Rechargeable Battery",
  },
  {
    icon: "https://static.wixstatic.com/shapes/8f1bc7_59d24ca20ea24ce0855e6ebe73bea959.svg",
    label: "Lightweight Design",
  },
  {
    icon: "https://static.wixstatic.com/shapes/8f1bc7_0309c044cffb4affb1b1ec3f240f7924.svg",
    label: "Tank-Free Operation",
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.inner}>
        {features.map((f, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.iconWrap}>
              <img src={f.icon} loading="lazy" alt={f.label} className={styles.icon} />
            </div>
            <p className={styles.label}>{f.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
