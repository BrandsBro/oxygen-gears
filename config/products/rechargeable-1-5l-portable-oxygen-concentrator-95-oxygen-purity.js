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
  stayPowered: {
    heading: "3 Ways To Stay Powered",
    subtext: "Use wall power at home, a car charging cable while traveling, and battery power outdoors. Three simple options keep the device ready wherever you go.",
    items: [
      { image: "https://static.wixstatic.com/media/8f1bc7_659dda34b6854e3c82d66ba4f5bd09c6~mv2.webp", label: "Wall Outlet" },
      { image: "https://static.wixstatic.com/media/8f1bc7_e1b9fc38bb464c05823c32b1bcbc8256~mv2.webp", label: "Car Charging" },
      { image: "https://static.wixstatic.com/media/8f1bc7_af06eec56d674447a334db5243cac538~mv2.webp", label: "Battery Power" },
    ],
  },
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
    { image: "https://static.wixstatic.com/media/8f1bc7_161a37b930c6406aa15ca78954bfb607~mv2.webp", heading: "Five Levels, Made Easy", content: "Choose from five adjustable settings to suit different parts of your day. The clear controls make changing levels quick at home or away. Each setting is easy to reach, so you can adjust the oxygen output without working through a complicated setup.", reverse: false },
    { image: "https://static.wixstatic.com/media/8f1bc7_ced4fa6fec7549b9a78bd4edb1788dc7~mv2.webp", heading: "Battery Built For Hours", content: "The built-in 6400mAh battery provides up to 6 hours away from a wall outlet. Use it around the house, during errands, or outdoors. The longer runtime helps you finish more of your day before the device needs another charge.", reverse: true },
    { image: "https://static.wixstatic.com/media/8f1bc7_d50f4cbd7fcf467ca1738be75af7d697~mv2.webp", heading: "Two Modes, Easy Choice", content: "Pulse mode releases oxygen as you inhale, while Active mode provides output at a steady frequency. Switch between the two options based on the moment, whether you are resting indoors or staying active during everyday outings.", reverse: false },
    { image: "https://static.wixstatic.com/media/8f1bc7_d23eb2e08873418888d8af97063bd029~mv2.webp", heading: "Six Layers Working Inside", content: "Head outside and stay as long as you please, because Oxliv draws oxygen right from the open air.", reverse: true },
    { image: "https://static.wixstatic.com/media/8f1bc7_c83fc0068782449b8b43d1f8a8d4db65~mv2.webp", heading: "Lower Noise, Easier Moments", content: "You stay in control with five easy flow settings. Set it once, adjust anytime, and keep your day moving.", reverse: false },
    { image: "https://static.wixstatic.com/media/8f1bc7_a6a65a88257f4184832d9388b43d894a~mv2.webp", heading: "Seven automatic alerts keep important device conditions visible during everyday use. The system checks temperature, cooling fan, valve, battery, compressor, adapter connection, and breath detection, then shows a warning when one of these areas requires attention.", content: "Head outside and stay as long as you please, because Oxliv draws oxygen right from the open air.", reverse: true },
    { image: "https://static.wixstatic.com/media/8f1bc7_f38a7e64c4ec4102b540180261b38dd9~mv2.webp", heading: "Incoming air passes through a high-efficiency molecular sieve that captures nitrogen and allows concentrated oxygen to continue through the system. The sieve resists moisture, stays stable during regular operation, and provides reliable separation over time.", reverse: false },

  ],

 additionalInfo: {
  everydayUseCases: [
    "Road Trips: Connect it inside your vehicle.",
    "Trail Walks: Carry it on gentle outdoor routes.",
    "Grocery Runs: Keep it close while shopping.",
    "Yard Work: Use it during light outdoor tasks.",
    "Reading Time: Place it beside your chair.",
    "Meal Prep: Keep it nearby in the kitchen.",
    "Desk Work: Set it beside your workspace.",
    "Family Visits: Bring it along for the day.",
    "Park Visits: Use battery power while outdoors.",
    "Café Stops: Keep it beside your seat.",
    "Hotel Stays: Use wall or battery power.",
    "Porch Time: Relax outdoors with cordless power.",
  ],
  features: [
    "1-5 adjustable output levels",
    "Pulse and Active modes",
    "Up to 95% oxygen purity",
    "Six-layer filtration system",
    "Up to 6 hours of power",
    "Quiet ≤49 dB operation",
    "Lightweight 3.53 lbs design",
    "Wall, Car charging cable, and battery power",
  ],
  specs: [
    { label: "Product", value: "1-5L Mobile Oxygen Concentrator" },
    { label: "Output", value: "Five adjustable levels" },
    { label: "Operating Modes", value: "Pulse and Active" },
    { label: "Oxygen Purity", value: "Up to 95%" },
    { label: "Battery Capacity", value: "6400mAh" },
    { label: "Battery Life", value: "Up to 6 hours" },
    { label: "Noise Level", value: "≤49 dB" },
    { label: "Net Weight", value: "3.53 lbs (1.7 kg)" },
    { label: "Filtration", value: "6 layers" },
    { label: "Power Options", value: "Wall, Car charging cable, battery" },
    { label: "Material", value: "Metal and ABS" },
    { label: "Color", value: "White" },
    { label: "Warranty", value: "1 year" },
  ],
  disclaimer: "The Oxliv 1-5L Portable Oxygen Concentrator is not a medical device. They are designed for travel, recreation, fitness, and everyday comfort, not to diagnose, treat, or prevent any illness or condition. Anyone with a medical condition should speak with a healthcare professional before using the device.",
},
  // ── INSIDE BOX — update when ready ──
  insideBox: {
    image: "https://static.wixstatic.com/media/8f1bc7_bb9dd429e6bf4e99aed4f49b128c4c6b~mv2.webp",
    items: [
      "Portable Oxygen Concentrator",
      "Wall Power Adapter",
      "1 Battery",
      "Car Charging Cable",
      "2pc Nasal Cannula",
      "Travel Carry Bag",
      "Adjustable Shoulder Strap",
      "5pc Filter Cotton",
      "User Instruction Manual",
    ],
  },

  // ── PRODUCT FAQ ──
  productFaq: [
    { q: "How long does the battery last?", a: "The 6400mAh battery provides up to 6 hours of use. Actual runtime can vary based on the selected output level, operating mode, battery condition, and surrounding temperature." },
    { q: "Can I adjust the output?", a: "Yes, the device offers 5 adjustable levels. Use the simple controls to move between settings and select the output level that best fits your current routine." },
    { q: "How much noise does it make?", a: "The device operates at ≤49 dB. Its controlled sound level makes it easier to use while reading, watching television, working, or spending time with family." },
    { q: "Can I travel with it?", a: "Yes, the 3.53 lbs body and included carry bag make it easy to transport. For air travel, confirm the device and battery requirements with your airline before departure." },
    { q: "What comes inside the box?", a: "Your order includes the device, rechargeable battery, wall adapter, car charging cable, two oxygen tubes, an adjustable carry bag, and a user instruction manual." },
    { q: "Is the device easy to operate?", a: "Yes, connect the oxygen tube, choose a power source, turn on the device, and select your preferred level and mode. The included manual explains each control." },
    { q: "What power options are available?", a: "The device supports wall power at home, power inside a compatible vehicle, and cordless use through its rechargeable battery." },
    { q: "Is a user manual included?", a: "Yes. A printed user manual is included inside the box. It explains the controls, power options, operating modes, setup process, and basic product care." },
    { q: "How often should I clean the filter?", a: "Check the filter regularly for visible dust or debris. Follow the cleaning and replacement instructions provided in the manual to help maintain steady airflow and proper operation." },

  ],

};

export default product;
