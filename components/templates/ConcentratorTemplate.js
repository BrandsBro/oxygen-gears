import dynamic from "next/dynamic";
import ImageGallery from "@/components/ProductShowcase/ImageGallery";
import ProductInfo from "@/components/ProductPage/ProductInfo";
import styles from "@/components/ProductPage/ProductPage.module.css";
import { ViewContentEvent } from "@/components/PixelEvents";

// Lazy load everything below the fold
const ProductFeatures = dynamic(() => import("@/components/ProductFeatures/ProductFeatures"));
const WhySwitching = dynamic(() => import("@/components/WhySwitching/WhySwitching"));
const OxygenOnTheGo = dynamic(() => import("@/components/OxygenOnTheGo/OxygenOnTheGo"));
const ProductDetails = dynamic(() => import("@/components/ProductDetails/ProductDetails"));
const OutputChart = dynamic(() => import("@/components/OutputChart/OutputChart"));
const StayPowered = dynamic(() => import("@/components/StayPowered/StayPowered"));
const VideoSection = dynamic(() => import("@/components/VideoSection/VideoSection"));
const ComparisonTable = dynamic(() => import("@/components/ComparisonTable/ComparisonTable"));
const AdditionalInfo = dynamic(() => import("@/components/AdditionalInfo/AdditionalInfo"));
const InsideBox = dynamic(() => import("@/components/InsideBox/InsideBox"));
const CTABanner = dynamic(() => import("@/components/CTABanner/CTABanner"));
const TrustedBy = dynamic(() => import("@/components/TrustedBy/TrustedBy"));
const Reviews = dynamic(() => import("@/components/Reviews/Reviews"));
const ProductFAQ = dynamic(() => import("@/components/ProductFAQ/ProductFAQ"));
const ContactBar = dynamic(() => import("@/components/ContactBar/ContactBar"));
const QuickStats = dynamic(() => import("@/components/QuickStats/QuickStats"));
const ProductCompare = dynamic(() => import("@/components/ProductCompare/ProductCompare"));
const HeroFeature = dynamic(() => import("@/components/HeroFeature/HeroFeature"));
const FeatureSection = dynamic(() => import("@/components/FeatureSection/FeatureSection"));
const AlternatingFeature = dynamic(() => import("@/components/AlternatingFeature/AlternatingFeature"));
const DetailGrid = dynamic(() => import("@/components/DetailGrid/DetailGrid"));
const BoxContents = dynamic(() => import("@/components/BoxContents/BoxContents"));
const TechSpecs = dynamic(() => import("@/components/TechSpecs/TechSpecs"));

export default function ConcentratorTemplate({ product, mediaItems, config }) {
  const originalPrice = product.price?.price;
  const discountedPrice = product.price?.discountedPrice ?? originalPrice;
  const discountPercent = Math.round((1 - discountedPrice / originalPrice) * 100);
  const options = product.productOptions || [];
  const variants = product.variants || [];

  return (
    <>
      {/* Above fold — loads immediately */}
      <ViewContentEvent productName={product.name} price={discountedPrice} productId={product._id} />
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
              countdownBanner={config.countdownBanner}
            />
          </div>
        </div>
      </div>

      {/* Below fold — lazy loaded */}
      {config.quickStats && <QuickStats config={config.quickStats} />}
      {config.productFeatures && config.showProductFeatures !== false && <ProductFeatures config={config.productFeatures} />}
      {config.showWhySwitching !== false && <WhySwitching config={config.whySwitching} />}
      {config.oxygenOnTheGo && config.showOxygenOnTheGo !== false && <OxygenOnTheGo config={config.oxygenOnTheGo} />}
      {config.productDetails && config.showProductDetails !== false && <ProductDetails sections={config.productDetails} />}
      {config.outputChart && <OutputChart config={config.outputChart} />}
      {config.showStayPowered !== false && <StayPowered config={config.stayPowered} />}
      {config.comparisonTable && config.showComparisonTable !== false && <ComparisonTable config={config.comparisonTable} productId={product._id} variantId={variants?.[0]?._id} />}
      {config.productCompare && <ProductCompare config={config.productCompare} productId={product._id} variantId={variants?.[0]?._id} />}
      {config.videoSection && <VideoSection config={config.videoSection} />}
      {config.featureVideo && <VideoSection config={config.featureVideo} />}
      {config.heroFeature && <HeroFeature config={config.heroFeature} />}
      {config.heroFeatures?.map((hf, i) => <HeroFeature key={i} config={hf} />)}
      {config.featureSections?.map((fs, i) => <FeatureSection key={i} config={fs} />)}
      {config.alternatingFeature && <AlternatingFeature config={config.alternatingFeature} />}
      {config.featureSectionsAfter?.map((fs, i) => <FeatureSection key={i} config={fs} />)}
      {config.detailGrid && <DetailGrid config={config.detailGrid} />}
      {config.featureSectionsFinal?.map((fs, i) => <FeatureSection key={i} config={fs} />)}
      {config.boxContents && <BoxContents config={config.boxContents} />}
      {config.techSpecs && <TechSpecs config={config.techSpecs} />}
      {config.additionalInfo && config.showAdditionalInfo !== false && <AdditionalInfo config={config.additionalInfo} />}
      {config.insideBox && config.showInsideBox !== false && <InsideBox config={config.insideBox} />}
      {config.showCtaBanner !== false && <CTABanner config={config.ctaBanner} />}
      <Reviews csvUrl={config.reviewsCsv} />
      {config.showTrustedBy !== false && <TrustedBy />}
      {config.productFaq && config.showProductFaq !== false && <ProductFAQ faqs={config.productFaq} />}
      {config.showContactBar !== false && <ContactBar />}
    </>
  );
}
