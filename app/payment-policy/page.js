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

      <h2>Payment Process</h2>
      <p>Log into your payment provider and enter your details. Submit to complete the payment. Once processed, you will receive an order confirmation by email.</p>

      <h2>Payment Problems</h2>
      <p>If your payment is unsuccessful, it is often due to a limit set by your card company on one-time transactions. Please try completing your payment again, or use an alternative method.</p>

      <h2>Safe and Secure Shopping</h2>
      <p>We use Secure Sockets Layer (SSL) technology to create an encrypted connection between our site and your browser, keeping your data private. This secure connection is active as soon as you begin your order — you can confirm it by the closed-lock icon in your browser and the "https" prefix in the website address.</p>

      <h2>Contact Us</h2>
      <p>For more information, please contact us at <a href="mailto:hi@supportoxygengears.com">hi@supportoxygengears.com</a></p>

      <div className={styles.disclaimer}>
        <strong>Important Disclaimer:</strong> This product is intended for general wellness, comfort, and lifestyle use only. It is not a medical device and is not intended to diagnose, treat, cure, prevent, or monitor any disease or health condition.
      </div>
    </PolicyPage>
  );
}
