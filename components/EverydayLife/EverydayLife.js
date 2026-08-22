import styles from "./EverydayLife.module.css";

const items = [
  {
    number: "01",
    title: "Tank-Free Design",
    description: "No tanks to refill and no spares to store. It produces high-purity oxygen on its own the moment it switches on. You just pick it up and head out.",
    image: "https://static.wixstatic.com/media/8f1bc7_9b3c694b0d61440a82b9a9149dc9aeed~mv2.avif",
    reverse: false,
  },
  {
    number: "02",
    title: "Flow You Control",
    description: "Turn the flow up when you need more and ease it back when you don't. The controls are simple, so any change takes a second. Your oxygen matches the moment instead of one fixed setting.",
    image: "https://static.wixstatic.com/media/8f1bc7_441be3d229d24be6b6b039d3c73e3f44~mv2.avif",
    reverse: true,
  },
  {
    number: "03",
    title: "Lightweight Build",
    description: "Compact and easy to carry, it travels on a shoulder or in a bag without weighing you down. A busy day goes by, and you hardly notice it. The oxygen comes with you the whole way.",
    image: "https://static.wixstatic.com/media/8f1bc7_441be3d229d24be6b6b039d3c73e3f44~mv2.avif",
    reverse: false,
  },
  {
    number: "04",
    title: "Flexible Power",
    description: "Run it from a wall outlet, the car, or its own battery. With more than one way to power up, a missing socket never slows you down. It keeps working right through a long day.",
    image: "https://static.wixstatic.com/media/8f1bc7_a86af8fce3e14a44b2f98fa596d29dcd~mv2.avif",
    reverse: true,
  },
  {
    number: "05",
    title: "What's In The Box?",
    isList: true,
    intro: "Getting started should feel simple, not incomplete. Oxliv includes all the essentials for setup, daily use, travel, and comfortable breathing, right out of the box.",
    items: [
      "1 Oxygen concentrator",
      "1 Rechargeable battery",
      "1 Car charging cable",
      "2 Nasal oxygen tubes",
      "1 Portable carry bag",
      "1 Wall adapter",
      "1 Case",
      "1 Instruction manual",
    ],
    image: "https://static.wixstatic.com/media/8f1bc7_e767bdc107604d6ebec0f486e8feb84b~mv2.avif",
    reverse: false,
  },
  {
    number: "06",
    title: "Pick the Right Flow for Your Day",
    description: "Choose from seven flow settings to match your daily needs. Lower settings offer up to five hours of battery life. Quiet performance keeps use comfortable. Simple controls make adjustments quick and easy, so you can keep moving confidently.",
    image: "https://static.wixstatic.com/media/8f1bc7_e3eb66811c8240318ab794d275e9c40e~mv2.avif",
    reverse: true,
    landscape: true,
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
              <div className={item.landscape ? styles.imgWrapLandscape : styles.imgWrap}>
                <img src={item.image} loading="lazy" alt={item.title} className={styles.img} />
              </div>

              <div className={styles.text}>
                <span className={styles.number}>{item.number}</span>
                <h3 className={styles.title}>{item.title}</h3>
                {item.isList ? (
                  <>
                    <p className={styles.desc}>{item.intro}</p>
                    <ul className={styles.boxList}>
                      {item.items.map((li, i) => (
                        <li key={i} className={styles.boxItem}>
                          <span className={styles.dot}>•</span> {li}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p className={styles.desc}>{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
