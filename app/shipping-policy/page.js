import PolicyPage from "@/components/PolicyPage/PolicyPage";

export default function ShippingPolicy() {
  return (
    <PolicyPage title="Shipping Policy">
      <h2>Delivery Times</h2>
      <p>Orders are typically processed within 1–2 business days and delivered within 6–12 business days, depending on your location. You'll receive tracking as soon as your order ships. Delivery windows are estimates and can occasionally be affected by customs or carrier delays.</p>

      <h2>Shipping Methods</h2>
      <p>We ship via UPS, USPS, DHL, and 4PX.</p>

      <h2>Shipping Locations</h2>
      <p>We currently ship within the USA. We're unable to deliver to P.O. boxes or A.P.O./F.P.O. addresses.</p>

      <h2>Address Accuracy</h2>
      <p>Please double-check your shipping address at checkout. Orders ship to the exact address provided. If you catch a mistake, email us right away and we'll correct it if the order hasn't shipped.</p>

      <h2>Tracking Your Order</h2>
      <p>Once your order ships, we email you tracking so you can monitor it. If you don't receive it, contact <a href="mailto:support@oxliv.store">support@oxliv.store</a> and we'll resend it.</p>

      <h2>Tracking & Delivery Responsibility</h2>
      <p>Once you have a tracking number, you can monitor delivery progress and arrange missed-delivery redelivery or local pickup directly with the courier. If you have any trouble, contact us and we'll help.</p>

      <h2>Damaged Packages</h2>
      <p>If your package arrives damaged, take photos right away and email <a href="mailto:support@oxliv.store">support@oxliv.store</a> with the evidence. We'll make it right.</p>

      <h2>Customs & Duties</h2>
      <p>All shipments are Delivery Duty Paid (DDP) — taxes and duties are included in your price. If a courier ever requests an additional charge at delivery, contact us before paying and we'll assist.</p>

      <h2>Transit Insurance</h2>
      <p>Orders are insured during transit until delivery is completed. If you instruct the courier to leave the package unattended, we can't be responsible for loss or theft after it's marked delivered.</p>

      <h2>Undeliverable & Returned Packages</h2>
      <p>If a package is returned because it couldn't be delivered, we'll contact you and re-ship at no extra cost once a correct address is confirmed. If a package is returned due to an error on our side, we cover the re-ship in full.</p>

      <h2>Proof of Delivery</h2>
      <p>Tracking updates from UPS, USPS, DHL, or 4PX serve as proof of delivery status.</p>

      <h2>Reporting a Non-Delivery</h2>
      <p>If tracking shows delivered but you haven't received your package, please report it within 7 days of the last tracking update so we can open a carrier investigation. Reports after this window are harder to investigate, but still contact us and we'll do what we can.</p>
    </PolicyPage>
  );
}
