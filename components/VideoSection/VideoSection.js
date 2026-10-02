"use client";
import styles from "./VideoSection.module.css";

export default function VideoSection({ config }) {
  if (!config) return null;

  // layout: "stacked" (heading above, video below) | "side" (default, side-by-side)
  if (config.layout === "stacked") {
    return (
      <section className={styles.sectionStacked}>
        <div className={styles.innerStacked}>
          <h2 className={styles.headingStacked}>{config.heading}</h2>
          {config.subtext && <p className={styles.subtextStacked}>{config.subtext}</p>}
          <div className={styles.videoWrapStacked}>
            <video
              src={config.videoUrl}
              controls
              playsInline
              className={styles.video}
              poster={config.poster}
            />
          </div>
        </div>
      </section>
    );
  }

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
