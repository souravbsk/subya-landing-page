import React from "react";
import { Link } from "react-router-dom";

const TrackingOrder = () => {
  return (
    <div className="text-[#303030] mb-8 space-y-2">
      <h3 className=" text-xl font-bold">Tracking Your Order</h3>
      <p>
        Once your order has been dispatched, we will send you a confirmation
        email with tracking information. You will be able to track your package
        directly on the carrier’s website. And also, can be tracked on your{" "}
        <Link className="font-bold text-[#7A5542]" to="/">
          My Account
        </Link>{" "}
        Page.
      </p>
    </div>
  );
};

export default TrackingOrder;
