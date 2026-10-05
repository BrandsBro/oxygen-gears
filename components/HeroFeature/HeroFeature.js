import styles from "./HeroFeature.module.css";

export default function HeroFeature({ config }) {
  if (!config) return null;

  const { heading, highlight, highlightColor, subtext, subtextColor, bullets, bgImage, mobileImage } = config;

  return (
    <section
      className={styles.section}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Mobile-only image shown above text */}
      {mobileImage && (
        <img src={mobileImage} alt={heading} className={styles.mobileImg} loading="lazy" />
      )}

      <div className={styles.textCol}>
        <h2 className={styles.heading}>{heading}</h2>
        {highlight && (
          <p className={styles.highlight} style={highlightColor ? { color: highlightColor } : {}}>
            {highlight}
          </p>
        )}
        {subtext && (
          <p className={styles.subtext} style={subtextColor ? { color: subtextColor } : {}}>
            {subtext}
          </p>
        )}
        {bullets?.length > 0 && (
          <div className={styles.bullets}>
            {bullets.map((b, i) => (
              <div key={i} className={styles.bulletCard}>{b}</div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
