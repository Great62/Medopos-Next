import styles from "../../Styles/legals.module.css";
import React from "react";

function article3() {
  return (
    <div className={styles["UsAndYou-text-container"]}>
      <div className={styles["UsAndYou-title"]}></div>
      <div className={styles["UsAndYou-title"]}>C.</div>
      <div className={styles["UsAndYou-paragraph"]}>
        Our fees. On acceptance of your request we require an initial deposit
        payment of two hundred pounds. This is returnable if we do not find a
        clinic which in our view is suitable to treat your medical condition.
        You will be required to complete a medical questionnaire and forward
        your medical history and all diagnostic tests, and to agree that we may
        contact your GP or consultant to obtain any necessary CT or MRI scans, X
        rays, blood tests and any other pertinent medical information. In the
        absence of pertinent information we may suggest private diagnostic
        services in the UK. An MRI scan costs about two hundred pounds, for
        example and prices are declining.
        <br />
        On receipt of our quotations you decide on your preferred course of
        treatment. Our quotations will include information on the hospital or
        clinic, the qualifications and experience of the supervising doctor and
        other information such as private rooms with or without bathroom / w.c.,
        the expected level of English speaking staff, and other information we
        consider useful to you.
        <br />
        As you make your choice of clinic you will pay in advance for the
        service quoted. Our fees are a minimum of two hundred pounds, or fifteen
        per cent (15%) of the hospital / clinic quotation.
        <br />
        For example: 1. Simple abdominal hernia repair, quoted at GBP 300. Cost
        to the patient GBP300 + GBP200 (our fee) + airfare and transport +
        accommodation.
        <br />
        2. Complex spinal surgery, quoted at GBP9,000 Cost to the patient
        GBP9,000 + GBP 1,350 (including initial deposit) + airfare, etc Payment
        must be received in full before travelling, otherwise the journey will
        be in vain.
      </div>
    </div>
  );
}

export default article3;
