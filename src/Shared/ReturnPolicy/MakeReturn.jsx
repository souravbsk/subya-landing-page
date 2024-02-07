import React from "react";

const MakeReturn = () => {
  return (
    <div>
      <h2 className="font-bold text-xl mb-4">How to Make Your Return</h2>
      <ul className="space-y-3">
        <li>
          <p>
            <span className="font-bold">Step 1:</span> Click the “Tracking
            Order” feature at the bottom menu of our home page.
          </p>
        </li>
        <li>
          <p>
            <span className="font-bold">Step 2:</span> Enter your Email Address
            and Order Number.
          </p>
        </li>
        <li>
          <p>
            <span className="font-bold">Step 3:</span> There is a “Return”
            button in the specific order. You need to click it to submit the
            return request and you will get authorization and a return address
            via email within 48 hours.
          </p>
        </li>
      </ul>
      <p className="mt-8">
        Once we receive your return, please allow 3 to 5 business days to
        process your returns.
      </p>
    </div>
  );
};

export default MakeReturn;
