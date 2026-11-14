import product from "./1-7lmin-smart-portable-oxygen-concentrator-10-hours-battery-adjustable-flow";

const files = "https://thepurio.com/cdn/shop/files/";
const videoRoot = "https://thepurio.com/cdn/shop/videos/c/vp/";
const image = (file) => files + file;
const [portability, purity, battery, outdoors, settings] = product.productDetails;

export default {
  title: "1–7L Portable Oxygen Concentrator | Pulse Flow | Up to 10-Hour Battery | 90% O₂ Purity",
  gallery: [
    "Portable_Oxygen_Concentrator_Savings_3.webp",
    "1_7LPortableproductpageT1.webp",
    "1_7LPortableproductpageT2.webp",
    "1_7LPortableproductpageT3.webp",
    "1_7LPortableproductpageT4.webp",
  ].map((file) => ({ type: "image", url: image(file) })),
  productBullets: product.productBullets,
  countdownBanner: {
    image: image("Early_Fall_Freedom_Sale_1200x.webp"),
    imageAlt: "Early Fall Freedom Sale — 1–7L portable oxygen concentrator",
    disclaimer: "This is NOT a medical-grade oxygen device. Designed for comfort and low-flow support only. If you need prescribed oxygen therapy, consult your doctor.",
  },
  sections: [
    {
      id: "quick-stats", type: "stats",
      items: [
        { title: "Smart Pulse Delivery", icon: image("Smart_Pulse_Delivery_2x-8.png") },
        { title: "Up to 90% Purity", icon: image("Up_to_90_Purity_2x-8.png") },
        { title: "6400mAh Battery", icon: image("6400mAh_Battery_2x-8.png") },
        { title: "Advanced Filtration", icon: image("Advanced_Filtration_2x-8.png") },
      ],
    },
    {
      id: "comparison", type: "compare",
      heading: "More Features for Everyday Use",
      image: image("Product_1.png"),
      imageAlt: "1–7L portable oxygen concentrator",
      rows: product.additionalInfo.specs.slice(0, 7).map(({ label, value }) => ({
        feature: label, ours: value, theirs: "Varies by model",
      })),
    },
    {
      id: "customer-video", type: "media", heading: "See What Our Customer Thinks",
      video: videoRoot + "ec993d83e1c14715ac67c48f0fd44ed6/ec993d83e1c14715ac67c48f0fd44ed6.HD-1080p-4.8Mbps-97174234.mp4",
      poster: image("preview_images/ec993d83e1c14715ac67c48f0fd44ed6.thumbnail.0000000000_1600x.jpg"),
    },
    {
      id: "design-video", type: "media", heading: "Smart Support in a Lighter Design",
      split: true, reverse: true,
      video: videoRoot + "41b1426a69014aa0aa576f3da50784dc/41b1426a69014aa0aa576f3da50784dc.SD-480p-0.9Mbps-97269064.mp4",
      poster: image("preview_images/41b1426a69014aa0aa576f3da50784dc.thumbnail.0000000000_1200x.jpg"),
    },
    {
      id: "purity", type: "media", heading: "High Purity Across Seven Levels",
      description: purity.content,
      image: image("Oxygen_Purifier_Purity_Levels.webp"),
      mobileImage: image("Oxygen_Purity_Levels_Infographic.webp"),
    },
    {
      id: "lightweight", type: "banner", heading: "Built Light for Daily Life",
      highlight: "Only 1.4 kg",
      subtext: "Device weight excluding battery",
      bgImage: image("Compare_With_battle.webp"),
      mobileImage: image("Compare_With_battle.webp"),
    },
    {
      id: "battery", type: "media", heading: "Power for Plans Away From Home",
      description: battery.content,
      image: image("Extra_Power_For_The_Extra_Hours_3.webp"),
      mobileImage: image("Extra_Power_For_The_Extra_Hours_Mobile_1.webp"),
    },
    {
      id: "pulse", type: "media", heading: "PULSE DELIVERY: OXYGEN WITH EACH INHALE",
      description: product.productFeatures.description,
      image: image("Pulse_Dose_1.webp"), split: true,
    },
    {
      id: "backup", type: "media", heading: "FIXED-FREQUENCY BACKUP: TIMED DELIVERY WHEN NEEDED",
      description: product.additionalInfo.features[2],
      image: image("Backup_Image.webp"), split: true, reverse: true,
    },
    {
      id: "settings", type: "media", heading: "Seven Settings. Simple Control.",
      description: settings.content,
      image: image("Oxygen_Concentrator_Settings_Infographic_1.webp"),
      mobileImage: image("Oxygen_Concentrator_Settings_Guide.png"),
    },
    {
      id: "filtration", type: "media", heading: "Cleaner Air Starts Inside the Device",
      image: image("Six_Alerts._Clear_Signals_3.webp"),
      mobileImage: image("Seven_Alerts._Clear_Signals_Mobile_1.webp"),
    },
    {
      id: "details", type: "grid", heading: "Designed to Keep Daily Use Simple",
      images: ["6400mAh_BATTERY_1.webp", "SWAPPABLE_BATTERY_2.webp", "CLEAR_DIGITAL_DISPLAY_2.webp", "MULTI-STAGE_FILTRATION_1.webp", "USB-C_FAST_CHARGING_3.webp"].map(image),
    },
    {
      id: "lifestyle", type: "media", heading: "From Home to Open Roads",
      image: image("Go_Where_your_day_takes_you_2.webp"),
      mobileImage: image("Go_Where_your_day_takes_you_Mobile.webp"),
    },
    {
      id: "included", type: "box", heading: "Everything Packed and Ready",
      image: image("Everything_You_Need._Ready_To_Use..webp"),
      items: product.insideBox.items,
    },
    {
      id: "specifications", type: "specs", heading: "Technical Specifications",
      tabs: [
        { label: "Physical & Tech Details", rows: product.additionalInfo.specs.filter(({ label }) => !/Battery|Charging|Power Input/.test(label)) },
        { label: "Battery & Charging", rows: product.additionalInfo.specs.filter(({ label }) => /Battery|Charging|Power Input/.test(label)) },
      ],
    },
    {
      id: "faq", type: "faq", imageLayout: "balanced", heading: "Frequently Asked Questions",
      image: image("Frequently_Asked_Questions_1.webp"),
      faqs: product.productFaq.map(({ q, a }) => ({ question: q, answer: a })),
    },
    {
      id: "policies", type: "policies",
      items: [{ label: "Disclaimer", text: product.additionalInfo.disclaimer }],
    },
    { id: "reviews", type: "reviews", csvUrl: product.reviewsCsv },
  ],
};
