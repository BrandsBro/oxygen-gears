import styles from "./Hero.module.css";
import Link from "next/link";
import Image from "next/image";

const HERO_IMAGE = "https://static.wixstatic.com/media/8f1bc7_c4cdd151da0e47cba7dc5ed46ccb5859~mv2.webp";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        {/* Left — text */}
        <div className={styles.left}>
          <span className={styles.badge}>✦ PORTABLE. RECHARGEABLE. SIMPLE.</span>
          <h1 className={styles.title}>
            Non-Medical Oxygen Concentrators Built for Comfort and Mobility
          </h1>
          <p className={styles.subtitle}>
            Lightweight, rechargeable and easy to carry, Oxliv portable wellness devices
            are designed for everyday personal comfort and convenient use at home or on the go.
          </p>
          <Link href="/collection/all" className={styles.btn}>
            Shop Portable Devices
          </Link>
          <div className={styles.trustRow}>
            <span>✔ Free USA Shipping</span>
            <span>✔ Ships Today</span>
            <span>✔ Easy Everyday Carry</span>
          </div>
        </div>

        {/* Right — image card */}
        <div className={styles.right}>
          <div className={styles.imgCard}>
            <Image
              src={HERO_IMAGE}
              alt="Woman using Oxliv portable oxygen concentrator"
              width={400}
              height={500}
              className={styles.img}
              priority
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
