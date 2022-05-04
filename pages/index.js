import React from "react";
import styles from "../styles/landingPage.module.css";
import { Link } from "react-scroll";
import Head from "next/head";

//Component imports
import CTAButton from "../Components/CTAButton";
import NavBar from "../Components/NavBar";
import Pitch from "../Components/Pitch";
import SearchBar from "../Components/SearchBar";
import CommonCases from "../Components/CommonCases";
import NHSWaitingList from "../Components/NHSWaitingList";
import CallToActionBottom from "../Components/CallToActionBottom";
import PitchImage from "../Components/PitchImage";
import ExplanationSteps from "../Components/ExplanationSteps";
import Footer from "../Components/Footer";

function LandingPage() {
  return (
    <div>
      <Head>
        <title>Medopos - Health treatement overseas | CompassElective</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Medopos is a health service that provides you with private treatment overseas to skip local waiting lists and get treated quickly. This is a service proposed by CompassElective Ltd"
        />
      </Head>
      <NavBar />
      <div className={styles.block2}>
        <Pitch />
        <SearchBar />
        <PitchImage />
        <Link to="cta" smooth={true}>
          <CTAButton />
        </Link>
      </div>
      <div className={styles["block-explanation"]}>
        <ExplanationSteps />
      </div>
      <h2 className={styles["stats-title"]}>
        Health situation as of mid September 2021
      </h2>
      <div className={styles.block3}>
        <NHSWaitingList />
        <CommonCases />
      </div>
      <div className={styles.block4} id="cta">
        <CallToActionBottom />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
