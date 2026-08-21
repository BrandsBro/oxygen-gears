import styles from "./OurStory.module.css";
import Link from "next/link";

export default function OurStory() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Left — Image */}
        <div className={styles.imgWrap}>
          <img
            src="https://static.wixstatic.com/media/8f1bc7_76a27f9949d1412eaba1b9ed97ea54c3~mv2.avif"
            alt="Our Story"
            className={styles.img}
          />
        </div>

        {/* Right — Text */}
        <div className={styles.content}>
          <span className={styles.tag}>HOW IT BEGAN</span>
          <h2 className={styles.heading}>Our Story</h2>
          <p className={styles.para}>
           At Oxliv, we started with a simple mission: to make breathing support feel less like a burden and more like a natural part of everyday life. We set out to create a portable oxygen solution that's lightweight, easy to use, and designed to help you maintain your independence.
          </p>
          <p className={styles.para}>
           Our smart pulse flow concentrator embodies this philosophy inside and out. Using advanced AI breath detection, it takes in ambient air and precisely delivers the oxygen you need, right when you need it most. By generating oxygen on demand, our device eliminates the need for heavy tanks and constant refills, ensuring you always have a steady, reliable source of oxygen that moves with you
          </p>

          {/* Stats */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>10,000+</span>
              <span className={styles.statLabel}>Happy Customers</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>450+</span>
              <span className={styles.statLabel}>5-Star Reviews</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>4.8/5</span>
              <span className={styles.statLabel}>Average Rating</span>
            </div>
          </div>

          <Link href="/about" className={styles.btn}>Read More</Link>
        </div>

      </div>
    </section>
  );
}
