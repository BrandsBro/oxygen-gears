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

  // Groups: concentrator first, then its accessories, ordered 1-3L → 1-5L → 1-7L → 1-8L.
  // Detection is keyword-based so new Wix products are picked up automatically.
  const MODEL_GROUPS = ["1-3", "1-5", "1-7", "1to7", "1-8"];
  const ACCESSORY_KEYWORDS = ["battery", "cannula", "cable", "adapter", "bag", "strap", "nasal", "charger", "charging"];

  function modelGroup(slug) {
    if (slug.includes("1-3")) return 0;
    if (slug.includes("1-5")) return 1;
    if (slug.includes("1-7") || slug.includes("1to7")) return 2;
    if (slug.includes("1-8")) return 3;
    return 99;
  }

  function isAccessory(slug) {
    return ACCESSORY_KEYWORDS.some((kw) => slug.includes(kw));
  }

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
      const ag = modelGroup(a.slug);
      const bg = modelGroup(b.slug);
      if (ag !== bg) return ag - bg;
      // Within same group: concentrator (0) before accessories (1)
      return (isAccessory(a.slug) ? 1 : 0) - (isAccessory(b.slug) ? 1 : 0);
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
