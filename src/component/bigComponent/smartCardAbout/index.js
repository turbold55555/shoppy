import React from "react";
import Videos from "../../singleComponent/Videos";
import imgs from "../../../assets/img/coverPhoto.jpg";
const SmartCardAbout = () => (
  <div className="relative overflow-hidden" style={{ height: "600px" }}>
    <div className="absolute">
      <img className="object-cover object-center w-full h-full" src={imgs} />
    </div>
    <div className="absolute inset-0 flex  justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <p className="m-4  border-b-2 border-gray-100 text-2xl font-myfont text-gray-100">
          Смарткарын тухай
        </p>
        <p className="w-2/3 text-gray-300 font-semibold self-center mb-4">
          SmartCar цахим үйлчилгээ нь тээврийн хэрэгслийн эзэмшигчдэд зориулсан
          тээврийн хэрэгслийн нэгдсэн цахим үйлчилгээ юм.
        </p>
        <Videos />
      </div>
    </div>
  </div>
);

export default SmartCardAbout;
