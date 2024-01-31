import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TeamsTab from "../../../components/TeamsTab/TeamsTab";
import AwardTab from "../../../components/AwardTab/AwardTab";

const TabListSection = () => {
  return (
    <section className="py-32 container">
      <Tabs  className="">
        <TabList data-aos="zoom-in-down" className="max-w-full mb-16 w-6/12 mx-auto border-0 text-center flex flex-col md:flex-row items-center justify-center gap-8">
          <Tab className="shadow-2xl w-full my-button mx-auto h-16   text-[#7A5542] font-bold  flex justify-center items-center rounded-lg cursor-pointer relative overflow-hidden">
            Team
          </Tab>
          <Tab className="shadow-2xl w-full my-button mx-auto h-16   text-[#7A5542] font-bold  flex justify-center items-center rounded-lg cursor-pointer relative overflow-hidden">
            Awards
          </Tab>
          {/* <Tab className="shadow-2xl w-full my-button mx-auto h-16   text-[#7A5542] font-bold  flex justify-center items-center rounded-lg cursor-pointer relative overflow-hidden">Testimonials</Tab> */}
        </TabList>

        <TabPanel>
          <TeamsTab></TeamsTab>
        </TabPanel>
        <TabPanel>
          <AwardTab></AwardTab>
        </TabPanel>
        {/* <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel> */}
      </Tabs>
    </section>
  );
};

export default TabListSection;
