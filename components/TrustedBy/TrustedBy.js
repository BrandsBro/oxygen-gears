import styles from "./TrustedBy.module.css";

const logos = [
  { src: "https://static.wixstatic.com/media/20cc08_f9b45c9c36d74182b9cb23c77ea510bd~mv2.png", alt: "Business Insider" },
  { src: "https://static.wixstatic.com/media/20cc08_df02c70ec8d14c6db7a3b6bfc060a193~mv2.avif", alt: "USA Today" },
  { src: "https://static.wixstatic.com/media/20cc08_5cd69a94fa524b00b3059791fa5a21a3~mv2.jpg", alt: "Reuters" },
  { src: "https://static.wixstatic.com/media/20cc08_bd27574ae68344dcbb460d24d1146e53~mv2.png", alt: "Associated Press" },
  { src: "https://static.wixstatic.com/media/20cc08_170d03dc9f36443988c4fde1dc064911~mv2.jpg", alt: "Medical News Today" },
];

export default function TrustedBy() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Trusted by the Best</p>
        <div className={styles.logos}>
          {logos.map((logo, i) => (
            <img key={i} src={logo.src} alt={logo.alt} className={styles.logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
