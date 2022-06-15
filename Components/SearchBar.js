import React, { useState } from "react";
import styles from "../styles/searchBar.module.css";
import searchSvg from "../Pictures/search_black_24dp.svg";
import closeSvg from "../Pictures/close_black_24dp.svg";
import { services } from "../Data";
import Image from "next/image";
import { Link } from "react-scroll";

function SearchBar({ setMessageEmail, setEmailSubject }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const browseItemClick = (value) => {
    console.log(value);
    setEmailSubject(value[0].toUpperCase() + value.slice(1));
    setMessageEmail(
      `Hi I would like to contact you about your ${value} service.`
    );
  };

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = services.filter((value) => {
      return value.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
    console.log(filteredData.length);
    console.log(searchWord);
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className={styles["service-search-container"]}>
      <div
        className={`${styles["search-bar"]} ${
          filteredData.length !== 0 && styles["search-bar-active"]
        } `}
      >
        {wordEntered ? (
          <Image
            className={styles["search-icon"]}
            src={closeSvg}
            alt=""
            onClick={clearInput}
          />
        ) : (
          <Image className={styles["search-icon"]} src={searchSvg} alt="" />
        )}
        <input
          type="text"
          className={styles["search-bar-input"]}
          placeholder="Browse our services"
          value={wordEntered}
          onChange={handleFilter}
        ></input>
        {filteredData.length !== 0 && (
          <div className={styles["data-search-result"]}>
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <Link
                  to="cta"
                  smooth="true"
                  key={key}
                  className={styles["data-search-item"]}
                  target="_blank"
                  onClick={() => browseItemClick(value)}
                >
                  <p>{value[0].toUpperCase() + value.slice(1)}</p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
