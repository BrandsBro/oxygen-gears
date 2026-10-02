"use client";
import { useMemo } from "react";
import styles from "./TrustBadges.module.css";

function addBusinessDays(date, days) {
  const result = new Date(date);
  let added = 0;
  while (added < days) {
    result.setDate(result.getDate() + 1);
    const day = result.getDay();
    if (day !== 0 && day !== 6) added++;
  }
  return result;
}

function formatDate(date) {
  return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

const badges = [
  {
    icon: "https://static.wixstatic.com/media/8f1bc7_4f836583de8645efa958728c16a5197d~mv2.avif",
    label: "10,000+ Happy Customers",
  },
  {
    icon: "https://static.wixstatic.com/media/8f1bc7_a88c5653968b4e109adbbf85c6009700~mv2.avif",
    label: "Protected Every Purchase",
  },
  {
    icon: "https://static.wixstatic.com/media/8f1bc7_be22ab212d7546f4b8d9db53b6a72ad9~mv2.avif",
    label: "U.S. Delivery 8-11 Days",
  },
];

export default function TrustBadges() {
  const { earliest, latest } = useMemo(() => {
    const today = new Date();
    return {
      earliest: formatDate(addBusinessDays(today, 8)),
      latest: formatDate(addBusinessDays(today, 11)),
    };
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.badges}>
        {badges.map((b, i) => (
          <div key={i} className={styles.badge}>
            <div className={styles.iconBox}>
              <img src={b.icon} alt={b.label} className={styles.icon} loading="lazy" />
            </div>
            <p className={styles.label}>{b.label}</p>
          </div>
        ))}
      </div>
      <div className={styles.delivery}>
        <span>Est. delivery: </span>
        <strong>{earliest} – {latest}</strong>
        <span> · Free Shipping in USA</span>
      </div>
    </div>
  );
}
