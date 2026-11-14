import product from "./1-7lmin-smart-portable-oxygen-concentrator-10-hours-battery-adjustable-flow";

const files = "https://thepurio.com/cdn/shop/files/";
const videos = "https://thepurio.com/cdn/shop/videos/c/vp/";
const settings = product.productDetails[4];
const batteryLabels = new Set(["Battery Life", "Charging Time", "Power Input", "Battery Capacity"]);

export default {
  gallery: [
    "1_7LPortableproductpageT1.webp",
    "1_7LPortableproductpageT2.webp",
    "1_7LPortableproductpageT3.webp",
    "1_7LPortableproductpageT4.webp",
  ].map((file) => ({ type: "image", url: files + file })),
  productBullets: product.productBullets,
  reviewsCsv: product.reviewsCsv,
  quickStats: {
    items: [
      { title: "Smart Pulse Delivery", icon: files + "Smart_Pulse_Delivery_2x-8.png" },
      { title: "Up to 90% Purity", icon: files + "Up_to_90_Purity_2x-8.png" },
      { title: "6400mAh Battery", icon: files + "6400mAh_Battery_2x-8.png" },
      { title: "Advanced Filtration", icon: files + "Advanced_Filtration_2x-8.png" },
    ],
  },
  showWhySwitching: false,
  showCtaBanner: false,
  showTrustedBy: false,
  showContactBar: false,
  showStayPowered: false,
  videoSection: {
    layout: "stacked",
    heading: "Customer Review",
    videoUrl: videos + "ec993d83e1c14715ac67c48f0fd44ed6/ec993d83e1c14715ac67c48f0fd44ed6.HD-1080p-4.8Mbps-97174234.mp4",
    poster: files + "preview_images/ec993d83e1c14715ac67c48f0fd44ed6.thumbnail.0000000000_1600x.jpg",
  },
  featureVideo: {
    layout: "stacked",
    heading: "See the 1–7L in action",
    videoUrl: videos + "41b1426a69014aa0aa576f3da50784dc/41b1426a69014aa0aa576f3da50784dc.SD-480p-0.9Mbps-97269064.mp4",
    poster: files + "preview_images/41b1426a69014aa0aa576f3da50784dc.thumbnail.0000000000_1200x.jpg",
  },
  featureSections: [
    { heading: settings.heading, subtext: settings.content, image: files + "Oxygen_Concentrator_Settings_Infographic_1.webp", mobileImage: files + "Oxygen_Concentrator_Settings_Guide.png" },
    { heading: "Oxygen Purity", subtext: product.additionalInfo.specs[1].value, image: files + "Oxygen_Purifier_Purity_Levels.webp", mobileImage: files + "Oxygen_Purity_Levels_Infographic.webp" },
  ],
  alternatingFeature: {
    items: [
      { heading: "Portable Design", subtext: "The 1–7L weighs 1.4 kg excluding the battery and comes with a backpack.", image: files + "Compare_With_battle.webp" },
      { heading: "Replaceable Battery", subtext: "One battery provides up to 5 hours, depending on the selected setting.", image: files + "Extra_Power_For_The_Extra_Hours_3.webp", reverse: true },
    ],
  },
  detailGrid: {
    heading: "Designed to Keep Daily Use Simple",
    images: ["6400mAh_BATTERY_1.webp", "SWAPPABLE_BATTERY_2.webp", "CLEAR_DIGITAL_DISPLAY_2.webp", "MULTI-STAGE_FILTRATION_1.webp", "USB-C_FAST_CHARGING_3.webp"].map((file) => files + file),
  },
  featureSectionsFinal: [{ heading: "At Home or On the Go", image: files + "Go_Where_your_day_takes_you_2.webp", mobileImage: files + "Go_Where_your_day_takes_you_Mobile.webp" }],
  boxContents: { ...product.insideBox, image: files + "Everything_You_Need._Ready_To_Use..webp", heading: "Packed for Everyday Use" },
  techSpecs: {
    heading: "Technical Specifications",
    tabs: [
      { label: "Physical & Tech Details", rows: product.additionalInfo.specs.filter(({ label }) => !batteryLabels.has(label)) },
      { label: "Battery & Charging", rows: product.additionalInfo.specs.filter(({ label }) => batteryLabels.has(label)) },
    ],
  },
  faqWithImage: {
    heading: "Frequently Asked Questions",
    image: files + "Frequently_Asked_Questions_1.webp",
    faqs: product.productFaq.map(({ q, a }) => ({ question: q, answer: a })),
  },
  policyAccordion: {
    items: [{ label: "Disclaimer", text: product.additionalInfo.disclaimer }],
  },
};
