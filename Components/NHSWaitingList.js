import styles from "../styles/healthlists.module.css";
import { nhsWaitingLists } from "../Data";
import React from "react";
import hospital from "../Pictures/batiment-de-lhopital.png";

function NHSWaitingList() {
  return (
    <div className={styles["health-list-container"]}>
      <div className={styles["NHS-waiting-list"]}>
        <h3 className={styles["list-title"]}>NHS waiting lists</h3>
        <div className={styles["health-list"]}>
          {nhsWaitingLists.map((name, key) => (
            <div className={styles["health-list-item-nhs"]} key={key}>
              <div className={styles["health-list-item-text"]}>{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NHSWaitingList;
