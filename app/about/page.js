import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>About Oxliv</h1>
        <div className={styles.content}>
          <p>
            At Oxliv, we started with a simple mission: to make breathing support feel less like a burden and more like a natural part of everyday life. We set out to create a portable oxygen solution that's lightweight, easy to use, and designed to help you maintain your independence.
          </p>
          <p>
            Our smart pulse flow concentrator uses advanced AI breath detection to deliver oxygen precisely when you need it. By generating oxygen on demand, it eliminates heavy tanks and constant refills, giving you a reliable source of oxygen that moves with you.
          </p>
        </div>
      </div>
    </div>
  );
}
