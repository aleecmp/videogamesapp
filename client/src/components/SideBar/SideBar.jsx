import React from "react";
import GenresFilter from "../Filters/GenresFilter";
import OriginFilter from "../Filters/OriginFilter";
import OrderAlph from "../Order/OrderAlph";
import OrderRating from "../Order/OrderRating";

const SideBar = () => {
  return (
    <div>
      <h3>Filters</h3>
      <GenresFilter />
      <OriginFilter />
      <h3>Order</h3>
      <OrderAlph />
      <OrderRating />
    </div>
  );
};

export default SideBar;
