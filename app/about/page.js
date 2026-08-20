import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>About OxygenGears</h1>
        <div className={styles.content}>
          <p>
            The OxygenGears is committed to providing high-quality oxygen therapy solutions,
            specializing in portable and home-use concentrators. With over two decades of
            experience, our certified experts help you find the best products for your needs,
            ensuring greater mobility and independence.
          </p>
          <p>
            We offer reliable, budget-friendly solutions backed by exceptional service and
            support. Our products are CE certified, meeting the latest healthcare standards
            to improve your daily life.
          </p>
          <p>
            We prioritize your needs and strive to make your oxygen therapy experience easy,
            worry-free, and effective. Trusted by customers worldwide, we are here to support
            you every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
}
