import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVgameByName } from "../../redux/actions";
import Loading from "../Loading/Loading";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getVgameByName(name));
    setName("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Search videogame"
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
        {name ? <button type="submit">Search</button> : <button>Search</button>}
      </form>
    </div>
  );
};

export default SearchBar;
