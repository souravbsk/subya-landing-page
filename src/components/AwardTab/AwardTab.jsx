import React from "react";
import img1 from "../../assets/awards/image1.webp";
import img2 from "../../assets/awards/image2.webp";
import img3 from "../../assets/awards/image3.webp";
import img4 from "../../assets/awards/image4.webp";
import img5 from "../../assets/awards/image5.webp";
import img6 from "../../assets/awards/image6.webp";
import img7 from "../../assets/awards/image7.webp";
import { Link } from "react-router-dom";
import "./Awards.css";
const awardsItems = [
  {
    img: img1,
    caption: "Selected as Top20 Startup in FundStack3.0 2023 held by Startup Odisha",
  },
  {
    img: img2,
    caption: "Awarded as India’s Rising 50 under 50 Dynamic Femina 2023",
  },
  { img: img3, caption: "Selected in the STPI NGIS CHUNNAUTI 5.0 competition" },
  { img: img4, caption: "Selected in the SURGE 3.0 Hackathon by AIC Nalanda" },
  {
    img: img5,
    caption: "Selected for Rise Up 2.0 by Mahindra E-hub",
  },
  {
    img: img6,
    caption: "Shortlisted in the CII Idea2Impact Competition",
  },
  {
    img: img7,
    caption: "Selected in the Wadhwani Lift-off  8.1 Program",
  },
];

const AwardTab = () => {
  return (
    <div
      data-aos="fade-up"
      className="shadow-md bg-white lg:p-12 px-6 py-10  rounded-3xl"
    >
      <div className="grid  gap-4 md:gap-3  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-2">
        {awardsItems.map((item, index) => (
          <div
            key={index}
            className="flex shadow rounded-lg overflow-hidden  flex-col items-center "
          >
            <figure className="w-full">
              <img
                className="h-full  w-full"
                src={item.img}
                alt={`Image ${index + 1}`}
              />
            </figure>
            <p
              dangerouslySetInnerHTML={{ __html: item?.caption }}
              className="text-center text-sm py-4  text-[#7A5542]"
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardTab;
