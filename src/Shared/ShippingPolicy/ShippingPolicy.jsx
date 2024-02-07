import React from "react";
import { Link, ScrollRestoration } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ShippingOptionCost from "./ShippingOptionCost";
import OrderProcessingTime from "./OrderProcessingTime";
import DeliveryAddress from "./DeliveryAddress";
import TrackingOrder from "./TrackingOrder";
import ReturnRefundExchange from "./ReturnRefundExchange";

const ShippingPolicy = () => {
  return (
    <section className="peraBg py-20">
      <div className="container md:w-9/12">
        <div className=" mb-8">
          <SectionTitle title="Shipping & Delivery Policy"></SectionTitle>

          <p>
            This document sets out the shipping policy that applies to customers
            that make a purchase at www.sabhyasha.com. If you have any
            questions, please contact our customer service team at{" "}
            <span className="font-bold">care@sabhyasha.com.</span>
          </p>
        </div>
        <ShippingOptionCost></ShippingOptionCost>

        <OrderProcessingTime></OrderProcessingTime>
        <DeliveryAddress></DeliveryAddress>
        <TrackingOrder></TrackingOrder>
        <ReturnRefundExchange></ReturnRefundExchange>
      </div>
      <ScrollRestoration />
    </section>
  );
};

export default ShippingPolicy;
