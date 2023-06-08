import React from "react";
import BtnSolid from "../Buttons/BtnSolid";
import { FaPlayCircle } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import Rating from "react-rating";

const LanguagePlanCart = () => {
    
  const {
    language,
    price,
    duration,
    details,
    lesson,
    students,
    img,
    rating,
    flag,
    title,
  } = {
    language: "English",
    price: 150,
    duration: "Life time",
    details:
      "Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    lesson: 20,
    students: 1500,
    rating: 4.5,
    title: "English for beginner",
    img: "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/1024px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png",
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl relative mx-auto">
        <figure className="px-5 pt-5">
          <img src={img} alt="Language Plan" className="rounded-md" />
        </figure>
        <div className="card-body relative">
          <img
            src={flag}
            className="border-4 border-white w-12 h-12 rounded-full absolute -top-6 right-16"
            alt=""
          />

          <p className="font-semibold text-my-primary">
            ${price}/<span className="text-my-p">{duration}</span>
          </p>
          <h2 className="card-title">{title}</h2>
          <p className="text-my-p">{details}</p>
          <div className="flex justify-between">
            <p className="text-end mr-2 flex items-center justify-start">
              <FaPlayCircle className="text-xl text-my-primary mr-1"></FaPlayCircle>
              {lesson} <span className="text-my-p ml-1">Lesson</span>
            </p>
            <p className="text-end mr-2 flex items-center justify-end">
              <HiUserGroup className="text-white p-1 rounded-full text-xl mr-1 bg-my-primary"></HiUserGroup>{" "}
              {students} <span className="text-my-p ml-1">Students</span>
            </p>
          </div>

          <div className="divider"></div>

          <div className="flex justify-between items-center">
            <p>
              {" "}
              <Rating initialRating={2.5} /> {rating}
            </p>
            <BtnSolid cStyle={`btn-sm`} destination={`/`}>
              Enrol Now
            </BtnSolid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguagePlanCart;
