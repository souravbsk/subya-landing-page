import React from "react";
import TrackSlat from "./TrackSlat/TrackSlat";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const Dashboard = () => {
  return (
    <section>
      <SectionTitle
        title="Dashboard Overview:"
        className="!text-left !mb-5 !text-2xl text-black"
      ></SectionTitle>

      <div>
        <TrackSlat></TrackSlat>
      </div>
    </section>
  );
};

export default Dashboard;
