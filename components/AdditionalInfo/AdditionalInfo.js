"use client";
import { useState } from "react";
import styles from "./AdditionalInfo.module.css";

const sections = [
  {
    title: "Features & Benefits",
    content: [
      "Delivers high-purity oxygen up to 90% for reliable daily breathing support",
      "Uses pulse oxygen technology that responds to your natural inhalation",
      "Automatically switches to fixed-frequency mode when no breath is detected",
      "Runs quietly below 60dB for comfortable use on the go",
      "Provides 1.5-5 hours of portable power with the replaceable battery box",
      "Offers seven adjustable oxygen levels for personalized airflow",
      "Compact 1.4 kg design fits easily in a backpack or travel bag",
      "Supports home, car, outdoor, and travel use with three power options",
      "Simple one-touch operation with a clear digital screen",
      "Includes a free carry bag, chargers, car charger and nasal tubes for instant setup",
    ],
    type: "list",
  },
  {
    title: "Specifications",
    content: [
      { label: "Oxygen Flow Range", value: "1-7L pulse gear levels" },
      { label: "Oxygen Purity", value: "85%-90% (varies with breathing frequency & gear)" },
      { label: "Weight", value: "1.4 kg (excluding battery)" },
      { label: "Battery Life", value: "1.5-5 hours (single battery)" },
      { label: "Charging Time", value: "~4 hours" },
      { label: "Dimensions", value: "195 × 85 × 175 mm" },
      { label: "Operating Noise", value: "≤ 56 dB" },
      { label: "Atmospheric Pressure Range", value: "86-106 kPa" },
      { label: "Power Input", value: "AC100-240V, 50/60 Hz" },
      { label: "Battery Capacity", value: "16.8V, 6400 mAh" },
    ],
    type: "specs",
  },
];

export default function AdditionalInfo() {
  const [open, setOpen] = useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Additional Information</h2>

        <div className={styles.list}>
          {sections.map((sec, i) => (
            <div key={i} className={`${styles.item} ${open === i ? styles.active : ""}`}>
              <button className={styles.trigger} onClick={() => setOpen(open === i ? null : i)}>
                <span>{sec.title}</span>
                <span className={`${styles.icon} ${open === i ? styles.iconOpen : ""}`}>
                  {open === i ? "−" : "+"}
                </span>
              </button>

              <div className={`${styles.body} ${open === i ? styles.bodyOpen : ""}`}>
                <div className={styles.bodyInner}>
                  {sec.type === "list" && (
                    <ul className={styles.ul}>
                      {sec.content.map((item, j) => (
                        <li key={j} className={styles.li}>• {item}</li>
                      ))}
                    </ul>
                  )}
                  {sec.type === "specs" && (
                    <table className={styles.table}>
                      <tbody>
                        {sec.content.map((row, j) => (
                          <tr key={j} className={styles.tr}>
                            <td className={styles.tdLabel}>{row.label}</td>
                            <td className={styles.tdValue}>{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className={styles.disclaimer}>
          <p>
            <strong><u>Disclaimer:</u></strong><br />
            <em>The Oxliv 1-7L Portable Oxygen Concentrator is not a medical device. They are designed for travel, recreation, fitness, and everyday comfort, not to diagnose, treat, or prevent any illness or condition. Anyone with a medical condition should speak with a healthcare professional before using the device.</em>
          </p>
        </div>

      </div>
    </section>
  );
}
