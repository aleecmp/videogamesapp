import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, filterVgamesByGenre } from "../../redux/actions";

const GenresFilter = () => {
  const dispatch = useDispatch();
  const genre = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);
  console.log(genre);

  const handleFilterGenre = (e) => {
    dispatch(filterVgamesByGenre(e.target.value));
    console.log(e.target.value);
  };

  return (
    <div>
      <label>By Genre</label>
      <select defaultValue={"DEFAULT"} onChange={(e) => handleFilterGenre(e)}>
        <option value="DEFAULT" disabled>
          --
        </option>
        <option value="All">All</option>
        {genre?.map((e, i) => {
          return (
            <option key={i} value={e.name}>
              {e.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default GenresFilter;
