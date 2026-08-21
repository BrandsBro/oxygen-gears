import { wixClient } from "@/lib/wixClient";
import { getMediaItems } from "@/lib/wixUtils";
import { notFound } from "next/navigation";
import productTemplates from "@/config/productTemplates";
import ConcentratorTemplate from "@/components/templates/ConcentratorTemplate";

// Add new templates here as you build them
const templates = {
  concentrator: ConcentratorTemplate,
  // battery: BatteryTemplate,
};

export default async function ProductPage({ params }) {
  const { slug } = await params;

  // 1. Get product from Wix
  const { items } = await wixClient.products.queryProducts().find();
  const product = items.find((p) => p.slug === slug);
  if (!product) return notFound();

  // 2. Load template + config for this slug
  const templateEntry = productTemplates[slug];
  let config = {};
  let templateName = "concentrator"; // default

  if (templateEntry) {
    templateName = templateEntry.template;
    const mod = await templateEntry.config();
    config = mod.default;
  }

  // 3. Pick the right template
  const Template = templates[templateName] || ConcentratorTemplate;

  // 4. Prepare media
  const imageItems = getMediaItems(product.media?.items);
  const mediaItems = config.videoUrl
    ? [{ type: "video", url: config.videoUrl, thumbnail: imageItems[0]?.url }, ...imageItems]
    : imageItems;

  return (
    <Template
      product={product}
      mediaItems={mediaItems}
      config={config}
    />
  );
}
