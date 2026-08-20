import PolicyPage from "@/components/PolicyPage/PolicyPage";

export default function ReturnPolicy() {
  return (
    <PolicyPage title="Return Policy">
      <p>This policy explains how to return a product. Please read each step so your return goes smoothly.</p>

      <h2>Return Eligibility</h2>
      <p>Returns are accepted within 30 days of delivery when:</p>
      <ul>
        <li>The unit is unused and in original condition</li>
        <li>Original packaging and included accessories are returned with it</li>
      </ul>
      <p>Hygiene-related consumable items such as nasal cannulas cannot be returned once opened.</p>

      <h2>Before You Return</h2>
      <p>To help us process your return quickly, please have ready:</p>
      <ul>
        <li>A photo of the product as delivered</li>
        <li>A photo of the product before you ship it back</li>
        <li>A short video showing the product's condition or the issue</li>
      </ul>

      <h2>How to Start a Return</h2>
      <p>Email <a href="mailto:hi@supportoxygengears.com">hi@supportoxygengears.com</a> with your order number, the reason for return, and your photo/video proof. We respond within 2–3 business days.</p>

      <h2>Return Process & Timeline</h2>
      <ol>
        <li>Request approval with proof — Email us your return request. We review and respond in 2–3 business days.</li>
        <li>Receive return address — On approval, we share the warehouse address and instructions.</li>
        <li>Ship the product to the provided address only.</li>
        <li>Share your tracking number — Reply with tracking after you ship.</li>
        <li>Inspection — We inspect the unit within 5–7 business days of receiving it.</li>
        <li>Processing — Your refund or replacement is issued within 3–5 business days after inspection.</li>
      </ol>
      <p>Total: approximately 10–15 business days from approval to resolution.</p>

      <h2>Return Shipping Costs</h2>
      <p>You are responsible for return shipping costs for change-of-mind returns. We cover return shipping for verified defects, wrong items, or shipping damage.</p>

      <h2>Warranty</h2>
      <p>Defective units are covered by a 1-year limited warranty for replacement.</p>
    </PolicyPage>
  );
}
