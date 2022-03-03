import React from "react";

const Paginated = ({ vgamesPerPage, allVgames, paginated }) => {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(allVgames / vgamesPerPage); i++) {
    pageNumbers.push(i + 1);
  }
  return (
    <nav>
      <div>
        {pageNumbers?.map((number) => (
          <div key={number}>
            <button onClick={() => paginated(number)}>{number}</button>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Paginated;
