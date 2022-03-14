import React, { useState } from "react";
import { useDispatch } from "react-redux";
import GenresFilter from "../Filters/GenresFilter";
import OriginFilter from "../Filters/OriginFilter";
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
        <div className="sidebar">
          <div className="sidebar__filter">
            <h3>Filters</h3>
            <GenresFilter />
            <OriginFilter />

            <OrderBy />
            <button onClick={handleClick}>Clean</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
