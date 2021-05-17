import React from "react";
import Tabs from "../../singleComponent/Tabs";
const AppIntoduction = () => (
  <div>
    <div className="flex flex-col justify-center items-center">
      <p className="font-myfont text-3xl  mt-12 mb-4 border-b-2 border-blue-400 ">
        Аппликэйшны заавар
      </p>
      <p className="text-gray-500 my-4">
        SmartCar аппликэйшныг iOS болон Android үйлдлийн системтэй ухаалаг утас
        дээр суулгаж болно.
      </p>
    </div>
    <Tabs />
  </div>
);

export default AppIntoduction;
