// ─────────────────────────────────────────────
// Map each product slug → which template + config
// To add a new product: add a new entry here
// ─────────────────────────────────────────────

const productTemplates = {

  "1-7lmin-smart-portable-oxygen-concentrator-10-hours-battery-adjustable-flow": {
    template: "concentrator",
    config: () => import("@/config/products/1-7lmin-smart-portable-oxygen-concentrator-10-hours-battery-adjustable-flow"),
  },

  // Add new products here:
  // "your-product-slug": {
  //   template: "battery",
  //   config: () => import("@/config/products/your-product-slug"),
  // },

};

export default productTemplates;
