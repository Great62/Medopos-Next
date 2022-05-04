import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import styles from "../styles/legals.module.css";
import stylesUsAndYou from "../styles/usAndYou.module.css";

//articles
import Article1 from "../Components/articles/Article1";
import Article2 from "../Components/articles/Article2";
import Article3 from "../Components/articles/Article3";
import Article4 from "../Components/articles/Article4";
import Article5 from "../Components/articles/Article5";
import Article6 from "../Components/articles/Article6";
import Article7 from "../Components/articles/Article7";
import Article8 from "../Components/articles/Article8";
import Article9 from "../Components/articles/Article9";
import Article10 from "../Components/articles/Article10";
import Article11 from "../Components/articles/Article11";
import Article12 from "../Components/articles/Article12";
import Article13 from "../Components/articles/Article13";
import Article14 from "../Components/articles/Article14";
import Article15 from "../Components/articles/Article15";
import Article16 from "../Components/articles/Article16";

function Legals() {
  return (
    <div className={styles["legals-container"]}>
      <div className={styles["legals-titles"]}>
        <div className={styles["title"]}>COMPASS ELECTIVE HEALTH LIMITED</div>
        <div className={stylesUsAndYou["UsAndYou-title"]}>
          Terms and Conditions
        </div>
        Please read carefully, especially articles G, H & L
      </div>
      <div
        className={
          stylesUsAndYou["UsAndYou-container"] + " " + styles["no-margin-top"]
        }
      >
        <NavBar />
        <Article1 />
        <Article2 />
        <Article3 />
        <Article4 />
        <Article5 />
        <Article6 />
        <Article7 />
        <Article8 />
        <Article9 />
        <Article10 />
        <Article11 />
        <Article12 />
        <Article13 />
        <Article14 />
        <Article15 />
        <Article16 />
        <Footer />
      </div>
    </div>
  );
}

export default Legals;
