import React from "react";

const ReturnSection = () => {
  return (
    <div>
      <h2 className="font-bold text-xl mb-4">Return Policy</h2>
      <ul className="list-disc ps-8 space-y-3">
        <li>
          <p>
            All purchases can only be returned if it is defective/damaged or is
            a wrong delivery within 7 days after you have received the last
            package of your order.
          </p>
        </li>
        <li>
          <p>
            Items must be unused, undamaged, and in original packaging, include
            all price tags, labels, original packing, and invoice and all the
            items in the package must be intact. If not, the buyer is
            responsible for all incurred fees and no refund will be issued.
          </p>
        </li>
        <li>
          <p>
            Items that do not meet these criteria will not be considered for
            return.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ReturnSection;
