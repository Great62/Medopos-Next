import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/usAndYou.module.css";
import React from "react";

function UsAndYouText3({ setBlurOn, blurOn }) {
  function blur(elementNumber) {
    if (elementNumber === blurOn) {
      setBlurOn(0);
    } else {
      setBlurOn(elementNumber);
    }
  }
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onClick={() => blur(3)}
      className={`${styles["UsAndYou-text-container"]} ${
        blurOn === 3 && "on-top"
      } `}
    >
      <div className={styles["UsAndYou-title"]}>Steps to treatment:</div>
      <div className={styles["UsAndYou-paragraph"]}>
        Send us your authority to search and a deposit of 240 pounds. this will
        be deducted from our final fee or returned to you if we fail to find a
        clinic willing to take your case. Give us written authority (signed and
        countersigned) to receive your medical data. You have the right to
        access your own health records and if you have an email capable of
        sending very large files you can send us them yourself. Complete our
        initial questionnaire. Routinely we complete the S2 forms for you but do
        not count on reimbursement. Complete our second medical questionnaire.
        During this time we canvas treatment centres and physicians to get the
        best offer fitting your priorities, so it is important to inform us of
        all your medical notes so that the clinic can provide an accurate
        assessment. You can then choose which clinic you prefer. Complete the
        third questionnaire, which the clinic / hospital may require before
        travel (recommended) or on arrival. We recommend that you pay your
        treatment fees through us, which eliminates your exchange rate risk,
        though you may choose to pay the clinic&aposs fee and our commission
        separately. Organise your travel (we can assist.) Allow for the
        unexpected.
      </div>
    </motion.div>
  );
}

export default UsAndYouText3;
