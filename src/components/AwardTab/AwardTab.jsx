import React from "react";
import img1 from "../../assets/awards/Picture1.webp";
import img2 from "../../assets/awards/Picture5.webp";
import img3 from "../../assets/awards/Picture6.webp";
import img4 from "../../assets/awards/Picture7.webp";
import img5 from "../../assets/awards/Picture8.webp";
import img6 from "../../assets/awards/Picture9.webp";
import img7 from "../../assets/awards/Picture10.webp";
import img8 from "../../assets/awards/Picture11.webp";
import img9 from "../../assets/awards/Picture12.webp";
import { Link } from "react-router-dom";
import "./Awards.css";
const awardsItems = [
  {
    img: img1,
    caption: `Selected as <u><a href="https://www.linkedin.com/feed/hashtag/?keywords=top20&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6986144742174568448">#Top20</a></u> Startups in the <u><a href="https://www.linkedin.com/feed/hashtag/?keywords=fundstack2&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6986144742174568448">#Fundstack</a></u> 3.0 2023 event by <u><a href="https://www.linkedin.com/feed/hashtag/?keywords=startupodisha&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6986144742174568448">#StartupOdisha</a></u>`,
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
  {
    img: img8,
  },
  {
    img: img9,
  },
];

const AwardTab = () => {
  return (
    <div
      data-aos="fade-up"
      className="shadow-md bg-white px-12 py-12 rounded-3xl"
    >
      <div className="grid  gap-8 items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {awardsItems.map((item, index) => (
          <div
            key={index}
            className="flex shadow rounded-lg overflow-hidden  flex-col items-center justify-between"
          >
            <figure className="h-64 w-full">
              <img
                className="h-full  w-full"
                src={item.img}
                alt={`Image ${index + 1}`}
              />
            </figure>
            <p
              dangerouslySetInnerHTML={{ __html: item?.caption }}
              className="text-center p-4  text-[#7A5542]"
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardTab;
