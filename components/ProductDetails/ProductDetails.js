import styles from "./ProductDetails.module.css";

const sections = [
  {
    image: "https://static.wixstatic.com/media/8f1bc7_7113ffd2d15e4eb99f7dda9dbcf1bb02~mv2.avif",
    heading: "Only 3lbs: take oxygen like your purse",
    content: "Some days the hardest part is just getting out the door. Oxliv makes it simple. It rides light on your shoulder and goes wherever you go. Take that walk, meet a friend, or run an errand, and keep your oxygen close the whole way.",
    reverse: false,
  },
  {
    image: "https://static.wixstatic.com/media/8f1bc7_f56810431420481394f65b01a0a7bf28~mv2.avif",
    heading: "90% Oxygen Purity on Demand",
    content: "Oxliv pulls in ordinary room air and turns it into oxygen up to 90% pure, delivered fresh with every breath. The purity holds steady as you relax, so quiet hours feel easy and the oxygen you get is always dependable.",
    reverse: true,
  },
  {
    image: "https://static.wixstatic.com/media/8f1bc7_82ae2437c3d1409b8157907abdf27913~mv2.avif",
    heading: "10 Hours of Tankless Oxygen Support",
    content: "A single battery gives you up to 5 hours of cord-free use, enough for a walk, a visit, and errands in between. Keep 1 or 2 extra batteries on hand for up to 10 or 15 hours of continuous oxygen support. Plus, get an extra $50 off when you purchase an additional battery.",
    reverse: false,
  },
  {
    image: "https://static.wixstatic.com/media/8f1bc7_a69ba8c59e7b4a1ba1d258067eef9f9e~mv2.avif",
    heading: "Fresh Oxygen, Wherever You Go",
    content: "Head outside and stay as long as you please, because Oxliv draws oxygen right from the open air. No refills to order and no deliveries to wait on, so the afternoon runs on your terms and the fresh air never runs out.",
    reverse: true,
  },
   {
    image: "https://static.wixstatic.com/media/8f1bc7_121427af9c2f4dd1b2d42b7a2dc919d3~mv2.avif",
    heading: "Find Your Perfect Flow Setting",
    content: "You stay in control with seven easy flow settings, from a light stream to a strong one. Lower levels reach up to 90% purity and give you close to five hours per charge. Set it once, adjust anytime, and keep your day moving. ",
    reverse: false,
  },
];

export default function ProductDetails() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {sections.map((item, i) => (
          <div
            key={i}
            className={`${styles.row} ${item.reverse ? styles.reverse : ""}`}
          >
            {/* Image */}
            <div className={styles.imgWrap}>
              <img src={item.image} alt={item.heading} className={styles.img} />
            </div>

            {/* Text */}
            <div className={styles.text}>
              <h2 className={styles.heading}>{item.heading}</h2>
              <p className={styles.content}>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
