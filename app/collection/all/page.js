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

  // Section 1: 4 main concentrators in order.
  // Section 2: accessories grouped by model (1-3L → 1-5L → 1-7L → 1-8L).
  const MAIN_CONCENTRATORS = [
    "rechargeable-1-5l-portable-oxygen-concentrator-95-oxygen-purity",
    "1to7l-portable-oxygen-concentrator",
    "1-8l-portable-oxygen-concentrator-for-home-travel-90-o-purity",
  ];

  function accessoryModelOrder(slug) {
    if (slug.includes("1-5")) return 0;
    if (slug.includes("1-7") || slug.includes("1to7")) return 1;
    if (slug.includes("1-8")) return 2;
    return 99;
  }

  const prods = items
    .filter((p) => !p.slug.includes("1-3"))
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
      const ai = MAIN_CONCENTRATORS.indexOf(a.slug);
      const bi = MAIN_CONCENTRATORS.indexOf(b.slug);
      const aIsMain = ai !== -1;
      const bIsMain = bi !== -1;
      // Main concentrators come before accessories
      if (aIsMain && bIsMain) return ai - bi;
      if (aIsMain) return -1;
      if (bIsMain) return 1;
      // Both accessories — group by model
      return accessoryModelOrder(a.slug) - accessoryModelOrder(b.slug);
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
export const revalidate = 0;
