import React from "react";
import { NavLink } from "react-router-dom";
import './MenuBorder.scss'

const MenuBorder = (props) => {
    const links = [
        {adress: 'main', name: 'ГЛАВНАЯ', id: '01'},
        {adress: 'offers', name: 'НАШИ УСЛУГИ', id: '02'},
        {adress: 'about', name: 'О НАС', id: '03'},
        {adress: 'blog', name: 'БЛОГ', id: '04'},
        {adress: 'login', name: 'ЛОГИН', id: '05'},
    ]

    const updateMenu = (link) => {
        props.updateMenu(link)
    }

    return (
        <div className="menuBorder">
            <div className="menuLine">
                {links.map(link => {
                    return(
                        <div key={link.id} onClick={() => updateMenu(link)} className={link.id === props.activeMenuItem ? `menuBorder__item active` : "menuBorder__item"}>
                            <div className="menuBorder__num">{link.id}</div>
                            <span></span>
                            <div className="menuBorder__link">
                                <NavLink className='borderLink' key={link.id} to={'/' + link.adress}>{link.name}</NavLink>
                            </div>                         
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MenuBorder;
