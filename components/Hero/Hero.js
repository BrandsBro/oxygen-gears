import styles from "./Hero.module.css";
import Link from "next/link";
import brand from "@/config/brand";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <img
        src="https://static.wixstatic.com/media/8f1bc7_b623cc5ebfe543fda64c27ddf0d209bc~mv2.avif"
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
            Non-Medical Oxygen Concentrators<br />
            Built for Comfort and Mobility
          </h1>
          <p className={styles.subtitle}>
            Stay comfortable at home or on the move. Our lightweight concentrators offer
            adjustable flow and reliable battery power. Choose the model that fits your
            routine and enjoy greater freedom every day.
          </p>
          <Link href={`/products/${brand.featuredProductSlug}`} className={styles.btn}>
            Order Now
          </Link>
        </div>
      </div>
    </section>
  );
}
