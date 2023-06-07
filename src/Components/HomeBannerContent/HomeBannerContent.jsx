import React from "react";
import BtnSolid from "../Buttons/BtnSolid";
import BtnOutLine from "../Buttons/BtnOutLine";
import "./HomeBannerContent.css";

const HomeBannerContent = ({
  title,
  subTitle,
  destination1,
  destination2,
  cStyle,
  bgImg
}) => {
  return (
    <div
    style={{backgroundImage: `url('${bgImg}')`}}
     className="bgBannerImg text-white bg-[black] bg-opacity-30"
     >
      <div className=" px-24 py-32 flex flex-col justify-center text-center w-1/2 mx-auto">
        <p>{subTitle}</p>
        <h3 className="text-3xl font-semibold mb-8 mt-5">{title}</h3>
        <div className="flex gap-3 justify-center">
          <BtnSolid destination={destination1} cStyle={cStyle}>
            SingUp Now
          </BtnSolid>
          <BtnOutLine destination={destination2} cStyle={cStyle}>
            Learn More
          </BtnOutLine>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerContent;
