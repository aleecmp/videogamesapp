import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVgames } from "../../redux/actions";

import NavBar from "../NavBar/NavBar";
import Paginated from "../Paginated/Paginated";
import VgameCard from "../VgameCard/VgameCard";
import Loading from "../Loading/Loading";

import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const allVgames = useSelector((state) => state.vgames);

  // paginated
  const [currentPage, setCurrentPage] = useState(1);
  const [vgamesPerPage, setVgamesPerPage] = useState(15);
  const indexOfLastVgame = currentPage * vgamesPerPage;
  const indexOfFirstVgame = indexOfLastVgame - vgamesPerPage;
  // cut array of vgames to show on current page
  const currentVgames = allVgames.slice(indexOfFirstVgame, indexOfLastVgame);

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllVgames());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      {currentVgames.length > 0 ? (
        <div className={styles.cards}>
          {currentVgames.map((vgame) => (
            <VgameCard key={vgame.id} {...vgame} />
          ))}
          <Paginated
            vgamesPerPage={vgamesPerPage}
            allVgames={allVgames.length}
            paginated={paginated}
          />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default Home;
