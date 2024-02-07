import React from "react";
import OurJourneySection from "./OurJourneySection";
import OurJourneyContent from "./OurJourneyContent";
import { ScrollRestoration } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const OurJourney = () => {
  return (
    <section className="peraBg py-20">
      <div className="container md:w-9/12">
        <div>
          {/* <OurJourneySection></OurJourneySection> */}
          <SectionTitle title="Sabhyasha Journey"></SectionTitle>
          <OurJourneyContent></OurJourneyContent>
          <ScrollRestoration />
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
