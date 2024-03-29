import React from "react";
import styles from "../styles/Pitch.module.css";
import euroMap from "../Pictures/euro_map_.png";
import Image from "next/image";

function Pitch() {
  return (
    <div className={styles["pitch"]}>
      <div className={styles["pitch-text"]}>
        <h2 className={styles["pitch-text-main"]}>
          Cancelled operation? Long waiting list?
        </h2>
        <h4 className={styles["pitch-text-explain"]}>
          Medopos can direct you to private treatment overseas, by top
          physicians without delay and at surprisingly reasonable cost.
        </h4>
      </div>
      <div className={styles["pitch-image-desktop"]}>
        <Image
          priority={true}
          src={euroMap}
          alt=""
          className={styles["pitch-image-desktop"]}
        />
      </div>
    </div>
  );
}

export default Pitch;
