import ImageGallery from "@/components/ProductShowcase/ImageGallery";
import ProductInfo from "@/components/ProductPage/ProductInfo";
import ProductFAQ from "@/components/ProductFAQ/ProductFAQ";
import YouMayAlsoLike from "@/components/YouMayAlsoLike/YouMayAlsoLike";
import styles from "@/components/ProductPage/ProductPage.module.css";

export default function AccessoryTemplate({ product, mediaItems, config, slug }) {
  const originalPrice = product.price?.price;
  const discountedPrice = product.price?.discountedPrice ?? originalPrice;
  const discountPercent = Math.round((1 - discountedPrice / originalPrice) * 100);
  const options = product.productOptions || [];
  const variants = product.variants || [];

  return (
    <>
      <div className={styles.page}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <ImageGallery mediaItems={mediaItems} productName={product.name} />
          </div>
          <div className={styles.right}>
            <ProductInfo
              productName={product.name}
              originalPrice={originalPrice}
              discountedPrice={discountedPrice}
              discountPercent={discountPercent}
              options={options}
              variants={variants}
              productId={product._id}
              bullets={config.bullets}
            />
          </div>
        </div>
      </div>
      <ProductFAQ faqs={config.productFaq} />
      <YouMayAlsoLike currentSlug={slug} />
    </>
  );
}
