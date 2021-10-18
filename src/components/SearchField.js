import axios from "axios";
import React, { useState, useEffect } from "react";
import { SearchIcon } from "../assets/icon/SearchIcon";
import styles from "./SearchField.module.css";

export default function SearchField() {
  const [book, setBook] = useState("");
  useEffect(() => {
    axios
      .get("https://reststop.randomhouse.com/resources/titles/9781400079148/")
      .then((res) => {
        const result = res
        setBook([result]);
      });
  }, []);
  return (
    <div className={styles.search_container}>
      <form action="">
        <label className={styles.label} htmlFor="">
          <SearchIcon />
          <input
            className={styles.input}
            type="text"
            placeholder="Search movie name"
          />
        </label>
        {/* <p style={{fontSize:"16px"}}>{JSON.stringify(book)}</p> */}
      </form>
    </div>
  );
}
