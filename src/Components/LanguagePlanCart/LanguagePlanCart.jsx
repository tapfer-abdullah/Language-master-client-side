/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import BtnSolid from "../Buttons/BtnSolid";
import { FaPlayCircle } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { AiFillDollarCircle } from "react-icons/ai";
import Rating from "react-rating";



const engImg = "https://i.ibb.co/MPZD6Q4/Flag-of-the-United-Kingdom.png";
const spnImg = "https://i.ibb.co/9r6hjvc/Spain-flag-300.png";
const chnImg = "https://i.ibb.co/845Hmgn/Flag-of-China.png";
const gerImg = "https://i.ibb.co/xYYgVtn/2560px-Flag-of-Germany-svg.png";
const frnImg = "https://i.ibb.co/k0Xwh6J/Flag-of-France.png";
const sdaImg = "https://i.ibb.co/HnhdhSj/Flag-of-Saudi-Arabia-svg.png";
const banImg = "https://flagdownload.com/wp-content/uploads/Flag_of_Bangladesh_Flat_Round-256x256.png"
const noImg = "https://i.ibb.co/DwfmK4q/depositphotos-86009122-stock-photo-languages-signpost.webp"


const LanguagePlanCart = ({data}) => {
  // console.log(data)
  const {name, language, price, image, availableSeats, instructor} = data;
  // const {
  //   name,
  //   language,
  //   price,
  //   img,

  //   flag,
  //   title,
  //   availableSeat,
  // } = {
  //   name: "ABBBBBBBB",
  //   language: "English",
  //   price: 150,
  //   availableSeat: 50,
  //   details:
  //     "Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
  //   lesson: 20,
  //   students: 1500,
  //   rating: 4.5,
  //   title: "English for beginner",
  //   img: "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
  //   flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/1024px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png",
  // };

  let photo;
  if(name == "English"){
    photo = engImg
  }
  else if(name == "French"){
    photo = frnImg
  }
  else if(name == "Spanish"){
    photo = spnImg
  }
  else if(name == "German"){
    photo = gerImg
  }
  else if(name == "China"){
    photo = chnImg
  }
  else if(name == "Arabic"){
    photo = sdaImg
  }
  else if(name == "Bangla"){
    photo = banImg
  }
  else{
    photo = noImg
  }


  return (
    <div className="my-3">
      <div className="card w-96 bg-base-100 shadow-xl relative mx-auto">
        <figure className="px-5 pt-5">
          <img src={image} alt="Language Plan" className="rounded-md h-[230px] w-[350px]" />
        </figure>
        <div className="card-body relative">
          <img
            src={photo}
            className="border-4 border-white w-12 h-12 rounded-full absolute -top-6 right-16"
            alt=""
          />

          <h2 className="card-title">{name}</h2>
          <p className="text-my-primary font-semibold">Instructor: <span className="text-[black] font-normal">{instructor}</span></p>

          <div className="flex justify-between">
            <p className="text-end mr-2 flex items-center justify-start text-my-primary font-semibold">
                Price:
                <span className="text-[black] font-normal"> <span className="ml-1">${price}</span></span>
            </p>
            <p className="text-end mr-2 flex items-center justify-end">
              <HiUserGroup className="text-white p-1 rounded-full text-xl mr-1 bg-my-primary"></HiUserGroup>{" "}
              {availableSeats}{" "}
              <span className="text-my-p ml-1">Seats available</span>
            </p>
          </div>

          <div className="divider"></div>

          <div className="flex justify-center items-center">
            <BtnSolid cStyle={`btn-sm`} destination={`/`}>
              Select
            </BtnSolid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguagePlanCart;
