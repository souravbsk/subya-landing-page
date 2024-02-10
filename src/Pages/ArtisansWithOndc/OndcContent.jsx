import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const OndcContent = ({ title, children }) => {
  return (
    <div className="space-y-2">
      <SectionTitle
        className="!mb-0 !text-left !text-base"
        title={title}
      ></SectionTitle>
      <p>{children}</p>
    </div>
  );
};

export default OndcContent;
