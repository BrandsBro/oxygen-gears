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
    .sort((a, b) => b.price - a.price); // highest price first

  return (
    <div>
      {/* Banner — full width */}
      <div className={styles.banner}>
        <img
          src="https://static.wixstatic.com/media/8f1bc7_57ef4012d7f841b182e19656f9ad97f2~mv2.webp"
          alt="Portable Oxygen Concentrators"
          className={styles.bannerImg}
        />
      </div>

      {/* Heading + Description */}
      <div className={styles.intro}>
        <div className={styles.introInner}>
          <h1 className={styles.heading}>Portable Oxygen Concentrators</h1>
          <p className={styles.desc}>
            At OxygenGears, we make daily oxygen support lighter, simpler, and easier to carry.
            Whether you are at home, out on errands, in the car, or off traveling, our portable
            models keep you moving with comfort and confidence. Plus, every order ships free
            across the USA, delivered right to your door.
          </p>
        </div>
      </div>

      <ProductGrid products={products} />
    </div>
  );
}
