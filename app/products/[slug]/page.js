import { wixClient } from "@/lib/wixClient";
import { getMediaItems } from "@/lib/wixUtils";
import { notFound } from "next/navigation";
import productTemplates from "@/config/productTemplates";
import ConcentratorTemplate from "@/components/templates/ConcentratorTemplate";
import AccessoryTemplate from "@/components/templates/AccessoryTemplate";

import HikingTemplate from "@/components/templates/HikingTemplate";

import ReferenceProductTemplate from "@/components/templates/ReferenceProductTemplate";

const templates = {
  reference: ReferenceProductTemplate,
  hiking: HikingTemplate,
  concentrator: ConcentratorTemplate,
  accessory: AccessoryTemplate,
};

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const entry = productTemplates[slug];
  const { items } = await wixClient.products.queryProducts().find();
  const product = items.find((p) => p.slug === (entry?.productSlug ?? slug));
  if (!product) return notFound();

  let config = {};
  let templateName = "concentrator";

  if (entry) {
    templateName = entry.template;
    const mod = await entry.config();
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
export const revalidate = 3600;

export async function generateStaticParams() {
  const { createClient, OAuthStrategy } = await import("@wix/sdk");
  const { products } = await import("@wix/stores");
  const client = createClient({
    modules: { products },
    auth: OAuthStrategy({ clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID }),
  });
  const { items } = await client.products.queryProducts().find();
  const slugs = new Set(items.map((p) => p.slug));
  for (const [slug, entry] of Object.entries(productTemplates)) {
    if (entry.productSlug && slugs.has(entry.productSlug)) slugs.add(slug);
  }
  return [...slugs].map((slug) => ({ slug }));
}
