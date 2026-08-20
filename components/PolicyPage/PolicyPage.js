import styles from "./PolicyPage.module.css";

export default function PolicyPage({ title, children }) {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>{title}</h1>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
