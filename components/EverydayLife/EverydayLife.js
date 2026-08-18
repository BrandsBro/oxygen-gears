import styles from "./EverydayLife.module.css";

const items = [
  {
    number: "01",
    title: "Zero Tanks Required",
    description: "It generates its own high-purity oxygen as you use it, so there is never a cylinder to refill or replace. You pick it up, switch it on, and go. The hassle of tanks simply disappears from your routine.",
    image: "https://static.wixstatic.com/media/20cc08_05867547279840a8bd9c49aa8f4937d6~mv2.jpeg",
    reverse: false,
  },
  {
    number: "02",
    title: "Comfort You Control",
    description: "Set the continuous flow where it feels comfortable, and reset it any time you need to. Clear, simple controls keep every change effortless. You end up with oxygen suited to your needs, not a fixed number.",
    image: "https://static.wixstatic.com/media/20cc08_048bd326f8f24d89825e6966474f8345~mv2.jpeg",
    reverse: true,
  },
  {
    number: "03",
    title: "Power That Lasts",
    description: "Charge it at home, top it off in the car, or run it from the wall when you settle in. With more than one way to power up, you are never stuck hunting for an outlet. It holds steady right through a long day.",
    image: "https://static.wixstatic.com/media/20cc08_736c5747676744e588231841e25765ff~mv2.jpeg",
    reverse: false,
  },
  {
    number: "04",
    title: "Light Enough for Long Days",
    description: "Light and compact, it rides over a shoulder or tucks into a bag with ease. You can move through a full day of errands and visits and barely notice it at all. The support stays steady while you get on with things.",
    image: "https://static.wixstatic.com/media/20cc08_61b99693a54445fbac08ecdc2686fee1~mv2.jpeg",
    reverse: true,
  },
];

export default function EverydayLife() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Made for Everyday Life</h2>
        <div className={styles.list}>
          {items.map((item) => (
            <div
              key={item.number}
              className={`${styles.row} ${item.reverse ? styles.reverse : ""}`}
            >
              {/* Image */}
              <div className={styles.imgWrap}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.img}
                />
              </div>

              {/* Text */}
              <div className={styles.text}>
                <span className={styles.number}>{item.number}</span>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.desc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
