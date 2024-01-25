import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const TabListSection = () => {
  return (
    <section className="py-32 max-w-full w-6/12 mx-auto">
      <Tabs className="text-center">
        <TabList className="border-0 mb-4 flex flex-col md:flex-row items-center justify-center gap-5">

          <Tab className="shadow-2xl w-full my-button mx-auto h-16   text-[#7A5542] font-bold  flex justify-center items-center rounded-lg cursor-pointer relative overflow-hidden">Team</Tab>
          <Tab className="shadow-2xl w-full my-button mx-auto h-16   text-[#7A5542] font-bold  flex justify-center items-center rounded-lg cursor-pointer relative overflow-hidden">Awards</Tab>
          <Tab className="shadow-2xl w-full my-button mx-auto h-16   text-[#7A5542] font-bold  flex justify-center items-center rounded-lg cursor-pointer relative overflow-hidden">Testimonials</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default TabListSection;
