"use client";
import styles from "./VideoSection.module.css";

export default function VideoSection({ config }) {
  if (!config) return null;
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.videoWrap}>
          <video
            src={config.videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className={styles.video}
          />
        </div>
        <div className={styles.text}>
          <h2 className={styles.heading}>{config.heading}</h2>
          <p className={styles.subtext}>{config.subtext}</p>
        </div>
      </div>
    </section>
  );
}
