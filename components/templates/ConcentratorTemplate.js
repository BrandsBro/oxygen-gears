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

export default function ConcentratorTemplate({ product, mediaItems, config }) {
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
