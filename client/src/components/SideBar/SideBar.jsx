import React from "react";
import FilterBy from "../FilterBy/FilterBy";
import OrderBy from "../OrderBy/OrderBy";
import styles from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.filterorder}>
        <FilterBy />
        <OrderBy />
      </div>
    </div>
  );
};

export default SideBar;
