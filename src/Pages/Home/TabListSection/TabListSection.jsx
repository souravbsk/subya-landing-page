import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TeamsTab from "../../../components/TeamsTab/TeamsTab";
import AwardTab from "../../../components/AwardTab/AwardTab";
import AssociationTab from "../../../components/AssociationTab/AssociationTab";

const TabListSection = () => {
  return (
    <section className="md:py-32 py-12 container">
      <Tabs className="">
        <TabList
          data-aos="zoom-in-down"
          className=" mb-10 lg:w-5/12 md:w-8/12 w-10/12 mx-auto border-0 text-center flex md:flex-nowrap flex-wrap  items-center justify-center gap-6 md:gap-8"
        >
          <Tab className="shadow-2xl w-full my-button mx-auto h-16   text-[#7A5542] font-bold  flex justify-center items-center rounded-lg cursor-pointer relative overflow-hidden">
            Teams
          </Tab>
          <Tab className="shadow-2xl w-full my-button mx-auto h-16   text-[#7A5542] font-bold  flex justify-center items-center rounded-lg cursor-pointer relative overflow-hidden">
            Awards
          </Tab>
          <Tab className="shadow-2xl w-full my-button mx-auto h-16   text-[#7A5542] font-bold  flex justify-center items-center rounded-lg cursor-pointer relative overflow-hidden">
            Our Association
          </Tab>
        </TabList>

        <TabPanel>
          <TeamsTab></TeamsTab>
        </TabPanel>
        <TabPanel>
          <AwardTab></AwardTab>
        </TabPanel>
        <TabPanel>
          <AssociationTab></AssociationTab>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default TabListSection;
