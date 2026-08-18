import styles from "./OxygenOnTheGo.module.css";

const items = [
  {
    image: "https://static.wixstatic.com/media/20cc08_4fbbac48cb774448936481699047e4e2~mv2.jpg",
    label: "Travel",
  },
  {
    image: "https://static.wixstatic.com/media/20cc08_e460888872b0417fb50837f388aef588~mv2.jpg",
    label: "At Home",
  },
  {
    image: "https://static.wixstatic.com/media/20cc08_e97f548a94c84df98821c93880af0a40~mv2.webp",
    label: "In a Car",
  },
  {
    image: "https://static.wixstatic.com/media/20cc08_043bf9d67234417b9ea5331b487fea10~mv2.jpg",
    label: "Outdoor",
  },
];

export default function OxygenOnTheGo() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Oxygen on the go, anytime, anywhere</h2>
        <p className={styles.subtext}>
          Instead of being tied to bulky tanks, you get a compact, intelligent device that delivers
          oxygen exactly when you need it. Up-to 94% oxygen support at home, in the car, or on
          the go. You're no longer planning your life around oxygen; your oxygen adapts to your life.
        </p>

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
