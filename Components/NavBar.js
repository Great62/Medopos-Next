import React, { useState, useEffect } from "react";
import styles from "../Styles/navBar.module.css";
import { motion, AnimatePresence } from "framer-motion";
import phone from "../Pictures/call_black_24dp.svg";
import menu from "../Pictures/menu_white_24dp.svg";
import close from "../Pictures/close_white_24dp.svg";
import Image from "next/image";

function NavBar() {
  //path related
  const [currentPath, setCurrentPath] = useState("");

  //nav-menu related
  const [scrollLevel, setScrollLevel] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  var updateRate = 0;
  var previouslyUpdated = 0;

  //On render to use browser methods
  useEffect(() => {
    setCurrentPath(window.location.pathname);

    window.addEventListener("scroll", (event) => {
      updateRate++;
      if (updateRate - 20 === previouslyUpdated || window.scrollY < 15) {
        previouslyUpdated += 20;
        setScrollLevel(window.scrollY);
      }
    });
  }, []);

  return (
    <div className={styles.fixed}>
      <AnimatePresence>
        {scrollLevel >= 10 || menuOpen === true || currentPath != "/" ? (
          <motion.div
            className={styles["navBar-container"]}
            transition={{ type: "ease-in-out" }}
            initial={{ top: "-100px" }}
            animate={{ top: "0px" }}
            exit={{ top: "-200px" }}
          >
            <motion.div
              whileTap={{ scale: 0.8 }}
              className={styles["hamburger-container"]}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <Image src={close} alt="" className={styles["phone-icon"]} />
              ) : (
                <Image src={menu} alt="" className={styles["phone-icon"]} />
              )}
            </motion.div>
            <AnimatePresence>
              {menuOpen === false && (
                <motion.div
                  className={styles["phone-number-container"]}
                  transition={{ type: "ease-in-out" }}
                  initial={{ top: "-100px" }}
                  animate={{ top: "0px" }}
                  exit={{ top: "-200px" }}
                >
                  <Image src={phone} alt="" className={styles["phone-icon"]} />
                  <div className={styles["phone-number"]}>+44 207 582 7423</div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className={styles["nav"]}>
              <a
                className={`${styles["nav-item-desktop"]} ${
                  currentPath === "/" && styles["nav-item-desktop-active"]
                } `}
                href="/"
              >
                Home
              </a>
              <a
                className={`${styles["nav-item-desktop"]} ${
                  currentPath === "/UsAndYou" &&
                  styles["nav-item-desktop-active"]
                } `}
                href="/UsAndYou"
              >
                Us and you
              </a>
              <a
                className={`${styles["nav-item-desktop"]} ${
                  currentPath === "/FAQs" && styles["nav-item-desktop-active"]
                } `}
                href="/FAQs"
              >
                FAQs
              </a>
              <a
                className={`${styles["nav-item-desktop"]} ${
                  currentPath === "/GoingPrivate" &&
                  styles["nav-item-desktop-active"]
                } `}
                href="/GoingPrivate"
              >
                Going private
              </a>
              <a
                className={`${styles["nav-item-desktop"]} ${
                  currentPath === "/Legals" && styles["nav-item-desktop-active"]
                } `}
                href="/Legals"
              >
                Legals
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles["mobile-menu-container"]}
            transition={{ type: "ease-in-out" }}
            initial={{ top: "-400px" }}
            animate={{ top: "0px" }}
            exit={{ top: "-400px" }}
          >
            <h1 className={styles["menu-title"]}>Medopos</h1>
            <div className={styles["menu-nav"]}>
              <div
                className={`${styles["nav-item"]} ${
                  currentPath === "/" && styles["nav-item-active"]
                } `}
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Home
              </div>
              <div
                className={`${styles["nav-item"]} ${
                  currentPath === "/UsAndYou" && styles["nav-item-active"]
                } `}
                onClick={() => {
                  window.location.href = "/UsAndYou";
                }}
              >
                Us and you
              </div>
              <div
                className={`${styles["nav-item"]} ${
                  currentPath === "/FAQs" && styles["nav-item-active"]
                } `}
                onClick={() => {
                  window.location.href = "/FAQs";
                }}
              >
                FAQs
              </div>
              <div
                className={`${styles["nav-item"]} ${
                  currentPath === "/GoingPrivate" && styles["nav-item-active"]
                } `}
                onClick={() => {
                  window.location.href = "/GoingPrivate";
                }}
              >
                Going private
              </div>
              <div
                className={`${styles["nav-item"]} ${
                  currentPath === "/Legals" && styles["nav-item-active"]
                } `}
                onClick={() => {
                  window.location.href = "/Legals";
                }}
              >
                Legals
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavBar;
