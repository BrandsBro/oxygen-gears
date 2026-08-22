import styles from "./StayPowered.module.css";

const items = [
  {
    image: "https://static.wixstatic.com/media/8f1bc7_bdc54fd7eb194c11b0306f3961cb1c37~mv2.avif",
    label: "At Home",
  },
  {
    image: "https://static.wixstatic.com/media/8f1bc7_7d04b14cb9244c5e9b6e20e8d794e0b0~mv2.avif",
    label: "In a Car",
  },
  {
    image: "https://static.wixstatic.com/media/8f1bc7_ecb1cf3dc0ba411c96d5365d816781d3~mv2.avif",
    label: "On Battery",
  },
];

export default function StayPowered() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Charged and Ready, Wherever You Are </h2>
        <p className={styles.subtext}>
        Three power options mean you are always covered. Charge at home, plug into the car, or head out on the battery, and move through your day without a single worry about running low.
        </p>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.imgWrap}>
                <img src={item.image} loading="lazy" alt={item.label} className={styles.img} />
              </div>
              <p className={styles.label}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
