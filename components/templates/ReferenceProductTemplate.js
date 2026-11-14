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
import styles from "./ReferenceProductTemplate.module.css";

function Media({ section }) {
  if (section.video) {
    return <video className={styles.media} src={section.video} poster={section.poster}
      controls playsInline preload="metadata" aria-label={section.heading} />;
  }

  return (
    <picture>
      {section.mobileImage && <source media="(max-width: 767px)" srcSet={section.mobileImage} />}
      <img className={styles.media} src={section.image} alt={section.alt ?? section.heading ?? ""} loading="lazy" />
    </picture>
  );
}

export default function ReferenceProductTemplate({ product, mediaItems, config }) {
  const title = config.title ?? product.name;
  const price = product.price?.discountedPrice ?? product.price?.price;
  const gallery = config.gallery?.length ? config.gallery : mediaItems;

  return (
    <main className={styles.page}>
      <ViewContentEvent productName={product.name} price={price} productId={product._id} />
      <section className={styles.product} id="reference-product">
        <div className={styles.gallery}>
          <ImageGallery mediaItems={gallery} productName={title} numberedNavigation />
        </div>
        <ProductInfo
          productName={title}
          originalPrice={product.price?.price}
          discountedPrice={price}
          options={product.productOptions ?? []}
          variants={product.variants ?? []}
          productId={product._id}
          bullets={config.productBullets ?? []}
          presentation="hiking"
          countdownBanner={config.countdownBanner}
        />
      </section>
      {config.sections.map((section) => {
        const sectionKey = section.id;
        switch (section.type) {
          case "stats":
            return <QuickStats key={sectionKey} config={section} />;
          case "compare":
            return <ProductCompare key={sectionKey} config={section} purchaseAnchor="#reference-product" />;
          case "banner":
            return <HeroFeature key={sectionKey} config={section} />;
          case "grid":
            return <DetailGrid key={sectionKey} config={section} />;
          case "box":
            return <BoxContents key={sectionKey} config={section} />;
          case "specs":
            return <TechSpecs key={sectionKey} config={section} />;
          case "faq":
            return <FaqWithImage key={sectionKey} config={section} />;
          case "policies":
            return <PolicyAccordion key={sectionKey} config={section} />;
          case "reviews":
            return <Reviews key={sectionKey} csvUrl={section.csvUrl} />;
          default:
            return (
              <section key={sectionKey} className={`${styles.section} ${section.split ? styles.split : ""} ${section.reverse ? styles.reverse : ""}`}
                style={{ backgroundColor: section.background }}>
                <div className={styles.copy}>
                  <h2>{section.heading}</h2>
                  {section.description && <p>{section.description}</p>}
                </div>
                <Media section={section} />
              </section>
            );
        }
      })}
    </main>
  );
}
