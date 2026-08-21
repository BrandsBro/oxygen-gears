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
          <span className={styles.tag}>WHO WE ARE</span>
          <h2 className={styles.heading}>Our Story</h2>
          <p className={styles.para}>
            Oxygen Gears was built on one simple idea: oxygen support
            should be light, portable, and easy to trust. Our concentrator
            pulls oxygen straight from the air, so there are no tanks to refill
            and no bulk to carry around.
          </p>
          <p className={styles.para}>
            It's ready to keep up with you, at home or on the road. We keep
            refining our gear so reliable oxygen always stays within reach.
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
