import React from "react";
import info1 from "../../../assets/img/info1.jpg";
import info2 from "../../../assets/img/info2.jpg";
import info3 from "../../../assets/img/info3.jpg";
import info4 from "../../../assets/img/info4.jpg";
const OneInformation = () => (
  <div className="flex flex-col">
    <div className="flex space-x-8 mr-10 ml-10">
      <div
        className=" rounded-lg border-gray-300 border flex flex-row flex-wrap  justify-center  "
        style={{ width: "300px", height: "500px" }}
      >
        <img
          className=" rounded-lg shadow-xl h-72 hover:scale-90 transition-all duration-500 ease-in-out transform"
          src={info1}
          alt="tests "
        />
        <p className=" text-1xs font-sans text-blue-400 text-normal self-center items-center mx-4">
          Зуслангийн чиглэлд нийтийн тээвэр явж эхэлнэ
        </p>
        <div className="my-6">
          <a
            href="/#"
            className="bg-shoppyColor text-white px-4 py-3 rounded-lg hover:bg-blue-300 hover:text-purple-600"
          >
            {" "}
            Дэлгэрэнгүй
          </a>
        </div>
        <div className="flex flex-row justify-between content-around space-x-6 hover:text-shoppyColor cursor-pointer ">
          <p className="flex">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>{" "}
            <span className="mx-2"> 2021/05/17 </span>
          </p>
          <p className="flex">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
            <span className="mx-2">5 удаа үзсэн </span>
          </p>
        </div>
      </div>
      <div
        className=" rounded-lg border-gray-300 border flex flex-row flex-wrap  justify-center  "
        style={{ width: "300px", height: "500px" }}
      >
        <img
          href="/#"
          className=" rounded-lg shadow-xl h-72 hover:scale-90 transition-all duration-500 ease-in-out transform"
          src={info2}
          alt="tests "
        />
        <p className=" text-1xs font-sans text-blue-400 text-normal self-center items-center mx-4">
          Хот хооронд зорчих хөдөлгөөнийг энэ сарын 22-н хүртэл хязгаарласан
        </p>
        <div className="my-6">
          <a
            href="/#"
            className="bg-shoppyColor text-white px-4 py-3 rounded-lg hover:bg-blue-300 hover:text-purple-600"
          >
            {" "}
            Дэлгэрэнгүй
          </a>
        </div>
        <div className="flex flex-row justify-between content-around space-x-6 hover:text-shoppyColor cursor-pointer ">
          <p className="flex">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>{" "}
            <span className="mx-2"> 2021/05/10 </span>
          </p>
          <p className="flex">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
            <span className="mx-2">37 удаа үзсэн </span>
          </p>
        </div>
      </div>

      <div
        className=" rounded-lg border-gray-300 border flex flex-row flex-wrap  justify-center  "
        style={{ width: "300px", height: "500px" }}
      >
        <img
          className=" rounded-lg shadow-xl h-72 hover:scale-90 transition-all duration-500 ease-in-out transform"
          src={info3}
          alt="tests "
        />
        <p className=" text-1xs font-sans text-blue-400 text-normal self-center items-center mx-4">
          Нийслэлийн Засаг даргын захирамжид өөрчлөлт орлоо
        </p>
        <div className="my-6">
          <a
            href="/#"
            className="bg-shoppyColor text-white px-4 py-3 rounded-lg hover:bg-blue-300 hover:text-purple-600"
          >
            {" "}
            Дэлгэрэнгүй
          </a>
        </div>
        <div className="flex flex-row justify-between content-around space-x-6 hover:text-shoppyColor cursor-pointer ">
          <p className="flex">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>{" "}
            <span className="mx-2"> 2021/05/10 </span>
          </p>
          <p className="flex">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
            <span className="mx-2">33 удаа үзсэн </span>
          </p>
        </div>
      </div>
      <div
        className=" rounded-lg border-gray-300 border flex flex-row flex-wrap  justify-center  "
        style={{ width: "300px", height: "500px" }}
      >
        <img
          className=" rounded-lg shadow-xl h-72 self-center   hover:scale-90 transition-all duration-500 ease-in-out transform
      "
          src={info4}
          alt="tests "
        />
        <p className=" text-1xs font-sans text-blue-400 text-normal self-center items-center mx-4">
          Энхтайваны гүүрний замыг нээлээ
        </p>
        <div className="my-6">
          <a
            href="/#"
            className="bg-shoppyColor text-white px-4 py-3 rounded-lg hover:bg-blue-300 hover:text-purple-600"
          >
            {" "}
            Дэлгэрэнгүй
          </a>
        </div>
        <div className="flex flex-row justify-between content-around space-x-6 hover:text-shoppyColor cursor-pointer ">
          <p className="flex">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>{" "}
            <span className="mx-2"> 2021/05/08 </span>
          </p>
          <p className="flex">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
            <span className="mx-2">21 удаа үзсэн </span>
          </p>
        </div>
      </div>
    </div>
    <button className="flex self-center w-64 h-8 border border-shoppyColor rounded justify-center items-center text-shoppyColor my-16 hover:bg-blue-400 hover:text-white">
      Бүх мэдээ мэдээлэл харах{" "}
    </button>
  </div>
);

export default OneInformation;
