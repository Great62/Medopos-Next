import React from "react";
import styles from "../Styles/CTAButton.module.css";

function CTAButton() {
  return (
    <div className={styles["CTA-button-container"]}>
      <div className={styles["gradient-border"]}>
        <button className={styles["CTA-button"]}>Contact us</button>
      </div>
    </div>
  );
}

export default CTAButton;
