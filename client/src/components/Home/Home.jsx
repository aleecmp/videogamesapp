import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVgames } from "../../redux/actions";
import NavBar from "../NavBar/NavBar";
import Paginated from "../Paginated/Paginated";
import VgameCard from "../VgameCard/VgameCard";
import Loading from "../Loading/Loading";
import SideBar from "../SideBar/SideBar";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const allVgames = useSelector((state) => state.vgames);
  const [loading, setLoading] = useState(true);

  // paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [vgamesPerPage] = useState(15);
  const indexOfLastVgame = currentPage * vgamesPerPage;
  const indexOfFirstVgame = indexOfLastVgame - vgamesPerPage;
  const currentVgames = allVgames.slice(indexOfFirstVgame, indexOfLastVgame);

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setLoading(true);
    dispatch(getAllVgames());
  }, [dispatch]);

  useEffect(() => {
    if (allVgames.length) setLoading(false);
  }, [allVgames]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getAllVgames());
    setCurrentPage(1);
  }

  useEffect(() => {
    window.scroll(0, 0);
  }, [currentPage]);

  return (
    <div className={styles.home}>
      <div className={styles.navbar}>
        <NavBar />
      </div>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.containerbtn}>
        <button className={styles.button} onClick={(e) => handleClick(e)}>
          Refresh
        </button>
      </div>
      <Paginated
        vgamesPerPage={vgamesPerPage}
        allVgames={allVgames.length}
        paginated={paginated}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      {loading ? (
        <div className={styles.loading}>
          <Loading />
        </div>
      ) : (
        <div>
          {currentVgames.length > 0 ? (
            <div className={styles.cards}>
              {currentVgames.map((e) => (
                <VgameCard
                  key={e.id}
                  name={e.name}
                  image={e.image}
                  genres={e.genres}
                  id={e.id}
                />
              ))}
            </div>
          ) : (
            <div>
              <h1>ERROR 404</h1>
              <h2>No games found</h2>
            </div>
          )}
        </div>
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
