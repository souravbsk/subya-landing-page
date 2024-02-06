import React from "react";
import OurJourneySection from "./OurJourneySection";
import OurJourneyContent from "./OurJourneyContent";
import { ScrollRestoration } from "react-router-dom";

const OurJourney = () => {
  return (
    <div className="relative">
      <OurJourneySection></OurJourneySection>
      <OurJourneyContent></OurJourneyContent>
      <ScrollRestoration />
    </div>
  );
};

export default OurJourney;
