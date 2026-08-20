import PolicyPage from "@/components/PolicyPage/PolicyPage";

export default function RefundPolicy() {
  return (
    <PolicyPage title="Refund Policy">
      <p>This section explains how refunds are approved, processed, and issued.</p>

      <h2>Refund Eligibility</h2>
      <p>A refund may be approved when all applicable conditions below are met:</p>
      <ul>
        <li>You contact our support team before returning the product</li>
        <li>Your request is submitted within 30 days of delivery</li>
        <li>The product is unused and returned with its original packaging</li>
        <li>You provide the required photos, videos, or supporting documents</li>
      </ul>

      <h2>Refund Categories</h2>
      <ul>
        <li><strong>Category A — Manufacturer Defect:</strong> Full Refund. The product arrives damaged or does not function properly.</li>
        <li><strong>Category B — Non-Delivery, Wrong Item, or Shipping Damage:</strong> Full Refund.</li>
        <li><strong>Category C — Does Not Meet Your Stated Needs:</strong> Full Refund. The device does not provide adequate performance for the needs you described before purchasing.</li>
        <li><strong>Category D — Change of Mind:</strong> Refund minus up to 30% restocking fee. Return shipping is your responsibility.</li>
      </ul>

      <h2>Refund Timeline</h2>
      <ol>
        <li><strong>Support Review (2–3 business days):</strong> Email us with your order number and details.</li>
        <li><strong>Return Authorization:</strong> If approved, you receive the correct return address.</li>
        <li><strong>Inspection (5–7 business days after receipt):</strong> We inspect the returned product.</li>
        <li><strong>Refund Processing (3–5 business days after inspection):</strong> Refund issued to original payment method.</li>
      </ol>
      <p>The overall process normally takes approximately 10–15 business days, excluding return-transit and bank-processing time.</p>

      <h2>How to Request a Refund</h2>
      <p>Email <a href="mailto:hi@supportoxygengears.com">hi@supportoxygengears.com</a> with your order number, purchase date, a clear description of the issue, and required photos or video.</p>
    </PolicyPage>
  );
}
