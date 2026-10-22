const product = {
  template: "concentrator",

  // ── SECTION VISIBILITY FLAGS ──
  showWhySwitching: false,
  showStayPowered: true,
  showProductFeatures: false,
  showOxygenOnTheGo: false,
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
    heading: "10 Settings. Three Delivery Modes.",
    highlight: "Only 3.75 lb",
    highlightColor: "#e05a3a",
    subtext: "The most settings in one portable device.",
    subtextColor: "#58ACAF",
    bullets: [
      "Pulse, fixed-frequency, and continuous flow in one compact device.",
      "90% ±6% purity stays consistent across every setting.",
    ],
    bgImage: "https://thepurio.com/cdn/shop/files/Three_Delivery_Modes.webp",
    mobileImage: "https://thepurio.com/cdn/shop/files/Three_Delivery_Modes.webp",
  },

  // ── QUICK STATS ──
  quickStats: {
    items: [
      {
        icon: "https://thepurio.com/cdn/shop/files/Three_Delivery_Modes.png",
        title: "3 Delivery Modes",
        sub: "Pulse, fixed-frequency, and continuous.",
      },
      {
        icon: "https://thepurio.com/cdn/shop/files/90__3__Purity.webp",
        title: "90% ±6% Purity",
        sub: "Consistent across all 10 settings.",
      },
      {
        icon: "https://thepurio.com/cdn/shop/files/Up_to_12_Hours_1.webp",
        title: "Up To 24 Hours",
        sub: "With two 18-cell batteries.",
      },
      {
        icon: "https://thepurio.com/cdn/shop/files/yo.png",
        title: "10 Output Settings",
        sub: "Choose from P1 through P10.",
      },
    ],
  },

  // ── PRODUCT COMPARE ──
  productCompare: {
    heading: "What Sets Oxliv Apart",
    subtext: "See how the Oxliv 1-10L stacks up against other portable oxygen concentrators under $1000.",
    image: "https://thepurio.com/cdn/shop/files/T0_2_1.webp",
    imageAlt: "Oxliv 1-10L Portable Oxygen Concentrator",
    rows: [
      { feature: "Adjustable Settings", ours: "10 settings", theirs: "Commonly 3–8 settings" },
      { feature: "Delivery Options", ours: "Pulse, fixed-frequency, continuous", theirs: "Usually one or two modes" },
      { feature: "Continuous Flow", ours: "Up to 2000 ml/min", theirs: "Usually below 1.5L/min" },
      { feature: "Published Purity", ours: "90% ±6% at every level", theirs: "Lower purity at higher output" },
      { feature: "Maximum Battery Time", ours: "Up to 12 hours (single)", theirs: "Commonly 2–6 hours" },
      { feature: "Carry Bag", ours: "Free", theirs: "Sold separately" },
      { feature: "Included Battery", ours: "18-cell Lithium-Ion", theirs: "8–10 cell Lead-acid" },
    ],
  },

  // ── COUNTDOWN BANNER ──
  countdownBanner: {
    image: "https://thepurio.com/cdn/shop/files/FINAL_FALL_SALE_COUNTDOWN_1200x.webp",
    imageAlt: "Limited Time Sale — 1-10L Portable Oxygen Concentrator",
    disclaimer: "This is NOT a medical-grade oxygen device. Designed for comfort and low-flow support only. If you need prescribed oxygen therapy, consult your doctor.",
  },

  // ── FEATURE SECTIONS ──
  featureSections: [
    {
      heading: "High Purity Across 10 Settings",
      subtext: "Adjust the concentrator from P1 through P10 without losing the stated purity range. Every setting provides 90% ±6% oxygen concentration. The rated output and delivery method change between levels, giving you more control while keeping oxygen concentration consistent across the complete range.",
      image: "https://thepurio.com/cdn/shop/files/Oxygen_Concentrator_Purity_Infographic_6.webp",
    },
    {
      heading: "Six Alerts. One Clear System.",
      subtext: "Built-in alerts monitor six important conditions while the concentrator operates. If something needs attention, the screen flashes and an audible signal sounds. Clear warning messages help you identify the issue quickly.",
      image: "https://thepurio.com/cdn/shop/files/Advanced_Alert_Section.webp",
      fullWidth: true,
    },
  ],

  // ── FEATURE SECTIONS AFTER ──
  featureSectionsAfter: [
    {
      heading: "Oxygen Purity Across All Settings",
      subtext: "Each of the 10 settings maintains 90% ±6% purity. Higher settings increase output volume, not purity loss — giving you the flexibility to choose the flow that fits your day without compromising on oxygen quality.",
      image: "https://thepurio.com/cdn/shop/files/Oxygen_Purity_Across_All_Settings.webp",
    },
  ],

  // ── ALTERNATING FEATURE ──
  alternatingFeature: {
    heading: "One Device. Three Flow Modes.",
    items: [
      {
        image: "https://thepurio.com/cdn/shop/files/Intelligent_Pulse_Oxygen_Delivery.webp",
        heading: "Pulse Flow: Output With Each Inhale",
        subtext: "Levels P1–P8 release a measured pulse with each detected inhale. This targeted pattern helps conserve battery power while keeping oxygen delivery responsive throughout daily routines.",
        reverse: false,
      },
      {
        image: "https://thepurio.com/cdn/shop/files/Fixed-Frequency_Delivery_1546x1200_4927b39b-ddd5-4e54-a1ed-290852eeefd8.webp",
        heading: "Fixed Frequency: A Steady Timed Pattern",
        subtext: "Level P9 releases oxygen at regular timed intervals. The steady pattern works without inhale detection and gives you predictable delivery that remains simple to understand and use.",
        reverse: true,
      },
      {
        image: "https://thepurio.com/cdn/shop/files/Continuous_Oxygen_Flow_Banner.png",
        heading: "Continuous Flow: Output Without Pauses",
        subtext: "Level P10 provides a constant 2 L/min stream through inhalation and exhalation. The uninterrupted pattern removes breath detection and delivers steady output throughout the day.",
        reverse: false,
      },
    ],
  },

  // ── STAY POWERED ──
  stayPowered: {
    heading: "Stay Powered Anywhere: 3 Ways",
    subtext: "Life does not stop at the front door. Whether you are relaxing at home, driving to visit family, or enjoying a walk in the park, switch between power sources in seconds.",
    items: [
      { image: "https://thepurio.com/cdn/shop/files/Wall_Outlet.webp", label: "Wall Outlet" },
      { image: "https://thepurio.com/cdn/shop/files/USB_charging.webp", label: "Car Charging" },
      { image: "https://thepurio.com/cdn/shop/files/Built-in_Battery.webp", label: "18-Cell Battery" },
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
    subtext: "Settings, charging, filter replacement, storage, and common operating questions.",
    image: "https://thepurio.com/cdn/shop/files/17._FAQs_1.webp",
    faqs: [
      {
        question: "What does '1–10L' mean?",
        answer: "The product name refers to ten selectable settings. It does not mean every level delivers its number in liters per minute. Rated output ranges from 0.15 L/min at P1 to 2 L/min at P10.",
      },
      {
        question: "How long does the 18-cell battery last?",
        answer: "The included battery provides up to 12 hours at P1. Higher settings use more power. Runtime falls to approximately four hours at P9 and approximately 3.75 hours during P10 continuous-flow operation.",
      },
      {
        question: "Can the concentrator operate while plugged in?",
        answer: "Yes. The concentrator supports wall power and compatible vehicle power. External power can support longer use when an outlet is available.",
      },
      {
        question: "How long does the battery take to charge?",
        answer: "A full charge takes approximately five to six hours. Charging time can change with the power source, remaining battery level, and temperature.",
      },
      {
        question: "When should I replace the filter?",
        answer: "Inspect the intake filter for visible dust or restricted airflow. Turn off the concentrator and disconnect every power source before opening the filter compartment.",
      },
      {
        question: "What should I do when battery runtime becomes shorter?",
        answer: "Higher settings reduce runtime. Temperature, battery age, and charging habits can also affect duration. Fully charge the battery and compare its performance at a lower setting.",
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
          { label: "Delivery Modes", value: "Pulse, fixed-frequency, and continuous flow" },
          { label: "Available Settings", value: "P1–P10" },
          { label: "Maximum Continuous Flow", value: "2000 ml/min" },
          { label: "Oxygen Concentration", value: "90% ±6% across every setting" },
          { label: "Product Weight", value: "3.75 lbs with battery" },
          { label: "Product Dimensions", value: "7.17 × 3.41 × 8.39 inches" },
          { label: "Display", value: "Illuminated digital control panel" },
          { label: "Alert System", value: "Visual and audible warnings (6 alerts)" },
        ],
      },
      {
        label: "Battery & Charging",
        rows: [
          { label: "Battery Type", value: "Rechargeable 18-cell Lithium-Ion" },
          { label: "Single Battery Runtime", value: "Up to 12 hours at P1" },
          { label: "Dual Battery Runtime", value: "Up to 24 hours at P1" },
          { label: "Charging Time", value: "Approximately 5–6 hours" },
          { label: "Charging Sources", value: "Wall adapter, car charger cable, USB-C fast-charging" },
          { label: "Swappable Battery", value: "Yes" },
        ],
      },
      {
        label: "Warranty",
        rows: [
          { label: "Warranty and Support", value: "1 year" },
          { label: "Coverage", value: "Device defects and battery issues" },
          { label: "Support", value: "24/7 customer support via email" },
        ],
      },
    ],
  },

  // ── BOX CONTENTS ──
  boxContents: {
    heading: "Everything You Need. Ready To Use.",
    image: "https://thepurio.com/cdn/shop/files/15._Package_Contents.webp",
    items: [
      "1-10L oxygen concentrator",
      "1 or 2 rechargeable 18-cell batteries (based on selected option)",
      "Stylish carry bag",
      "Adjustable shoulder strap",
      "AC wall power adapter",
      "Car charger cable",
      "USB-C fast-charging cable",
      "Nasal cannula",
      "5 replacement filters",
      "User manual",
    ],
  },

  // ── DETAIL GRID ──
  detailGrid: {
    heading: "Every Detail Built With Purpose",
    images: [
      "https://thepurio.com/cdn/shop/files/CARD_2.webp",
      "https://thepurio.com/cdn/shop/files/CARD_3.webp",
      "https://thepurio.com/cdn/shop/files/CARD_4.webp",
      "https://thepurio.com/cdn/shop/files/Weight_and_Portability_Comparison_2.webp",
      "https://thepurio.com/cdn/shop/files/18-Cell_Battery_P10_Product_Graphic.webp",
    ],
  },

  // ── FEATURE SECTIONS FINAL ──
  featureSectionsFinal: [
    {
      heading: "Designed to Keep Daily Use Simple",
      image: "https://thepurio.com/cdn/shop/files/Oxygen_Freedom_in_Every_Setting.webp",
    },
  ],

  // ── REVIEWS ──
  reviewsCsv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRtUe1T7tbH4NMJQ1EGdDQKDWYtrsbkSrB6Q9drhMW_gBCZVsNmzZsHzIY-b2fIMTQVzo9t5C4vy2Dh/pub?output=csv",

  // ── BULLETS ──
  productBullets: [
    "10 Adjustable Output Settings (P1–P10)",
    "Pulse + Fixed-Frequency + Continuous Flow",
    "90% ±6% Purity Across Every Setting",
    "Up to 24 Hours with Dual 18-Cell Battery",
    "Compact 3.75 lb Design",
    "Free Carry Bag Included",
  ],

  // ── PRODUCT FAQ ──
  productFaq: [
    { q: "How many settings does it have?", a: "The device has 10 selectable settings (P1–P10). P1–P8 use pulse delivery, P9 uses fixed-frequency, and P10 provides continuous flow at 2 L/min." },
    { q: "How long does the battery last?", a: "The 18-cell battery provides up to 12 hours at P1. Runtime decreases at higher settings. With two batteries, you can reach up to 24 hours of total use." },
    { q: "What is the oxygen purity?", a: "90% ±6% purity is maintained across all 10 settings. The delivery mode and output volume change per level, but purity stays consistent." },
    { q: "Can I travel with it?", a: "Yes, the 3.75 lb body and included carry bag make it easy to transport. For air travel, confirm battery requirements with your airline before departure." },
    { q: "What power options are available?", a: "The device supports wall power at home, car charging cable, and USB-C fast charging. The battery is also swappable." },
    { q: "What comes inside the box?", a: "Your order includes the concentrator, 1 or 2 batteries depending on your selection, carry bag, shoulder strap, wall adapter, car charger, USB-C cable, nasal cannula, 5 replacement filters, and user manual." },
  ],
};

export default product;
