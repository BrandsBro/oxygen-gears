import styles from "./ProductDetails.module.css";

const sections = [
  {
    image: "https://static.wixstatic.com/media/20cc08_7d613217808243619a943be3e7407243~mv2.webp",
    heading: "Advanced Breath Detection Technology!",
    content: "Stop worrying about adjusting your settings. Our Smart AI Breath Detection senses your inhalation pattern and delivers precise oxygen support instantly. Whether you are resting, walking, or traveling, adapts to your rhythm so you never miss a beat—or a breath.",
    reverse: false,
  },
  {
    image: "https://static.wixstatic.com/media/20cc08_72bc134bf53640e9abaa8603bc08794b~mv2.webp",
    heading: "High Pure Oxygen You Can Trust",
    content: "The advanced molecular sieve system delivers oxygen purity up to 94 percent. Each pulse is filtered and concentrated before reaching you. You get clean support you can rely on throughout the day.",
    reverse: true,
  },
  {
    image: "https://static.wixstatic.com/media/20cc08_c63883fca3d8407f977cc94405d7c2fc~mv2.jpg",
    heading: "Swap a Fresh Battery Anytime",
    content: "Our unique detachable battery design lets you swap a depleted battery for a fresh one in seconds. It's the ultimate \"peace of mind\" feature. This gives you the flexibility to stay out longer, travel further, and live life on your own terms.",
    reverse: false,
  },
  {
    image: "https://static.wixstatic.com/media/20cc08_f27074d21d44415bb6b0f907f1bdb4b4~mv2.webp",
    heading: "Simple Screen, Smarter Control",
    content: "Our crystal-clear display shows your battery level, gear selection, and remaining usage time at a single glance. With simple, intuitive controls, you stay completely informed and in control of your health without any technical stress.",
    reverse: true,
  },
];

export default function ProductDetails() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {sections.map((item, i) => (
          <div
            key={i}
            className={`${styles.row} ${item.reverse ? styles.reverse : ""}`}
          >
            {/* Image */}
            <div className={styles.imgWrap}>
              <img src={item.image} alt={item.heading} className={styles.img} />
            </div>

            {/* Text */}
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
