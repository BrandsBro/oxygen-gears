"use client";
import { useState } from "react";
import styles from "./contact.module.css";
import brand from "@/config/brand";

const paymentMethods = ["Visa", "Mastercard", "American Express", "PayPal", "Apple Pay", "Google Pay", "Cash on Delivery", "Bank Transfer"];

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    orderNumber: "", orderDate: "", paymentMethod: "",
    state: "", city: "", message: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
      if (data.success) setForm({ firstName: "", lastName: "", email: "", phone: "", orderNumber: "", orderDate: "", paymentMethod: "", state: "", city: "", message: "" });
    } catch {
      setStatus("error");
    }
    setLoading(false);
  };

  return (
    <div className={styles.page}>
      <div className={styles.inner}>

        {/* Left — Form */}
        <div className={styles.formSide}>
          <h1 className={styles.heading}>Contact Us</h1>
          <p className={styles.subtext}>Have questions or need help? We'll get back to you as soon as possible!</p>

          {status === "success" && <div className={styles.successMsg}>✅ Message sent! We'll be in touch soon.</div>}
          {status === "error" && <div className={styles.errorMsg}>❌ Something went wrong. Please try again.</div>}

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>First Name *</label>
                <input name="firstName" required value={form.firstName} onChange={handleChange} placeholder="John" />
              </div>
              <div className={styles.field}>
                <label>Last Name *</label>
                <input name="lastName" required value={form.lastName} onChange={handleChange} placeholder="Doe" />
              </div>
            </div>

            <div className={styles.field}>
              <label>Email Address *</label>
              <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@example.com" />
            </div>

            <div className={styles.field}>
              <label>Phone Number</label>
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 000-000-0000" />
            </div>

            <div className={styles.field}>
              <label>Order Number *</label>
              <input name="orderNumber" required value={form.orderNumber} onChange={handleChange} placeholder="Your order number" />
            </div>

            <div className={styles.field}>
              <label>Order Date *</label>
              <input name="orderDate" type="date" required value={form.orderDate} onChange={handleChange} />
            </div>

            <div className={styles.field}>
              <label>Payment Method *</label>
              <select name="paymentMethod" required value={form.paymentMethod} onChange={handleChange}>
                <option value="">Select one</option>
                {paymentMethods.map(m => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label>State / Province *</label>
                <input name="state" required value={form.state} onChange={handleChange} placeholder="California" />
              </div>
              <div className={styles.field}>
                <label>City *</label>
                <input name="city" required value={form.city} onChange={handleChange} placeholder="Los Angeles" />
              </div>
            </div>

            <div className={styles.field}>
              <label>Message *</label>
              <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="We'd love to hear from you..." />
            </div>

            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>

        {/* Right — Info */}
        <div className={styles.infoSide}>
          <h2 className={styles.infoHeading}>Don't be Shy, Say Hello!</h2>
          <p className={styles.infoText}>Have questions or need help? Contact us below, and we'll get back to you as soon as possible!</p>
          <img
            src="https://static.wixstatic.com/media/8f1bc7_378e4bc11f3f4cb8bb4d98c4f32a8c34~mv2.avif"
            alt="Contact"
            className={styles.img}
          />
          <div className={styles.contactInfo}>
            <p><strong>Contact Info:</strong></p>
            <p>📧 <a href={`mailto:${brand.email}`}>{brand.email}</a></p>
            <p>📞 <a href={`tel:${brand.phone}`}>{brand.phone}</a></p>
          </div>
        </div>

      </div>
    </div>
  );
}
