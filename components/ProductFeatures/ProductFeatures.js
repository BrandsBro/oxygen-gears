import styles from "./ProductFeatures.module.css";

const cards = [
  {
    label: "Smart AI Sensing",
    front: "https://static.wixstatic.com/media/20cc08_829938bde0bb45ffa065e57ab19670fa~mv2.avif",
    back: "https://static.wixstatic.com/media/20cc08_0682d3a5ae3f441490e6cdd7fc8f429d~mv2.webp",
  },
  {
    label: "High-Purity",
    front: "https://static.wixstatic.com/media/20cc08_bbc15f7062c04f36934bdebab534045b~mv2.avif",
    back: "https://static.wixstatic.com/media/20cc08_af7736bd6cbf48e0a1f3c3c6943c4388~mv2.webp",
  },
  {
    label: "All-Day Power",
    front: "https://static.wixstatic.com/media/20cc08_389026b252f142eba763c7d7a66f4a5e~mv2.png",
    back: "https://static.wixstatic.com/media/20cc08_5b5ee60f4bc54bf480d37fd26e86fe4f~mv2.jpg",
  },
  {
    label: "100% Tank Free",
    front: "https://static.wixstatic.com/media/20cc08_c4b2b5bb7c104e55a71aa25b49f7452c~mv2.avif",
    back: "https://static.wixstatic.com/media/20cc08_a110ff57dff44ee29e4e5e61525e3b45~mv2.jpg",
  },
];

export default function ProductFeatures() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Go Further With a Smarter Portable Oxygen</h2>
        <p className={styles.description}>
        Oxygen support should move at your speed, and this concentrator does exactly that. It reads your breathing and sends a pulse of oxygen with every inhale. Carry it to the park, out to dinner, or across town without a second thought. Everything you need in one compact case.
        </p>

        <div className={styles.grid}>
          {cards.map((card, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.inner}>
                <div className={`${styles.face} ${styles.front}`}>
                  <img src={card.front} alt={card.label} />
                  <p className={styles.label}>{card.label}</p>
                </div>
                <div className={`${styles.face} ${styles.back}`}>
                  <img src={card.back} alt={card.label} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
