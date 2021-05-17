import React from "react";
import "./style.css";
import Menu from "../../singleComponent/Menu";
const ListMenu = (props) => {
  return (
    <div>
      <ul className={"Menus"}>
        <Menu active link="/Home">
          Нүүр
        </Menu>
        <Menu link="/uilchilgeeg_hiih" showContent={true}>
          Үйлчилгээнүүд
        </Menu>
        <Menu link="https://smartcar.mn/#/about"> Смарткартын тухай </Menu>
        <Menu link="https://smartcar.mn/#/news/list"> Мэдээ, Мэдээлэл </Menu>
        <Menu link="https://smartcar.mn/#/faq"> Тусламж </Menu>
      </ul>
    </div>
  );
};
export default ListMenu;
