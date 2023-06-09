/* eslint-disable no-unused-vars */
import CustomHelmet from "../../../Components/Helmet/CustomHelmet";
import LanguagePlanCart from "../../../Components/LanguagePlanCart/LanguagePlanCart";
import PageBanner from "../../../Components/PageBanner/PageBanner";
import { useQuery } from "@tanstack/react-query";
import { RotatingLines } from "react-loader-spinner";

const Classes = () => {
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["instructor"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/courses");
      // console.log(data)
      return res.json();
    },
  });

  if (isLoading) {
    return (
      <div className="h-[70vh] flex justify-center items-center">
        <RotatingLines
          strokeColor="#ff5161"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );
  }
  // console.log(data);

  return (
    <div>
      <CustomHelmet>Courses</CustomHelmet>
      <div>
        <PageBanner
          title={`All the offered classes`}
          subTitle={`Teaching Turning Today's Learners Into Tomorrow's Leaders`}
          img="https://www.mcgill.ca/continuingstudies/files/continuingstudies/cs/hero/languages_1440x600_0.jpg"
        ></PageBanner>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-10">
        {data?.map((d) => (
          <LanguagePlanCart key={d._id} data={d}></LanguagePlanCart>
        ))}
      </div>
    </div>
  );
};

export default Classes;
