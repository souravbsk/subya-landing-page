import React from "react";
import img1 from "../../assets/startupimages/image1.png";
import img2 from "../../assets/startupimages/image2.png";
import img3 from "../../assets/startupimages/image3.png";
const StartUpImages = () => {
  return (
    <div className="flex  p-3 items-end justify-center gap-2 flex-wrap">
      <img className=" aspect-[2/1]" src={img3} alt="" />
      <img className=" aspect-[2/1]" src={img2} alt="" />
      <img className=" aspect-[2/1]" src={img1} alt="" />
    </div>
  );
};

export default StartUpImages;
