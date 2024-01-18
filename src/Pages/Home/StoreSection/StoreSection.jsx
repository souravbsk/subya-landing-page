import React from "react";
import ShopProduct from "./ShopProduct";
import Button from "../../../components/Button/Button";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const StoreSection = () => {
  return (
    <section className="py-16 peraBg">
      <div className="container">
      <SectionTitle title="Sabhyasha Store"></SectionTitle>
        <ShopProduct></ShopProduct>
        <div className="text-center">
          <Button link={"/"} text="Shop Now" className="no-underline"></Button>
        </div>
      </div>
    </section>
  );
};

export default StoreSection;