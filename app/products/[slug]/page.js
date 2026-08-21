import { wixClient } from "@/lib/wixClient";
import { getMediaItems } from "@/lib/wixUtils";
import ImageGallery from "@/components/ProductShowcase/ImageGallery";
import ProductInfo from "@/components/ProductPage/ProductInfo";
import ProductFeatures from "@/components/ProductFeatures/ProductFeatures";
import WhySwitching from "@/components/WhySwitching/WhySwitching";
import OxygenOnTheGo from "@/components/OxygenOnTheGo/OxygenOnTheGo";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import StayPowered from "@/components/StayPowered/StayPowered";
import AdditionalInfo from "@/components/AdditionalInfo/AdditionalInfo";
import InsideBox from "@/components/InsideBox/InsideBox";
import TrustedBy from "@/components/TrustedBy/TrustedBy";
import Reviews from "@/components/Reviews/Reviews";
import ProductFAQ from "@/components/ProductFAQ/ProductFAQ";
import ContactBar from "@/components/ContactBar/ContactBar";
import styles from "@/components/ProductPage/ProductPage.module.css";
import { notFound } from "next/navigation";
import brand from "@/config/brand";

// Map slug → product config
const productConfigs = {
  "1-7lmin-smart-portable-oxygen-concentrator-10-hours-battery-adjustable-flow": () =>
    import("@/config/products/1-7lmin-smart-portable-oxygen-concentrator-10-hours-battery-adjustable-flow"),
};

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const { items } = await wixClient.products.queryProducts().find();
  const product = items.find((p) => p.slug === slug);
  if (!product) return notFound();

  // Load product config or empty fallback
  let config = {};
  if (productConfigs[slug]) {
    const mod = await productConfigs[slug]();
    config = mod.default;
  }

  const imageItems = getMediaItems(product.media?.items);
  const mediaItems = config.videoUrl
    ? [{ type: "video", url: config.videoUrl, thumbnail: imageItems[0]?.url }, ...imageItems]
    : imageItems;

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
              bullets={config.productBullets}
            />
          </div>
        </div>
      </div>
      {config.productFeatures && <ProductFeatures config={config.productFeatures} />}
      <WhySwitching />
      {config.oxygenOnTheGo && <OxygenOnTheGo config={config.oxygenOnTheGo} />}
      {config.productDetails && <ProductDetails sections={config.productDetails} />}
      <StayPowered />
      {config.additionalInfo && <AdditionalInfo config={config.additionalInfo} />}
      {config.insideBox && <InsideBox config={config.insideBox} />}
      <TrustedBy />
      <Reviews csvUrl={config.reviewsCsv} />
      {config.productFaq && <ProductFAQ faqs={config.productFaq} />}
      <ContactBar />
    </>
  );
}
