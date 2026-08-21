import { wixClient } from "@/lib/wixClient";
import { getMediaItems } from "@/lib/wixUtils";
import ImageGallery from "./ImageGallery";
import ProductActions from "./ProductActions";
import styles from "./ProductShowcase.module.css";
import brand from "@/config/brand";

export default async function ProductShowcase() {
  try {
    const { items } = await wixClient.products.queryProducts().find();
    const product = items.find((p) => p.slug === brand.featuredProductSlug) || items[0];
    if (!product) return null;

    const originalPrice = product.price?.price;
    const discountedPrice = product.price?.discountedPrice ?? originalPrice;
    const discountPercent = Math.round((1 - discountedPrice / originalPrice) * 100);
    const options = product.productOptions || [];
    const variants = product.variants || [];

    // Prepend video as first media item
    const imageItems = getMediaItems(product.media?.items);
    const mediaItems = brand.featuredProductVideo
      ? [{ type: "video", url: brand.featuredProductVideo, thumbnail: imageItems[0]?.url }, ...imageItems]
      : imageItems;

    return (
      <section className={styles.section}>
        <div className={styles.inner}>
          <ImageGallery mediaItems={mediaItems} productName={product.name} />
          <ProductActions
            productName={product.name}
            originalPrice={originalPrice}
            discountedPrice={discountedPrice}
            discountPercent={discountPercent}
            options={options}
            variants={variants}
            productId={product._id}
          />
        </div>
      </section>
    );
  } catch (err) {
    console.error("ProductShowcase error:", err);
    return null;
  }
}
