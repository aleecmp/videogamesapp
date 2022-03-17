import React, { useEffect } from "react";
import styles from "./Paginated.module.css";

const Paginated = ({
  vgamesPerPage,
  allVgames,
  paginated,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];

  // guarda los nummeros de paginas en un array
  for (let i = 0; i < Math.ceil(allVgames / vgamesPerPage); i++) {
    pageNumbers.push(i + 1);
  }
  // lleva al inicio de la pagina
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <nav className={styles.container}>
      <ul className={styles.paginated}>
        <button
          className={styles.button}
          // si el numero de pagina es igual a 1 no se puede retroceder
          onClick={() =>
            setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1)
          }
        >
          {" "}
          &#60;{" "}
        </button>
        {pageNumbers?.map((number) => (
          <button
            className={
              currentPage === number
                ? styles.button && styles.active
                : styles.button
            }
            key={number}
            onClick={() => paginated(number)}
          >
            {number}
          </button>
        ))}
        <button
          className={styles.button}
          // si el numero de pagina es igual al numero de paginas no se puede avanzar
          onClick={() =>
            setCurrentPage(
              currentPage === pageNumbers.length ? currentPage : currentPage + 1
            )
          }
        >
          {" "}
          &#62;{" "}
        </button>
      </ul>
    </nav>
  );
};

export default Paginated;
