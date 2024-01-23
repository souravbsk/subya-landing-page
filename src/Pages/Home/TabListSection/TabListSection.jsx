import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const TabListSection = () => {
  return (
    <section className="py-32 max-w-full w-6/12 mx-auto">
      <Tabs className="text-center">
        <TabList className="border-0 mb-4 flex items-center justify-center gap-5">

          <Tab className="tab w-full px-5 py-3 text-2xl font-medium rounded">Team</Tab>
          <Tab className="tab w-full px-5 py-3 text-2xl font-medium rounded">Awards</Tab>
          <Tab className="tab w-full px-5 py-3 text-2xl font-medium rounded">Testimonials</Tab>
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
