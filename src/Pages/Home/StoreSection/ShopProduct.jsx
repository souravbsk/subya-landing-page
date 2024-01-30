import React from "react";
import image1 from "../../../assets/shop/1.webp";
import image2 from "../../../assets/shop/2.webp";
import image3 from "../../../assets/shop/3.webp";
import image4 from "../../../assets/shop/4.webp";
import image5 from "../../../assets/shop/5.webp";
import image6 from "../../../assets/shop/6.webp";
import ProductCard from "../../../components/ProductCard/ProductCard";
const ShopProduct = () => {
  return (
    <div  className="grid my-12 md:grid-cols-2 grid-cols-1  lg:grid-cols-3 gap-8">
    <ProductCard image={image1} title="HOME DECOR" pera="Product Description" price="19.99"></ProductCard>
    <ProductCard image={image2} title="PAINTINGS" pera="Product Description" price="19.99"></ProductCard>
    <ProductCard image={image3} title="SAREES" pera="Product Description" price="19.99"></ProductCard>
    <ProductCard image={image4} title="DUPATTAS" pera="Product Description" price="19.99"></ProductCard>
    <ProductCard image={image5} title="JEWELLERY" pera="Product Description" price="19.99"></ProductCard>
    <ProductCard image={image6} title="ACCESSORIES" pera="Product Description" price="19.99"></ProductCard>
    </div>
  );
};

export default ShopProduct;
