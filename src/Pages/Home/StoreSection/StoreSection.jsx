import React from "react";
import ShopProduct from "./ShopProduct";
import Button from "../../../components/Button/Button";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const StoreSection = () => {
  return (
    <section id="shop" className="py-8 md:py-16 peraBg">
      <div className="container">
      <SectionTitle title="Sabhyasha Store"></SectionTitle>
        <ShopProduct></ShopProduct>
        <div data-aos="fade-up" className="text-center">
          <Button link={"/"} text="Shop Now" className="no-underline"></Button>
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
