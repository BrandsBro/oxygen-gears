import styles from "./Hero.module.css";
import Link from "next/link";
import Image from "next/image";
import brand from "@/config/brand";

const HERO_IMAGE = "https://static.wixstatic.com/media/8f1bc7_c4cdd151da0e47cba7dc5ed46ccb5859~mv2.webp";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src={HERO_IMAGE}
        alt="Oxliv Portable Oxygen Concentrator"
        width={1440}
        height={620}
        className={styles.desktopImg}
        priority
        fetchPriority="high"
      />
      <div className={styles.overlay}>
        <div className={styles.content}>
          <div className={styles.textcontent}>
            <span className={styles.badge}>✦ PORTABLE. RECHARGEABLE. SIMPLE.</span>
            <h1 className={styles.title}>
              Non-Medical Oxygen<br />Concentrators Built<br />for Comfort and Mobility
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
        </div>
      </div>

      <div className={styles.mobileHero}>
        <Image
          src={HERO_IMAGE}
          alt="Oxliv Portable Oxygen Concentrator"
          width={768}
          height={400}
          className={styles.mobileImg}
          priority
          fetchPriority="high"
        />
        <div className={styles.mobileOverlay}>
          <span className={styles.mobileBadge}>✦ PORTABLE. RECHARGEABLE. SIMPLE.</span>
          <h1 className={styles.mobileTitle}>
            Non-Medical Oxygen Concentrators Built for Comfort and Mobility
          </h1>
          <Link href="/collection/all" className={styles.btn}>
            Shop Portable Devices
          </Link>
        </div>
      </div>
    </section>
  );
}
