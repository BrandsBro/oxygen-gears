"use client";
import { useState } from "react";
import styles from "./ProductCompare.module.css";
import { useCart } from "@/lib/cartContext";

export default function ProductCompare({ config, productId, variantId }) {
  if (!config) return null;

  const { heading, subtext, image, imageAlt, rows } = config;
  const { buyNow, loading } = useCart();

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <h2 className={styles.heading}>{heading}</h2>
          {subtext && <p className={styles.subtext}>{subtext}</p>}
        </div>

        <div className={styles.body}>
          <div className={styles.imageCol}>
            <img src={image} alt={imageAlt || "Product"} className={styles.img} loading="lazy" />
          </div>

          <div className={styles.tableCol}>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.thFeature}>Features</th>
                    <th className={styles.thBrand}>Oxliv</th>
                    <th className={styles.thOther}>Others under $1000</th>
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

            <button
              className={styles.cta}
              onClick={() => buyNow(productId, variantId, 1)}
              disabled={loading}
            >
              {loading ? "Processing..." : "Shop Now"}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
