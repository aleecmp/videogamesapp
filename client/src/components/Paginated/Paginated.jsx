import React from "react";
import styles from "./Paginated.module.css";

const Paginated = ({
  vgamesPerPage,
  allVgames,
  paginated,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(allVgames / vgamesPerPage); i++) {
    pageNumbers.push(i + 1);
  }
  return (
    <nav className={styles.container}>
      <ul className={styles.paginated}>
        <button
          onClick={() =>
            setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1)
          }
        >
          {" "}
          &#60;{" "}
        </button>
        {pageNumbers?.map((number) => (
          <button
            className={styles.button}
            key={number}
            onClick={() => paginated(number)}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage(
              currentPage === allVgames ? currentPage : currentPage + 1
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
