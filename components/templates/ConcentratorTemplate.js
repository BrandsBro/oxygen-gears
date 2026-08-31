import dynamic from "next/dynamic";
import ImageGallery from "@/components/ProductShowcase/ImageGallery";
import ProductInfo from "@/components/ProductPage/ProductInfo";
import styles from "@/components/ProductPage/ProductPage.module.css";

// Lazy load everything below the fold
const ProductFeatures = dynamic(() => import("@/components/ProductFeatures/ProductFeatures"));
const WhySwitching = dynamic(() => import("@/components/WhySwitching/WhySwitching"));
const OxygenOnTheGo = dynamic(() => import("@/components/OxygenOnTheGo/OxygenOnTheGo"));
const ProductDetails = dynamic(() => import("@/components/ProductDetails/ProductDetails"));
const StayPowered = dynamic(() => import("@/components/StayPowered/StayPowered"));
const AdditionalInfo = dynamic(() => import("@/components/AdditionalInfo/AdditionalInfo"));
const InsideBox = dynamic(() => import("@/components/InsideBox/InsideBox"));
const TrustedBy = dynamic(() => import("@/components/TrustedBy/TrustedBy"));
const Reviews = dynamic(() => import("@/components/Reviews/Reviews"));
const ProductFAQ = dynamic(() => import("@/components/ProductFAQ/ProductFAQ"));
const ContactBar = dynamic(() => import("@/components/ContactBar/ContactBar"));

export default function ConcentratorTemplate({ product, mediaItems, config }) {
  const originalPrice = product.price?.price;
  const discountedPrice = product.price?.discountedPrice ?? originalPrice;
  const discountPercent = Math.round((1 - discountedPrice / originalPrice) * 100);
  const options = product.productOptions || [];
  const variants = product.variants || [];

  return (
    <>
      {/* Above fold — loads immediately */}
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

      {/* Below fold — lazy loaded */}
      {config.productFeatures && <ProductFeatures config={config.productFeatures} />}
      {config.showWhySwitching !== false && <WhySwitching config={config.whySwitching} />}
      {config.oxygenOnTheGo && <OxygenOnTheGo config={config.oxygenOnTheGo} />}
      {config.productDetails && <ProductDetails sections={config.productDetails} />}
      {config.showStayPowered !== false && <StayPowered />}
      {config.additionalInfo && <AdditionalInfo config={config.additionalInfo} />}
      {config.insideBox && <InsideBox config={config.insideBox} />}
      <TrustedBy />
      <Reviews csvUrl={config.reviewsCsv} />
      {config.productFaq && <ProductFAQ faqs={config.productFaq} />}
      <ContactBar />
    </>
  );
}
