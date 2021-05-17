import React from "react";
const Menu = (props) => (
  <div>
    <li className="m-3 hover:text-shoppyColor ">
      <a href={props.link} className="text-black-600 font-medium">
        {props.children}{" "}
      </a>
    </li>
  </div>
);

export default Menu;
