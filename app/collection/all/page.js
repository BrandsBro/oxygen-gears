import { wixClient } from "@/lib/wixClient";
import { getWixImageUrl } from "@/lib/wixUtils";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import styles from "@/components/ProductGrid/ProductGrid.module.css";

export default async function CollectionPage() {
  const { items } = await wixClient.products.queryProducts().find();

  const products = items
    .map((p) => ({
      id: p._id,
      slug: p.slug,
      name: p.name,
      price: p.price?.discountedPrice ?? p.price?.price,
      originalPrice: p.price?.price,
      image1: getWixImageUrl(p.media?.items?.[0]?.image?.url),
      image2: getWixImageUrl(p.media?.items?.[1]?.image?.url),
    }))
    .sort((a, b) => b.price - a.price);

  return (
    <div>
      <div className={styles.banner}>
        <img
          src="https://static.wixstatic.com/media/8f1bc7_57ef4012d7f841b182e19656f9ad97f2~mv2.webp"
          alt="All Products"
          className={styles.bannerImg}
        />
      </div>

      <div className={styles.intro}>
        <div className={styles.introInner}>
          <h1 className={styles.heading}>All Products</h1>
          <p className={styles.desc}>
            Portable Oxygen Concentrators make daily oxygen support easier, lighter, and more
            flexible. Whether you are at home, running errands, riding in the car, or planning
            travel, our portable models help you move with more comfort and confidence. Plus,
            enjoy free shipping across the USA, so you can get the oxygen support you need
            delivered right to your door.
          </p>
        </div>
      </div>

      <ProductGrid products={products} />
    </div>
  );
}
