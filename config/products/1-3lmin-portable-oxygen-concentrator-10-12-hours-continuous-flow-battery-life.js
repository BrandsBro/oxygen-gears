const product = {
  template: "concentrator",

  // ── SECTION VISIBILITY FLAGS ──
  showWhySwitching: false,
  showStayPowered: true,
  showProductFeatures: false,
  showOxygenOnTheGo: true,
  showProductDetails: false,
  showComparisonTable: false,
  showAdditionalInfo: false,
  showInsideBox: false,
  showProductFaq: false,
  showCtaBanner: false,
  showTrustedBy: false,
  showContactBar: false,

  // ── HERO FEATURE ──
  heroFeature: {
    heading: "Only 1.1 lbs. Go Anywhere.",
    highlight: "Only 1.1 lb",
    highlightColor: "#e05a3a",
    subtext: "Lighter than a can of soup.",
    subtextColor: "#58ACAF",
    bullets: [
      "Fits inside the included adjustable carry bag with ease.",
      "Three simple settings, one straightforward button.",
    ],
    bgImage: "https://thepurio.com/cdn/shop/files/lightweight-section-2-6ad56daadac73_1.webp",
    mobileImage: "https://thepurio.com/cdn/shop/files/lightweight-section-2-6ad56daadac73_1.webp",
  },

  // ── QUICK STATS ──
  quickStats: {
    items: [
      {
        icon: "https://thepurio.com/cdn/shop/files/Icon_Tank-Free_-_1.1_lbs_Lightweight_Design_ba802258-bdc1-42b6-a62a-e3cdbe0737a9.png",
        title: "1.1 lb / 0.5 kg",
        sub: "Lighter than most water bottles.",
      },
      {
        icon: "https://thepurio.com/cdn/shop/files/Icon_1-3L_Adjustable_Continuous_Flow_852389d6-0ede-4d04-82b9-3e28415f3ce2.png",
        title: "3 Flow Settings",
        sub: "Continuous output at 1, 2, or 3 L/min.",
      },
      {
        icon: "https://thepurio.com/cdn/shop/files/Icon_30__2__Oxygen_Concentration_45e9a841-841f-460f-85e7-87a5e66c6346.png",
        title: "30% ±2% Purity",
        sub: "Consistent across all three settings.",
      },
      {
        icon: "https://thepurio.com/cdn/shop/files/Icon_8-10_Hour_Long-Lasting_Battery_33e750a7-7825-4db1-8eb7-81195637eb37.png",
        title: "5600mAh Battery",
        sub: "Up to 10–12 hours per charge.",
      },
    ],
  },

  // ── PRODUCT COMPARE ──
  productCompare: {
    heading: "What Sets Oxliv Apart",
    subtext: "See how the Oxliv 1-3L stacks up against other portable oxygen concentrators under $1000.",
    image: "https://thepurio.com/cdn/shop/files/t0-3-6ad56dae85065.webp",
    imageAlt: "Oxliv 1-3L Portable Oxygen Concentrator",
    rows: [
      { feature: "Device Weight", ours: "1.1 lbs", theirs: "Heavier design" },
      { feature: "Flow Settings", ours: "1–3 L/min", theirs: "Complicated output levels" },
      { feature: "Continuous Output", ours: "All 3 settings", theirs: "Varies with products" },
      { feature: "Battery Runtime", ours: "Up to 12 hours", theirs: "Shorter runtime" },
      { feature: "Noise Level", ours: "≤35 dB", theirs: "Louder operation" },
      { feature: "Anion Function", ours: "✓", theirs: "✕" },
      { feature: "Carry Bag", ours: "Free", theirs: "Sold Separately" },
      { feature: "Tank Refills", ours: "Never needed", theirs: "May be required" },
    ],
  },

  // ── COUNTDOWN BANNER ──
  countdownBanner: {
    image: "https://thepurio.com/cdn/shop/files/fall-banner-image-6ad56daa97857_1200x.webp",
    imageAlt: "Limited Time Sale — 1-3L Portable Oxygen Concentrator",
    disclaimer: "This is NOT a medical-grade oxygen device. Designed for comfort and low-flow support only. If you need prescribed oxygen therapy, consult your doctor.",
  },

  // ── FEATURE SECTIONS ──
  featureSections: [
    {
      heading: "Three Settings. Steady Continuous Flow.",
      subtext: "Choose between three continuous-flow settings using one simple control. The concentrator delivers uninterrupted output at approximately 30% ±2% oxygen concentration, without complicated menus or difficult setup. The simple controls make flow adjustments easy wherever you use the device.",
      image: "https://thepurio.com/cdn/shop/files/three-setting-section-6ad56db5e5d80.webp",
    },
    {
      heading: "High Purity, Simple Control.",
      subtext: "30% ±2% oxygen concentration is delivered consistently across all three settings. No complicated purity drops at higher output. The steady concentration makes it easier to use the device throughout the day without adjusting for purity changes.",
      image: "https://thepurio.com/cdn/shop/files/oxygen-concentration-section-6ad56dad4a372.webp",
    },
  ],

  // ── FEATURE SECTIONS AFTER ──
  featureSectionsAfter: [
    {
      heading: "Smaller Than You Expect.",
      subtext: "This compact device provides continuous oxygen output through three adjustable settings. At only 1.1 lbs, it fits easily inside the included carry bag. The quiet motor, built-in battery, and three power options support use at home, in the car, and outdoors.",
      image: "https://thepurio.com/cdn/shop/files/airflow-section-6ad56da3876ac.webp",
    },
  ],

  // ── ALTERNATING FEATURE ──
  alternatingFeature: {
    heading: "Continuous Flow — Oxygen Without Pauses",
    items: [
      {
        image: "https://thepurio.com/cdn/shop/files/Continuous_Flow_Made_Simple_4.webp",
        heading: "Continuous Flow: Oxygen Without Pauses",
        subtext: "Continuous-flow delivery provides a steady stream during inhalation and exhalation. It does not wait to detect each breath. You receive uninterrupted output that remains simple to operate throughout the day.",
        reverse: false,
      },
      {
        image: "https://thepurio.com/cdn/shop/files/battery-section-1-6ad56da463588.webp",
        heading: "Built for Longer Days",
        subtext: "The built-in 5600mAh battery delivers up to 12 hours per charge. Enjoy more time away from outlets with reliable power for daily plans. Runtime depends on the selected flow level and operating conditions.",
        reverse: true,
      },
    ],
  },

  // ── STAY POWERED ──
  stayPowered: {
    heading: "3 Ways To Stay Powered",
    subtext: "Use wall power at home, USB charging in the car, and built-in battery power outdoors. Three simple options keep the device ready wherever you go.",
    items: [
      { image: "https://thepurio.com/cdn/shop/files/Wall_Outlet.webp", label: "Wall Outlet" },
      { image: "https://thepurio.com/cdn/shop/files/USB_charging.webp", label: "USB / Car Charging" },
      { image: "https://thepurio.com/cdn/shop/files/Built-in_Battery.webp", label: "Built-in Battery" },
    ],
  },

  // ── OXYGEN ON THE GO ──
  oxygenOnTheGo: {
    heading: "Built For Everyday Outings",
    subtext: "Daily plans become easier with a device made for movement. Carry it in the car, during a shopping trip, on a walk, or just reading at home — up to 12 hours of battery keeps you going.",
    items: [
      { image: "https://thepurio.com/cdn/shop/files/Driving_9b57765e-07a6-4595-9280-bca18716a163.webp", label: "Driving" },
      { image: "https://thepurio.com/cdn/shop/files/Reading_5aa4f09f-0537-4a20-b28f-2666fe436a91.webp", label: "Reading" },
      { image: "https://thepurio.com/cdn/shop/files/Shopping_3fe72984-8cf4-4ca8-af2e-36423b9d582b.webp", label: "Shopping" },
      { image: "https://thepurio.com/cdn/shop/files/Walking_2d40ea3f-807f-4dd7-b7cb-bcd7f4578640.webp", label: "Walking" },
    ],
  },

  // ── POLICY ACCORDION ──
  policyAccordion: {
    items: [
      {
        label: "Free Shipping",
        text: "All orders ship free within the United States. Your device leaves our facility the same or next business day. Standard delivery takes 8–11 business days. You will receive a tracking number by email once your order ships.",
      },
      {
        label: "Disclaimer",
        text: "This device is intended for general wellness, comfort, and lifestyle use only. It is not a medical device and is not designed to diagnose, treat, cure, or prevent any disease or health condition. It should not replace professional medical advice or any device prescribed by a healthcare provider. Consult a licensed physician before use.",
      },
    ],
  },

  // ── FAQ WITH IMAGE ──
  faqWithImage: {
    heading: "Frequently Asked Questions",
    subtext: "Quick answers about output, battery power, noise, controls, and everyday operation.",
    image: "https://thepurio.com/cdn/shop/files/Screenshot_616.webp",
    faqs: [
      {
        question: "Does the concentrator require tank refills?",
        answer: "No. The device draws in surrounding air and processes it while operating. There is no oxygen tank to refill, exchange, or store. Keep the air intake clear whenever the concentrator is running.",
      },
      {
        question: "Does it provide continuous output?",
        answer: "Yes. The concentrator provides continuous output at all three settings. Select 1, 2, or 3 L/min using the front control. Output continues without waiting for an inhale to trigger a pulse.",
      },
      {
        question: "How long does the battery last?",
        answer: "The built-in 5600mAh battery provides approximately 10–12 hours per charge. Runtime may become shorter at higher settings or in demanding conditions.",
      },
      {
        question: "Can it operate while connected to wall power?",
        answer: "Yes. Connect the supplied AC adapter to a compatible 100–240V outlet. Place the device on a stable surface and keep the intake and outlet clear before turning it on.",
      },
      {
        question: "Can it be powered inside a vehicle?",
        answer: "Yes. The device supports vehicle charging through its USB power connection. Secure the concentrator before driving and route the cable safely.",
      },
      {
        question: "How loud is the concentrator?",
        answer: "The operating noise is rated at no more than 35 dB. This low sound level makes the device less distracting during conversations, reading, television, or rest.",
      },
      {
        question: "Does the filter require regular replacement?",
        answer: "The product uses an automatic cleaning system, so the filter does not require routine replacement under normal conditions. Keep the intake free from visible dust.",
      },
    ],
  },

  // ── TECH SPECS ──
  techSpecs: {
    heading: "Technical Specifications",
    tabs: [
      {
        label: "Physical & Tech Details",
        rows: [
          { label: "Product Type", value: "1-3L Portable Oxygen Concentrator" },
          { label: "Delivery Type", value: "Continuous flow" },
          { label: "Flow Settings", value: "1, 2, and 3 L/min" },
          { label: "Oxygen Purity", value: "30% ±2%" },
          { label: "Device Weight", value: "1.1 lbs / 0.5 kg" },
          { label: "Dimensions", value: "5.51 × 4.25 × 2.64 inches" },
          { label: "Noise Level", value: "≤35 dB" },
          { label: "Control System", value: "Two-button control" },
        ],
      },
      {
        label: "Battery & Charging",
        rows: [
          { label: "Battery Capacity", value: "5600mAh (built-in)" },
          { label: "Battery Runtime", value: "Up to 10–12 hours" },
          { label: "Charging Sources", value: "Wall adapter (AC), USB / car charging" },
        ],
      },
      {
        label: "Warranty",
        rows: [
          { label: "Warranty and Support", value: "1 year" },
          { label: "Coverage", value: "Device defects" },
          { label: "Support", value: "24/7 customer support via email" },
        ],
      },
    ],
  },

  // ── BOX CONTENTS ──
  boxContents: {
    heading: "Everything You Need. Ready To Use.",
    image: "https://thepurio.com/cdn/shop/files/Portable_Oxygen_Concentrator_Kit_with_Accessories.webp",
    items: [
      "1-3L oxygen concentrator",
      "Adjustable carry bag",
      "AC wall charger",
      "USB charging cable",
      "Oxygen hose",
      "User manual",
    ],
  },

  // ── DETAIL GRID ──
  detailGrid: {
    heading: "Every Detail Built With Purpose",
    images: [
      "https://thepurio.com/cdn/shop/files/1_2.webp",
      "https://thepurio.com/cdn/shop/files/2_2.webp",
      "https://thepurio.com/cdn/shop/files/3_5.webp",
      "https://thepurio.com/cdn/shop/files/4_2.webp",
      "https://thepurio.com/cdn/shop/files/5_3.webp",
    ],
  },

  // ── FEATURE SECTIONS FINAL ──
  featureSectionsFinal: [
    {
      heading: "Small Enough to Go Anywhere",
      image: "https://thepurio.com/cdn/shop/files/LIFESTYLE_GRID.webp",
    },
  ],

  // ── REVIEWS ──
  reviewsCsv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRyh8SmXs3jKRu0WX3OYbdkalm0SmEPqlnGMWvyeuSCct9zAK1zDLd9lrSW0zbMoFc3KTmaxZe29eBu/pub?output=csv",

  // ── BULLETS ──
  productBullets: [
    "3 Continuous-Flow Settings (1–3 L/min)",
    "Ultra-Light 1.1 lb Design",
    "Up to 10–12 Hours Battery Life",
    "30% ±2% Oxygen Concentration",
    "Quiet Operation at ≤35 dB",
    "Built-in Anion Function",
  ],

  // ── PRODUCT FAQ ──
  productFaq: [
    { q: "How long does the battery last?", a: "The built-in 5600mAh battery provides up to 10–12 hours of use. Actual runtime can vary based on the selected flow level, battery condition, and temperature." },
    { q: "Can I adjust the output?", a: "Yes, the device offers 3 continuous-flow levels. Use the simple button to move between 1, 2, or 3 L/min." },
    { q: "How much noise does it make?", a: "The device operates at ≤35 dB — quiet enough for reading, TV, conversations, and rest." },
    { q: "Can I travel with it?", a: "Yes, the 1.1 lb body and included carry bag make it one of the lightest portable concentrators available. For air travel, confirm battery requirements with your airline." },
    { q: "What comes inside the box?", a: "Your order includes the device, AC wall charger, USB charging cable, oxygen hose, adjustable carry bag, and user manual." },
    { q: "What power options are available?", a: "The device supports wall power, USB/car charging, and built-in battery power." },
  ],
};

export default product;
