import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link className={styles.link} to="/">
          <button className={styles.button}>Landing Page</button>
        </Link>
      </div>
      <SearchBar className={styles.searchbar} />
      <div>
        <Link className={styles.link} to="/create">
          <button className={styles.button}>Create Vgame</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
