import styles from "./manual.module.css";

export default function UserManualPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>User Manual</h1>
        <p className={styles.subtitle}>OXYGEN CONCENTRATOR POC-01A</p>

        <div className={styles.section}>
          <h2>Specifications</h2>
          <table className={styles.table}>
            <tbody>
              {[
                ["Name", "Mini oxygen concentrator"],
                ["Model", "POC-01A"],
                ["Material", "Plastic"],
                ["Voltage inlet", "AC100-240V"],
                ["Power", "3.5W"],
                ["Noise", "≤35dB"],
                ["Oxygen outflow", "1L / 2L / 3L adjustable"],
                ["Oxygen concentration", "30%±2%"],
                ["Net Weight", "500G"],
                ["Gross Weight", "950G"],
                ["Product Size", "140(L)*108(W)*67(H)mm"],
                ["Package Size", "230(L)*210(W)*115(H)mm"],
                ["Battery capacity", "5600mAh"],
                ["Battery life", "About 8-10 hours"],
              ].map(([label, value], i) => (
                <tr key={i} className={styles.tr}>
                  <td className={styles.tdLabel}>{label}</td>
                  <td className={styles.tdValue}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.section}>
          <h2>Advantages</h2>
          <ol className={styles.list}>
            <li>Small size design: 14*10.8*6.7cm, only approx. 0.5kg, easy to carry.</li>
            <li>Long life built-in battery lasting about 8-10 hours when fully charged.</li>
            <li>Easy operating with simplified controls — Power, On/Off, Flow, and O2 outlet.</li>
            <li>Easy charging via both AC wall power and vehicle power.</li>
            <li>Reliable and easy to maintain — keep intake filter clean after 2-3 months use.</li>
            <li>Simplified concise control system with only 2 buttons.</li>
            <li>International standard adapter (AC100-240V) for worldwide use.</li>
            <li>Chargeable lithium battery — can be used at home or off-grid.</li>
            <li>Advanced photo catalyst active carbon removes dust, bacteria, and odors.</li>
            <li>Can be operated continuously for 24 hours when plugged to a wall.</li>
            <li>Oxygen purity to 30(+/-2)% — clean, rich oxygen supply.</li>
          </ol>
        </div>

        <div className={styles.section}>
          <h2>Display Guide</h2>
          <ol className={styles.list}>
            <li><strong>POWER IN:</strong> Charging port — connect the AC charger here.</li>
            <li><strong>ON/OFF:</strong> Press to start; press again to stop.</li>
            <li><strong>FLOW:</strong> Set oxygen flow to 1, 2, or 3 liters per minute.</li>
            <li><strong>O2:</strong> Oxygen outlet — connect your oxygen tube here.</li>
          </ol>
        </div>

        <div className={styles.section}>
          <h2>Packing List</h2>
          <ul className={styles.list}>
            <li>1 x Mini oxygen concentrator</li>
            <li>1 x AC charger</li>
            <li>1 x Oxygen hose</li>
            <li>1 x Carry Bag</li>
            <li>1 x Manual</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Battery Information</h2>
          <ul className={styles.list}>
            <li>Battery Capacity: 5600mAh</li>
            <li>Charging time: approximately 4.5-5 hours</li>
            <li>Battery life: approximately 8-10 hours</li>
          </ul>
          <p className={styles.note}>
            <strong>Note:</strong> To charge the battery fully, turn off the machine when charging.
            The AC light is RED when charging and turns GREEN when fully charged.
          </p>
        </div>
      </div>
    </div>
  );
}
