import React from "react";
import { connect } from "react-redux";
import { UpdateMenuActionCreator } from "../../redux/menuReducer";
import MenuBorder from "./menuBorder";

let mapStateToProps = (state) => {
    return {
        activeMenuItem: state.menuPage.activeMenuItem,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateMenu: (link) => {
            dispatch(UpdateMenuActionCreator(link.id))
        }
    }
}

const MenuBorderContainer = connect(mapStateToProps, mapDispatchToProps)(MenuBorder)

export default MenuBorderContainer;