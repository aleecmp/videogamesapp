import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVgameByName } from "../../redux/actions";
import Loading from "../Loading/Loading";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await dispatch(getVgameByName(name));
      setLoading(false);
    } catch (e) {
      console.log("Handle errors here");
    }
    setName("");
  };

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      {loading ? (
        <Loading />
      ) : (
        <div>
          <input
            className={styles.input}
            type="text"
            value={name}
            onChange={handleInputChange}
            placeholder="Search videogame..."
          />
          {!name ? (
            <button className={styles.button} disabled>
              Search
            </button>
          ) : (
            <button className={styles.button}>Search</button>
          )}
        </div>
      )}
    </form>
  );
};

export default SearchBar;
