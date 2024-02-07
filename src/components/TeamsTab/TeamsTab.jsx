import React from "react";
import alisha from "../../assets/Teams/alisha.png";
import sasank from "../../assets/Teams/sasank.jpg";
import TeamCard from "../TeamCard/TeamCard";
const TeamsTab = () => {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col md:flex-row  justify-around shadow-md  bg-white lg:p-12 px-6 py-10  rounded-3xl  gap-8"
    >
      <TeamCard
        image={alisha}
        title="Alisha Patra"
        designation="Founder & COO"
        link="https://www.linkedin.com/in/alisha-patra-945258120/"
        pera="Experienced professional in Rural Management and Social Work, recognised for empowering anti-trafficking victims. Acknowledged by the President of India for outstanding program."
      ></TeamCard>
      <TeamCard
        image={sasank}
        title="Sasank Sekhar Patro"
        designation="Founder & CEO"
        link="https://www.linkedin.com/in/sasankpatro/"
        pera="Experienced sales and marketing professional with a track record of leading marketing roles in major brands in India."
      ></TeamCard>
      
    </div>
  );
};

export default TeamsTab;

{
  /* <p data-aos="fade-up" className="md:leading-8 ">
            MBA Rural Management and MSW with 11+ years experience in Livelihood
            Development. Worked with Govt. Of Bihar, Govt. of Odisha and leading
            organizations like IRRI and Justice & care. Received Presidential
            acknowledgement for the outstanding empowerment & employment
            programmes for anti-human trafficking victims/survivors.
          </p> */
}

{
  /* <p data-aos="fade-up" className="md:leading-8 ">
            M Com. + Certification from IIM Bangalore with 20+ years of Sales &
            Marketing experience in different strategic roles in leading
            organisations like Ramoji Film City, Gati, Big 92.7 FM, Mahindra
            Satyam (Tech Mahindra), Centrum Capital etc. Successfully ran many
            campaigns in both domestic and International markets.
          </p> */
}
