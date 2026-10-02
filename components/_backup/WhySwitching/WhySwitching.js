import styles from "./WhySwitching.module.css";

const defaultItems = [
  { icon: "https://static.wixstatic.com/media/8f1bc7_0d98baff82384a69980e86af1a1416b9~mv2.avif", label: "Lightweight Build" },
  { icon: "https://static.wixstatic.com/media/8f1bc7_e0325b7852c34f7e88686dfd8e9f3b6b~mv2.avif", label: "1-7L/min Adjustable Flow" },
  { icon: "https://static.wixstatic.com/media/8f1bc7_857f66bbd5834361b152b9a92c63e4e8~mv2.avif", label: "Portable Design" },
  { icon: "https://static.wixstatic.com/media/8f1bc7_aa13bd0229ce4e3cbbc5c72ae8ee735b~mv2.avif", label: "Zero Tanks Required" },
  { icon: "https://static.wixstatic.com/media/8f1bc7_c4306d458f384be09013c57d31ea9c9c~mv2.avif", label: "Swappable Battery" },
  { icon: "https://static.wixstatic.com/media/8f1bc7_d99e126153214119b1c3428dfce1f5cb~mv2.avif", label: "Advanced Filtration" },
];

export default function WhySwitching({ config }) {
  const heading = config?.heading || "Why Thousands Are Switching to this POC";
  const subtext = config?.subtext || "The portable oxygen concentrator delivers reliable oxygen support wherever life takes you.";
  const items = config?.items || defaultItems;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.subtext}>{subtext}</p>
        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.iconWrap}>
                <img src={item.icon} alt={item.label} className={styles.icon} loading="lazy" />
              </div>
              <p className={styles.label}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
