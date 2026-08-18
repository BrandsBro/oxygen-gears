import styles from "./WhySwitching.module.css";

const items = [
  {
    icon: "https://static.wixstatic.com/media/20cc08_cd429c7ad366443596c199aad2c23929~mv2.avif",
    label: "Smart AI Breath Detection",
  },
  {
    icon: "https://static.wixstatic.com/media/20cc08_ae730bf5b2824d40b8756e59080eb923~mv2.avif",
    label: "Adjustable 1–7 L/min Oxygen Flow",
  },
  {
    icon: "https://static.wixstatic.com/media/20cc08_8e40ec223ce941d8bc354289d3dc333c~mv2.avif",
    label: "Ultra-Portable & Travel-Friendly",
  },
  {
    icon: "https://static.wixstatic.com/media/20cc08_36477ceef2ff487694754d17e5c25556~mv2.png",
    label: "Freedom From Heavy Tanks",
  },
  {
    icon: "https://static.wixstatic.com/media/20cc08_1df23fe5de834946bca86d9123c5ecda~mv2.webp",
    label: "Up to 8 Hours Battery Life",
  },
  {
    icon: "https://static.wixstatic.com/media/20cc08_8550e755e12448a0afa0067b03b4fc2a~mv2.avif",
    label: "Advanced Filtration for Cleaner Air",
  },
];

export default function WhySwitching() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Why Thousands Are Switching to this POC</h2>
        <p className={styles.subtext}>
          The portable oxygen concentrator delivers reliable oxygen support wherever life
          takes you. Our system combines smart AI breath detection with a wide adjustable
          flow range and a long-lasting battery. This technology empowers you to regain
          your independence without the constant worry and burden of heavy tanks.
        </p>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.iconWrap}>
                <img src={item.icon} alt={item.label} className={styles.icon} />
              </div>
              <p className={styles.label}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
