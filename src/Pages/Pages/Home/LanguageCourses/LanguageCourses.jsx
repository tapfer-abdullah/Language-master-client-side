import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import LanguagePlanCart from "../../../../Components/LanguagePlanCart/LanguagePlanCart";
import { useQuery } from "@tanstack/react-query";

const LanguageCourses = () => {

    const languages = ["English", "German", "Arabic", "Spanish", "Chines", "French", "Bangla"];

    const { isLoading, isError, data, error, refetch } = useQuery({
        queryKey: ['instructor'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/language')
            // console.log(data)
            return res.json();
          },
      })

      console.log(data);



  return (
    <>
    <div className="mt-20 mb-10 text-center w-9/12 md:w-1/2 mx-auto">
        <h3 className="text-3xl font-semibold mb-5">Language Courses</h3>
        <p>Take courses from the world's best instructors and universities. Courses include recorded auto-graded and peer-reviewed assignments, video lectures, and community discussion forums.</p>
    </div>
      <Tabs>
        <TabList className={`text-center`}>
          {/* <Tab>English</Tab>
          <Tab>German</Tab>
          <Tab>Arabic</Tab>
          <Tab>Spanish</Tab>
          <Tab>French</Tab>
          <Tab>Chines</Tab> */}
          
          {languages.map(lan => <Tab key={lan.index}>{lan}</Tab>)}

        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <LanguagePlanCart></LanguagePlanCart>
          <LanguagePlanCart></LanguagePlanCart>
          <LanguagePlanCart></LanguagePlanCart>
          </div>
          
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

export default LanguageCourses;
