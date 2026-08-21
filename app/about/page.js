import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>About Oxliv</h1>
        <div className={styles.content}>
          <p>
       We create portable oxygen concentrators designed to seamlessly integrate into your life, so you can maintain your mobility and independence without worrying about refills or heavy equipment.
          </p>
          <p>
         We focus on the details that make a real difference in your day-to-day experience. Our lightweight concentrators are easy to carry, set up in seconds, and feature adjustable flow settings that put you in control. With reliable performance you can count on, whether you're at home or on the go, Oxliv ensures you always have access to the oxygen you need.
          </p>
          <p>
          Say goodbye to bulky tanks and complicated routines. Our intuitive designs prioritize simplicity, so you can focus on living life to the fullest. We believe that breathing support should never hold you back – and with Oxliv, it won't.
          </p>
        </div>
      </div>
    </div>
  );
}
