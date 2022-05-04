import styles from "../../Styles/legals.module.css";
import React from "react";

function article14() {
  return (
    <div className={styles["UsAndYou-text-container"]}>
      <div className={styles["UsAndYou-title"]}></div>
      <div className={styles["UsAndYou-title"]}>N.</div>
      <div className={styles["UsAndYou-paragraph"]}>
        Dispute resolution. In the event of any disagreement it is in the
        interests of all parties to attempt an amicable resolution before
        engaging expensive foreign national or international legal proceedings.
        We will assist in finding a compromise. A suggested first point of
        contact is the European Union dispute procedure which can be found{" "}
        <a href="https://ec.europa.eu/consumers/odr/main/?event=main.home.howitworks">
          here
        </a>{" "}
        There are other services available. If all efforts fail we will supply
        any relevant records tp the court but will not attend, neither on behalf
        of one party or the other.
      </div>
    </div>
  );
}

export default article14;
