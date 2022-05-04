import React from "react";
import plane from "../Pictures/Flying around the world-pana.svg";
import styles from "../styles/Pitch.module.css";
import Image from "next/image";

function PitchImage() {
  return (
    <div className={styles["pitch-image-container"]}>
      <div className={styles["pitch-image"]}>
        <Image src={plane} alt="" className={styles["pitch-image"]} />
      </div>
    </div>
  );
}

export default PitchImage;
