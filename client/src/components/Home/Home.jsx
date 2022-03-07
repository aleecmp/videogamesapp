import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanVgames, getAllVgames } from "../../redux/actions";

import NavBar from "../NavBar/NavBar";
import Paginated from "../Paginated/Paginated";
import VgameCard from "../VgameCard/VgameCard";
import Loading from "../Loading/Loading";
import SideBar from "../SideBar/SideBar";

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

  //   return () => dispatch(cleanVgames());
  // }, [dispatch]);

  useEffect(() => {
    window.scroll(0, 0);
  }, [currentPage]);

  return (
    <div>
      <NavBar />
      <SideBar />
      <Paginated
        vgamesPerPage={vgamesPerPage}
        allVgames={allVgames.length}
        paginated={paginated}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      {currentVgames.length > 0 ? (
        <div className={styles.cards}>
          {currentVgames.map((vgame) => (
            <VgameCard key={vgame.id} {...vgame} />
          ))}
        </div>
      ) : (
        <Loading />
      )}

      <Paginated
        vgamesPerPage={vgamesPerPage}
        allVgames={allVgames.length}
        paginated={paginated}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};
export default Home;
