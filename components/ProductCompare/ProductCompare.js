import styles from "./ProductCompare.module.css";
import Link from "next/link";

export default function ProductCompare({ config }) {
  if (!config) return null;

  const { heading, subtext, image, imageAlt, rows, buyLink } = config;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.imageCol}>
          <img src={image} alt={imageAlt || "Product"} className={styles.img} loading="lazy" />
        </div>
        <div className={styles.tableCol}>
          <h2 className={styles.heading}>{heading}</h2>
          {subtext && <p className={styles.subtext}>{subtext}</p>}
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.thFeature}>Feature</th>
                  <th className={styles.thBrand}>Oxliv</th>
                  <th className={styles.thOther}>Others Under $1000</th>
                </tr>
              </thead>
              <tbody>
                {rows?.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? styles.rowEven : styles.rowOdd}>
                    <td className={styles.tdFeature}>{row.feature}</td>
                    <td className={styles.tdBrand}>{row.ours}</td>
                    <td className={styles.tdOther}>{row.theirs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {buyLink && (
            <Link href={buyLink} className={styles.cta}>
              ORDER NOW
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
