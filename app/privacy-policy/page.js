import PolicyPage from "@/components/PolicyPage/PolicyPage";
import styles from "@/components/PolicyPage/PolicyPage.module.css";

export default function PrivacyPolicy() {
  return (
    <PolicyPage title="Privacy Policy">
      <p>This Privacy Policy explains how we collect, use, and share your personal information when you visit or make a purchase from our store.</p>

      <h2>Personal Information We Collect</h2>
      <p>When you visit the site, we automatically collect certain details about your device. This includes your web browser, IP address, time zone, and some of the cookies installed on your device.</p>
      <p>We collect Device Information using the following technologies:</p>
      <ul>
        <li><strong>Cookies:</strong> Data files placed on your device, often containing an anonymous unique identifier.</li>
        <li><strong>Log Files:</strong> Track actions on the site and collect data like your IP address, browser type, and date/time stamps.</li>
        <li><strong>Web Beacons, Tags and Pixels:</strong> Electronic files that record how you browse the site.</li>
      </ul>
      <p>When you make a purchase, we also collect your name, billing address, shipping address, payment information, email address, and phone number.</p>

      <h2>How Do We Use Your Personal Information?</h2>
      <ul>
        <li>Process your payment and arrange shipping</li>
        <li>Communicate with you about your order</li>
        <li>Screen orders for potential risk or fraud</li>
        <li>Improve and optimize our site</li>
      </ul>

      <h2>Sharing Your Personal Information</h2>
      <p>We share your personal information with third parties to help us operate our store. We may also share your personal information to comply with laws and regulations.</p>

      <h2>Your Rights</h2>
      <p>If you are a resident of the European Union, you have the right to access the personal information we hold about you and request it be corrected, updated, or deleted.</p>

      <h2>Contact Us</h2>
      <p>For more information about our privacy practices, please contact us at <a href="mailto:hi@supportoxygengears.com">hi@supportoxygengears.com</a></p>
    </PolicyPage>
  );
}
