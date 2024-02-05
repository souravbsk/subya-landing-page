import React from "react";
import img1 from "../../assets/associationimages/image1.webp";
import img2 from "../../assets/associationimages/image2.webp";
import img3 from "../../assets/associationimages/image3.webp";
import img4 from "../../assets/associationimages/image4.webp";
import img5 from "../../assets/associationimages/image5.webp";
const associationItems = [
  {
    img: img1,
    caption: `Backed by Microsoft for Startups Founders`,
  },
  {
    img: img2,
    caption: "MOU with Uttarakhand RD Dept. to help the State Artisans",
  },
  {
    img: img3,
    caption: "MOU with  KIIT TBI  - SFURTI  For Cluster Collaboration",
  },
  {
    img: img4,
    caption: "AIC Nalanda",
  },
  {
    img: img5,
    caption: "Incubation Centre of Sri Sri University",
  },
];

const AssociationTab = () => {
  return (
    <div
      data-aos="fade-up"
      className="shadow-md bg-white lg:p-12 px-6 py-10  rounded-3xl"
    >
      <div className="grid  gap-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-1">
        {associationItems.map((item, index) => (
          <div
            key={index}
            className="flex md:p-4 shadow rounded-lg overflow-hidden  flex-col items-center "
          >
            <figure className="md:w-52 flex items-center">
              <img className="" src={item.img} alt={`Image ${index + 1}`} />
            </figure>
            <p
              dangerouslySetInnerHTML={{ __html: item?.caption }}
              className="text-center  mt-4  text-[#7A5542]"
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssociationTab;
