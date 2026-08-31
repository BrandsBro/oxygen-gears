const product = {
  template: "concentrator",

  // ── NO VIDEO for 1-5L ──

  // ── REVIEWS ──
  reviewsCsv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRyh8SmXs3jKRu0WX3OYbdkalm0SmEPqlnGMWvyeuSCct9zAK1zDLd9lrSW0zbMoFc3KTmaxZe29eBu/pub?output=csv",

  // ── BULLETS — update when ready ──
  productBullets: [
    "Adjustable 1–5L/min Oxygen Flow",
    "AI-Powered Breath Detection",
    "Portable & Lightweight Design",
    "90–95% High Oxygen Purity",
    "Multiple Power Options",
    "Designed for Freedom and Flexibility",
  ],

  // ── FEATURES — update images when ready ──
  productFeatures: {
    heading: "Why This Oxygen Concentrator Stands Out",
    description: "This lightweight oxygen concentrator is built for daily comfort at home or away. Its compact body rests easily on your shoulder, while 95% oxygen purity, advanced filtration, and a longer-lasting battery provide dependable performance through everyday errands, quiet afternoons, family visits, and outdoor plans.",
    cards: [
      { label: "Lightweight Carry", front: "https://static.wixstatic.com/media/8f1bc7_f9779b3d038645a993e208ad89e965ff~mv2.webp", back: "https://static.wixstatic.com/media/8f1bc7_300778c1c5684bcd997020a0dca71266~mv2.jpg" },
      { label: "Pure Oxygen", front: "https://static.wixstatic.com/media/8f1bc7_dfae2e25a4724feca816dee83bb9ba8a~mv2.webp", back: "https://static.wixstatic.com/media/8f1bc7_0c5cb6ad7a844cd0bc1045276eecd4f5~mv2.jpg" },
      { label: "Advanced Filteration", front: "https://static.wixstatic.com/media/8f1bc7_c56046d47676467794e3b9539eae5809~mv2.webp", back: "https://static.wixstatic.com/media/8f1bc7_caf7934e991a47d2baf9343bf6d2cc8c~mv2.jpg" },
      { label: "Longtime Runtime", front: "https://static.wixstatic.com/media/8f1bc7_08a2c9c280f540fdb3b372fd0734269c~mv2.webp", back: "https://static.wixstatic.com/media/8f1bc7_1aef18196da045d1915f130317052f6c~mv2.jpg" },
    ],
  },

  // ── OXYGEN ON THE GO — update images when ready ──
  oxygenOnTheGo: {
    heading: "Built For Everyday Outings",
    subtext: "Daily plans become easier with a device made for movement. Carry it in the car, through the market, around the garden, or along mountain paths with up to six hours of battery use.",
    items: [
      { image: "https://static.wixstatic.com/media/8f1bc7_739d404d68bd48e39abc7ca464e6c514~mv2.webp", label: "Driving" },
      { image: "https://static.wixstatic.com/media/8f1bc7_95934897713b4217a648f3203acf70e6~mv2.webp", label: "Trekking" },
      { image: "https://static.wixstatic.com/media/8f1bc7_7220d95cef15477f98b6ed047636f4f4~mv2.webp", label: "Shopping" },
      { image: "https://static.wixstatic.com/media/8f1bc7_49c48df44ee94d64b9a68939f0e943bc~mv2.webp", label: "Gardening" },
    ],
  },

  // ── PRODUCT DETAILS — update images/text when ready ──
  productDetails: [
    { image: "https://static.wixstatic.com/media/8f1bc7_7113ffd2d15e4eb99f7dda9dbcf1bb02~mv2.avif", heading: "Only 3lbs: take oxygen like your purse", content: "Some days the hardest part is just getting out the door. Oxliv makes it simple. It rides light on your shoulder and goes wherever you go.", reverse: false },
    { image: "https://static.wixstatic.com/media/8f1bc7_f56810431420481394f65b01a0a7bf28~mv2.avif", heading: "95% Oxygen Purity on Demand", content: "Oxliv pulls in ordinary room air and turns it into oxygen up to 95% pure, delivered fresh with every breath.", reverse: true },
    { image: "https://static.wixstatic.com/media/8f1bc7_82ae2437c3d1409b8157907abdf27913~mv2.avif", heading: "Hours of Tankless Oxygen Support", content: "A single battery gives you hours of cord-free use. Keep an extra battery on hand for extended continuous oxygen support.", reverse: false },
    { image: "https://static.wixstatic.com/media/8f1bc7_a69ba8c59e7b4a1ba1d258067eef9f9e~mv2.avif", heading: "Fresh Oxygen, Wherever You Go", content: "Head outside and stay as long as you please, because Oxliv draws oxygen right from the open air.", reverse: true },
    { image: "https://static.wixstatic.com/media/8f1bc7_121427af9c2f4dd1b2d42b7a2dc919d3~mv2.avif", heading: "Find Your Perfect Flow Setting", content: "You stay in control with five easy flow settings. Set it once, adjust anytime, and keep your day moving.", reverse: false },
  ],

  // ── ADDITIONAL INFO — update when ready ──
  additionalInfo: {
    features: [
      "Delivers high-purity oxygen up to 95% for reliable daily breathing support",
      "Uses pulse oxygen technology that responds to your natural inhalation",
      "Automatically switches to fixed-frequency mode when no breath is detected",
      "Runs quietly below 56dB for comfortable use on the go",
      "Provides portable power with the replaceable battery box",
      "Offers five adjustable oxygen levels for personalized airflow",
      "Compact design fits easily in a backpack or travel bag",
      "Supports home, car, outdoor, and travel use with multiple power options",
      "Simple one-touch operation with a clear digital screen",
      "Includes a free carry bag, chargers and nasal tubes for instant setup",
    ],
    specs: [
      { label: "Oxygen Flow Range", value: "1-5L pulse gear levels" },
      { label: "Oxygen Purity", value: "90%-95% (varies with breathing frequency & gear)" },
      { label: "Battery Life", value: "Up to 5 hours (single battery)" },
      { label: "Charging Time", value: "~4 hours" },
      { label: "Operating Noise", value: "≤ 56 dB" },
      { label: "Power Input", value: "AC100-240V, 50/60 Hz" },
    ],
    disclaimer: "The Oxliv 1-5L Portable Oxygen Concentrator is not a medical device. They are designed for travel, recreation, fitness, and everyday comfort, not to diagnose, treat, or prevent any illness or condition. Anyone with a medical condition should speak with a healthcare professional before using the device.",
  },

  // ── INSIDE BOX — update when ready ──
  insideBox: {
    image: "https://static.wixstatic.com/media/8f1bc7_bb9dd429e6bf4e99aed4f49b128c4c6b~mv2.webp",
    items: [
      "Portable Oxygen Concentrator",
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
    { q: "Is the oxygen clean and pure?", a: "Yes, our portable oxygen concentrators deliver 90-95% pure oxygen, drawn directly from the surrounding air." },
    { q: "How long does the battery last?", a: "A single charge runs several hours depending on your level. The battery is replaceable, so a spare keeps you going longer." },
    { q: "How can I power the device?", a: "You can run it on home AC power, a car DC socket, or its battery. It also works while plugged in and charging." },
    { q: "How heavy is it to carry?", a: "It is light enough for a shoulder strap. The compact build fits errands, travel, and time around the house." },
    { q: "When can I expect delivery?", a: "Orders ship free across the USA and usually arrive within 8 to 11 business days." },
    { q: "Can I see the product specification?", a: "Yes, please check the details in our product specification page." },
  ],
  whySwitching: {
    heading: "Designed Around Daily Life",
    subtext: "This compact oxygen concentrator brings easy control, cleaner output, and flexible power into one portable design. Five levels, layered filtration, low-noise operation, and a long-lasting battery help it fit naturally into everyday use.",
    items: [
      { icon: "https://static.wixstatic.com/media/8f1bc7_a86fd544c1ed4c239bcdcbae3d8ce805~mv2.webp", label: "1-5L Pulse Flow" },
      { icon: "https://static.wixstatic.com/media/8f1bc7_de1f3f583a114a64a22c8995a6ab9107~mv2.webp", label: "Dual Output Modes" },
      { icon: "https://static.wixstatic.com/media/8f1bc7_b8b62a846a29469a8995255d57b8e3fb~mv2.webp", label: "95% Oxygen Purity" },
      { icon: "https://static.wixstatic.com/media/8f1bc7_2314140da24f488982d3e68e98b2c2aa~mv2.webp", label: "Advanced Filtration" },
      { icon: "https://static.wixstatic.com/media/8f1bc7_d81e9f9ec55e4e01be6bd8f0ec5fdd44~mv2.webp", label: "6400mAh Battery" },
      { icon: "https://static.wixstatic.com/media/8f1bc7_377440bdb7cc454c82e838ebd4a1b261~mv2.webp", label: "≤49dB Operation" },
    ],
  },
};

export default product;
