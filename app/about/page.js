import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>About Oxliv</h1>
        <div className={styles.content}>
          <p>
          </p>
          <p>
            Our smart pulse flow concentrator uses advanced AI breath detection to deliver oxygen precisely when you need it. By generating oxygen on demand, it eliminates heavy tanks and constant refills, giving you a reliable source of oxygen that moves with you.
          </p>
        </div>
      </div>
    </div>
  );
}
