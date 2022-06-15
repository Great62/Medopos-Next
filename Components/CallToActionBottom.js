import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import styles from "../styles/CallToActionBottom.module.css";

function CallToActionBottom({
  emailSubject,
  setEmailSubject,
  setMessageEmail,
  messageEmail,
}) {
  init("user_XG4i0VShzDINGA95mIWTy");
  //All usestates

  function SendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_91qsexy",
        "template_l1r5tki",
        e.target,
        "user_XG4i0VShzDINGA95mIWTy"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            console.log("Email sent");
          } else {
            console.log("Email failed to send");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className={styles["Bottom-CTA-Container"]}>
      <form
        className={styles["Bottom-CTA-Container-form"]}
        action="https://formsubmit.co/info@medopos.co.uk"
        method="POST"
      >
        <div className={styles["CTA-Title"]}>Contact Us</div>
        <div className={styles["Bottom-CTA-Form-Container"]}>
          <div className={styles["CTA-Form-Block"]}>
            <input
              className={styles["InputBox-CTA"]}
              required
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className={styles["InputBox-CTA"]}
              required
              type="text"
              placeholder="Email"
              name="email"
            />
            <input
              className={styles["InputBox-CTA"]}
              required
              type="text"
              placeholder="Subject"
              name="_subject"
              onChange={(e) => setEmailSubject(e.target.value)}
              value={emailSubject}
            />
          </div>

          <div className={styles["CTA-Form-Block"]}>
            <textarea
              className={styles["InputBox-CTA"] + " " + styles["Big-InputBox"]}
              required
              type="text"
              placeholder="Message"
              name="message"
              value={messageEmail}
              onChange={(e) => setMessageEmail(e.target.value)}
            />
          </div>
        </div>
        <input type="submit" className={styles["Send-message-CTA"]} />
      </form>
    </div>
  );
}

export default CallToActionBottom;
