import React from "react";
import Birds from "../../mixedComponent/Birds";
// import City from "../../mixedComponent/City";
import SearchModel from "../../mixedComponent/SearchModel";
import SearchButton from "../../singleComponent/SearchButton";
import imgs from "../../../assets/img/coverPhoto.jpg";
import ios from "../../../assets/img/ios.svg";
import andriod from "../../../assets/img/andriod.svg";
const SearchContainer = () => (
  <>
    <div
      className="relative overflow-hidden bg-gray-300"
      style={{ height: "700px" }}
    >
      <div className="absolute">
        <img className="object-cover object-center w-full h-full" src={imgs} />
      </div>
      <div
        className="absolute inset-0 flex  justify-center items-center "
        style={{ height: "560px" }}
      >
        <div className="w-2/3  h-full  flex items-center  ml-32">
          <div className="relative mt-24 ml-32 ">
            <p className="text-white text-4xl font-myfont w-3/6">
              Тээврийн хэрэгслийн татварыг онлайнаар төлөх боломжтой боллоо.
            </p>
            <p className=" text-sm  w-4/6  text-gray-300 mt-4 font-semibold font-normal">
              Тээврийн хэрэгсэлтэй холбоотой мэдээлэл, үйлчилгээг иргэдэд нэг
              дороос өгөх боломжийг бүрдүүлэн ажиллахад тээврийн хэрэгслийн
              нэгдсэн цахим үйлчилгээ smartcar системийн зорилго оршино.
            </p>
            <div className="flex flex-row ">
              <img
                className="w-32 h-48 m-4"
                src={ios}
                onClick={() => alert("App Store руу шилжих")}
              />
              <img
                className="w-32 h-48 m-4"
                src={andriod}
                onClick={() => alert("Android Store руу шилжих")}
              />
            </div>
          </div>
        </div>
        <div className="w-1/3 h-full  flex  justify-center items-center  mr-48">
          <SearchModel />
        </div>
      </div>

      {/* <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl-grid-cols-2">
      <div>111</div> 
    <SearchModel /> 

    {/* <SearchButton /> */}
      {/* </div> */}
      <div className="absolute bottom-0 w-full">
        <Birds />
      </div>
    </div>
  </>
);

export default SearchContainer;
