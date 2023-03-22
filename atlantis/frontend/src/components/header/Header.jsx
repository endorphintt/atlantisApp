import React, {useContext, useState } from "react";
import './Header.scss'
import { useNavigate } from "react-router-dom"
import { MAIN_ROUTE } from "../utils/consts";



const Header = (props) => {
    const navigate = useNavigate();
    
    return (
        <div className="header">
            <img onClick={() => navigate(MAIN_ROUTE)} src="img/blueAtlantisLogo.png" alt="" className="header__img" />
            <div onClick={props.updateMenu} className={props.menu ? `menu__icon active` : 'menu__icon'} >
                <span></span>
            </div>          
        </div>
    )
}

export default Header;