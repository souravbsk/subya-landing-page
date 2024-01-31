import React from "react";
import alisha from "../../assets/Teams/alisha.jpg";
import sasank from "../../assets/Teams/sasank.jpg";
const TeamsTab = () => {
  return (
    <div data-aos="fade-up" className="flex shadow-md  bg-white px-12 py-12 rounded-3xl flex-col gap-8">
      <div className="flex border-b pb-8 items-center gap-12">
        <figure data-aos="fade-right" className="shrink-0 ">
          <img className=" w-80 rounded-3xl " src={alisha} alt="alisha" />
        </figure>
        <div>
          <h2 data-aos="fade-left" className="text-[#303030] text-3xl font-extrabold mb-4 ">
            Alisha Patra, Founder & COO
          </h2>
          <p data-aos="fade-up" className="leading-8 text-justify">
            MBA Rural Management and MSW with 11+ years experience in Livelihood
            Development. Worked with Govt. Of Bihar, Govt. of Odisha and leading
            organizations like IRRI and Justice & care. Received Presidential
            acknowledgement for the outstanding empowerment & employment
            programmes for anti-human trafficking victims/survivors.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-12">
        <figure data-aos="fade-right" className="shrink-0 ">
          <img className=" w-80 rounded-3xl " src={sasank} alt="Sasank" />
        </figure>
        <div>
          <h2 data-aos="fade-left" className="text-[#303030] text-3xl font-extrabold mb-4 ">
            Sasank Sekhar Patro, Founder & CEO
          </h2>
          <p data-aos="fade-up" className="leading-8 text-justify">
            M Com. + Certification from IIM Bangalore with 20+ years of Sales &
            Marketing experience in different strategic roles in leading
            organisations like Ramoji Film City, Gati, Big 92.7 FM, Mahindra
            Satyam (Tech Mahindra), Centrum Capital etc. Successfully ran many
            campaigns in both domestic and International markets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamsTab;
