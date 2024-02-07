import React from "react";

const OrderCancellation = () => {
  return (
    <div>
      <h2 className="font-bold text-xl mb-4">Order cancellation</h2>

      <p>
        Your order shall be fully refunded if it is cancelled within 24 hours of
        your purchase as our products are done on a made to order basis. Please
        submit a help ticket from Contact Us if you decide to cancel the order.
        For orders cancelled after 24 hours of the purchase but before the
        shipment, a 30% cancellation fee shall be applied. We will NOT accept an
        order cancellation request if the order has already been shipped.
      </p>
    </div>
  );
};

export default OrderCancellation;
