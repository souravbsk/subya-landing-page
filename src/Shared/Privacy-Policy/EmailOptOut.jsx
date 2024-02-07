import React from "react";

const EmailOptOut = () => {
  return (
    <div className="text-[#303030] mb-8 space-y-4">
      <h3 className=" text-xl font-bold">Email Opt-Out</h3>
      <p>
        <span className="font-bold">
          You can opt out of receiving our marketing emails.
        </span>{" "}
        To stop receiving our promotional emails, please email
        unsubscriber@sabhyasha.com. It may take about ten days to process your
        request. Even if you opt out of getting marketing messages, we will
        still be sending you transactional messages through email and SMS about
        your purchases.
      </p>
    </div>
  );
};

export default EmailOptOut;
