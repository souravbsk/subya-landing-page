import React from "react";

const EligibleReturn = () => {
  return (
    <div>
      <h2 className="font-bold text-xl mb-4">
        Purchase not eligible for return
      </h2>
      <ul className="list-disc ps-8 space-y-3">
        <li>
          <p>Final sale/Clearance item(s) is not eligible for return.</p>
        </li>
        <li>
          <p>
            Used, damaged and missing of original package (Include all price
            tags, labels, original packing, and invoice and all the items in the
            package) cannot be returned or exchanged.
          </p>
        </li>
        <li>
          <p>
            You must email us a picture showing the problem/defect during the
            shipment after submitting the return request online.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default EligibleReturn;
