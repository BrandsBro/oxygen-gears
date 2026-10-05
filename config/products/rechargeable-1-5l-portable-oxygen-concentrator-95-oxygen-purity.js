const product = {
  template: "concentrator",

  // ── SECTION VISIBILITY FLAGS ──
  // Hides all sections except Reviews and the new quickStats / productCompare blocks.
  // Set any flag to true (or remove it) to re-enable the section later.
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

  // ── HERO FEATURE ──
  heroFeature: {
    heading: "Easy To Carry. Easy To Take Along.",
    highlight: "Only 3.53 lb",
    highlightColor: "#e05a3a",
    subtext: "Lighter than half a gallon of water.",
    subtextColor: "#58ACAF",
    bullets: [
      "Carry it over your shoulder with the included bag and adjustable strap.",
      "Move from home to the car with one compact device.",
    ],
    bgImage: "https://static.wixstatic.com/media/8f1bc7_506cbb86ff434b3c8bc8fe195b69e89f~mv2.webp",
    mobileImage: "https://static.wixstatic.com/media/8f1bc7_1d80c301e3d24a8291fce4941c71e6db~mv2.webp",
  },

  // ── QUICK STATS ──
  quickStats: {
    items: [
      {
        icon: "https://static.wixstatic.com/shapes/8f1bc7_015e37953a3f43bab829335ebf70721a.svg",
        title: "3.53 lb / 1.6 kg",
        sub: "Light enough to keep close.",
      },
      {
        icon: "https://static.wixstatic.com/shapes/8f1bc7_331acb4ba9704b8cbbc25a3c72accfaf.svg",
        title: "Six-Layer Filtration",
        sub: "More Consistent Oxygen Output.",
      },
      {
        icon: "https://static.wixstatic.com/shapes/8f1bc7_8dfa1e44d80b4c2b9f5e07be7bdc4442.svg",
        title: "Up To 95% Purity",
        sub: "High-purity output at levels 1–3.",
      },
      {
        icon: "https://static.wixstatic.com/shapes/8f1bc7_f2b679bf14a84af2adbd29c81e30cb19.svg",
        title: "6600mAh Battery",
        sub: "Up to 6 hours of battery time.",
      },
    ],
  },

  // ── PRODUCT COMPARE ──
  productCompare: {
    heading: "What Sets Oxliv Apart",
    subtext: "See how the Oxliv 1-5L stacks up against other portable oxygen concentrators under $1000.",
    image: "https://static.wixstatic.com/media/8f1bc7_898630002b4e4d2aa53cf452a8440558~mv2.webp",
    imageAlt: "Oxliv 1-5L Portable Oxygen Concentrator",
    rows: [
      { feature: "Filtration", ours: "6-layer advanced system", theirs: "No Filtration" },
      { feature: "O₂ Purity", ours: "Up to 95% high purity", theirs: "Average 35–60% Purity" },
      { feature: "Real-Time O₂ Display", ours: "Yes, live purity readout", theirs: "✕" },
      { feature: "Molecular Sieve (Core Component)", ours: "High-efficiency sieve, stable output", theirs: "✕" },
      { feature: "Dual Modes (Pulse + Active)", ours: "✓", theirs: "Only One Mode" },
      { feature: "Smart Alerts & Protection", ours: "7-fold intelligent alarm", theirs: "✕" },
      { feature: "Fast Charging", ours: "✓", theirs: "✕" },
      { feature: "Swappable Battery", ours: "✓", theirs: "✕" },
    ],
  },

  // ── COUNTDOWN BANNER ──
  countdownBanner: {
    image: "https://static.wixstatic.com/media/8f1bc7_cb94d0451c94402abd0e8b2183231af5~mv2.webp",
    imageAlt: "Limited Time Sale — 1-5L Portable Oxygen Concentrator",
    disclaimer: "This is NOT a medical-grade oxygen device. Designed for comfort and low-flow support only. If you need prescribed oxygen therapy, consult your doctor.",
  },

  // ── FEATURE SECTIONS (centered heading + subtext + full-width infographic image) ──
  featureSectionsAfter: [
    {
      heading: "Five Levels. Oxygen Flow That Fits Your Day.",
      subtext: "One compact device gives you five adjustable output levels from 200 to 1,000 mL/min. Clear controls make each level easy to select. So you can change the output without dealing with a complicated setup.",
      image: "https://static.wixstatic.com/media/8f1bc7_22ebc624bbdb4c1796e0386937a358a5~mv2.webp",
    },
    {
      heading: "Seven Alerts. Clear Signals When It Matters.",
      subtext: "Seven built-in alerts monitor key conditions while the device is running. Each alert helps you know when something needs attention, so you can respond quickly and use the device with greater confidence.",
      image: "https://static.wixstatic.com/media/8f1bc7_eb747182f17e41e6915761af9b83faed~mv2.webp",
      fullWidth: true,
    },
  ],

  // ── TECH SPECS ──
  techSpecs: {
    heading: "Technical Specifications",
    tabs: [
      {
        label: "Physical & Tech Details",
        rows: [
          { label: "Net Weight", value: "3.53 lb (1.6 kg) with single battery" },
          { label: "Oxygen Flow", value: "Flow settings 1, 2, 3, 4, 5" },
          { label: "Oxygen Concentration", value: ["95% at levels 1–3", "70% at level 4", "60% at level 5"] },
          { label: "Maximum Oxygen Output", value: "1000 ml/min" },
          { label: "Flow Mode", value: "Pulse Mode, Active Mode" },
          { label: "Technology", value: "Pressure Swing Adsorption (PSA)" },
          { label: "Sound", value: "≤49 dB" },
          { label: "Filtration", value: "6-layer system with molecular sieve" },
        ],
      },
      {
        label: "Battery & Charging",
        rows: [
          { label: "Battery Running Time", value: "6600mAh" },
          { label: "Single Battery Runtime", value: "Up to 6 hours" },
          { label: "Charging Sources", value: "Wall adapter, car charging cable, USB-C" },
          { label: "Swappable Battery", value: "Yes." },
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
    image: "https://static.wixstatic.com/media/8f1bc7_b379fd1fd92a4e93aff56ae1b3b34db5~mv2.webp",
    items: [
      "1-5L oxygen concentrator",
      "Removable 6600mAh battery",
      "Wall adapter",
      "Car charging cable",
      "Carry bag",
      "Adjustable shoulder strap",
      "Nasal cannulas",
      "5x Extra Filter cotton",
      "User manual",
    ],
  },

  // ── FINAL FEATURE SECTIONS (after DetailGrid) ──
  featureSectionsFinal: [
    {
      heading: "Goes Where Your Day Takes You",
      image: "https://static.wixstatic.com/media/8f1bc7_37d9c0d0339c4dd2ac7fe48b42f9d03f~mv2.webp",
    },
  ],

  // ── DETAIL GRID — "Every Detail Built With Purpose" ──
  detailGrid: {
    heading: "Every Detail Built With Purpose",
    images: [
      "https://static.wixstatic.com/media/8f1bc7_a184b9d3c8eb4cd19dfe21059d12d930~mv2.webp",
      "https://static.wixstatic.com/media/8f1bc7_65b1a5ee7b564d818303d58bc5c493e4~mv2.webp",
      "https://static.wixstatic.com/media/8f1bc7_4c4dd4399f7c4005886188735278364c~mv2.webp",
      "https://static.wixstatic.com/media/8f1bc7_58b48ef398ff4b34b30cccace94ab7b3~mv2.webp",
      "https://static.wixstatic.com/media/8f1bc7_683fe0854e9548129b80664e8a46aaaa~mv2.webp",
    ],
  },

  featureSections: [
    {
      heading: "High Purity Starts At The Core",
      subtext: "We wanted a compact device without making purity an afterthought. That's why we chose a high-efficiency molecular sieve. It delivers up to 95% oxygen purity at Levels 1–3. Purity changes with the output setting, reaching 70% at Level 4 and 60% at Level 5.",
      image: "https://static.wixstatic.com/media/8f1bc7_24f883a543ed4af3986050667e7c7a9c~mv2.webp",
    },
    {
      heading: "Extra Power For The Extra Hours",
      subtext: "Enjoy up to six hours of use with the 6600mAh battery. For longer days out, swap in a charged spare and carry on without interruption. Runtime varies by the selected level, output mode, temperature, and battery condition.",
      image: "https://static.wixstatic.com/media/8f1bc7_baac8587191b426bbf57b5bbcdab7af4~mv2.webp",
    },
  ],

  // ── ALTERNATING FEATURE (section heading + image/text alternating rows) ──
  alternatingFeature: {
    heading: "Two Modes: Breath-Triggered Oxygen With Timed Backup Support",
    items: [
      {
        image: "https://static.wixstatic.com/media/8f1bc7_1911966eed804629ab1e927fc505bf3d~mv2.webp",
        heading: "Pulse Mode: Oxygen As You Inhale",
        subtext: "Each detected inhale triggers an oxygen pulse. Delivery pauses as you breathe out, then resumes with your next detected breath. This directs oxygen delivery to the inhalation phase.",
        reverse: false,
      },
      {
        image: "https://static.wixstatic.com/media/8f1bc7_f0604458e12048699156c4c32609e328~mv2.webp",
        heading: "Active Mode: Backup When Breath Detection Pauses",
        subtext: "If the device stops detecting inhalation, it switches to timed oxygen pulses. Once it detects your breath again, it returns to Pulse mode automatically.",
        reverse: true,
      },
    ],
  },

  // ── FEATURE VIDEO (text left, video right) ──
  featureVideo: {
    layout: "text-video",
    heading: "Small Device. Smart Features.",
    subtext: [
      "Take a closer look at the details that make daily use easier. A clear display keeps important information easy to see, while two output modes support different patterns of use.",
      "Six-layer filtration and flexible power options complete a compact design made for home, car rides, and time outside.",
    ],
    videoUrl: "https://video.wixstatic.com/video/8f1bc7_f57f5d52ea594ef78380d03ff9d21036/1080p/mp4/file.mp4",
  },

  // ── VIDEO SECTION (stacked — customer testimonial) ──
  videoSection: {
    layout: "stacked",
    heading: "Hear It From Someone Who Owns It",
    subtext: "No script, no filter. Just a customer sharing how easy the device is to use and how well it fits into her daily routine. Hear what she loves about using it in her own words.",
    videoUrl: "https://video.wixstatic.com/video/8f1bc7_7c2d377bc48c407186a6bf7baef6624a/1080p/mp4/file.mp4",
  },

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
    { image: "https://static.wixstatic.com/media/8f1bc7_a6a65a88257f4184832d9388b43d894a~mv2.webp", heading: "7-Fold Intelligent Alarm System Your Personal Safety Guardian For Oxygen Use", content: "Seven automatic alerts keep important device conditions visible during everyday use. The system checks temperature, cooling fan, valve, battery, compressor, adapter connection, and breath detection, then shows a warning when one of these areas requires attention.", reverse: true },
    { image: "https://static.wixstatic.com/media/8f1bc7_f38a7e64c4ec4102b540180261b38dd9~mv2.webp", heading: "Built For Better Separation", content:"Incoming air passes through a high-efficiency molecular sieve that captures nitrogen and allows concentrated oxygen to continue through the system. The sieve resists moisture, stays stable during regular operation, and provides reliable separation over time." , reverse: false },

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
