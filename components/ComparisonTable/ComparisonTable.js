"use client";
import styles from "./ComparisonTable.module.css";
import { useCart } from "@/lib/cartContext";

export default function ComparisonTable({ config, productId, variantId }) {
  const { buyNow, loading } = useCart();
  if (!config) return null;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Heading */}
        <div className={styles.headingArea}>
          <h2 className={styles.heading}>{config.heading}</h2>
          {config.subtext && <p className={styles.subtext}>{config.subtext}</p>}
        </div>

        {/* Table */}
        <div className={styles.tableWrap}>
          {/* Header row */}
          <div className={`${styles.row} ${styles.headerRow}`}>
            <div className={styles.labelCell} />
            <div className={`${styles.colCell} ${styles.col1Header}`}>
              {config.col1.image && (
                <img src={config.col1.image} alt={config.col1.label} className={styles.headerImg} />
              )}
              <span className={styles.headerLabel}>{config.col1.label}</span>
            </div>
            <div className={`${styles.colCell} ${styles.col2Header}`}>
              {config.col2.image && (
                <img src={config.col2.image} alt={config.col2.label} className={styles.headerImg} />
              )}
              <span className={styles.headerLabel}>{config.col2.label}</span>
            </div>
          </div>

          {/* Body rows */}
          {config.rows.map((row, i) => (
            <div key={i} className={`${styles.row} ${i % 2 === 0 ? styles.rowOdd : styles.rowEven}`}>
              <div className={styles.labelCell}>{row.feature}</div>
              <div className={`${styles.colCell} ${styles.col1Cell}`}>{row.col1}</div>
              <div className={`${styles.colCell} ${styles.col2Cell}`}>{row.col2}</div>
            </div>
          ))}
        </div>

        {/* BUY NOW */}
        {config.showButton !== false && (
          <div className={styles.btnWrap}>
            <button
              className={styles.btn}
              onClick={() => buyNow(productId, variantId, 1)}
              disabled={loading}
            >
              {loading ? "Processing..." : config.buttonText || "BUY NOW"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
