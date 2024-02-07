import React from "react";

const EmailProcessedRefund = () => {
  return (
    <div className="space-y-5">
      <p className="">We’ll email you once we have processed your refund.</p>
      <p>
        Note: Item(s) must NOT be returned to the address on the package you
        received. That is not our return address and will affect the processing
        of your return.
      </p>
      <p>
        <span className="font-bold">Fast refund:</span> We will issue a refund
        to your original payment method within a week.
      </p>
      <p>
        <span className="font-bold">Kind reminder: </span> Return packages
        should be authorized. Any return request not authorized by customer
        service will not be honoured.
      </p>
    </div>
  );
};

export default EmailProcessedRefund;
