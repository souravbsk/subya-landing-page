import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TeamsTab from "../../../components/TeamsTab/TeamsTab";
import AwardTab from "../../../components/AwardTab/AwardTab";
import AssociationTab from "../../../components/AssociationTab/AssociationTab";

const TabListSection = () => {
  return (
    <section className="py-32 container">
      <Tabs className="">
        <TabList
          data-aos="zoom-in-down"
          className="max-w-full mb-10 w-6/12 mx-auto border-0 text-center flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <Tab className="shadow-2xl w-full my-button mx-auto h-16   text-[#7A5542] font-bold  flex justify-center items-center rounded-lg cursor-pointer relative overflow-hidden">
            Teams
          </Tab>
          <Tab className="shadow-2xl w-full my-button mx-auto h-16   text-[#7A5542] font-bold  flex justify-center items-center rounded-lg cursor-pointer relative overflow-hidden">
            Awards
          </Tab>
          <Tab className="shadow-2xl w-full my-button mx-auto h-16   text-[#7A5542] font-bold  flex justify-center items-center rounded-lg cursor-pointer relative overflow-hidden">
            Our Associations
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
