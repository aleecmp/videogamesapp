import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import { getAllVgames } from "../../redux/actions";
import Loading from "../Loading/Loading";

const NavBar = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

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
    <div>
      <Link to="/">
        <button>Landing Page</button>
      </Link>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <button onClick={handleClick}>Clean filters</button>
        </div>
      )}

      <Link to="/create">
        <button>Create Vgame</button>
      </Link>

      <SearchBar />
    </div>
  );
};

export default NavBar;
