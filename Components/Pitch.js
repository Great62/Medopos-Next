import React from "react";
import styles from "../styles/Pitch.module.css";
import flight from "../Pictures/Flying around the world-pana.svg";
import Image from "next/image";

function Pitch() {
  return (
    <div className={styles["pitch"]}>
      <div className={styles["pitch-text"]}>
        <h2 className={styles["pitch-text-main"]}>
          Cancelled operation? Long waiting list?
        </h2>
        <h4 className={styles["pitch-text-explain"]}>
          <h1 className={styles.boldText}>Medopos</h1> can direct you to
          <h1 className={styles.plainText}> private treatment overseas</h1>, by
          top physicians without delay and at surprisingly reasonable cost.
        </h4>
      </div>
      <div className={styles["pitch-image-desktop"]}>
        <Image src={flight} alt="" className={styles["pitch-image-desktop"]} />
      </div>
    </div>
  );
}

export default Pitch;
