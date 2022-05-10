import React from "react";
import styles from "../styles/explanationSteps.module.css";
import call from "../Pictures/Group video-bro.svg";
import destination from "../Pictures/Destination-bro.svg";
import treatment from "../Pictures/Cardiologist-bro.svg";
import Image from "next/image";
/* eslint-disable @next/next/no-img-element */

function ExplanationSteps() {
  /* eslint-disable @next/next/no-img-element */
  return (
    <div className={styles["steps-container"]}>
      <div className={styles.step}>
        <div className={styles["step-picture"] + " " + styles["picture-lower"]}>
          <Image className={styles["step-picture"]} src={call} alt="" />
        </div>
        <div className={styles["step-text"]}>
          <h3 className={styles["step-title"]}>Give us a call</h3>
          <h4 className={styles["step-explained"]}>
            Discuss with us your current situation, your needs, and
            availability. We will also do a quick check-up of the requirements
          </h4>
        </div>
      </div>
      <div className={styles.step}>
        <div className={styles["step-text"]}>
          <h3 className={styles["step-title"]}>Go to your destination</h3>
          <h4 className={styles["step-explained"]}>
            After providing you with a suitable location you for private
            treatment, you will be able to go to the destination for treatment
          </h4>
        </div>
        <div className={styles["step-picture"]}>
          <Image src={destination} alt="" className={styles["step-picture"]} />
        </div>
      </div>
      <div className={styles.step}>
        <div className={styles["step-picture"]}>
          <Image src={treatment} alt="" className={styles["step-picture"]} />
        </div>
        <div className={styles["step-text"]}>
          <h3 className={styles["step-title"]}>Get treated</h3>
          <h4 className={styles["step-explained"]}>
            Settle down, meet our trusted top physicians who will perform your
            treatment with little to no delay !
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ExplanationSteps;
