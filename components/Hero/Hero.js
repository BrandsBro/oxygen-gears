import styles from "./Hero.module.css";
import Link from "next/link";
import brand from "@/config/brand";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <img
        src="https://static.wixstatic.com/media/20cc08_7738ba2bb0474eea8ab45b8dfcda3215~mv2.jpeg"
        alt="Hero"
        className={styles.desktopImg}
      />
      <img
        src="https://static.wixstatic.com/media/20cc08_5b1061c8d88248d4b0ff12144d0893ef~mv2.jpeg"
        alt="Hero Mobile"
        className={styles.mobileImg}
      />
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Reclaim Your Freedom<br />
            With Portable Oxygen<br />
            Concentrator
          </h1>
          <p className={styles.subtitle}>
            No heavy tanks holding you back. Our oxygen concentrators
            are light and easy to trust. A companion you can rely on.
          </p>
          <Link href={`/products/${brand.featuredProductSlug}`} className={styles.btn}>
            Order Now
          </Link>
        </div>
      </div>
    </section>
  );
}
