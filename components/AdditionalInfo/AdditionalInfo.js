"use client";
import { useState } from "react";
import styles from "./AdditionalInfo.module.css";

const sections = [
  {
    title: "What's in the Package?",
    content: [
      "1 Oxygen generator",
      "1 Charger",
      "1 Battery",
      "1 Instruction manual + warranty card",
      "1 Car charging cable",
      "2 Nasal oxygen tubes",
      "1 Certificate of conformity",
      "1 Backpack",
      "1 Case",
    ],
    type: "list",
  },
  {
    title: "Features & Benefits for the New Product",
    content: [
      "Delivers high-purity oxygen up to 94% for reliable daily breathing support",
      "Uses pulse oxygen technology that responds to your natural inhalation",
      "Automatically switches to fixed-frequency mode when no breath is detected",
      "Runs quietly below 60dB for comfortable use on the go",
      "Provides 1.5-4 hours of portable power with the replaceable battery box",
      "Offers seven adjustable oxygen levels for personalized airflow",
      "Compact 1.4 kg design fits easily in a backpack or travel bag",
      "Supports home, car, outdoor, and travel use with three power options",
      "Simple one-touch operation with a clear digital screen",
      "Includes a free carry bag, chargers, and nasal tubes for instant setup",
    ],
    type: "list",
  },
  {
    title: "Specifications",
    content: [
      { label: "Oxygen Flow Range", value: "1-7L/min flow levels" },
      { label: "Oxygen Purity", value: "90%-94% (varies with breathing frequency & gear)" },
      { label: "Weight", value: "3lbs (excluding battery)" },
      { label: "Battery Life", value: "Up to 4 hours (single battery)" },
      { label: "Charging Time", value: "~4 hours" },
      { label: "Dimensions", value: "195 × 85 × 175 mm" },
      { label: "Operating Noise", value: "≤ 60 dB" },
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

              <button
                className={styles.trigger}
                onClick={() => setOpen(open === i ? null : i)}
              >
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
      </div>
    </section>
  );
}
