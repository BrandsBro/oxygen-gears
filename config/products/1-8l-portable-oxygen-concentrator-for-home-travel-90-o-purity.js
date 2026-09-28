const product = {
  // ── REVIEWS ──
  reviewsCsv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7ViyXXaS8ztprK23idlwxqx7Yew74w1QT-qHyjr4EjZHccxdA_DD3yfhsQmsBmWPzK5t00a2m--qh/pub?output=csv",

  // ── BULLETS ──
  productBullets: [
    "Eight adjustable oxygen settings",
    "Levels 1–6 pulse flow",
    "Level 7 provides Constant flow",
    "Level 8 provides continuous flow",
    "Up to 2,000 mL/min at Level 8",
    "≥90% oxygen purity",
    "Up to 12–24 hours of battery use",
    "Free U.S. Shipping",
  ],

  // ── FEATURES (flip cards) ──
  productFeatures: {
    heading: "Oxygen That Fits Your Routine",
    description: "Eight adjustable settings give you more control over oxygen delivery. Choose between pulse dose, constant flow, and continuous flow based on your oxygen needs.",
    cards: [
      { label: "8 Adjustable Settings", front: "https://static.wixstatic.com/media/8f1bc7_529553d86eb943a6b314aa04177890a0~mv2.avif", back: "https://static.wixstatic.com/media/8f1bc7_4343f7b410c5434cb928ace9a763b1c2~mv2.jpeg" },
      { label: "3 Oxygen Modes", front: "https://static.wixstatic.com/media/8f1bc7_7635b9defdc44f33bc654a89ce01d1f3~mv2.png", back: "https://static.wixstatic.com/media/8f1bc7_14d3ab7fc7b349e0a27079ed511166e5~mv2.jpeg" },
      { label: "Up to 90% ±3% O₂ Purity", front: "https://static.wixstatic.com/media/8f1bc7_4a57da408c814cbf9db60c081314195e~mv2.png", back: "https://static.wixstatic.com/media/8f1bc7_a6608d8e801c45d7a364232fd1c465b1~mv2.jpeg" },
      { label: "Up to 12 Hours", front: "https://static.wixstatic.com/media/8f1bc7_7635b9defdc44f33bc654a89ce01d1f3~mv2.png", back: "https://static.wixstatic.com/media/8f1bc7_1a6e3f1278e04cb0b5189e8d09ba3d99~mv2.jpeg" },
    ],
  },

  // ── WHY SWITCHING ──
  whySwitching: {
    heading: "Built for Everyday Use",
    subtext: "A portable concentrator should feel simple from the moment you turn it on. This compact unit warms up in three minutes and operates below 60 dB(A). Flexible power and multiple filtration help it fit into daily routines at home and outside.",
    items: [
      { icon: "https://static.wixstatic.com/media/8f1bc7_0d98baff82384a69980e86af1a1416b9~mv2.avif", label: "Lightweight 4.85 lbs Design" },
      { icon: "https://static.wixstatic.com/media/8f1bc7_e0325b7852c34f7e88686dfd8e9f3b6b~mv2.avif", label: "Multiple Filtration System" },
      { icon: "https://static.wixstatic.com/media/8f1bc7_857f66bbd5834361b152b9a92c63e4e8~mv2.avif", label: "Wall, Car & Battery Power" },
      { icon: "https://static.wixstatic.com/media/8f1bc7_aa13bd0229ce4e3cbbc5c72ae8ee735b~mv2.avif", label: "Under 60 dB(A)" },
      { icon: "https://static.wixstatic.com/media/8f1bc7_c4306d458f384be09013c57d31ea9c9c~mv2.avif", label: "Ready in 3 Minutes" },
      { icon: "https://static.wixstatic.com/media/8f1bc7_d99e126153214119b1c3428dfce1f5cb~mv2.avif", label: "Up to 5,000m Altitude" },
    ],
  },

  // ── OXYGEN ON THE GO ──
  oxygenOnTheGo: {
    heading: "From Home to Outdoors",
    subtext: "The compact design makes it easier to keep oxygen support close throughout your routine. Use it at home, connect it inside the car, or carry it during short trips and outdoor activities.",
    items: [
      { image: "https://static.wixstatic.com/media/8f1bc7_906a51bcb5db46399f98d2934416cee0~mv2.avif", label: "Travel" },
      { image: "https://static.wixstatic.com/media/8f1bc7_4958f1b6e25f43c7b84b186250c69fd7~mv2.avif", label: "At Home" },
      { image: "https://static.wixstatic.com/media/8f1bc7_1cd09645060d4913b904fb36add92f08~mv2.avif", label: "In the Car" },
      { image: "https://static.wixstatic.com/media/8f1bc7_d6af48e45af746dcbf8765685502a08b~mv2.avif", label: "Outdoor" },
    ],
  },

  // ── PRODUCT DETAILS ──
  productDetails: [
    {
      image: "https://static.wixstatic.com/media/8f1bc7_7113ffd2d15e4eb99f7dda9dbcf1bb02~mv2.avif",
      heading: "Three Modes. More Control.",
      content: "Choose how the concentrator delivers oxygen across eight settings. Pulse Dose responds to each inhalation. Constant Flow provides 17 oxygen bursts per minute, with output up to 1,200 mL/min. Level 8 adds uninterrupted Continuous Flow at up to 2,000 mL/min.",
      reverse: false,
    },
    {
      image: "https://static.wixstatic.com/media/8f1bc7_f56810431420481394f65b01a0a7bf28~mv2.avif",
      heading: "Consistent Oxygen Purity",
      content: "Surrounding air passes through multiple filters before reaching the molecular sieve, where nitrogen is separated from oxygen. The concentrated oxygen then moves through the outlet for delivery, providing 90% ±3% oxygen purity across all eight settings and three delivery modes.",
      reverse: true,
    },
    {
      image: "https://static.wixstatic.com/media/8f1bc7_82ae2437c3d1409b8157907abdf27913~mv2.avif",
      heading: "Advanced Filtration. Cleaner Air.",
      content: "The concentrator draws in surrounding air and passes it through multiple filtration stages that help clean it before concentration. The filtered air then reaches the molecular sieve, where nitrogen is separated before concentrated oxygen moves through the outlet for delivery.",
      reverse: false,
    },
    {
      image: "https://static.wixstatic.com/media/8f1bc7_a69ba8c59e7b4a1ba1d258067eef9f9e~mv2.avif",
      heading: "Reliable at Higher Altitudes",
      content: "Designed to operate at elevations up to 5,000 metres, the concentrator supports dependable use in high-altitude locations. Whether you are travelling through the mountains or living at elevation, it helps maintain stable oxygen output within the manufacturer's stated operating conditions.",
      reverse: true,
    },
    {
      image: "https://static.wixstatic.com/media/8f1bc7_121427af9c2f4dd1b2d42b7a2dc919d3~mv2.avif",
      heading: "Output at Every Level",
      content: "Each setting increases oxygen output in clear steps. Levels 1–6 range from 200 to 1,200 mL/min. Level 7 provides 1,200 mL/min at a constant frequency, while Level 8 delivers continuous flow at up to 2,000 mL/min.",
      reverse: false,
    },
  ],

  // ── STAY POWERED ──
  stayPowered: {
    heading: "Choose Your Power Source",
    subtext: "Connect the concentrator to a standard wall outlet at home, use the 12V DC adapter inside a vehicle, or run it from the rechargeable battery. These three power options support use when moving between home, car, and outdoor locations.",
    items: [
      { image: "https://static.wixstatic.com/media/8f1bc7_bdc54fd7eb194c11b0306f3961cb1c37~mv2.avif", label: "At Home" },
      { image: "https://static.wixstatic.com/media/8f1bc7_7d04b14cb9244c5e9b6e20e8d794e0b0~mv2.avif", label: "In a Car" },
      { image: "https://static.wixstatic.com/media/8f1bc7_ecb1cf3dc0ba411c96d5365d816781d3~mv2.avif", label: "On Battery" },
    ],
  },

  // ── ADDITIONAL INFO ──
  additionalInfo: {
    features: [
      "Offers eight adjustable settings with output from 200 to 2,000 mL/min",
      "Includes Pulse Dose, Constant Flow, and Continuous Flow modes",
      "Detects inhalation and delivers oxygen during each breath in Pulse Dose",
      "Provides 17 steady oxygen bursts per minute in Constant Flow",
      "Delivers uninterrupted output up to 2,000 mL/min at Level 8",
      "Provides 90% ±3% oxygen purity across all eight settings",
      "Uses multiple filters and a molecular sieve to concentrate oxygen",
      "Runs up to 12 hours with the rechargeable 18 cells",
      "Supports wall, vehicle, and rechargeable battery power",
      "Weighs 4.85 lbs with the battery attached",
      "Operates below 60 dB(A) and warms up in three minutes",
      "Supports operation at elevations up to 5,000 meters",
    ],
    specs: [
      { label: "Product Type", value: "Portable Oxygen Concentrator" },
      { label: "Number of Settings", value: "8" },
      { label: "Delivery Modes", value: "Pulse Dose, Constant Flow, and Continuous Flow" },
      { label: "Pulse Dose Operation", value: "Responds to detected inhalation" },
      { label: "Constant Flow Frequency", value: "17 oxygen bursts per minute" },
      { label: "Continuous Flow", value: "Available at Level 8" },
      { label: "Oxygen Output Range", value: "200–2,000 mL/min" },
      { label: "Maximum Output", value: "Up to 2,000 mL/min at Level 8" },
      { label: "Oxygen Purity", value: "90% ±3%" },
      { label: "Filtration", value: "Multiple filtration stages and molecular sieve" },
      { label: "Battery Type", value: "Detachable rechargeable 18-cell battery" },
      { label: "Pulse Dose Runtime", value: "Approximately 12 hours" },
      { label: "Charging Time", value: "Approximately 4 hours" },
      { label: "Device Weight Without Battery", value: "1.7 kg" },
      { label: "Battery Weight", value: "0.5 kg" },
      { label: "Operating Weight", value: "2.2 kg / 4.85 lbs" },
      { label: "Product Dimensions", value: "182 × 86.5 × 213 mm" },
      { label: "Gross Packaged Weight", value: "Approximately 3.3 kg" },
      { label: "Carton Size", value: "17 × 25 × 39.5 cm" },
      { label: "Operating Noise", value: "Below 60 dB(A)" },
      { label: "Warm-Up Time", value: "3 minutes" },
      { label: "Power Consumption", value: "Below 90W" },
      { label: "AC Power Input", value: "100–240V, 50/60Hz" },
      { label: "DC Power Input", value: "12V" },
      { label: "Operating Temperature", value: "5°C–40°C" },
      { label: "Operating Humidity", value: "80% or lower" },
      { label: "Atmospheric Pressure", value: "54–106 kPa" },
      { label: "Operating Altitude", value: "0–5,000 metres" },
    ],
    disclaimer: "The Oxliv 1-8L Portable Oxygen Concentrator is not a medical device. It is designed for travel, recreation, fitness, and everyday comfort, not to diagnose, treat, or prevent any illness or condition. Anyone with a medical condition should speak with a healthcare professional before using the device.",
  },

  // ── INSIDE BOX ──
  insideBox: {
    image: "https://static.wixstatic.com/media/8f1bc7_fe9d6e01321c4763ad7c7c477a211ed0~mv2.avif",
    items: [
      "Portable Oxygen Concentrator",
      "Carry Bag",
      "Shoulder Strap",
      "1 or 2 Rechargeable Batteries, based on the selected option",
      "AC Power Adapter",
      "12V Car Charger",
      "Nasal Cannula",
      "5 Replacement Filters",
    ],
  },

  // ── PRODUCT FAQ ──
  productFaq: [
    { q: 'What does "1–8L" mean?', a: '"1–8L" refers to the eight device settings numbered 1 through 8. It does not mean an output of 1–8 litres per minute. Each setting increases oxygen output in clear steps from 200 mL/min at Level 1 up to 2,000 mL/min at Level 8.' },
    { q: "How do the three delivery modes differ?", a: "Pulse Dose responds to each inhalation and delivers a burst of oxygen with every breath. Constant Flow provides 17 oxygen bursts per minute, with output up to 1,200 mL/min. Level 8 adds uninterrupted Continuous Flow at up to 2,000 mL/min." },
    { q: "What oxygen purity does it provide?", a: "The concentrator provides 90% ±3% oxygen purity across all eight settings and all three delivery modes." },
    { q: "How long does the battery last?", a: "One rechargeable 18-cell battery provides approximately 12 hours of use. Adding a second battery extends runtime to approximately 24 hours. Battery runtime varies with the selected setting, delivery mode, battery condition, temperature, and charging habits." },
    { q: "How long does charging take?", a: "The battery charges in approximately 4 hours." },
    { q: "How should the concentrator and battery be stored?", a: "Store the device in a cool, dry location between 5°C and 40°C and away from direct sunlight. Remove the battery if storing for an extended period and keep it partially charged to help preserve battery life." },
    { q: "Can it use wall and vehicle power?", a: "Yes. Connect it to a standard 100–240V wall outlet at home or use the 12V DC adapter inside a vehicle. The rechargeable battery provides cordless use when a power source is not available." },
    { q: "How should the filters be maintained?", a: "Check the filters regularly for visible dust or debris. Follow the cleaning and replacement instructions provided in the included user manual to maintain steady airflow and proper operation." },
    { q: "Can it operate at higher elevations?", a: "Yes. The concentrator is designed to operate at elevations up to 5,000 metres, supporting dependable use in high-altitude locations." },
    { q: "Can the battery be replaced during longer trips?", a: "Yes. The 18-cell battery detaches and reattaches in seconds. Carrying a second fully charged battery allows you to extend use to approximately 24 hours without stopping to charge." },
  ],
};

export default product;
