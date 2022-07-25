import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGenres,
  filterVgamesByGenre,
  filterByOrigin,
} from "../../redux/actions";

const FilterBy = () => {
  const dispatch = useDispatch();
  const genre = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);
  console.log(genre);

  const handleFilter = (e) => {
    if (
      e.target.value === "All" ||
      e.target.value === "Created" ||
      e.target.value === "Api"
    ) {
      dispatch(filterByOrigin(e.target.value));
    } else {
      dispatch(filterVgamesByGenre(e.target.value));
    }
  };

  return (
    <div>
      <select onChange={(e) => handleFilter(e)}>
        <option value="reset">Filter by</option>
        <optgroup label="Origin">
          <option value="All">All</option>
          <option value="Created">Created</option>
          <option value="Api">Exists</option>
        </optgroup>
        <optgroup label="Genres">
          {genre?.map((e, i) => {
            return (
              <option key={i} value={e.name}>
                {e.name}
              </option>
            );
          })}
        </optgroup>
      </select>
    </div>
  );
};

export default FilterBy;
