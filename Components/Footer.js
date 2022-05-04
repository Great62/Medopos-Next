import React from "react";
import styles from "../Styles/footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles["page-links-container"]}>
        <a href="/" className={styles["page-link"]}>
          Home
        </a>
        <a
          href="https://medopos.vercel.app/UsAndYou"
          className={styles["page-link"]}
        >
          Us and You
        </a>
        <a href="/FAQs" className={styles["page-link"]}>
          FAQs
        </a>
        <a
          href="https://medopos.vercel.app/GoingPrivate"
          className={styles["page-link"]}
        >
          Going private
        </a>
        <a
          href="https://medopos.vercel.app/Legals"
          className={styles["page-link"]}
        >
          Legals
        </a>
      </div>
    </div>
  );
}

export default Footer;
