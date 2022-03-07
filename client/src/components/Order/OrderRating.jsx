import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { orderByRating } from "../../redux/actions";

const OrderRating = () => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("");

  const handleSortRating = (e) => {
    e.preventDefault();
    dispatch(orderByRating(e.target.value));
    setOrder(`Sorted ${e.target.value}`);
  };

  return (
    <div>
      <label>By Rating</label>
      <select
        defaultValue={"DEFAULT"}
        onChange={(e) => {
          handleSortRating(e);
        }}
      >
        <option value="DEFAULT" disabled>
          --
        </option>
        <option value="Asc">Less Rating</option>
        <option value="Desc">More Rating</option>
      </select>
    </div>
  );
};

export default OrderRating;
