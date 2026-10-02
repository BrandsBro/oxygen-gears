import Link from "next/link";
import styles from "./CTABanner.module.css";

export default function CTABanner({ config }) {
  const {
    text = "Looking for more oxygen support options?",
    linkLabel = "Click Here→",
    href = "/collection/all",
  } = config || {};

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.text}>{text}</p>
        <Link href={href} className={styles.link}>{linkLabel}</Link>
      </div>
    </section>
  );
}
