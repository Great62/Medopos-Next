import React from "react";
import styles from "../Styles/usAndYou.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { blur } from "../Pages/UsAndYou.js";

function UsAndYouText1({ setBlurOn, blurOn }) {
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
      onClick={() => blur(1)}
      className={`${styles["UsAndYou-text-container"]} ${
        blurOn === 1 && "on-top"
      } `}
    >
      <div className={styles["UsAndYou-title"]}>It's a typical story.</div>
      <div className={styles["UsAndYou-paragraph"]}>
        Frustrated by delays and worse in the NHS we started to look at the
        alternatives. Could it be true that private care could be had for a
        reasonable price without a waiting list? Yes, it is possible. So we
        thought we might share the fruits of our research. And we continue to
        find quality services at bargain prices across a large range of
        healthcare services, many not even offered as an option by the NHS. Our
        approach is different to the majority of "medical tourism" providers,
        who take a percentage from the clinics. We charge a fee from the
        patient. This allows us to source more competitive offers for your
        treatment from an unlimited range of providers. We coordinate services
        to get you the best treatment. We understand the need for medical
        confidentiality and so we only work for with your consent to forward
        your medical records to selected clinics. This information will allow a
        recommended course of treatment and a quotation for its cost. As with
        all medical interventions, the final choice is yours.
      </div>
    </motion.div>
  );
}

export default UsAndYouText1;
