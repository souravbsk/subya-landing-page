import React from "react";
import { Link } from "react-router-dom";

const ReturnRefundExchange = () => {
  return (
    <div className="text-[#303030] mb-8 space-y-2">
      <h3 className=" text-xl font-bold">Returns, Refunds, and Exchanges</h3>
      <p>
        We want you to be completely happy with your purchase – please read our{" "}
        <Link className="font-bold text-[#7A5542]" to="/">
          return policy
        </Link>{" "}
        for detailed information about our processes.
      </p>
    </div>
  );
};

export default ReturnRefundExchange;
