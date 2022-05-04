import { motion, AnimatePresence } from "framer-motion";
import styles from "../Styles/usAndYou.module.css";
import React from "react";

function UsAndYouText2({ setBlurOn, blurOn }) {
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
      onClick={() => blur(2)}
      className={`${styles["UsAndYou-text-container"]} ${
        blurOn === 2 && "on-top"
      } `}
    >
      <div className={styles["UsAndYou-title"]}>Before you sign up:</div>
      <div className={styles["UsAndYou-paragraph"]}>
        Discuss your case with your doctor(s). Ask yourself if your expected
        improvement (quality of life) is worth X amount of money. Do not expect
        doctors or friends to know anything about overseas clinics. (To be fair,
        someone who has been treated for a bee sting in, say, Barcelona, can at
        least report that the A&E department was clean. But you're not going to
        A&E.) Avoid any hard sell, especially from clinics, or indeed us. Do not
        take a hasty decision. Focus on the quality of care, especially if your
        case is complex. Think carefully about your priorities, we use them to
        select clinics. Your UK doctor will be in charge of your after care on
        return to the UK. Check that he is happy to get your medical notes
        through us. Be prepared to follow rigorously the recommendations about
        physiotherapy, diet, check ups, etc.
      </div>
    </motion.div>
  );
}

export default UsAndYouText2;
