import React from "react";
import plane from "../Pictures/Flying around the world-pana.svg";
import plane1 from "../Pictures/Flying around the world-bro.svg";
import plane2 from "../Pictures/Flying around the world-amico.svg";
import euroMap from "../Pictures/euro_map_.png";
import styles from "../styles/Pitch.module.css";
import Image from "next/image";

function PitchImage() {
  return (
    <div className={styles["pitch-image-container"]}>
      <div className={styles["pitch-image"]}>
        <Image
          priority={true}
          src={euroMap}
          alt=""
          className={styles["pitch-image"]}
        />
      </div>
    </div>
  );
}

export default PitchImage;
