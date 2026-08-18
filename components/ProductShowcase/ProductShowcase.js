import { wixClient } from "@/lib/wixClient";
import { getWixImageUrl } from "@/lib/wixUtils";
import ImageGallery from "./ImageGallery";
import ProductActions from "./ProductActions";
import styles from "./ProductShowcase.module.css";
import brand from "@/config/brand";

export default async function ProductShowcase() {
  try {
    const { items } = await wixClient.products
      .queryProducts()
      .find();

    const product = items.find(
      (p) => p.slug === brand.featuredProductSlug
    ) || items[0];

    if (!product) return null;

    const originalPrice = product.price?.price;
    const discountedPrice = product.price?.discountedPrice ?? originalPrice;
    const discountPercent = Math.round(
      (1 - discountedPrice / originalPrice) * 100
    );

    const images = product.media?.items
      ?.map((item) => getWixImageUrl(item.image?.url))
      .filter(Boolean) || [];

    const options = product.productOptions || [];
    const variants = product.variants || [];

    // Product description bullets — coming from Wix product description
    const description = product.description || "";

    return (
      <section className={styles.section}>
        <div className={styles.inner}>
          <ImageGallery images={images} productName={product.name} />
          <ProductActions
            productName={product.name}
            originalPrice={originalPrice}
            discountedPrice={discountedPrice}
            discountPercent={discountPercent}
            options={options}
            variants={variants}
            productId={product._id}
            description={description}
          />
        </div>
      </section>
    );
  } catch (err) {
    console.error("ProductShowcase error:", err);
    return null;
  }
}
