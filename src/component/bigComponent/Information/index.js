import React from "react";
import OneInformation from "../../singleComponent/OneInformation";
const Information = () => (
  <div className="flex flex-col flex-wrap justify-center items-center">
    <h2 className="m-4  border-b-2 border-blue-500 text-2xl font-myfont text-black self-center mt-8">
      Мэдээ, мэдээлэл
    </h2>
    <p className=" text-gray-500 font-semibold self-center mb-6 self-center ">
      {" "}
      Та тээврийн хэрэгсэлтэй холбоотой цаг үеийн мэдээ мэдээллийг нэг дороос
      шуурхай авах боломжтой.
    </p>
    <OneInformation />
  </div>
);

export default Information;
