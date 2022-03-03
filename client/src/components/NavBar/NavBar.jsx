import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import { getAllVgames } from "../../redux/actions";

const NavBar = () => {
  const dispatch = useDispatch();

  let handleClick = (e) => {
    e.preventDefault();
    dispatch(getAllVgames());
  };

  return (
    <div>
      <Link to="/">
        <button>Landing Page</button>
      </Link>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Reset
      </button>
      <SearchBar />
    </div>
  );
};

export default NavBar;
