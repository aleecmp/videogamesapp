import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FilterBy from "../FilterBy/FilterBy";
import OrderBy from "../OrderBy/OrderBy";
import Loading from "../Loading/Loading";
import { getAllVgames } from "../../redux/actions";
import styles from "./SideBar.module.css";

const SideBar = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await dispatch(getAllVgames());
      setLoading(false);
    } catch (e) {
      console.log("Handle errors here");
    }
  };

  return (
    <div className={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className={styles.filterorder}>
            <FilterBy />
            <OrderBy />
            <button className={styles.button} onClick={handleClick}>
              Clean
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
