import React from "react";

const SectionTitle = ({ title, className }) => {
  return (
    <h2
      data-aos="fade-up"
      className={`text-[#303030] font-extrabold tracking-tight text-center font-anton  text-3xl md:text-4xl mb-3 md:mb-10  ${className}`}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
