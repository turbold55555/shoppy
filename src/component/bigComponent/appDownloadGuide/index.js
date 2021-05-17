import React from "react";
import imgs from "../../../assets/img/coverPhoto.jpg";
import downloadGuide from "../../../assets/img//donwloadGuide.png";
const AppDownloadGuide = () => (
  <div className="relative overflow-hidden" style={{ height: "700px" }}>
    <div className="absolute">
      <img className="object-cover object-center w-full h-full" src={imgs} />
    </div>
    <div className="absolute inset-0 flex  justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col">
          <p className="m-4  border-b-2 border-gray-100 text-2xl font-myfont text-gray-100 self-center">
            SmartCar.mn аппликэйшн татах
          </p>
          <p className="w-2/3 text-gray-300 font-semibold self-center mb-4">
            SmartCar аппликэйшныг iOS болон Android үйлдлийн системтэй ухаалаг
            утас дээр суулгаж болно.
          </p>
        </div>
        <div>
          <img
            src={downloadGuide}
            style={{ width: "1200px", height: "500px" }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default AppDownloadGuide;
