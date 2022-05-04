import React from "react";
import styles from "../Styles/footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles["page-links-container"]}>
        <Link href="/">
          <a className={styles["page-link"]}>Home</a>
        </Link>
        <Link href="/UsAndYou">
          <a className={styles["page-link"]}>Us and You</a>
        </Link>
        <Link href="/FAQs">
          <a className={styles["page-link"]}>FAQs</a>
        </Link>
        <Link href="/GoingPrivate">
          <a className={styles["page-link"]}>Going private</a>
        </Link>
        <Link href="/Legals">
          <a className={styles["page-link"]}>Legals</a>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
