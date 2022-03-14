import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to AppVgames</h1>
      <h3 className={styles.subtitle}>
        Check the information of your favorite videogames
      </h3>
      <Link to="/home">
        <button className={styles.button}>Enter</button>
      </Link>
    </div>
  );
};

export default LandingPage;
