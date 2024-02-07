import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Link, ScrollRestoration } from "react-router-dom";
import AgreementTerms from "./AgreementTerms";
import AcceptableUse from "./AcceptableUse";
import InformationProvide from "./InformationProvide";
import OurContent from "./OurContent";
import ThirdPartyContent from "./ThirdPartyContent";
import SiteManagement from "./SiteManagement";
import Modifications from "./Modifications";
import Disclaimer from "./Disclaimer";
import BusinessUser from "./BusinessUser";
import Consumer from "./Consumer";
import Termination from "./Termination";
import General from "./General";

const TermConditions = () => {
  return (
    <section className="peraBg py-20">
      <div className="container md:w-9/12 space-y-5">
        <SectionTitle title="Terms and Conditions"></SectionTitle>
        <div>
          <ul className="space-y-6">
            <AgreementTerms></AgreementTerms>
            <AcceptableUse></AcceptableUse>
            <InformationProvide></InformationProvide>
            <OurContent></OurContent>
            <ThirdPartyContent></ThirdPartyContent>
            <SiteManagement></SiteManagement>
            <Modifications></Modifications>
            <Disclaimer></Disclaimer>
            <BusinessUser></BusinessUser>
            <Consumer></Consumer>
            <Termination></Termination>
            <General></General>
          </ul>
        </div>
      </div>
      <ScrollRestoration />
    </section>
  );
};

export default TermConditions;
