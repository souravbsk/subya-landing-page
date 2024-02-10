import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const KeyFeature = ({ title, children }) => {
  return (
    <li className="space-y-1">
      <SectionTitle
        noanimation={true}
        className="!mb-0 !text-left font-semibold !text-base"
        title={title}
      ></SectionTitle>

      <p> {children}</p>
    </li>
  );
};

export default KeyFeature;
