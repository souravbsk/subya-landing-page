import React from "react";
import { FaBus, FaCheck, FaRegCompass, FaShoppingCart } from "react-icons/fa";
import SlatCard from "../../../../../components/SlatCard/SlatCard";

const TrackSlat = () => {
  return (
    <div className=" grid lg:grid-cols-4 md:grid-cols-2 gap-8">
      <SlatCard
        icon={<FaShoppingCart></FaShoppingCart>}
        title="Total Order"
        count={636}
      ></SlatCard>
      <SlatCard
        icon={<FaRegCompass></FaRegCompass>}
        title="Order Pending"
        count={636}
      ></SlatCard>
      <SlatCard
        icon={<FaBus />}
        title="Orders Processing"
        count={77}
      ></SlatCard>
      <SlatCard
        icon={<FaCheck />}
        title="Orders Delivered"
        count={354}
      ></SlatCard>
    </div>
  );
};

export default TrackSlat;
