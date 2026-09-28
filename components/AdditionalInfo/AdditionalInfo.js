"use client";
import { useState } from "react";
import styles from "./AdditionalInfo.module.css";

export default function AdditionalInfo({ config }) {
  const [open, setOpen] = useState(null);
  if (!config) return null;
  const { features, specs, disclaimer, everydayUseCases } = config;

  const { flowTable } = config;

  const sections = [
    ...(everydayUseCases ? [{ title: "Everyday Use Cases", content: everydayUseCases, type: "list" }] : []),
    ...(features ? [{ title: "Features & Benefits", content: features, type: "list" }] : []),
    ...(specs ? [{ title: "Specifications", content: specs, type: "specs" }] : []),
    ...(flowTable ? [{ title: "Flow Output By Level", content: flowTable, type: "flowTable" }] : []),
  ];

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
                  {sec.type === "flowTable" && (
                    <>
                      <table className={styles.table}>
                        <thead>
                          <tr className={styles.tr}>
                            <td className={`${styles.tdLabel} ${styles.tdHead}`}>Setting</td>
                            <td className={`${styles.tdValue} ${styles.tdHead}`}>Delivery Type</td>
                            <td className={`${styles.tdValue} ${styles.tdHead}`}>Oxygen Output</td>
                          </tr>
                        </thead>
                        <tbody>
                          {sec.content.rows.map((row, j) => (
                            <tr key={j} className={`${styles.tr} ${row.bold ? styles.trBold : ""}`}>
                              <td className={styles.tdLabel}>{row.setting}</td>
                              <td className={styles.tdValue}>{row.type}</td>
                              <td className={styles.tdValue}>{row.output}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {sec.content.note && (
                        <p className={styles.flowNote}><strong>Setting Note:</strong> {sec.content.note}</p>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {disclaimer && (
          <div className={styles.disclaimer}>
            <p><strong><u>Disclaimer:</u></strong><br /><em>{disclaimer}</em></p>
          </div>
        )}
      </div>
    </section>
  );
}
