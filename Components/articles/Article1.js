import styles from "../../Styles/legals.module.css";
import React from "react";

function article1() {
  return (
    <div className={styles["UsAndYou-text-container"]}>
      <div className={styles["UsAndYou-title"]}></div>
      <div className={styles["UsAndYou-title"]}>A.</div>
      <div className={styles["UsAndYou-paragraph"]}>
        This document sets out the terms and conditions governing the agreement
        between Compass Elective Health Ltd (the company, us, we) and yourself
        (you, the patient, the client). The contract is subject to the laws of
        England and Wales except as otherwise stated. In the case of a dispute
        between you and a service provider you may be obliged to seek resolution
        in the courts of the domicile of the service provider.
      </div>
    </div>
  );
}

export default article1;
