import React from "react";
import { NavLink } from "react-router-dom";
import "./MenuBurger.scss"


const MenuBurger = (props) => {

    const links = [
        {adress: 'main', name: 'ГЛАВНАЯ', id: '01'},
        {adress: 'about', name: 'О НАС', id: '02'},
        {adress: 'blog', name: 'БЛОГ', id: '03'},
        {adress: 'offers', name: 'НАШИ УСЛУГИ', id: '04'},
        {adress: 'login', name: 'ЛОГИН', id: '05'},
    ]

    return (
        <div className={props.menu ? `menuBurger active` : 'menuBurger'}>
            <div className="menu__links">
                {links.map(link => <NavLink onClick={props.updateMenu} key={link.id} to={'/' + link.adress}>{link.name}</NavLink>)}
            </div>
        </div>
    )
}

export default MenuBurger;
