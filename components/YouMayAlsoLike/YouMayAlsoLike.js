import styles from "./YouMayAlsoLike.module.css";
import Link from "next/link";
import { wixClient } from "@/lib/wixClient";
import { getWixImageUrl } from "@/lib/wixUtils";

export default async function YouMayAlsoLike({ currentSlug }) {
  const { items } = await wixClient.products.queryProducts().find();

  // Exclude current product and shuffle
  const others = items.filter(p => p.slug !== currentSlug);
  const shuffled = others.sort(() => Math.random() - 0.5).slice(0, 4);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>You may also like</h2>
        <div className={styles.grid}>
          {shuffled.map((product) => {
            const price = product.price?.discountedPrice ?? product.price?.price;
            const original = product.price?.price;
            const image = getWixImageUrl(product.media?.items?.[0]?.image?.url);

            return (
              <Link key={product._id} href={`/products/${product.slug}`} className={styles.card}>
                <div className={styles.imgWrap}>
                  <img src={image} alt={product.name} className={styles.img} />
                </div>
                <div className={styles.info}>
                  <p className={styles.name}>{product.name}</p>
                  <div className={styles.priceRow}>
                    {original > price && (
                      <span className={styles.original}>${original?.toFixed(2)} USD</span>
                    )}
                    <span className={styles.price}>${price?.toFixed(2)} USD</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
