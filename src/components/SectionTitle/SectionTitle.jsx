import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <h2 data-aos="fade-up" className="text-[#303030] font-extrabold tracking-tight text-center font-anton  text-xl md:text-5xl mb-3 md:mb-7">
      {title}
    </h2>
  );
};

export default SectionTitle;
