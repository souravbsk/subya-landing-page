import React from "react";
import { Link } from "react-router-dom";

const ShippingPolicy = () => {
  return (
    <section className="peraBg py-20">
      <div className="container md:w-9/12">
        <div className=" mb-8">
          <h1 className="text-[#303030] font-extrabold tracking-tight font-anton  text-3xl md:text-4xl mb-3 md:mb-5">
            Shipping & Delivery Policy
          </h1>
          <p>
            This document sets out the shipping policy that applies to customers
            that make a purchase at www.sabhyasha.com. If you have any
            questions, please contact our customer service team at{" "}
            <span className="font-bold">care@sabhyasha.com.</span>
          </p>
        </div>

        <div className="text-[#303030] mb-8 space-y-2">
          <h3 className=" text-xl font-bold">
            Shipping Options & Delivery Costs
          </h3>
          <p>
            We do not charge any shipping cost, all product cost is inclusive of
            shipping cost for delivery all across India. For International the
            shipping is yet to open.
          </p>
        </div>
        <div className="text-[#303030] mb-8 space-y-2">
          <h3 className=" text-xl font-bold">Order Processing Time</h3>
          <p>
            Since all the Products are on a made to order basis only, 100%
            handmade by rural artisans the shipping will start as soon as the
            product is ready. Tentatively the delivery of the product will be
            done in 10 -15 days from the day of booking.
          </p>
        </div>
        <div className="text-[#303030] mb-8 space-y-2">
          <h3 className=" text-xl font-bold">Delivery Address</h3>
          <p>
            Please note that we are unable to modify the delivery address once
            you have placed your order. Please make sure you put the right
            shipping address.
          </p>
        </div>
        <div className="text-[#303030] mb-8 space-y-2">
          <h3 className=" text-xl font-bold">Tracking Your Order</h3>
          <p>
            Once your order has been dispatched, we will send you a confirmation
            email with tracking information. You will be able to track your
            package directly on the carrier’s website. And also, can be tracked
            on your{" "}
            <Link className="font-bold text-[#7A5542]" to="/">
              My Account
            </Link>{" "}
            Page.
          </p>
        </div>
        <div className="text-[#303030] mb-8 space-y-2">
          <h3 className=" text-xl font-bold">
            Returns, Refunds, and Exchanges
          </h3>
          <p>
            We want you to be completely happy with your purchase – please read
            our{" "}
            <Link className="font-bold text-[#7A5542]" to="/">
              return policy
            </Link>{" "}
            for detailed information about our processes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShippingPolicy;
