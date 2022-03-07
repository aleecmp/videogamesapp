import React from "react";

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
    <ul>
      <button
        onClick={() =>
          setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1)
        }
      >
        Prev
      </button>
      {pageNumbers?.map((number) => (
        <button key={number} onClick={() => paginated(number)}>
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
        Next{" "}
      </button>
    </ul>

    // <nav>
    //   <div>
    //     {pageNumbers?.map((number) => (
    //       <div key={number}>
    //         <button onClick={() => paginated(number)}>{number}</button>
    //       </div>
    //     ))}
    //   </div>
    // </nav>
  );
};

export default Paginated;
