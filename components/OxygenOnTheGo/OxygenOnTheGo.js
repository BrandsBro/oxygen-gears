import styles from "./OxygenOnTheGo.module.css";

const items = [
  {
    image: "https://static.wixstatic.com/media/8f1bc7_906a51bcb5db46399f98d2934416cee0~mv2.avif",
    label: "Walking",
  },
  {
    image: "https://static.wixstatic.com/media/8f1bc7_4958f1b6e25f43c7b84b186250c69fd7~mv2.avif",
    label: "At Indoors",
  },
  {
    image: "https://static.wixstatic.com/media/8f1bc7_1cd09645060d4913b904fb36add92f08~mv2.avif",
    label: "In a Car",
  },
  {
    image: "https://static.wixstatic.com/media/8f1bc7_d6af48e45af746dcbf8765685502a08b~mv2.avif",
    label: "Outdoors",
  },
];

export default function OxygenOnTheGo() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Your Oxygen, Always With You</h2>
        <p className={styles.subtext}>
     Your day should not wait on your oxygen. Oxliv is light, easy to carry, and ready to go, keeping up to 90% oxygen purity with you from morning to night. 
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
