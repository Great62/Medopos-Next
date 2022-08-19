import React, { useEffect, useState } from "react";
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
  const [phoneNum, setPhoneNum] = useState("");

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
            <div
              className={styles["InputBox-CTA"]}
              style={{ padding: "0", display: "flex", gap: "0.1em" }}
              type="text"
            >
              <input
                type="text"
                className={styles["InputBox-CTA"]}
                style={{ width: "100%" }}
                placeholder="Name"
                name="name"
                required
              />
              <input
                type="number"
                className={[
                  styles[`InputBox-CTA`],
                  phoneNum.length &&
                    phoneNum.length <= 10 &&
                    styles["invalidInput"],
                ].join(" ")}
                style={{ width: "100%" }}
                placeholder="Phone"
                name="phone"
                onChange={(e) => setPhoneNum(String(e.target.value))}
              />
              <input
                type="text"
                className={styles["InputBox-CTA"]}
                style={{ width: "100%" }}
                placeholder="Postcode"
                name="postcode"
              />
            </div>
            <input
              className={styles["InputBox-CTA"]}
              required
              type="email"
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
        <input
          type="submit"
          disabled={phoneNum.length && phoneNum.length <= 10 && true}
          className={styles["Send-message-CTA"]}
        />
      </form>
    </div>
  );
}

export default CallToActionBottom;
