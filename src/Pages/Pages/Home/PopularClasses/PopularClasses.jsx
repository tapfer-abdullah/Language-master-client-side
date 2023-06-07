import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const PopularClasses = () => {
  return (
    <>
    <div className="mt-20 mb-5 text-center text-3xl font-semibold">
        <h3>Popular Classes</h3>
    </div>
      <Tabs>
        <TabList className={`text-center`}>
          <Tab>English</Tab>
          <Tab>German</Tab>
          <Tab>Arabic</Tab>
          <Tab>Spanish</Tab>
          <Tab>French</Tab>
          <Tab>Chines</Tab>
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
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 6</h2>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default PopularClasses;
