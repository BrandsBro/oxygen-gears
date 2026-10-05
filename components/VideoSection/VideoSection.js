"use client";
import styles from "./VideoSection.module.css";

export default function VideoSection({ config }) {
  if (!config) return null;

  // layout: "stacked" — centered heading above full-width video
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

  // layout: "text-video" — text on left, video on right
  if (config.layout === "text-video") {
    return (
      <section className={styles.sectionTextVideo}>
        <div className={styles.innerTextVideo}>
          <div className={styles.textCol}>
            <h2 className={styles.headingTV}>{config.heading}</h2>
            {Array.isArray(config.subtext)
              ? config.subtext.map((p, i) => <p key={i} className={styles.subtextTV}>{p}</p>)
              : config.subtext && <p className={styles.subtextTV}>{config.subtext}</p>
            }
          </div>
          <div className={styles.videoColTV}>
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

  // layout: "side" (default) — video left, text right
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
