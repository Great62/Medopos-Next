import styles from "../../Styles/legals.module.css";
import React from "react";

function article4() {
  return (
    <div className={styles["UsAndYou-text-container"]}>
      <div className={styles["UsAndYou-title"]}></div>
      <div className={styles["UsAndYou-title"]}>D.</div>
      <div className={styles["UsAndYou-paragraph"]}>
        In order to obtain a firm commitment from any treatment facility you
        must agree to provide a fair and honest description of your condition.
        This transparency is important and any lapse or reservation of any other
        condition that might affect your treatment (co-morbidities, allergies,
        etc) may affect your treatment and require an increase in the price
        charged.
        <br />
        <br />
        In respect of patient confidentiality we warrant to make our best
        efforts to protect your data (by anti hacking, firewalls, or simply by
        keeping your data on physical disc and wiping it from all internal hard
        drives) and in no case will we divulge, sell or communicate your data to
        any unrelated party. Note that we will be obliged to forward your data
        to the clinics we initially select, but this will be end to end
        encrypted. If your circumstances change between acceptance of an offer
        of treatment and travel to the clinic you must inform us. This includes
        not only about your medical condition but any change in companion, means
        of transport, etc. Obtaining up to date medical information from the NHS
        is often difficult for bureaucratic reasons. If the data is not
        available or considered out of date the proposed clinic may require
        pre-operative diagnostic tests. These may reveal a need for additional
        treatment. In both cases an increase in price is likely, including our
        fees. It is in your interest to supply your data in advance. We can
        recommend private diagnostic services in the UK prior to travel.
      </div>
    </div>
  );
}

export default article4;
