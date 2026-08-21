import { wixClient } from "@/lib/wixClient";
import { getMediaItems } from "@/lib/wixUtils";
import { notFound } from "next/navigation";
import productTemplates from "@/config/productTemplates";
import ConcentratorTemplate from "@/components/templates/ConcentratorTemplate";
import AccessoryTemplate from "@/components/templates/AccessoryTemplate";

const templates = {
  concentrator: ConcentratorTemplate,
  accessory: AccessoryTemplate,
};

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const { items } = await wixClient.products.queryProducts().find();
  const product = items.find((p) => p.slug === slug);
  if (!product) return notFound();

  let config = {};
  let templateName = "concentrator";

  if (productTemplates[slug]) {
    templateName = productTemplates[slug].template;
    const mod = await productTemplates[slug].config();
    config = mod.default;
  }

  const Template = templates[templateName] || ConcentratorTemplate;

  const imageItems = getMediaItems(product.media?.items);
  const mediaItems = config.videoUrl
    ? [{ type: "video", url: config.videoUrl, thumbnail: imageItems[0]?.url }, ...imageItems]
    : imageItems;

  return (
    <Template
      product={product}
      mediaItems={mediaItems}
      config={config}
      slug={slug}
    />
  );
}
