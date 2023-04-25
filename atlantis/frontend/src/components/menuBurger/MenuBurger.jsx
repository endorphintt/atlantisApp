import React from "react";
import { NavLink } from "react-router-dom";
import "./MenuBurger.scss"


const MenuBurger = (props) => {

    const links = [
        {adress: 'main', name: 'ГОЛОВНА', id: '01'},
        {adress: 'offers', name: 'НАШІ ПОСЛУГИ', id: '02'},
        {adress: 'about', name: 'ПРО НАС', id: '03'},
        {adress: 'blog', name: 'БЛОГ', id: '04'},       
        {adress: 'login', name: 'ЛОГІН', id: '05'},
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
