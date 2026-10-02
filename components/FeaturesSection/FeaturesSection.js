import styles from "./FeaturesSection.module.css";

const cards = [
  {
    emoji: "🎚️",
    title: "Compare Adjustable Settings",
    desc: "Each model provides multiple output settings, giving you flexible control for your preferred everyday use.",
  },
  {
    emoji: "🔋",
    title: "Enjoy Cordless Convenience",
    desc: "Rechargeable battery power lets you use your device away from a wall outlet when you need greater flexibility during the day.",
  },
  {
    emoji: "🚫",
    title: "No Cylinders to Refill",
    desc: "Built-in air-processing technology eliminates the need to store, replace or refill separate cylinders during normal operation.",
  },
  {
    emoji: "🎛️",
    title: "Controls Made Simple",
    desc: "Straightforward buttons and dials make it easy to access available settings without an app or complicated setup.",
  },
];

export default function FeaturesSection() {
  return (
    <section className={styles.section}>
      {/* Top — centered heading */}
      <div className={styles.top}>
        <span className={styles.eyebrow}>WHY OXLIV FITS DAILY LIFE</span>
        <h2 className={styles.heading}>MORE CONVENIENCE, LESS HASSLE</h2>
        <p className={styles.subtext}>
          Oxliv portable devices combine lightweight construction, rechargeable power,
          straightforward controls and convenient tank-free operation. Simply compare
          the available models and choose the features that best fit your everyday routine.
        </p>
      </div>

      {/* Bottom — image left, cards right */}
      <div className={styles.bottom}>
        <div className={styles.left}>
          <img
            src="https://static.wixstatic.com/media/8f1bc7_aa9324cc206b43abaea6fed82a72b2d0~mv2.webp"
            alt="Oxliv portable oxygen concentrator models"
            className={styles.img}
            loading="lazy"
          />
        </div>
        <div className={styles.right}>
          {cards.map((c, i) => (
            <div key={i} className={`${styles.card} ${i === 0 ? styles.cardHighlight : ""}`}>
              <div className={styles.cardIcon}>{c.emoji}</div>
              <div>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardDesc}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
