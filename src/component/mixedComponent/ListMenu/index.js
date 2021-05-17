import React from 'react'
import css from './_.module.css'
import Menu from  '../../singleComponent/Menu'
const ListMenu = (props) => (
    <div>
         <ul className={css.Menus} >
                <Menu active link='/Home'> Нүүр </Menu>
                <Menu link='/uilchilgeeg_hiih'> Үйлчилгээнүүд </Menu>
                <Menu link='https://smartcar.mn/#/about'> Смарткартын тухай </Menu>
                <Menu link='https://smartcar.mn/#/news/list'>  Мэдээ, Мэдээлэл </Menu>
                <Menu link='https://smartcar.mn/#/faq'> Тусламж </Menu>
            </ul>
            </div>
   
);
export default ListMenu