import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVgames, filterByOrigin } from "../../redux/actions";

const OriginFilter = () => {
  const dispatch = useDispatch();
  const allVgames = useSelector((state) => state.vgames);

  const hanldeFilterOrigin = (e) => {
    dispatch(filterByOrigin(e.target.value));
  };

  return (
    <div>
      <label>By Origin</label>
      <select defaultValue={"DEFAULT"} onChange={(e) => hanldeFilterOrigin(e)}>
        <option value="DEFAULT" disabled>
          --
        </option>
        <option value="All">All</option>
        <option value="Created">Created</option>
        <option value="Api">Exists</option>
      </select>
    </div>
  );
};

export default OriginFilter;
