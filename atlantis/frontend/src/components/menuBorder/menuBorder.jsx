import React from "react";
import { NavLink } from "react-router-dom";
import './MenuBorder.scss'

const MenuBorder = (props) => {
    const links = [
        {adress: 'main', name: 'ГЛАВНАЯ', id: '01'},
        {adress: 'offers', name: 'НАШИ УСЛУГИ', id: '04'},
        {adress: 'about', name: 'О НАС', id: '02'},
        {adress: 'blog', name: 'БЛОГ', id: '03'},
        {adress: 'login', name: 'ЛОГИН', id: '05'},
    ]

    return (
        <div className="menuBorder">
            <div className="menuLine">
                {links.map(link => {
                    return(
                        <div key={link.id} onClick={() => props.onMenuLinkClick(link)} className={link.id === props.active ? `menuBorder__item active` : "menuBorder__item"}>
                            <div onClick={() => props.onMenuLinkClick(link)} className="menuBorder__num">{link.id}</div>
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
