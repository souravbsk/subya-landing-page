import React from "react";
import HorizontalTimeLine from "../../../components/HorizontalTimeLine/HorizontalTimeLine";
import Marquee from "react-fast-marquee";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const TimeLine = () => {
  return (
    <div className="py-16 overflow-x-auto">
        <h3 className="text-center">TiMELINE</h3>
        <SectionTitle title="Sabayasha"></SectionTitle>
    <p className="text-center font-extrabold text-2xl mb-12">2022</p>


        <HorizontalTimeLine></HorizontalTimeLine>
    <p className="text-center font-extrabold text-2xl my-12">2023</p>

        <HorizontalTimeLine></HorizontalTimeLine>
      
    </div>
  );
};

export default TimeLine;
