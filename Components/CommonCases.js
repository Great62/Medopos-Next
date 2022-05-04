import styles from "../styles/healthlists.module.css";
import React, { useEffect, useState } from "react";
import { commonCases } from "../Data";
import operation from "../Pictures/chirurgie-robotique.png";

function CommonCases() {
  return (
    <div
      className={styles["health-list-container"] + " " + styles["border-left"]}
    >
      <div className={styles["common-cases-container"]}>
        <h3 className={styles["list-title"]}>Common cases</h3>
        <div className={styles["health-list"]}>
          {commonCases.map((name, key) => (
            <div className={styles["health-list-item"]} key={key}>
              <div className={styles["health-list-item-text"]}>{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommonCases;
