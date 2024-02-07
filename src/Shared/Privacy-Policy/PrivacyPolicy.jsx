import React from "react";
import { Link, ScrollRestoration } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import InfoCollect from "./InfoCollect";
import DiffWayInfoCollect from "./DiffWayInfoCollect";
import UsePersonalInfo from "./UsePersonalInfo";
import PermittedByLaw from "./PermittedByLaw";
import EmailOptOut from "./EmailOptOut";
import ThirdPartySite from "./ThirdPartySite";
import GrievanceContact from "./GrievanceContact";
import Jurisdiction from "./Jurisdiction";
import PrivacyPolicyApplies from "./PrivacyPolicyApplies";

const PrivacyPolicy = () => {
  return (
    <section className="peraBg py-20">
      <div className="container md:w-9/12">
        <div className=" mb-8">
          <SectionTitle title="Privacy Policy"></SectionTitle>
          <PrivacyPolicyApplies></PrivacyPolicyApplies>
        </div>
        <InfoCollect></InfoCollect>
        <DiffWayInfoCollect></DiffWayInfoCollect>
        <UsePersonalInfo></UsePersonalInfo>
        <PermittedByLaw></PermittedByLaw>
        <EmailOptOut></EmailOptOut>
        <ThirdPartySite></ThirdPartySite>
        <GrievanceContact></GrievanceContact>
        <Jurisdiction></Jurisdiction>
      </div>
      <ScrollRestoration />
    </section>
  );
};

export default PrivacyPolicy;
