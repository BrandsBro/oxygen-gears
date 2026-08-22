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
      {/* 1 — Product Hero */}
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

      {/* 2 — Flip Cards */}
      {config.productFeatures && <ProductFeatures config={config.productFeatures} />}

      {/* 3 — Why Switching icons */}
      {config.showWhySwitching !== false && <WhySwitching />}

      {/* 4 — Oxygen On The Go */}
      {config.oxygenOnTheGo && <OxygenOnTheGo config={config.oxygenOnTheGo} />}

      {/* 5 — Product Details left/right */}
      {config.productDetails && <ProductDetails sections={config.productDetails} />}

      {/* 6 — Stay Powered */}
      {config.showStayPowered !== false && <StayPowered />}

      {/* 7 — Additional Info accordion */}
      {config.additionalInfo && <AdditionalInfo config={config.additionalInfo} />}

      {/* 8 — Inside Box */}
      {config.insideBox && <InsideBox config={config.insideBox} />}

      {/* 9 — Trusted By */}
      <TrustedBy />

      {/* 10 — Reviews */}
      <Reviews csvUrl={config.reviewsCsv} />

      {/* 11 — Product FAQ */}
      {config.productFaq && <ProductFAQ faqs={config.productFaq} />}

      {/* 12 — Contact Bar */}
      <ContactBar />
    </>
  );
}
