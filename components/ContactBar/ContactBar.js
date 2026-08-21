import styles from "./ContactBar.module.css";
import brand from "@/config/brand";

const items = [
  { icon: "📞", title: "Speak With Us", sub: brand.phone },
  { icon: "✉️", title: "Get In Touch", sub: brand.email },
  { icon: "🕐", title: "U.S. Delivery", sub: "in 8–11 Business Days" },
  { icon: "🚚", title: "Free Shipping", sub: "On All Orders" },
];

export default function ContactBar() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {items.map((item, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.iconCircle}>{item.icon}</div>
            <div className={styles.text}>
              <span className={styles.title}>{item.title}</span>
              <span className={styles.sub}>{item.sub}</span>
            </div>
            {i < items.length - 1 && <div className={styles.divider} />}
          </div>
        ))}
      </div>
    </section>
  );
}
