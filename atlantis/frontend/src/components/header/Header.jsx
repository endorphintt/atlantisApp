import React, {useContext, useState } from "react";
import './Header.scss'
import { useNavigate } from "react-router-dom"
import { MAIN_ROUTE } from "../utils/consts";
import { MyContext } from "../..";
import store from "../../redux/redux-store";
import { UpdateMenuActionCreator} from "../../redux/menuReducer";


const Header = () => {

    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();
    const state = useContext(MyContext)

    const onMenuIconClick = () => {
        setClicked(!clicked)
        store.dispatch(UpdateMenuActionCreator(!clicked))
    }

    console.log(state.getState())

    return (
        <div className="header">
            <img onClick={() => navigate(MAIN_ROUTE)} src="img/goldAtlantis2Small.png" alt="" className="header__img" />
            <div className={clicked ? `menu__icon active` : 'menu__icon'} onClick={onMenuIconClick}>
                <span></span>
            </div>
            {state.menuPage}
        </div>
    )
}

export default Header;