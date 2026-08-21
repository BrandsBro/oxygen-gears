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

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const { items } = await wixClient.products.queryProducts().find();
  const product = items.find((p) => p.slug === slug);
  if (!product) return notFound();

  const mediaItems = getMediaItems(product.media?.items);
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
              description={product.description}
            />
          </div>
        </div>
      </div>
      <ProductFeatures />
      <WhySwitching />
      <OxygenOnTheGo />
      <ProductDetails />
      <StayPowered />
      <AdditionalInfo />
      <InsideBox />
      <TrustedBy />
      <Reviews />
      <ProductFAQ />
      <ContactBar />
    </>
  );
}
