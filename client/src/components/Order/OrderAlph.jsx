import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { orderByName } from "../../redux/actions";

const OrderAlph = () => {
  const [order, setOrder] = useState("");

  const dispatch = useDispatch();

  let handleSortAlph = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setOrder(`Sorted ${e.target.value}`);
  };

  return (
    <div>
      <label>By Alph</label>
      <select defaultValue={"DEFAULT"} onChange={(e) => handleSortAlph(e)}>
        <option value="DEFAULT" disabled>
          --
        </option>
        <option value="Asc">A-Z</option>
        <option value="Desc">Z-A</option>
      </select>
    </div>
  );
};

export default OrderAlph;
