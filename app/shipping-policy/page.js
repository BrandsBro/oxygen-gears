import PolicyPage from "@/components/PolicyPage/PolicyPage";

export default function ShippingPolicy() {
  return (
    <PolicyPage title="Shipping Policy">
      <h2>Delivery Times</h2>
      <p>Orders are typically processed within 24 hours and delivered within 8–11 business days, depending on your location. You will receive tracking as soon as your order ships.</p>

      <h2>Shipping Methods</h2>
      <p>We ship via UPS, USPS, DHL, and 4PX.</p>

      <h2>Shipping Locations</h2>
      <p>We currently ship within the USA. We are unable to deliver to P.O. boxes or A.P.O./F.P.O. addresses.</p>

      <h2>Address Accuracy</h2>
      <p>Please double-check your shipping address at checkout. Orders ship to the exact address provided. If you catch a mistake, email us right away and we will correct it if the order has not yet shipped.</p>

      <h2>Tracking Your Order</h2>
      <p>Once your order ships, we email you tracking so you can monitor it. If you do not receive it, contact <a href="mailto:hi@supportoxygengears.com">hi@supportoxygengears.com</a> and we will resend it.</p>

      <h2>Damaged Packages</h2>
      <p>If your package arrives damaged, take photos right away and email <a href="mailto:hi@supportoxygengears.com">hi@supportoxygengears.com</a> with the evidence. We will make it right.</p>

      <h2>Customs & Duties</h2>
      <p>All shipments are Delivery Duty Paid (DDP) — taxes and duties are included in your price.</p>

      <h2>Undeliverable & Returned Packages</h2>
      <p>If a package is returned because it could not be delivered, we will contact you and re-ship at no extra cost once a correct address is confirmed.</p>

      <h2>Reporting a Non-Delivery</h2>
      <p>If tracking shows delivered but you have not received your package, please report it within 7 days of the last tracking update so we can open a carrier investigation.</p>
    </PolicyPage>
  );
}
