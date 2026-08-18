import styles from "./StayPowered.module.css";

const items = [
  {
    image: "https://static.wixstatic.com/media/20cc08_bf8f6458108e4a49ac3681ea91eaad6f~mv2.webp",
    label: "At Home",
  },
  {
    image: "https://static.wixstatic.com/media/20cc08_29352dbbd54d439fb5774c306739e5ab~mv2.webp",
    label: "In a Car",
  },
  {
    image: "https://static.wixstatic.com/media/20cc08_009bc080cce44a438f2f289fd90cd743~mv2.webp",
    label: "On Battery",
  },
];

export default function StayPowered() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Stay Powered Anywhere: 3 Ways to Never Miss a Breath</h2>
        <p className={styles.subtext}>
          Life doesn't stop at the front door. Whether you are relaxing in your favorite chair,
          driving to visit family, or enjoying a walk in the park, keeps you supported. Switch
          between power sources in seconds so your oxygen always keeps up with you.
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
