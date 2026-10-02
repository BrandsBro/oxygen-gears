import styles from "./HomeProductGrid.module.css";
import { wixClient } from "@/lib/wixClient";
import { getMediaItems } from "@/lib/wixUtils";
import Link from "next/link";

const CONCENTRATOR_SLUGS = [
  "1to7l-portable-oxygen-concentrator",
  "rechargeable-1-5l-portable-oxygen-concentrator-95-oxygen-purity",
  "1-8l-portable-oxygen-concentrator-for-home-travel-90-o-purity",
];

export default async function HomeProductGrid() {
  try {
    const { items } = await wixClient.products.queryProducts().find();

    const concentrators = CONCENTRATOR_SLUGS
      .map((slug) => items.find((p) => p.slug === slug))
      .filter(Boolean);

    if (!concentrators.length) return null;

    return (
      <section className={styles.section}>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>OUR MODELS</p>
          <h2 className={styles.heading}>Compare Available Models</h2>
          <p className={styles.subtext}>
            Compare size, weight, battery runtime, adjustable settings, operating modes
            and power options to find the model that best matches your everyday preferences.
            Free USA shipping on eligible orders.
          </p>
          <div className={styles.grid}>
            {concentrators.map((product) => {
              const images = getMediaItems(product.media?.items);
              const img1 = images[0]?.url || "";
              const img2 = images[1]?.url || img1;
              const price = product.price?.discountedPrice ?? product.price?.price;
              const original = product.price?.price;
              const discount = original && price < original
                ? Math.round((1 - price / original) * 100)
                : 0;
              const minPrice = product.priceRange?.minValue ?? price;
              const maxPrice = product.priceRange?.maxValue ?? price;
              const showRange = minPrice && maxPrice && minPrice !== maxPrice;

              return (
                <Link key={product._id} href={`/products/${product.slug}`} className={styles.card}>
                  <div className={styles.imgWrap}>
                    {discount > 0 && (
                      <span className={styles.badge}>{discount}% OFF</span>
                    )}
                    <img src={img1} alt={product.name} className={styles.img} loading="lazy" />
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.name}>{product.name}</h3>
                    <div className={styles.priceRow}>
                      {showRange ? (
                        <span className={styles.price}>${minPrice?.toFixed(2)} – ${maxPrice?.toFixed(2)}</span>
                      ) : (
                        <>
                          <span className={styles.price}>${price?.toFixed(2)}</span>
                          {original && original > price && (
                            <span className={styles.original}>${original?.toFixed(2)}</span>
                          )}
                        </>
                      )}
                    </div>
                    <span className={styles.viewBtn}>Select Options →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    );
  } catch (err) {
    console.error("HomeProductGrid error:", err);
    return null;
  }
}
