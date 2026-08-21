import PolicyPage from "@/components/PolicyPage/PolicyPage";

export default function ReturnPolicy() {
  return (
    <PolicyPage title="Return Policy">
      <p>This policy explains how to return a product. Please read each step so your return goes smoothly. It works alongside our Refund Policy.</p>

      <h2>Return Eligibility</h2>
      <p>Returns are accepted within 30 days of delivery when:</p>
      <ul>
        <li>The unit is unused and in original condition (this does not apply to defective or damaged units).</li>
        <li>Original packaging and included accessories are returned with it.</li>
      </ul>
      <p>Hygiene-related consumable items (such as nasal cannulas) cannot be returned once opened, for health reasons.</p>

      <h2>Before You Return</h2>
      <p>To help us process your return quickly, please have ready:</p>
      <ul>
        <li>A photo of the product as delivered.</li>
        <li>A photo of the product before you ship it back.</li>
        <li>A short video showing the product's condition or the issue.</li>
      </ul>
      <p>If a defect is the reason, the video showing the problem is the most helpful thing you can send. We won't reject a return over a blurry photo.</p>

      <h2>How to Start a Return</h2>
      <p>Email <a href="mailto:support@oxliv.com">support@oxliv.com</a> with:</p>
      <ul>
        <li>Your order number</li>
        <li>The reason for return</li>
        <li>Your photo/video proof</li>
      </ul>
      <p>We respond within 2–3 business days. Once approved, we send you the correct return warehouse address.</p>

      <h2>Return Shipping Rules</h2>
      <ul>
        <li>Send the product only to the address we provide after approval.</li>
        <li>Returns sent to any other address without contacting us first cannot be accepted and will be returned to sender.</li>
        <li>Please don't ship the unit back before you've contacted us and received the return address.</li>
      </ul>

      <h2>Return Process & Timeline</h2>
      <ol>
        <li>Request approval with proof — Email us your return request. We review and respond in 2–3 business days.</li>
        <li>Receive return address — On approval, we share the warehouse address and instructions.</li>
        <li>Ship the product to the provided address only.</li>
        <li>Share your tracking number — Reply with tracking after you ship.</li>
        <li>Inspection — We inspect the unit within 5–7 business days of receiving it.</li>
        <li>Processing — Your refund or replacement is issued within 3–5 business days after inspection. Refunds post to your account in an additional 3–7 business days depending on your bank.</li>
      </ol>
      <p>Total: approximately 10–15 business days from approval to resolution, plus shipping and bank posting time.</p>

      <h2>Refund or Replacement</h2>
      <p>Depending on the situation and your preference:</p>
      <ul>
        <li>Defective or damaged unit: full refund, or a free replacement — your choice.</li>
        <li>Wrong or missing item: full refund or correct item sent.</li>
        <li>Device doesn't meet the needs you described to us: full refund.</li>
        <li>Change of mind: refund minus 15% restocking fee; return shipping is your responsibility.</li>
      </ul>
      <p>Defective units are covered by a 1-year limited warranty for replacement.</p>

      <h2>Before You Dispute a Charge</h2>
      <p>If something's wrong, email <a href="mailto:support@oxliv.com">support@oxliv.com</a> first. We resolve almost every return faster than a bank dispute. Contacting us gives us the chance to make it right quickly.</p>
    </PolicyPage>
  );
}
