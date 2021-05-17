import React from "react";
import imgs from "../../../assets/img/coverPhoto.jpg";
import shoppy from "../../../assets/img//shoppy.jpeg";
const Footer = () => (
  <div>
    <div
      className="relative overflow-hidden"
      style={{ height: "250px", width: "100%" }}
    >
      <div className="absolute">
        <img className="object-cover object-center w-full h-full" src={imgs} />
      </div>
      <div className="absolute inset-0 flex   items-center justify-evenly">
        <div className=" flex flex-col justify-center items-center">
          <h2 className="text-xl  border-b-2 tsagaan">Холбоо барих</h2>
          <p>
            <span className="budegtsagaan"> Хаяг:</span>
            <span className="tsagaan">
              Монгол улс, Улаанбаатар хот, Чингэлтэй дүүрэг, Бага тойруу - 15160
              Хангарди ордон 7-н давхар{" "}
            </span>
          </p>
          <p>
            <span className="budegtsagaan"> Санал хүсэлтийн утас:</span>{" "}
            <span className="tsagaan"> 1800-1200 </span>{" "}
          </p>
          <p>
            <span className="budegtsagaan"> Утас:</span>{" "}
            <span className="tsagaan"> 1800-1200 </span>{" "}
          </p>
          <p>
            <span className="budegtsagaan"> Имэйл:</span>{" "}
            <span className="tsagaan"> smartcar@ulaanbaatar.mn </span>{" "}
          </p>
        </div>
        <div className=" flex flex-col justify-center items-center mb-16">
          <h2
            className="text-xl  border-b-2 tsagaan
        "
          >
            Цэс
          </h2>
          <p className="budegtsagaan">Үйлчилгээний нөхцөл Нууцлалын баталгаа</p>
        </div>
        <div>
          <h2
            className="text-xl  border-b-2 tsagaan
        "
          >
            Хэрэглэгч
          </h2>
          <p>
            <span className="budegtsagaan"> Өнөөдөр:</span>
            <span className="tsagaan"> 5,763</span>
          </p>
          <p>
            <span className="budegtsagaan">Энэ 7 хоног:</span>
            <span className="tsagaan"> 5,763</span>
          </p>
          <p>
            <span className="budegtsagaan">Энэ сар:</span>
            <span className="tsagaan"> 151,064</span>
          </p>

          <p>
            <span className="budegtsagaan">Нийт:</span>{" "}
            <span className="tsagaan"> 5,331,179 </span>
          </p>
        </div>
      </div>
    </div>
    <div className="w-auto h-16 flex flex-row flex flex-wrap justify-around bg-blue-800">
      <div className="flex justify-center items-center ">
        <img src={shoppy} className="w-8" />
        <p className="ml-4 tsagaan">© 2021 Shoppy.mn</p>
      </div>
      <div className="flex flex-col justify-center  items-center">
        <span className="text-xs tsagaan ">Developed by</span>
        <p className="budegtsagaan">Turbolds</p>
      </div>
    </div>
  </div>
);

export default Footer;
