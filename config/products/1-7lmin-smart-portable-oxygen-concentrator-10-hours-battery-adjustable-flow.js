const product = {
  // ── VIDEO ──
  videoUrl: "https://video.wixstatic.com/video/8f1bc7_380736ba1d54466aaee83e43b802a1fc/480p/mp4/file.mp4",

  // ── REVIEWS ──
  reviewsCsv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7ViyXXaS8ztprK23idlwxqx7Yew74w1QT-qHyjr4EjZHccxdA_DD3yfhsQmsBmWPzK5t00a2m--qh/pub?output=csv",

  // ── BULLETS ──
  productBullets: [
    "Adjustable 1–7L/min Oxygen Flow",
    "AI-Powered Breath Detection",
    "Portable & Lightweight Design",
    "85–90% High Oxygen Purity",
    "Multiple Power Options",
    "Designed for Freedom and Flexibility",
  ],

  // ── FEATURES (homepage icon grid) ──
  features: {
    heading: "What Makes It Worth Buying",
    items: [
      { icon: "https://static.wixstatic.com/media/20cc08_0ace68eb91fe4161898dbe7ebf324b1c~mv2.png", label: "Advanced Filtration" },
      { icon: "https://static.wixstatic.com/shapes/20cc08_99955092d8b94add82a40c0b9b7cacba.svg", label: "Portable Design" },
      { icon: "https://static.wixstatic.com/shapes/20cc08_91d22989c4124fc0a2dd8f142892c153.svg", label: "Adjustable Oxygen Flow" },
      { icon: "https://static.wixstatic.com/shapes/20cc08_84726d50a1f04419ba315fdba6a8f87a.svg", label: "Lightweight Build" },
    ],
  },

  // ── FLIP CARDS ──
  productFeatures: {
    heading: "Go Further With a Smarter Portable Oxygen",
    description: "Oxygen support should move at your speed, and this concentrator does exactly that. It reads your breathing and sends a pulse of oxygen with every inhale. Carry it to the park, out to dinner, or across town without a second thought. Everything you need in one compact case.",
    cards: [
      { label: "Smart AI Sensing", front: "https://static.wixstatic.com/media/20cc08_829938bde0bb45ffa065e57ab19670fa~mv2.avif", back: "https://static.wixstatic.com/media/20cc08_0682d3a5ae3f441490e6cdd7fc8f429d~mv2.webp" },
      { label: "High-Purity", front: "https://static.wixstatic.com/media/20cc08_bbc15f7062c04f36934bdebab534045b~mv2.avif", back: "https://static.wixstatic.com/media/20cc08_af7736bd6cbf48e0a1f3c3c6943c4388~mv2.webp" },
      { label: "All-Day Power", front: "https://static.wixstatic.com/media/20cc08_389026b252f142eba763c7d7a66f4a5e~mv2.png", back: "https://static.wixstatic.com/media/20cc08_5b5ee60f4bc54bf480d37fd26e86fe4f~mv2.jpg" },
      { label: "100% Tank Free", front: "https://static.wixstatic.com/media/20cc08_c4b2b5bb7c104e55a71aa25b49f7452c~mv2.avif", back: "https://static.wixstatic.com/media/20cc08_a110ff57dff44ee29e4e5e61525e3b45~mv2.jpg" },
    ],
  },

  // ── OXYGEN ON THE GO ──
  oxygenOnTheGo: {
    heading: "Your Oxygen, Always With You",
    subtext: "Your day should not wait on your oxygen. Oxliv is light, easy to carry, and ready to go, keeping up to 90% oxygen purity with you from morning to night.",
    items: [
      { image: "https://static.wixstatic.com/media/8f1bc7_906a51bcb5db46399f98d2934416cee0~mv2.avif", label: "Walking" },
      { image: "https://static.wixstatic.com/media/8f1bc7_4958f1b6e25f43c7b84b186250c69fd7~mv2.avif", label: "At Indoors" },
      { image: "https://static.wixstatic.com/media/8f1bc7_1cd09645060d4913b904fb36add92f08~mv2.avif", label: "In a Car" },
      { image: "https://static.wixstatic.com/media/8f1bc7_d6af48e45af746dcbf8765685502a08b~mv2.avif", label: "Outdoors" },
    ],
  },

  // ── PRODUCT DETAILS (left/right sections) ──
  productDetails: [
    { image: "https://static.wixstatic.com/media/8f1bc7_7113ffd2d15e4eb99f7dda9dbcf1bb02~mv2.avif", heading: "Only 3lbs: take oxygen like your purse", content: "Some days the hardest part is just getting out the door. Oxliv makes it simple. It rides light on your shoulder and goes wherever you go. Take that walk, meet a friend, or run an errand, and keep your oxygen close the whole way.", reverse: false },
    { image: "https://static.wixstatic.com/media/8f1bc7_f56810431420481394f65b01a0a7bf28~mv2.avif", heading: "90% Oxygen Purity on Demand", content: "Oxliv pulls in ordinary room air and turns it into oxygen up to 90% pure, delivered fresh with every breath. The purity holds steady as you relax, so quiet hours feel easy and the oxygen you get is always dependable.", reverse: true },
    { image: "https://static.wixstatic.com/media/8f1bc7_82ae2437c3d1409b8157907abdf27913~mv2.avif", heading: "10 Hours of Tankless Oxygen Support", content: "A single battery gives you up to 5 hours of cord-free use, enough for a walk, a visit, and errands in between. Keep 1 or 2 extra batteries on hand for up to 10 or 15 hours of continuous oxygen support.", reverse: false },
    { image: "https://static.wixstatic.com/media/8f1bc7_a69ba8c59e7b4a1ba1d258067eef9f9e~mv2.avif", heading: "Fresh Oxygen, Wherever You Go", content: "Head outside and stay as long as you please, because Oxliv draws oxygen right from the open air. No refills to order and no deliveries to wait on, so the afternoon runs on your terms.", reverse: true },
    { image: "https://static.wixstatic.com/media/8f1bc7_121427af9c2f4dd1b2d42b7a2dc919d3~mv2.avif", heading: "Find Your Perfect Flow Setting", content: "You stay in control with seven easy flow settings. Lower levels reach up to 90% purity and give you close to five hours per charge. Set it once, adjust anytime, and keep your day moving.", reverse: false },
  ],

  // ── ADDITIONAL INFO ──
  additionalInfo: {
    features: [
      "Delivers high-purity oxygen up to 90% for reliable daily breathing support",
      "Uses pulse oxygen technology that responds to your natural inhalation",
      "Automatically switches to fixed-frequency mode when no breath is detected",
      "Runs quietly below 56dB for comfortable use on the go",
      "Provides 1.5-5 hours of portable power with the replaceable battery box",
      "Offers seven adjustable oxygen levels for personalized airflow",
      "Compact 1.4 kg design fits easily in a backpack or travel bag",
      "Supports home, car, outdoor, and travel use with three power options",
      "Simple one-touch operation with a clear digital screen",
      "Includes a free carry bag, chargers, car charger and nasal tubes for instant setup",
    ],
    specs: [
      { label: "Oxygen Flow Range", value: "1-7L pulse gear levels" },
      { label: "Oxygen Purity", value: "85%-90% (varies with breathing frequency & gear)" },
      { label: "Weight", value: "1.4 kg (excluding battery)" },
      { label: "Battery Life", value: "1.5-5 hours (single battery)" },
      { label: "Charging Time", value: "~4 hours" },
      { label: "Dimensions", value: "195 × 85 × 175 mm" },
      { label: "Operating Noise", value: "≤ 56 dB" },
      { label: "Atmospheric Pressure Range", value: "86-106 kPa" },
      { label: "Power Input", value: "AC100-240V, 50/60 Hz" },
      { label: "Battery Capacity", value: "16.8V, 6400 mAh" },
    ],
    disclaimer: "The Oxliv 1-7L Portable Oxygen Concentrator is not a medical device. They are designed for travel, recreation, fitness, and everyday comfort, not to diagnose, treat, or prevent any illness or condition. Anyone with a medical condition should speak with a healthcare professional before using the device.",
  },

  // ── INSIDE BOX ──
  insideBox: {
    image: "https://static.wixstatic.com/media/8f1bc7_fe9d6e01321c4763ad7c7c477a211ed0~mv2.avif",
    items: [
      "1 Portable Oxygen Concentrator",
      "1 Charger",
      "1 Battery",
      "1 Instruction manual + warranty card",
      "1 Car charging cable",
      "2 Nasal oxygen tubes",
      "1 Certificate of conformity",
      "1 Backpack",
      "1 Case",
    ],
  },

  // ── PRODUCT FAQ ──
  productFaq: [
    { q: "Is this a continuous flow oxygen concentrator?", a: "No, our portable concentrators use a smart pulse flow system that detects your breath and delivers oxygen precisely when you inhale." },
    { q: "Is the oxygen clean and pure?", a: "Yes, our portable oxygen concentrators deliver 85-90% pure oxygen, drawn directly from the surrounding air." },
    { q: "How long does the battery last?", a: "A single charge runs up to 5 hours, depending on your level. The battery is replaceable, so a spare keeps you going longer." },
    { q: "How can I power the device?", a: "You can run it on home AC power, a car DC socket, or its battery. It also works while plugged in and charging." },
    { q: "How heavy is it to carry?", a: "It weighs about 3 lbs, light enough for a shoulder strap." },
    { q: "When can I expect delivery?", a: "Orders ship free across the USA and usually arrive within 8 to 11 business days." },
    { q: "Can I see the product specification?", a: "Yes, please check the details in our product specification page." },
  ],
};

export default product;
