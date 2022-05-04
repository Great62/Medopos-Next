import React, { useState } from "react";
import styles from "../styles/usAndYou.module.css";
import UsAndYouText2 from "../Components/UsAndYouText2";
import UsAndYouText1 from "../Components/UsAndYouText1";
import UsAndYouText3 from "../Components/UsAndYouText3";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";

function UsAndYou() {
  const [blurOn, setBlurOn] = useState(0);

  return (
    <div className={styles["UsAndYou-container"]}>
      <Head>
        <title>Medopos - Health treatement overseas | Learn more</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Learn more about Medopos and our service provided to you as a client. Find out more about our overseas treatment process and how you can profit from it"
        />
      </Head>
      <AnimatePresence>
        {blurOn ? (
          <motion.div
            initial={{
              filter: "blur(0em)",
              "backdrop-filter": "blur(0em)",
              "-webkit-backdrop-filter": "blur(1em)",
            }}
            animate={{
              "backdrop-filter": "blur(1em)",
              "-webkit-backdrop-filter": "blur(1em)",
            }}
            exit={{
              filter: "blur(0em)",
              "backdrop-filter": "blur(0em)",
              "-webkit-backdrop-filter": "blur(1em)",
            }}
            className={"blur-background"}
            onClick={() => setBlurOn(0)}
          ></motion.div>
        ) : null}
      </AnimatePresence>
      <NavBar />
      <UsAndYouText1 blurOn={blurOn} setBlurOn={setBlurOn} />
      <UsAndYouText2 blurOn={blurOn} setBlurOn={setBlurOn} />
      <UsAndYouText3 blurOn={blurOn} setBlurOn={setBlurOn} />
      <Footer />
    </div>
  );
}

export default UsAndYou;
