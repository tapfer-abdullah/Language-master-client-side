/* eslint-disable no-unused-vars */
import React from "react";
import BtnSolid from "../Buttons/BtnSolid";
import Rating from "react-rating";
import { FiMail } from 'react-icons/fi';


const engImg = "https://i.ibb.co/MPZD6Q4/Flag-of-the-United-Kingdom.png";
const spnImg = "https://i.ibb.co/9r6hjvc/Spain-flag-300.png";
const chnImg = "https://i.ibb.co/845Hmgn/Flag-of-China.png";
const gerImg = "https://i.ibb.co/xYYgVtn/2560px-Flag-of-Germany-svg.png";
const frnImg = "https://i.ibb.co/k0Xwh6J/Flag-of-France.png";
const sdaImg = "https://i.ibb.co/HnhdhSj/Flag-of-Saudi-Arabia-svg.png";
const noImg = "https://i.ibb.co/DwfmK4q/depositphotos-86009122-stock-photo-languages-signpost.webp"

const InstroctorPageCard = ({language}) => {
  const {
    name,
    email,
    role,
    details,
    img,
    flag,
  } = {
    name: "Abdullah",
    email: "akdsjafkfjjdsj@jklajsdl",
    role: "Teacher",
    details:
      "Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    img: "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/1024px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png",
  };

  let photo;
  if(language == "English"){
    photo = engImg
  }
  else if(language == "French"){
    photo = frnImg
  }
  else if(language == "Spanish"){
    photo = spnImg
  }
  else if(language == "German"){
    photo = gerImg
  }
  else if(language == "China"){
    photo = chnImg
  }
  else if(language == "Arabic"){
    photo = sdaImg
  }
  else{
    photo = noImg
  }


  return (
    <div className="my-4">
      <div className="card w-96 bg-base-100 shadow-xl relative mx-auto">
        <figure className="px-5 pt-5">
          <img src={img} alt="Language Plan" className="rounded-md" />
        </figure>
        <div className="card-body relative">
          <img
            src={photo}
            className="border-4 border-white w-12 h-12 rounded-full absolute -top-6 right-16"
            alt=""
          />

          <h2 className="card-title flex justify-between"><span>{name}</span> <span className="text-my-primary">{role}</span></h2>
          <h2 className="flex items-center gap-1 text-base"><FiMail className="text-my-primary"></FiMail><span className="text-my-p">{email}</span></h2>
          {/* <p className="text-my-p">{details}</p> */}


        </div>
      </div>
    </div>
  );
};

export default InstroctorPageCard;
