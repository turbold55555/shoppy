import React from "react";
import OneService from "../../singleComponent/OneService";
const Services = () => (
  <div className="p-12">
    <div className="flex flex-col justify-center items-center mt-8">
      <p className="font-medium text-2xl font-myfont mb-4 border-b-2 border-blue-400 box-content">
        Үйлчилгээнүүд
      </p>
      <p className="text-gray-500 text-base">
        Тээврийн хэрэгсэлтэй холбоотой үйлчилгээнүүдийг та нэг дороос авах
        боломжтой.
      </p>
    </div>
    <OneService />
  </div>
);
export default Services;
