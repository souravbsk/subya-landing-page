import React from "react";
import img1 from "../../assets/awards/Picture1.webp";
import img2 from "../../assets/awards/Picture2.webp";
import img3 from "../../assets/awards/Picture3.webp";
import img4 from "../../assets/awards/Picture4.webp";
import { Link } from "react-router-dom";
const AwardTab = () => {
  return (
    <div
      data-aos="fade-up"
      className=" shadow-md  bg-white px-12 py-12 rounded-3xl"
    >
      <div className="grid gap-20 items-center lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2">
        <div className="flex flex-col justify-between">
          <figure>
            <img src={img1} alt="Elephant at sunset" />
          </figure>
          <p className="text-center mt-4 text-[#7A5542]">
            Selected as{" "}
            <Link
              className="underline"
              target="_blank"
              to="https://www.linkedin.com/feed/hashtag/?keywords=top20&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6986144742174568448"
            >
              #Top20{" "}
            </Link>
             Startups in the  
            <Link
              className="underline"
              target="_blank"
              to="https://www.linkedin.com/feed/hashtag/?keywords=fundstack2&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6986144742174568448"
            >
              {" "}
              #Fundstack{" "}
            </Link>
            3.0 2023 event by {" "}
            <Link
              className="underline"
              target="_blank"
              to="https://www.linkedin.com/feed/hashtag/?keywords=startupodisha&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6986144742174568448"
            >
              #StartupOdisha
            </Link>
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <figure>
            <img src={img2} alt="Elephant at sunset" />
          </figure>
          <p className="text-center mt-4 text-[#7A5542]">
            Backed by Microsoft for Startups Founders
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <figure>
            <img src={img3} alt="Elephant at sunset" />
          </figure>
          <p className="text-center mt-4 text-[#7A5542]">
            MOU with Uttarakhand RD Dept. to help the State Artisans
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <figure>
            <img src={img4} alt="Elephant at sunset" />
          </figure>
          <p className="text-center  mt-4 text-[#7A5542]">
            MOU with KIIT TBI - SFURTI For Cluster Collaboration
          </p>
        </div>
      </div>
    </div>
  );
};

export default AwardTab;
