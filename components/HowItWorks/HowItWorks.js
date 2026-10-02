import styles from "./HowItWorks.module.css";

const steps = [
  {
    num: "01",
    title: "Compare the Features",
    desc: "Review adjustable settings, battery life, weight and operating modes across all three Oxliv models to find the one that fits your daily routine.",
  },
  {
    num: "02",
    title: "Choose Your Settings",
    desc: "Use the device buttons and dial to select the flow level that suits your preferred comfort and everyday activities.",
  },
  {
    num: "03",
    title: "Plug In or Recharge",
    desc: "Use compatible wall power when you're at home or switch to battery power when you need to move around freely throughout the day.",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>HOW IT WORKS</p>
        <h2 className={styles.heading}>Choose Your Model. Power It. Go.</h2>
        <p className={styles.subtext}>
          From comparing available features to everyday operation, Oxliv keeps the experience straightforward.
        </p>
        <div className={styles.steps}>
          {steps.map((s) => (
            <div key={s.num} className={styles.step}>
              <span className={styles.num}>{s.num}</span>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
