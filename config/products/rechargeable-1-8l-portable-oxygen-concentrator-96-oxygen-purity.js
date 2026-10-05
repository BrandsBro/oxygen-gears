const product = {
  template: "concentrator",

  // ── SECTION VISIBILITY FLAGS ──
  showWhySwitching: false,
  showStayPowered: false,
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

  // ── PRODUCT BULLETS ──
  productBullets: [
    "Eight adjustable oxygen settings",
    "Levels 1–6 pulse flow",
    "Level 7 provides Constant flow",
    "Level 8 provides continuous flow",
    "Up to 2,000 mL/min at Level 8",
    "≥90% oxygen purity",
    "Up to 12-24 hours of battery use",
    "Free U.S. Shipping",
  ],

  // ── COUNTDOWN BANNER ──
  countdownBanner: {
    image: "https://static.wixstatic.com/media/8f1bc7_8bcd854d884a40dc8d8c9330903cdd0b~mv2.webp",
    imageAlt: "Limited Time Sale — 1-8L Portable Oxygen Concentrator",
    disclaimer: "This is NOT a medical-grade oxygen device. Designed for comfort and low-flow support only. If you need prescribed oxygen therapy, consult your doctor.",
  },

  // ── QUICK STATS ──
  quickStats: {
    items: [
      {
        icon: "https://static.wixstatic.com/shapes/8f1bc7_015e37953a3f43bab829335ebf70721a.svg",
        title: "3 Delivery Modes",
        sub: "Pulse, Constant, and continuous flow.",
      },
      {
        icon: "https://static.wixstatic.com/shapes/8f1bc7_331acb4ba9704b8cbbc25a3c72accfaf.svg",
        title: "Up to 96% Purity",
        sub: "Consistent across all eight settings.",
      },
      {
        icon: "https://static.wixstatic.com/shapes/8f1bc7_f2b679bf14a84af2adbd29c81e30cb19.svg",
        title: "18-Cell Battery",
        sub: "Up to 12 hours of battery use.",
      },
      {
        icon: "https://static.wixstatic.com/shapes/8f1bc7_8dfa1e44d80b4c2b9f5e07be7bdc4442.svg",
        title: "Multi-Stage Filtration",
        sub: "Built for cleaner oxygen delivery.",
      },
    ],
  },

  // ── PRODUCT COMPARE ──
  productCompare: {
    heading: "Built Beyond the Basics",
    subtext: "Compare for yourself and see why this concentrator offers greater everyday flexibility than many portable oxygen devices available for prices under $1,000.",
    image: "https://static.wixstatic.com/media/8f1bc7_2a9a88a8751147879645f525d1ace4df~mv2.webp",
    imageAlt: "Oxliv 1-8L Portable Oxygen Concentrator",
    rows: [
      { feature: "Adjustable Settings", ours: "8 settings", theirs: "Usually fewer settings" },
      { feature: "Delivery Modes", ours: "3 delivery modes", theirs: "Usually 1 delivery mode" },
      { feature: "O₂ Purity", ours: "Up to 96%", theirs: "Typically 35%–60%" },
      { feature: "Advanced Filtration", ours: "✓", theirs: "✕" },
      { feature: "Battery Options", ours: "18-cell big battery", theirs: "Standard battery only" },
      { feature: "Maximum Runtime", ours: "Up to 12 hours", theirs: "Shorter battery time" },
      { feature: "Swappable Battery", ours: "Easy to remove and replace", theirs: "Usually fixed or limited" },
      { feature: "Multi-Alert System", ours: "✓", theirs: "✕" },
    ],
  },

  // ── VIDEO SECTION (stacked — customer testimonial) ──
  videoSection: {
    layout: "stacked",
    heading: "Real Stories From Everyday Oxygen Users",
    subtext: "See how the 1–8L Portable Oxygen Concentrator fits into real routines, from its flexible oxygen delivery and easy controls to everyday portability. Hear firsthand experiences that show what it's like to have more freedom wherever the day takes you.",
    videoUrl: "https://video.wixstatic.com/video/8f1bc7_3329fa396ca24f52a04870bd20c51847/1080p/mp4/file.mp4",
  },

  // ── FEATURE VIDEO (text left, video right) ──
  featureVideo: {
    layout: "text-video",
    heading: "Built for Comfort. Designed for Everyday Freedom.",
    subtext: [
      "From home to the road, this compact oxygen concentrator is built to fit naturally into your routine.",
      "Eight adjustable settings give you control over oxygen delivery, with pulse-dose, constant-frequency, and continuous-flow options in one portable system.",
      "Thoughtfully designed for everyday comfort, it keeps things simple without getting in your way. Enjoy a smooth, convenient experience that fits naturally into your lifestyle.",
    ],
    videoUrl: "https://video.wixstatic.com/video/8f1bc7_9dbff5f8fdd44be89a100d49dea28b91/1080p/mp4/file.mp4",
  },

  // ── HERO FEATURE ──
  heroFeature: {
    heading: "Compact Enough to Take With You.",
    highlight: "Only 4.85 lbs With Battery",
    highlightColor: "#e05a3a",
    subtext: "About the weight of a standard 15-inch laptop.",
    subtextColor: "#58ACAF",
    bullets: [
      "Use the included carry bag and shoulder strap for convenient transport.",
      "A compact form that fits naturally into your routine, wherever you need it.",
    ],
    bgImage: "https://static.wixstatic.com/media/8f1bc7_3b7e5abaedd44a1dac8743a05a7c98c8~mv2.webp",
  },

  // ── FEATURE SECTIONS (before AlternatingFeature) ──
  featureSections: [
    {
      heading: "High Purity Across the Full Range",
      subtext: "Engineered to maintain high oxygen purity across all eight settings. Lower output levels deliver 90–96% oxygen purity, while higher settings provide approximately 85–90% purity, including both constant-frequency and continuous-flow operation.",
      image: "https://static.wixstatic.com/media/8f1bc7_f983b907cff74172ac7901c1366f515f~mv2.webp",
    },
    {
      heading: "Bigger Battery. Longer Runtime.",
      subtext: "The larger 18-cell battery provides approximately 3–12 hours per charge. Runtime changes with the selected setting and delivery mode. Carry a charged spare for longer trips away from an outlet.",
      image: "https://static.wixstatic.com/media/8f1bc7_0fd30866c6d04ad2bc2a289d0c8de08b~mv2.webp",
    },
  ],

  // ── ALTERNATING FEATURE (3 delivery mode rows) ──
  alternatingFeature: {
    heading: "3 Powerful Ways to Deliver Oxygen for Different Daily Needs",
    subtext: "See exactly how each operating mode delivers oxygen and choose the option that best fits different activities, routines, and oxygen-support needs.",
    items: [
      {
        image: "https://static.wixstatic.com/media/8f1bc7_0a6090efc9f441de9dcd2612b6c126b5~mv2.webp",
        heading: "Pulse Dose: Oxygen With Each Inhale",
        subtext: "Pulse Dose detects each inhale and releases an oxygen burst as you breathe in. Delivery pauses during exhalation, so oxygen is provided only during the inhalation phase.",
        reverse: false,
      },
      {
        image: "https://static.wixstatic.com/media/8f1bc7_04a83bd8183449a28ae7e217a9eac227~mv2.webp",
        heading: "Constant Frequency: Oxygen on a Fixed Frequency",
        subtext: "At Level 7, the concentrator releases 17 oxygen bursts every minute. Each burst follows a fixed schedule with equal time between deliveries, even when the breathing pattern changes.",
        reverse: true,
      },
      {
        image: "https://static.wixstatic.com/media/8f1bc7_b094adbb11f9434194f91f0168ef7a98~mv2.webp",
        heading: "Continuous Flow: Oxygen Without Pauses",
        subtext: "At Level 8, oxygen flows without stopping. Delivery continues through inhalation and exhalation, providing up to 2,000 mL/min of continuous oxygen output.",
        reverse: false,
      },
    ],
  },

  // ── FEATURE SECTIONS AFTER (after AlternatingFeature) ──
  featureSectionsAfter: [
    {
      heading: "Eight Settings. Clear Output.",
      subtext: "Pulse Dose covers Levels 1–6 with output from 200 to 1,200 mL/min. Level 7 delivers 17 timed bursts each minute. Level 8 provides continuous flow up to 2,000 mL/min.",
      image: "https://static.wixstatic.com/media/8f1bc7_a6e8b1ddab47411386bfca9ee6b0f55c~mv2.webp",
    },
    {
      heading: "Know When the Device Needs Attention",
      subtext: "Audible alerts and a flashing screen help signal changes that need attention. The system monitors temperature, battery power, breathing detection, oxygen concentration, fan operation, and compressor performance while the concentrator is running.",
      image: "https://static.wixstatic.com/media/8f1bc7_7079585d55bf48778f901eb4a556b81f~mv2.webp",
    },
  ],

  // ── DETAIL GRID (5 images) ──
  detailGrid: {
    heading: "Designed to Keep Daily Use Simple",
    images: [
      "https://static.wixstatic.com/media/8f1bc7_caa4b54cbebd45019b75e48cfe1287b0~mv2.webp",
      "https://static.wixstatic.com/media/8f1bc7_05fe2acbce0647ea9e298f1680ac9a61~mv2.webp",
      "https://static.wixstatic.com/media/8f1bc7_3dd54c648e744582a4eaf6b625822f73~mv2.webp",
      "https://static.wixstatic.com/media/8f1bc7_435fd11751ac4e24a3fb331d37046e8a~mv2.webp",
      "https://static.wixstatic.com/media/8f1bc7_d9b5f17e707c415d9a68cade20e924aa~mv2.webp",
    ],
  },

  // ── FINAL FEATURE SECTIONS (after DetailGrid) ──
  featureSectionsFinal: [
    {
      heading: "Goes Where Your Day Takes You",
      image: "https://static.wixstatic.com/media/8f1bc7_8ddaaace827d43e5a50efce9286500b0~mv2.webp",
    },
  ],

  // ── BOX CONTENTS ──
  boxContents: {
    heading: "The Complete Setup in One Box",
    image: "https://static.wixstatic.com/media/8f1bc7_36cf0b846682491da3c7e6893a2ca0d0~mv2.webp",
    items: [
      "1-8L Portable Oxygen Concentrator",
      "1 or 2 Rechargeable 18-Cell Batteries (Based on the selected option)",
      "Stylish Carry Bag",
      "Adjustable Shoulder Strap",
      "AC Wall Power Adapter",
      "Free 12V Car Charger",
      "USB-C Fast-Charging Cable",
      "Nasal Cannula",
      "5 Replacement Filters",
      "User Manual",
    ],
  },

  // ── TECH SPECS ──
  techSpecs: {
    heading: "Technical Specifications",
    tabs: [
      {
        label: "Physical & Tech Details",
        rows: [
          { label: "Operating Weight", value: "4.85 lbs with battery" },
          { label: "Dimensions", value: "7.17 × 3.41 × 8.39 inches" },
          { label: "Adjustable Settings", value: "Eight" },
          { label: "Pulse Dose", value: "Levels 1–6" },
          { label: "Constant Frequency", value: "Level 7, 17 bursts per minute" },
          { label: "Continuous Flow", value: "Level 8" },
          { label: "Oxygen Output", value: "200–2,000 mL/min" },
          { label: "Oxygen Purity", value: "Up to 96%" },
          { label: "Filtration", value: "Multi-stage filtration with molecular sieve" },
          { label: "Operating Noise", value: "Below 60 dB(A)" },
          { label: "Operating Altitude", value: "Up to 16,400 feet" },
          { label: "Alert System", value: "Audible alerts and flashing screen warnings" },
        ],
      },
      {
        label: "Battery & Charging",
        rows: [
          { label: "Battery Type", value: "Detachable rechargeable 18-cell battery" },
          { label: "Runtime", value: "Approximately 3–12 hours per battery" },
          { label: "Two-Battery Runtime", value: "Approximately 6–24 combined hours" },
          { label: "Charging Method", value: "USB-C fast charging" },
          { label: "Wall Power", value: "100–240V AC" },
          { label: "Vehicle Power", value: "12V DC" },
        ],
      },
      {
        label: "Warranty",
        rows: [
          { label: "Warranty Period", value: "One-year limited replacement warranty" },
          { label: "Customer Support", value: "Available 24 hours a day" },
          { label: "Support", value: "24/7 customer support via email" },
          { label: "Warranty Note", value: "Damage from misuse or unauthorized changes is not covered" },
        ],
      },
    ],
  },

  // ── FAQ WITH IMAGE ──
  faqWithImage: {
    heading: "Frequently Asked Questions",
    subtext: "Find quick answers about refills, nighttime use, travel, compatibility, safety, and accessories.",
    image: "https://static.wixstatic.com/media/8f1bc7_d3b3b065530a49c09a69e42ae9abe3cf~mv2.webp",
    faqs: [
      {
        question: "Does the concentrator need oxygen refills?",
        answer: "No. The concentrator draws in surrounding air and passes it through its filtration and molecular sieve system. It continuously produces concentrated oxygen during operation, so there are no tanks to refill or exchange.",
      },
      {
        question: "Can it operate inside the carry bag?",
        answer: "Yes, when the included bag is positioned correctly and every air opening remains clear. Keep the device upright and never cover the intake or vents with clothing, blankets, cushions, or other items.",
      },
      {
        question: "Can the concentrator operate on its side?",
        answer: "Keep the concentrator upright during operation. Placing it on its side may block airflow openings, restrict cooling, or affect normal performance. Set it on a flat and stable surface before turning it on.",
      },
      {
        question: "How should the filter be replaced?",
        answer: "Turn off the device, disconnect power, and remove the battery. Open the cover, remove the dusty intake filter, and install a new one in the correct direction. Refit the cover and battery. Replacement timing depends on the environment.",
      },
      {
        question: "When should the sieve bed columns be replaced?",
        answer: "Replace the sieve bed columns when the display reports low oxygen concentration, unusual internal pressure, or increased noise. Contact the product provider for replacement and follow all alert instructions shown on the device.",
      },
      {
        question: "How should the concentrator be stored?",
        answer: "Store the concentrator and battery in a clean, dry, temperature-controlled place away from direct sunlight, heat, freezing conditions, and moisture. Long-term storage and humid conditions may shorten the sieve bed's working life.",
      },
      {
        question: "How should I clean the concentrator?",
        answer: "Turn off the concentrator, unplug it from the wall, and remove the battery. Wipe the exterior with a soft, lightly damp cloth. Never pour liquid onto it or use alcohol, solvents, or oil-based cleaners. Let it dry completely.",
      },
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
};

module.exports = product;
