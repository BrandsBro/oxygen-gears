import { createClient, OAuthStrategy } from "@wix/sdk";
import { products } from "@wix/stores";
import { getWixImageUrl } from "@/lib/wixUtils";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import styles from "@/components/ProductGrid/ProductGrid.module.css";

export default async function CollectionPage() {
  const client = createClient({
    modules: { products },
    auth: OAuthStrategy({ clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID }),
  });

  const { items } = await client.products.queryProducts().find();

  // Concentrators first (ordered by model size), then accessories grouped by concentrator.
  // Add new slugs here when new products go live in Wix.
  const SLUG_ORDER = [
    // ── Main concentrators ──
    "rechargeable-1-3l-portable-oxygen-concentrator",
    "rechargeable-1-5l-portable-oxygen-concentrator-95-oxygen-purity",
    "1to7l-portable-oxygen-concentrator",
    "rechargeable-1-8l-portable-oxygen-concentrator",
    // ── 1-7L accessories ──
    "rechargeable-battery-for-1-7l-oxygen-concentrator",
    "5-pieces-nasal-cannulas-for-1-7l",
    "charging-adapter-for-1-7l-oxygen-concentrator",
    "car-charging-cable-for-portable-oxygen-concentrator",
    "carry-bag-for-1-7l-oxygen-concentrator",
  ];

  const prods = items
    .map((p) => ({
      id: p._id,
      slug: p.slug,
      name: p.name,
      price: p.price?.discountedPrice ?? p.price?.price,
      originalPrice: p.price?.price,
      image1: getWixImageUrl(p.media?.items?.[0]?.image?.url),
      image2: getWixImageUrl(p.media?.items?.[1]?.image?.url),
    }))
    .sort((a, b) => {
      const ai = SLUG_ORDER.indexOf(a.slug);
      const bi = SLUG_ORDER.indexOf(b.slug);
      const aPos = ai === -1 ? Infinity : ai;
      const bPos = bi === -1 ? Infinity : bi;
      return aPos - bPos;
    });

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
      <ProductGrid products={prods} />
    </div>
  );
}
export const revalidate = 3600;
