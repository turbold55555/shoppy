import React from "react";
const Menu = ({ showContent, ...props }) => {
  const [show, setShow] = React.useState(false);

  return (
    <div id="nav-toggle" className="relative overflow-visible">
      <li
        className="m-3 hover:text-shoppyColor "
        onMouseOver={() => {
          showContent && setShow(true);
        }}
        onMouseLeave={() => {
          showContent && setShow(false);
        }}
      >
        <a href={"#"} className="text-black-600 font-medium">
          {props.children}{" "}
        </a>
      </li>
      <div
        id="nav-content"
        // className={
        //   !show
        //     ? "absolute flex-col top-16 h-20 w-80 bg-white rounded-md hidden"
        //     : "absolute flex flex-col top-16 h-20 w-80 bg-white rounded-md"
        // }
        className={`absolute flex flex-col
         top-16 h-20 w-80 bg-white rounded-md ${!show ? `hidden` : ``}`}
      >
        <div className="flex justify-center items-center h-12 self-start ml-4">
          Зогсоолуудын мэдээлэл
        </div>
        <div className="flex justify-center items-center h-12">
          Авто үйлчилгээ эрхлэгчидийн мэдээлэл
        </div>
      </div>
    </div>
  );
};

export default Menu;
