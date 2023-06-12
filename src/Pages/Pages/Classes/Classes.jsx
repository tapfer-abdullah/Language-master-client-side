/* eslint-disable no-unused-vars */
import Swal from "sweetalert2";
import CustomHelmet from "../../../Components/Helmet/CustomHelmet";
import LanguagePlanCart from "../../../Components/LanguagePlanCart/LanguagePlanCart";
import PageBanner from "../../../Components/PageBanner/PageBanner";
import { useQuery } from "@tanstack/react-query";
import { RotatingLines } from "react-loader-spinner";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthPage/AuthProvider";

const Classes = () => {
  const { user } = useContext(AuthContext);

  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["instructor"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/courses");
      // console.log(data)
      return res.json();
    },
  });

  const location = useLocation();
  // console.log(location.pathname)
  const navigate = useNavigate();

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

  const select = (data) => {
    // console.log(id);
    if (!user) {
      const isConfirm = confirm(
        "You are not sing in yet! Sing in to select it."
      );

      if (isConfirm) {
        navigate("/login", { state: location, replace: true });
        return
      }
    }

    // TODO: this code will be added to poyment page 
    // fetch(`http://localhost:5000/course/${data._id}`, {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({enrolled: data.enrolled+1}),
    //   })
    //   .then(res => res.json())
    //   .then(d => {
    //     console.log(d)
    //     if(d.modifiedCount >0){
    //       alert("Added to DB")
    //     }
    //   })


    const {name, price, availableSeats, instructor, instructorMail} = data;
      const cart = {email: user.email, courseName:name, price, availableSeats, instructor, instructorMail, status: "unpaid"}
      console.log(cart)

      fetch(`http://localhost:5000/course/${user.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
      })
      .then(res => res.json())
      .then(d => {
        console.log(d)
        if(d.insertedId){
          alert("Added successfully")
        }
      })
  };

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
          <LanguagePlanCart
            key={d._id}
            data={d}
            select={select}
          ></LanguagePlanCart>
        ))}
      </div>
    </div>
  );
};

export default Classes;
