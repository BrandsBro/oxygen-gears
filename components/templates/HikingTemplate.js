import ImageGallery from "@/components/ProductShowcase/ImageGallery";
import ProductInfo from "@/components/ProductPage/ProductInfo";
import { ViewContentEvent } from "@/components/PixelEvents";
import QuickStats from "@/components/QuickStats/QuickStats";
import ProductCompare from "@/components/ProductCompare/ProductCompare";
import HeroFeature from "@/components/HeroFeature/HeroFeature";
import DetailGrid from "@/components/DetailGrid/DetailGrid";
import BoxContents from "@/components/BoxContents/BoxContents";
import TechSpecs from "@/components/TechSpecs/TechSpecs";
import FaqWithImage from "@/components/FaqWithImage/FaqWithImage";
import PolicyAccordion from "@/components/PolicyAccordion/PolicyAccordion";
import Reviews from "@/components/Reviews/Reviews";
import styles from "./HikingTemplate.module.css";

export default function HikingTemplate({ product, mediaItems, config }) {
  const title = config.title ?? product.name;
  const price = product.price?.price;
  const salePrice = product.price?.discountedPrice ?? price;
  const gallery = config.gallery?.length ? config.gallery : mediaItems;

  return (
    <main className={styles.page}>
      <ViewContentEvent productName={product.name} price={salePrice} productId={product._id} />
      <section id="hiking-product" className={styles.product}>
        {gallery.length > 0 && <div className={styles.gallery}>
          <ImageGallery mediaItems={gallery} productName={title} />
        </div>}
        <ProductInfo
          productName={title}
          originalPrice={price}
          discountedPrice={salePrice}
          options={product.productOptions ?? []}
          variants={product.variants ?? []}
          productId={product._id}
          bullets={config.productBullets ?? []}
          countdownBanner={config.countdownBanner}
        />
      </section>

      <QuickStats config={config.quickStats} />
      <ProductCompare config={config.productCompare} purchaseAnchor="#hiking-product" />
      {config.video && (
        <section className={styles.video}>
          <h2>{config.video.heading}</h2>
          <p>{config.video.description}</p>
          <video controls playsInline preload="none" poster={config.video.poster} src={config.video.src} aria-label={config.video.heading} />
        </section>
      )}

      {config.features?.map((feature) => {
        if (feature.banner) return <HeroFeature key={feature.id} config={feature.banner} />;
        return (
          <section key={feature.id} className={`${styles.feature} ${feature.split ? styles.split : ""} ${feature.tint ? styles.tint : ""}`}>
            {(feature.heading || feature.description) && <div>
              {feature.heading && <h2>{feature.heading}</h2>}
              {feature.description && <p>{feature.description}</p>}
            </div>}
            {feature.image && (
              <picture>
                {feature.mobileImage && <source media="(max-width: 767px)" srcSet={feature.mobileImage} />}
                <img src={feature.image} alt={feature.alt ?? ""} loading="lazy" />
              </picture>
            )}
          </section>
        );
      })}

      <DetailGrid config={config.detailGrid} />
      {config.lifestyle && (
        <section className={styles.feature}>
          <h2>{config.lifestyle.heading}</h2>
          <img src={config.lifestyle.image} alt="The portable concentrator in everyday settings" loading="lazy" />
        </section>
      )}
      <BoxContents config={config.boxContents} />
      <TechSpecs config={config.techSpecs} />
      <FaqWithImage config={config.faqWithImage} />
      <PolicyAccordion config={config.policyAccordion} />
      <Reviews csvUrl={config.reviewsCsv} />
    </main>
  );
}
