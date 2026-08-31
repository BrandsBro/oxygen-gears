const productTemplates = {

  "1to7l-portable-oxygen-concentrator": {
    template: "concentrator",
    config: () => import("@/config/products/1-7lmin-smart-portable-oxygen-concentrator-10-hours-battery-adjustable-flow"),
  },

  "rechargeable-1-5l-portable-oxygen-concentrator-95-oxygen-purity": {
    template: "concentrator",
    config: () => import("@/config/products/rechargeable-1-5l-portable-oxygen-concentrator-95-oxygen-purity"),
  },

  "rechargeable-battery-for-1-7lmin-portable-oxygen-concentrator": {
    template: "accessory",
    config: () => import("@/config/products/rechargeable-battery-for-1-7lmin-portable-oxygen-concentrator"),
  },

  "5-pieces-nasal-cannulas-for-1-7lmin-portable-oxygen-concentrator-2m-flexible": {
    template: "accessory",
    config: () => import("@/config/products/5-pieces-nasal-cannulas-for-1-7lmin-portable-oxygen-concentrator-2m-flexible"),
  },

  "reliable-home-charging-adapter-for-1-7lmin-portable-oxygen-concentrator": {
    template: "accessory",
    config: () => import("@/config/products/reliable-home-charging-adapter-for-1-7lmin-portable-oxygen-concentrator"),
  },

  "car-charging-cable-for-1-7lmin-portable-oxygen-concentrator": {
    template: "accessory",
    config: () => import("@/config/products/car-charging-cable-for-1-7lmin-portable-oxygen-concentrator"),
  },

  "shoulder-strap-carry-bag-for-1-7lmin-portable-oxygen-concentrator": {
    template: "accessory",
    config: () => import("@/config/products/shoulder-strap-carry-bag-for-1-7lmin-portable-oxygen-concentrator"),
  },

};

export default productTemplates;
