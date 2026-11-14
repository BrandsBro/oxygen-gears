import product from "./1-7lmin-smart-portable-oxygen-concentrator-10-hours-battery-adjustable-flow";

const [portability, purity, battery, outdoors, settings] = product.productDetails;
const batteryLabels = new Set(["Battery Life", "Charging Time", "Power Input", "Battery Capacity"]);

export default {
  productBullets: product.productBullets,
  reviewsCsv: product.reviewsCsv,
  quickStats: {
    items: product.features.items.map(({ label, icon }) => ({ title: label, icon })),
  },
  video: {
    heading: "See the 1–7L in action",
    src: product.videoUrl,
  },
  features: [
    { id: "settings", heading: "Seven Adjustable Pulse Settings", description: settings.content, image: settings.image },
    { id: "purity", heading: "Oxygen Purity", description: product.additionalInfo.specs[1].value, image: purity.image },
    { id: "battery", heading: "Replaceable Battery", description: "One battery provides up to 5 hours, depending on the selected setting.", image: battery.image },
    {
      id: "portability",
      panelHeading: "Designed to Go With You",
      heading: "Portable Design",
      description: "The 1–7L weighs 1.4 kg excluding the battery and comes with a backpack.",
      image: portability.image,
      alt: "Oxliv 1–7L portable oxygen concentrator",
      split: true,
      imageFirst: true,
      tint: true,
    },
  ],
  lifestyle: { heading: "At Home or On the Go", image: outdoors.image },
  boxContents: { ...product.insideBox, heading: "Packed for Everyday Use" },
  techSpecs: {
    heading: "Technical Specifications",
    tabs: [
      { label: "Physical & Tech Details", rows: product.additionalInfo.specs.filter(({ label }) => !batteryLabels.has(label)) },
      { label: "Battery & Charging", rows: product.additionalInfo.specs.filter(({ label }) => batteryLabels.has(label)) },
    ],
  },
  faqWithImage: {
    heading: "Frequently Asked Questions",
    image: portability.image,
    faqs: product.productFaq.map(({ q, a }) => ({ question: q, answer: a })),
  },
  policyAccordion: {
    items: [{ label: "Disclaimer", text: product.additionalInfo.disclaimer }],
  },
};
