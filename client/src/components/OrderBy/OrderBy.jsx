import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { orderByName } from "../../redux/actions";
import { orderByRating } from "../../redux/actions";

const OrderBy = () => {
  const [order, setOrder] = useState("");

  const dispatch = useDispatch();

  const handleSelect = (e) => {
    if (e.target.value === "Asc-name" || e.target.value === "Desc-name") {
      dispatch(orderByName(e.target.value));
    }
    if (e.target.value === "Asc-rating" || e.target.value === "Desc-rating") {
      dispatch(orderByRating(e.target.value));
    }
    setOrder(e.target.value);
  };

  return (
    <div>
      <select onChange={(e) => handleSelect(e)}>
        <option value="reset">Order By</option>
        <optgroup label="Name">
          <option value="Asc-name">A-Z</option>
          <option value="Desc-name">Z-A</option>
        </optgroup>
        <optgroup label="Rating">
          <option value="Asc-rating">Less Rating</option>
          <option value="Desc-rating">More Rating</option>
        </optgroup>
      </select>
    </div>
  );
};

export default OrderBy;
