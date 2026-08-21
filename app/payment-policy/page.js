import PolicyPage from "@/components/PolicyPage/PolicyPage";
import styles from "@/components/PolicyPage/PolicyPage.module.css";

export default function PaymentPolicy() {
  return (
    <PolicyPage title="Payment Policy">
      <p>We offer secure payment options for your convenience. You can pay using:</p>
      <ul>
        <li>Cards — Visa, Mastercard, American Express, and others</li>
        <li>Digital wallets — Apple Pay, Google Pay, and others</li>
        <li>PayPal — link your credit card, debit card, or bank account</li>
      </ul>
      <p>If you choose PayPal, once you place an order you'll be redirected to PayPal to finish the transaction safely.</p>

      <h2>Payment Process</h2>
      <p>Log into your payment provider and enter your details. Click Submit to complete the payment. Once processed, you will receive an order confirmation by email.</p>

      <h2>Payment Problem</h2>
      <p>Oxliv promises a safe and secure shopping experience. If your payment is unsuccessful, it is often due to a limit set by your card company on one-time transactions. Please try completing your payment again or use an alternative method.</p>

      <h2>Safe and Secure Shopping</h2>
      <p>oxliv.store takes the necessary steps to protect your personal information. Your sensitive information, including your name, address, email, phone number, and credit card details, is kept secure with us.</p>
      <p>We use Secure Sockets Layer (SSL) technology to create an encrypted connection between our site and your browser. It ensures that all your data remains private and secure before being transmitted over the internet. SSL is the industry standard for secure online transactions.</p>
      <p>This secure connection is active as soon as you start your order. You can confirm this by checking for the closed lock icon in your browser. The website address will begin with "https" to indicate it's a secure server.</p>

      <h2>Contact Us</h2>
      <p>For more information, please contact us at <a href="mailto:support@oxliv.store">support@oxliv.store</a> or call us at <a href="tel:+13073107781">+1 307-310-7781</a></p>
    </PolicyPage>
  );
}
